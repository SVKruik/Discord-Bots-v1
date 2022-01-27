const config = require("./../Other/config.js");

module.exports = {
  name: "rolecolor1",
  aliases: config.aliases.aliasesrolecolor1,
  cooldown: config.cooldown.cooldownrolecolor1,
  permissions: config.permissions.permissionrolecolor1,
  description: "Role color choose page 1.",
  async execute(message, args, cmd, client, Discord) {
    const channel = config.base.baserolecolorchannelid;
    const whiteTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910544967582253086"
    );
    const greyTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910545117650235552"
    );
    const lightyellowTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910545170787880970"
    );
    const brickyellowTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910545246302122025"
    );
    const lightgreenTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910545313352282143"
    );
    const lightreddishvioletTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910545359871303710"
    );
    const pastelblueTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910545447381250079"
    );
    const lightorangebrownTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910545527530217522"
    );
    const nougatTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910545606005620746"
    );
    const brightredTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910545659688542239"
    );
    const medreddishvioletTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910545734196133918"
    );
    const brightblueTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910545795923714058"
    );
    const brightyellowTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910545862361509909"
    );
    const earthorangeTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910545936135106620"
    );
    const blackTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910545977415454790"
    );
    const darkgreyTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910546045379960852"
    );
    const darkgreenTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910546101273260093"
    );
    const mediumgreenTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910546150250139689"
    );
    const ligyellowichorangeTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910546214976651335"
    );
    const brightgreenTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910546311315599470"
    );
    const darkorangeTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910555748369563699"
    );
    const lightbluishvioletTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910555820662591550"
    );
    const transparentTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910555926661070898"
    );
    const trredTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910556010257711204"
    );
    const trlgblueTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910556060081860619"
    );
    const trblueTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910556212205076491"
    );
    const tryellowTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910556212205076491"
    );
    const lightblueTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910556305431855126"
    );
    const trfluereddishorangeTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910556375665504336"
    );
    const trgreenTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910556425191825419"
    );
    const trflugreenTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910556525838348398"
    );
    const phosphwhiteTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910556592473251871"
    );
    const lightredTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910556650937671690"
    );
    const mediumredTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910556748849500240"
    );
    const mediumblueTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910556783171489902"
    );
    const lightgreyTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910556944849330196"
    );
    const brightvioletTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910556995680100434"
    );
    const bryellowishorangeTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910557046687019008"
    );
    const brightorangeTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910557131458113556"
    );
    const brightbluishgreenTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910557194779500555"
    );
    const earthyellowTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910557270188896276"
    );
    const brightbluishvioletTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910557320185012314"
    );
    const trbrownTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910557409825656902"
    );
    const mediumbluishvioletTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910557474925465652"
    );
    const trmedireddishvioletTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910557527022927892"
    );
    const medyellowishgreenTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910557634954919996"
    );
    const medbluishgreenTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910557703926079508"
    );
    const lightbluishgreenTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910557786864242729"
    );
    const bryellowishgreenTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910557847920709702"
    );
    const ligyellowishgreenTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910557939696275456"
    );
    const medyellowishorangeTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910558010022195200"
    );
    const brreddishorangeTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910558904772079617"
    );
    const brightreddishvioletTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910558982375084062"
    );
    const lightorangeTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910559048653475850"
    );
    const trbrightbluishvioletTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910559168858058762"
    );
    const goldaTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910559235425833001"
    );
    const darknougatTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910559291285573632"
    );
    const silverTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910559340514144357"
    );
    const neonorangeTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910559385758097448"
    );
    const neongreenTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910559449704448081"
    );

    const list = [
        "white",
        "grey",
        "lightyellow",
        "brickyellow",
        "lightgreen",
        "lightreddishviolet",
        "pastelblue",
        "lightorangebrown",
        "nougat",
        "brightred",
        "medreddishviolet",
        "brightblue",
        "brightyellow",
        "earthorange",
        "black",
        "darkgrey",
        "darkgreen",
        "mediumgreen",
        "ligyellowichorange",
        "brightgreen",
        "darkorange",
        "lightbluishviolet",
        "transparent",
        "trred",
        "trlgblue",
        "trblue",
        "tryellow",
        "lightblue",
        "trflureddishorange",
        "trgreen",
        "trflugreen",
        "phosphwhite",
        "lightred",
        "mediumred",
        "mediumblue",
        "lightgrey",
        "brightviolet",
        "bryellowishorange",
        "brightorange",
        "brightbluishgreen",
        "earthyellow",
        "brightbluishviolet",
        "trbrown",
        "mediumbluishviolet",
        "trmedireddishviolet",
        "medyellowishgreen",
        "medbluishgreen",
        "lightbluishgreen",
        "bryellowishgreen",
        "ligyellowishgreen",
        "medyellowishorange",
        "brreddishorange",
        "brightreddishviolet",
        "lightorange",
        "trbrightbluishviolet",
        "gold",
        "darknougat",
        "silver",
        "neonorange",
        "neongreen",
        "sandblue",
        "sandviolet",
        "mediumorange",
        "sandyellow",
        "earthblue",
        "earthgreen",
        "trflublue",
        "sandbluemetallic",
        "sandvioletmetallic",
        "sandyellowmetallic",
        "darkgreymetallic",
        "blackmetallic",
        "lightgreymetallic",
        "sandgreen",
        "sandred",
        "ddarkred",
        "trfluyellow",
        "trflured",
        "gunmetallic",
        "redflipflop",
        "yellowflipflop",
        "silverflipflop",
        "curry",
        "fireyellow",
        "flameyellowishorange",
        "reddishbrown",
        "flamereddishorange",
        "mediumstonegrey",
        "royalblue",
        "darkroyalblue",
        "brightreddishlilac",
        "darkstonegrey",
        "lemonmetalic",
        "lightstonegrey",
        "darkcurry",
        "fadedgreen",
        "turquoise",
        "lightroyalblue",
        "mediumroyalblue",
        "rust",
        "brown",
        "reddishlilac",
        "lilac",
        "lightlilac",
        "brightpurple",
        "lightpurple",
        "lightpink",
        "lightbrickyellow",
        "warmyellowishorange",
        "coolyellow",
        "doveblue",
        "mediumlilac",
        "slimegreen",
        "smokygrey",
        "darkblue",
        "parsleygreen",
        "steelblue",
        "stormblue",
        "lapis",
        "darkindigo",
        "seagreen",
        "shamrock",
        "fossil",
        "mulberry",
        "forestgreen",
        "cadetblue",
        "electricblue",
        "eggplant",
        "moss",
        "artichoke",
        "sagegreen",
        "ghostgrey",
        "lilac",
        "plum",
        "olivine",
        "laurelgreen",
        "quillgrey",
        "crimson",
        "mint",
        "babyblue",
        "carnationpink",
        "persimmon",
        "maroon",
        "gold",
        "daisyorange",
        "pearl",
        "fog",
        "salmon",
        "terracotta",
        "cocoa",
        "wheat",
        "buttermilk",
        "mauve",
        "sunrise",
        "tawny",
        "rust",
        "cashmere",
        "khaki",
        "lilywhite",
        "seashell",
        "burgundy",
        "cork",
        "burlap",
        "beige",
        "oyster",
        "pinecone",
        "fawnbrown",
        "hurricanegrey",
        "cloudygrey",
        "linen",
        "copper",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
    ];

   const colorname = args[0]
   if (!args.length)
   return message.channel.send("What color would you like to have?");

   if 

      if (reaction.message.channel.id == channel) {
        if (reaction.emoji.name === whiteTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
        }
        if (reaction.emoji.name === greyTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(greyTeamRole);
        }
        if (reaction.emoji.name === lightyellowTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(lightyellowTeamRole);
        }
        if (reaction.emoji.name === brickyellowTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(brickyellowTeamRole);
        }
        if (reaction.emoji.name === lightgreenTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(lightgreenTeamRole);
        }
        if (reaction.emoji.name === lightreddishvioletTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(lightreddishvioletTeamRole);
        }
        if (reaction.emoji.name === pastelblueTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(pastelblueTeamRole);
        }
        if (reaction.emoji.name === lightorangebrownTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(lightorangebrownTeamRole);
        }
        if (reaction.emoji.name === nougatTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(nougatTeamRole);
        }
        if (reaction.emoji.name === brightredTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(brightredTeamRole);
        }
        if (reaction.emoji.name === medreddishvioletTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(medreddishvioletTeamRole);
        }
        if (reaction.emoji.name === brightblueTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(brightblueTeamRole);
        }
        if (reaction.emoji.name === brightyellowTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(brightyellowTeamRole);
        }
        if (reaction.emoji.name === earthorangeTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(earthorangeTeamRole);
        }
        if (reaction.emoji.name === blackTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(blackTeamRole);
        }
        if (reaction.emoji.name === darkgreyTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(darkgreyTeamRole);
        }
        if (reaction.emoji.name === darkgreenTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(darkgreenTeamRole);
        }
        if (reaction.emoji.name === mediumgreenTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(mediumgreenTeamRole);
        }
        if (reaction.emoji.name === ligyellowichorangeTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(ligyellowichorangeTeamRole);
        }
        if (reaction.emoji.name === brightgreenTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(brightgreenTeamRole);
        }
      } else {
        return;
      }
    });

    client.on("messageReactionRemove", async (reaction, user) => {
      if (reaction.message.partial) await reaction.message.fetch();
      if (reaction.partial) await reaction.fetch();
      if (user.bot) return;
      if (!reaction.message.guild) return;

      if (reaction.message.channel.id == channel) {
        if (reaction.emoji.name === whiteTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(whiteTeamRole);
        }
        if (reaction.emoji.name === greyTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(greyTeamRole);
        }
        if (reaction.emoji.name === lightyellowTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(lightyellowTeamRole);
        }
        if (reaction.emoji.name === brickyellowTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(brickyellowTeamRole);
        }
        if (reaction.emoji.name === lightgreenTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(lightgreenTeamRole);
        }
        if (reaction.emoji.name === lightreddishvioletTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(lightreddishvioletTeamRole);
        }
        if (reaction.emoji.name === pastelblueTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(pastelblueTeamRole);
        }
        if (reaction.emoji.name === lightorangebrownTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(lightorangebrownTeamRole);
        }
        if (reaction.emoji.name === nougatTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(nougatTeamRole);
        }
        if (reaction.emoji.name === brightredTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(brightredTeamRole);
        }
        if (reaction.emoji.name === medreddishvioletTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(medreddishvioletTeamRole);
        }
        if (reaction.emoji.name === brightblueTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(brightblueTeamRole);
        }
        if (reaction.emoji.name === brightyellowTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(brightyellowTeamRole);
        }
        if (reaction.emoji.name === earthorangeTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(earthorangeTeamRole);
        }
        if (reaction.emoji.name === blackTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(blackTeamRole);
        }
        if (reaction.emoji.name === darkgreyTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(darkgreyTeamRole);
        }
        if (reaction.emoji.name === darkgreenTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(darkgreenTeamRole);
        }
        if (reaction.emoji.name === mediumgreenTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(mediumgreenTeamRole);
        }
        if (reaction.emoji.name === ligyellowichorangeTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(ligyellowichorangeTeamRole);
        }
        if (reaction.emoji.name === brightgreenTeamEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(brightgreenTeamRole);
        }
      } else {
        return;
      }
    });
  },
};
