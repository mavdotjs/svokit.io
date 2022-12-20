import type { Server as Sock, ServerOptions } from "socket.io";
import type { Plugin } from 'vite'
import type { Server as HTTPServer } from 'node:http'
import type { Server as HTTPSServer } from 'node:https'

export { Sock as SocketServer }

declare function plugin(): Plugin
/**
 * @description Contains all sockit config
 */
type Config = {
    mount(io: Sock, server: HTTPSServer | HTTPServer): void,
    out: string | "build" | "out",
    socket?: {
        options?: ServerOptions
    },
    port?: number
}

export function defineConfig(config: Config): Config

export { Config }
export default plugin