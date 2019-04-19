/// <reference types="node" />
import { ClearvoxSocketClient } from "../Client/ClearvoxSocketClient";
import { Channel } from "./Call/Channel";
import * as EventEmitter from "events";
import { PhoneCapabilities } from "./Phone/PhoneCapabilities";
export declare class CallControl extends EventEmitter {
    private socketClient;
    private callsPromise;
    private channels;
    constructor(socketClient: ClearvoxSocketClient);
    static connect(serverURL: string, apiKey: string): Promise<CallControl>;
    private init;
    findChannel(callID: string, channelID: string): Channel;
    findCallChannels(callID: string): Channel[];
    private sendAction;
    getChannels(): Promise<Channel[]>;
    private reloadChannels;
    onChannelStart(callback: (channel: Channel) => any): void;
    onChannelEnd(callback: (channel: Channel) => any): void;
    onChannelUpdate(callback: (channel: Channel) => any): void;
    dial(number: string, phone?: string, autoAnswer?: boolean): Promise<Channel>;
    blindTransfer(callID: string, number: string, channelToTransfer?: Channel): void;
    hangup(channel: Channel): void;
    answer(channel: Channel, phone?: string): void;
    bridge(callID: string, otherCallID: string, channelToBridge?: Channel, otherChannelToBridge?: Channel): void;
    getPhoneCapabilities(phone: string): Promise<{
        phoneID: string;
        capabilities: PhoneCapabilities;
    }>;
}
