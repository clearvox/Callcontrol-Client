import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';

export class ClearvoxAPIClient {
    private baseURL: string;
    private client: AxiosInstance;

    constructor(serverURL: string, private apiKey: string) {
        this.baseURL = serverURL + '/api/1/';
        this.init();
    }

    private init() {

        this.client = axios.create({
            baseURL: this.baseURL,
            timeout: 10000,
            headers: {
                'X-Auth-Token': this.apiKey,
            }
        });
    }

    public makeRequest(config: AxiosRequestConfig) {
        return this.client.request(config);
    }

    makeGetRequest(url: string) {
        return this.makeRequest({
            method: 'get',
            url: url,
        });
    }

    makePostRequest(url: string, data: any = {}): Promise<AxiosResponse> {
        return this.makeRequest({
            method: 'post',
            url: url,
            data: JSON.stringify(data),
            headers: {
                "content-type": "application/json;charset=UTF-8",
            },
        });
    }

    getSocketInfo(): Promise<{token: string, accountID: string}> {
        return this.makePostRequest('/auth/verify', {api_key: this.apiKey}).then((response: AxiosResponse) => {
            return {
                token: response.data.data.token,
                accountID: response.headers['x-uc-aid'],
            };
        });
    }
}