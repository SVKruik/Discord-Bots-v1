const profileModel = require("../../models/profileSchema");
const config = require("./../../Other/config.js");

module.exports = async (message, args, cmd, client, Discord, member, profileData) => {
  const tagfull = message.author.tag
  const tag = tagfull.substr(-4);
  let profile = await profileModel.create({
    userID: message.author.id,
    serverID: message.guild.id,
    name: message.author.username,
    tag: tag,

    wallet: 0,
    bank: 0,

    level: 0,
    experience: 0,

    music1: "https://www.youtube.com/",
    music2: "https://www.youtube.com/",
    music3: "https://www.youtube.com/",
    music4: "https://www.youtube.com/",
    music5: "https://www.youtube.com/",
    music6: "https://www.youtube.com/",
  });
  profile.save();
};