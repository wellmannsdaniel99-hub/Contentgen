# Deploy Contentgen backend

The backend is container-ready and expects HTTPS at the hosting edge.

## Required production secrets
Set these in the host's secret/environment settings, never in Git: DATABASE_URL, AI_API_URL, AI_API_KEY, AI_TEXT_MODEL, MEDIA_API_URL, MEDIA_API_KEY, TREND_PROVIDER_URL/TOKEN, and later TikTok/Meta OAuth credentials.

## Health check
GET /health must return ok=true. The database flag should be true in production.

## App configuration
Set EXPO_PUBLIC_CONTENTGEN_API_URL in the Expo build environment to the deployed HTTPS API origin.

## Safety gates
PUBLISHING_ENABLED remains empty until official platform authorization, required app review/audit, callback/token storage, and end-to-end test publishing are complete.

The included Render Blueprint is one deployment option; the Dockerfile is portable to other container hosts.
