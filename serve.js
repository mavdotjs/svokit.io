import express from 'express';
import http from 'http';
import mpath from 'path';
import * as socket from 'socket.io';

export default async function createServer(config, handler) {
    const app = express()
    const server = http.createServer(app)
    const io = new socket.Server((await config).socket.options || {})
    await (await config).mount(io, server)
    app.use(handler)
    return server
}

/**
 * 
 * @param {Config} config 
 */
async function serve(config) {
    const { handler } = await import(mpath.join(process.cwd(), config.out, 'handler.js'))
    const server = await createServer(config, handler);
    server.listen(config.port || 8080, '0.0.0.0')
}

async function servedefault() {
    return await serve(await (await import('./config.js')).default)
}

export {
    serve,
    servedefault
}