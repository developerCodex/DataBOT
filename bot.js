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
  }

    if(message.content.startsWith(prefix + "kick")) {
  let modRole = message.guild.roles.find("name", "Commander");
  if(!message.member.roles.has(modRole.id)) {
    return message.reply("Sorry, you do not have the correct permissions to use this command, try again later.");
  }
  if(message.mentions.users.size === 0) {
    return message.reply("Sorry, please mention a correct user to kick.")
  }
  let kickMember = message.guild.member(message.mentions.users.first());
  if(!kickMember) {
    return message.reply("Sorry, that user doesn't seem to be vaild on this server.");
  }
  if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
    return message.reply("Sorry, I do not have the permission to kick members.");
  }
  kickMember.kick().then(member => {
    message.reply(`${message.user.username} was sucessfully kicked from the server/guild.`)
  }).catch(e => {
    console.error(e);
});
}
if(message.content.startsWith(prefix + "ban")) {
let modRole = message.guild.roles.find("name", "Commander");
if(!message.member.roles.has(modRole.id)) {
return message.reply("Sorry, you do not have the correct permissions to use this command, try again later.");
}
if(message.mentions.users.size === 0) {
return message.reply("Sorry, please mention a correct user to ban.")
}
let banMember = message.guild.member(message.mentions.users.first());
if(!banMember) {
return message.reply("Sorry, that user doesn't seem to be vaild on this server.");
}
if(!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")) {
return message.reply("Sorry, I do not have the permission to ban members.");
}
banMember.ban().then(member => {
message.reply(`${message.user.username} was sucessfully banned from the server/guild.`)
}).catch(e => {
console.error(e);
});
}
});

bot.login(config.token);
