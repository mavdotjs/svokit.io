import 'colors';
import fs from 'node:fs/promises';
import { join as j } from 'node:path';
import { cwd as c } from 'node:process';
import p from 'prompts'; 
const { default: pj } = await import(j(c(), "package.json"), {
    assert: { type: 'json' }
});
import r from 'node:readline';
import a from 'sisteransi'

const rl = r.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ex(v) {
    console.log(v)
}

const etoc = () => {
    return new Promise((k, e) => {
        rl.question("Press enter to proceed.", () => {
            ex(a.erase.up(4))
            k()
        })
    })
}
import 'colors'; // Updates string prototype to allow color
console.log("This command is currently in beta, use at your own risk".red)

await etoc()

const alldeps = Object.keys(pj.dependencies || []).concat(Object.keys(pj.devDependencies || []))

if(!alldeps.includes('@sveltejs/adapter-node')) throw new Error('This module requires svelte adapter node to be installed, replace your current adapter with @sveltejs/adapter-node')

function q(p, d) {
    return p.cyan + '? '.cyan + "(".gray + d.gray + ")".gray // Very bad code.
}

const configfile = j(c(), "svokit.config.mjs")
const response = await p([
    {
        type: 'text',
        name: 'out',
        message: q("What folder does your project build to", "check the node adapter parametere in your svelte config"),
        initial: 'build'
    },
    {
        type: 'toggle',
        name: 'overwrite',
        choices: [ "Yes", "No." ],
        message: q("Overwrite vite config", "Install svokit plugin for vite dev but removes any changes you have made.")
    }
])
await fs.writeFile(configfile, `/** @type {import('svokit').Config} */
export default {
    out: '${response.out | "build"}', // Same as out parameter provided to node adapter in the svelte.config.js (only used in build)
    mount(io) // provides socket.io server (used in build and dev)
    {
        console.log(io)
    }
}`)

// TODO: Overwrite vite config

if(!response.overwrite) console.log("svokit config created, import the plugin in your vite config to run svokit in dev.".green)