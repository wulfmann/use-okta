interface OktaConfig {
    issuer: string;
    redirectUri: string;
}

interface UserInfo {
    
}

declare module '@okta/okta-auth-js' {
    class OktaAuth {
        constructor(config: OktaConfig)
    }

    export = OktaAuth;
}