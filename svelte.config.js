<<<<<<< Updated upstream
import adapter from "@sveltejs/adapter-cloudflare";
=======
import adapter from '@sveltejs/adapter-cloudflare';
import { importAssets } from 'svelte-preprocess-import-assets';
>>>>>>> Stashed changes

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [importAssets()],
	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter()
	}
};

export default config;