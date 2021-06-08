module.exports = {
    name: 'clear',
    permissions: ["ADMINISTRATOR", "MANAGE_MESSAGES"],
    description: "This is a clear command.",
    async execute(message, args, cmd, client, Discord) {
        if(!args[0]) return message.reply("Please enter the amount om messages that you want to clear!");
        if(isNaN(args[0])) return message.reply("Please enter a real number!");

        if(args[0] > 50) return message.reply("You cannot clear more than 50 messages!");
        if(args[0] < 1) return message.reply("If you want to clear messages, the number must be greater than 1!");
        
        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
    }
}