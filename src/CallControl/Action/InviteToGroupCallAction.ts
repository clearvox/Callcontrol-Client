import {ModifyCallAction} from "./ModifyCallAction";

export class InviteToGroupCallAction extends ModifyCallAction {
    constructor(callID: string, numbers: string[]) {
        super(callID, 'inviteToGroupCall', {
            numbers: numbers,
        });
    }
}