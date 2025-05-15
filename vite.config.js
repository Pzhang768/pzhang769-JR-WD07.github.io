import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/pzhang769-JR-WD07.github.io/', // 👈 important
});
