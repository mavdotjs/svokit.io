import express from 'express';
import http from 'http';
import mpath from 'path';
import * as socket from 'socket.io';

/**
 * 
 * @param {Config} config 
 */
export default async function serve(config) {
    const { handler } = await import(mpath.join(process.cwd(), config.out, 'handler.js'))
    const app = express();
    const server = http.createServer(app)
    const io = new socket.Server(server)
    await config.mount(io)
    app.use(handler)
    const path = process.env["SOCKET_PATH"] || false;
    const host = process.env["HOST"] || '0.0.0.0';
    const port = process.env["PORT"] || (!path && '3000');

    server.listen({ path, host, port });
    return { host, path, port, server };
}