var CallControl =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function $getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = $getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  var args = [];
  for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    ReflectApply(this.listener, this.target, args);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}


/***/ }),

/***/ "./node_modules/uuid/lib/bytesToUuid.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/bytesToUuid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "./node_modules/uuid/lib/rng-browser.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/rng-browser.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ "./node_modules/uuid/v4.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v4.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/uuid/lib/bytesToUuid.js");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ "./src/CallControl/Action/Action.ts":
/*!******************************************!*\
  !*** ./src/CallControl/Action/Action.ts ***!
  \******************************************/
/*! no static exports found */
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

/***/ "./src/CallControl/Action/AnswerAction.ts":
/*!************************************************!*\
  !*** ./src/CallControl/Action/AnswerAction.ts ***!
  \************************************************/
/*! no static exports found */
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
var ModifyCallAction_1 = __webpack_require__(/*! ./ModifyCallAction */ "./src/CallControl/Action/ModifyCallAction.ts");
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

/***/ "./src/CallControl/Action/BlindTransferAction.ts":
/*!*******************************************************!*\
  !*** ./src/CallControl/Action/BlindTransferAction.ts ***!
  \*******************************************************/
/*! no static exports found */
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
var ModifyCallAction_1 = __webpack_require__(/*! ./ModifyCallAction */ "./src/CallControl/Action/ModifyCallAction.ts");
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

/***/ "./src/CallControl/Action/BridgeAction.ts":
/*!************************************************!*\
  !*** ./src/CallControl/Action/BridgeAction.ts ***!
  \************************************************/
/*! no static exports found */
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
var ModifyCallAction_1 = __webpack_require__(/*! ./ModifyCallAction */ "./src/CallControl/Action/ModifyCallAction.ts");
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

/***/ "./src/CallControl/Action/GetCalls.ts":
/*!********************************************!*\
  !*** ./src/CallControl/Action/GetCalls.ts ***!
  \********************************************/
/*! no static exports found */
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
var Action_1 = __webpack_require__(/*! ./Action */ "./src/CallControl/Action/Action.ts");
var GetCalls = /** @class */ (function (_super) {
    __extends(GetCalls, _super);
    function GetCalls() {
        return _super.call(this, 'getCalls') || this;
    }
    return GetCalls;
}(Action_1.Action));
exports.GetCalls = GetCalls;


/***/ }),

/***/ "./src/CallControl/Action/GetPhoneCapabilitiesAction.ts":
/*!**************************************************************!*\
  !*** ./src/CallControl/Action/GetPhoneCapabilitiesAction.ts ***!
  \**************************************************************/
/*! no static exports found */
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
var Action_1 = __webpack_require__(/*! ./Action */ "./src/CallControl/Action/Action.ts");
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

/***/ "./src/CallControl/Action/HangupAction.ts":
/*!************************************************!*\
  !*** ./src/CallControl/Action/HangupAction.ts ***!
  \************************************************/
/*! no static exports found */
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
var ModifyCallAction_1 = __webpack_require__(/*! ./ModifyCallAction */ "./src/CallControl/Action/ModifyCallAction.ts");
var HangupAction = /** @class */ (function (_super) {
    __extends(HangupAction, _super);
    function HangupAction(callID) {
        return _super.call(this, callID, 'hangup') || this;
    }
    return HangupAction;
}(ModifyCallAction_1.ModifyCallAction));
exports.HangupAction = HangupAction;


/***/ }),

/***/ "./src/CallControl/Action/MakeCallAction.ts":
/*!**************************************************!*\
  !*** ./src/CallControl/Action/MakeCallAction.ts ***!
  \**************************************************/
/*! no static exports found */
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
var Action_1 = __webpack_require__(/*! ./Action */ "./src/CallControl/Action/Action.ts");
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

/***/ "./src/CallControl/Action/ModifyCallAction.ts":
/*!****************************************************!*\
  !*** ./src/CallControl/Action/ModifyCallAction.ts ***!
  \****************************************************/
/*! no static exports found */
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
var Action_1 = __webpack_require__(/*! ./Action */ "./src/CallControl/Action/Action.ts");
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

/***/ "./src/CallControl/Call/CallOrigin/AccountRouterCallOrigin.ts":
/*!********************************************************************!*\
  !*** ./src/CallControl/Call/CallOrigin/AccountRouterCallOrigin.ts ***!
  \********************************************************************/
/*! no static exports found */
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
var CallOrigin_1 = __webpack_require__(/*! ./CallOrigin */ "./src/CallControl/Call/CallOrigin/CallOrigin.ts");
var CallOriginType_1 = __webpack_require__(/*! ./CallOriginType */ "./src/CallControl/Call/CallOrigin/CallOriginType.ts");
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

/***/ "./src/CallControl/Call/CallOrigin/CallOrigin.ts":
/*!*******************************************************!*\
  !*** ./src/CallControl/Call/CallOrigin/CallOrigin.ts ***!
  \*******************************************************/
/*! no static exports found */
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

/***/ "./src/CallControl/Call/CallOrigin/CallOriginFactory.ts":
/*!**************************************************************!*\
  !*** ./src/CallControl/Call/CallOrigin/CallOriginFactory.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CallOriginType_1 = __webpack_require__(/*! ./CallOriginType */ "./src/CallControl/Call/CallOrigin/CallOriginType.ts");
var UserRouterCallOrigin_1 = __webpack_require__(/*! ./UserRouterCallOrigin */ "./src/CallControl/Call/CallOrigin/UserRouterCallOrigin.ts");
var AccountRouterCallOrigin_1 = __webpack_require__(/*! ./AccountRouterCallOrigin */ "./src/CallControl/Call/CallOrigin/AccountRouterCallOrigin.ts");
var QueueCallOrigin_1 = __webpack_require__(/*! ./QueueCallOrigin */ "./src/CallControl/Call/CallOrigin/QueueCallOrigin.ts");
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

/***/ "./src/CallControl/Call/CallOrigin/CallOriginType.ts":
/*!***********************************************************!*\
  !*** ./src/CallControl/Call/CallOrigin/CallOriginType.ts ***!
  \***********************************************************/
/*! no static exports found */
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

/***/ "./src/CallControl/Call/CallOrigin/QueueCallOrigin.ts":
/*!************************************************************!*\
  !*** ./src/CallControl/Call/CallOrigin/QueueCallOrigin.ts ***!
  \************************************************************/
/*! no static exports found */
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
var CallOrigin_1 = __webpack_require__(/*! ./CallOrigin */ "./src/CallControl/Call/CallOrigin/CallOrigin.ts");
var CallOriginType_1 = __webpack_require__(/*! ./CallOriginType */ "./src/CallControl/Call/CallOrigin/CallOriginType.ts");
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

/***/ "./src/CallControl/Call/CallOrigin/UserRouterCallOrigin.ts":
/*!*****************************************************************!*\
  !*** ./src/CallControl/Call/CallOrigin/UserRouterCallOrigin.ts ***!
  \*****************************************************************/
/*! no static exports found */
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
var CallOrigin_1 = __webpack_require__(/*! ./CallOrigin */ "./src/CallControl/Call/CallOrigin/CallOrigin.ts");
var CallOriginType_1 = __webpack_require__(/*! ./CallOriginType */ "./src/CallControl/Call/CallOrigin/CallOriginType.ts");
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

/***/ "./src/CallControl/Call/Channel.ts":
/*!*****************************************!*\
  !*** ./src/CallControl/Call/Channel.ts ***!
  \*****************************************/
/*! no static exports found */
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
var EventEmitter = __webpack_require__(/*! events */ "./node_modules/events/events.js");
var CallOriginFactory_1 = __webpack_require__(/*! ./CallOrigin/CallOriginFactory */ "./src/CallControl/Call/CallOrigin/CallOriginFactory.ts");
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

/***/ "./src/CallControl/Call/ChannelDirection.ts":
/*!**************************************************!*\
  !*** ./src/CallControl/Call/ChannelDirection.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ChannelDirection;
(function (ChannelDirection) {
    ChannelDirection["INCOMING"] = "in";
    ChannelDirection["OUTGOING"] = "out";
})(ChannelDirection = exports.ChannelDirection || (exports.ChannelDirection = {}));


/***/ }),

/***/ "./src/CallControl/Call/ChannelState.ts":
/*!**********************************************!*\
  !*** ./src/CallControl/Call/ChannelState.ts ***!
  \**********************************************/
/*! no static exports found */
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

/***/ "./src/CallControl/CallControl.ts":
/*!****************************************!*\
  !*** ./src/CallControl/CallControl.ts ***!
  \****************************************/
/*! no static exports found */
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
var ClearvoxSocketClient_1 = __webpack_require__(/*! ../Client/ClearvoxSocketClient */ "./src/Client/ClearvoxSocketClient.ts");
var Channel_1 = __webpack_require__(/*! ./Call/Channel */ "./src/CallControl/Call/Channel.ts");
var MakeCallAction_1 = __webpack_require__(/*! ./Action/MakeCallAction */ "./src/CallControl/Action/MakeCallAction.ts");
var GetCalls_1 = __webpack_require__(/*! ./Action/GetCalls */ "./src/CallControl/Action/GetCalls.ts");
var HangupAction_1 = __webpack_require__(/*! ./Action/HangupAction */ "./src/CallControl/Action/HangupAction.ts");
var ModifyCallAction_1 = __webpack_require__(/*! ./Action/ModifyCallAction */ "./src/CallControl/Action/ModifyCallAction.ts");
var ClearvoxAPIClient_1 = __webpack_require__(/*! ../Client/ClearvoxAPIClient */ "./src/Client/ClearvoxAPIClient.ts");
var AnswerAction_1 = __webpack_require__(/*! ./Action/AnswerAction */ "./src/CallControl/Action/AnswerAction.ts");
var BlindTransferAction_1 = __webpack_require__(/*! ./Action/BlindTransferAction */ "./src/CallControl/Action/BlindTransferAction.ts");
var uuid = __webpack_require__(/*! uuid/v4 */ "./node_modules/uuid/v4.js");
var EventEmitter = __webpack_require__(/*! events */ "./node_modules/events/events.js");
var BridgeAction_1 = __webpack_require__(/*! ./Action/BridgeAction */ "./src/CallControl/Action/BridgeAction.ts");
var GetPhoneCapabilitiesAction_1 = __webpack_require__(/*! ./Action/GetPhoneCapabilitiesAction */ "./src/CallControl/Action/GetPhoneCapabilitiesAction.ts");
var CallControlError_1 = __webpack_require__(/*! ./Error/CallControlError */ "./src/CallControl/Error/CallControlError.ts");
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

/***/ "./src/CallControl/Error/CallControlError.ts":
/*!***************************************************!*\
  !*** ./src/CallControl/Error/CallControlError.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ErrorCodes_1 = __webpack_require__(/*! ./ErrorCodes */ "./src/CallControl/Error/ErrorCodes.ts");
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

/***/ "./src/CallControl/Error/ErrorCodes.ts":
/*!*********************************************!*\
  !*** ./src/CallControl/Error/ErrorCodes.ts ***!
  \*********************************************/
/*! no static exports found */
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

/***/ "./src/Client/ClearvoxAPIClient.ts":
/*!*****************************************!*\
  !*** ./src/Client/ClearvoxAPIClient.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __webpack_require__(/*! axios */ "axios");
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

/***/ "./src/Client/ClearvoxSocketClient.ts":
/*!********************************************!*\
  !*** ./src/Client/ClearvoxSocketClient.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var socketIO = __webpack_require__(/*! socket.io-client */ "socket.io-client");
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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ChannelDirection_1 = __webpack_require__(/*! ./CallControl/Call/ChannelDirection */ "./src/CallControl/Call/ChannelDirection.ts");
exports.ChannelDirection = ChannelDirection_1.ChannelDirection;
var ChannelState_1 = __webpack_require__(/*! ./CallControl/Call/ChannelState */ "./src/CallControl/Call/ChannelState.ts");
exports.ChannelState = ChannelState_1.ChannelState;
var CallOriginType_1 = __webpack_require__(/*! ./CallControl/Call/CallOrigin/CallOriginType */ "./src/CallControl/Call/CallOrigin/CallOriginType.ts");
exports.CallOriginType = CallOriginType_1.CallOriginType;
var ErrorCodes_1 = __webpack_require__(/*! ./CallControl/Error/ErrorCodes */ "./src/CallControl/Error/ErrorCodes.ts");
exports.ErrorCodes = ErrorCodes_1.ErrorCodes;
var CallControl_1 = __webpack_require__(/*! ./CallControl/CallControl */ "./src/CallControl/CallControl.ts");
var CallControl_2 = __webpack_require__(/*! ./CallControl/CallControl */ "./src/CallControl/CallControl.ts");
exports.CallControl = CallControl_2.CallControl;
// Added so we don't need to call CallControl.CallControl.connect() in web
exports.connect = CallControl_1.CallControl.connect;
// These are not exported as they might move to a seperate library
// export {ClearvoxAPIClient} from "./Client/ClearvoxAPIClient";
// export {ClearvoxSocketClient} from "./Client/ClearvoxSocketClient";


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = axios;

/***/ }),

/***/ "socket.io-client":
/*!*********************!*\
  !*** external "io" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = io;

/***/ })

/******/ });
//# sourceMappingURL=clearvox-callcontrol.web.js.map