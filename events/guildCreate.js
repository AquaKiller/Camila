const Discord = require("discord.js");

module.exports = async (client, guild) => {
    const embed = new Discord.RichEmbed()
    embed.setTitle("Guild Create");
    embed.addField("Response", "I have been added to a new guild.");
    embed.addField("Guild Name", `${guild.name} (${guild.id})`);
    embed.setColor("GREEN");
    
    client.user.setPresence(`${client.users.size} Users`, {
        type: "WATCHING",
        status: "dnd"
    });
};