import { Server } from "socket.io";

declare function plugin(): {
    name: 'svokit.io',
    configureServer(server): void
}
/**
 * @description Contains all svocket config
 */
type Config = {
    mount(io: Server): void,
    out: string | "build" | "out"
}

export { Config }
export default plugin