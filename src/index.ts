export {ChannelDirection} from "./CallControl/Call/ChannelDirection";
export {ChannelState} from "./CallControl/Call/ChannelState";
export {CallOriginType} from "./CallControl/Call/CallOrigin/CallOriginType";
export {ErrorCodes} from "./CallControl/Error/ErrorCodes";

import {CallControl} from "./CallControl/CallControl";

export {CallControl} from "./CallControl/CallControl";
// Added so we don't need to call CallControl.CallControl.connect() in web
export const connect = CallControl.connect;



// These are not exported as they might move to a seperate library
// export {ClearvoxAPIClient} from "./Client/ClearvoxAPIClient";
// export {ClearvoxSocketClient} from "./Client/ClearvoxSocketClient";