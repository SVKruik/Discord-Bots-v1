module.exports = {
  name: "ban",
  aliases: [],
  cooldown: process.env.ASADMIN,
  description: "Ban a naughty naughty member.",
  permissions: ["ADMINISTRATOR"],
  execute(message, args) {
    const target = message.mentions.users.first();
    const username = message.client.user.username;

    if (target) {
      const memberTarget = message.guild.members.cache.get(target.id);
      memberTarget.ban();
      message.channel.send(
        `<@${memberTarget.user.id}> got 360 no-scoped by ${username}. He/she is no longer with us.`
      );
    } else {
      message.channel.send(process.env.MSGERR);
    }
  },
};
//`<@${memberTarget.user.id}> got 360 no-scoped by the MultiCube Community Bot! Reason \`${d.d}\`.`
