module.exports = {
    name: 'ping',
    description: 'ping',
    execute(message, args, Discord, bot) {
        message.channel.send("Ah yes, " + Math.round(bot.ws.ping) + 'ms');

    },
};