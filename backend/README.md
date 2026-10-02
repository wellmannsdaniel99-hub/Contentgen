# Contentgen backend boundary

The mobile app must not hold social-platform or AI-provider secrets. Production Autopilot should run server-side.

Pipeline:
1. Fetch permitted trend signals from configured providers.
2. Normalize and rank by momentum, freshness, niche fit and originality.
3. Generate hook, script/caption, hashtags and visual brief.
4. Run safety/quality/duplicate checks.
5. Store media + draft in queue.
6. Review or auto-publish at schedule time.

The current `services/trends.ts` uses local seed signals so the app can be built without pretending live trend data is already connected. Replace that adapter with backend API calls when provider credentials and deployment are configured.
