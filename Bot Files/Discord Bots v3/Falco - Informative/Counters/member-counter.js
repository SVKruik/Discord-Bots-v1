// Een counter die de hoeveelheid leden in een Discord server laat zien.
// Updatesmet een interval naar keuze. 

const config = require("../Other/config.js");

module.exports = async (client) => {
    const guild = client.guilds.cache.get(config.base.baseguildid);
    const memberCount = guild.memberCount;
    const channel = guild.channels.cache.get(config.base.basemembercounterchannelid);
    channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
    console.log(`Updated current Member Count in ${guild.name}.`);
    setInterval(() => {
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
        console.log(`Updating current Member Count in ${guild.name}.`);
    }, config.base.basemembercounterhz);
}