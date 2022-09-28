import { Server as Sock } from "socket.io"
import config from "./config.js"

export default function plugin() {
    return{
        name: `realtime`,
        async configureServer(serv) {
            const io = new Sock(serv.httpServer)
            await (await config).default.mount(io, serv)
        }
    }
}
export function defineConfig(config) {return config}