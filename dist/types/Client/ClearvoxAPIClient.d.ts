import { AxiosRequestConfig, AxiosResponse } from 'axios';
export declare class ClearvoxAPIClient {
    private apiKey;
    private baseURL;
    private client;
    constructor(serverURL: string, apiKey: string);
    private init;
    makeRequest(config: AxiosRequestConfig): import("axios").AxiosPromise<any>;
    makeGetRequest(url: string): import("axios").AxiosPromise<any>;
    makePostRequest(url: string, data?: any): Promise<AxiosResponse>;
    getSocketInfo(): Promise<{
        token: string;
        accountID: string;
    }>;
}
