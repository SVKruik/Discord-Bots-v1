require('console-stamp')(console, '[HH:MM]');

module.exports = {
  name: "ban",
  aliases: [],
  cooldown: process.env.ASADMIN,
  description: "Ban a naughty naughty member.",
  permissions: ["ADMINISTRATOR"],
  execute(message, args) {
    const target = message.mentions.users.first();
    const username = message.client.user.username;

    const reason1 = args[1]
    const reason2 = reason1.charAt(0).toUpperCase() + reason1.slice(1);
    
    if (target) {
      const memberTarget = message.guild.members.cache.get(target.id);
      memberTarget.ban();
      console.log(`${memberTarget.user.username} got banned because of: ${reason2}. This was done by ${message.author.username} using ${username}.`);
      message.channel.send(
        `<@${memberTarget.user.id}> got 360 no-scoped by ${username}. Reason: ${reason2}.`
      );
    } else {
      message.channel.send(process.env.MSGERR);
    }
  },
};
