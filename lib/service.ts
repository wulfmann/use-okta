import OktaAuth from '@okta/okta-auth-js';

export class Auth {
    public client: OktaAuth;

    constructor(config: OktaConfig) {
        this.client = new OktaAuth(config);
    }
}
