import {CallOrigin} from "./CallOrigin";
import {CallOriginType} from "./CallOriginType";

export class AccountRouterCallOrigin extends CallOrigin {
    constructor(private routerID: string) {
        super(CallOriginType.ACCOUNT_ROUTER);
    }

    getRouterID() {
        return this.routerID;
    }
}