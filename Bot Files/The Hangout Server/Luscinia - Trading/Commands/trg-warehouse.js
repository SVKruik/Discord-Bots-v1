// Laat alle materialen zien die je hebt.

const config = require("../other/config.js");
const profileModel = require("../models/profileSchema");
const editJsonFile = require("edit-json-file");
const { MessageAttachment } = require('discord.js')

module.exports = {
    name: "warehouse",
    aliases: config.aliases.aliasestradingwarehouse,
    cooldown: config.cooldown.cooldowntradingwarehouse,
    permissions: config.permissions.permissiontradingwarehouse,
    description: "Check all your inventory of materials.",
    async execute(message, args, cmd, client, Discord, profileData) {
        const attachment = new MessageAttachment('other/Category.png')
        const category1 = args[0]
        const category = category1.toLowerCase();
        if (!args[0]) {
            message.channel.send(`What category materials would you like to know? You can pick one from the following image:`)
            message.channel.send({ files: [attachment] })
        }
        if (category === "wood") {
            const newEmbed = new Discord.MessageEmbed() // Nieuwe embed maken
                .setColor(config.base.basecolor)
                .addFields(
                    {
                        name: `Woodplank`,
                        value: `\`${profileData.woodplank}\``,
                    },
                    {
                        name: `Woodpart`,
                        value: `\`${profileData.woodpart}\``,
                    },
                    {
                        name: `Log`,
                        value: `\`${profileData.log}\``,
                    },
                    {
                        name: `Bamboo`,
                        value: `\`${profileData.bamboo}\``,
                    },
                    {
                        name: `Cedar`,
                        value: `\`${profileData.cedar}\``,
                    },
                    {
                        name: `Fir`,
                        value: `\`${profileData.fir}\``,
                    },
                    {
                        name: `Pine`,
                        value: `\`${profileData.pine}\``,
                    },
                    {
                        name: `Ash`,
                        value: `\`${profileData.ash}\``,
                    },
                    {
                        name: `Birch`,
                        value: `\`${profileData.birch}\``,
                    },
                    {
                        name: `Cherrywood`,
                        value: `\`${profileData.cherrywood}\``,
                    },
                    {
                        name: `Mahogany`,
                        value: `\`${profileData.mahogany}\``,
                    },
                    {
                        name: `Maple`,
                        value: `\`${profileData.maple}\``,
                    },
                    {
                        name: `Oak`,
                        value: `\`${profileData.oak}\``,
                    },
                    {
                        name: `Poplar`,
                        value: `\`${profileData.poplar}\``,
                    },
                    {
                        name: `Teak`,
                        value: `\`${profileData.teak}\``,
                    },
                    {
                        name: `Composite Wood`,
                        value: `\`${profileData.compositewood}\``,
                    }
                )
            message.channel.send({ embeds: [newEmbed] })
        } else if (category === "plastic") {
            const newEmbed = new Discord.MessageEmbed() // Nieuwe embed maken
                .setColor(config.base.basecolor)
                .addFields(
                    {
                        name: `Pipe`,
                        value: `\`${profileData.pipe}\``,
                    },
                    {
                        name: `Plastic Part`,
                        value: `\`${profileData.plasticpart}\``,
                    },
                    {
                        name: `plastic`,
                        value: `\`${profileData.plastic}\``,
                    },
                )
            message.channel.send({ embeds: [newEmbed] })
        } else if (category === "glass") {
            const newEmbed = new Discord.MessageEmbed() // Nieuwe embed maken
                .setColor(config.base.basecolor)
                .addFields(
                    {
                        name: `Glass`,
                        value: `\`${profileData.glass}\``,
                    },
                    {
                        name: `Sand`,
                        value: `\`${profileData.sand}\``,
                    },
                    {
                        name: `Plexiglass`,
                        value: `\`${profileData.plexiglass}\``,
                    },
                )
            message.channel.send({ embeds: [newEmbed] })
        } else if (category === "stone") {
            const newEmbed = new Discord.MessageEmbed() // Nieuwe embed maken
                .setColor(config.base.basecolor)
                .addFields(
                    {
                        name: `Granite`,
                        value: `\`${profileData.granite}\``,
                    },
                    {
                        name: `Marble`,
                        value: `\`${profileData.marble}\``,
                    },
                    {
                        name: `Quartz`,
                        value: `\`${profileData.quartz}\``,
                    },
                    {
                        name: `Chalk`,
                        value: `\`${profileData.chalk}\``,
                    },
                    {
                        name: `Slate`,
                        value: `\`${profileData.slate}\``,
                    },
                    {
                        name: `Basalt`,
                        value: `\`${profileData.basalt}\``,
                    },
                    {
                        name: `Pebble`,
                        value: `\`${profileData.pebble}\``,
                    },
                    {
                        name: `Limestone`,
                        value: `\`${profileData.limestone}\``,
                    },
                    {
                        name: `Flint`,
                        value: `\`${profileData.flint}\``,
                    },
                    {
                        name: `Onyx`,
                        value: `\`${profileData.onyx}\``,
                    },
                    {
                        name: `Travertine`,
                        value: `\`${profileData.travertine}\``,
                    }
                )
            message.channel.send({ embeds: [newEmbed] })
        } else if (category === "rawmaterials" || category === "rawmaterial") {
            const newEmbed = new Discord.MessageEmbed() // Nieuwe embed maken
                .setColor(config.base.basecolor)
                .addFields(
                    {
                        name: `Oil`,
                        value: `\`${profileData.oil}\``,
                    },
                    {
                        name: `Coal`,
                        value: `\`${profileData.coal}\``,
                    },
                    {
                        name: `Iron Ore`,
                        value: `\`${profileData.ironore}\``,
                    },
                    {
                        name: `Copper Ore`,
                        value: `\`${profileData.copperore}\``,
                    },
                    {
                        name: `Gold Ore`,
                        value: `\`${profileData.goldore}\``,
                    },
                    {
                        name: `Gas`,
                        value: `\`${profileData.gas}\``,
                    },
                    {
                        name: `Ceramic`,
                        value: `\`${profileData.ceramic}\``,
                    },
                    {
                        name: `Cork`,
                        value: `\`${profileData.cork}\``,
                    },
                    {
                        name: `Mesh`,
                        value: `\`${profileData.mesh}\``,
                    },
                    {
                        name: `Rubber`,
                        value: `\`${profileData.rubber}\``,
                    },
                    {
                        name: `Uranium`,
                        value: `\`${profileData.uranium}\``,
                    },
                    {
                        name: `Resin`,
                        value: `\`${profileData.resin}\``,
                    },
                    {
                        name: `Carbon`,
                        value: `\`${profileData.carbon}\``,
                    },
                    {
                        name: `Clay`,
                        value: `\`${profileData.clay}\``,
                    },
                    {
                        name: `Soil`,
                        value: `\`${profileData.soil}\``,
                    },
                    {
                        name: `Water`,
                        value: `\`${profileData.water}\``,
                    }
                )
            message.channel.send({ embeds: [newEmbed] })
        } else if (category === "buildingmaterials" || category === "buildingmaterial") {
            const newEmbed = new Discord.MessageEmbed() // Nieuwe embed maken
                .setColor(config.base.basecolor)
                .addFields(
                    {
                        name: `Cement`,
                        value: `\`${profileData.cement}\``,
                    },
                    {
                        name: `Concrete`,
                        value: `\`${profileData.concrete}\``,
                    },
                    {
                        name: `Steel Sheet`,
                        value: `\`${profileData.steelsheet}\``,
                    },
                    {
                        name: `Tape`,
                        value: `\`${profileData.tape}\``,
                    },
                    {
                        name: `Brick`,
                        value: `\`${profileData.brick}\``,
                    },
                    {
                        name: `Steel`,
                        value: `\`${profileData.steel}\``,
                    },
                    {
                        name: `Steel Part`,
                        value: `\`${profileData.steelpart}\``,
                    }
                )
            message.channel.send({ embeds: [newEmbed] })
        } else if (category === "semiproducts" || category === "semiproduct" || category === "semi") {
            const newEmbed = new Discord.MessageEmbed() // Nieuwe embed maken
                .setColor(config.base.basecolor)
                .addFields(
                    {
                        name: `Glue`,
                        value: `\`${profileData.glue}\``,
                    },
                    {
                        name: `Paper`,
                        value: `\`${profileData.paper}\``,
                    },
                    {
                        name: `Salt`,
                        value: `\`${profileData.salt}\``,
                    },
                    {
                        name: `Flower`,
                        value: `\`${profileData.flower}\``,
                    },
                    {
                        name: `Baking Powder`,
                        value: `\`${profileData.bakingpowder}\``,
                    },
                    {
                        name: `Bread`,
                        value: `\`${profileData.bread}\``,
                    }
                )
            message.channel.send({ embeds: [newEmbed] })
        } else if (category === "crops" || category === "crop") {
            const newEmbed = new Discord.MessageEmbed() // Nieuwe embed maken
                .setColor(config.base.basecolor)
                .addFields(
                    {
                        name: `Rice`,
                        value: `\`${profileData.rice}\``,
                    },
                    {
                        name: `Rye`,
                        value: `\`${profileData.rye}\``,
                    },
                    {
                        name: `Oats`,
                        value: `\`${profileData.oats}\``,
                    },
                    {
                        name: `Corn`,
                        value: `\`${profileData.corn}\``,
                    },
                    {
                        name: `Barley`,
                        value: `\`${profileData.barley}\``,
                    },
                    {
                        name: `Cassava`,
                        value: `\`${profileData.cassava}\``,
                    },
                    {
                        name: `Soybean`,
                        value: `\`${profileData.soybean}\``,
                    },
                    {
                        name: `Sorghum`,
                        value: `\`${profileData.sorghum}\``,
                    },
                    {
                        name: `Wheat`,
                        value: `\`${profileData.wheat}\``,
                    },
                    {
                        name: `Cocoa Bean`,
                        value: `\`${profileData.cocoabean}\``,
                    },
                    {
                        name: `Coffee Bean`,
                        value: `\`${profileData.coffeebean}\``,
                    },
                    {
                        name: `Sugar`,
                        value: `\`${profileData.sugar}\``,
                    }
                )
            message.channel.send({ embeds: [newEmbed] })
        } else if (category === "vegetables" || category === "vegetable" || category === "veg") {
            const newEmbed1 = new Discord.MessageEmbed() // Nieuwe embed maken
                .setColor(config.base.basecolor)
                .addFields(
                    {
                        name: `Asparagus`,
                        value: `\`${profileData.asparagus}\``,
                    },
                    {
                        name: `Eggplant`,
                        value: `\`${profileData.eggplant}\``,
                    },
                    {
                        name: `broccoli`,
                        value: `\`${profileData.broccoli}\``,
                    },
                    {
                        name: `Cabbage`,
                        value: `\`${profileData.cabbage}\``,
                    },
                    {
                        name: `Avocado`,
                        value: `\`${profileData.avocado}\``,
                    },
                    {
                        name: `Brussels Sprout`,
                        value: `\`${profileData.brusselssprout}\``,
                    },
                    {
                        name: `Carrot`,
                        value: `\`${profileData.carrot}\``,
                    },
                    {
                        name: `Beetroot`,
                        value: `\`${profileData.beetroot}\``,
                    },
                    {
                        name: `Garlic`,
                        value: `\`${profileData.garlic}\``,
                    },
                    {
                        name: `Celery`,
                        value: `\`${profileData.celery}\``,
                    },
                    {
                        name: `Cucumber`,
                        value: `\`${profileData.cucumber}\``,
                    },
                    {
                        name: `Green Bean`,
                        value: `\`${profileData.greenbean}\``,
                    },
                    {
                        name: `Leek`,
                        value: `\`${profileData.leek}\``,
                    },
                    {
                        name: `Lettuce`,
                        value: `\`${profileData.lettuce}\``,
                    },
                    {
                        name: `Mushroom`,
                        value: `\`${profileData.mushroom}\``,
                    },
                    {
                        name: `Onion`,
                        value: `\`${profileData.onion}\``,
                    },
                    {
                        name: `Pea`,
                        value: `\`${profileData.pea}\``,
                    },
                    {
                        name: `Pumpkin`,
                        value: `\`${profileData.pumpkin}\``,
                    },
                    {
                        name: `Radish`,
                        value: `\`${profileData.radish}\``,
                    },
                    {
                        name: `Rhubarb`,
                        value: `\`${profileData.rhubarb}\``,
                    },
                    {
                        name: `Sweet Pepper`,
                        value: `\`${profileData.sweetpepper}\``,
                    },
                    {
                        name: `Spinach`,
                        value: `\`${profileData.spinach}\``,
                    },
                    {
                        name: `Tomato`,
                        value: `\`${profileData.tomato}\``,
                    },
                    {
                        name: `Sweet Potato`,
                        value: `\`${profileData.sweetpotato}\``,
                    },
                    {
                        name: `Yam`,
                        value: `\`${profileData.yam}\``,
                    },
                    {
                        name: `Potato`,
                        value: `\`${profileData.potato}\``,
                    }
                )
            const newEmbed2 = new Discord.MessageEmbed() // Nieuwe embed maken
                .setColor(config.base.basecolor)
                .addFields(
                    {
                        name: `Potato`,
                        value: `\`${profileData.potato}\``,
                    }
                )
            message.channel.send({ embeds: [newEmbed1] })
            message.channel.send({ embeds: [newEmbed2] })
        } else if (category === "fruits" || category === "fruit") {
            const newEmbed1 = new Discord.MessageEmbed() // Nieuwe embed maken
                .setColor(config.base.basecolor)
                .addFields(
                    {
                        name: `Acerola`,
                        value: `\`${profileData.acerola}\``,
                    },
                    {
                        name: `Apple`,
                        value: `\`${profileData.apple}\``,
                    },
                    {
                        name: `Apricot`,
                        value: `\`${profileData.apricot}\``,
                    },
                    {
                        name: `Banana`,
                        value: `\`${profileData.banana}\``,
                    },
                    {
                        name: `Blackberry`,
                        value: `\`${profileData.blackberry}\``,
                    },
                    {
                        name: `Blackcurrant`,
                        value: `\`${profileData.blackcurrant}\``,
                    },
                    {
                        name: `Blueberry`,
                        value: `\`${profileData.blueberry}\``,
                    },
                    {
                        name: `Breadfruit`,
                        value: `\`${profileData.breadfruit}\``,
                    },
                    {
                        name: `Cantaloupe`,
                        value: `\`${profileData.cantaloupe}\``,
                    },
                    {
                        name: `Cherry`,
                        value: `\`${profileData.cherry}\``,
                    },
                    {
                        name: `Clementine`,
                        value: `\`${profileData.clementine}\``,
                    },
                    {
                        name: `Coconut`,
                        value: `\`${profileData.coconut}\``,
                    },
                    {
                        name: `Cranberry`,
                        value: `\`${profileData.cranberry}\``,
                    },
                    {
                        name: `Datefruit`,
                        value: `\`${profileData.datefruit}\``,
                    },
                    {
                        name: `Fig`,
                        value: `\`${profileData.fig}\``,
                    },
                    {
                        name: `Gooseberry`,
                        value: `\`${profileData.gooseberry}\``,
                    },
                    {
                        name: `Grapefruit`,
                        value: `\`${profileData.grapefruit}\``,
                    },
                    {
                        name: `Grape`,
                        value: `\`${profileData.grape}\``,
                    },
                    {
                        name: `Guava`,
                        value: `\`${profileData.guava}\``,
                    },
                    {
                        name: `Honeydew Melon`,
                        value: `\`${profileData.honeydewmelon}\``,
                    },
                    {
                        name: `Jackfruit`,
                        value: `\`${profileData.jackfruit}\``,
                    },
                    {
                        name: `Jujubefruit`,
                        value: `\`${profileData.jujubefruit}\``,
                    },
                    {
                        name: `Kiwi`,
                        value: `\`${profileData.kiwi}\``,
                    },
                    {
                        name: `Kumquat`,
                        value: `\`${profileData.kumquat}\``,
                    },
                    {
                        name: `Lemon`,
                        value: `\`${profileData.lemon}\``,
                    }
                )
            const newEmbed2 = new Discord.MessageEmbed() // Nieuwe embed maken
                .setColor(config.base.basecolor)
                .addFields(
                    {
                        name: `Lime`,
                        value: `\`${profileData.lime}\``,
                    },
                    {
                        name: `Lychee`,
                        value: `\`${profileData.lychee}\``,
                    },
                    {
                        name: `Mandarin`,
                        value: `\`${profileData.mandarin}\``,
                    },
                    {
                        name: `Mango`,
                        value: `\`${profileData.mango}\``,
                    },
                    {
                        name: `Mulberry`,
                        value: `\`${profileData.mulberry}\``,
                    },
                    {
                        name: `Olive`,
                        value: `\`${profileData.orange}\``,
                    },
                    {
                        name: `Orange`,
                        value: `\`${profileData.potato}\``,
                    },
                    {
                        name: `Papaya`,
                        value: `\`${profileData.papaya}\``,
                    },
                    {
                        name: `Passionfruit`,
                        value: `\`${profileData.passionfruit}\``,
                    },
                    {
                        name: `Peach`,
                        value: `\`${profileData.peach}\``,
                    },
                    {
                        name: `Pear`,
                        value: `\`${profileData.pear}\``,
                    },
                    {
                        name: `Dragonfruit`,
                        value: `\`${profileData.dragonfruit}\``,
                    },
                    {
                        name: `Pineapple`,
                        value: `\`${profileData.pineapple}\``,
                    },
                    {
                        name: `Plum`,
                        value: `\`${profileData.plum}\``,
                    },
                    {
                        name: `Pomegranate`,
                        value: `\`${profileData.pomegranate}\``,
                    },
                    {
                        name: `Prune`,
                        value: `\`${profileData.prune}\``,
                    },
                    {
                        name: `Raspberry`,
                        value: `\`${profileData.raspberry}\``,
                    },
                    {
                        name: `Strawberry`,
                        value: `\`${profileData.strawberry}\``,
                    },
                    {
                        name: `Tangerine`,
                        value: `\`${profileData.tangerine}\``,
                    },
                    {
                        name: `Watermelon`,
                        value: `\`${profileData.watermelon}\``,
                    }
                )
            message.channel.send({ embeds: [newEmbed1] })
            message.channel.send({ embeds: [newEmbed2] })
        } else if (category === "beans" || category === "bean") {
            const newEmbed = new Discord.MessageEmbed() // Nieuwe embed maken
                .setColor(config.base.basecolor)
                .addFields(
                    {
                        name: `Black Bean`,
                        value: `\`${profileData.blackbean}\``,
                    },
                    {
                        name: `Black-eyed Pea`,
                        value: `\`${profileData.blackeyedpea}\``,
                    },
                    {
                        name: `Cannellini Bean`,
                        value: `\`${profileData.cannellinibean}\``,
                    },
                    {
                        name: `Chickpea`,
                        value: `\`${profileData.chickpea}\``,
                    },
                    {
                        name: `Great Northern Bean`,
                        value: `\`${profileData.greatnorthernbean}\``,
                    },
                    {
                        name: `Kidney Bean`,
                        value: `\`${profileData.kidneybean}\``,
                    },
                    {
                        name: `Lima Bean`,
                        value: `\`${profileData.limabean}\``,
                    },
                    {
                        name: `Pinto Bean`,
                        value: `\`${profileData.pintobean}\``,
                    },
                    {
                        name: `Fava Bean`,
                        value: `\`${profileData.favabean}\``,
                    },
                    {
                        name: `Navy Bean`,
                        value: `\`${profileData.navybean}\``,
                    },
                    {
                        name: `Adzuki Bean`,
                        value: `\`${profileData.adzukibean}\``,
                    },
                    {
                        name: `Edamame`,
                        value: `\`${profileData.edamame}\``,
                    },
                    {
                        name: `Mung Bean`,
                        value: `\`${profileData.mungbean}\``,
                    },
                    {
                        name: `Cranberry Bean`,
                        value: `\`${profileData.cranberrybean}\``,
                    }
                )
            message.channel.send({ embeds: [newEmbed] })
        } else if (category === "nuts" || category === "nut") {
            const newEmbed1 = new Discord.MessageEmbed() // Nieuwe embed maken
                .setColor(config.base.basecolor)
                .addFields(
                    {
                        name: `Acorn`,
                        value: `\`${profileData.acorn}\``,
                    },
                    {
                        name: `Almond`,
                        value: `\`${profileData.almond}\``,
                    },
                    {
                        name: `Beech`,
                        value: `\`${profileData.beech}\``,
                    },
                    {
                        name: `Brazil Nut`,
                        value: `\`${profileData.brazilnut}\``,
                    },
                    {
                        name: `Candle Nut`,
                        value: `\`${profileData.candlenut}\``,
                    },
                    {
                        name: `Cashew`,
                        value: `\`${profileData.cashew}\``,
                    },
                    {
                        name: `Chestnut`,
                        value: `\`${profileData.chestnut}\``,
                    },
                    {
                        name: `Chilean Hazel`,
                        value: `\`${profileData.chileanhazel}\``,
                    },
                    {
                        name: `Egusi`,
                        value: `\`${profileData.egusi}\``,
                    },
                    {
                        name: `Guinea Peanut`,
                        value: `\`${profileData.guineapeanut}\``,
                    },
                    {
                        name: `Hazelnut`,
                        value: `\`${profileData.hazelnut}\``,
                    },
                    {
                        name: `Hickory`,
                        value: `\`${profileData.hickory}\``,
                    },
                    {
                        name: `Kolanut`,
                        value: `\`${profileData.kolanut}\``,
                    },
                    {
                        name: `Macadamia`,
                        value: `\`${profileData.macadamia}\``,
                    },
                    {
                        name: `Malabar Almond`,
                        value: `\`${profileData.malabaralmond}\``,
                    },
                    {
                        name: `Malabar Chestnut`,
                        value: `\`${profileData.malabarchestnut}\``,
                    },
                    {
                        name: `Mamoncillo`,
                        value: `\`${profileData.mamoncillo}\``,
                    },
                    {
                        name: `Mongongo`,
                        value: `\`${profileData.mongongo}\``,
                    },
                    {
                        name: `Ogbono`,
                        value: `\`${profileData.ogbono}\``,
                    },
                    {
                        name: `Paradise Nut`,
                        value: `\`${profileData.paradisenut}\``,
                    },
                    {
                        name: `Pili`,
                        value: `\`${profileData.pili}\``,
                    },
                    {
                        name: `Pistachio`,
                        value: `\`${profileData.pistachio}\``,
                    },
                    {
                        name: `Shea Nut`,
                        value: `\`${profileData.sheanut}\``,
                    },
                    {
                        name: `Walnut`,
                        value: `\`${profileData.walnut}\``,
                    },
                    {
                        name: `Cycads`,
                        value: `\`${profileData.cycads}\``,
                    }
                )
            const newEmbed2 = new Discord.MessageEmbed() // Nieuwe embed maken
                .setColor(config.base.basecolor)
                .addFields(
                    {
                        name: `Ginkgo`,
                        value: `\`${profileData.ginkgo}\``,
                    },
                    {
                        name: `Gnetum`,
                        value: `\`${profileData.gnetum}\``,
                    },
                    {
                        name: `Juniper`,
                        value: `\`${profileData.juniper}\``,
                    },
                    {
                        name: `Pinenut`,
                        value: `\`${profileData.pinenut}\``,
                    },
                    {
                        name: `Podocarps`,
                        value: `\`${profileData.podocarps}\``,
                    }
                )
            message.channel.send({ embeds: [newEmbed1] })
            message.channel.send({ embeds: [newEmbed2] })
        } else if (category === "seeds" || category === "seed") {
            const newEmbed = new Discord.MessageEmbed() // Nieuwe embed maken
                .setColor(config.base.basecolor)
                .addFields(
                    {
                        name: `Finger Millet`,
                        value: `\`${profileData.fingermillet}\``,
                    },
                    {
                        name: `Teff`,
                        value: `\`${profileData.teff}\``,
                    },
                    {
                        name: `Fonio`,
                        value: `\`${profileData.fonio}\``,
                    },
                    {
                        name: `Proso Millet`,
                        value: `\`${profileData.prosomillet}\``,
                    },
                    {
                        name: `Pearl Millet`,
                        value: `\`${profileData.pearlmillet}\``,
                    },
                    {
                        name: `Foxtail Millet`,
                        value: `\`${profileData.foxtailmillet}\``,
                    },
                    {
                        name: `Triticale`,
                        value: `\`${profileData.triticale}\``,
                    },
                    {
                        name: `Durum`,
                        value: `\`${profileData.durum}\``,
                    },
                    {
                        name: `Einkorn`,
                        value: `\`${profileData.einkorn}\``,
                    },
                    {
                        name: `Spelt`,
                        value: `\`${profileData.spelt}\``,
                    },
                    {
                        name: `Kamut`,
                        value: `\`${profileData.kamut}\``,
                    },
                    {
                        name: `Emmer`,
                        value: `\`${profileData.emmer}\``,
                    },
                    {
                        name: `Kernza`,
                        value: `\`${profileData.kernza}\``,
                    },
                    {
                        name: `Amaranth`,
                        value: `\`${profileData.amaranth}\``,
                    },
                    {
                        name: `Kaniwa`,
                        value: `\`${profileData.kaniwa}\``,
                    },
                    {
                        name: `Quinoa`,
                        value: `\`${profileData.quinoa}\``,
                    },
                    {
                        name: `Hanza`,
                        value: `\`${profileData.hanza}\``,
                    },
                    {
                        name: `Chia`,
                        value: `\`${profileData.chia}\``,
                    },
                    {
                        name: `Flax`,
                        value: `\`${profileData.flax}\``,
                    },
                    {
                        name: `Breadnut`,
                        value: `\`${profileData.breadnut}\``,
                    },
                    {
                        name: `Sesame`,
                        value: `\`${profileData.sesame}\``,
                    },
                    {
                        name: `Buckwheat`,
                        value: `\`${profileData.buckwheat}\``,
                    }
                )
            message.channel.send({ embeds: [newEmbed] })
        } else if (category === "spices" || category === "herbs" || category === "spice" || category === "herb") {
            const newEmbed = new Discord.MessageEmbed() // Nieuwe embed maken
                .setColor(config.base.basecolor)
                .addFields(
                    {
                        name: `Thyme`,
                        value: `\`${profileData.thyme}\``,
                    },
                    {
                        name: `Basil`,
                        value: `\`${profileData.basil}\``,
                    },
                    {
                        name: `Oregano`,
                        value: `\`${profileData.oregano}\``,
                    },
                    {
                        name: `Rosemary`,
                        value: `\`${profileData.rosemary}\``,
                    },
                    {
                        name: `Fennel Seed`,
                        value: `\`${profileData.fennelseed}\``,
                    },
                    {
                        name: `Bay Leaf`,
                        value: `\`${profileData.bayleaf}\``,
                    },
                    {
                        name: `Chili Powder`,
                        value: `\`${profileData.chilipowder}\``,
                    },
                    {
                        name: `Smoked Paprika`,
                        value: `\`${profileData.smokedpaprika}\``,
                    },
                    {
                        name: `Cayenne`,
                        value: `\`${profileData.cayenne}\``,
                    },
                    {
                        name: `Cumin`,
                        value: `\`${profileData.cumin}\``,
                    },
                    {
                        name: `Ground Cardamom`,
                        value: `\`${profileData.groundcardamom}\``,
                    },
                    {
                        name: `Curry Powder`,
                        value: `\`${profileData.currypowder}\``,
                    },
                    {
                        name: `Onion Powder`,
                        value: `\`${profileData.onionpowder}\``,
                    },
                    {
                        name: `Garlic Powder`,
                        value: `\`${profileData.garlicpowder}\``,
                    },
                    {
                        name: `Ground Mustard`,
                        value: `\`${profileData.groundmustard}\``,
                    },
                    {
                        name: `Clove`,
                        value: `\`${profileData.clove}\``,
                    },
                    {
                        name: `Nutmeg`,
                        value: `\`${profileData.nutmeg}\``,
                    },
                    {
                        name: `Cinnamon`,
                        value: `\`${profileData.cinnamon}\``,
                    },
                    {
                        name: `Ground Ginger`,
                        value: `\`${profileData.groundginger}\``,
                    },
                    {
                        name: `Mace`,
                        value: `\`${profileData.mace}\``,
                    },
                    {
                        name: `Pepper`,
                        value: `\`${profileData.pepper}\``,
                    }
                )
            message.channel.send({ embeds: [newEmbed] })
        } else if (category === "animals" || category === "animal") {
            const newEmbed = new Discord.MessageEmbed() // Nieuwe embed maken
                .setColor(config.base.basecolor)
                .addFields(
                    {
                        name: `Cow`,
                        value: `\`${profileData.cow}\``,
                    },
                    {
                        name: `Pig`,
                        value: `\`${profileData.pig}\``,
                    },
                    {
                        name: `Horse`,
                        value: `\`${profileData.horse}\``,
                    },
                    {
                        name: `Chicken`,
                        value: `\`${profileData.chicken}\``,
                    },
                    {
                        name: `Sheep`,
                        value: `\`${profileData.sheep}\``,
                    },
                    {
                        name: `Goat`,
                        value: `\`${profileData.goat}\``,
                    },
                    {
                        name: `Llama`,
                        value: `\`${profileData.llama}\``,
                    },
                    {
                        name: `Rabbit`,
                        value: `\`${profileData.rabbit}\``,
                    },
                    {
                        name: `Egg`,
                        value: `\`${profileData.egg}\``,
                    },
                    {
                        name: `Fish`,
                        value: `\`${profileData.fish}\``,
                    },
                    {
                        name: `Meat`,
                        value: `\`${profileData.meat}\``,
                    }
                )
            message.channel.send({ embeds: [newEmbed] })
        } else if (category === "insulation") {
            const newEmbed = new Discord.MessageEmbed() // Nieuwe embed maken
                .setColor(config.base.basecolor)
                .addFields(
                    {
                        name: `Phenolic Foam`,
                        value: `\`${profileData.phenolicfoam}\``,
                    },
                    {
                        name: `Polyurethane`,
                        value: `\`${profileData.polyurethane}\``,
                    },
                    {
                        name: `XPS`,
                        value: `\`${profileData.xps}\``,
                    },
                    {
                        name: `Rockwool`,
                        value: `\`${profileData.rockwool}\``,
                    },
                    {
                        name: `Foam Glass`,
                        value: `\`${profileData.foamglass}\``,
                    },
                    {
                        name: `Glass Wool`,
                        value: `\`${profileData.glasswool}\``,
                    },
                    {
                        name: `Double Glass`,
                        value: `\`${profileData.doubleglass}\``,
                    },
                    {
                        name: `Triple Glass`,
                        value: `\`${profileData.tripleglass}\``,
                    }
                )
            message.channel.send({ embeds: [newEmbed] })
        } else if (category === "fabric") {
            const newEmbed = new Discord.MessageEmbed() // Nieuwe embed maken
                .setColor(config.base.basecolor)
                .addFields(
                    {
                        name: `Fabric`,
                        value: `\`${profileData.fabric}\``,
                    },
                    {
                        name: `Cotton`,
                        value: `\`${profileData.cotton}\``,
                    },
                    {
                        name: `Fibre`,
                        value: `\`${profileData.fibre}\``,
                    },
                    {
                        name: `Carbon Fibre`,
                        value: `\`${profileData.carbonfibre}\``,
                    }
                )
            message.channel.send({ embeds: [newEmbed] })
        } else if (category === "reactormaterial") {
            const newEmbed = new Discord.MessageEmbed() // Nieuwe embed maken
                .setColor(config.base.basecolor)
                .addFields(
                    {
                        name: `Chemical`,
                        value: `\`${profileData.chemical}\``,
                    },
                    {
                        name: `Poly Material`,
                        value: `\`${profileData.polymaterial}\``,
                    },
                    {
                        name: `Acid`,
                        value: `\`${profileData.acid}\``,
                    },
                    {
                        name: `Catalyst`,
                        value: `\`${profileData.catalyst}\``,
                    }
                )
            message.channel.send({ embeds: [newEmbed] })
        } else if (category === "metals" || category === "metal") {
            const newEmbed1 = new Discord.MessageEmbed() // Nieuwe embed maken
                .setColor(config.base.basecolor)
                .addFields(
                    {
                        name: `Chrome Part`,
                        value: `\`${profileData.chromepart}\``,
                    },
                    {
                        name: `Chrome`,
                        value: `\`${profileData.chrome}\``,
                    },
                    {
                        name: `Brass Part`,
                        value: `\`${profileData.brasspart}\``,
                    },
                    {
                        name: `Brass`,
                        value: `\`${profileData.brass}\``,
                    },
                    {
                        name: `Diamond`,
                        value: `\`${profileData.diamond}\``,
                    },
                    {
                        name: `Gold`,
                        value: `\`${profileData.gold}\``,
                    },
                    {
                        name: `Platinum`,
                        value: `\`${profileData.platinum}\``,
                    },
                    {
                        name: `silver`,
                        value: `\`${profileData.silver}\``,
                    },
                    {
                        name: `Copper`,
                        value: `\`${profileData.copper}\``,
                    },
                    {
                        name: `Iron`,
                        value: `\`${profileData.Iron}\``,
                    },
                    {
                        name: `Lithium`,
                        value: `\`${profileData.lithium}\``,
                    },
                    {
                        name: `Cobalt`,
                        value: `\`${profileData.cobalt}\``,
                    },
                    {
                        name: `Titanium`,
                        value: `\`${profileData.titanium}\``,
                    },
                    {
                        name: `Tungsten`,
                        value: `\`${profileData.tungsten}\``,
                    },
                    {
                        name: `Nickel`,
                        value: `\`${profileData.nickel}\``,
                    },
                    {
                        name: `magnesium`,
                        value: `\`${profileData.magnesium}\``,
                    },
                    {
                        name: `Lead`,
                        value: `\`${profileData.lead}\``,
                    },
                    {
                        name: `Tin`,
                        value: `\`${profileData.tin}\``,
                    },
                    {
                        name: `Mercury`,
                        value: `\`${profileData.mercury}\``,
                    },
                    {
                        name: `Bismuth`,
                        value: `\`${profileData.bismuth}\``,
                    },
                    {
                        name: `Rhodium`,
                        value: `\`${profileData.rhodium}\``,
                    },
                    {
                        name: `Osmium`,
                        value: `\`${profileData.osmium}\``,
                    },
                    {
                        name: `Palladium`,
                        value: `\`${profileData.palladium}\``,
                    },
                    {
                        name: `Iridium`,
                        value: `\`${profileData.iridium}\``,
                    },
                    {
                        name: `Ruthenium`,
                        value: `\`${profileData.ruthenium}\``,
                    }
                )
            const newEmbed2 = new Discord.MessageEmbed() // Nieuwe embed maken
                .setColor(config.base.basecolor)
                .addFields(
                    {
                        name: `Plutonium`,
                        value: `\`${profileData.plutonium}\``,
                    }
                )
            message.channel.send({ embeds: [newEmbed1] })
            message.channel.send({ embeds: [newEmbed2] })
        } else if (category === "components" || category === "component") {
            const newEmbed = new Discord.MessageEmbed() // Nieuwe embed maken
                .setColor(config.base.basecolor)
                .addFields(
                    {
                        name: `Component Electric`,
                        value: `\`${profileData.componentelectric}\``,
                    },
                    {
                        name: `Component Interior`,
                        value: `\`${profileData.componentinterior}\``,
                    },
                    {
                        name: `Component Clothing`,
                        value: `\`${profileData.componentclothing}\``,
                    },
                    {
                        name: `Component Starting`,
                        value: `\`${profileData.componentstarting}\``,
                    }
                )
            message.channel.send({ embeds: [newEmbed] })
        } else if (category === "citystatistics" || category === "citystatistic" || category === "citystats" || category === "citystat") {
            const newEmbed = new Discord.MessageEmbed() // Nieuwe embed maken
                .setColor(config.base.basecolor)
                .addFields(
                    {
                        name: `Happiness Percentage`,
                        value: `\`${profileData.happinesspercentage}\``,
                    },
                    {
                        name: `Crimerate`,
                        value: `\`${profileData.crimerate}\``,
                    },
                    {
                        name: `Population`,
                        value: `\`${profileData.population}\``,
                    },
                    {
                        name: `Power Usage`,
                        value: `\`${profileData.powerusage}\``,
                    },
                    {
                        name: `Water Usage`,
                        value: `\`${profileData.waterusage}\``,
                    },
                    {
                        name: `Gas Usage`,
                        value: `\`${profileData.gasusage}\``,
                    },
                    {
                        name: `Tax Income`,
                        value: `\`${profileData.taxincome}\``,
                    }
                )
            message.channel.send({ embeds: [newEmbed] })
        } else if (category === "house") {
            const newEmbed = new Discord.MessageEmbed() // Nieuwe embed maken
                .setColor(config.base.basecolor)
                .addFields(
                    {
                        name: `House Tier 1`,
                        value: `\`${profileData.housetier1}\``,
                    },
                    {
                        name: `House Tier 2`,
                        value: `\`${profileData.housetier2}\``,
                    },
                    {
                        name: `House Tier 3`,
                        value: `\`${profileData.housetier3}\``,
                    },
                    {
                        name: `House Tier 4`,
                        value: `\`${profileData.housetier4}\``,
                    },
                    {
                        name: `House Tier 5`,
                        value: `\`${profileData.housetier5}\``,
                    }
                )
            message.channel.send({ embeds: [newEmbed] })
        } else if (category === "nature") {
            const newEmbed = new Discord.MessageEmbed() // Nieuwe embed maken
                .setColor(config.base.basecolor)
                .addFields(
                    {
                        name: `River`,
                        value: `\`${profileData.river}\``,
                    },
                    {
                        name: `Forest`,
                        value: `\`${profileData.forest}\``,
                    },
                    {
                        name: `Beach`,
                        value: `\`${profileData.beach}\``,
                    },
                    {
                        name: `Mine`,
                        value: `\`${profileData.mine}\``,
                    },
                    {
                        name: `Field`,
                        value: `\`${profileData.field}\``,
                    },
                    {
                        name: `Oil Well`,
                        value: `\`${profileData.oilwell}\``,
                    }
                )
            message.channel.send({ embeds: [newEmbed] })
        } else if (category === "services" || category === "service") {
            const newEmbed = new Discord.MessageEmbed() // Nieuwe embed maken
                .setColor(config.base.basecolor)
                .addFields(
                    {
                        name: `Park`,
                        value: `\`${profileData.park}\``,
                    },
                    {
                        name: `School`,
                        value: `\`${profileData.school}\``,
                    },
                    {
                        name: `Cinema`,
                        value: `\`${profileData.cinema}\``,
                    },
                    {
                        name: `Restaurant`,
                        value: `\`${profileData.restaurant}\``,
                    },
                    {
                        name: `Hotel`,
                        value: `\`${profileData.hotel}\``,
                    }
                )
            message.channel.send({ embeds: [newEmbed] })
        } else if (category === "warehouse") {
            const newEmbed = new Discord.MessageEmbed() // Nieuwe embed maken
                .setColor(config.base.basecolor)
                .addFields(
                    {
                        name: `Warehouse Tier 1`,
                        value: `\`${profileData.warehousetier1}\``,
                    },
                    {
                        name: `Warehouse Tier 2`,
                        value: `\`${profileData.warehousetier2}\``,
                    },
                    {
                        name: `Warehouse Tier 3`,
                        value: `\`${profileData.warehousetier3}\``,
                    },
                    {
                        name: `Warehouse Tier 4`,
                        value: `\`${profileData.warehousetier4}\``,
                    },
                    {
                        name: `Warehouse Tier 5`,
                        value: `\`${profileData.warehousetier5}\``,
                    }
                )
            message.channel.send({ embeds: [newEmbed] })
        } else if (category === "police") {
            const newEmbed = new Discord.MessageEmbed() // Nieuwe embed maken
                .setColor(config.base.basecolor)
                .addFields(
                    {
                        name: `Police Tier 1`,
                        value: `\`${profileData.policetier1}\``,
                    },
                    {
                        name: `Police Tier 2`,
                        value: `\`${profileData.policetier2}\``,
                    },
                    {
                        name: `Police Tier 3`,
                        value: `\`${profileData.policetier3}\``,
                    }
                )
            message.channel.send({ embeds: [newEmbed] })
        } else if (category === "firedepartment" || category === "firedep") {
            const newEmbed = new Discord.MessageEmbed() // Nieuwe embed maken
                .setColor(config.base.basecolor)
                .addFields(
                    {
                        name: `Fire Department Tier 1`,
                        value: `\`${profileData.firedepartmenttier1}\``,
                    },
                    {
                        name: `Fire Department Tier 2`,
                        value: `\`${profileData.firedepartmenttier2}\``,
                    },
                    {
                        name: `Fire Department Tier 3`,
                        value: `\`${profileData.firedepartmenttier3}\``,
                    }
                )
            message.channel.send({ embeds: [newEmbed] })
        } else if (category === "mall") {
            const newEmbed = new Discord.MessageEmbed() // Nieuwe embed maken
                .setColor(config.base.basecolor)
                .addFields(
                    {
                        name: `Mall Tier 1`,
                        value: `\`${profileData.malltier1}\``,
                    },
                    {
                        name: `Mall Tier 2`,
                        value: `\`${profileData.malltier2}\``,
                    }
                )
            message.channel.send({ embeds: [newEmbed] })
        } else if (category === "cityhall") {
            const newEmbed = new Discord.MessageEmbed() // Nieuwe embed maken
                .setColor(config.base.basecolor)
                .addFields(
                    {
                        name: `Cityhall Tier 1`,
                        value: `\`${profileData.cityhalltier1}\``,
                    },
                    {
                        name: `Cityhall Tier 2`,
                        value: `\`${profileData.cityhalltier2}\``,
                    }
                )
            message.channel.send({ embeds: [newEmbed] })
        } else if (category === "landfill") {
            const newEmbed = new Discord.MessageEmbed() // Nieuwe embed maken
                .setColor(config.base.basecolor)
                .addFields(
                    {
                        name: `Landfill Tier 1`,
                        value: `\`${profileData.landfilltier1}\``,
                    },
                    {
                        name: `Landfill Tier 2`,
                        value: `\`${profileData.landfilltier2}\``,
                    },
                    {
                        name: `Landfill Tier 3`,
                        value: `\`${profileData.landfilltier3}\``,
                    }
                )
            message.channel.send({ embeds: [newEmbed] })
        } else if (category === "energy") {
            const newEmbed = new Discord.MessageEmbed() // Nieuwe embed maken
                .setColor(config.base.basecolor)
                .addFields(
                    {
                        name: `Nuclear Reactor Tier 1`,
                        value: `\`${profileData.nuclearreactortier1}\``,
                    },
                    {
                        name: `Nuclear Reactor Tier 2`,
                        value: `\`${profileData.nuclearreactortier1}\``,
                    },
                    {
                        name: `Windmill`,
                        value: `\`${profileData.windmill}\``,
                    },
                    {
                        name: `Sonar Panel`,
                        value: `\`${profileData.sonarpanel}\``,
                    }
                )
            message.channel.send({ embeds: [newEmbed] })
        } else if (category === "refinement") {
            const newEmbed = new Discord.MessageEmbed() // Nieuwe embed maken
                .setColor(config.base.basecolor)
                .addFields(
                    {
                        name: `Sawmill Tier 1`,
                        value: `\`${profileData.sawmilltier1}\``,
                    },
                    {
                        name: `Sawmill Tier 2`,
                        value: `\`${profileData.sawmilltier2}\``,
                    },
                    {
                        name: `Refinery Tier 1`,
                        value: `\`${profileData.refinerytier1}\``,
                    },
                    {
                        name: `Refinery Tier 2`,
                        value: `\`${profileData.refinerytier2}\``,
                    }
                )
            message.channel.send({ embeds: [newEmbed] })
        } else if (category === "store") {
            const newEmbed = new Discord.MessageEmbed() // Nieuwe embed maken
                .setColor(config.base.basecolor)
                .addFields(
                    {
                        name: `Interior Shop Tier 1`,
                        value: `\`${profileData.interiorshoptier1}\``,
                    },
                    {
                        name: `Interior Shop Tier 2`,
                        value: `\`${profileData.interiorshoptier2}\``,
                    },
                    {
                        name: `Clothing Shop Tier 1`,
                        value: `\`${profileData.clothingshoptier1}\``,
                    },
                    {
                        name: `Clothing Shop Tier 2`,
                        value: `\`${profileData.clothingshoptier2}\``,
                    },
                    {
                        name: `Drug Store Tier 1`,
                        value: `\`${profileData.drugstoretier1}\``,
                    },
                    {
                        name: `Drug Store Tier 2`,
                        value: `\`${profileData.drugstoretier2}\``,
                    },
                    {
                        name: `Convenience Store Tier 1`,
                        value: `\`${profileData.conveniencestoretier1}\``,
                    },
                    {
                        name: `Convenience Store Tier 2`,
                        value: `\`${profileData.conveniencestoretier2}\``,
                    },
                    {
                        name: `Convenience Store Tier 3`,
                        value: `\`${profileData.conveniencestoretier3}\``,
                    },
                    {
                        name: `Device Store Tier 1`,
                        value: `\`${profileData.devicestoretier1}\``,
                    },
                    {
                        name: `Device Store Tier 2`,
                        value: `\`${profileData.devicestoretier2}\``,
                    },
                    {
                        name: `Device Store Tier 3`,
                        value: `\`${profileData.devicestoretier3}\``,
                    }
                )
            message.channel.send({ embeds: [newEmbed] })
        } else if (category === "production") {
            const newEmbed = new Discord.MessageEmbed() // Nieuwe embed maken
                .setColor(config.base.basecolor)
                .addFields(
                    {
                        name: `Reactor Tier 1`,
                        value: `\`${profileData.reactortier1}\``,
                    },
                    {
                        name: `Reactor Tier 2`,
                        value: `\`${profileData.reactortier2}\``,
                    },
                    {
                        name: `Factory Tier 1`,
                        value: `\`${profileData.factorytier1}\``,
                    },
                    {
                        name: `Factory Tier 2`,
                        value: `\`${profileData.factorytier2}\``,
                    }
                )
            message.channel.send({ embeds: [newEmbed] })
        } else if (category === "plant") {
            const newEmbed = new Discord.MessageEmbed() // Nieuwe embed maken
                .setColor(config.base.basecolor)
                .addFields(
                    {
                        name: `Energy Plant Tier 1`,
                        value: `\`${profileData.energyplanttier1}\``,
                    },
                    {
                        name: `Energy Plant Tier 2`,
                        value: `\`${profileData.energyplanttier2}\``,
                    },
                    {
                        name: `Energy Plant Tier 3`,
                        value: `\`${profileData.energyplanttier3}\``,
                    },
                    {
                        name: `Water Plant Tier 1`,
                        value: `\`${profileData.waterplanttier1}\``,
                    },
                    {
                        name: `Water Plant Tier 2`,
                        value: `\`${profileData.waterplanttier2}\``,
                    },
                    {
                        name: `Water Plant Tier 3`,
                        value: `\`${profileData.waterplanttier3}\``,
                    },
                    {
                        name: `Gas Plant Tier 1`,
                        value: `\`${profileData.gasplanttier1}\``,
                    },
                    {
                        name: `Gas Plant Tier 2`,
                        value: `\`${profileData.gasplanttier2}\``,
                    },
                    {
                        name: `Gas Plant Tier 3`,
                        value: `\`${profileData.gasplanttier3}\``,
                    }
                )
            message.channel.send({ embeds: [newEmbed] })
        } else {
            return message.channel.send(`That category doesn't exist, or you have a typo.`)
        }
    },
};
