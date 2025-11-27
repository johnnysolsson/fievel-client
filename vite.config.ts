
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: '/', // important for correct asset paths at domain root
  build: {
    outDir: 'dist',    // default for Vite, but explicit for clarity
    assetsDir: 'assets', // optional, keeps assets organized
    sourcemap: true
  }
});
