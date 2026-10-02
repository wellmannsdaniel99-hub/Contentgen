# Contentgen Autopilot backend

This folder now contains a runnable Express/TypeScript backend. The mobile app can use it via `EXPO_PUBLIC_CONTENTGEN_API_URL`.

## Run
Copy `.env.example` to `.env`, then install dependencies and run `npm run dev` inside `backend/`.

## Trend providers
The backend intentionally uses an adapter (`TREND_PROVIDER_URL` + server-only token) rather than scraping social platforms from the mobile client. Until a permitted provider is configured, it returns clearly separated fallback/evergreen/AI signals. Provider secrets never belong in Expo.

Endpoints: `GET /health`, `GET /v1/discover`, `POST /v1/autopilot/run`.
