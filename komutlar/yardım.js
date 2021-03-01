const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let müzik = new Discord.RichEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('RANDOM')
.addField('DJVortex Bot | Müzik Komutları',`
**.oynat ** : Belirttiğiniz Şarkıyı bot çalar
**.duraklat** : Çalan Şarkıyı Durdurur
**.devam** : Durdurduğunuz Şarkıyı Devam Ettirir
**.tekrar** : Çalan Şarkıyı Tekrarlar
**.bitir** : şarkı çalmayı bitirir
**.geç** : sonraki şarkıya geçer Sırada şarkı yoksa şarkılar sonlandırılır
**.çek** : Botu Sese Çeker 
**.ses : **Ses Seviyesini Belirler`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
.setThumbnail("https://cdn.discordapp.com/attachments/728882982668206160/746041519538176142/Baslksz9_20200820192227.png")
.setImage("https://images-ext-1.discordapp.net/external/vfGPjNe8UBTW3wv5Uy6prj4c52FxUKp2Pir4YceCZ8U/%3Fv%3D1595248639083/https/cdn.glitch.com/b91a8042-facc-4ace-9071-e6f6c22b9e47%252Ftenor%2520%282%29.gif")
.addField(
  "» Linkler",
        `[Davet Linkim hemen ekleyin !!](https://discord.com/oauth2/authorize?client_id=746036168767832104&scope=bot&permissions=2146958847)` +
        "**\n**" +
        `[ Web sitem](https://vortexbotvol.glitch.me/)` +
        "**\n**" +
        `[Destek Sunucum](https://discord.gg/pgpwE7Q)`,
      false
    )
 message.channel.send(müzik) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["yardım"], 
  permLevel: 0
};
exports.help = {
  name: 'müzik'
};
  