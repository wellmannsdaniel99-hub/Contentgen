# Contentgen

AI Content Autopilot for discovering opportunities, generating original social content, reviewing a queue and publishing through official platform APIs.

## Architecture
- Expo + React Native client
- TypeScript/Express backend
- PostgreSQL persistent queue
- Server-side scheduler
- Provider adapters for trends, AI text and media generation
- Compliance gate before publishing
- Official social OAuth/publishing boundaries

## Production path
The backend is Docker-ready. See `backend/DEPLOYMENT.md`. After deployment, configure the Expo app with `EXPO_PUBLIC_CONTENTGEN_API_URL`, then register that HTTPS origin/callback with approved social-platform developer apps.

Publishing stays disabled until the platform connection is fully authorized and tested.
