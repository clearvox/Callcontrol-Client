import { Action } from "./Action";
export declare abstract class ModifyCallAction extends Action {
    private callID;
    protected constructor(callID: string, actionName: string, params?: {
        [key: string]: any;
    });
    getCallID(): string;
}
