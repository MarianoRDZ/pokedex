import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    base: mode === 'production' && env.GH_PAGES === 'true' ? '/pokedex/' : '/',
    server: {
      host: '0.0.0.0',
      port: 5173,
      strictPort: true,
    },
  };
});
