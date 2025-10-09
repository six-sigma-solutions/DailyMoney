# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Local development notes

- Backend dev server: by default the backend runs on port 4001 during local development (started with `PORT=4001 npm run dev` inside `backend/`).
- Frontend dev server: Vite runs on 5173 (or the next available port).
- API configuration: the frontend reads `import.meta.env.VITE_API_URL`. If this is empty, the app will POST to the same origin using `/api/*` (recommended for deployed sites). For local development, set `VITE_API_URL=http://localhost:4001` when you need the frontend to target a backend running on your machine.

Examples (PowerShell):

```powershell
cd backend
$env:PORT=4001; npm run dev
cd ..
npm run dev
```

If multiple developers test on different machines or you deploy the frontend to a public host, avoid hardcoding `http://localhost:4001` in the source so other users' browsers don't try to connect to their own localhost.

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
