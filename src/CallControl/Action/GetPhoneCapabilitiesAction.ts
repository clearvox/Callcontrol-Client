import {Action} from "./Action";

export class GetPhoneCapabilitiesAction extends Action {
    constructor(phone: string) {
        super('getPhoneCapabilities', {
            phone: phone,
        });
    }
}