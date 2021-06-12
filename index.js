var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: "GamersInUnity Community",
            assets: {
                large_image: "Image",
                large_text: "GamersInUnity Community" // THIS WILL SHOW AS "Playing <Status>" from the outisde
            },
            buttons: [{ label: "Join", url: "https://discord.gg/uvbCTWQTmE" }, { label: "Website", url: "https://gamersinunitystudios.weebly.com/" }]
        }
    })
})
client.login({ clientId: "853331596933726210" }).catch(console.error);