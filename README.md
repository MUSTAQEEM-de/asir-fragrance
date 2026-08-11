# ASIR Fragrance

Full-stack e-commerce site for ASIR Fragrance. React + Vite + TypeScript frontend,
Express + MongoDB backend.

## Run locally

**Prerequisites:** Node.js, Docker Desktop (for local MongoDB)

1. Install dependencies: `npm install`
2. Copy `.env.example` to `.env` and fill in `JWT_SECRET` (a long random string)
3. Start MongoDB: `docker compose up -d`
4. Seed the product catalog: `npm run seed`
5. Start the backend: `npm run server:dev` (http://localhost:5000)
6. In a second terminal, start the frontend: `npm run dev` (http://localhost:3000)

## Scripts

- `npm run dev` — frontend dev server
- `npm run build` — production frontend build
- `npm run lint` / `npm run lint:server` — typecheck frontend / backend
- `npm run server:dev` — backend dev server (auto-restart)
- `npm run server:start` — backend, no auto-restart (used in production)
- `npm run seed` — upsert the product catalog into MongoDB from `src/data/products.ts`

## Deployment

- Frontend → Vercel (`vercel.json` included)
- Backend → Render (`render.yaml` included)
- Database → MongoDB Atlas
