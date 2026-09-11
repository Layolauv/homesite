import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [ vitePreprocess(), mdsvex({ extensions: [ '.svx', '.md' ] }) ],
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		alias: { '$assets': 'src/assets' },
		paths: {
			base: process.env.BASE_PATH ?? ''
		}
	},
	extensions: [ '.svelte', '.svx', '.md' ]
};

export default config;
