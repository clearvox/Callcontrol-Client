import * as EventEmitter from 'events';
import {ChannelState} from "./ChannelState";
import {CallOrigin} from "./CallOrigin/CallOrigin";
import {CallOriginFactory} from "./CallOrigin/CallOriginFactory";
import {ChannelDirection} from "./ChannelDirection";
import {CallControlError} from "../Error/CallControlError";

export class Channel extends EventEmitter {
    public answered: boolean = false;
    public isRecording: boolean;
    public name: string;
    public phoneHumanName: string;
    public number: string;
    public direction: ChannelDirection;
    public originate: boolean = false;
    public state: ChannelState;
    public duration: number;
    public otherTransferCallID: string;
    public origins: CallOrigin[] = [];
    public oldCallID: string;
    private callReference: string;

    constructor(private callID: string, private channelID: string, private phoneID: string) {
        super();
    }

    onUpdate(callback: (channel: Channel) => any) {
        this.on('update', callback);
    }

    onEnd(callback: (channel: Channel) => any) {
        this.on('end', callback);
    }

    onError(callback: (error: CallControlError) => any) {
        this.on('error', callback);
    }

    getCallID() {
        return this.callID;
    }

    getChannelID() {
        return this.channelID;
    }

    getPhoneID() {
        return this.phoneID;
    }

    getReference() {
        return this.callReference;
    }

    static make(data: any, channel: Channel = null): Channel {
        if (!channel) {
            channel = new Channel(data.call_id, data.channel_id, data.phone_id);
        }

        channel.answered = data.hasOwnProperty('answered') ? data.answered : channel.answered;
        channel.number = data.hasOwnProperty('number') ? data.number : channel.number;
        channel.name = data.hasOwnProperty('name') ? data.name : channel.name;
        channel.direction = data.hasOwnProperty('direction') ? data.direction : channel.direction;
        channel.phoneHumanName = data.hasOwnProperty('phone_human_name') ? data.phone_human_name : channel.phoneHumanName;
        channel.originate = data.hasOwnProperty('originate') ? data.originate : channel.originate;
        channel.state = data.hasOwnProperty('state') ? data.state : channel.state;
        channel.duration = data.hasOwnProperty('duration') ? data.duration : channel.duration;
        channel.otherTransferCallID = data.hasOwnProperty('other_transfer_call_id') ? data.other_transfer_call_id : channel.otherTransferCallID;
        channel.isRecording = data.hasOwnProperty('is_recording') ? data.is_recording : channel.isRecording;

        if (data.hasOwnProperty('origin')) {
            channel.origins.push(CallOriginFactory.make(data.origin));
        }

        if (data.hasOwnProperty('old_call_id')) {
            channel.oldCallID = data.old_call_id;
            channel.callID = data.call_id;
        }

        channel.callReference = data.hasOwnProperty('call_reference') ? data.call_reference : channel.callReference;

        return channel;
    }
}