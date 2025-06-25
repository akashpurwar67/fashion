// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // or other plugins you use

export default defineConfig({
  base: 'akashpurwar67/fashion', // 👈 important
  plugins: [react()],
});