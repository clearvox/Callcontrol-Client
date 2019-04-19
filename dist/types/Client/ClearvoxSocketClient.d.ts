export declare class ClearvoxSocketClient {
    private baseURL;
    private token;
    private accountID;
    private socket;
    constructor(baseURL: string, token: string, accountID: string);
    private init;
    onConnect(callback: () => {}): this;
    onError(callback: (error: any) => {}): this;
    onDisconnect(callback: (error: any) => {}): this;
    on(event: string, callback: (data: any) => any): this;
    once(event: string, callback: (data: any) => any): this;
    emit(channel: string, data: any, callback?: () => any): void;
}
