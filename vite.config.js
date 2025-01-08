import { sveltekit } from '@sveltejs/kit/vite';
<<<<<<< Updated upstream
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()]
=======
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [enhancedImages(), sveltekit()]
>>>>>>> Stashed changes
});
