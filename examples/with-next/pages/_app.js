import { AuthProvider, UserProvider, CALLBACK_ROUTE } from 'use-okta';

const MyApp = ({ Component, pageProps, router }) => {
    const oktaConfig = {
        issuer: 'example-issuer',
        clientId: 'example-client-id',
        redirectUri: 'http://example-redirect-uri/implicit/callback'
    }

    if (router.route === CALLBACK_ROUTE) {
        return (
            <AuthProvider {...oktaConfig}>
                <Component {...pageProps} />
            </AuthProvider>
        )
    }

    return (
        <AuthProvider {...oktaConfig}>
            <UserProvider>
                <Component {...pageProps} />
            </UserProvider>
        </AuthProvider>
    );
};

export default MyApp;