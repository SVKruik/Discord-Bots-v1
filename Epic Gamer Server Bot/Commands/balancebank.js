module.exports = {
    name: 'balbank',
    permissions: ["SEND_MESSAGES"],
    description: "This command shows your bank balance.",
    async execute(message, args, cmd, client, Discord, profileData) {
        message.channel.send(`${message.author.username}, this is your current bank balance : \`${profileData.bank}\`.`);
    }
}
  