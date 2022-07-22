#! /usr/bin/env node
import cac from 'cac'
import config from './config.js';
import serve from './serve.js';
const cli = cac('svokit')

cli
    .command('[root]', "Run built svokit project.")
    .alias('run')
    .action(async () => {
        const server = await serve(config);
        console.log(`svokit: ${server.host}:${server.port}`)
    })

cli.parse()