// Alle variabelen etc.
// Prijzen, intervallen, channel ID's staan allemaal hier.

require("console-stamp")(console, "[HH:MM]");
const version = require("../package.json").version;

exports.base = {
  basecolor: "#d8e850",
  baseguildid: "820580469757313025",
  botcount: 16,

  basewelcomechannelid: "850753468927049798",
  baseannouncementschannelid: "944956465733586974",

  basemusicroleid: "940616347900076073",

  basemusicchannelid: "942842677932720148",
  basecolorchannelid: "942842691828457512",
  baseimagechannelid: "942842717858320385",
  basesuggechannelid: "944949197612924928",
  baseeventchannelid: "942846790451998751",

  basebottestingthreechannelid: "944963774157299814",

  basecounterinterval: '1500000',
  basemembercounterchannelid: "873925840096886784",
  basepeoplecounterchannelid: "953292837422788628",

  baseticketgroupid: "852178171305525258",
  baseticketdeletetime: "5000", //ms -> sec * 1000

  basemuterole: "851141747424886794",
  baseblindrole: "852934692696358952",
};

exports.trading = {
  // Consumption
  powerhousetier1: 1800,
  powerhousetier2: 2400,
  powerhousetier3: 2900,
  powerhousetier4: 4200,
  powerhousetier5: 7100,

  gashousetier1: 8000,
  gashousetier2: 12000,
  gashousetier3: 17000,
  gashousetier4: 20000,
  gashousetier5: 27000,

  waterhousetier1: 5000,
  waterhousetier2: 11000,
  waterhousetier3: 20000,
  waterhousetier4: 30000,
  waterhousetier5: 45000,

  // Tax Return
  taxhousetier1: 6000,
  taxhousetier2: 6500,
  taxhousetier3: 7500,
  taxhousetier4: 9000,
  taxhousetier5: 11000,

  // Buillding Prices
  housetier1: 2000,
  housetier2: 15000,
  housetier3: 30000,
  housetier4: 45000,
  housetier5: 70000,

  warehousetier2: 50000,
  warehousetier3: 100000,
  warehousetier4: 175000,
  warehousetier5: 250000,

  policetier1: 10000,
  policetier2: 70000,
  policetier3: 200000,

  firedepartmenttier1: 12000,
  firedepartmenttier2: 65000,
  firedepartmenttier3: 180000,

  hospitaltier1: 20000,
  hospitaltier2: 100000,
  hospitaltier3: 250000,

  malltier1: 150000,
  malltier2: 400000,

  cityhalltier2: 200000,

  infrastructuretier2: 100000,
  infrastructuretier3: 150000,
  infrastructuretier4: 250000,
  infrastructuretier5: 500000,

  landfilltier1: 50000,
  landfilltier2: 60000,
  landfilltier3: 90000,

  nuclearreactortier1: 50000,
  nuclearreactortier2: 75000,
  windmill: 10000,
  sonarpanel: 8000,

  park: 5000,
  school: 100000,
  cinema: 80000,
  restaurant: 75000,
  hotel: 80000,

  sawmilltier1: 20000,
  sawmilltier2: 25000,
  refinerytier1: 30000,
  refinerytier2: 35000,

  interiorshoptier1: 20000,
  interiorshoptier2: 60000,

  clothingshoptier1: 15000,
  clothingshoptier1: 20000,

  drugstoretier1: 40000,
  drugstoretier2: 50000,

  conveniencestoretier1: 10000,
  conveniencestoretier2: 40000,
  conveniencestoretier3: 50000,

  devicestoretier1: 30000,
  devicestoretier2: 60000,
  devicestoretier3: 90000,

  reactortier1: 100000,
  reactortier2: 150000,

  factorytier1: 50000,
  factorytier2: 75000,

  energyplanttier1: 20000,
  energyplanttier2: 60000,
  energyplanttier3: 100000,

  waterplanttier1: 25000,
  waterplanttier2: 60000,
  waterplanttier3: 90000,

  gasplanttier1: 20000,
  gasplanttier2: 55000,
  gasplanttier3: 110000,
}

exports.colorcost = { // 16 types
  metallic: 500,
  exotic: 500,
  plusexotic: 650,

  base: 150,
  light: 300,
  medium: 300,
  dark: 250,

  really: 350,
  bright: 300,
  deep: 350,

  tr: 200,
  pastel: 250,
  earth: 450,
  sand: 350,
  reddish: 350,
  extra: 400,
}

exports.boxbuyprice = {
  ultra: 5000,
  super: 3000,
  normal: 1500,
}

exports.boxsellprice = {
  ultra: 3000,
  super: 1500,
  normal: 800,
}

exports.shardbuyprice = {
  diamond: 20000,
  platinum: 15000,
  gold: 12000,
  silver: 8000,
  bronze: 6000,
  iron: 4000,
}

exports.shardsellprice = {
  diamond: 18000,
  platinum: 1200,
  gold: 9000,
  silver: 6000,
  bronze: 3000,
  iron: 1500,
}

exports.scrapsellprice = {
  exotic: 2000,
  legendary: 1600,
  epic: 1200,
  rare: 400,
  uncommon: 200,
  common: 75,
}

exports.boxchance = {
  ultraexotic: 99,
  ultralegendary: 95,
  ultraepic: 80,
  ultrarare: 55,

  superlegendary: 99,
  superepic: 95,
  superrare: 80,
  superuncommon: 60,
  supercommon: 35,

  normalrare: 99,
  normaluncommon: 80,
  normalcommon: 50,
}

exports.scrapamount = {
  ultraexotic: 2,
  ultralegendary: 10,
  ultraepic: 40,
  ultrarare: 60,

  superlegendary: 1,
  superepic: 5,
  superrare: 20,
  superuncommon: 40,
  supercommon: 60,

  normalrare: 15,
  normaluncommon: 30,
  normalcommon: 50,
}

exports.embed = {
  embedfooter: "Statistics and Bot provided by Complex.",
  embedimage: "https://i.imgur.com/neCyTDH.png",
  embedlink: "https://github.com/SVKruik/MultiCube-Public",
};

exports.errorcodes = {
  // Error message: 
  // `Error executing command. EC: \`${config.errorcodes.err1}\`.`

  err1: "3951",
  err2: "4182",
  err3: "5382",
  err4: "1432",
  err5: "8931",
  err6: "5671",
  err7: "3120",
  err8: "7329",
  err9: "2371",
  err10: "4329",
  err11: "5981",
  err12: "6912",
  err13: "3821",
  err14: "9392",
  err15: "1391",
  err16: "1455",

  info1: `A fatal bug in the code. Contact any bot developers if you see this.`,
  info2: `A problem with the database. This can happen during collecting data from the DB, or generally something wrong.`,
  info3: `An error with generating the reaction emoji's.`,
  info4: `A problem with generating a channel. This can happen with the command \`ticket\`.`,
  info5: `An error with generating an user account in our database. This error can only occur when someone joins the Discord server, since it will auto-generate an account.`,
  info6: `A problem with adding XP to your account when sending a messsage.`,
  info7: `A problem with the music bot.`,
  info8: `An error with collecting information about a minecraft server. This error can only occur with the command \`mcserver\`.`,
  info9: `An error with refunding your coins.`,
  info10: `A problem with connecting to the database. All DB related commands are probably out of service.`,
  info11: `A problem with sending a message to another channel, than the init channel.`,
  info12: `An error with managing a member.`,
  info13: `An error with bulk deleting messages.`,
  info14: `A problem with managing member roles.`,
  info15: `This command does not exist (yet), or you have a typo.`,
  info16: `Unspecific error.`,
}

exports.basemessages = {
  // General Messages
  messagesfinderror: "Could not find the specified variable.",
  messagesvcrequired: "You need to be in a voice channel in order to use this command.",
  messagesmembermention: "You need to mention someone to execute this command.",
  messagesaccountmissing: "This user does not have an account in our database. Let them create one by doing any DB related command.",
  messageserror: "There was an error sending the command.",
  messagesgreaternegaone: "Amount must be larger than \`-1\`.",
  messagesgreaterone: "Amount must be greater than \`0\`.",
  messagescoinsmissing: "You do not have that amount of coins to perform this command.",
  messagesrealnumber: "Please enter a real number.",
  messagesamountmissing: "You are missing the amount parameter.",
  messageemojierr: "There was an error with the emoji.",
  messagesboxesmissing: "You don't have any boxes of this type."
}

exports.commandclear = {
  commandclearmissing: "You are missing the amount that you want to clear!",
  commandclearmax: 50,
  commandclearmin: 1,
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
  titleboxes1: "Boxes Balance",
  titleboxes2: "Boxes Balance: Ultra",
  titleboxes3: "Boxes Balance: Super",
  titleboxes4: "Boxes Balance: Normal",
  titleboxeschance1: "Box Probabilities",
  titleboxeschance2: "Box Probabilities: Ultra",
  titleboxeschance3: "Box Probabilities: Super",
  titleboxeschance4: "Box Probabilities: Normal",
  titleembedtemplate: "Bot Template",
  titleevent: "Choose a team to play on!",
  titledonate: "Donate",
  titleerrorcode: "Error Codes",
  titlegithub: "GitHub Repository",
  titlemcserver: "Minecraft Server Statistics",
  titleprice1: "Item Shop Prices - Buy - Boxes",
  titleprice2: "Item Shop Prices - Buy - Shards",
  titleprice3: "Item Shop Prices - Sell - Scraps",
  titleprice4: "Item Shop Prices - Sell - Boxes",
  titleprice5: "Item Shop Prices - Sell - Shards",
  titleprice6: "Item Shop Prices - Buy - Role Colors",
  titleprofile: "Server Profile",
  titlerules: "House Rules",
  titleserverip: "MultiCube Community",
  titleshop: "Item Shop",
  titlecijfer: "Cijfer Berekenen",
  titlecircle: "Cirkel Vergelijking",
  titlehoeklijn: "Hoek Tussen 2 Lijnen",
  titlepuntlijn: "Afstand Tussen Punt En Lijn",
  titlesubstitutie: "Substitutie Vergelijking",
  titletitreernormaal: "Titreer Berekening",
  titletitreerverdunning: "Titreer Verdunning Berekening",
  titlehaversine: "GPS Coordinate Calculation",
  titleurban: "Urban Dictionary",
  titlescraps: "Scraps Balance",
  titleshards: "Shards Balance",
  titlebotstats: "Bot Statistics",
  titlemembercount: "Member Count",
  titlepcstats: "Host PC Statistics",
  titlehelp: "Support Menu",
  titletradingstatistics: "Trading Game Statistics",

  //Descriptions
  descriptionshop: "Here are all the items you can buy with coins or other special tokens. You can buy stuff with the command \`buy\`.",
  descriptiondonate: "Support our project by donating to us! Your funds will be used to improve our project. You can also help fund new hardware/software we need.",
  descriptionerrorcode: "Here is a list of all error codes you can get when using me. You can also look up individual error codes, with \`$err 1234\`.",
  descriptionembedtemplate: "Template",
  descriptionevent: "Choosing a team will allow you to interact with your teammates while in a event! When a event starts with for example Bed Wars, you can choose your team here. Be aware though that teams will be balanced, and your pick is not always available.",
  descriptiongithub: "This is our GitHub repository. You can find a lot of information about anything there, so check it out!",
  descriptionhelp: "What topic can I help you with?",
  descriptionprice1: "Here are all the prices of the different boxes you can buy.",
  descriptionprice2: "Here are all the prices of the different shards you can buy.",
  descriptionprice3: "Here are all the prices of the different scraps you can sell.",
  descriptionprice4: "Here are all the prices of the different boxes you can sell.",
  descriptionprice5: "Here are all the prices of the different shards you can sell.",
  descriptionprice6: "Here are all the prices of the different role colors you can buy.",
  descriptionmcserver: "Here is some data about the server you asked for.",
  descriptionprofile: "Here is the data we have stored about you.",
  descriptionrules: "These are our house rules.",
  descriptionserverip: "Here is the Server IP for our Minecraft server, MultiCube.",
  descriptionhaversine: "Calculate the distance between two GPS coordinates using the Haversine Formula.",
  descriptioncircle: "Een cirkelvergelijking oplossen.",
  descriptionhoeklijn: "De hoek tussen 2 lijnen berekenen.",
  descriptionpuntlijn: "De afstand tussen een punt en een lijn berekenen.",
  descriptionsubstitutie: "Een substitutie vergelijking oplossen.",
  descriptiontitreernormaal: "Een normale titreer berekening maken.",
  descriptiontitreerverdunning: "Een titreer berekening met verdunning maken.",
  descriptionbotstats: "These are the statistics of me.",
  descriptionmembercount: "Here is the amount of people in this Discord server.",
  descriptionpcstats: "These are the statistics of my Host PC.",
  descriptiontradingstatistics: "These are your current Trading Game statistics:",

  //Names
  nameboxes1: "Ultra Boxes", // Boxes
  nameboxes2: "Super Boxes",
  nameboxes3: "Normal Boxes",
  nameboxeschances1: "**--------**", // Box Chances
  nameboxeschances2: "Exotic:",
  nameboxeschances3: "Legendary:",
  nameboxeschances4: "Epic:",
  nameboxeschances5: "Rare:",
  nameboxeschances6: "**--------**",
  nameboxeschances7: "Legendary:",
  nameboxeschances8: "Epic:",
  nameboxeschances9: "Rare:",
  nameboxeschances10: "Uncommon:",
  nameboxeschances11: "Common:",
  nameboxeschances12: "**--------**",
  nameboxeschances13: "Rare:",
  nameboxeschances14: "Uncommon:",
  nameboxeschances15: "Common:",
  namedonate1: "Donate Link:", // Donate
  namedonate2: "Memberships:",
  nameembedtemplate1: "Name: A", // Embed Template
  nameembedtemplate2: "Name: B",
  namegithub1: "Main link:", // GitHub
  namegithub2: "**--------**",
  namegithub3: "Child Servers:",
  namegithub4: "Issues:",
  namegithub5: "Update Log:",
  namemcserver1: "server IP:", // MC Server
  namemcserver2: "Online Players:",
  namemcserver3: "Max Players:",
  namemcserver4: "Game Version:",
  namemcserver5: "Port:",
  namemcserver6: "Mods:",
  nameprofile1: "**--------**", // Profile
  nameprofile2: "UserID:",
  nameprofile3: "Name:",
  nameprofile4: "Tag:",
  nameprofile5: "Uni:",
  nameprofile6: "Bot:",
  nameprofile7: "Warnings",
  nameprofile8: "**--------**",
  nameprofile9: "Document ID",
  nameprofile10: "Document Version:",
  namerules1: "Rule 1:", // Rules
  namerules2: "Rule 2:",
  namerules3: "Rule 3:",
  namerules4: "Rule 4:",
  namerules5: "Rule 5:",
  nameserverip1: "Server IP:", // ServerIP
  nameserverip2: "Game Version:",
  nameserverip3: "Mods:",
  namehaversine1: "Your A:", // Haversine
  namehaversine2: "Your B:",
  namehaversine3: "Distances:",
  namehaversine4: "> **--------**",
  namehaversine5: "> **--------**",
  namehaversine6: "> **--------**",
  namehaversine7: "> **--------**",
  namehaversine8: "> **--------**",
  namesuggestions1: "**New Suggestion:**", // Suggestions
  namescraps1: "Exotic Scraps", // Scraps
  namescraps2: "Legendary Scraps",
  namescraps3: "Epic Scraps",
  namescraps4: "Rare Scraps",
  namescraps5: "Uncommon Scraps",
  namescraps6: "Common Scraps",
  nameshards1: "Diamond Shards:", // Shards
  nameshards2: "Platinum Shards:",
  nameshards3: "Gold Shards:",
  nameshards4: "Silver Shards:",
  nameshards5: "Bronze Shards:",
  nameshards6: "Iron Shards:",
  namebotstats1: "Uptime:", // Botstats
  namebotstats2: "API Ping:",
  namebotstats3: "Bot Ping:",
  namebotstats4: "Server ID:",
  namebotstats5: "Commands:",
  namebotstats6: "Bot Version:",
  namebotstats7: "Bot Owner:",
  namemembercount1: "> **Total Members:**", // Member Count
  namemembercount2: "> **Total People:**",
  namemembercount3: "> **Total Bots:**",
  namepcstats1: "Total RAM:", // PC Stats
  namepcstats2: "Free RAM:",
  namepcstats3: "Used RAM:",
  namepcstats4: "System Platform:",
  namepcstats5: "System Uptime:",
  namepcstats6: "System Version:",
  nametradingstatistics1: "Prestige Level:",
  nametradingstatistics2: "Total Trades Accepted:",
  nametradingstatistics3: "Total Trades Rejected:",
  nametradingstatistics4: "Total Materials received from Trades:",
  nametradingstatistics5: "Total Materials sent to Trades:",
  nametradingstatistics6: "Total Actions:",
  nametradingstatistics7: "Material Amount Bought:",
  nametradingstatistics8: "Material Amount Sold:",
  nametradingstatistics9: "Total Times Bought:",
  nametradingstatistics10: "Total Times Sold:",

  //Values
  valuebotstats6: `${version}`,
  valuebotstats7: `<@422704748488163332>`,
  valuedonate1: "https://ko-fi.com/multicubecommunity", // Donate
  valuedonate2: "https://ko-fi.com/multicubecommunity/tiers",
  valueembedtemplate1: "value: X", // Embed Template
  valueembedtemplate2: "value: Y",
  valuegithub1: "https://github.com/SVKruik/MultiCube-Public", // GitHub
  valuegithub2: "More links:",
  valuegithub3: "https://github.com/SVKruik/MultiCube-Public/tree/main/Minecraft%20Servers/Child%20Servers",
  valuegithub4: "https://github.com/SVKruik/MultiCube-Public/issues",
  valuegithub5: "https://github.com/SVKruik/MultiCube-Public/blob/main/Update%20Log.md",
  valuerules1: "Treat everyone with respect.",
  valuerules2: "Do not spam.",
  valuerules3: "Do not advertise yourself.",
  valuerules4: "Do not post NSFW or inappropriate content.",
  valuerules5: "Do not beg for a role/rank.",
  valueserverip1: "multicube.aternos.me",
  valueserverip2: "1.16.5",
  valueserverip3: "None",
}

exports.aliases = {
  // Command Aliases
  aliasesabannouncements: ["bigannouncement", "bigannounce", "bigann", "bannouncement", "bannounce", "banno"], // Big Announcement (dedicated channel)
  aliasesasannouncements: ["smallannouncement", "smallannounce", "smallann", "sannouncement", "sannounce", "sanno"], // Small Announcement (direct channel)
  aliasesawake: [], // Awake
  aliasesban: [], // Ban
  aliasesblind: [], // Blind
  aliasesclear: ["bulkdelete", "bulkdel"], // Clear
  aliaseskick: [], // Kick
  aliasesmute: [], // Mute
  aliasesunblind: [], // Unblind
  aliasesunmute: [], // Unmute
  aliasesboxes: ["boxescheck", "boxesbal", "balboxes", "boxesbalance", "box", "balanceboxes"], // Boxes
  aliasesboxesopen: ["openboxes", "openbox", "boxesopen", "boxopen", "boxesop", "boxop", "bxop"], // Boxes Open
  aliasesboxeschance: ["boxchances", "boxchance", "chancebox", "chancesbox", "bxch"], // Box Chance
  aliasesgiveboxes: ["givebox", "boxesgive", "boxgive", "bxgive", "givebx"], // Give Boxes
  aliasesminusboxes: ["minusbox", "boxesminus", "boxminus", "bxminus", "setbx"], // Minus Boxes
  aliasessetboxes: ["setbox", "boxesset", "boxset", "bxset", "setbx"],
  aliasescolor: ["clr", "colour"], // Color
  aliasescolorremove: ["clrremove", "colourremove", "clrrmv"], // Color Remove
  aliasestemplatecommand: ["templatecmd", "tempcommand", "tempcmd"], // Template Command
  aliasestemplateembed: ["templatembd", "tempembed", "tempmbd"], // Template Embed
  aliasestestabannouncements: ["testbigannouncement", "testbigannounce", "testbigann", "testbannouncement", "testbannounce", "testbanno"], // Test Big Announcement
  aliasestestasannouncements: ["testsmallannouncement", "testsmallannounce", "testsmallann", "testsannouncement", "testsannounce", "testsanno"], // Test Small Announcement
  aliasestestsuggest: ["testsuggest", "testsuggestion", "tsuggest", "tsuggestion"], // Test Suggestions
  aliasesbalance: ["bal", "baltot", "baltotal", "showbal"], // Balance
  aliasesbalancebank: ["balbank", "bank"], // Balance Bank
  aliasesbalancewallet: ["balwallet", "balwal", "wallet"], // Balance Wallet
  aliasesbuy: ["bought"], // Buy
  aliasesdailyreward: ["dlyrwd", "dr"], // Daily Reward
  aliasesdeposit: ["dep", "depo"], // Deposit
  aliasesgivebank: [], // Givebank
  aliasesgivefulleco: ["givebankwal", "givewalbank", "givefulleco"], // Give Full Economy
  aliasesgivewallet: ["givewal"], // Give Wallet
  aliasesminusbank: ["minbank"], // Minus Bank
  aliasesminusfulleco: ["minusbankwal", "minuswalbank", "minbankwal", "minwalbank", "minfulleco"], // Minus Full Eco
  aliasesminuswallet: ["minwal"], // Minus Wallet
  aliasessearch: ["srch"], // Search
  aliasessell: ["sold"], // Sell
  aliasessetbank: [], // Set Bank
  aliasessetfulleco: ["setwalbank", "setwalletbank", "setbankwallet", "setbankwal", "fulleco"], // Set Full Eco
  aliasessetwallet: ["setwal"], // Set Wallet
  aliaseswithdraw: ["with", "wit"], // Withdraw
  aliasesexperience: ["exp", "xp"], // Experience
  aliasesgiveexperience: ["givexp", "giveexp"], // Give Experience
  aliasesgivefulllevel: ["givelvlxp", "givexplvl", "givelvlexp", "giveexplvl", "givefullevel", "givefulllevel"], // Give Full Level
  aliasesgivelevel: ["givelvl"], // Give Level
  aliaseslevel: ["lvl"], // Level
  aliaseslevelstats: ["levelstats", "levelstat", "lvlstat", "lvlstats"], // Level Statistics
  aliasesminusexperience: ["minusexp", "minusxp", "minxp", "minexp"], // Minus Experience
  aliasesminusfulllevel: ["minuslvlxp", "minusxplvl", "minusexplvl", "minuslvlexp", "minlvlxp", "minxplvl", "minexplvl", "minlvlexp", "minusfulllevel"], // Minus Full Level
  aliasesminuslevel: ["minuslvl", "minlvl"], // Minus Level
  aliasessetexperience: ["setxp", "setexp"], // Set Experience
  aliasessetfulllevel: ["setlvlexp", "setlvlxp", "setfulllevel"], // Set Full Level
  aliasessetlevel: ["setlvl"], // Set Level
  aliasesdonate: ["dnte"], // Donate
  aliasesevent: [], // Event
  aliasesgithub: ["gh"], // Github
  aliasesmcserver: ["mc", "mccheck", "mcserver"], // Minecraft Server Stats
  aliasesprice: ["pricecheck", "sellprice", "buyprice", "checkprice", "pricebuy", "pricesell", "prices"], // Prce
  aliasesprofile: ["prof"], // Profile
  aliasesrules: ["rule", "rl"], // Rules
  aliasesserverip: ["server"], // Server IP
  aliasesshop: [], // Shop
  aliasesleave: ["musicstop", "stop"], // Leave
  aliasesmusiclibrary: ["library", "msclibrary", "msclib", "musiclib", "musiclist", "msclist", "listmusic", "listmsc", "lib"], // Music Library
  aliasesplay: [], // Play
  aliasessreset: ["musicreset", "libraryreset", "mscres", "libres", "musicres", "libraryres"], // Reset
  aliasesupdate: ["musicupdate", "libraryupate", "mscup", "libup", "musicup", "libraryup"], // Update
  aliasesskip: ["jump"], // Skip
  aliasesstop: ["terminate"], // Stop
  aliasesapply: ["form"], // Apply
  aliasesdice: ["roll"], // Dice
  aliaseserrorcode: ["error", "errorcode", "errcode", "err", "errorcodes", "errcheck", "errorcheck", "errorcodecheck", "errorcodescheck"], // Error Code
  aliasesflipacoinen: ["fac", "facen"], // Flip A Coin
  aliasesflipacoinnl: ["facnl", "kopmunt", "kom"], // Kop Of Munt
  aliaseshaversine: ["haver", "gps", "coordinates", "coords", "coord"], // Haversine
  aliasesimage: ["img"], // Image
  aliasesmath: ["math", "calc", "calculate"], // Math
  aliasesrpsen: ["rps"], // Rock Paper Scissor
  aliasesrpsnl: ["rpsnl", "spsnl", "sps"], //Steen Papier Schaar
  aliasessrpsen: ["srps"], // Stake Rock Paper Scissor
  aliasessrpsnl: ["ssps"], // Inleg Steen Papier Schaar
  aliasessuggestions: ["suggest", "suggestion"], // Suggestions
  aliasesurban: ["definition", "urbandictionary", "dictionary", "defin", "def"], // Urban
  aliasesbinas: ["binastabel", "bin", "sciencedata"], // Binas
  aliasescijfer: ["cijferbereken", "berekencijfer", "cijfercalc", "cijcalc"], // Cijfer
  aliasescirkelvergelijking: ["circle"], // Cirkel
  aliaseshoeklijn: ["hkli"], // Hoek Lijn
  aliasespunttotlijn: ["lijntotpunt", "puntlijn", "lijnpunt"], // Punt Tot Lijn
  aliasessubstitutie: ["substitueren", "subst"], // Substitutie
  aliasestitreernormaal: ["titnorm", "titnormaal"], // Titratie Normaal
  aliasestitreerverdunning: ["titverdun", "titverdunning"], // Titratie Verdunning
  aliasesgivescraps: ["givescrap", "scrapsgive", "scrapgive", "scrgive"], // Give Scraps
  aliasesminusscraps: ["minusscrap", "scrapsminus", "scrapminus", "scrminus"], // Minus Scraps
  aliasesscraps: ["scrapscheck", "scrapsbal", "balscraps", "scrapsbalance", "scrap", "balancescraps"], // Scraps
  aliasessetscraps: ["setscrap", "scrapsset", "scrapset", "scrset"], // Set Scraps
  aliasesgiveshards: ["giveshard", "shardsgive", "shardgive"], // Give Shards
  aliasesminusshards: ["minusshard", "shardsminus", "shardminus"], // Minus Shards
  aliasessetshards: ["setshard", "shardsset", "shardset"], // Set Shards
  aliasesshards: ["shardscheck", "shardsbal", "balshards", "shardsbalance", "shard", "balanceshards"], // Shards
  aliasesbotstats: ["botstat", "botstats", "statsbot", "statbot"], // Bot Statistics
  aliasesmembercount: ["memberscount", "memberamount", "countmember", "countmembers", "membersamount", "amountmember", "amountmembers"], // Member Count
  aliasespcstats: ["pcstat", "pcstats", "statspc", "statpc"], // PC Statistics
  aliasesping: ["pong"], // Ping
  aliasesuptime: [], // Uptime
  aliaseshelp: ["support"], // Help
  aliasesticket: ["tkt"], // Ticket
  aliasesgivewarnings: ["givewarning", "givewarn"], // Give Warnings
  aliasesminuswarnings: ["minuswarning", "minuswarn", "minwarning", "minwarn"], // Minus Warnings
  aliasessetwarnings: ["setwarning", "setwarn"], // Set Warnings
  aliaseswarnings: ["warning", "warns", "warn"], // Warnings
  aliasestradingbalance: ["trgbalance", "trgbal"], // Trading Balance
  aliasestradingbuy: ["trgbuy"], // Trading Buy
  aliasestradingcross: ["trgcross"], // Trading Cross
  aliasestradingdemolish: ["trgdemolish", "trgdemo"], // Trading Demolish
  aliasestradinggive: ["trggive"], // Trading Give
  aliasestradingminus: ["trgminus", "trgmin"], // Trading Give
  aliasestradingmove: ["trgmove"], // Trading Movee
  aliasestradingsell: ["trgsell"], // Trading Sell
  aliasestradingprice: ["trgprice"], // Trading Price
  aliasestradingprint: ["log"], // Trading Print
  aliasestradingset: ["trgset"], // Trading Set
  aliasestradingplace: ["trgplace"], // Trading Place
  aliasestradingsetprice: ["trgsetprice"], // Trading Set Price
  aliasestradingslope: ["richtingscoefficient", "rico", "rc"], // Trading Slope
  aliasestradingstatistics: ["tradingstats", "trgstatistics", "trgstats"], // Trading Statistics
  aliasestradingstock: ["trgstock"], // Trading Stock
  aliasestradingtrade:  ["trgtrade", "trade", "trg"], // Trading Trade
  aliasestradingupdate: ["bulkupdate", "upd", "bulkupd"], // Trading Update
  aliasestradingwarehouse: ["trgwarehouse", "trgware"], // Trading Warehouse
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
  cooldownannouncements: B,
  cooldownawake: B,
  cooldownban: B,
  cooldownblind: B,
  cooldownclear: B,
  cooldownkick: B,
  cooldownmute: B,
  cooldownunblind: B,
  cooldownunmute: B,
  cooldownboxes: G,
  cooldownboxeschance: F,
  cooldownboxesopen: 1,
  cooldowngiveboxes: B,
  cooldownminusboxes: B,
  cooldownsetboxes: B,
  cooldowncolor: B,
  cooldowncolorremove: B,
  cooldowntemplatecommand: B,
  cooldowntemplateembed: B,
  cooldowntestannouncements: B,
  cooldowntestsuggest: B,
  cooldownbalance: G,
  cooldownbalancebank: G,
  cooldownbalancewallet: G,
  cooldownbuy: H,
  cooldowndailyreward: A,
  cooldowndeposit: G,
  cooldowngivebank: G,
  cooldowngivefulleco: B,
  cooldowngivewallet: B,
  cooldownminusbank: B,
  cooldownminusfulleco: B,
  cooldownminuswallet: B,
  cooldownsearch: A,
  cooldownsell: H,
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
  cooldownevent: B,
  cooldowngithub: B,
  cooldownmcserver: E,
  cooldownprice: G,
  cooldownprofile: E,
  cooldownrules: E,
  cooldownserverip: E,
  cooldownshop: F,
  cooldownleave: C,
  cooldownmusic: C,
  cooldownapply: E,
  cooldowndice: G,
  cooldownerrorcode: G,
  cooldownflipacoinen: H,
  cooldownflipacoinnl: H,
  cooldownhaversine: G,
  cooldownimage: G,
  cooldownmath: G,
  cooldownrpsen: H,
  cooldownrpsnl: H,
  cooldownsrpsen: H,
  cooldownsrpsnl: H,
  cooldownsuggestions: F,
  cooldownurban: G,
  cooldownbinas: G,
  cooldowncijfer: G,
  cooldowncirkelvergelijking: G,
  cooldownhoeklijn: G,
  cooldownpunttotlijn: G,
  cooldownsubstitutie: G,
  cooldowntitreernormaal: G,
  cooldowntitreerverdunning: G,
  cooldowngivescraps: B,
  cooldownminusscraps: B,
  cooldownscraps: G,
  cooldownsetscraps: B,
  cooldowngiveshards: B,
  cooldownminusshards: B,
  cooldownsetshards: B,
  cooldownshards: G,
  cooldownbotstats: G,
  cooldownmembercount: G,
  cooldownpcstats: G,
  cooldownping: G,
  cooldownuptime: G,
  cooldownhelp: E,
  cooldownticket: D,
  cooldowngivewarnings: B,
  cooldownminuswarnings: B,
  cooldownsetwarnings: B,
  cooldownwarnings: G,
  cooldowntradingbalance: H,
  cooldowntradingbuy: H,
  cooldowntradingcross: B,
  cooldowntradingdemolish: H,
  cooldowntradinggive: B,
  cooldowntradingminus: B,
  cooldowntradingmove: H,
  cooldowntradingplace: H,
  cooldowntradingprice: H,
  cooldowntradingprint: H,
  cooldowntradingsell: H,
  cooldowntradingset: B,
  cooldowntradingsetprice: B,
  cooldowntradingslope: B,
  cooldowntradingstatistics: F,
  cooldowntradingstock: H,
  cooldowntradingtrade: H,
  cooldowntradingupdate: B,
  cooldowntradingwarehouse: H,
};

const I = ["ADMINISTRATOR"]; // Permission for admin commands.
const J = ["SEND_MESSAGES"]; // Permission for general commands.
exports.permissions = {
  // Command Permissions
  permissionannouncements: I,
  permissionawake: I,
  permissionban: I,
  permissionblind: I,
  permissionclear: I,
  permissionkick: I,
  permissionmute: I,
  permissionunblind: I,
  permissionunmute: I,
  permissionboxes: J,
  permissionboxeschance: J,
  permissionboxesopen: J,
  permissiongiveboxes: I,
  permissionminusboxes: I,
  permissionsetboxes: I,
  permissioncolor: J,
  permissioncolorremove: J,
  permissiontemplatecommand: I,
  permissiontemplateembed: I,
  permissiontestannouncements: I,
  permissiontestsuggest: I,
  permissionbalance: J,
  permissionbalancebank: J,
  permissionbalancewallet: J,
  permissionbuy: J,
  permissiondailyreward: J,
  permissiondeposit: J,
  permissiongivebank: I,
  permissiongivefulleco: I,
  permissiongivewallet: I,
  permissionminusbank: I,
  permissionminusfulleco: I,
  permissionminuswallet: I,
  permissionsearch: J,
  permissionsell: J,
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
  permissiondonate: J,
  permissionevent: I,
  permissiongithub: J,
  permissionmcserver: J,
  permissionprice: J,
  permissionprofile: J,
  permissionrules: J,
  permissionserverip: J,
  permissionshop: J,
  permissionmusic: J,
  permissionapply: J,
  permissiondice: J,
  permissionerrorcode: J,
  permissionflipacoinen: J,
  permissionflipacoinnl: J,
  permissionhaversine: J,
  permissionimage: J,
  permissionmath: J,
  permissionrpsen: J,
  permissionrpsnl: J,
  permissionsrpsen: J,
  permissionsrpsnl: J,
  permissionsuggestions: J,
  permissionurban: J,
  permissionbinas: J,
  permissioncijfer: J,
  permissioncirkelvergelijking: J,
  permissionhoeklijn: J,
  permissionpunttotlijn: J,
  permissionsubstitutie: J,
  permissiontitreernormaal: J,
  permissiontitreerverdunning: J,
  permissiongivescraps: I,
  permissionminusscraps: I,
  permissionscraps: J,
  permissionsetscraps: I,
  permissiongiveshards: I,
  permissionminusshards: I,
  permissionsetshards: I,
  permissionshards: J,
  permissionbotstats: J,
  permissionmembercount: J,
  permissionpcstats: J,
  permissionping: J,
  permissionuptime: J,
  permissionhelp: J,
  permissionticket: J,
  permissiongivewarnings: I,
  permissionminuswarnings: I,
  permissionsetwarnings: I,
  permissionwarnings: J,
  permissiontradingbalance: J,
  permissiontradingbuy: J,
  permissiontradingcross: I,
  permissiontradingdemolish: J,
  permissiontradinggive: I,
  permissiontradingminus: I,
  permissiontradingmove: J,
  permissiontradingprice: J,
  permissiontradingprint: I,
  permissiontradingsell: J,
  permissiontradingset: I,
  permissiontradingplace: J,
  permissiontradingsetprice: I,
  permissiontradingslope: I,
  permissiontradingstatistics: J,
  permissiontradingstock: J,
  permissiontradingtrade: J,
  permissiontradingupdate: I,
  permissiontradingwarehouse: J,
};
