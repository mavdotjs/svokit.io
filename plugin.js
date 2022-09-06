import { Server as Sock } from "socket.io"
import config from "./config.js"

export default function plugin(name = "main") {
    return {
        name: `realtime[${name}]`,
        configureServer(serv) {
            const io = new Sock(serv.httpServer)
            config.mount(io, serv)
        }
    }
}