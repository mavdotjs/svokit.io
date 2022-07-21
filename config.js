const config = (await import(process.cwd() + "/svokit.config.mjs")).default
if(!config) throw new Error("svokit.config.mjs not found or doesnt contain default export")

export default config;