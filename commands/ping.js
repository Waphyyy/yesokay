module.exports = {
    name: 'ping',
    description: 'ping',
    execute(message, args, Discord, client) {
        message.channel.send("Ah yes, " + Math.round(client.ws.ping) + 'ms');

    },
};