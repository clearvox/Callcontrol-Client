# ClearVox Call Control Client

Realtime client for ClearVox Call Control.

## Features

- Make calls
- Realtime monitoring of calls 
- Answer calls
- Hangup calls
- Blind transfer
- Attended transfer

## Install

Using npm:

```bash
$ npm install @clearvox/callcontrol
```

Using html:

```html
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.min.js" integrity="sha256-mpnrJ5DpEZZkwkE1ZgkEQQJW/46CSEh/STrZKOB/qoM=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/1.7.4/socket.io.min.js" integrity="sha256-WKvqiY0jZHWQZIohYEmr9KUC5rEaYEOFTq+ByllJK8w=" crossorigin="anonymous"></script>
    <script src="clearvox-callcontrol.web.min.js"></script>
```

## Example

Setup and make a new call
```javascript
const {CallControl} = require('@clearvox/callcontrol');

const url = 'https://192.168.1.1';
const apiKey = '--yourapikey--';

CallControl.connect(url, apiKey).then((callControl) => {
    callControl.onError((error) => {
        console.log('An error occured', error);
    });
    
    callControl.dial('200').then((channel) => {
        console.log(`channel started to ${channel.name} <${channel.number}>`, channel);

        channel.onUpdate((channel) => {
            console.log('channel updated', channel);
        });

        channel.onEnd((channel) => {
            console.log('channel ended', channel);
        });
    }).catch((error) => {
        console.log('Could not make call', error);
    });
});
```

Listen for new channels
```javascript
callControl.onChannelStart((channel) => {
    console.log(`channel started to ${channel.name} <${channel.number}>`, channel);
});
```

> **NOTE:** Every phone that rings/dials has a seperate channel.

## Clearvox Call Control API

### CallControl

##### CallControl.connect(url, apiKey)
```js
CallControl.connect(url, apiKey).then((callControl) => {
    console.log('connected');
}).catch((error) => {
    console.log('Connection failed: ' + error.message);
});
```

> **NOTE:** This will automatically connect to your own account socket
> this means you won't receive/can send events for your view as

> **NOTE:** If you use https and a self signed certificate
> add `process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';` in node to proceed.
> In web this is not possible, so the only solution is use http or create a Let's Encrypt certificate.

##### callControl.getChannels()
Returns a list of the active channels
```js
const channels = await callControl.getChannels();
```

##### callControl.findChannel(callID: string, channelID: string)
```js
const channel = callControl.findChannel(callID, channelID);
```

##### callControl.findCallChannels(callID: string)
This will return all channels included in a call
```js
const channels = callControl.findCallChannels(callID);
```

##### callControl.onChannelStart(callback)
```javascript
callControl.onChannelStart((channel) => {
    console.log(`channel started to ${channel.name} <${channel.number}>`, channel);
});
```

##### callControl.onChannelUpdate(callback)
```javascript
callControl.onChannelUpdate((channel) => {
    console.log(`channel updated to ${channel.name} <${channel.number}>`, channel);
});
```

##### callControl.onChannelEnd(callback)
```javascript
callControl.onChannelEnd((channel) => {
    console.log(`channel ended to ${channel.name} <${channel.number}>`, channel);
});
```

##### callControl.onError(callback)
```js
callControl.onError((error) => {
    console.log('An error occured', error);
});
```

##### callControl.dial(number[, phone[, autoAnswer[, otherTransferCallID]]])
```js
callControl.dial('200', 'auto', true).then((channel) => {
    console.log(`channel started to ${channel.name} <${channel.number}>`, channel);
});
```
> **NOTE:** Not every phone supports autoAnswer. You can use `callControl.getPhoneCapabilities()` to check.

> **NOTE:** If you don't pass `phone` or `autoAnswer`, it will be based on the Call Control Settings.

> **NOTE:** `phone` has the following possible values: the `{phoneID}`, `auto` or `flex`.

##### callControl.answer(channel[, phone])
```js
callControl.answer(channel);
```
> **NOTE:** The phone to answer can differ from the phone having an incoming channel.

> **NOTE:** If you don't pass `phone`, it will be based on the Call Control Settings.

> **NOTE:** `phone` has the following possible values: the `{phoneID}`, `auto` or `flex`.

##### callControl.hangup(channel)
```js
callControl.hangup(channel);
```

##### callControl.blindTransfer(callID, number[, channelToTransfer])
```javascript
callControl.blindTransfer(channel.getCallID(), number);
```
> **NOTE:** `channelToTransfer` is only required when you have 2 or more active channels in the call, for example when you dial yourself.

##### callControl.bridge(callID, otherCallID[, channelToBridge[, otherChannelToBridge]])
This will connect two calls. You need a channel in 2 calls for this and both your channels will end as the opposite channels are connected with each other.
```js
callControl.bridge(channelA.getCallID(), channelB.getCallID());
```

> **NOTE:** It's not yet possible to bridge your own channels

> **NOTE:** Typically this is used to connect two calls as the final step of an attended transfer

> **NOTE:** `channelToBridge` and `otherChannelToBridge` is only required when you have 2 or more active channels in the call

##### callControl.getPhoneCapabilities(phone)
```js
callControl.getPhoneCapabilities(phone).then(({phoneID, capabilities}) => {
    console.log(`PhoneID: ${phoneID}, can autoAnswer: ${capabilities.answer}, can transfer: ${capabilities.attendedTransfer}`)
});
```
> **NOTE:** `phone` has the following possible values: the `{phoneID}`, `auto` or `flex`.


### Channel

Channel Schema

```typescript
{
    getCallID(): string;
    getChannelID(): string;
    getPhoneID(): string;
    
    onUpdate(callback: (channel: Channel) => void);
    onEnd(callback: (channel: Channel) => void);
    onError(callback: (error: CallControlError) => void);
    
    answered: boolean,
    originate: boolean,
    origins: CallOrigin[],
    number: string, // the number of the other side of the call
    name: string, // the name of the other side of the call
    direction: ChannelDirection, // either 'in' or 'out'
    phoneHumanName: string,
    state: ChannelState, // STARTING = 0, RINGING = 1, ACTIVE = 2, ENDED = 3  
    duration: number,
    otherTransferCallID: string, // if this is set, the call is part of an attended transfer
    isRecording: string,
}
```

> **NOTE:** The callID might change when using remote pickup or attended transfer

#### CallOrigin

CallOrigin Schema
```typescript
class Origin {
    getType(): CallOriginType;
}

class AccountRouterCallOrigin extends Origin {
    getType(): CallOriginType.ACCOUNT_ROUTER;
    getRouterID(): string;
}

class UserRouterCallOrigin extends Origin {
    getType(): CallOriginType.USER_ROUTER;
    getRouterID(): string;
}

class QueueCallOrigin extends Origin {
    getType(): CallOriginType.QUEUE;
    getQueueID(): string;
}

export enum CallOriginType {
    ACCOUNT_ROUTER = 0,
    USER_ROUTER = 1,
    QUEUE = 2,
}
```

Usage:
```js
const {CallControl, CallOriginType} = require('@clearvox/callcontrol');

... connect and get a channel ...
        
// A call might have zero or more origins
channel.origins.forEach((callOrigin) => {
    switch(callOrigin.getType()) {
        case CallOriginType.QUEUE:     
            console.log('Call came from queue: ' + callOrigin.getQueueID());
            break;
        case CallOriginType.USER_ROUTER:     
            console.log('Call came from user router: ' + callOrigin.getRouterID());
            break;
        case CallOriginType.ACCOUNT_ROUTER:     
            console.log('Call came from account router: ' + callOrigin.getRouterID());
            break;
    }
});
```

#### ChannelState

ChannelState Schema
```typescript
export enum ChannelState {
    STARTING = 0,
    RINGING = 1,
    ACTIVE = 2,
    ENDED = 3,
}
```

Usage:
```js
const {CallControl, ChannelState} = require('@clearvox/callcontrol');

... connect and get a channel ...

if (channel.state === ChannelState.ACTIVE) {
    console.log('Channel is active');
} else if (call.state === ChannelState.ENDED) {
    console.log('Channel is ended');
}

// map number to string
console.log(ChannelState[channel.state]);
// e.g. > ACTIVE
```


#### ChannelDirection

ChannelDirection Schema
```typescript
export enum ChannelDirection {
    INCOMING = 'in',
    OUTGOING = 'out',
}
```

Usage:
```js
const {CallControl, ChannelDirection} = require('@clearvox/callcontrol');

... connect and get a channel ...

if (channel.direction === ChannelDirection.INCOMING) {
    console.log('Channel is incoming');
} else if (channel.direction === ChannelDirection.OUTGOING) {
    console.log('Channel is outgoing');
}

// map 'in' to 'INCOMING'
console.log(ChannelDirection[channel.direction]);
// e.g. > INCOMING
```

### Handling Errors

Both CallControl and Call extend EventEmitter. This means that you should handle error events like this:

```js
...Connect...

callControl.onError((error) => {
    console.error('An error occured', error);
});

callControl.onChannelStart((channel) => {
    channel.onError((error) => {
        console.error('An error occured for channel: ' + channel.getChannelID(), error);
    });
});
```

 > **NOTE:** Not setting error listeners might cause `Unhandled 'error' event`

These errors should return a CallControlError object:

```typescript
class CallControlError {
    getCode(): string; // e.g. INVALID_ACTION_FOUND
    getRawCode(): number; // e.g. 400
    getMessage(): string;
    getCallID(): string; //might not always be set
}
```

Codes can be one of:

```typescript
export enum ErrorCodes {
    INVALID_ACTION_ERROR = 400,
    CALL_NOT_FOUND_ERR = 401,
    NO_REGISTERED_PHONE_FOUND_ERROR = 402,
    ACTION_FAILED_UNKNOWN = 403,
    FLEX_NOT_LOGGED_IN_ERROR = 404,
    CALL_TO_BRIDGE_NOT_FOUND = 405,
    CANNOT_DECIDE_CHANNEL = 406,
    CANNOT_ANSWER_ANSWERED = 407,
    CALLS_MUST_BE_ANSWERED = 408,
    COULD_NOT_REGISTER_APP = 409,
}
```


