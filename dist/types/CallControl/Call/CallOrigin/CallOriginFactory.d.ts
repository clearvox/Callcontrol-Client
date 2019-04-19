import { CallOriginType } from "./CallOriginType";
import { UserRouterCallOrigin } from "./UserRouterCallOrigin";
import { AccountRouterCallOrigin } from "./AccountRouterCallOrigin";
import { QueueCallOrigin } from "./QueueCallOrigin";
export declare class CallOriginFactory {
    static make(data: {
        type: CallOriginType;
        [key: string]: any;
    }): UserRouterCallOrigin | AccountRouterCallOrigin | QueueCallOrigin;
}
