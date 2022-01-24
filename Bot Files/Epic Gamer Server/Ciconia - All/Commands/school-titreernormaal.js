const config = require('./../Other/config.js');

module.exports = {
  name: "titratienormaal",
  aliases: config.aliases.aliasestitreernormaal,
  cooldown: config.cooldown.cooldowntitreernormaal,
  permissions: ["SEND_MESSAGES"],
  description: "Calculate some science math.",
  execute(message, args, cmd, client, Discord) {
    const pipet = 10.0;
    const titreerml = 10.31;
    const molbekende = 0.1007;
    const molverhouding = 1;

    const mmolbekende = titreerml * molbekende;
    const mmolonbekende = mmolbekende / molverhouding;
    const mmolonbekendenapipet = mmolonbekende / pipet;
    const molariteitonbekende = mmolonbekendenapipet * pipet;

    //Input
    var titreermlafgerond =
      Math.round((titreerml + Number.EPSILON) * 1000) / 1000;

    var mmolbekendeafgerond =
      Math.round((mmolbekende + Number.EPSILON) * 1000) / 1000;

    var mmolonbekendeafgerond =
      Math.round((mmolonbekende + Number.EPSILON) * 1000) / 1000;

    //Uitkomsten
    var mmolbekendeafgerond =
      Math.round((mmolbekende + Number.EPSILON) * 1000) / 1000;
    var mmolonbekendeafgerond =
      Math.round((mmolonbekende + Number.EPSILON) * 1000) / 1000;
    var molariteitonbekendeafgerond =
      Math.round((molariteitonbekende + Number.EPSILON) * 1000) / 1000;
    var molariteitonbekendeafgerondex = molariteitonbekendeafgerond / 10;

    const newEmbed = new Discord.MessageEmbed()
      .setColor(process.env.MBDCLR)
      .setTitle(process.env.MBDTITLETITREERNORMAAL)
      .setImage(process.env.MBDIMG)
      .setDescription(process.env.MBDDESCTITREERNORMAAL)
      .addFields(
        {
          name: `1. Reactievergelijking opstellen:`,
          value: `CH3COOH(aq) + OH(aq) --> CH3COO(aq) + H2O(l)`,
        },
        {
          name: `2. Millimol van de gegeven berekenen: hoeveelheid dat je titreert, delen door M bekende. Dit geeft de MMol van je oplossing.`,
          value: `${titreermlafgerond} ML ⋅ ${molbekende} M = ${mmolbekendeafgerond} ML.`,
        },
        {
          name: `3. Molverhouding: als de molverhouding 1:1 is, dan is bekende mmol = onbekende. Anders eerst delen door molverhouding.`,
          value: `${mmolbekendeafgerond} M mol / ${molverhouding} = ${mmolonbekendeafgerond}.`,
        },
        {
          name: `4. Hoeveelheid: M mol van je onbekende delen door hoeveelheid dat je in je pipet neemt.`,
          value: `${mmolonbekendeafgerond} ML / ${pipet} = ${molariteitonbekendeafgerondex} ML.`,
        }
      )
      .setFooter(process.env.MBDFTR);

    message.channel.send(newEmbed);
  },
};
