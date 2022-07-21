// Een counter die de hoeveelheid leden in een Discord server laat zien.
// Updatesmet een interval naar keuze. 

const config = require("../other/config.js");

module.exports = async (client) => {
    const botcount = config.base.botcount
    const guild = client.guilds.cache.get(config.base.baseguildid);
    const memberCount = guild.memberCount;
    const channel1 = guild.channels.cache.get(config.base.basemembercounterchannelid);
    channel1.setName(`Total Members: ${memberCount.toLocaleString()}`);
    console.log(`Updated current Member Count in ${guild.name}.`);

    const peopleCount = memberCount - botcount;
    const channel2 = guild.channels.cache.get(config.base.basepeoplecounterchannelid);
    channel2.setName(`Total People: ${peopleCount.toLocaleString()}`);
    console.log(`Updated current People Count in ${guild.name}.`);

    setInterval(() => {
        channel1.setName(`Total Members: ${memberCount.toLocaleString()}`);
        console.log(`Updating current Member Count in ${guild.name}.`);
        channel2.setName(`Total People: ${peopleCount.toLocaleString()}`);
        console.log(`Updating current People Count in ${guild.name}.`);
    }, config.base.basecounterinterval);
}
