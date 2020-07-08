interface OktaConfig {
    issuer: string;
    redirectUri: string;
}

declare module '@okta/okta-auth-js' {
    class OktaAuth {
        constructor(config: OktaConfig)
    }

    export = OktaAuth;
}