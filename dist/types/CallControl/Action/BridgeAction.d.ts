import { ModifyCallAction } from "./ModifyCallAction";
export declare class BridgeAction extends ModifyCallAction {
    constructor(callID: string, otherCallID: string, phoneID?: string, otherPhoneID?: string);
}
