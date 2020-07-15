import {ClearvoxSocketClient} from "../Client/ClearvoxSocketClient";
import {Channel} from "./Call/Channel";
import {Action} from "./Action/Action";
import {MakeCallAction} from "./Action/MakeCallAction";
import {GetCalls} from "./Action/GetCalls";
import {HangupAction} from "./Action/HangupAction";
import {ModifyCallAction} from "./Action/ModifyCallAction";
import {ClearvoxAPIClient} from "../Client/ClearvoxAPIClient";
import {AnswerAction} from "./Action/AnswerAction";
import {BlindTransferAction} from "./Action/BlindTransferAction";

import * as uuid from "uuid/v4";
import * as EventEmitter from "events";
import {BridgeAction} from "./Action/BridgeAction";
import {GetPhoneCapabilitiesAction} from "./Action/GetPhoneCapabilitiesAction";
import {PhoneCapabilities} from "./Phone/PhoneCapabilities";
import {CallControlError} from "./Error/CallControlError";
import {InviteToGroupCallAction} from "./Action/InviteToGroupCallAction";
import {MakeGroupCallAction} from "./Action/MakeGroupCallAction";

export class CallControl extends EventEmitter {
    private callsPromise: Promise<any[]> = Promise.resolve([]);
    private channels: Channel[];

    constructor(private socketClient: ClearvoxSocketClient) {
        super();
        this.init();
    }

    static connect(serverURL: string, apiKey: string) {
        const clearvoxAPIClient = new ClearvoxAPIClient(serverURL, apiKey);

        return clearvoxAPIClient.getSocketInfo().then((socketInfo) => {
            const clearvoxSocketClient = new ClearvoxSocketClient(serverURL, socketInfo.token, socketInfo.accountID);
            return new CallControl(clearvoxSocketClient);
        });
    }

    private init() {
        this.socketClient.on('call:start', (data) => {
            const newChannel = Channel.make(data);
            this.channels.push(newChannel);
            this.emit('call:start', newChannel);
            if (newChannel.getReference()) {
                this.emit('start:' + newChannel.getReference(), newChannel);
            }
        });

        this.socketClient.on('call:update', (data) => {
            let channel: Channel;

            if ('old_call_id' in data) {
                channel = this.findChannel(data.old_call_id, data.channel_id);
            } else {
                channel = this.findChannel(data.call_id, data.channel_id);
            }

            if (channel) {
                channel = Channel.make(data, channel);
                this.emit('call:update', channel);
                channel.emit('update', channel);
            }
        });

        this.socketClient.on('call:end', (data) => {
            let channel = this.findChannel(data.call_id, data.channel_id);
            channel = Channel.make(data, channel);

            this.emit('call:end', channel);
            channel.emit('end', channel);
        });

        this.socketClient.on('call:error', (error) => {
            const callControlError = CallControlError.make(error);

            let channels = this.findCallChannels(callControlError.getCallID());

            channels.forEach((channel: Channel) => {
                channel.emit('error', callControlError);
            });
        });

        return this.reloadChannels();
    }

    findChannel(callID: string, channelID: string): Channel {
        return this.channels.find(channel => channel.getCallID() === callID && channel.getChannelID() === channelID);
    }

    findCallChannels(callID: string): Channel[] {
        return this.channels.filter(channel => channel.getCallID() === callID);
    }

    private sendAction(action: Action): void {
        let data: { [key: string]: any } = {
            action: action.getName(),
            params: action.getParams(),
        };

        if (action instanceof ModifyCallAction) {
            data.call_id = action.getCallID();
        }

        this.socketClient.emit('callcontrol', data);
    }

    async getChannels(): Promise<Channel[]> {
        await this.callsPromise;

        return this.channels;
    }

    private reloadChannels(): Promise<Channel[]> {
        this.callsPromise = new Promise((resolve) => {
            this.sendAction(new GetCalls());

            this.socketClient.once('calls', (data: any[]) => {
                this.channels = data.map((channelData) => {
                    return Channel.make(channelData);
                });

                resolve(this.channels);
                return;
            });
        });

        return this.callsPromise;
    }

    public onChannelStart(callback: (channel: Channel) => any): void {
        this.on('call:start', callback);
    }

    public onChannelEnd(callback: (channel: Channel) => any): void {
        this.on('call:end', callback);
    }

    public onChannelUpdate(callback: (channel: Channel) => any): void {
        this.on('call:update', callback);
    }

    public dial(number: string, phone?: string, autoAnswer?: boolean, otherTransferCallID?: string): Promise<Channel> {
        return new Promise((resolve, reject) => {

            const callReference = uuid();
            this.sendAction(new MakeCallAction(number, phone, autoAnswer, callReference, otherTransferCallID));

            setTimeout(() => {
                this.removeListener('start:' + callReference, resolve);
                reject(new Error('timeout'));
            }, 2000);

            this.once('start:' + callReference, resolve);
        });
    }

    public groupCall(numbers: string[], phone?: string, autoAnswer?: boolean): Promise<Channel> {
        return new Promise((resolve, reject) => {

            const callReference = uuid();

            this.sendAction(new MakeGroupCallAction(numbers, phone, autoAnswer, callReference));

            setTimeout(() => {
                this.removeListener('start:' + callReference, resolve);
                reject(new Error('timeout'));
            }, 2000);

            this.once('start:' + callReference, resolve);
        });
    }

    public blindTransfer(callID: string, number: string, channelToTransfer?: Channel): void {
        const transfereePhoneID = channelToTransfer ? channelToTransfer.getPhoneID() : undefined;

        this.sendAction(new BlindTransferAction(callID, number, transfereePhoneID));
    }

    public hangup(channel: Channel): void {
        this.sendAction(new HangupAction(channel.getCallID()));
    }

    public answer(channel: Channel, phone?: string): void {
        this.sendAction(new AnswerAction(channel.getCallID(), phone));
    }

    public bridge(callID: string, otherCallID: string, channelToBridge?: Channel, otherChannelToBridge?: Channel): void {
        this.sendAction(new BridgeAction(
            callID,
            otherCallID,
            channelToBridge ? channelToBridge.getPhoneID() : undefined,
            otherChannelToBridge ? otherChannelToBridge.getPhoneID() : undefined,
        ));
    }

    public inviteToCall(channel: Channel, numbers: string[]): void {
        this.sendAction(new InviteToGroupCallAction(channel.getCallID(), numbers));
    }

    public getPhoneCapabilities(phone: string): Promise<{ phoneID: string, capabilities: PhoneCapabilities }> {
        return new Promise((resolve, reject) => {
            this.sendAction(new GetPhoneCapabilitiesAction(phone));

            const onPhoneCapabilities = (data: any) => {
                if (data.requestedPhone === phone) {
                    resolve({phoneID: data.phone, capabilities: data.capabilities});
                }
            };

            setTimeout(() => {
                this.removeListener('phone:capabilities', onPhoneCapabilities);
                reject(new Error('timeout'));
            }, 2000);

            this.socketClient.on('phone:capabilities', onPhoneCapabilities);
        });
    }
}