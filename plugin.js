import { Server } from "socket.io"
import config from "./config.js"

export default function plugin() {
    return {
        name: 'svocket.io',
        configureServer(serv) {
            const io = new Server(serv.httpServer)
            config.mount(io)
        }
    }
}