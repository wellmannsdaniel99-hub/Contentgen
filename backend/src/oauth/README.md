# Official social authorization

Contentgen uses platform-documented OAuth only. TikTok authorization starts with a cryptographically random anti-CSRF state and requests only configured scopes. The authorization code must be exchanged server-side after state validation. Client secrets, access tokens and refresh tokens must never be exposed to the Expo client or committed to Git.

Token exchange/storage is intentionally left behind the deployment secret boundary: configure the registered HTTPS redirect URI and server secret store first, then enable the callback exchange. Publishing stays disabled until app approval/audit and user authorization are complete.
