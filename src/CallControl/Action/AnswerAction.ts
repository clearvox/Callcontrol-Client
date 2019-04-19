import {ModifyCallAction} from "./ModifyCallAction";

export class AnswerAction extends ModifyCallAction {
    constructor(callID: string, phone?: string) {
        super(callID, 'answer', {
            phone: phone,
        });
    }
}