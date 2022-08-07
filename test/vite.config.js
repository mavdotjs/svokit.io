import { sveltekit } from '@sveltejs/kit/vite';
import plugin from 'svokit'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), plugin()]
};

export default config;
