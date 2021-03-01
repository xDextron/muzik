const Discord = require('discord.js');


exports.run = function(client, message) {
 
    const embed = new Discord.RichEmbed()
        .setDescription("**Alt Yapım**")
        .setImage("https://resmim.net/f/ckojv8.jpg?nocache")
        .setThumbnail("https://resmim.net/f/ckojv8.jpg?nocache")
        .setColor(0x00AE86)
        .addField("Kaç Komutu Var", "300+ Komuttan Fazla Komutum Var", true)
        .addField("Özelliklerim", `
        *300+ Komutu var
  *Alt Yapı Sahipi:aeron#3391
   * Efsane bir Bot :smile:
   `, true)

   message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'altyapım',
  description: 'Alt Yapı hakkında bilgi verir',
  usage: 'altyapı'
};