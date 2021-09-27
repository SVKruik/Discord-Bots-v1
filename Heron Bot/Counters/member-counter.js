module.exports = async (client) =>{
    const guild = client.guilds.cache.get(process.env.GUILDID);
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get(process.env.MEMBERCOUNTERCHANNEL);
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
        console.log(`Updating current Member Count in ${guild.name}.`);
    }, 900000);
}