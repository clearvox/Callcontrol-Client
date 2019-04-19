import { CallOrigin } from "./CallOrigin";
export declare class UserRouterCallOrigin extends CallOrigin {
    private routerID;
    constructor(routerID: string);
    getRouterID(): string;
}
