import { Server } from "socket.io";

declare module 'svokit'

/**
 * @description Contains all svocket config
 */
declare type Config = {
    mount(io: Server): void,
    out: string | "build" | "out"
}


declare function plugin(): {
    name: 'svocket.io',
    configureServer(server): void
}



export default plugin;