# Svokit.io
This module allows socket.io to bind to a sveltekit (vite) server
Start by initializing a sveltekit server: `npm create @svelte-add/kit@latest && npm i -D vite@latest`<br />
Next, install this library: `npm i svokit@latest`<br />
then replace adapter-auto with adapter-node: `npm uninstall @sveltejs/adapter-auto && npm i -D @sveltejs/adapter-node`
and replace the import in the svelte.config.js file: `import adapter from "@sveltejs/adapter-node";`

## Config
To initialize svokit, you'll need to create a svokit config, and apply the plugin to the vite config:

svokit.config.mjs
```js
// optional typing
/** @type {import('svokit').Config} */
export default {
    out: 'out', // Same as out parameter provided to node adapter in the svelte.config.js (only used in build)
    mount(io) // provides socket.io server (used in build and dev)
    {
        io.on(/*...*/)
    }
}
```

vite.config.js
```js
import { sveltekit } from '@sveltejs/kit/vite';
import svokit from 'svokit';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), svokit()]
};

export default config;
```

To run the built app, instead of running `node buildfolder`, run `npx svokit`, or just `svokit` in package scripts.