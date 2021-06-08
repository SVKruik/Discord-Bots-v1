module.exports = {
    name: 'balbank',
    permissions: ["SEND_MESSAGES"],
    description: "This command shows your bank balance.",
    execute(message, args, cmd, client){
        message.channel.send(`This is your current bank balance : \`${profileData.bank}\`.`);
    }
}
  