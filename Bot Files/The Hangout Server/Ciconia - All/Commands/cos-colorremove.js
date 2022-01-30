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
      return message.channel.send("What color would you like to remove?");

    if (message.channel.id == channel) {
    } else {
      return message.channel.send(
        `You are not in the right channel to use this command! Please use <#${channel}> instead!`
      );
    }

    const consolelogmsg = `${message.author.username} has removed their rolecolor: ${args[0]}.`;
    const rmvdcolormsg = "You have removed your rolecolor: "

    if (args[0] == "1") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${whiteTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(whiteTeamRole);
    } else if (args[0] == "2") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${greyTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(greyTeamRole);
    } else if (args[0] == "3") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${lightyellowTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(lightyellowTeamRole);
    } else if (args[0] == "4") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${brickyellowTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(brickyellowTeamRole);
    } else if (args[0] == "5") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${lightgreenTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(lightgreenTeamRole);
    } else if (args[0] == "6") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${lightreddishvioletTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(lightreddishvioletTeamRole);
    } else if (args[0] == "7") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${pastelblueTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(pastelblueTeamRole);
    } else if (args[0] == "8") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${lightorangebrownTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(lightorangebrownTeamRole);
    } else if (args[0] == "9") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${nougat}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(nougatTeamRole);
    } else if (args[0] == "10") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${brightredTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(brightredTeamRole);
    } else if (args[0] == "11") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${medreddishvioletTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(medreddishvioletTeamRole);
    } else if (args[0] == "12") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${brightblueTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(brightblueTeamRole);
    } else if (args[0] == "13") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${brightyellowTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(brightyellowTeamRole);
    } else if (args[0] == "14") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${earthorangeTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(earthorangeTeamRole);
    } else if (args[0] == "15") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${blackTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(blackTeamRole);
    } else if (args[0] == "16") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${darkgreyTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(darkgreyTeamRole);
    } else if (args[0] == "17") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${darkgreenTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(darkgreenTeamRole);
    } else if (args[0] == "18") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${mediumgreenTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(mediumgreenTeamRole);
    } else if (args[0] == "19") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${ligyellowishorangeTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(ligyellowishorangeTeamRole);
    } else if (args[0] == "20") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${brightgreenTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(brightgreenTeamRole);
    } else if (args[0] == "21") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${darkorangeTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(darkorangeTeamRole);
    } else if (args[0] == "22") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${lightbluishvioletTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(lightbluishvioletTeamRole);
    } else if (args[0] == "23") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${transparentTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(transparentTeamRole);
    } else if (args[0] == "24") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${trredTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(trredTeamRole);
    } else if (args[0] == "25") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${trlgblueTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(trlgblueTeamRole);
    } else if (args[0] == "26") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${trblueTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(trblueTeamRole);
    } else if (args[0] == "27") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${tryellowTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(tryellowTeamRole);
    } else if (args[0] == "28") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${lightblueTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(lightblueTeamRole);
    } else if (args[0] == "29") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${trfluereddishorangeTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(trflureddishorangeTeamRole);
    } else if (args[0] == "30") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${trgreenTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(trgreenTeamRole);
    } else if (args[0] == "31") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${trflugreenTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(trflugreenTeamRole);
    } else if (args[0] == "32") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${phosphwhiteTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(phosphwhiteTeamRole);
    } else if (args[0] == "33") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${lightredTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(lightredTeamRole);
    } else if (args[0] == "34") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${mediumredTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(mediumredTeamRole);
    } else if (args[0] == "35") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${mediumblueTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(mediumblueTeamRole);
    } else if (args[0] == "36") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${lightgreyTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(lightgreyTeamRole);
    } else if (args[0] == "37") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${brightvioletTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(brightvioletTeamRole);
    } else if (args[0] == "38") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${bryellowishorangeTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(bryellowishorangeTeamRole);
    } else if (args[0] == "39") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${brightorangeTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(brightorangeTeamRole);
    } else if (args[0] == "40") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${brightbluishgreenTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(brightbluishgreenTeamRole);
    } else if (args[0] == "41") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${earthyellowTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(earthyellowTeamRole);
    } else if (args[0] == "42") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${brightbluishvioletTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(brightbluishvioletTeamRole);
    } else if (args[0] == "43") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${trbrownTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(trbrownTeamRole);
    } else if (args[0] == "44") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${mediumbluishvioletTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(mediumbluishvioletTeamRole);
    } else if (args[0] == "45") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${trmedireddishvioletTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(trmedireddishvioletTeamRole);
    } else if (args[0] == "46") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${medyellowishgreenTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(medyellowishgreenTeamRole);
    } else if (args[0] == "47") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${medbluishgreenTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(medbluishgreenTeamRole);
    } else if (args[0] == "48") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${lightbluishgreenTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(lightbluishgreenTeamRole);
    } else if (args[0] == "49") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${bryellowishgreenTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(bryellowishgreenTeamRole);
    } else if (args[0] == "50") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${ligyellowishgreenTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(ligyellowishgreenTeamRole);
    } else if (args[0] == "51") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${medyellowishorangeTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(medyellowishorangeTeamRole);
    } else if (args[0] == "52") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${brreddishorangeTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(brreddishorangeTeamRole);
    } else if (args[0] == "53") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${brightreddishvioletTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(brightreddishvioletTeamRole);
    } else if (args[0] == "54") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${lightorangeTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(lightorangeTeamRole);
    } else if (args[0] == "55") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${trbrightbluishvioletTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(trbrightbluishvioletTeamRole);
    } else if (args[0] == "56") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${goldTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(goldTeamRole);
    } else if (args[0] == "57") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${darknougatTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(darknougatTeamRole);
    } else if (args[0] == "58") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${silverTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(silverTeamRole);
    } else if (args[0] == "59") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${neonorangeTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(neonorangeTeamRole);
    } else if (args[0] == "60") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${neongreenTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(neongreenTeamRole);
    } else if (args[0] == "61") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${sandblueTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(sandblueTeamRole);
    } else if (args[0] == "62") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${sandvioletTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(sandvioletTeamRole);
    } else if (args[0] == "63") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${mediumorangeTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(mediumoragneTeamRole);
    } else if (args[0] == "64") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${sandyellowTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(sandyellowTeamRole);
    } else if (args[0] == "65") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${earthblueTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(earthblueTeamRole);
    } else if (args[0] == "66") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${earthgreenTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(earthgreenTeamRole);
    } else if (args[0] == "67") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${trflublueTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(trflublueTeamRole);
    } else if (args[0] == "68") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${sandbluemetallicTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(sandbluemetallicTeamRole);
    } else if (args[0] == "69") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${sandvioletmetallicTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(sandvioletmetallicTeamRole);
    } else if (args[0] == "70") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${sandyellowmetallicTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(sandyellowmetallicTeamRole);
    } else if (args[0] == "71") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${darkgreymetallicTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(darkgreymetallicTeamRole);
    } else if (args[0] == "72") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${blackmetallicTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(blackmetallicTeamRole);
    } else if (args[0] == "73") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${lightgreymetallicTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(lightgreymetallicTeamRole);
    } else if (args[0] == "74") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${sandgreenTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(sandgreenTeamRole);
    } else if (args[0] == "75") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${sandredTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(sandredTeamRole);
    } else if (args[0] == "76") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${darkredTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(darkredTeamRole);
    } else if (args[0] == "77") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${trfluyellowTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(trfluyellowTeamRole);
    } else if (args[0] == "78") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${trflueredTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(trfluredTeamRole);
    } else if (args[0] == "79") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${gunmetallicTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(gunmetallicTeamRole);
    } else if (args[0] == "80") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${redflipflopTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(redflipflopTeamRole);
    } else if (args[0] == "81") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${yellowflipflopTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(yellowflipflopTeamRole);
    } else if (args[0] == "82") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${silverflipflopTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(silverflipflopTeamRole);
    } else if (args[0] == "83") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${curryTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(curryTeamRole);
    } else if (args[0] == "84") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${fireyellowTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(fireyellowTeamRole);
    } else if (args[0] == "85") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${flameyellowishorangeTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(flameyellowishorangeTeamRole);
    } else if (args[0] == "86") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${reddishbrownTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(reddishbrownTeamRole);
    } else if (args[0] == "87") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${flamereddishorangeTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(flamereddishorangeTeamRole);
    } else if (args[0] == "88") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${mediumstonegreyTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(mediumstonegreyTeamRole);
    } else if (args[0] == "89") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${royalblueTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(royalblueTeamRole);
    } else if (args[0] == "90") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${darkroyalblueTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(darkroyalblueTeamRole);
    } else if (args[0] == "91") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${brightreddishlilacTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(brightreddishlilacTeamRole);
    } else if (args[0] == "92") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${darkstonegreyTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(darkstonegreyTeamRole);
    } else if (args[0] == "93") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${lemonmetallicTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(lemonmetallicTeamRole);
    } else if (args[0] == "94") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${lightstonegreyTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(lightstonegreyTeamRole);
    } else if (args[0] == "95") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${darkcurryTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(darkcurryTeamRole);
    } else if (args[0] == "96") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${fadedgreenTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(fadedgreenTeamRole);
    } else if (args[0] == "97") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${turquoiseTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(turquoiseTeamRole);
    } else if (args[0] == "98") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${lightroyalblueTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(lightroyalblueTeamRole);
    } else if (args[0] == "99") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${mediumroyalblueTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(mediumroyalblueTeamRole);
    } else if (args[0] == "100") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${rustTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(rustTeamRole);
    } else if (args[0] == "101") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${brownTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(brownTeamRole);
    } else if (args[0] == "102") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${reddishlilacTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(reddishlilacTeamRole);
    } else if (args[0] == "103") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${lilacTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(lilacTeamRole);
    } else if (args[0] == "104") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${lightlilacTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(lightlilacTeamRole);
    } else if (args[0] == "105") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${brightpurpleTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(brightpurpleTeamRole);
    } else if (args[0] == "106") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${lightpurpleTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(lightpurpleTeamRole);
    } else if (args[0] == "107") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${lightpinkTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(lightpinkTeamRole);
    } else if (args[0] == "108") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${lightbrickyellowTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(lightbrickyellowTeamRole);
    } else if (args[0] == "109") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${warmyellowishorangeTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(warmyellowishorangeTeamRole);
    } else if (args[0] == "110") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${coolyellowTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(coolyellowTeamRole);
    } else if (args[0] == "111") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${doveblueTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(doveblueTeamRole);
    } else if (args[0] == "112") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${mediumlilacTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(mediumlilacTeamRole);
    } else if (args[0] == "113") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${slimegreenTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(slimegreenTeamRole);
    } else if (args[0] == "114") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${smokygreyTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(smokygreyTeamRole);
    } else if (args[0] == "115") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${darkblueTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(darkblueTeamRole);
    } else if (args[0] == "116") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${parsleygreenTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(parsleygreenTeamRole);
    } else if (args[0] == "117") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${steelblueTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(steelblueTeamRole);
    } else if (args[0] == "118") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${stormblueTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(stormblueTeamRole);
    } else if (args[0] == "119") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${lapisTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(lapisTeamRole);
    } else if (args[0] == "120") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${darkindigoTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(darkindigoTeamRole);
    } else if (args[0] == "121") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${seagreenTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(seagreenTeamRole);
    } else if (args[0] == "122") {
      console.log(consolelogmsg);
      message.channel.send(`
      ${rmvdcolormsg}${shamrockTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(shamrockTeamRole);
    } else if (args[0] == "123") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${fossilTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(fossilTeamRole);
    } else if (args[0] == "124") {
      console.log(consolelogmsg);
      message.channel.send(`
      ${rmvdcolormsg}${mulberryTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(mulberryTeamRole);
    } else if (args[0] == "125") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${forestgreenTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(forestgreenTeamRole);
    } else if (args[0] == "126") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${cadetblueTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(cadetblueTeamRole);
    } else if (args[0] == "127") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${electricblueTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(electricblueTeamRole);
    } else if (args[0] == "128") {
      console.log(consolelogmsg);
      message.channel.send(`
      ${rmvdcolormsg}${eggplantTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(eggplantTeamRole);
    } else if (args[0] == "129") {
      console.log(consolelogmsg);
      message.channel.send(`
      ${rmvdcolormsg}${mossTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(mosssTeamRole);
    } else if (args[0] == "130") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${artichokeTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(artichokeTeamRole);
    } else if (args[0] == "131") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${sagegreenTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(sagegreenTeamRole);
    } else if (args[0] == "132") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${ghostgreyTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(ghostgreyTeamRole);
    } else if (args[0] == "133") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${plumTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(plumTeamRole);
    } else if (args[0] == "134") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${olivineTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(olivineTeamRole);
    } else if (args[0] == "135") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${laurelgreenTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(laurelgreenTeamRole);
    } else if (args[0] == "136") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${quillgreyTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(quillgreyTeamRole);
    } else if (args[0] == "137") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${crimsonTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(crimsonTeamRole);
    } else if (args[0] == "138") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${mintTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(mintTeamRole);
    } else if (args[0] == "139") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${babyblueTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(babyblueTeamRole);
    } else if (args[0] == "140") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${carnationpinkTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(carnationpinkeamRole);
    } else if (args[0] == "141") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${persimmonTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(persimmonTeamRole);
    } else if (args[0] == "142") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${maroonTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(maroonTeamRole);
    } else if (args[0] == "143") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${daisyorangeTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(daisyorangeTeamRole);
    } else if (args[0] == "144") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${pearlTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(pearlTeamRole);
    } else if (args[0] == "145") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${fogTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(fogTeamRole);
    } else if (args[0] == "146") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${salmonTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(salmonTeamRole);
    } else if (args[0] == "147") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${terracottaTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(terracottaTeamRole);
    } else if (args[0] == "148") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${cocoaTeamRole}`
      );
      await message.guild.members.cache.
        get(user.id)
        .roles.remove(cocoaTeamRole);
    } else if (args[0] == "149") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${wheatTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(wheatTeamRole);
    } else if (args[0] == "150") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${buttermilkTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(buttermilkTeamRole);
    } else if (args[0] == "151") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${mauveTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(mauveTeamRole);
    } else if (args[0] == "152") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${sunriseTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(sunriseTeamRole);
    } else if (args[0] == "153") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${tawnyTeamRole}`
      );
      await message.guild.members.cache.
        get(user.id).
        roles.remove(tawnyTeamRole);
    } else if (args[0] == "154") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${cashmereTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(cashmereTeamRole);
    } else if (args[0] == "155") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${khakiTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(khakiTeamRole);
    } else if (args[0] == "156") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${lilywhiteTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(lilywhiteTeamRole);
    } else if (args[0] == "157") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${seashellTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(seashellTeamRole);
    } else if (args[0] == "158") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${burgundyTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(burgundyTeamRole);
    } else if (args[0] == "159") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${corkTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(corkTeamRole);
    } else if (args[0] == "160") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${burlapTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(burlapTeamRole);
    } else if (args[0] == "161") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${beigeTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(beigeTeamRole);
    } else if (args[0] == "162") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${oysterTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(oysterTeamRole);
    } else if (args[0] == "163") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${pineconeTeamRole}`);
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(pineconeTeamRole);
    } else if (args[0] == "164") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${fawnbrownTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(fawnbrownTeamRole);
    } else if (args[0] == "165") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${hurricanegreyTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(hurricanegreyTeamRole);
    } else if (args[0] == "166") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${cloudygreyTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(cloudygreyTeamRole);
    } else if (args[0] == "167") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${linenTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(linenTeamRole);
    } else if (args[0] == "168") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${copperTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(copperTeamRole);
    } else if (args[0] == "169") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${dirtbrownTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(dirtbrownTeamRole);
    } else if (args[0] == "170") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${bronzeTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(bronzeTeamRole);
    } else if (args[0] == "171") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${flintTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(flintTeamRole);
    } else if (args[0] == "172") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${darktaupeTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(darktaupeTeamRole);
    } else if (args[0] == "173") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${burntsiennaTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(burntsiennaTeamRole);
    } else if (args[0] == "174") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${institutionalwhiteTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(institutionalwhiteTeamRole);
    } else if (args[0] == "175") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${midgrayTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(midgrayTeamRole);
    } else if (args[0] == "176") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${reallyblackTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(reallyblackTeamRole);
    } else if (args[0] == "177") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${reallyredTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(reallyredTeamRole);
    } else if (args[0] == "178") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${deeporangeTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(deeporangeTeamRole);
    } else if (args[0] == "179") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${alderTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(alderTeamRole);
    } else if (args[0] == "180") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${dustyroseTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(dustyroseTeamRole);
    } else if (args[0] == "181") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${oliveTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(oliveTeamRole);
    } else if (args[0] == "182") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${newyellerTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(newyellerTeamRole);
    } else if (args[0] == "183") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${reallyblueTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(reallyblueTeamRole);
    } else if (args[0] == "184") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${navyblueTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(navyblueTeamRole);
    } else if (args[0] == "185") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${deepblueTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(deepblueTeamRole);
    } else if (args[0] == "186") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${cyanTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(cyanTeamRole);
    } else if (args[0] == "187") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${cgabrownTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(cgabrownTeamRole);
    } else if (args[0] == "188") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${magentaTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(magentaTeamRole);
    } else if (args[0] == "189") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${pinkTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(pinkTeamRole);
    } else if (args[0] == "190") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${deeporangeTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(deeporangeTeamRole);
    } else if (args[0] == "191") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${tealTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(tealTeamRole);
    } else if (args[0] == "192") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${toothpasteTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(toothpasteTeamRole);
    } else if (args[0] == "193") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${limegreenTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(limegreenTeamRole);
    } else if (args[0] == "194") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${camoTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(camoTeamRole);
    } else if (args[0] == "195") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${grimeTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(grimeTeamRole);
    } else if (args[0] == "196") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${lavenderTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(lavenderTeamRole);
    } else if (args[0] == "197") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${pastellightblueTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(pastellightblueTeamRole);
    } else if (args[0] == "198") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${pastelorangeTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(pastelorangeTeamRole);
    } else if (args[0] == "199") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${pastelvioletTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(pastelvioletTeamRole);
    } else if (args[0] == "200") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${pastelbluegreenTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(pastelbluegreenTeamRole);
    } else if (args[0] == "201") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${pastelgreenTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(pastelgreenTeamRole);
    } else if (args[0] == "202") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${pastelyellowTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(pastelyellowTeamRole);
    } else if (args[0] == "203") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${pastelbrownTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(pastelbrownTeamRole);
    } else if (args[0] == "204") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${royalpurpleTeamRole}`
      );
      await message.guild.members.cache
        .get(user.id)
        .roles.remove(royalpurpleTeamRole);
    } else if (args[0] == "205") {
      console.log(consolelogmsg);
      message.channel.send(
        `${rmvdcolormsg}${hotpinkTeamRole}`
      );
      await message.guild.members.cache.get(user.id).roles.remove(hotpinkTeamRole);
    } else
      return message.channel.send(
        `That's not a valid color! Maybe try ${randomcolor}?`
      );
  },
};
