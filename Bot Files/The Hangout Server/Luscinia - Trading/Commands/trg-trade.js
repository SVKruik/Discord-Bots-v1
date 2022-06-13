// Handel met iemand.

const config = require("../Other/config.js");
const profileModel = require("../models/profileSchema");
const editJsonFile = require("edit-json-file");

module.exports = {
    name: "tradingtrade",
    aliases: config.aliases.aliasestradingtrade,
    cooldown: config.cooldown.cooldowntradingtrade,
    permissions: config.permissions.permissiontradingtrade,
    description: "Trade with someone.",
    async execute(message, args, cmd, client, Discord, profileData) {
        try {
            const materiallist = [
                "nothing",
                "woodplank",
                "woodpart",
                "log",
                "bamboo",
                "cedar",
                "fir",
                "pine",
                "redwood",
                "ash",
                "birch",
                "cherrywood",
                "mahogany",
                "maple",
                "oak",
                "poplar",
                "teak",
                "compositewood",
                "pipe",
                "plasticpart",
                "plastic",
                "glass",
                "sand",
                "plexiglass",
                "granite",
                "marble",
                "quartz",
                "chalk",
                "slate",
                "basalt",
                "pebble",
                "limestone",
                "oil",
                "coal",
                "ironore",
                "copperore",
                "goldore",
                "gas",
                "ceramic",
                "cork",
                "mesh",
                "rubber",
                "uranium",
                "resin",
                "carbon",
                "clay",
                "soil",
                "water",
                "flint",
                "onyx",
                "travertine",
                "cement",
                "concrete",
                "steelsheet",
                "tape",
                "brick",
                "steel",
                "steelpart",
                "glue",
                "paper",
                "salt",
                "flower",
                "bakingpowder",
                "bread",
                "rice",
                "rye",
                "oats",
                "corn",
                "barley",
                "cassava",
                "soybean",
                "sorghum",
                "wheat",
                "cocoabean",
                "coffeebean",
                "sugar",
                "asparagus",
                "eggplant",
                "broccoli",
                "cabbage",
                "avocado",
                "brusselssprout",
                "carrot",
                "beetroot",
                "garlic",
                "celery",
                "cucumber",
                "greenbean",
                "leek",
                "lettuce",
                "mushroom",
                "onion",
                "pea",
                "pumpkin",
                "radish",
                "rhubarb",
                "sweetpepper",
                "spinach",
                "tomato",
                "sweetpotato",
                "yam",
                "potato",
                "acerola",
                "apple",
                "apricot",
                "banana",
                "blackberry",
                "blackcurrant",
                "blueberry",
                "breadfruit",
                "cantaloupe",
                "cherry",
                "clementine",
                "coconut",
                "cranberry",
                "datefruit",
                "fig",
                "gooseberry",
                "grapefruit",
                "grape",
                "guava",
                "honeydewmelon",
                "jackfruit",
                "jujubefruit",
                "kiwi",
                "kumquat",
                "lemon",
                "lime",
                "lychee",
                "mandarin",
                "mango",
                "mulberry",
                "olive",
                "orange",
                "papaya",
                "passionfruit",
                "peach",
                "pear",
                "dragonfruit",
                "pineapple",
                "plum",
                "pomegranate",
                "prune",
                "raspberry",
                "strawberry",
                "tangerine",
                "watermelon",
                "blackbean",
                "blackeyedpea",
                "cannellinibean",
                "chickpea",
                "greatnorthernbean",
                "kidneybean",
                "limabean",
                "pintobean",
                "favabean",
                "navybean",
                "adzukibean",
                "edamame",
                "mungbean",
                "cranberrybean",
                "acorn",
                "almond",
                "beech",
                "brazilnut",
                "candlenut",
                "cashew",
                "chestnut",
                "chileanhazel",
                "egusi",
                "guineapeanut",
                "hazelnut",
                "hickory",
                "kolanut",
                "macadamia",
                "malabaralmond",
                "malabarchestnut",
                "mamoncillo",
                "mongongo",
                "ogbono",
                "paradisenut",
                "pili",
                "pistachio",
                "sheanut",
                "walnut",
                "cycads",
                "ginkgo",
                "gnetum",
                "juniper",
                "pinenut",
                "podocarps",
                "fingermillet",
                "teff",
                "fonio",
                "prosomillet",
                "pearlmillet",
                "foxtailmillet",
                "triticale",
                "durum",
                "einkorn",
                "spelt",
                "kamut",
                "emmer",
                "kernza",
                "amaranth",
                "kaniwa",
                "quinoa",
                "hanza",
                "chia",
                "flax",
                "breadnut",
                "sesame",
                "buckwheat",
                "thyme",
                "basil",
                "oregano",
                "rosemary",
                "fennelseed",
                "bayleaf",
                "chilipowder",
                "smokedpaprika",
                "cayenne",
                "cumin",
                "groundcardamom",
                "currypowder",
                "onionpowder",
                "garlicpowder",
                "groundmustard",
                "clove",
                "nutmeg",
                "cinnamon",
                "groundginger",
                "mace",
                "pepper",
                "cow",
                "pig",
                "horse",
                "chicken",
                "sheep",
                "goat",
                "llama",
                "rabbit",
                "egg",
                "fish",
                "meat",
                "phenolicfoam",
                "polyurethane",
                "xps",
                "rockwool",
                "foamglass",
                "glasswool",
                "doubleglass",
                "tripleglass",
                "fabric",
                "cotton",
                "fibre",
                "carbonfibre",
                "chemical",
                "polymaterial",
                "acid",
                "catalyst",
                "chromepart",
                "chrome",
                "brasspart",
                "brass",
                "diamond",
                "gold",
                "platinum",
                "silver",
                "copper",
                "iron",
                "lithium",
                "cobalt",
                "titanium",
                "tungsten",
                "nickel",
                "magnesium",
                "lead",
                "tin",
                "mercury",
                "bismuth",
                "rhodium",
                "osmium",
                "palladium",
                "iridium",
                "ruthenium",
                "plutonium",
                "componentelectric",
                "componentinterior",
                "componentclothing",
                "componentstarting"
            ]
            const material1a = args[1];
            const material2a = args[2];
            const material3a = args[3];
            const material4a = args[4];
            const material5a = args[5];

            const amount1 = args[6];
            const amount2 = args[7];
            const amount3 = args[8];
            const amount4 = args[9];
            const amount5 = args[10];

            const material1 = material1a.toLowerCase();
            const material2 = material2a.toLowerCase();
            const material3 = material3a.toLowerCase();
            const material4 = material4a.toLowerCase();
            const material5 = material5a.toLowerCase();

            if (!args[0]) {
                return message.channel.send(config.basemessages.messagesmembermention)
            };
            const target = message.mentions.users.first();
            if (!target) {
                return message.channel.send(config.basemessages.messagesfinderror);
            }

            // Material Missing Check
            if (!material1) {
                return message.channel.send(`Trade item missing. Correct format: \`$trade @target m1 m2 m3 m4 m5 a1 a2 a3 a4 a5\` (1)`)
            } if (!material2) {
                return message.channel.send(`Trade item missing. Correct format: \`$trade @target m1 m2 m3 m4 m5 a1 a2 a3 a4 a5\` (2)`)
            } if (!material3) {
                return message.channel.send(`Trade item missing. Correct format: \`$trade @target m1 m2 m3 m4 m5 a1 a2 a3 a4 a5\` (3)`)
            } if (!material4) {
                return message.channel.send(`Trade item missing. Correct format: \`$trade @target m1 m2 m3 m4 m5 a1 a2 a3 a4 a5\` (4)`)
            } if (!material5) {
                return message.channel.send(`Trade item missing. Correct format: \`$trade @target m1 m2 m3 m4 m5 a1 a2 a3 a4 a5\` (5)`)
            }

            // Amount Missing Check
            if (!amount1) {
                return message.channel.send(`Amount missing. Correct format: \`$trade @target m1 m2 m3 m4 m5 a1 a2 a3 a4 a5\` (1)`)
            } if (!amount2) {
                return message.channel.send(`Amount missing. Correct format: \`$trade @target m1 m2 m3 m4 m5 a1 a2 a3 a4 a5\` (2)`)
            } if (!amount3) {
                return message.channel.send(`Amount missing. Correct format: \`$trade @target m1 m2 m3 m4 m5 a1 a2 a3 a4 a5\` (3)`)
            } if (!amount4) {
                return message.channel.send(`Amount missing. Correct format: \`$trade @target m1 m2 m3 m4 m5 a1 a2 a3 a4 a5\` (4)`)
            } if (!amount5) {
                return message.channel.send(`Amount missing. Correct format: \`$trade @target m1 m2 m3 m4 m5 a1 a2 a3 a4 a5\` (5)`)
            }

            // Amount Check
            if (amount1 <= -1) {
                return message.channel.send(`Trade amount should be greater than \`-1\`. (1)`);
            } if (amount2 <= -1) {
                return message.channel.send(`Trade amount should be greater than \`-1\`. (2)`);
            } if (amount3 <= -1) {
                return message.channel.send(`Trade amount should be greater than \`-1\`. (3)`);
            } if (amount4 <= -1) {
                return message.channel.send(`Trade amount should be greater than \`-1\`. (4)`);
            } if (amount5 <= -1) {
                return message.channel.send(`Trade amount should be greater than \`-1\`. (5)`);
            }

            // Material Check
            if (materiallist.includes(material1) == false) {
                return message.channel.send(`The item that you are trying to trade doesn't exist or you have a typo. (1)`)
            } if (materiallist.includes(material2) == false) {
                return message.channel.send(`The item that you are trying to trade doesn't exist or you have a typo. (2)`)
            } if (materiallist.includes(material3) == false) {
                return message.channel.send(`The item that you are trying to trade doesn't exist or you have a typo. (3)`)
            } if (materiallist.includes(material4) == false) {
                return message.channel.send(`The item that you are trying to trade doesn't exist or you have a typo. (4)`)
            } if (materiallist.includes(material5) == false) {
                return message.channel.send(`The item that you are trying to trade doesn't exist or you have a typo. (5)`)
            }



            // try {
            //     const targetData = await profileModel.findOne({ userID: target.id });
            //     if (!targetData) {
            //         return message.channel.send(config.basemessages.messagesaccountmissing);
            //     }
            //     await profileModel.findOneAndUpdate(
            //         {
            //             userID: target.id,
            //         },
            //         {
            //             $inc: {
            //                 [material]: amount,
            //             },
            //         }
            //     );
            //     message.channel.send(`You have succesfully sent a trade to <@target>.`)
            // } catch (err) {
            //     console.log(err);
            //     message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`) // Error Systeem
            // }
            
            let file = editJsonFile(`./tradestock.json`, {
                autosave: true
            }); // target file
            const filedata = require('./../tradestock.json') // current data
            file.set(material1, Number((filedata[material1] + amount1 * 1)))
            file.set(material2, Number((filedata[material2] + amount2 * 1)))
            file.set(material3, Number((filedata[material3] + amount3 * 1)))
            file.set(material4, Number((filedata[material4] + amount4 * 1)))
            file.set(material5, Number((filedata[material5] + amount5 * 1)))
            file.save()
        } catch (err) {
            console.log(err)
            message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`) // Error Systeem
        }
    },
};
