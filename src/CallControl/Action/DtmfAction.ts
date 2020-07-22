import {ModifyCallAction} from "./ModifyCallAction";

export class DtmfAction extends ModifyCallAction {
    constructor(callID: string, digit: string, phoneID?: string) {
        super(callID, 'dtmf', {
            digit: digit,
            phone_id: phoneID
        });
    }
}