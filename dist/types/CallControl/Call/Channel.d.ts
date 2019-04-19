/// <reference types="node" />
import * as EventEmitter from 'events';
import { ChannelState } from "./ChannelState";
import { CallOrigin } from "./CallOrigin/CallOrigin";
import { ChannelDirection } from "./ChannelDirection";
import { CallControlError } from "../Error/CallControlError";
export declare class Channel extends EventEmitter {
    private callID;
    private channelID;
    private phoneID;
    answered: boolean;
    isRecording: boolean;
    name: string;
    phoneHumanName: string;
    number: string;
    direction: ChannelDirection;
    originate: boolean;
    state: ChannelState;
    duration: number;
    otherTransferCallID: string;
    origins: CallOrigin[];
    oldCallID: string;
    private callReference;
    constructor(callID: string, channelID: string, phoneID: string);
    onUpdate(callback: (channel: Channel) => any): void;
    onEnd(callback: (channel: Channel) => any): void;
    onError(callback: (error: CallControlError) => any): void;
    getCallID(): string;
    getChannelID(): string;
    getPhoneID(): string;
    getReference(): string;
    static make(data: any, channel?: Channel): Channel;
}
