export abstract class Action {
    protected constructor(
        private actionName: string,
        private params: { [key: string]: any } = {}
    ) {

    }

    getName() {
        return this.actionName;
    }

    getParams() {
        return this.params;
    }
}