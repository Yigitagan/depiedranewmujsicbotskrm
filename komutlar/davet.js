const Discord = require("discord.js")
const fs = require("fs")

exports.run = async (client, message, args) => {
const embed = new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor(`DePiedra Müzik Davet Linki`, client.user.avatarURL())
.setDescription('**• [Davet Et](ŞUAN YOK)**\n')
.setFooter(`${message.author.username} tarafından istendi!`) 
.setTimestamp()
.setThumbnail('https://cdn.discordapp.com/app-icons/522870338867167254/c82cd947b45d9d3a0f34ba8aaf0422ee.png')
message.channel.send(embed)   
 };

 exports.config = {
      name: 'davet',
   aliases: ["invitation","site"]
 };