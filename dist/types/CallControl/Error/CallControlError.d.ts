export declare class CallControlError {
    private code;
    private message;
    private callID?;
    constructor(code: number, message: string, callID?: string);
    getCode(): string;
    getRawCode(): number;
    getMessage(): string;
    getCallID(): string;
    static make(data: any): CallControlError;
}
