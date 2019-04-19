import {ErrorCodes} from "./ErrorCodes";

export class CallControlError {
    constructor(
        private code: number,
        private message: string,
        private callID?: string) {

    }

    getCode() {
        return ErrorCodes[this.code];
    }

    getRawCode() {
        return this.code;
    }

    getMessage() {
        return this.message;
    }

    getCallID() {
        return this.callID;
    }

    static make(data: any) {
        return new CallControlError(data.code, data.message, data.call_id);
    }


}