const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = "follow this guide to find out how to generate & find your oauth token: https://www.sitepoint.com/discord-bot-node-js/";
bot.commands = new Discord.Collection();
const botCommands = require('./commands');


Object.keys(botCommands).map(key => {
    bot.commands.set(botCommands[key].name, botCommands[key]);
});


bot.login(TOKEN);


bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
    const args = msg.content.split(/ +/);
    const command = args.shift().toLowerCase();
    console.info(`Called command: ${command}`);
  
    if (!bot.commands.has(command)) return;
  
    try {
      bot.commands.get(command).execute(msg, args);
    } catch (error) {
      console.error(error);
      msg.reply('there was an error trying to execute that command!');
    }

    // Useful for debugging the received message:
    // msg.channel.send(`Command name: ${command}\nArguments: ${args}`);

});