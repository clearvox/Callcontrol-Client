import {ModifyCallAction} from "./ModifyCallAction";

export class HangupAction extends ModifyCallAction {
    constructor(callID: string) {
        super(callID, 'hangup');
    }
}