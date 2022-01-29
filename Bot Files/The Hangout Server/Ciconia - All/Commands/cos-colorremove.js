const config = require("./../Other/config.js");

module.exports = {
  name: "colorremove",
  aliases: config.aliases.aliasescolorremove,
  cooldown: config.cooldown.cooldowncolorremove,
  permissions: config.permissions.permissioncolorremove,
  description: "Remove a color role by ID or name.",
  async execute(message, args, cmd, client, Discord) {
    const whiteTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910544967582253086"
    );
    const greyTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910545117650235552"
    );
    const lightyellowTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "9105451707880970"
    );
    const brickyellowTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910545246302122025"
    );
    const lightgreenTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910545313352282143"
    );
    const lightreddishvioletTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "9105453591303710"
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
      (role) => role.id === "9105565924732511"
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
      (role) => role.id === "9105570466019008"
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
      (role) => role.id === "9105591688580562"
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
      (role) => role.id === "9105611105312128"
    );
    const silverflipflopTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910561191057850429"
    );
    const curryTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910561277582127124"
    );
    const fireyellowTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "9105613200284751"
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
      (role) => role.id === "9105639354777138"
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
      (role) => role.id === "9105653532334530"
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
      (role) => role.id === "9105664636784178"
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
      (role) => role.id === "9105676356436740"
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
      (role) => role.id === "9105679659018241"
    );
    const bronzeTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "91056811562020"
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
      (role) => role.id === "9105641333499934"
    );
    const navyblueTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "9105697465899038"
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
      (role) => role.id === "9105692883672168"
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
      (role) => role.id === "9105697175409010"
    );
    const royalpurpleTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910569767629385828"
    );
    const hotpinkTeamRole = message.guild.roles.cache.find(
      (role) => role.id === "910569825812758569"
    );

    const colorlist = require("../Other/colorlist.js");
    const coloridlist = require("../Other/coloridlist.js");
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

    if (coloridlist["1"] == args[0]) {
      console
        .log(`${message.author.username} now has a new role color: ${args[0]}.`)
        .get(user.id)
        .roles.remove(whiteTeamRole);
      message.channel.send(`You now have new rolecolor: <@roleidhere>.`);
    } else if (coloridlist["2"] == args[0]) {
      console
        .log(`${message.author.username} now has a new role color: ${args[0]}.`)
        .get(user.id)
        .roles.remove(greyTeamRole);
      message.channel.send(`You now have new rolecolor: <@roleidhere>.`);
    }
  },
};
