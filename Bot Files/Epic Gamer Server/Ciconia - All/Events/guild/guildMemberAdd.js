const profileModel = require("../../Models/profileSchema");
const config = require("./../../Other/config.js");

module.exports = async (message, args, cmd, client, Discord, member, profileData) => {
  let profile = await profileModel.create({
    userID: message.author.id,
    serverID: message.guild.id,
    name: message.author.username,

    coins: 0,
    bank: 0,
    
    level: 0,
    experience: 0,
  });
  profile.save();
};