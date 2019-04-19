import { CallOrigin } from "./CallOrigin";
export declare class QueueCallOrigin extends CallOrigin {
    private queueID;
    constructor(queueID: string);
    getQueueID(): string;
}
