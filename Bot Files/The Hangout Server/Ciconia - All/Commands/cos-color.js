const config = require("./../Other/config.js");

module.exports = {
  name: "color",
  aliases: config.aliases.aliasescolor,
  cooldown: config.cooldown.cooldowncolor,
  permissions: config.permissions.permissioncolor,
  description: "Choose a color by ID or name.",
  async execute(message, args, cmd, client, Discord) {
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
    const trflueredTeamRole = message.guild.roles.cache.find(
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
      (role) => role.id === "910565680091390042"
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

    const colorlist = require("../Other/colorlist.js");
    const coloridlist = require("../Other/coloridlist.js");
    const channel = config.base.baserolecolorchannelid;
    const user = message.author;

    const randomcolor = colorlist[Math.floor(Math.random() * colorlist.length)];

    const colorname = args[0];
    if (!args.length)
      return message.channel.send("What color would you like to have?");

    if (message.channel.id == channel) {
    } else {
      return message.channel.send(
        `You are not in the right channel to use this command! Please use <#${channel}> instead!`
      );
    }

    const consolelogmsg = `${message.author.username} now has a new role color: ${args[0]}.`;
    const newcolormsg = "You now have a new rolecolor: "

    if (args[0] == "1") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg}${whiteTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(whiteTeamRole);
    } else if (args[0] == "2") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${greyTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(greyTeamRole);
    } else if (args[0] == "3") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${lightyellowTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(lightyellowTeamRole);
    } else if (args[0] == "4") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${brickyellowTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(brickyellowTeamRole);
    } else if (args[0] == "5") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${lightgreenTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(lightgreenTeamRole);
    } else if (args[0] == "6") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${lightreddishvioletTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(lightreddishvioletTeamRole);
    } else if (args[0] == "7") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${pastelblueTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(pastelblueTeamRole);
    } else if (args[0] == "8") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${lightorangebrownTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(lightorangebrownTeamRole);
    } else if (args[0] == "9") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${nougat}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(nougatTeamRole);
    } else if (args[0] == "10") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${brightredTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(brightredTeamRole);
    } else if (args[0] == "11") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${medreddishvioletTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(medreddishvioletTeamRole);
    } else if (args[0] == "12") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${brightblueTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(brightblueTeamRole);
    } else if (args[0] == "13") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${brightyellowTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(brightyellowTeamRole);
    } else if (args[0] == "14") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${earthorangeTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(earthorangeTeamRole);
    } else if (args[0] == "15") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${blackTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(blackTeamRole);
    } else if (args[0] == "16") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${darkgreyTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(darkgreyTeamRole);
    } else if (args[0] == "17") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${darkgreenTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(darkgreenTeamRole);
    } else if (args[0] == "18") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${mediumgreenTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(mediumgreenTeamRole);
    } else if (args[0] == "19") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${ligyellowishorangeTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(ligyellowishorangeTeamRole);
    } else if (args[0] == "20") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${brightgreenTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(brightgreenTeamRole);
    } else if (args[0] == "21") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${darkorangeTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(darkorangeTeamRole);
    } else if (args[0] == "22") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${lightbluishvioletTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(lightbluishvioletTeamRole);
    } else if (args[0] == "23") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${transparentTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(transparentTeamRole);
    } else if (args[0] == "24") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${trredTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(trredTeamRole);
    } else if (args[0] == "25") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${trlgblueTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(trlgblueTeamRole);
    } else if (args[0] == "26") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${trblueTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(trblueTeamRole);
    } else if (args[0] == "27") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${tryellowTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(tryellowTeamRole);
    } else if (args[0] == "28") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${lightblueTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(lightblueTeamRole);
    } else if (args[0] == "29") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${trfluereddishorangeTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(trflureddishorangeTeamRole);
    } else if (args[0] == "30") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${trgreenTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(trgreenTeamRole);
    } else if (args[0] == "31") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${trflugreenTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(trflugreenTeamRole);
    } else if (args[0] == "32") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${phosphwhiteTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(phosphwhiteTeamRole);
    } else if (args[0] == "33") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${lightredTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(lightredTeamRole);
    } else if (args[0] == "34") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${mediumredTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(mediumredTeamRole);
    } else if (args[0] == "35") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${mediumblueTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(mediumblueTeamRole);
    } else if (args[0] == "36") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${lightgreyTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(lightgreyTeamRole);
    } else if (args[0] == "37") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${brightvioletTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(brightvioletTeamRole);
    } else if (args[0] == "38") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${bryellowishorangeTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(bryellowishorangeTeamRole);
    } else if (args[0] == "39") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${brightorangeTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(brightorangeTeamRole);
    } else if (args[0] == "40") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${brightbluishgreenTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(brightbluishgreenTeamRole);
    } else if (args[0] == "41") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${earthyellowTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(earthyellowTeamRole);
    } else if (args[0] == "42") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${brightbluishvioletTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(brightbluishvioletTeamRole);
    } else if (args[0] == "43") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${trbrownTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(trbrownTeamRole);
    } else if (args[0] == "44") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${mediumbluishvioletTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(mediumbluishvioletTeamRole);
    } else if (args[0] == "45") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${trmedireddishvioletTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(trmedireddishvioletTeamRole);
    } else if (args[0] == "46") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${medyellowishgreenTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(medyellowishgreenTeamRole);
    } else if (args[0] == "47") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${medbluishgreenTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(medbluishgreenTeamRole);
    } else if (args[0] == "48") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${lightbluishgreenTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(lightbluishgreenTeamRole);
    } else if (args[0] == "49") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${bryellowishgreenTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(bryellowishgreenTeamRole);
    } else if (args[0] == "50") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${ligyellowishgreenTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(ligyellowishgreenTeamRole);
    } else if (args[0] == "51") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${medyellowishorangeTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(medyellowishorangeTeamRole);
    } else if (args[0] == "52") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${brreddishorangeTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(brreddishorangeTeamRole);
    } else if (args[0] == "53") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${brightreddishvioletTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(brightreddishvioletTeamRole);
    } else if (args[0] == "54") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${lightorangeTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(lightorangeTeamRole);
    } else if (args[0] == "55") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${trbrightbluishvioletTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(trbrightbluishvioletTeamRole);
    } else if (args[0] == "56") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${goldTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(goldTeamRole);
    } else if (args[0] == "57") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${darknougatTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(darknougatTeamRole);
    } else if (args[0] == "58") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${silverTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(silverTeamRole);
    } else if (args[0] == "59") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${neonorangeTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(neonorangeTeamRole);
    } else if (args[0] == "60") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${neongreenTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(neongreenTeamRole);
    } else if (args[0] == "61") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${sandblueTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(sandblueTeamRole);
    } else if (args[0] == "62") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${sandvioletTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(sandvioletTeamRole);
    } else if (args[0] == "63") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${mediumorangeTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(mediumorangeTeamRole);
    } else if (args[0] == "64") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${sandyellowTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(sandyellowTeamRole);
    } else if (args[0] == "65") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${earthblueTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(earthblueTeamRole);
    } else if (args[0] == "66") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${earthgreenTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(earthgreenTeamRole);
    } else if (args[0] == "67") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${trflublueTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(trflublueTeamRole);
    } else if (args[0] == "68") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${sandbluemetallicTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(sandbluemetallicTeamRole);
    } else if (args[0] == "69") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${sandvioletmetallicTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(sandvioletmetallicTeamRole);
    } else if (args[0] == "70") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${sandyellowmetallicTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(sandyellowmetallicTeamRole);
    } else if (args[0] == "71") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${darkgreymetallicTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(darkgreymetallicTeamRole);
    } else if (args[0] == "72") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${blackmetallicTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(blackmetallicTeamRole);
    } else if (args[0] == "73") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${lightgreymetallicTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(lightgreymetallicTeamRole);
    } else if (args[0] == "74") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${sandgreenTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(sandgreenTeamRole);
    } else if (args[0] == "75") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${sandredTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(sandredTeamRole);
    } else if (args[0] == "76") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${darkredTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(darkredTeamRole);
    } else if (args[0] == "77") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${trfluyellowTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(trfluyellowTeamRole);
    } else if (args[0] == "78") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${trflueredTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(trfluredTeamRole);
    } else if (args[0] == "79") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${gunmetallicTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(gunmetallicTeamRole);
    } else if (args[0] == "80") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${redflipflopTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(redflipflopTeamRole);
    } else if (args[0] == "81") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${yellowflipflopTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(yellowflipflopTeamRole);
    } else if (args[0] == "82") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${silverflipflopTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(silverflipflopTeamRole);
    } else if (args[0] == "83") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${curryTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(curryTeamRole);
    } else if (args[0] == "84") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${fireyellowTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(fireyellowTeamRole);
    } else if (args[0] == "85") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${flameyellowishorangeTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(flameyellowishorangeTeamRole);
    } else if (args[0] == "86") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${reddishbrownTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(reddishbrownTeamRole);
    } else if (args[0] == "87") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${flamereddishorangeTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(flamereddishorangeTeamRole);
    } else if (args[0] == "88") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${mediumstonegreyTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(mediumstonegreyTeamRole);
    } else if (args[0] == "89") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${royalblueTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(royalblueTeamRole);
    } else if (args[0] == "90") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${darkroyalblueTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(darkroyalblueTeamRole);
    } else if (args[0] == "91") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${brightreddishlilacTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(brightreddishlilacTeamRole);
    } else if (args[0] == "92") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${darkstonegreyTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(darkstonegreyTeamRole);
    } else if (args[0] == "93") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${lemonmetallicTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(lemonmetallicTeamRole);
    } else if (args[0] == "94") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${lightstonegreyTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(lightstonegreyTeamRole);
    } else if (args[0] == "95") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${darkcurryTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(darkcurryTeamRole);
    } else if (args[0] == "96") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${fadedgreenTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(fadedgreenTeamRole);
    } else if (args[0] == "97") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${turquoiseTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(turquoiseTeamRole);
    } else if (args[0] == "98") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${lightroyalblueTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(lightroyalblueTeamRole);
    } else if (args[0] == "99") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${mediumroyalblueTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(mediumroyalblueTeamRole);
    } else if (args[0] == "100") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${rustTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(rustTeamRole);
    } else if (args[0] == "101") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${brownTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(brownTeamRole);
    } else if (args[0] == "102") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${reddishlilacTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(reddishlilacTeamRole);
    } else if (args[0] == "103") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${lilacTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(lilacTeamRole);
    } else if (args[0] == "104") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${lightlilacTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(lightlilacTeamRole);
    } else if (args[0] == "105") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${brightpurpleTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(brightpurpleTeamRole);
    } else if (args[0] == "106") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${lightpurpleTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(lightpurpleTeamRole);
    } else if (args[0] == "107") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${lightpinkTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(lightpinkTeamRole);
    } else if (args[0] == "108") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${lightbrickyellowTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(lightbrickyellowTeamRole);
    } else if (args[0] == "109") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${warmyellowishorangeTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(warmyellowishorangeTeamRole);
    } else if (args[0] == "110") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${coolyellowTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(coolyellowTeamRole);
    } else if (args[0] == "111") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${doveblueTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(doveblueTeamRole);
    } else if (args[0] == "112") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${mediumlilacTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(mediumlilacTeamRole);
    } else if (args[0] == "113") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${slimegreenTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(slimegreenTeamRole);
    } else if (args[0] == "114") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${smokygreyTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(smokygreyTeamRole);
    } else if (args[0] == "115") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${darkblueTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(darkblueTeamRole);
    } else if (args[0] == "116") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${parsleygreenTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(parsleygreenTeamRole);
    } else if (args[0] == "117") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${steelblueTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(steelblueTeamRole);
    } else if (args[0] == "118") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${stormblueTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(stormblueTeamRole);
    } else if (args[0] == "119") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${lapisTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(lapisTeamRole);
    } else if (args[0] == "120") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${darkindigoTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(darkindigoTeamRole);
    } else if (args[0] == "121") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${seagreenTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(seagreenTeamRole);
    } else if (args[0] == "122") {
      console.log(consolelogmsg);
      message.channel.send(`
      ${newcolormsg} ${shamrockTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(shamrockTeamRole);
    } else if (args[0] == "123") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${fossilTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(fossilTeamRole);
    } else if (args[0] == "124") {
      console.log(consolelogmsg);
      message.channel.send(`
      ${newcolormsg} ${mulberryTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(mulberryTeamRole);
    } else if (args[0] == "125") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${forestgreenTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(forestgreenTeamRole);
    } else if (args[0] == "126") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${cadetblueTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(cadetblueTeamRole);
    } else if (args[0] == "127") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${electricblueTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(electricblueTeamRole);
    } else if (args[0] == "128") {
      console.log(consolelogmsg);
      message.channel.send(`
      ${newcolormsg} ${eggplantTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(eggplantTeamRole);
    } else if (args[0] == "129") {
      console.log(consolelogmsg);
      message.channel.send(`
      ${newcolormsg} ${mossTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(mosssTeamRole);
    } else if (args[0] == "130") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${artichokeTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(artichokeTeamRole);
    } else if (args[0] == "131") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${sagegreenTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(sagegreenTeamRole);
    } else if (args[0] == "132") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${ghostgreyTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(ghostgreyTeamRole);
    } else if (args[0] == "133") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${plumTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(plumTeamRole);
    } else if (args[0] == "134") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${olivineTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(olivineTeamRole);
    } else if (args[0] == "135") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${laurelgreenTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(laurelgreenTeamRole);
    } else if (args[0] == "136") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${quillgreyTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(quillgreyTeamRole);
    } else if (args[0] == "137") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${crimsonTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(crimsonTeamRole);
    } else if (args[0] == "138") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${mintTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(mintTeamRole);
    } else if (args[0] == "139") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${babyblueTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(babyblueTeamRole);
    } else if (args[0] == "140") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${carnationpinkTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(carnationpinkeamRole);
    } else if (args[0] == "141") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${persimmonTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(persimmonTeamRole);
    } else if (args[0] == "142") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${maroonTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(maroonTeamRole);
    } else if (args[0] == "143") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${daisyorangeTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(daisyorangeTeamRole);
    } else if (args[0] == "144") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${pearlTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(pearlTeamRole);
    } else if (args[0] == "145") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${fogTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(fogTeamRole);
    } else if (args[0] == "146") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${salmonTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(salmonTeamRole);
    } else if (args[0] == "147") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${terracottaTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(terracottaTeamRole);
    } else if (args[0] == "148") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${cocoaTeamRole}`
      );
      await message.guild.members.cache.
        get(user.id)
        .roles.add(cocoaTeamRole);
    } else if (args[0] == "149") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${wheatTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(wheatTeamRole);
    } else if (args[0] == "150") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${buttermilkTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(buttermilkTeamRole);
    } else if (args[0] == "151") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${mauveTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(mauveTeamRole);
    } else if (args[0] == "152") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${sunriseTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(sunriseTeamRole);
    } else if (args[0] == "153") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${tawnyTeamRole}`
      );
      await message.guild.members.cache.
        get(user.id).
        roles.add(tawnyTeamRole);
    } else if (args[0] == "154") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${cashmereTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(cashmereTeamRole);
    } else if (args[0] == "155") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${khakiTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(khakiTeamRole);
    } else if (args[0] == "156") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${lilywhiteTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(lilywhiteTeamRole);
    } else if (args[0] == "157") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${seashellTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(seashellTeamRole);
    } else if (args[0] == "158") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${burgundyTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(burgundyTeamRole);
    } else if (args[0] == "159") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${corkTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(corkTeamRole);
    } else if (args[0] == "160") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${burlapTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(burlapTeamRole);
    } else if (args[0] == "161") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${beigeTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(beigeTeamRole);
    } else if (args[0] == "162") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${oysterTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(oysterTeamRole);
    } else if (args[0] == "163") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${pineconeTeamRole}`);
      await message.guild.members.cache
        .get(user.id)
        .roles.add(pineconeTeamRole);
    } else if (args[0] == "164") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${fawnbrownTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(fawnbrownTeamRole);
    } else if (args[0] == "165") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${hurricanegreyTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(hurricanegreyTeamRole);
    } else if (args[0] == "166") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${cloudygreyTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(cloudygreyTeamRole);
    } else if (args[0] == "167") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${linenTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(linenTeamRole);
    } else if (args[0] == "168") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${copperTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(copperTeamRole);
    } else if (args[0] == "169") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${dirtbrownTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(dirtbrownTeamRole);
    } else if (args[0] == "170") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${bronzeTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(bronzeTeamRole);
    } else if (args[0] == "171") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${flintTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(flintTeamRole);
    } else if (args[0] == "172") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${darktaupeTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(darktaupeTeamRole);
    } else if (args[0] == "173") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${burntsiennaTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(burntsiennaTeamRole);
    } else if (args[0] == "174") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${institutionalwhiteTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(institutionalwhiteTeamRole);
    } else if (args[0] == "175") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${midgrayTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(midgrayTeamRole);
    } else if (args[0] == "176") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${reallyblackTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(reallyblackTeamRole);
    } else if (args[0] == "177") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${reallyredTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(reallyredTeamRole);
    } else if (args[0] == "178") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${deeporangeTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(deeporangeTeamRole);
    } else if (args[0] == "179") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${alderTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(alderTeamRole);
    } else if (args[0] == "180") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${dustyroseTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(dustyroseTeamRole);
    } else if (args[0] == "181") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${oliveTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(oliveTeamRole);
    } else if (args[0] == "182") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${newyellerTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(newyellerTeamRole);
    } else if (args[0] == "183") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${reallyblueTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(reallyblueTeamRole);
    } else if (args[0] == "184") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${navyblueTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(navyblueTeamRole);
    } else if (args[0] == "185") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${deepblueTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(deepblueTeamRole);
    } else if (args[0] == "186") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${cyanTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(cyanTeamRole);
    } else if (args[0] == "187") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${cgabrownTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(cgabrownTeamRole);
    } else if (args[0] == "188") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${magentaTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(magentaTeamRole);
    } else if (args[0] == "189") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${pinkTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(pinkTeamRole);
    } else if (args[0] == "190") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${deeporangeTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(deeporangeTeamRole);
    } else if (args[0] == "191") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${tealTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(tealTeamRole);
    } else if (args[0] == "192") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${toothpasteTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(toothpasteTeamRole);
    } else if (args[0] == "193") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${limegreenTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(limegreenTeamRole);
    } else if (args[0] == "194") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${camoTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(camoTeamRole);
    } else if (args[0] == "195") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${grimeTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(grimeTeamRole);
    } else if (args[0] == "196") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${lavenderTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(lavenderTeamRole);
    } else if (args[0] == "197") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${pastellightblueTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(pastellightblueTeamRole);
    } else if (args[0] == "198") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${pastelorangeTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(pastelorangeTeamRole);
    } else if (args[0] == "199") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${pastelvioletTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(pastelvioletTeamRole);
    } else if (args[0] == "200") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${pastelbluegreenTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(pastelbluegreenTeamRole);
    } else if (args[0] == "201") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${pastelgreenTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(pastelgreenTeamRole);
    } else if (args[0] == "202") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${pastelyellowTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(pastelyellowTeamRole);
    } else if (args[0] == "203") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${pastelbrownTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(pastelbrownTeamRole);
    } else if (args[0] == "204") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${royalpurpleTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.add(royalpurpleTeamRole);
    } else if (args[0] == "205") {
      console.log(consolelogmsg);
      message.channel.send(
        `${newcolormsg} ${hotpinkTeamRole}`
      );
      await message.guild.members.cache.get(user.id).roles.add(hotpinkTeamRole);
    } else
      return message.channel.send(
        `That's not a valid color! Maybe try ${randomcolor}?`
      );
  },
};
