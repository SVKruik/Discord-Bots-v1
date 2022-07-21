// Zoek dingen op in de Binas.

const config = require("../other/config.js"); // Vaste variabelen opgeslagen

module.exports = {
  name: "binas",
  aliases: config.aliases.aliasesbinas,
  cooldown: config.cooldown.cooldownbinas,
  permissions: config.permissions.permissionbinas,
  description: "Display information about a science book: Binas.",
  execute(message, args, cmd, client, Discord) {
    try {
      if (!args[0]) {
        return message.channel.send({ content: `Welk Binas tabel wil je opzoeken? Dit zijn de beschikbare tabellen op het moment: \`1\`, \`3\`, \`4\`, \`5\` en \`7\`.` })
      }
      if (args[0] === "1" || args[0] === "tb1" || args[0] === "tabel1") {
        if (args[1] === "alfa") {
          message.channel.send({ content: "**Alfa -** High: \`A\`, Low: \`α\`" });
        } else if (args[1] === "beta" || args[1] === "bèta") {
          message.channel.send({ content: "**Beta -** High: \`B\`, Low: \`β\`" });
        } else if (args[1] === "gamma") {
          message.channel.send({ content: "**Gamma -** High: \`Γ\`, Low: \`γ\`" });
        } else if (args[1] === "delta") {
          message.channel.send({ content: "**Delta -** High: \`Δ\`, Low: \`δ\`" });
        } else if (args[1] === "epsilon") {
          message.channel.send({ content: "**Epsilon -** High: \`E\`, Low: \`ε\`" });
        } else if (args[1] === "zeta") {
          message.channel.send({ content: "**Zeta -** High: \`Z\`, Low: \`ζ\`" });
        } else if (args[1] === "eta") {
          message.channel.send({ content: "**Eta -** High: \`H\`, Low: \`η\`" });
        } else if (args[1] === "theta") {
          message.channel.send({ content: "**Theta -** High: \`Θ\`, Low: \`θ	\`" });
        } else if (args[1] === "iota") {
          message.channel.send({ content: "**Iota -** High: \`I\`, Low: \`ι\`" });
        } else if (args[1] === "kappa") {
          message.channel.send({ content: "**Kappa -** High: \`K\`, Low: \`κ\`" });
        } else if (args[1] === "labda") {
          message.channel.send({ content: "**Labda -** High: \`Λ\`, Low: \`λ\`" });
        } else if (args[1] === "mu") {
          message.channel.send({ content: "**Mu -** High: \`M\`, Low: \`μ\`" });
        } else if (args[1] === "nu") {
          message.channel.send({ content: "**Nu -** High: \`N\`, Low: \`ν\`" });
        } else if (args[1] === "xi") {
          message.channel.send({ content: "**Xi -** High: \`Ξ\`, Low: \`ξ\`" });
        } else if (args[1] === "omikron") {
          message.channel.send({ content: "**Omikron -** High: \`O\`, Low: \`ο\`" });
        } else if (args[1] === "pi") {
          message.channel.send({ content: "**Pi -** High: \`Π\`, Low: \`π\`" });
        } else if (args[1] === "rho") {
          message.channel.send({ content: "**Rho -** High: \`P\`, Low: \`ρ\`" });
        } else if (args[1] === "sigma") {
          message.channel.send({ content: "**Sigma -** High: \`Σ\`, Low: \`σς\`" });
        } else if (args[1] === "tau") {
          message.channel.send({ content: "**Tau -** High \`T\`, Low: \`τ\`" });
        } else if (args[1] === "upsilon") {
          message.channel.send({ content: "**Upsilon -** High: \`Y\`, Low: \`υ\`" });
        } else if (args[1] === "fi") {
          message.channel.send({ content: "**Fi -** High: \`Φ\`, Low: \`φ\`" });
        } else if (args[1] === "chi") {
          message.channel.send({ content: "**Chi -** High: \`X\`, Low: \`χ\`" });
        } else if (args[1] === "psi") {
          message.channel.send({ content: "**Psi -** High: \`Ψ\`, Low: \`ψ\`" });
        } else if (args[1] === "omega") {
          message.channel.send({ content: "**Omega -** High: \`Ω\`, Low: \`ω\`" });
        } else if (args[1] === "digamma") {
          message.channel.send({ content: "**Digamma -** High: \`Ϝ\`, Low: \`ϝ\`" });
        } else if (args[1] === "stigma") {
          message.channel.send({ content: "**Stigma -** High: \`Ϛ\`, Low: \`ϛ\`" });
        } else if (args[1] === "heta") {
          message.channel.send({ content: "**Heta -** High: \`Ⱶ\`, Low: \`ⱶ\`" });
        } else if (args[1] === "san") {
          message.channel.send({ content: "**San -** High: \`Ϻ\`, Low: \`ϻ\`" });
        } else if (args[1] === "sho") {
          message.channel.send({ content: "**Sho -** High: \`Ϸ\`, Low: \`ϸ\`" });
        } else if (args[1] === "qoppa") {
          message.channel.send({ content: "**Qoppa -** High: \`Ϙ\`, Low: \`Ϟ\`" });
        } else if (args[1] === "sampi") {
          message.channel.send({ content: "**Sampi -** High: \`Ϡ\`, Low: \`ϡ\`" });
        } else {
          return message.channel.send({ content: `Welke Latijnse letter wil je weten?` })
        }
      } else if (args[0] === "3" || args[0] === "tb3" || args[0] === "tabel3") {
        if (args[1] === "meter" || args[1] === "metre") {
          message.channel.send({ content: "The metre is currently defined as the length of the path travelled by light in a vacuum in \`1/299792458\` of a second." })
        } else if (args[1] === "kilogram" || args[1] === "kilo") {
          message.channel.send({ content: "The kilogram was originally defined in 1795 as the mass of one litre of water." })
        } else if (args[1] === "second") {
          message.channel.send({ content: "The second is the base unit of time in the International System of Units (SI), commonly understood and historically defined as \`1/84000\` of a day." })
        } else if (args[1] === "apmère" || args[1] === "ampere") {
          message.channel.send({ content: "The ampere is defined by taking the fixed numerical value of the elementary charge e to be \`1.602176634 × 10^-19\` when expressed in the unit C." })
        } else if (args[1] === "kelvin") {
          message.channel.send({ content: "The Kelvin scale is an absolute thermodynamic temperature scale, meaning it uses absolute zero as its null point." })
        } else if (args[1] === "candela") {
          message.channel.send({ content: "The candela is the base unit of luminous intensity in the International System of Units (SI); that is, luminous power per unit solid angle emitted by a point light source in a particular direction." })
        } else if (args[1] === "mol") {
          message.channel.send({ content: "The mole, symbol mol, is the SI base unit of amount of substance." })
        } else if (args[1] === "radiaal") {
          message.channel.send({ content: "The radian, denoted by the symbol rad, is the SI unit for measuring angles, and is the standard unit of angular measure used in many areas of mathematics." })
        } else if (args[1] === "steradiaal") {
          message.channel.send({ content: "The steradian (symbol: sr) or square radian is the SI unit of solid angle." })
        } else {
          return message.channel.send({ content: `Welke eenheid wil je weten?` })
        }
      } else if (args[0] === "4" || args[0] === "tb4" || args[0] === "tabel4") {
        message.channel.send({ content: "Still being worked on." })
        if (args[1] === "") {

        }
      } else if (args[0] === "5" || args[0] === "tb5" || args[0] === "tabel5") {
        if (args[1] === "are") {
          message.channel.send({ content: "Oppervlakte - \`a = 10² m²\`" })
        } else if (args[1] === "astronomischeeenheid") {
          message.channel.send({ content: "Afstand - \`AE = 1,49598 * 10^11 m\`" })
        } else if (args[1] === "atmosfeer") {
          message.channel.send({ content: "Druk - \`atm = 1,01325 * 10^5 Pa\`" })
        } else if (args[1] === "atomairemassa-eenheid" || args[1] === "atomairemassaeenheid") {
          message.channel.send({ content: "Massa - \`u = 1,660538921 * 10^-27 kg\`" })
        } else if (args[1] === "bar") {
          message.channel.send({ content: "Druk - \`bar = 10^5 Pa\`" })
        } else if (args[1] === "barn") {
          message.channel.send({ content: "Werkzame Doorsnede - \`b = 10^-28 m²\`" })
        } else if (args[1] === "calorie") {
          message.channel.send({ content: "Energie - \`cal = 4,184 J\`" })
        } else if (args[1] === "centimeterkwikdruk") {
          message.channel.send({ content: "Druk - \`cm Hg = 1,33322 * 10^3 Pa\`" })
        } else if (args[1] === "centimeterwaterdruk") {
          message.channel.send({ content: "Druk - \`cm H20 = 9,80665 * 10^1 Pa\`" })
        } else if (args[1] === "curie") {
          message.channel.send({ content: "Activiteit - \`Ci = 3,7 * 10^10 Bq\`" })
        } else if (args[1] === "dag") {
          message.channel.send({ content: "Tijd - \`d = 86400 s\`" })
        } else if (args[1] === "dalton") {
          message.channel.send({ content: "Massa - \`u = 1,660538921 * 10^-27 kg\`" })
        } else if (args[1] === "decibel" || args[1] === "bel") {
          message.channel.send({ content: "Geluidsniveau - \`dB, B\`" })
        } else if (args[1] === "denier") {
          message.channel.send({ content: "Massa Per Lengte Eenheid - \`Td = 1,111 * 10^-7 kg m\`" })
        } else if (args[1] === "Duitsehardheidsgraad" || args[1] === "duitsehardheidsgraad") {
          message.channel.send({ content: "Waterhardheid - \`D = 10 mg CaO per liter\`" })
        } else if (args[1] === "elektronvoltenergie") {
          message.channel.send({ content: "Energie - \`eV = 1,602176565 * 10^-19 J\`" })
        } else if (args[1] === "elektronvolttemperatuur") {
          message.channel.send({ content: "Temperatuur - \`eV = 1,1604519 * 10^4 K\`" })
        } else if (args[1] === "foon") {
          message.channel.send({ content: "Geluidsniveau - \`Ph = dB (bij 1000 Hz)\`" })
        } else if (args[1] === "foot") {
          message.channel.send({ content: "Lengte/Afstand- \`ft, vt = 3,048 * 10^-1 m\`" })
        } else if (args[1] === "gallon") {
          message.channel.send({ content: "Volume/Inhoud - \`3,785411784 * 10^-3 m^-3\`" })
        } else if (args[1] === "gauss") {
          message.channel.send({ content: "Magnetische Inductie - \`G = 10^-4 T\`" })
        } else if (args[1] === "gon") {
          message.channel.send({ content: "Vlakke Hoek - \`gon (gra); gon = π/200 rad\`" })
        } else if (args[1] === "graadhoek") {
          message.channel.send({ content: "Vlakke Hoek - \`π/ 180\`" })
        } else if (args[1] === "graadcelsius" || args[1] === "graadCelsius") {
          message.channel.send({ content: "Temperatuur - \`C\`" })
        } else if (args[1] === "graadfahrenheit" || args[1] === "graadFahrenheit") {
          message.channel.send({ content: "Temperatuur Verschil - \`F\`" })
        } else if (args[1] === "inch") {
          message.channel.send({ content: "Lengte/Afstand - \`\`" })
        } else if (args[1] === "jaar") {
          message.channel.send({ content: "Tijd - \`\`" })
        } else if (args[1] === "karaat" || args[1] === "metriekkaraat") {
          message.channel.send({ content: "Massa Edelstenen - \`\`" })
        } else if (args[1] === "kilowattuur") {
          message.channel.send({ content: "Energie - \`\`" })
        } else if (args[1] === "knoop") {
          message.channel.send({ content: "Snelheid - \`\`" })
        } else if (args[1] === "lightjaar") {
          message.channel.send({ content: "Lengte/Afstand - \`\`" })
        } else if (args[1] === "liter") {
          message.channel.send({ content: "Volume/Inhoud - \`\`" })
        } else if (args[1] === "micron") {
          message.channel.send({ content: "Lengte/Afstand - \`\`" })
        } else if (args[1] === "landmijl" || args[1] === "mijlland") {
          message.channel.send({ content: "Lengte/Afstand - \`\`" })
        } else if (args[1] === "zeemijl" || args[1] === "mijlzee") {
          message.channel.send({ content: "Lengte/Afstand - \`\`" })
        } else if (args[1] === "millimeterkwik") {
          message.channel.send({ content: "Fysiologische Druk - \`\`" })
        } else if (args[1] === "minuuthoek") {
          message.channel.send({ content: "Vlakke Hoek - \`\`" })
        } else if (args[1] === "minuuttijd") {
          message.channel.send({ content: "Tijd - \`\`" })
        } else if (args[1] === "ons") {
          message.channel.send({ content: "Massa - \`\`" })
        } else if (args[1] === "paardenkrachthp") {
          message.channel.send({ content: "Motor Vermogen - \`\`" })
        } else if (args[1] === "paardenkrachtcv") {
          message.channel.send({ content: "Motor Vermogen- \`\`" })
        } else if (args[1] === "parsec") {
          message.channel.send({ content: "Lengte/Afstand - \`\`" })
        } else if (args[1] === "pascal") {
          message.channel.send({ content: "Druk - \`\`" })
        } else if (args[1] === "pond") {
          message.channel.send({ content: "Massa - \`\`" })
        } else if (args[1] === "pound" || args[1] === "poundavdp") {
          message.channel.send({ content: "Massa - \`\`" })
        } else if (args[1] === "poundpersquareinch") {
          message.channel.send({ content: "Druk - \`\`" })
        } else if (args[1] === "rad") {
          message.channel.send({ content: "Dosis Radioactive Straling - \`\`" })
        } else if (args[1] === "rem") {
          message.channel.send({ content: "Dosisequivalent - \`\`" })
        } else if (args[1] === "rpm") {
          message.channel.send({ content: "Hoeksnelheid/Toerental - \`\`" })
        } else if (args[1] === "rutherford") {
          message.channel.send({ content: "Activiteit - \`\`" })
        } else if (args[1] === "secondehoek") {
          message.channel.send({ content: "Vlakke Hoek - \`\`" })
        } else if (args[1] === "tex") {
          message.channel.send({ content: "Massa Per Lengte Eenheid - \`\`" })
        } else if (args[1] === "ton") {
          message.channel.send({ content: "Massa - \`\`" })
        } else if (args[1] === "torr") {
          message.channel.send({ content: "Druk - \`\`" })
        } else if (args[1] === "uur") {
          message.channel.send({ content: "Tijd - \`\`" })
        } else if (args[1] === "var") {
          message.channel.send({ content: "Reactief Vermogen - \`\`" })
        } else if (args[1] === "voet") {
          message.channel.send({ content: "Lengte/Afstand - \`\`" })
        } else if (args[1] === "voltampère" || args[1] === "voltampere") {
          message.channel.send({ content: "Schijnbaar Vermogen - \`\`" })
        } else if (args[1] === "yard") {
          message.channel.send({ content: "Lengte/Afstand - \`\`" })
        } else {
          return message.channel.send({ content: `Welke eenheid wil je weten?` })
        }
      } else if (args[0] === "7" || args[0] === "tb7" || args[0] === "tabel7") {
        if (args[1] === "") {

        } else {
          return message.channel.send(`Welke eenheid wil je weten?`)
        }
      } else {
        return message.channel.send(`Dit tabel bestaat niet, of is nog niet ingevoerd.`)
      }
    } catch (err) {
      console.log(err)
      message.channel.send(`Error executing command. EC: \`${config.errorcodes.err16}\`.`)
    }
  },
};
