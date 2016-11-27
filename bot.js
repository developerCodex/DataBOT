// Discord.js Latest Version
const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config")
const prefix = config.prefix

bot.on('ready', () => {
  console.log('I am ready!');
  bot.user.setGame(config.setgame, "https://www.twitch.tv/discordapp")
});

bot.on('message', message => {
if(message.content.startsWith(prefix + "ping")) {
    message.channel.sendMessage("Pong!");
  }
  if(message.content.startsWith(prefix + "foo")) {
    message.channel.sendMessage("bar!")
});

bot.login(config.token);
