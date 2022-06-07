// Maak een profiel aan als iemand de server joined.

const profileModel = require("../../models/profileSchema");
const config = require("./../../Other/config.js");

module.exports = async (message, args, cmd, client, Discord, member, profileData) => {
  const tagfull = message.author.tag
  const tag = tagfull.substr(-4);
  const rndIntmax = 10000000000000
  const rndIntmin = 1
  const rndInt = Math.round(Math.floor(Math.random() * rndIntmax) + rndIntmin)
  let profile = await profileModel.create({
    userID: message.author.id,
    name: message.author.username,
    avatar: message.author.avatar,
    bot: message.author.bot,
    tag: tag,
    uni: rndInt,
    warnings: 0,

    scrapexotic: 0,
    scraplegendary: 0,
    scrapepic: 0,
    scraprare: 0,
    scrapuncommon: 0,
    scrapcommon: 0,

    music1: "https://www.youtube.com/",
    music2: "https://www.youtube.com/",
    music3: "https://www.youtube.com/",
    music4: "https://www.youtube.com/",
    music5: "https://www.youtube.com/",
    music6: "https://www.youtube.com/",

    level: 0,
    experience: 0,

    wallet: 0,
    bank: 0,

    boxesultra: 0,
    boxessuper: 0,
    boxesnormal: 0,

    shardsdiamond: 0,
    shardsplatinum: 0,
    shardsgold: 0,
    shardssilver: 0,
    shardsbronze: 0,
    shardsiron: 0,

    steel:0,
    steelpart:0,
    iron:0,
    carbon:0,
    rawiron:0,

    brick:0,
    clay:0,

    woodplank:0,
    woodpart:0,
    wood:0,
    logs:0,

    pipe:0,
    plasticpart:0,
    plastic:0,

    glass:0,
    limestone:0,
    sand:0,

    granite:0,
    marble:0,
    quartz:0,
    chalk:0,
    slate:0,
    basalt:0,

    phenolicfoam:0,
    polyurethane:0,
    xps:0,
    rockwool:0,
    foamglass:0,
    glasswool:0,
    doubleglass:0,
    tripleglass:0,

    fabric:0,
    cotton:0,
    fibre:0,

    bread:0,
    wheat:0,
    flower:0,

    meat:0,
    animal:0,

    vegetable:0,
    plant:0,

    polymaterial:0,
    acid:0,
    catalyst:0,

    chromepart:0,
    chrome:0,
    brasspart:0,
    brass:0,

    diamond:0,
    gold:0,
    platinum:0,
    silver:0,
    copper:0,
    lithium:0,
    cobalt:0,

    housetier1:0,
    housetier2:0,
    housetier3:0,
    housetier4:0,
    housetier5:0,

    warehousetier:0,
    policetier:0,
    firedepartmenttier:0,
    hospitaltier:0,
    malltier:0,
    cityhalltier:0,
    infrastructuretier:0,
    landfilltier:0,
    interiorshoptier:0,

    happinesslevel:0,
    crimerate:0,
    population: 0,

    reactortier: 0,
    factorytier: 0,
    energyplanttier: 0,
    waterpurificationtier: 0,
    gasplant: 0,
  });
  profile.save();
};