# Bortoman Bangla Frontend - Setup Guide

This is a Next.js 16 + React 19 frontend project.

## 1. Prerequisites

Install these tools first:

- Node.js 22.18.0 LTS or newer
- npm 10.9.3 or newer
- Git

Check installed versions:

```powershell
node -v
npm -v
git --version
```

## 2. Get the project

If you already have this repo locally, skip to step 3.

```powershell
git clone <YOUR_REPOSITORY_URL>
cd NewsWebsite/frontend
```

If the repo is already cloned:

```powershell
cd "d:\AI Developer\NewsWebsite\frontend"
```

## 3. Install dependencies

Use lockfile-based install (recommended):

```powershell
npm ci
```

Fallback command:

```powershell
npm install
```

## 4. Configure environment variables

This project uses `NEXT_PUBLIC_API_URL`.

For local development, `.env.local` should contain:

```env
NEXT_PUBLIC_API_URL=http://localhost:4000
```

If `.env.local` does not exist, create it:

```powershell
Set-Content -Path .env.local -Value "NEXT_PUBLIC_API_URL=http://localhost:4000"
```

For production builds, `.env.production` can contain:

```env
NEXT_PUBLIC_API_URL=https://api.yourbackend.com
```

## 5. Run the app in development

```powershell
npm run dev
```

Open: http://localhost:3000

## 6. Code quality and tests

Run linter:

```powershell
npm run lint
```

Run tests once:

```powershell
npm run test
```

Run tests in watch mode:

```powershell
npm run test:watch
```

Run tests with coverage:

```powershell
npm run test:coverage
```

## 7. Build and run in production mode

Create production build:

```powershell
npm run build
```

Start production server:

```powershell
npm run start
```

Default production URL: http://localhost:3000

## 8. Script reference

- `npm run dev` - start development server
- `npm run build` - create production build
- `npm run start` - run production server
- `npm run lint` - run ESLint
- `npm run test` - run unit tests once (Vitest)
- `npm run test:watch` - run tests in watch mode
- `npm run test:coverage` - generate coverage report

## 9. Common setup issues

If `npm ci` fails:

```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json
npm install
```

If port 3000 is already in use:

```powershell
$env:PORT=3001
npm run dev
```

If API requests fail in the browser:

- Verify `.env.local` has the correct `NEXT_PUBLIC_API_URL`
- Restart `npm run dev` after changing env variables
- Confirm your backend is running and reachable
