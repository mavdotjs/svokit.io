# Svokit.io
This module allows socket.io to bind to a sveltekit (vite) server
Start by initializing a sveltekit server: `npm create @svelte-add/kit@latest`<br />
Next, install this library: `npm i svokit@latest`<br />

## Config
To initialize svokit, you'll need to create a svokit config, and apply the plugin to the vite config:

svokit.config.mjs
```js
import { defineConfig } from "svokit"
// code here must be written in mjs compatible format, $lib does not apply here.
export default defineConfig({
    out: 'build', // Same as out in svelte config
    mount(io, server/*optional*/) {
		// socket.io code here
        console.log(io)
    }
})

```

vite.config.cjs
```js
import { sveltekit } from '@sveltejs/kit/vite';
import svokit from 'svokit';

/** @type {import('vite').UserConfig} */
const config = {
	// ...
	plugins: [sveltekit(), svokit(), /*...*/]
}

export default config;
```

Your svelte.config.js should look similar to this

```js
import adapter from '@sveltejs/adapter-node'; //? Only works with adapter node
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// ...
	kit: {
		// ...
		adapter: adapter({
			out: "build" //? should be the same as out in svokit config 
		})
	}
};

export default config;
```

Make sure `@sveltejs/adapter-node` is installed in lieu of `@sveltejs/adapter-auto` that comes with svelte-add

To run the built app, instead of running `node buildfolder`, run `npx svokit`, or just `svokit` in package scripts.