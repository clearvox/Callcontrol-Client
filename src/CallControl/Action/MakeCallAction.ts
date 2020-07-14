import {Action} from "./Action";

export class MakeCallAction extends Action {
    constructor(number: string, phone?: string, autoAnswer?: boolean, callReference?: string, otherTransferCallID?: string) {
        super('makeCall', {
            number: number,
            phone: phone,
            auto_answer: autoAnswer !== undefined ? Number(autoAnswer) : -1,
            call_reference: callReference,
            other_transfer_call_id: otherTransferCallID,
        });
    }
}