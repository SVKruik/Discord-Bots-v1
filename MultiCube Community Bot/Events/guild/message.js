module.exports = (Discord, client, message) => {
    const prefix = '-';
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();
  
    try {
        command.execute(message, args, cmd, client, Discord);
    } catch (err){
        message.reply("There was an error trying to execute the specified command! Check the console to see what's wrong.");
        console.log(err);
    }
}