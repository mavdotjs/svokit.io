import { join } from 'node:path'
import { cwd } from 'node:process'

const root = cwd()
const loc = join(root, "svokit.config.mjs")

let config;

try {
    config = (await import(loc)).default;
} catch {
    config = null;
}
if(config === null) throw new Error("svokit couldn't detect a config file, run " + "svokit setup".italic + " To create a config file")

export default config;