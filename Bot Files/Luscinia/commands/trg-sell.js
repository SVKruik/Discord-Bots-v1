// Koop iets op de markt.

const config = require("../other/config.js");
const profileModel = require("../models/profileSchema");
const editJsonFile = require("edit-json-file");

module.exports = {
    name: "tradingsell",
    aliases: config.aliases.aliasestradingsell,
    cooldown: config.cooldown.cooldowntradingsell,
    permissions: config.permissions.permissiontradingsell,
    description: "Sell something to the market.",
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
            const material1 = args[0]
            const material = material1.toLowerCase();
            const amount = args[1]
            if (materiallist.includes(material) == false) {
                return message.channel.send(`The item that you are trying to sell doesn't exist or you have a typo.`)
            }
            ;
            if (!material) {
                return message.channel.send(`What would you like to sell?`)
            }
            if (!amount) {
                return message.channel.send(`How many of this item would you like to sell?`)
            }
            let file1 = editJsonFile(`./marketdynprice.json`); // update price
            let file2 = editJsonFile(`./marketdynstock.json`) // update stock
            const filedata1 = require('./../marketdynprice.json')
            const filedata2 = require('./../marketdynstock.json')
            const filedata3 = require('./../formula-a.json')
            const filedata4 = require('./../formula-b.json')
            try {
                const price = filedata1[material] * amount
                const newbal = profileData.shard + price
                const stockmaxa = profileData[material] + 1
                if (amount > profileData[material])
                    return message.channel.send(`You do not have that amount of materials to perform this command.`);
                if (amount > 0 && amount < stockmaxa) {
                    const newstock = filedata2[material] + amount
                    const difference1 = (filedata3[material] * newstock) + filedata4[material] // price update
                    file1.set(material, difference1);
                    file1.save()
                    file2.set(material, newstock) // stock update
                    file2.save()
                    await profileModel.findOneAndUpdate(
                        {
                            userID: message.author.id,
                        },
                        {
                            $inc: {
                                shard: price,
                                [material]: -amount,
                                actions: 1,
                                timessell: 1,
                                amountsell: amount,
                            },
                        }
                    );
                    message.channel.send(`You have succesfully sold \`${amount}\` amount of \`${material}\`, for a total price of \`${price}\`. You new balance is \`${newbal}\`.`)
                } else if (amount == "max" || amount == "all") {
                    const difference1 = (filedata3[material] * profileData[material]) + filedata4[material] // price update
                    const newstock = filedata2[material] + profileData[material]
                    file1.set(material, difference1);
                    file1.save()
                    file2.set(material, newstock) // stock update
                    file2.save()
                    const pricemax = profileData[material] * filedata1[material] // max stock price
                    const stockmaxb = profileData[material]
                    const newbala = profileData.shard + pricemax
                    await profileModel.findOneAndUpdate(
                        {
                            userID: message.author.id,
                        },
                        {
                            $inc: {
                                shard: pricemax,
                                [material]: -stockmaxb,
                                actions: 1,
                                timessell: 1,
                                amountsell: stockmaxb,
                            },
                        }
                    );
                    message.channel.send(`You have succesfully sold \`${stockmaxb}\` amount of \`${material}\`, for a total price of \`${pricemax}\`. You new balance is \`${newbala}\`.`)
                }
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
