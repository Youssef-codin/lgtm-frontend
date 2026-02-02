import { authClient } from '@/lib/auth-client'; //import the auth client

export async function handleLogin() {
  await authClient.signIn.social({
    provider: 'github',
    /**
     * A URL to redirect after the user authenticates with the provider
     * @default "/"
     */
    callbackURL: 'http://localhost:8000/dashboard',
    /**
     * A URL to redirect if an error occurs during the sign in process
     */
    errorCallbackURL: '/error',
    /**
     * A URL to redirect if the user is newly registered
     */
    // newUserCallbackURL: '/dashboard',
    /**
     * disable the automatic redirect to the provider.
     * @default false
     */
    disableRedirect: false,
  });
}
