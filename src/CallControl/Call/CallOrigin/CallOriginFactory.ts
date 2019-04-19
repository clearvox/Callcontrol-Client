import {CallOriginType} from "./CallOriginType";
import {UserRouterCallOrigin} from "./UserRouterCallOrigin";
import {AccountRouterCallOrigin} from "./AccountRouterCallOrigin";
import {QueueCallOrigin} from "./QueueCallOrigin";

export class CallOriginFactory {
    static make(data: {type: CallOriginType, [key: string]: any}) {
        switch (data.type) {
            case CallOriginType.USER_ROUTER:
                return new UserRouterCallOrigin(data.user_router_id);
            case CallOriginType.ACCOUNT_ROUTER:
                return new AccountRouterCallOrigin(data.account_router_id);
            case CallOriginType.QUEUE:
                return new QueueCallOrigin(data.queue_id);
        }
    }
}