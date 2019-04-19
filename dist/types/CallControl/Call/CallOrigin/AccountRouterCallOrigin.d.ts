import { CallOrigin } from "./CallOrigin";
export declare class AccountRouterCallOrigin extends CallOrigin {
    private routerID;
    constructor(routerID: string);
    getRouterID(): string;
}
