# LuxeStay — Demo Hotel Booking UI

A lightweight demo frontend + minimal local auth for a luxury hotel booking UI. This repo is a starter app used to showcase pages, components and a simple client-side auth implementation (localStorage) suitable for demos and prototypes.

## Key features
- React + Vite SPA (TypeScript)
- Tailwind CSS-based UI components
- Simple client-side auth (localStorage) with demo users
- Guest and Admin areas (sign up, login, dashboard)
- Ready for Netlify deployment (netlify.toml included)

## Tech stack
- React 18 + TypeScript
- Vite
- Tailwind CSS
- pnpm for package management

## Quick start (macOS / Linux)
1. Install dependencies

```bash
pnpm install
```

2. Run the dev server

```bash
pnpm dev
```

3. Open the app

Visit http://localhost:5173 (Vite will print the exact URL)

## Useful scripts
- `pnpm dev` — start Vite dev server
- `pnpm build` — build client + server bundles
- `pnpm start` — run the built server (after `pnpm build`)
- `pnpm test` — run unit tests (vitest)
- `pnpm run typecheck` — run `tsc`

## Auth (demo)
This project uses a simple in-browser auth shim in `client/utils/auth.ts`. Users are stored in `localStorage` under the key `luxestay_users`, and the active session is stored under `luxestay_auth`.

Pre-seeded demo accounts (passwords shown for demo):
- Admin: `admin@luxestay.com` / `admin123`
- Manager: `manager@luxestay.com` / `manager123`
- Staff: `staff@luxestay.com` / `staff123`

Guest accounts can be created at `/guest/signup`. Signup does NOT auto-login; after signup you'll be redirected to the login page with the email prefilled.

## Pages to try
- Guest signup: `/guest/signup`
- Guest login: `/guest/login`
- Guest dashboard: `/guest/dashboard` (protected — redirects if not logged in)
- Admin login: `/admin/login`

## How to test the login/signup flow
1. Start the dev server: `pnpm dev`
2. Open `/guest/signup` and create a guest account (fill fields and check the terms box).
3. After signup you'll be redirected to `/guest/login?signup=success&email=...` with the email prefilled.
4. Sign in using the same password you used during signup. Successful sign-in stores session info in `localStorage`.
5. Visit `/guest/dashboard` to confirm you're logged in. Use the logout button to clear the session.

## Deployment
This repo includes a `netlify.toml` ready for Netlify deployments. Typical flow:

```bash
# build locally
pnpm build
# or deploy directly from your Git provider using Netlify
```

No server-side secrets or external services are required for the demo; everything is client-side.

## Development notes
- The simple auth implementation is intentionally in-memory/localStorage for demos. Do not use it in production.
- Auth helper: `client/utils/auth.ts` — useful functions: `signup`, `login`, `getCurrentUser`, `logout`.
- LocalStorage keys: `luxestay_users`, `luxestay_auth`.

## Tests & Typecheck
- Run typecheck: `pnpm run typecheck`
- Run unit tests: `pnpm test`

## Contributing
Contributions are welcome. Open an issue or a PR describing the change.

## License
This project is provided as-is for demo purposes. Add a license if you plan to reuse it for something public.
