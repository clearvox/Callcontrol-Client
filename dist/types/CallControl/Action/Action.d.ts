export declare abstract class Action {
    private actionName;
    private params;
    protected constructor(actionName: string, params?: {
        [key: string]: any;
    });
    getName(): string;
    getParams(): {
        [key: string]: any;
    };
}
