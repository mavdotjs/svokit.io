#! /usr/bin/env node
import cac from 'cac'
import serve from './serve.js';
import { spawnSync } from 'node:child_process'
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url'
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const cli = cac('svokit')

cli
    .command('[root]', "Run built svokit project.")
    .alias('run')
    .action(async () => {
        const server = await serve(await import('./config.js'));
        console.log(`svokit: ${server.host}:${server.port}`)
    })

cli
    .command('setup', "Setup svokit config")
    .action(async () => {
        const cmd = `node --no-warnings ${resolve(__dirname, 'setup.js')}`
        spawnSync(cmd, { stdio: "inherit", shell: true })
    })

cli.parse()