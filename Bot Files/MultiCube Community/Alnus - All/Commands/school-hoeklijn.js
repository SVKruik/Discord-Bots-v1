module.exports = {
  name: "hoeklijn",
  aliases: ["hkli"],
  cooldown: process.env.ASMID,
  description: "Calculate degree between 2 lines.",
  permissions: ["SEND_MESSAGES"],
  execute(message, args, cmd, client, Discord) {
    const lijn1 = "k";
    const lijn2 = "m";

    const teller1 = 1;
    const noemer1 = 2;

    const rc1 = "½";
    const rc1getal = teller1 / noemer1;
    const rc2 = 2;

    //Input
    var hoek1 = Math.atan(rc1getal) * (180 / Math.PI);
    var hoek2 = Math.atan(rc2) * (180 / Math.PI);

    const hoek = hoek2 - hoek1;

    var hoek1afgerond = Math.round((hoek1 + Number.EPSILON) * 1000) / 1000;

    var hoek2afgerond = Math.round((hoek2 + Number.EPSILON) * 1000) / 1000;

    var hoekafgerond = Math.round((hoek + Number.EPSILON) * 1000) / 1000;

    const newEmbed = new Discord.MessageEmbed()
      .setColor(process.env.MBDCLR)
      .setTitle(process.env.MBDTITLEHOEKLIJN)
      .setImage(process.env.MBDIMG)
      .setDescription(process.env.MBDDESCHOEKLIJN)
      .addFields(
        {
          name: `1. Gegeven lijnen:`,
          value: `${lijn1}: Y = ${rc1}x² + 2 --- ${lijn2}: Y = ${rc2}x² - 4`,
        },
        {
          name: `2. Richtingscoëfficienten bepalen:`,
          value: `${lijn1}: ${rc1} --- ${lijn2}: ${rc2}`,
        },
        {
          name: `3. Hoek 1 bepalen van lijn ${lijn1}:`,
          value: `tan⁻¹ (${rc1}) = ${hoek1afgerond}°`,
        },
        {
          name: `4. Hoek 2 bepalen van lijn ${lijn2}:`,
          value: `tan⁻¹ (${rc2}) = ${hoek2afgerond}°`,
        },
        {
          name: `5. Hoek berekenen:`,
          value: `${hoek2afgerond}° - ${hoek1afgerond}° = ${hoekafgerond}°`,
        },
        {
          name: `6. Let op nr. 1:`,
          value: `Als hoek 1 groter is als hoek 2, dan moet 1 eerst. Idem andersom. Daarom is bij stap 5 hoek 2 voorop.`,
        },
        {
          name: `7. Let op nr. 2:`,
          value: `Als je eind-antwoord groter is dan 90°, moet je eerst 180 - *hoek* doen. Dan pas heb je je antwoord.`,
        }
      )
      .setFooter(process.env.MBDFTR);

    message.channel.send(newEmbed);
  },
};
