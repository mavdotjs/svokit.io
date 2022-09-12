import { defineConfig } from "svokit"


export default defineConfig({
    out: 'build', // Same as out parameter provided to node adapter in the svelte.config.js (only used in build)
    mount(io) // provides socket.io server (used in build and dev)
    {
        console.log(io)
    }
})

class Room {
    #name
    constructor(name) {
        this.#name = name
    }
}