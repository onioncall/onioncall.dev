import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
  server: {
      port: 3277, // Change this to your desired port
      strictPort: false,
    }
});
