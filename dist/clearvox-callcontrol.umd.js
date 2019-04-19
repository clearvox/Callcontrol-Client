(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("CallControl", [], factory);
	else if(typeof exports === 'object')
		exports["CallControl"] = factory();
	else
		root["CallControl"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Action_1 = __webpack_require__(2);
var ModifyCallAction = /** @class */ (function (_super) {
    __extends(ModifyCallAction, _super);
    function ModifyCallAction(callID, actionName, params) {
        if (params === void 0) { params = {}; }
        var _this = _super.call(this, actionName, params) || this;
        _this.callID = callID;
        return _this;
    }
    ModifyCallAction.prototype.getCallID = function () {
        return this.callID;
    };
    return ModifyCallAction;
}(Action_1.Action));
exports.ModifyCallAction = ModifyCallAction;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CallOriginType;
(function (CallOriginType) {
    CallOriginType[CallOriginType["ACCOUNT_ROUTER"] = 0] = "ACCOUNT_ROUTER";
    CallOriginType[CallOriginType["USER_ROUTER"] = 1] = "USER_ROUTER";
    CallOriginType[CallOriginType["QUEUE"] = 2] = "QUEUE";
})(CallOriginType = exports.CallOriginType || (exports.CallOriginType = {}));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Action = /** @class */ (function () {
    function Action(actionName, params) {
        if (params === void 0) { params = {}; }
        this.actionName = actionName;
        this.params = params;
    }
    Action.prototype.getName = function () {
        return this.actionName;
    };
    Action.prototype.getParams = function () {
        return this.params;
    };
    return Action;
}());
exports.Action = Action;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CallOrigin = /** @class */ (function () {
    function CallOrigin(type) {
        this.type = type;
    }
    CallOrigin.prototype.getType = function () {
        return this.type;
    };
    return CallOrigin;
}());
exports.CallOrigin = CallOrigin;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var ClearvoxSocketClient_1 = __webpack_require__(24);
var Channel_1 = __webpack_require__(22);
var MakeCallAction_1 = __webpack_require__(17);
var GetCalls_1 = __webpack_require__(16);
var HangupAction_1 = __webpack_require__(15);
var ModifyCallAction_1 = __webpack_require__(0);
var ClearvoxAPIClient_1 = __webpack_require__(14);
var AnswerAction_1 = __webpack_require__(12);
var BlindTransferAction_1 = __webpack_require__(11);
var uuid = __webpack_require__(10);
var EventEmitter = __webpack_require__(4);
var BridgeAction_1 = __webpack_require__(9);
var GetPhoneCapabilitiesAction_1 = __webpack_require__(8);
var CallControlError_1 = __webpack_require__(7);
var CallControl = /** @class */ (function (_super) {
    __extends(CallControl, _super);
    function CallControl(socketClient) {
        var _this = _super.call(this) || this;
        _this.socketClient = socketClient;
        _this.callsPromise = Promise.resolve([]);
        _this.init();
        return _this;
    }
    CallControl.connect = function (serverURL, apiKey) {
        var clearvoxAPIClient = new ClearvoxAPIClient_1.ClearvoxAPIClient(serverURL, apiKey);
        return clearvoxAPIClient.getSocketInfo().then(function (socketInfo) {
            var clearvoxSocketClient = new ClearvoxSocketClient_1.ClearvoxSocketClient(serverURL, socketInfo.token, socketInfo.accountID);
            return new CallControl(clearvoxSocketClient);
        });
    };
    CallControl.prototype.init = function () {
        var _this = this;
        this.socketClient.on('call:start', function (data) {
            var newChannel = Channel_1.Channel.make(data);
            _this.channels.push(newChannel);
            _this.emit('call:start', newChannel);
            if (newChannel.getReference()) {
                _this.emit('start:' + newChannel.getReference(), newChannel);
            }
        });
        this.socketClient.on('call:update', function (data) {
            var channel;
            if ('old_call_id' in data) {
                channel = _this.findChannel(data.old_call_id, data.channel_id);
            }
            else {
                channel = _this.findChannel(data.call_id, data.channel_id);
            }
            if (channel) {
                channel = Channel_1.Channel.make(data, channel);
                _this.emit('call:update', channel);
                channel.emit('update', channel);
            }
        });
        this.socketClient.on('call:end', function (data) {
            var channel = _this.findChannel(data.call_id, data.channel_id);
            channel = Channel_1.Channel.make(data, channel);
            _this.emit('call:end', channel);
            channel.emit('end', channel);
        });
        this.socketClient.on('call:error', function (error) {
            var callControlError = CallControlError_1.CallControlError.make(error);
            var channels = _this.findCallChannels(callControlError.getCallID());
            channels.forEach(function (channel) {
                channel.emit('error', callControlError);
            });
        });
        return this.reloadChannels();
    };
    CallControl.prototype.findChannel = function (callID, channelID) {
        return this.channels.find(function (channel) { return channel.getCallID() === callID && channel.getChannelID() === channelID; });
    };
    CallControl.prototype.findCallChannels = function (callID) {
        return this.channels.filter(function (channel) { return channel.getCallID() === callID; });
    };
    CallControl.prototype.sendAction = function (action) {
        var data = {
            action: action.getName(),
            params: action.getParams(),
        };
        if (action instanceof ModifyCallAction_1.ModifyCallAction) {
            data.call_id = action.getCallID();
        }
        this.socketClient.emit('callcontrol', data);
    };
    CallControl.prototype.getChannels = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.callsPromise];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.channels];
                }
            });
        });
    };
    CallControl.prototype.reloadChannels = function () {
        var _this = this;
        this.callsPromise = new Promise(function (resolve) {
            _this.sendAction(new GetCalls_1.GetCalls());
            _this.socketClient.once('calls', function (data) {
                _this.channels = data.map(Channel_1.Channel.make);
                resolve(_this.channels);
                return;
            });
        });
        return this.callsPromise;
    };
    CallControl.prototype.onChannelStart = function (callback) {
        this.on('call:start', callback);
    };
    CallControl.prototype.onChannelEnd = function (callback) {
        this.on('call:end', callback);
    };
    CallControl.prototype.onChannelUpdate = function (callback) {
        this.on('call:update', callback);
    };
    CallControl.prototype.dial = function (number, phone, autoAnswer) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var callReference = uuid();
            _this.sendAction(new MakeCallAction_1.MakeCallAction(number, phone, autoAnswer, callReference));
            setTimeout(function () {
                _this.removeListener('start:' + callReference, resolve);
                reject(new Error('timeout'));
            }, 2000);
            _this.once('start:' + callReference, resolve);
        });
    };
    CallControl.prototype.blindTransfer = function (callID, number, channelToTransfer) {
        var transfereePhoneID = channelToTransfer ? channelToTransfer.getPhoneID() : undefined;
        this.sendAction(new BlindTransferAction_1.BlindTransferAction(callID, number, transfereePhoneID));
    };
    CallControl.prototype.hangup = function (channel) {
        this.sendAction(new HangupAction_1.HangupAction(channel.getCallID()));
    };
    CallControl.prototype.answer = function (channel, phone) {
        this.sendAction(new AnswerAction_1.AnswerAction(channel.getCallID(), phone ? phone : channel.getPhoneID()));
    };
    CallControl.prototype.bridge = function (callID, otherCallID, channelToBridge, otherChannelToBridge) {
        this.sendAction(new BridgeAction_1.BridgeAction(callID, otherCallID, channelToBridge ? channelToBridge.getPhoneID() : undefined, otherChannelToBridge ? otherChannelToBridge.getPhoneID() : undefined));
    };
    CallControl.prototype.getPhoneCapabilities = function (phone) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.sendAction(new GetPhoneCapabilitiesAction_1.GetPhoneCapabilitiesAction(phone));
            var onPhoneCapabilities = function (data) {
                if (data.requestedPhone === phone) {
                    resolve({ phoneID: data.phone, capabilities: data.capabilities });
                }
            };
            setTimeout(function () {
                _this.removeListener('phone:capabilities', onPhoneCapabilities);
                reject(new Error('timeout'));
            }, 2000);
            _this.socketClient.on('phone:capabilities', onPhoneCapabilities);
        });
    };
    return CallControl;
}(EventEmitter));
exports.CallControl = CallControl;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ErrorCodes;
(function (ErrorCodes) {
    ErrorCodes[ErrorCodes["INVALID_ACTION_ERROR"] = 400] = "INVALID_ACTION_ERROR";
    ErrorCodes[ErrorCodes["CALL_NOT_FOUND_ERR"] = 401] = "CALL_NOT_FOUND_ERR";
    ErrorCodes[ErrorCodes["NO_REGISTERED_PHONE_FOUND_ERROR"] = 402] = "NO_REGISTERED_PHONE_FOUND_ERROR";
    ErrorCodes[ErrorCodes["ACTION_FAILED_UNKNOWN"] = 403] = "ACTION_FAILED_UNKNOWN";
    ErrorCodes[ErrorCodes["FLEX_NOT_LOGGED_IN_ERROR"] = 404] = "FLEX_NOT_LOGGED_IN_ERROR";
    ErrorCodes[ErrorCodes["CALL_TO_BRIDGE_NOT_FOUND"] = 405] = "CALL_TO_BRIDGE_NOT_FOUND";
    ErrorCodes[ErrorCodes["CANNOT_DECIDE_CHANNEL"] = 406] = "CANNOT_DECIDE_CHANNEL";
    ErrorCodes[ErrorCodes["CANNOT_ANSWER_ANSWERED"] = 407] = "CANNOT_ANSWER_ANSWERED";
    ErrorCodes[ErrorCodes["CALLS_MUST_BE_ANSWERED"] = 408] = "CALLS_MUST_BE_ANSWERED";
    ErrorCodes[ErrorCodes["COULD_NOT_REGISTER_APP"] = 409] = "COULD_NOT_REGISTER_APP";
})(ErrorCodes = exports.ErrorCodes || (exports.ErrorCodes = {}));


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ErrorCodes_1 = __webpack_require__(6);
var CallControlError = /** @class */ (function () {
    function CallControlError(code, message, callID) {
        this.code = code;
        this.message = message;
        this.callID = callID;
    }
    CallControlError.prototype.getCode = function () {
        return ErrorCodes_1.ErrorCodes[this.code];
    };
    CallControlError.prototype.getRawCode = function () {
        return this.code;
    };
    CallControlError.prototype.getMessage = function () {
        return this.message;
    };
    CallControlError.prototype.getCallID = function () {
        return this.callID;
    };
    CallControlError.make = function (data) {
        return new CallControlError(data.code, data.message, data.call_id);
    };
    return CallControlError;
}());
exports.CallControlError = CallControlError;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Action_1 = __webpack_require__(2);
var GetPhoneCapabilitiesAction = /** @class */ (function (_super) {
    __extends(GetPhoneCapabilitiesAction, _super);
    function GetPhoneCapabilitiesAction(phone) {
        return _super.call(this, 'getPhoneCapabilities', {
            phone: phone,
        }) || this;
    }
    return GetPhoneCapabilitiesAction;
}(Action_1.Action));
exports.GetPhoneCapabilitiesAction = GetPhoneCapabilitiesAction;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ModifyCallAction_1 = __webpack_require__(0);
var BridgeAction = /** @class */ (function (_super) {
    __extends(BridgeAction, _super);
    function BridgeAction(callID, otherCallID, phoneID, otherPhoneID) {
        return _super.call(this, callID, 'bridge', {
            other_call_id: otherCallID,
            phone_id: phoneID,
            other_phone_id: otherPhoneID,
        }) || this;
    }
    return BridgeAction;
}(ModifyCallAction_1.ModifyCallAction));
exports.BridgeAction = BridgeAction;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("uuid/v4");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ModifyCallAction_1 = __webpack_require__(0);
var BlindTransferAction = /** @class */ (function (_super) {
    __extends(BlindTransferAction, _super);
    function BlindTransferAction(callID, number, phoneID) {
        return _super.call(this, callID, 'blindTransfer', {
            number: number,
            phone_id: phoneID,
        }) || this;
    }
    return BlindTransferAction;
}(ModifyCallAction_1.ModifyCallAction));
exports.BlindTransferAction = BlindTransferAction;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ModifyCallAction_1 = __webpack_require__(0);
var AnswerAction = /** @class */ (function (_super) {
    __extends(AnswerAction, _super);
    function AnswerAction(callID, phone) {
        return _super.call(this, callID, 'answer', {
            phone: phone,
        }) || this;
    }
    return AnswerAction;
}(ModifyCallAction_1.ModifyCallAction));
exports.AnswerAction = AnswerAction;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __webpack_require__(13);
var ClearvoxAPIClient = /** @class */ (function () {
    function ClearvoxAPIClient(serverURL, apiKey) {
        this.apiKey = apiKey;
        this.baseURL = serverURL + '/api/1/';
        this.init();
    }
    ClearvoxAPIClient.prototype.init = function () {
        this.client = axios_1.default.create({
            baseURL: this.baseURL,
            timeout: 10000,
            headers: {
                'X-Auth-Token': this.apiKey,
            }
        });
    };
    ClearvoxAPIClient.prototype.makeRequest = function (config) {
        return this.client.request(config);
    };
    ClearvoxAPIClient.prototype.makeGetRequest = function (url) {
        return this.makeRequest({
            method: 'get',
            url: url,
        });
    };
    ClearvoxAPIClient.prototype.makePostRequest = function (url, data) {
        if (data === void 0) { data = {}; }
        return this.makeRequest({
            method: 'post',
            url: url,
            data: JSON.stringify(data),
            headers: {
                "content-type": "application/json;charset=UTF-8",
            },
        });
    };
    ClearvoxAPIClient.prototype.getSocketInfo = function () {
        return this.makePostRequest('/auth/verify', { api_key: this.apiKey }).then(function (response) {
            return {
                token: response.data.data.token,
                accountID: response.headers['x-uc-aid'],
            };
        });
    };
    return ClearvoxAPIClient;
}());
exports.ClearvoxAPIClient = ClearvoxAPIClient;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ModifyCallAction_1 = __webpack_require__(0);
var HangupAction = /** @class */ (function (_super) {
    __extends(HangupAction, _super);
    function HangupAction(callID) {
        return _super.call(this, callID, 'hangup') || this;
    }
    return HangupAction;
}(ModifyCallAction_1.ModifyCallAction));
exports.HangupAction = HangupAction;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Action_1 = __webpack_require__(2);
var GetCalls = /** @class */ (function (_super) {
    __extends(GetCalls, _super);
    function GetCalls() {
        return _super.call(this, 'getCalls') || this;
    }
    return GetCalls;
}(Action_1.Action));
exports.GetCalls = GetCalls;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Action_1 = __webpack_require__(2);
var MakeCallAction = /** @class */ (function (_super) {
    __extends(MakeCallAction, _super);
    function MakeCallAction(number, phone, autoAnswer, callReference) {
        return _super.call(this, 'makeCall', {
            number: number,
            phone: phone,
            auto_answer: autoAnswer,
            call_reference: callReference,
        }) || this;
    }
    return MakeCallAction;
}(Action_1.Action));
exports.MakeCallAction = MakeCallAction;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var CallOrigin_1 = __webpack_require__(3);
var CallOriginType_1 = __webpack_require__(1);
var QueueCallOrigin = /** @class */ (function (_super) {
    __extends(QueueCallOrigin, _super);
    function QueueCallOrigin(queueID) {
        var _this = _super.call(this, CallOriginType_1.CallOriginType.QUEUE) || this;
        _this.queueID = queueID;
        return _this;
    }
    QueueCallOrigin.prototype.getQueueID = function () {
        return this.queueID;
    };
    return QueueCallOrigin;
}(CallOrigin_1.CallOrigin));
exports.QueueCallOrigin = QueueCallOrigin;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var CallOrigin_1 = __webpack_require__(3);
var CallOriginType_1 = __webpack_require__(1);
var AccountRouterCallOrigin = /** @class */ (function (_super) {
    __extends(AccountRouterCallOrigin, _super);
    function AccountRouterCallOrigin(routerID) {
        var _this = _super.call(this, CallOriginType_1.CallOriginType.ACCOUNT_ROUTER) || this;
        _this.routerID = routerID;
        return _this;
    }
    AccountRouterCallOrigin.prototype.getRouterID = function () {
        return this.routerID;
    };
    return AccountRouterCallOrigin;
}(CallOrigin_1.CallOrigin));
exports.AccountRouterCallOrigin = AccountRouterCallOrigin;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var CallOrigin_1 = __webpack_require__(3);
var CallOriginType_1 = __webpack_require__(1);
var UserRouterCallOrigin = /** @class */ (function (_super) {
    __extends(UserRouterCallOrigin, _super);
    function UserRouterCallOrigin(routerID) {
        var _this = _super.call(this, CallOriginType_1.CallOriginType.USER_ROUTER) || this;
        _this.routerID = routerID;
        return _this;
    }
    UserRouterCallOrigin.prototype.getRouterID = function () {
        return this.routerID;
    };
    return UserRouterCallOrigin;
}(CallOrigin_1.CallOrigin));
exports.UserRouterCallOrigin = UserRouterCallOrigin;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CallOriginType_1 = __webpack_require__(1);
var UserRouterCallOrigin_1 = __webpack_require__(20);
var AccountRouterCallOrigin_1 = __webpack_require__(19);
var QueueCallOrigin_1 = __webpack_require__(18);
var CallOriginFactory = /** @class */ (function () {
    function CallOriginFactory() {
    }
    CallOriginFactory.make = function (data) {
        switch (data.type) {
            case CallOriginType_1.CallOriginType.USER_ROUTER:
                return new UserRouterCallOrigin_1.UserRouterCallOrigin(data.user_router_id);
            case CallOriginType_1.CallOriginType.ACCOUNT_ROUTER:
                return new AccountRouterCallOrigin_1.AccountRouterCallOrigin(data.account_router_id);
            case CallOriginType_1.CallOriginType.QUEUE:
                return new QueueCallOrigin_1.QueueCallOrigin(data.queue_id);
        }
    };
    return CallOriginFactory;
}());
exports.CallOriginFactory = CallOriginFactory;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var EventEmitter = __webpack_require__(4);
var CallOriginFactory_1 = __webpack_require__(21);
var Channel = /** @class */ (function (_super) {
    __extends(Channel, _super);
    function Channel(callID, channelID, phoneID) {
        var _this = _super.call(this) || this;
        _this.callID = callID;
        _this.channelID = channelID;
        _this.phoneID = phoneID;
        _this.answered = false;
        _this.originate = false;
        _this.origins = [];
        return _this;
    }
    Channel.prototype.onUpdate = function (callback) {
        this.on('update', callback);
    };
    Channel.prototype.onEnd = function (callback) {
        this.on('end', callback);
    };
    Channel.prototype.onError = function (callback) {
        this.on('error', callback);
    };
    Channel.prototype.getCallID = function () {
        return this.callID;
    };
    Channel.prototype.getChannelID = function () {
        return this.channelID;
    };
    Channel.prototype.getPhoneID = function () {
        return this.phoneID;
    };
    Channel.prototype.getReference = function () {
        return this.callReference;
    };
    Channel.make = function (data, channel) {
        if (channel === void 0) { channel = null; }
        if (!channel) {
            channel = new Channel(data.call_id, data.channel_id, data.phone_id);
        }
        channel.answered = data.hasOwnProperty('answered') ? data.answered : channel.answered;
        channel.number = data.hasOwnProperty('number') ? data.number : channel.number;
        channel.name = data.hasOwnProperty('name') ? data.name : channel.name;
        channel.direction = data.hasOwnProperty('direction') ? data.direction : channel.direction;
        channel.phoneHumanName = data.hasOwnProperty('phone_human_name') ? data.phone_human_name : channel.phoneHumanName;
        channel.originate = data.hasOwnProperty('originate') ? data.originate : channel.originate;
        channel.state = data.hasOwnProperty('state') ? data.state : channel.state;
        channel.duration = data.hasOwnProperty('duration') ? data.duration : channel.duration;
        channel.otherTransferCallID = data.hasOwnProperty('other_transfer_call_id') ? data.other_transfer_call_id : channel.otherTransferCallID;
        channel.isRecording = data.hasOwnProperty('is_recording') ? data.is_recording : channel.isRecording;
        if (data.hasOwnProperty('origin')) {
            channel.origins.push(CallOriginFactory_1.CallOriginFactory.make(data.origin));
        }
        if (data.hasOwnProperty('old_call_id')) {
            channel.oldCallID = data.old_call_id;
            channel.callID = data.call_id;
        }
        channel.callReference = data.hasOwnProperty('call_reference') ? data.call_reference : channel.callReference;
        return channel;
    };
    return Channel;
}(EventEmitter));
exports.Channel = Channel;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var socketIO = __webpack_require__(23);
var ClearvoxSocketClient = /** @class */ (function () {
    function ClearvoxSocketClient(baseURL, token, accountID) {
        this.baseURL = baseURL;
        this.token = token;
        this.accountID = accountID;
        this.init();
    }
    ClearvoxSocketClient.prototype.init = function () {
        var options = {
            path: '/event-server',
            query: 'token=' + this.token + '&X-UC-AID=' + this.accountID,
        };
        this.socket = socketIO(this.baseURL.toString(), options);
        this.socket.on('connect', function () {
            console.log('Socket connected.');
        });
        this.socket.on('connect_error', function (error) {
            console.log('Socket connection error', error);
        });
        this.socket.on('disconnect', function (error) {
            if (error === 'io server disconnect') {
                console.log('Socket connection lost', error);
            }
            console.log('Disconnected by server', error);
        });
    };
    ClearvoxSocketClient.prototype.onConnect = function (callback) {
        this.socket.on('connect', callback);
        return this;
    };
    ClearvoxSocketClient.prototype.onError = function (callback) {
        this.socket.on('connect_error', callback);
        return this;
    };
    ClearvoxSocketClient.prototype.onDisconnect = function (callback) {
        this.socket.on('disconnect', callback);
        return this;
    };
    ClearvoxSocketClient.prototype.on = function (event, callback) {
        this.socket.on(event, callback);
        return this;
    };
    ClearvoxSocketClient.prototype.once = function (event, callback) {
        this.socket.once(event, callback);
        return this;
    };
    ClearvoxSocketClient.prototype.emit = function (channel, data, callback) {
        if (callback === void 0) { callback = null; }
        this.socket.emit(channel, data, callback);
    };
    return ClearvoxSocketClient;
}());
exports.ClearvoxSocketClient = ClearvoxSocketClient;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ChannelState;
(function (ChannelState) {
    ChannelState[ChannelState["STARTING"] = 0] = "STARTING";
    ChannelState[ChannelState["RINGING"] = 1] = "RINGING";
    ChannelState[ChannelState["ACTIVE"] = 2] = "ACTIVE";
    ChannelState[ChannelState["ENDED"] = 3] = "ENDED";
})(ChannelState = exports.ChannelState || (exports.ChannelState = {}));


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ChannelDirection;
(function (ChannelDirection) {
    ChannelDirection["INCOMING"] = "in";
    ChannelDirection["OUTGOING"] = "out";
})(ChannelDirection = exports.ChannelDirection || (exports.ChannelDirection = {}));


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ChannelDirection_1 = __webpack_require__(26);
exports.ChannelDirection = ChannelDirection_1.ChannelDirection;
var ChannelState_1 = __webpack_require__(25);
exports.ChannelState = ChannelState_1.ChannelState;
var CallOriginType_1 = __webpack_require__(1);
exports.CallOriginType = CallOriginType_1.CallOriginType;
var ErrorCodes_1 = __webpack_require__(6);
exports.ErrorCodes = ErrorCodes_1.ErrorCodes;
var CallControl_1 = __webpack_require__(5);
var CallControl_2 = __webpack_require__(5);
exports.CallControl = CallControl_2.CallControl;
// Added so we don't need to call CallControl.CallControl.connect() in web
exports.connect = CallControl_1.CallControl.connect;
// These are not exported as they might move to a seperate library
// export {ClearvoxAPIClient} from "./Client/ClearvoxAPIClient";
// export {ClearvoxSocketClient} from "./Client/ClearvoxSocketClient";


/***/ })
/******/ ]);
});