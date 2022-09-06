# Svokit.io
This module allows socket.io to bind to a sveltekit (vite) server
Start by initializing a sveltekit server: `npm create @svelte-add/kit@latest`<br />
Next, install this library: `npm i svokit@latest`<br />

## Config
To initialize svokit, you'll need to create a svokit config, and apply the plugin to the vite config:

svokit.config.mjs
```js
/** @type {import('svokit').Config} */
export default {
    out: 'out', // Same as out parameter provided to node adapter in the svelte.config.js (only used in build)
    mount(io) // provides socket.io server (used in build and dev)
    {
        io.on(/*...*/)
    }
}
```

vite.config.cjs
```js
import { sveltekit } from '@sveltejs/kit/vite';
import svokit from 'svokit';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), svokit()]
};

export default config;
```

Your svelte.config.js should look similar to this

```js
import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter()
	}
};

export default config;
```

Make sure `@sveltejs/adapter-node` is installed in lieu of `@sveltejs/adapter-auto` that comes with svelte-add

To run the built app, instead of running `node buildfolder`, run `npx svokit`, or just `svokit` in package scripts.