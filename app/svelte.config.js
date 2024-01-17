import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: 'app.html',
            precompress: false,
            strict: true
        }),
        alias: {
            '$routes': './src/routes',
            '$routes/*': './src/routes/*',
        },
    }
};

export default config;