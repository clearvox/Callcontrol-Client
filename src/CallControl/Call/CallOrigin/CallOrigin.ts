import {CallOriginType} from "./CallOriginType";

export class CallOrigin {
    constructor(private type: CallOriginType) {

    }

    getType() {
        return this.type;
    }
}