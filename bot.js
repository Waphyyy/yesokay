const fs = require('fs');
const Discord = require('discord.js');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const exampleEmbed = new Discord.MessageEmbed();
const botsettings = require('./botsettings.json');

bot.once('ready', () => {
    console.log('Ready!');
    bot.user.setActivity(`was papping`);
});

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    bott.commands.set(command.name, command);
}

let prefix = 'e!'

bot.on('message', message => {
    if (message.content === 'was paping') {
        message.channel.send("AYEEEEEEEEEEEEEEEEEE");
        
    } if (message.content.includes('eri', 'ERI')) {
        message.channel.send("nani");
    
    } if (message.content.includes('grr')) {
        message.channel.send("lah bat ka galet");

    } if (message.content.includes('assignment', 'ass', 'hw')) {
        message.channel.send("bruh di niyo pa tapos?");
    
    } if (message.content.includes('crush', 'jowa', 'miss', 'love', 'mahal')) {
        message.channel.send("ayieEEEE");

    } if (message.content.includes('laro', 'tara', 'tra')) {
        message.channel.send("g");
    
    } if (message.content.includes('wew')) {
        message.channel.send("https://imgur.com/d8Ju3ot.png");
    
    } if (message.content.includes('waphy')) {
        message.channel.send("yo wtf");
        console.log(message.content);
    
    } if (message.content.includes('bonk')) {
        message.channel.send("https://imgur.com/23njQsL.gif");
    
    } if (message.content.includes('chan')) {
        message.channel.send(">///<");
    
    }

	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

	if (command === 'ping') {
        bot.commands.get('ping').execute(message, args, Discord, bot);

	} else if (command === '') {
        bot.commands.get('').execute(message, args, Discord, bot);
        
    }
});

bot.login(process.env.BOT_TOKEN);