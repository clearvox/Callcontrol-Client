import {CallOrigin} from "./CallOrigin";
import {CallOriginType} from "./CallOriginType";

export class QueueCallOrigin extends CallOrigin {
    constructor(private queueID: string) {
        super(CallOriginType.QUEUE);
    }

    getQueueID() {
        return this.queueID;
    }
}