/** @type {import('svokit').Config} */
export default {
    out: '0', // Same as out parameter provided to node adapter in the svelte.config.js (only used in build)
    mount(io) // provides socket.io server (used in build and dev)
    {
        console.log(io)
    }
}