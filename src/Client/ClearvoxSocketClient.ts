import * as socketIO from 'socket.io-client';

export class ClearvoxSocketClient {
    private socket: any;

    constructor(private baseURL: string, private token: string, private accountID: string) {
        this.init();
    }

    private init() {
        let options: SocketIOClient.ConnectOpts = {
            path: '/event-server',
            query: 'token=' + this.token + '&X-UC-AID=' + this.accountID,
        };

        this.socket = socketIO(this.baseURL.toString(), options);

        this.socket.on('connect', function () {
            console.log('Socket connected.');
        });

        this.socket.on('connect_error', function (error: any) {
            console.log('Socket connection error', error);
        });

        this.socket.on('disconnect', function (error: any) {
            if (error === 'io server disconnect') {
                console.log('Socket connection lost', error);
            }
            console.log('Disconnected by server', error);
        });
    }

    onConnect(callback: () => {}) {
        this.socket.on('connect', callback);
        return this;
    }

    onError(callback: (error: any) => {}) {
        this.socket.on('connect_error', callback);
        return this;
    }

    onDisconnect(callback: (error: any) => {}) {
        this.socket.on('disconnect', callback);
        return this;
    }

    on(event: string, callback: (data: any) => any) {
        this.socket.on(event, callback);
        return this;
    }

    once(event: string, callback: (data: any) => any) {
        this.socket.once(event, callback);
        return this;
    }

    emit(channel: string, data: any, callback: () => any = null) {
        this.socket.emit(channel, data, callback);
    }
}