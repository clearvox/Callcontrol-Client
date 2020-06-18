import {Action} from "./Action";

export class MakeGroupCallAction extends Action {
    constructor(numbers: string[], phone?: string, autoAnswer?: boolean, callReference?: string) {
        super('makeGroupCall', {
            numbers: numbers,
            phone: phone,
            auto_answer: autoAnswer === undefined ? Number(autoAnswer) : -1,
            call_reference: callReference,
        });
    }
}