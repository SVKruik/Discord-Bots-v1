const config = require("./../Other/config.js");
const profileModel = require("../models/profileSchema");

module.exports = {
  name: "colorremove",
  aliases: config.aliases.aliasescolorremove,
  cooldown: config.cooldown.cooldowncolorremove,
  permissions: config.permissions.permissioncolorremove,
  description: "Remove a color role by ID or name.",
  async execute(message, args, cmd, client, Discord, profileData) {
    try {
      const command =
        client.commands.get(cmd) ||
        client.commands.find((a) => a.aliases && a.aliases.includes(cmd));
      console.log(`${message.author.username} used this command: || ${command.name} ||`)
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
      const ligyellowishorangeTeamRole = message.guild.roles.cache.find(
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
        (role) => role.id === "910556139966590977"
      );
      const tryellowTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910556212205076491"
      );
      const lightblueTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910556305431855126"
      );
      const trflureddishorangeTeamRole = message.guild.roles.cache.find(
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
      const goldTeamRole = message.guild.roles.cache.find(
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
      const sandblueTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910559505383821344"
      );
      const sandvioletTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910559582496096316"
      );
      const mediumorangeTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910559620249047070"
      );
      const sandyellowTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910559706920136755"
      );
      const earthblueTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910559749169369159"
      );
      const earthgreenTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910559817217736725"
      );
      const trflublueTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910559913820946512"
      );
      const sandbluemetallicTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910559963934502923"
      );
      const sandvioletmetallicTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910560026433822721"
      );
      const sandyellowmetallicTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910560081148510249"
      );
      const darkgreymetallicTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910560140527304714"
      );
      const blackmetallicTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910560221125046292"
      );
      const lightgreymetallicTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910560270521360474"
      );
      const sandgreenTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910560368810672208"
      );
      const sandredTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910560412905381909"
      );
      const darkredTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910560514608861254"
      );
      const trfluyellowTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910560591280758855"
      );
      const trfluredTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910560696301912134"
      );
      const gunmetallicTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910560759216476191"
      );
      const redflipflopTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910560782910128211"
      );
      const yellowflipflopTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910561110875312128"
      );
      const silverflipflopTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910561191057850429"
      );
      const curryTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910561277582127124"
      );
      const fireyellowTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910561320028487751"
      );
      const flameyellowishorangeTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910561359681429565"
      );
      const reddishbrownTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910561428363161611"
      );
      const flamereddishorangeTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910561480418680882"
      );
      const mediumstonegreyTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910561533761835049"
      );
      const royalblueTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910561588157759601"
      );
      const darkroyalblueTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910561636555825162"
      );
      const brightreddishlilacTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910561708232294460"
      );
      const darkstonegreyTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910561790948167711"
      );
      const lemonmetallicTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910561845704798239"
      );
      const lightstonegreyTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910561899832295454"
      );
      const darkcurryTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910561952210755585"
      );
      const fadedgreenTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910562003771330610"
      );
      const turquoiseTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910562058557337630"
      );
      const lightroyalblueTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910562100403929160"
      );
      const mediumroyalblueTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910562167542124664"
      );
      const rustTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910563243427250186"
      );
      const brownTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910563497513988126"
      );
      const reddishlilacTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910563541906513950"
      );
      const lilacTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910563605391491092"
      );
      const lightlilacTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910563643937140768"
      );
      const brightpurpleTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910563675352481834"
      );
      const lightpurpleTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910563726241984573"
      );
      const lightpinkTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910563791081725952"
      );
      const lightbrickyellowTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910563827597316126"
      );
      const warmyellowishorangeTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910563883104731156"
      );
      const coolyellowTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910563938754777138"
      );
      const doveblueTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910563991095509022"
      );
      const mediumlilacTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910564039015411842"
      );
      const slimegreenTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910564086671089675"
      );
      const smokygreyTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910564133345317004"
      );
      const darkblueTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910564179478478858"
      );
      const parsleygreenTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910564218498088990"
      );
      const steelblueTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910564273682542622"
      );
      const stormblueTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910564315361329203"
      );
      const lapisTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910564374001893376"
      );
      const darkindigoTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910564417433899038"
      );
      const seagreenTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910564467425816639"
      );
      const shamrockTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910564526003486780"
      );
      const fossilTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910564605351305236"
      );
      const mulberryTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910564660355416065"
      );
      const forestgreenTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910564708644442195"
      );
      const cadetblueTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910564754362355722"
      );
      const electricblueTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910564793923043348"
      );
      const eggplantTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910564869370171452"
      );
      const mossTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910565083422289980"
      );
      const artichokeTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910565116951547944"
      );
      const sagegreenTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910565308643831889"
      );
      const ghostgreyTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910565353233453087"
      );
      const plumTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910565491326717992"
      );
      const olivineTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910565570410332220"
      );
      const laurelgreenTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910565622071582760"
      );
      const quillgreyTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910565680091390042"
      );
      const crimsonTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910565726757220412"
      );
      const mintTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910565774853288001"
      );
      const babyblueTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910565816020394054"
      );
      const carnationpinkTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910565869095108608"
      );
      const persimmonTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910565922098540544"
      );
      const maroonTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910565975018074152"
      );
      const daisyorangeTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910566463876784178"
      );
      const pearlTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910566567241195581"
      );
      const fogTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910566609305866261"
      );
      const salmonTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910566649919340634"
      );
      const terracottaTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910566699139481651"
      );
      const cocoaTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910566777598140457"
      );
      const wheatTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910566824570155028"
      );
      const buttermilkTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910566861043798076"
      );
      const mauveTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910566890429095967"
      );
      const sunriseTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910567102325354586"
      );
      const tawnyTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910567146390704138"
      );
      const cashmereTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910567229630865449"
      );
      const khakiTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910567286522392666"
      );
      const lilywhiteTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910567328268292107"
      );
      const seashellTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910567376649613392"
      );
      const burgundyTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910567415061020752"
      );
      const corkTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910567463786254396"
      );
      const burlapTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910567490336202752"
      );
      const beigeTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910567547223543828"
      );
      const oysterTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910567591708340244"
      );
      const pineconeTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910567635643678740"
      );
      const fawnbrownTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910567666622816258"
      );
      const hurricanegreyTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910567769983041556"
      );
      const cloudygreyTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910567840904515644"
      );
      const linenTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910567884781150219"
      );
      const copperTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910567926355071006"
      );
      const dirtbrownTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910567987659018241"
      );
      const bronzeTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910568118756208720"
      );
      const flintTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910568175375110144"
      );
      const darktaupeTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910568214453444708"
      );
      const burntsiennaTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910568265783328808"
      );
      const institutionalwhiteTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910568323526307840"
      );
      const midgrayTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910568372209598475"
      );
      const reallyblackTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910568423090712616"
      );
      const reallyredTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910568471664943195"
      );
      const deeporangeTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910568513972883456"
      );
      const alderTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910568566523306045"
      );
      const dustyroseTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910568604720836728"
      );
      const oliveTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910568643144847440"
      );
      const newyellerTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910568678913880084"
      );
      const reallyblueTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910568741333499934"
      );
      const navyblueTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910568797465899038"
      );
      const deepblueTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "936995794471489587"
      );
      const cyanTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910568845280935946"
      );
      const cgabrownTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910568882920620032"
      );
      const magentaTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910568980043948033"
      );
      const pinkTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910569036708999209"
      );
      const tealTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910569096612040724"
      );
      const toothpasteTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910569182343626812"
      );
      const limegreenTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910569222571184138"
      );
      const camoTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910569288367218768"
      );
      const grimeTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910569321376407552"
      );
      const lavenderTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910569370659467324"
      );
      const pastellightblueTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910569414959726682"
      );
      const pastelorangeTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910569466025373706"
      );
      const pastelvioletTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910569501504991292"
      );
      const pastelbluegreenTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910569563358392351"
      );
      const pastelgreenTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910569621273321572"
      );
      const pastelyellowTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910569662503337994"
      );
      const pastelbrownTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910569717540987010"
      );
      const royalpurpleTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910569767629385828"
      );
      const hotpinkTeamRole = message.guild.roles.cache.find(
        (role) => role.id === "910569825812758569"
      );

      if (!args[0]) {
        return message.channel.send("What color(s) would you like to remove?");
      }

      const logmsg = `${message.author.username} has removed their rolecolor: || ${args[0]} ||`;
      const errmsg = `I cannot find that color.`;
      const colormsg = `You have removed the following role color: \`${args[0]}\``;
      const user = message.author;

      const member = message.guild.members.resolve(user.id);
      const roles = member.roles.cache.filter(role => role.name.startsWith(`SRC -`));
      const amountroles = roles.size

      if (!member.roles.cache.filter(role => role.name === `SRC - White`)) {
        return message.channel.send("You don't have that role.")
      }

      if (args[0] === "all" || "clear" || "full") {
        try {
          const coinsback = amountroles * 50
          const newbal = profileData.wallet + coinsback
          await profileModel.findOneAndUpdate(
            {
              userID: message.author.id,
            },
            {
              $inc: {
                wallet: coinsback,
              },
            }
          );
          if (amountroles === 1) {
            message.channel.send(`You refunded \`${amountroles}\` role. You received \`${coinsback}\` coins. Your new balance is \`${newbal}\` a`)
          } else if (amountroles >= 2) {
            message.channel.send(`You refunded \`${amountroles}\` roles. You received \`${coinsback}\` coins. Your new balance is \`${newbal}\` a`)
          }
        } catch (err) {
          console.log(err);
          message.channel.send(`Error message: Error executing command. EC: \`${config.errorcodes.err9}\`.`)
        }
      } else if (args[0] >= 1 && args[0] <= 205) {
        try {
          const newbal = profileData.wallet + coinsback
          await profileModel.findOneAndUpdate(
            {
              userID: message.author.id,
            },
            {
              $inc: {
                wallet: 50,
              },
            }
          );
          if (amountroles === 1) {
            message.channel.send(`You refunded \`${amountroles}\` role. You received \`50\` coins. Your new balance is \`${newbal}\` b`)
          }
        } catch (err) {
          console.log(err);
          message.channel.send(`Error message: Error executing command. EC: \`${config.errorcodes.err9}\`.`)
        }
      }

      if (args[0] === "1") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(whiteTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "2") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(greyTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "3") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(lightyellowTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "4") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(brickyellowTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "5") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(lightgreenTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "6") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(lightreddishvioletTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "7") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(pastelblueTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "8") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(lightorangebrownTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "9") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(nougatTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "10") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(brightredTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "11") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(medreddishvioletTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "12") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(brightblueTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "13") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(brightyellowTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "14") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(earthorangeTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "15") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(blackTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "16") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(darkgreyTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "17") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(darkgreenTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "18") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(mediumgreenTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "19") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(ligyellowishorangeTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "20") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(brightgreenTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "21") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(darkorangeTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "22") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(lightbluishvioletTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "23") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(transparentTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "24") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(trredTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "25") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(trlgblueTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "26") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(trblueTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "27") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(tryellowTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "28") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(lightblueTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "29") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(trflureddishorangeTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "30") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(trgreenTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "31") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(trflugreenTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "32") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(phosphwhiteTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "33") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(lightredTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "34") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(mediumredTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "35") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(mediumblueTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "36") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(lightgreyTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "37") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(brightvioletTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "38") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(bryellowishorangeTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "39") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(brightorangeTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "40") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(brightbluishgreenTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "41") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(earthyellowTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "42") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(brightbluishvioletTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "43") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(trbrownTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "44") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(mediumbluishvioletTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "45") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(trmedireddishvioletTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "46") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(medyellowishgreenTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "47") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(medbluishgreenTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "48") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(lightbluishgreenTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "49") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(bryellowishgreenTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "50") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(ligyellowishgreenTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "51") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(medyellowishorangeTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "52") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(brreddishorangeTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "53") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(brightreddishvioletTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "54") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(lightorangeTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "55") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(trbrightbluishvioletTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "56") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(goldTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "57") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(darknougatTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "58") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(silverTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "59") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(neonorangeTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "60") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(neongreenTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "61") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(sandblueTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "62") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(sandvioletTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "63") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(mediumorangeTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "64") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(sandyellowTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "65") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(earthblueTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "66") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(earthgreenTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "67") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(trflublueTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "68") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(sandbluemetallicTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "69") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(sandvioletmetallicTeamRole);
        message.channel.send(colormsg);
        message.channel.send("That's what I thougt.")
        console.log(logmsg);
      } else if (args[0] === "70") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(sandyellowmetallicTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "71") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(darkgreymetallicTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "72") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(blackmetallicTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "73") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(lightgreymetallicTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "74") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(sandgreenTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "75") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(sandredTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "76") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(darkredTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "77") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(trfluyellowTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "78") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(trfluredTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "79") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(gunmetallicTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "80") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(redflipflopTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "81") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(yellowflipflopTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "82") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(silverflipflopTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "83") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(curryTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "84") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(fireyellowTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "85") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(flameyellowishorangeTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "86") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(reddishbrownTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "87") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(flamereddishorangeTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "88") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(mediumstonegreyTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "89") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(royalblueTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "90") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(darkroyalblueTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "91") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(brightreddishlilacTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "92") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(darkstonegreyTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "93") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(lemonmetallicTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "94") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(lightstonegreyTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "95") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(darkcurryTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "96") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(fadedgreenTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "97") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(turquoiseTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "98") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(lightroyalblueTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "99") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(mediumroyalblueTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "100") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(rustTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "101") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(brownTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "102") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(reddishlilacTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "103") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(lilacTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "104") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(lightlilacTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "105") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(brightpurpleTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "106") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(lightpurpleTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "107") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(lightpinkTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "108") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(lightbrickyellowTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "109") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(warmyellowishorangeTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "110") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(coolyellowTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "111") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(doveblueTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "112") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(mediumlilacTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "113") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(slimegreenTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "114") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(smokygreyTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "115") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(darkblueTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "116") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(parsleygreenTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "117") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(steelblueTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "118") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(stormblueTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "119") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(lapisTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "120") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(darkindigoTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "121") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(seagreenTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "122") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(shamrockTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "123") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(fossilTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "124") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(mulberryTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "125") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(forestgreenTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "126") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(cadetblueTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "127") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(electricblueTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "128") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(eggplantTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "129") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(mossTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "130") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(artichokeTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "131") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(sagegreenTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "132") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(ghostgreyTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "133") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(plumTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "134") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(olivineTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "135") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(laurelgreenTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "136") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(quillgreyTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "137") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(crimsonTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "138") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(mintTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "139") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(babyblueTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "140") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(carnationpinkTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "141") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(persimmonTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "142") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(maroonTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "143") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(daisyorangeTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "144") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(pearlTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "145") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(fogTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "146") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(salmonTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "147") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(terracottaTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "148") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(cocoaTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "149") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(wheatTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "150") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(buttermilkTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "151") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(mauveTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "152") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(sunriseTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "153") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(tawnyTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "154") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(cashmereTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "155") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(khakiTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "156") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(lilywhiteTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "157") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(seashellTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "158") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(burgundyTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "159") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(corkTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "160") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(burlapTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "161") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(beigeTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "162") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(oysterTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "163") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(pineconeTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "164") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(fawnbrownTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "165") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(hurricanegreyTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "166") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(cloudygreyTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "167") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(linenTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "168") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(copperTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "169") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(dirtbrownTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "170") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(bronzeTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "171") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(flintTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "172") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(darktaupeTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "173") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(burntsiennaTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "174") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(institutionalwhiteTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "175") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(midgrayTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "176") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(reallyblackTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "177") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(reallyredTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "178") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(deeporangeTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "179") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(alderTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "180") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(dustyroseTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "181") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(oliveTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "182") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(newyellerTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "183") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(reallyblueTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "184") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(navyblueTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "185") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(deepblueTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "186") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(cyanTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "187") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(cgabrownTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "188") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(magentaTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "189") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(pinkTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "190") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(deeporangeTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "191") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(tealTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "192") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(toothpasteTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "193") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(limegreenTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "194") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(camoTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "195") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(grimeTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "196") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(lavenderTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "197") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(pastellightblueTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "198") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(pastelorangeTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "199") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(pastelvioletTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "200") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(pastelbluegreenTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "201") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(pastelgreenTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "202") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(pastelyellowTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "203") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(pastelbrownTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "204") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(royalpurpleTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "205") {
        await message.guild.members.cache
          .get(user.id)
          .roles.remove(hotpinkTeamRole);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else if (args[0] === "all" || "clear" || "full") {
        await member.roles.remove(roles);
        message.channel.send(colormsg);
        console.log(logmsg);
      } else message.channel.send(errmsg);
    } catch (err) {
      console.log(err)
      message.channel.send(`Error executing command. EC: \`${config.errorcodes.err0}\`.`)
    }
  },
};