import {ModifyCallAction} from "./ModifyCallAction";

export class BlindTransferAction extends ModifyCallAction {
    constructor(callID: string, number: string, phoneID?: string) {
        super(callID, 'blindTransfer', {
            number: number,
            phone_id: phoneID,
        });
    }
}