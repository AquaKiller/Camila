const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    const embed = new Discord.RichEmbed()
    embed.addField("Message Latency", `${Date.now() - message.createdTimestamp} milliseconds`);
    embed.addField("API Latency", `${Math.round(client.ping)} milliseconds`);
    embed.addField("Shard Latency", `${Math.round(client.ping)} milliseconds`);
    embed.setColor("BLACK");
    message.channel.send({ embed: embed });
};
