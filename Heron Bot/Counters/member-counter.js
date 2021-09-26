module.exports = async (client) =>{
    const guild = client.guilds.cache.get('820580469757313025');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('873925840096886784');
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
        console.log('Updating Member Count.');
    }, 60000);
}