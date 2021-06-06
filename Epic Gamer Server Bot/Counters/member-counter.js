module.exports = async (client) =>{
    const guild = client.guilds.cache.get('774581093948325889');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('828592065868857404');
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
        console.log('Updating Member Count');
    }, 600000);
}
