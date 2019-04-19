import {ModifyCallAction} from "./ModifyCallAction";

export class BridgeAction extends ModifyCallAction {
    constructor(callID: string, otherCallID: string, phoneID?: string, otherPhoneID?: string) {
        super(callID, 'bridge', {
            other_call_id: otherCallID,
            phone_id: phoneID,
            other_phone_id: otherPhoneID,
        });
    }
}