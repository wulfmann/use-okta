import OktaAuth from '@okta/okta-auth-js';

export class Auth {
    public client: OktaAuth;

    constructor(config: any) {
        this.client = new OktaAuth(config);
    }
}
