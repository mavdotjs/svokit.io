import type { Server as Sock } from "socket.io";
import type { Plugin } from 'vite'
import type { Server as HTTPServer } from 'node:http'
import type { Server as HTTPSServer } from 'node:https'


declare function plugin(): Plugin
/**
 * @description Contains all svocket config
 */
type Config = {
    mount(io: Sock, server: HTTPSServer | HTTPServer): void,
    out: string | "build" | "out"
}

export { Config }
export default plugin