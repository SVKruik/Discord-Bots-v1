const config = require("./../Other/config.js");

module.exports = {
  name: "color",
  aliases: config.aliases.aliasescolor,
  cooldown: config.cooldown.cooldowncolor,
  permissions: config.permissions.permissioncolor,
  description: "Choose a color by ID or name.",
  async execute(message, args, cmd, client, Discord) {
    const whiteTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const greyTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const lightyellowTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const brickyellowTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const lightgreenTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const lightreddishvioletTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const pastelblueTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const lightorangebrownTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const nougatTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const brightredTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const medreddishvioletTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const brightblueTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const brightyellowTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const earthorangeTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const blackTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const darkgreyTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const darkgreenTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const mediumgreenTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const ligyellowichorangeTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const brightgreenTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const darkorangeTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const lightbluishvioletTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const transparentTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const trredTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const trlgblueTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const trblueTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const tryellowTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const lightblueTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const trfluereddishorangeTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const trgreenTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const trflugreenTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const phosphwhiteTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const lightredTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const mediumredTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const mediumblueTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const lightgreyTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const brightvioletTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const bryellowishorangeTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const brightorangeTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const brightbluishgreenTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const earthyellowTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const brightbluishvioletTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const trbrownTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const mediumbluishvioletTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const trmedireddishvioletTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const medyellowishgreenTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const medbluishgreenTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const lightbluishgreenTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const bryellowishgreenTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const ligyellowishgreenTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const medyellowishorangeTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const brreddishorangeTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const brightreddishvioletTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const lightorangeTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const trbrightbluishvioletTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const goldTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const darknougatTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const silverTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const neonorangeTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const neongreenTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const sandblueTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const sandvioletTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const mediumorangeTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const sandyellowTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const earthblueTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const earthgreenTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const trflublueTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const sandbluemetallicTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const sandvioletmetallicTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const sandyellowmetallicTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const darkgreymetallicTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const blackmetallicTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const lightgreymetallicTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const sandgreenTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const sandredTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const darkredTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const trfluyellowTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const trflueredTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const gunmetallicTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const redflipflopTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const yellowflipflopTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const silverflipflopTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const curryTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const fireyellowTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const flameyellowishorangeTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const reddishbrownTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const flamereddishorangeTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const mediumstonegreyTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const royalblueTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const darkroyalblueTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const brightreddishlilacTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const darkstonegreyTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const lemonmetallicTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const lightstonegreyTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const darkcurryTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const fadedgreenTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const turquoiseTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const lightroyalblueTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const mediumroyalblueTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const rustTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const brownTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const reddishlilacTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const lilacTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const lightlilacTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const brightpurpleTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const lightpurpleTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const lightpinkTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const lightbrickyellowTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const warmyellowishorangeTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const coolyellowTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const doveblueTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const mediumlilacTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const slimegreenTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const smokygreyTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const darkblueTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const parsleygreenTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const steelblueTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const stormblueTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const lapisTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const darkindigoTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const seagreenTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const shamrockTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const fossilTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const mulberryTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const forestgreenTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const cadetblueTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const electricblueTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const eggplantTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const mossTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const artichokeTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const sagegreenTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const ghostgreyTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const plumTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const olivineTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const laurelgreenTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const quillgreyTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const crimsonTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const mintTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const babyblueTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const carnationpinkTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const persimmonTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const maroonTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const daisyorangeTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const pearlTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const fogTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const salmonTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const terracottaTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const cocoaTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const wheatTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const buttermilkTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const mauveTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const sunriseTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const tawnyTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const cashmereTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const khakiTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const lilywhiteTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const seashellTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const burgundyTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const corkTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const burlapTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const beigeTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const oysterTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const pineconeTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const fawnbrownTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const hurricanegreyTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const cloudygreyTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const linenTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const copperTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const dirtbrownTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const bronzeTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const flintTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const darktaupeTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const burntsiennaTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const institutionalwhiteTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const midgrayTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const reallyblackTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const reallyredTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const deeporangeTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const alderTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const dustyroseTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const oliveTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const newyellerTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const reallyblueTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const navyblueTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const cyanTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const cgabrownTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const magentaTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const pinkTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const tealTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const toothpasteTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const limegreenTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const camoTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const grimeTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const lavenderTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const pastellightblueTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const pastelorangeTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const pastelvioletTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const pastelbluegreenTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const pastelgreenTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const pastelyellowTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const pastelbrownTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const royalpurpleTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );
    const hotpinkTeamRole = message.guild.roles.cache.find(
      (role) => role.id === ""
    );

    const colorlist = require("../Other/colorlist.js");
    const channel = config.baserolecolorchannelid;

    const colorname = args[0];
    if (!args.length)
      return message.channel.send("What color would you like to have?");

    if (message.channel.id == channel) {
    } else {
      return message.channel.send(
        `You are not in the right channel to use this command! Please use <#${channel}> instead!`
      );
    }

    if (reaction.emoji.name === whiteTeamEmoji) {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.add(whiteTeamRole);
    } else {
      return;
    }

    if (reaction.emoji.name === whiteTeamEmoji) {
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.remove(whiteTeamRole);
    } else {
      return;
    }
  },
};
