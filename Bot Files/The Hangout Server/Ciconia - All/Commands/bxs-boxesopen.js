const config = require("./../Other/config.js");
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "boxesopen",
    aliases: config.aliases.aliasesboxesopen,
    cooldown: config.cooldown.cooldownboxesopen,
    permissions: config.permissions.permissionboxesopen,
    description: "Open a loot box for scraps.",
    async execute(message, args, cmd, client, Discord, profileData) {
        try {
            const command =
                client.commands.get(cmd) ||
                client.commands.find((a) => a.aliases && a.aliases.includes(cmd));
            console.log(`${message.author.username} used this command: || ${command.name} ||`)

            if (!args[0]) {
                return message.channel.send(`What type of box would you like to open?`)
            }

            const chance = Math.random() * 100

            // Ultra Box
            minultrarare = Math.ceil(1);
            maxultrarare = Math.floor(config.scrapamount.ultrarare);
            const randomultrarare = Math.floor(Math.random() * (maxultrarare - minultrarare + 1) + minultrarare);

            minultraepic = Math.ceil(1);
            maxultraepic = Math.floor(config.scrapamount.ultraepic);
            const randomultraepic = Math.floor(Math.random() * (maxultraepic - minultraepic + 1) + minultraepic);

            minultralegendary = Math.ceil(1);
            maxultralegendary = Math.floor(config.scrapamount.ultralegendary);
            const randomultralegendary = Math.floor(Math.random() * (maxultralegendary - minultralegendary + 1) + minultralegendary);

            minultraexotic = Math.ceil(1);
            maxultraexotic = Math.floor(config.scrapamount.ultraexotic);
            const randomultraexotic = Math.floor(Math.random() * (maxultraexotic - minultraexotic + 1) + minultraexotic);

            const chanceultrarare = config.boxchance.ultrarare
            const chanceultraepic = config.boxchance.ultraepic
            const chanceultralegendary = config.boxchance.ultralegendary
            const chanceultraexotic = config.boxchance.ultraexotic

            // Super Box
            minsupercommon = Math.ceil(1);
            maxsupercommon = Math.floor(config.scrapamount.supercommon);
            const randomsupercommon = Math.floor(Math.random() * (maxsupercommon - minsupercommon + 1) + minsupercommon);

            minsuperuncommon = Math.ceil(1);
            maxsuperuncommon = Math.floor(config.scrapamount.superuncommon);
            const randomsuperuncommon = Math.floor(Math.random() * (maxsuperuncommon - minsuperuncommon + 1) + minsuperuncommon);

            minsuperrare = Math.ceil(1);
            maxsuperrare = Math.floor(config.scrapamount.superrare);
            const randomsuperrare = Math.floor(Math.random() * (maxsuperrare - minsuperrare + 1) + minsuperrare);

            minsuperepic = Math.ceil(1);
            maxsuperepic = Math.floor(config.scrapamount.superepic);
            const randomsuperepic = Math.floor(Math.random() * (maxsuperepic - minsuperepic + 1) + minsuperepic);

            minsuperlegendary = Math.ceil(1);
            maxsuperlegendary = Math.floor(config.scrapamount.superlegendary);
            const randomsuperlegendary = Math.floor(Math.random() * (maxsuperlegendary - minsuperlegendary + 1) + minsuperlegendary);

            const chancesupercommon = config.boxchance.supercommon
            const chancesuperuncommon = config.boxchance.superuncommon
            const chancesuperrare = config.boxchance.superrare
            const chancesuperepic = config.boxchance.superepic
            const chancesuperlegendary = config.boxchance.superlegendary

            // Normal Box
            minnormalcommon = Math.ceil(1);
            maxnormalcommon = Math.floor(config.scrapamount.normalcommon);
            const randomnormalcommon = Math.floor(Math.random() * (maxnormalcommon - minnormalcommon + 1) + minnormalcommon);

            minnormaluncommon = Math.ceil(1);
            maxnormaluncommon = Math.floor(config.scrapamount.normaluncommon);
            const randomnormaluncommon = Math.floor(Math.random() * (maxnormaluncommon - minnormaluncommon + 1) + minnormaluncommon);

            minnormalrare = Math.ceil(1);
            maxnormalrare = Math.floor(config.scrapamount.normalrare);
            const randomnormalrare = Math.floor(Math.random() * (maxnormalrare - minnormalrare + 1) + minnormalrare);

            const chancenormalcommon = config.boxchance.normalcommon
            const chancenormaluncommon = config.boxchance.normaluncommon
            const chancenormalrare = config.boxchance.normalrare

            if (args[0] === "ultra") {
                try {
                    const newamount = profileData.boxesultra - 1
                    if (1 > profileData.boxesultra)
                        return message.channel.send(config.basemessages.messagesboxesmissing);
                    await profileModel.findOneAndUpdate(
                        {
                            userID: message.author.id,
                        },
                        {
                            $inc: {
                                boxesultra: -1,
                            },
                        }
                    );
                    message.channel.send(`You have opened a \`Ultra Box\`. You have \`${newamount}\` Ultra Boxes remaining.`)
                    if (chance < chanceultrarare) {
                        await profileModel.findOneAndUpdate(
                            {
                                userID: message.author.id,
                            },
                            {
                                $inc: {
                                    scraprare: randomultrarare,
                                },
                            }
                        );
                        if (randomultrarare === 1) {
                            message.channel.send(`${message.author.username}, <@${message.author.id}>, you received \`${randomultrarare}\` Rare Scrap 🔵! Congratulations!`)
                        } else if (randomultrarare >= 2) {
                            message.channel.send(`<@${message.author.id}>, you received \`${randomultrarare}\` Rare Scraps 🔵! Congratulations!`)
                        }
                    } else if (chance < chanceultraepic) {
                        await profileModel.findOneAndUpdate(
                            {
                                userID: message.author.id,
                            },
                            {
                                $inc: {
                                    scrapepic: randomultraepic,
                                },
                            }
                        );
                        if (randomultraepic === 1) {
                            message.channel.send(`<@${message.author.id}>, you received \`${randomultraepic}\` Epic Scrap 🟣! Congratulations!`)
                        } else if (randomultraepic >= 2) {
                            message.channel.send(`<@${message.author.id}>, you received \`${randomultraepic}\` Epic Scraps 🟣! Congratulations!`)
                        }
                    } else if (chance < chanceultralegendary) {
                        await profileModel.findOneAndUpdate(
                            {
                                userID: message.author.id,
                            },
                            {
                                $inc: {
                                    scraplegendary: randomultralegendary,
                                },
                            }
                        );
                        if (randomultralegendary === 1) {
                            message.channel.send(`<@${message.author.id}>, you received \`${randomultralegendary}\` Legendary Scrap 🟠! Congratulations!`)
                        } else if (randomultralegendary >= 2) {
                            message.channel.send(`<@${message.author.id}>, you received \`${randomultralegendary}\` Legendary Scraps 🟠! Congratulations!`)
                        }
                    } else if (chance < chanceultraexotic) {
                        await profileModel.findOneAndUpdate(
                            {
                                userID: message.author.id,
                            },
                            {
                                $inc: {
                                    scrapexotic: randomultraexotic,
                                },
                            }
                        );
                        if (randomultraexotic === 1) {
                            message.channel.send(`<@${message.author.id}>, you received \`${randomultraexotic}\` Exotic Scrap 🔴! Congratulations!`)
                        } else if (randomultraexotic >= 2) {
                            message.channel.send(`<@${message.author.id}>, you received \`${randomultraexotic}\` Exotic Scraps 🔴! Congratulations!`)
                        }
                    }
                } catch (err) {
                    console.log(err);
                    message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`)
                }
            } else if (args[0] === "super") {
                try {
                    const newamount = profileData.boxessuper - 1
                    if (1 > profileData.boxessuper)
                        return message.channel.send(config.basemessages.messagesboxesmissing);
                    await profileModel.findOneAndUpdate(
                        {
                            userID: message.author.id,
                        },
                        {
                            $inc: {
                                boxessuper: -1,
                            },
                        }
                    );
                    message.channel.send(`You have opened a \`Super Box\`. You have \`${newamount}\` Super Boxes remaining.`)
                    if (chance < chancesupercommon) {
                        await profileModel.findOneAndUpdate(
                            {
                                userID: message.author.id,
                            },
                            {
                                $inc: {
                                    scrapcommon: randomsupercommon,
                                },
                            }
                        );
                        if (randomsupercommon === 1) {
                            message.channel.send(`<@${message.author.id}>, you received \`${randomsupercommon}\` Common Scrap ⚪! Congratulations!`)
                        } else if (randomsupercommon >= 2) {
                            message.channel.send(`<@${message.author.id}>, you received \`${randomsupercommon}\` Common Scraps ⚪! Congratulations!`)
                        }
                    } else if (chance < chancesuperuncommon) {
                        await profileModel.findOneAndUpdate(
                            {
                                userID: message.author.id,
                            },
                            {
                                $inc: {
                                    scrapuncommon: randomsuperuncommon,
                                },
                            }
                        );
                        if (randomsuperuncommon === 1) {
                            message.channel.send(`<@${message.author.id}>, you received \`${randomsuperuncommon}\` Uncommon Scrap 🟢! Congratulations!`)
                        } else if (randomsuperuncommon >= 2) {
                            message.channel.send(`<@${message.author.id}>, you received \`${randomsuperuncommon}\` Uncommon Scraps 🟢! Congratulations!`)
                        }
                    } else if (chance < chancesuperrare) {
                        await profileModel.findOneAndUpdate(
                            {
                                userID: message.author.id,
                            },
                            {
                                $inc: {
                                    scraprare: randomsuperrare,
                                },
                            }
                        );
                        if (randomsuperrare === 1) {
                            message.channel.send(`<@${message.author.id}>, you received \`${randomsuperrare}\` Rare Scrap 🔵! Congratulations!`)
                        } else if (randomsuperrare >= 2) {
                            message.channel.send(`<@${message.author.id}>, you received \`${randomsuperrare}\` Rare Scraps 🔵! Congratulations!`)
                        }
                    } else if (chance < chancesuperepic) {
                        await profileModel.findOneAndUpdate(
                            {
                                userID: message.author.id,
                            },
                            {
                                $inc: {
                                    scrapepic: randomsuperepic,
                                },
                            }
                        );
                        if (randomsuperepic === 1) {
                            message.channel.send(`<@${message.author.id}>, you received \`${randomsuperepic}\` Epic Scrap 🟣! Congratulations!`)
                        } else if (randomsuperepic >= 2) {
                            message.channel.send(`<@${message.author.id}>, you received \`${randomsuperepic}\` Epic Scraps 🟣! Congratulations!`)
                        }
                    } else if (chance < chancesuperlegendary) {
                        await profileModel.findOneAndUpdate(
                            {
                                userID: message.author.id,
                            },
                            {
                                $inc: {
                                    scraplegendary: randomsuperlegendary,
                                },
                            }
                        );
                        if (randomsuperlegendary === 1) {
                            message.channel.send(`<@${message.author.id}>, you received \`${randomsuperlegendary}\` Legendary Scrap 🟠! Congratulations!`)
                        } else if (randomsuperlegendary >= 2) {
                            message.channel.send(`<@${message.author.id}>, you received \`${randomsuperlegendary}\` Legendary Scraps 🟠! Congratulations!`)
                        }
                    }
                } catch (err) {
                    console.log(err);
                    message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`)
                }
            } else if (args[0] === "normal") {
                try {
                    const newamount = profileData.boxesnormal - 1
                    if (1 > profileData.boxesnormal)
                        return message.channel.send(config.basemessages.messagesboxesmissing);
                    await profileModel.findOneAndUpdate(
                        {
                            userID: message.author.id,
                        },
                        {
                            $inc: {
                                boxesnormal: -1,
                            },
                        }
                    );
                    message.channel.send(`You have opened a \`Normal Box\`. You have \`${newamount}\` Normal Boxes remaining.`)
                    if (chance < chancenormalcommon) {
                        await profileModel.findOneAndUpdate(
                            {
                                userID: message.author.id,
                            },
                            {
                                $inc: {
                                    scrapcommon: randomnormalcommon,
                                },
                            }
                        );
                        if (randomnormalcommon === 1) {
                            message.channel.send(`<@${message.author.id}>, you received \`${randomnormalcommon}\` Common Scrap ⚪! Congratulations!`)
                        } else if (randomnormalcommon >= 2) {
                            message.channel.send(`<@${message.author.id}>, you received \`${randomnormalcommon}\` Common Scraps ⚪! Congratulations!`)
                        }
                    } else if (chance < chancenormaluncommon) {
                        await profileModel.findOneAndUpdate(
                            {
                                userID: message.author.id,
                            },
                            {
                                $inc: {
                                    scrapuncommon: randomnormaluncommon,
                                },
                            }
                        );
                        if (randomnormaluncommon === 1) {
                            message.channel.send(`<@${message.author.id}>, you received \`${randomnormaluncommon}\` Uncommon Scraps 🟢! Congratulations!`)
                        } else if (randomnormaluncommon >= 2) {
                            message.channel.send(`<@${message.author.id}>, you received \`${randomnormaluncommon}\` Uncommon Scraps 🟢! Congratulations!`)
                        }
                    } else if (chance < chancenormalrare) {
                        await profileModel.findOneAndUpdate(
                            {
                                userID: message.author.id,
                            },
                            {
                                $inc: {
                                    scraprare: randomnormalrare,
                                },
                            }
                        );
                        if (randomnormalrare === 1) {
                            message.channel.send(`<@${message.author.id}>, you received \`${randomnormalrare}\` Rare Scrap 🔵! Congratulations!`)
                        } else if (randomnormalrare >= 2) {
                            message.channel.send(`<@${message.author.id}>, you received \`${randomnormalrare}\` Rare Scraps 🔵! Congratulations!`)
                        }
                    }
                } catch (err) {
                    console.log(err);
                    message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`)
                }
            }
        } catch (err) {
            console.log(err)
            message.channel.send(`Error executing command. EC: \`${config.errorcodes.err2}\`.`)
        }
    }
};