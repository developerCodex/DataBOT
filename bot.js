// Discord.js Latest Version
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config")
const prefix = config.prefix

client.on('ready', () => {
  console.log('I am ready!');
  client.user.setGame(config.setgame, "https://www.twitch.tv/discordapp")
});

client.on('message', message => {
if(message.content.startsWith(prefix + 'ping')) {
    message.channel.sendMessage("Pong!");
  }
});

client.login(config.token);
