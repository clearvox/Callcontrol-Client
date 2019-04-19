import {Action} from "./Action";

export abstract class ModifyCallAction extends Action {
    protected constructor(
        private callID: string,
        actionName: string,
        params: { [key: string]: any } = {}
    ) {
        super(actionName, params);
    }

    getCallID(): string {
        return this.callID;
    }
}