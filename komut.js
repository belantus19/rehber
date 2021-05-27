const Discord = require('discord.js')
module.exports = {
	name:'rehber',
	description:'rehber çağırmaya yarar',
	execute(client,message,args){
	 var logkanali = 'MESAJINGİDECEĞİKANALID'
	 var rehberid = 'REHBERROLÜID'
	 var embed = new Discord.MessageEmbed()
     .setColor("GREEN")
     .setTitle("Birisi rehber çağırdı!")
     .setFooter("Made by Belantus")
     .setTimestamp()
     .addField(`Çağıran kişi :`,`${message.author.username}`)
     .addField(`Mesaj linki :`,`https://discord.com/channels/${message.guild.id}/${message.channel.id}`)
     var log = message.guild.channels.cache.get(logkanali)
     message.channel.send(new Discord.MessageEmbed().setDescription('✅ Başarılı bir şekilde rehber çağırıldı, en kısa sürede gelicektir lütfen bekleyiniz.'))
     log.send(`<@&${rehberid}>`)
     log.send(embed)
	}
}
//Made by Belantus#3519
