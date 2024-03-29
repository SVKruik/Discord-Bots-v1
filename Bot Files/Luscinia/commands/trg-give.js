// Geef iemand materialen.

const config = require("../other/config.js");
const profileModel = require("../models/profileSchema");
const editJsonFile = require("edit-json-file");

module.exports = {
    name: "tradinggive",
    aliases: config.aliases.aliasestradinggive,
    cooldown: config.cooldown.cooldowntradinggive,
    permissions: config.permissions.permissiontradinggive,
    description: "Give someone materials.",
    async execute(message, args, cmd, client, Discord, profileData) {
        try {
            const materiallist = [
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
            const material1 = args[1];
            const amount = args[2];
            const material = material1.toLowerCase();
            if (!args[0]) {
                return message.channel.send(config.basemessages.messagesmembermention)
            }
            ;
            if (!material) {
                return message.channel.send(`You are missing the type of material/item.`)
            }
            if (!amount) {
                return message.channel.send(config.basemessages.messagesamountmissing)
            }
            const target = message.mentions.users.first();
            if (!target) {
                return message.channel.send(config.basemessages.messagesfinderror);
            }
            if (amount <= 0) {
                return message.channel.send(config.basemessages.messagesgreaterone);
            }
            if (materiallist.includes(material) == false) {
                return message.channel.send(`The item that you are trying to give doesn't exist or you have a typo.`)
            }
            ;
            try {
                const targetData = await profileModel.findOne({ userID: target.id });
                if (!targetData) {
                    return message.channel.send(config.basemessages.messagesaccountmissing);
                }
                await profileModel.findOneAndUpdate(
                    {
                        userID: target.id,
                    },
                    {
                        $inc: {
                            [material]: amount,
                        },
                    }
                );

                message.channel.send(`The targeted member has been given \`${amount}\` amount of \`${material}\`.`)
            } catch (err) {
                console.log(err);
                message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`) // Error Systeem
            }
        } catch (err) {
            console.log(err)
            message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`) // Error Systeem
        }
    },
};
