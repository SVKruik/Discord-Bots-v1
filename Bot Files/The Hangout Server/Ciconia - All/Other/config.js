require("console-stamp")(console, "[HH:MM]");
const ms = require("ms");
const profileModel = require("../models/profileSchema");
const util = require("minecraft-server-util");
var Scraper = require("images-scraper");
const math = require("mathjs");
const ytdl = require("ytdl-core");
const ytSearch = require("yt-search");
const queue = new Map();
const fs = require("fs");
const version = require("../package.json").version;

exports.base = {
  basecolor: "#76b3e1",
  baseguildid: "820580469757313025",

  basewalletdefault: "0",
  basebankdefault: "0",
  baseleveldefault: "0",
  baseexperiencedefault: "0",

  basewelcomechannelid: "850753468927049798",
  basemusicchannelid: "942848045421318185",
  basemusicroleid: "940616347900076073",

  baseimagechannelid: "942380437148409916",
  baseeventchannelid: "942438431282323487",
  basecolorchannelid: "942842691828457512",

  basemembercounterhz: '1500000',
  basemembercounterchannelid: "873925840096886784",

  baseticketgroupid: "852178171305525258",
  baseticketdeletetime: "5000", //ms -> sec * 1000

  basemuterole: "851141747424886794",
  baseblindrole: "852934692696358952",
};

exports.basemessages = {
  // General Messages
  messagesfinderror: "Could not find the specified variable.",
  messagesvcrequired: "You need to be in a voice channel in order to use this command.",
  messagesmembermention: "You need to mention someone to execute this command.",
  messagesaccountmissing: "This user does not have an account in our database.",
  messageserror: "There was an error sending the command.",
  messagesgreaternegaone: "Amount must be larger than \`-1\`.",
  messagesgreaterone: "Amount must be greater than \`0\`.",
  messagescoinsmissing: "You do not have that amount of coins to perform this command.",
  messagesrealnumber: "Please enter a real number.",
  messagesamountmissing: "You are missing the amount to clear.",
  messageemojierr: "There was an error with the emoji.",
}

exports.commandclear = {
  commandclearmissing: "You are missing the amount that you want to clear!",
  commandclearmax: 50,
  commandclearmin: 1,
}

exports.commandcolor = {
  commandcolormsg: "Yay",
  commandcolorerrmsg: "Not Yay",
}

exports.commandsearch = {
  commandsearchtimestop: "You have ran out of time!",
}

exports.commandevent = {
  teamoneid: "851901208016846848", // Blue
  teamtwoid: "851900697511329854", // Green
  teamthreeid: "851900638308728893", // Red
  teamfourid: "851901124973428786", // Yellow
}

exports.commandmcserver = {
  commandmcserverip: "Please enter a valid Minecraft server IP!",
  commandmcserverport: "Please enter a valid Minecraft server port!",
}

exports.commandleave = {
  commandleavemsg: "Leaving the voice channel."
}

exports.commandplay = {
  commandplayurl: "You are missing the link to the music video!",
  commandplayconnecterr: "There was an error while connecting to your voice channel!",
  commandplayskip: "Skipped the current song!",
  commandplaystop: "Stopped the current song!",
  commandplayqueueempty: "The music queue is empty!",
}

exports.commandapply = {
  commandapply: "If you would like to apply to one or our roles, please fill in this form: https://forms.gle/pabpqPiWeBp9aZ2a8",
}

exports.commandcommandtemplate = {
  commandcommandtemplate: "Template Message",
}

exports.commandimage = {
  commandimagemissing: "What image would you like to look up?",
}

exports.commandticket = {
  commandticketpending: "Thank you for contacting support, we will be right with you!",
}

exports.embeds = {
  //Titles
  titlebotstats: "Bot Statistics",
  titledonate: "Donate",
  titleembedtemplate: "Bot Template",
  titleevent: "Choose a team to play on!",
  titlegithub: "GitHub Repository",
  titlehelp: "Support",
  titlemcserver: "Minecraft Server Statistics",
  titleprofile: "Server Profile",
  titlerules: "House Rules",
  titleserverip: "MultiCube Community",
  titlecircle: "Cirkel Vergelijking",
  titlehoeklijn: "Hoek Tussen 2 Lijnen",
  titlepuntlijn: "Afstand Tussen Punt En Lijn",
  titlesubstitutie: "Substitutie Vergelijking",
  titletitreernormaal: "Titreer Berekening",
  titletitreerverdunning: "Titreer Verdunning Berekening",

  //Descriptions
  descriptionbotstats: "These are my current stats.",
  descriptiondonate: "Support our project by donating to us! Your funds will be used to improve our project. You can also help fund new hardware/software we need.",
  descriptionembedtemplate: "Template",
  descriptionevent: "Choosing a team will allow you to interact with your teammates while in a event! When a event starts with for example Bed Wars, you can choose your team here. Be aware though that teams will be balanced, and your pick is not always available.",
  descriptiongithub: "This is our GitHub repository. You can find a lot of information about anything there, so check it out!",
  descriptionhelp: "What topic can I help you with?",
  descriptionmcserver: "Here is some data about the server you asked for.",
  descriptionprofile: "Here is the data we have stored about you.",
  descriptionrules: "These are our house rules.",
  descriptionserverip: "Here is the Server IP for our Minecraft server, MultiCube.",
  descriptioncircle: "Een cirkelvergelijking oplossen.",
  descriptionhoeklijn: "De hoek tussen 2 lijnen berekenen.",
  descriptionpuntlijn: "De afstand tussen een punt en een lijn berekenen.",
  descriptionsubstitutie: "Een substitutie vergelijking oplossen.",
  descriptiontitreernormaal: "Een normale titreer berekening maken.",
  descriptiontitreerverdunning: "Een titreer berekening met verdunning maken.",

  //Names
  namebotstats1: "Uptime:", // Botstats
  namebotstats2: "API Ping:",
  namebotstats3: "Bot Ping:",
  namebotstats4: "Server ID:",
  namebotstats5: "Commands:",
  namebotstats6: "Bot Version:",
  namebotstats7: "Bot Owner",
  namedonate1: "Donate Link:", // Donate
  namedonate2: "Memberships:",
  nameembedtemplate1: "Name: A", // Embed Template
  nameembedtemplate2: "Name: B",
  namegithub1: "Main link:", // GitHub
  namegithub2: "---",
  namegithub3: "Child Servers:",
  namegithub4: "Issues:",
  namegithub5: "Update Log:",
  namemcserver1: "server IP:",
  namemcserver2: "Online Players:",
  namemcserver3: "Max Players:",
  namemcserver4: "Game Version:",
  namemcserver5: "Port:",
  namemcserver6: "Mods:",
  nameprofile1: "---", // Profile
  nameprofile2: "Name:",
  nameprofile3: "Tag:",
  nameprofile4: "userID",
  nameprofile5: "serverID",
  nameprofile6: "---",
  nameprofile7: "Coins:",
  nameprofile8: "Bank:",
  nameprofile9: "---",
  nameprofile10: "Level:",
  nameprofile11: "Experience:",
  nameprofile12: "---",
  nameprofile13: "Document ID:",
  nameprofile14: "Document Version:",
  namerules1: "Rule 1:",
  namerules2: "Rule 2:",
  namerules3: "Rule 3:",
  namerules4: "Rule 4:",
  namerules5: "Rule 5:",
  nameserverip1: "Server IP:",
  nameserverip2: "Game Version:",
  nameserverip3: "Mods:",

  //Values
  // valuebotstats1: `My current uptime is ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds.`, // Botstats
  // valuebotstats2: `${Math.round(client.ws.ping)} ms`,
  // valuebotstats3: `${Date.now() - message.createdTimestamp} ms`,
  // valuebotstats4: `${message.guild.id}`,
  // valuebotstats5: `${commands}`,
  valuebotstats6: `${version}`,
  valuebotstats7: `<@422704748488163332>`,
  valuedonate1: "https://ko-fi.com/multicubecommunity", // Donate
  valuedonate2: "https://ko-fi.com/multicubecommunity/tiers",
  valueembedtemplate1: "value: X", // Embed Template
  valueembedtemplate2: "value: Y",
  valuegithub1: "https://github.com/PuffinKwadraat/MultiCube-Public", // GitHub
  valuegithub2: "More links:",
  valuegithub3: "https://github.com/PuffinKwadraat/MultiCube-Public/tree/main/Minecraft%20Servers/Child%20Servers",
  valuegithub4: "https://github.com/PuffinKwadraat/MultiCube-Public/issues",
  valuegithub5: "https://github.com/PuffinKwadraat/MultiCube-Public/blob/main/Update%20Log.md",
  valueprofile1: "> **General:**", // Profile
  // valueprofile2: `${message.author.username}`,
  // valueprofile3: `#${tag}`,
  // valueprofile4: `${profileData.userID}`,
  // valueprofile5: `${profileData.serverID}`,
  valueprofile6: "> **Economy:**",
  // valueprofile7: `${profileData.coins}`,
  // valueprofile8: `${profileData.bank}`,
  valueprofile9: "> **Level:**",
  // valueprofile10: `${profileData.level}`,
  // valueprofile11: `${profileData.experience}`,
  valueprofile12: "> **Technical:**",
  // valueprofile13: `${profileData._id}`,
  // valueprofile14: `${profileData.__v}`,
  valuerules1: "Treat everyone with respect.",
  valuerules2: "Do not spam.",
  valuerules3: "Do not advertise yourself.",
  valuerules4: "Do not post NSFW or inappropriate content.",
  valuerules5: "Do not beg for a role/rank.",
  valueserverip1: "multicube.aternos.me",
  valueserverip2: "1.16.5",
  valueserverip3: "None",
}

exports.embed = {
  embedfooter: "Stats and Bot provided by Complex.",
  embedimage: "https://i.imgur.com/neCyTDH.png",
  embedlink: "https://github.com/PuffinKwadraat/MultiCube-Public",
};

exports.aliases = {
  // Command Aliases
  aliasesban: [], // Ban
  aliasesblind: [], // Blind
  aliasesclear: ["bulkdelete", "bulkdel"], // Clear
  aliaseskick: [], // Kick
  aliasesmute: [], // Mute
  aliasesping: ["pong"], // Ping
  aliasesunblind: [], // Unblind
  aliasesunmute: [], //Unmute
  aliasesuptime: [], // Uptime
  aliasescolor: ["clr", "colour"], // Color
  aliasescolorremove: ["clrremove", "colourremove", "clrrmv"], // Colorremove
  aliasesrolecolor1: ["rlclr1"], // Rolecolor1
  aliasesrolecolor2: ["rlclr2"], // Rolecolor2
  aliasesrolecolor3: ["rlclr3"], // Rolecolor3
  aliasesbalance: ["bal", "baltot", "baltotal", "showbal"], // Balance
  aliasesbalancebank: ["balbank"], // Balancebank
  aliasesbalancewallet: ["balwallet", "balwal"], // Balancewallet
  aliasesdailyreward: ["dlyrwd", "dr"], // Dailyreward
  aliasesdeposit: ["dep", "depo"], // Deposit
  aliasesgivebank: [], // Givebank
  aliasesgivefulleco: ["givebankwal", "givewalbank"], // Givebankandwallet
  aliasesgivewallet: ["givewal"], // Givewallet
  aliasesminusbank: ["minbank"], // Minusbank
  aliasesminusfulleco: [
    "minusbankwal",
    "minuswalbank",
    "minbankwal",
    "minwalbank",
  ], // Minusbankandwallet
  aliasesminuswallet: ["minwal"], // Minuswallet
  aliasessearch: ["srch"], // Search
  aliasessetbank: [], // Setbank
  aliasessetfulleco: [
    "setwalbank",
    "setwalletbank",
    "setbankwallet",
    "setbankwal",
  ], // Setbankandwallet
  aliasessetwallet: ["setwal"], // Setwallet
  aliaseswithdraw: ["with", "wit"], // Withdraw
  aliasesexperience: ["exp", "xp"], // Experience
  aliasesgiveexperience: ["givexp", "giveexp"], // Giveexperience
  aliasesgivefulllevel: [
    "givelvlxp",
    "givexplvl",
    "givelvlexp",
    "giveexplvl",
    "givefullevel",
  ], // Givelevelandexperience
  aliasesgivelevel: ["givelvl"], // Givelevel
  aliaseslevel: ["lvl"], // Level
  aliaseslevelstats: ["levelstats", "levelstat", "lvlstat", "lvlstats"], // levelstatistics
  aliasesminusexperience: ["minusexp", "minusxp", "minxp", "minexp"], // Minusexperience
  aliasesminusfulllevel: [
    "minuslvlxp",
    "minusxplvl",
    "minusexplvl",
    "minuslvlexp",
    "minlvlxp",
    "minxplvl",
    "minexplvl",
    "minlvlexp",
    "minusfullevel",
  ], // Minuslevelandexperience
  aliasesminuslevel: ["minuslvl", "minlvl"], // Minuslevel
  aliasessetexperience: ["setxp", "setexp"], // Setexperience
  aliasessetfulllevel: ["setlvlexp", "setlvlxp", "setfullevel"], // Setlevelandexperience
  aliasessetlevel: ["setlvl"], // Setlevel
  aliasesdonate: ["dnte"], // Donate
  aliasesembedtemplate: ["mbdtemp"], // Embedtemplate
  aliasesevent: [], // Event
  aliasesgithub: ["gh"], // Github
  aliaseshelpst1: ["support"], // Help
  aliasesmcserver: ["mc", "mccheck", "mcserver"], // Minecraftserver
  aliasesprofile: ["prof"], // Profile
  aliasesrules: ["rule", "rl"], // Rules
  aliasesserverip: ["server"], // Serverip
  aliasesbotstats: ["botstat", "botstats"], // Botstatistics
  aliasesleave: ["musicstop", "stop"], // Leave
  aliasesplay: ["music", "song"], // Play
  aliasesapply: ["form"], // Apply
  aliasescommandtemplate: ["cmdtemp"], // Commandtemplate
  aliasesflipacoinen: ["fac", "facen"], // Flipacoin
  aliasesflipacoinnl: ["facnl", "kopmunt", "kom"], // Kopofmunt
  aliasesimage: ["img"], // Image
  aliasesmath: ["math", "calc", "calculate"], // Math
  aliasesrpsen: ["rps"], //Rock Paper Scissor
  aliasesrpsnl: ["rpsnl", "spsnl", "sps"], //Steen Papier Schaar
  aliasessrpsen: ["srps"], // Stake Rock Paper Scissor
  aliasesticket: ["tkt"], // Ticket
  aliasescirkelvergelijking: ["circle"], // Cirkel
  aliaseshoeklijn: ["hkli"], // Hoeklijn
  aliasespunttotlijn: ["lijntotpunt", "puntlijn", "lijnpunt"], // Punttotlijn
  aliasessubstitutie: ["substitueren", "subst"], // Substitutie
  aliasestitreernormaal: ["titnorm", "titnormaal"], // Titratienormaal
  aliasestitreerverdunning: ["titverdun", "titverdunning"], // Titratieverdunning
};

const A = 84000; // Daily
const B = 0; // Admin
const C = 10; // Music
const D = 300; // Extreme
const E = 60; // Hard
const F = 30; // Medium
const G = 10; // Soft
const H = 0; // No cooldown
exports.cooldown = {
  cooldownban: B,
  cooldownblind: B,
  cooldownclear: B,
  cooldownkick: B,
  cooldownmute: B,
  cooldownping: B,
  cooldownunblind: B,
  cooldownunmute: B,
  cooldownuptime: B,
  cooldowncolor: B,
  cooldowncolorremove: B,
  cooldownrolecolor1: B,
  cooldownrolecolor2: B,
  cooldownrolecolor3: B,
  cooldownbalance: G,
  cooldownbalancebank: G,
  cooldownbalancewallet: G,
  cooldowndailyreward: A,
  cooldowndeposit: G,
  cooldowngivebank: G,
  cooldowngivefulleco: B,
  cooldowngivewallet: B,
  cooldownminusbank: B,
  cooldownminusfulleco: B,
  cooldownminuswallet: B,
  cooldownsearch: A,
  cooldownsetbank: B,
  cooldownsetfulleco: B,
  cooldownsetwallet: B,
  cooldownwithdraw: E,
  cooldownexperience: G,
  cooldowngiveexperience: B,
  cooldowngivefulllevel: B,
  cooldowngivelevel: B,
  cooldownlevel: G,
  cooldownlevelstats: G,
  cooldownminusexperience: B,
  cooldownminusfulllevel: B,
  cooldownminuslevel: B,
  cooldownsetexperience: B,
  cooldownsetfulllevel: B,
  cooldownsetlevel: B,
  cooldownbotstats: B,
  cooldowndonate: B,
  cooldownembedtemplate: B,
  cooldownevent: B,
  cooldowngithub: B,
  cooldownhelpst1: E,
  cooldownmcserver: B,
  cooldownprofile: E,
  cooldownrules: B,
  cooldownserverip: B,
  cooldownleave: C,
  cooldownplay: C,
  cooldownapply: E,
  cooldowncommandtemplate: B,
  cooldownflipacoinen: H,
  cooldownflipacoinnl: H,
  cooldownimage: G,
  cooldownmath: G,
  cooldownrpsen: H,
  cooldownrpsnl: H,
  cooldownsrpsen: H,
  cooldownticket: D,
  cooldowncirkelvergelijking: G,
  cooldownhoeklijn: G,
  cooldownpunttotlijn: G,
  cooldownsubstitutie: G,
  cooldowntitreernormaal: G,
  cooldowntitreerverdunning: G,
};

exports.descriptions = {
  // Not implemented.
  // Command Descriptions
  descriptionban: "Ban a naughty Member",
  descriptionblind: "Completly blind a member. Target cannot do anything.",
  descriptionclear: "Bulk delete messages.",
  descriptionkick:
    "Kick a irritating person, that you don't hate enough to ban.",
  descriptionmute:
    "This silences spamming or naughty people. Can only read stuff.",
  descriptionping:
    "This silences spamming or naughty people. Can only read stuff.",
  descriptionunblind: "This command unblinds members.",
  descriptionunmute: "This command unmutes members.",
  descriptionuptime: "Check the uptime of the bot.",
  descriptioncolor: "Choose a color by ID or name.",
  descriptioncolorremove: "Remove a color role by ID or name.",
  descriptionrolecolor1: "Role color choose page 1.",
  descriptionrolecolor2: "Role color choose page 2.",
  descriptionrolecolor3: "Role color choose page 3.",
  descriptionbalance: "Display both your wallet and bank balance.",
  descriptionbalancebank: "Display your bank account balance.",
  descriptionbalancewallet: "Display your wallet balance.",
  descriptiondailyreward: "Random amount of coins, as a daily reward.",
  descriptiondeposit: "Deposit coins from your wallet to your bank.",
  descriptiongivebank: "Increase the bank account balance of a member.",
  descriptiongivefulleco:
    "Increase the balance of both the bank and wallet account.",
  descriptiongivewallet: "Increase the balance of a member.",
  descriptionminusbank: "Decreases the balance of the bank account.",
  descriptionminusfulleco:
    "Decreases the balance of both the wallet and the bank account.",
  descriptionminuswallet: "Decreases the balance of the wallet.",
  descriptionsearch: "Search for some coins. Kinda a second daily reward.",
  descriptionsetbank: "Reset the balance of a member.",
  descriptionsetwallet: "Reset the balance of both accounts of a member.",
  descriptionsetfulleco: "Reset the balance of a member.",
  descriptionwithdraw: "Transfer coins from your bank account to your wallet.",
  descriptionexperience: "Displays your current server experience.",
  descriptiongiveexperience: "Give a player extra levels.",
  descriptiongivefulllevel: "Give a player extra levels and experience.",
  descriptiongivelevel: "Give a player extra levels.",
  descriptionlevel: "Displays your current server level.",
  descriptionlevelstats: "Displays your current server level and experience.",
  descriptionminusexperience: "Decreases the amount of experience.",
  descriptionminusfulllevel:
    "Decreases the amount of both your experience and levels.",
  descriptionminuslevel: "Decreases the amount of levels.",
  descriptionsetexperience: "Reset the amount of experience of a member.",
  descriptionsetfulllevel: "Reset the level and experience of a member.",
  descriptionsetlevel: "Reset the level of a member.",
  descriptiondonate: "Support our project by donating to us.",
  descriptionembedtemplate:
    "Embed template for bot developers. Isn't meant to be used.",
  descriptionevent: "Set up a event with teams.",
  descriptiongithub: "Displays all import links to our GitHub repository.",
  descriptionhelpst1: "Advanced Help - Stage 1",
  descriptionmcserver: "Displays some Minecraft server statistics.",
  descriptionprofile: "Displays all information we have about you.",
  descriptionrules: "Displays an embed with our active server rules.",
  descriptionserverip: "Display the server IP and information for MultiCube.",
  descriptionbotstats: "Displays all stats of the bot.",
  descriptionleave: "Stop the music, and let the bot leave the call.",
  descriptionplay:
    "Music Bot via YouTube links. You must be in a call for it to work.",
  descriptionapply:
    "Sends you the link where you can apply to one of our roles/ranks.",
  descriptioncommandtemplate:
    "Command template for bot developers. Isn't meant to be used.",
  descriptionflipacoinen: "Flip a coin!",
  descriptionflipacoinnl: "Kop of munt!", // Dutch version of Flip a Coin. Same command, different language.
  descriptionimage: "This sends the best google result for an image.",
  descriptionmath: "Basic calculation.",
  descriptionrpsnl: "Speel steen, papier, schaar met de bot!",
  descriptionrpsnl: "Play some rock, paper, scissor with the bot!",
  descriptionticket: "Open a support ticket!",
  descriptioncirkelvergelijking: "Calculate a circle equation.",
  descriptionhoeklijn:
    "calculate the angle between 2 lines crossing each other.",
  descriptionpunttotlijn: "Calculate distance between a point and a line.",
  descriptionsubstitutie: "Tutorial thing on how to substitute.",
  descriptiontitreernormaal: "Calculate some science math.",
  descriptiontitreerverdunning: "Calculate some advanced science math.",
};

const I = ["ADMINISTRATOR"]; // Permission for admin commands.
const J = ["SEND_MESSAGES"]; // Permission for general commands.
exports.permissions = {
  // Command Permissions
  permissionban: I,
  permissionblind: I,
  permissionclear: I,
  permissionkick: I,
  permissionmute: I,
  permissionping: I,
  permissionunblind: I,
  permissionunmute: I,
  permissionuptime: I,
  permissioncolor: J,
  permissioncolorremove: J,
  permissionrolecolor1: I,
  permissionrolecolor2: I,
  permissionrolecolor3: I,
  permissionbalance: J,
  permissionbalancebank: J,
  permissionbalancewallet: J,
  permissiondailyreward: J,
  permissiondeposit: J,
  permissiongivebank: I,
  permissiongivefulleco: I,
  permissiongivewallet: I,
  permissionminusbank: I,
  permissionminusfulleco: I,
  permissionminuswallet: I,
  permissionsearch: J,
  permissionsetbank: I,
  permissionsetfulleco: I,
  permissionsetwallet: I,
  permissionwithdraw: J,
  permissionexperience: J,
  permissiongiveexperience: I,
  permissiongivefulllevel: I,
  permissiongivelevel: I,
  permissionlevel: J,
  permissionlevelstats: J,
  permissionminusexperience: I,
  permissionminusfulllevel: I,
  permissionminuslevel: I,
  permissionsetexperience: I,
  permissionsetfulllevel: I,
  permissionsetlevel: I,
  permissionbotstats: I,
  permissiondonate: I,
  permissionembedtemplate: I,
  permissionevent: I,
  permissiongithub: I,
  permissionhelpst1: J,
  permissionmcserver: I,
  permissionprofile: J,
  permissionrules: I,
  permissionserverip: I,
  permissionleave: J,
  permissionplay: J,
  permissionapply: J,
  permissioncommandtemplate: I,
  permissionflipacoinen: J,
  permissionflipacoinnl: J,
  permissionimage: J,
  permissionmath: J,
  permissionrpsen: J,
  permissionrpsnl: J,
  permissionsrpsen: J,
  permissionticket: J,
  permissioncirkelvergelijking: J,
  permissionhoeklijn: J,
  permissionpunttotlijn: J,
  permissionsubstitutie: J,
  permissiontitreernormaal: J,
  permissiontitreerverdunning: J,
};
