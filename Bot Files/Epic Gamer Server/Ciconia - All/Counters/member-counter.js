const config = require("./../Other/config.js");

module.exports = async (client) =>{
    const guild = client.guilds.cache.get(config.base.baseguildid);
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get(config.base.basewelcomechannelid);
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
        console.log(`Updating current Member Count in ${guild.name}.`);
    }, config.base.basemembercounterhz);
}