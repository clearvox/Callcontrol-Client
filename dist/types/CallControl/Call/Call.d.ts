/// <reference types="node" />
import * as EventEmitter from 'events';
import { CallState } from "./CallState";
import { CallOrigin } from "./CallOrigin/CallOrigin";
import { CallDirection } from "./CallDirection";
import { CallControlError } from "../Error/CallControlError";
export declare class Call extends EventEmitter {
    private callID;
    private channelID;
    private phoneID;
    answered: boolean;
    isRecording: boolean;
    name: string;
    phoneHumanName: string;
    number: string;
    direction: CallDirection;
    originate: boolean;
    state: CallState;
    duration: number;
    otherTransferCallID: string;
    origins: CallOrigin[];
    oldCallID: string;
    private callReference;
    constructor(callID: string, channelID: string, phoneID: string);
    onUpdate(callback: (call: Call) => any): void;
    onEnd(callback: (call: Call) => any): void;
    onError(callback: (error: CallControlError) => any): void;
    getCallID(): string;
    getChannelID(): string;
    getPhoneID(): string;
    getCallReference(): string;
    static make(data: any, call?: Call): Call;
}
