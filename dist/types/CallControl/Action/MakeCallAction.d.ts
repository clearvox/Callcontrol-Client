import { Action } from "./Action";
export declare class MakeCallAction extends Action {
    constructor(number: string, phone?: string, autoAnswer?: boolean, callReference?: string);
}
