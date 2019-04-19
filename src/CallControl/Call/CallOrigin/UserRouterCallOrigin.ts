import {CallOrigin} from "./CallOrigin";
import {CallOriginType} from "./CallOriginType";

export class UserRouterCallOrigin extends CallOrigin {
    constructor(private routerID: string) {
        super(CallOriginType.USER_ROUTER);
    }

    getRouterID() {
        return this.routerID;
    }
}