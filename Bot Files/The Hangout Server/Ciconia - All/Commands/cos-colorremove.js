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
    const deepblueTeamRole = message.guild.role.cache.find(
      (role) => role.id === "936995794471489587"
    )
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

    if (args[0] == coloridlist[1]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${whiteTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(whiteTeamRole);
    } else if (args[0] == coloridlist[2]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${greyTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(greyTeamRole);
    } else if (args[0] == coloridlist[3]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${lightyellowTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(lightyellowTeamRole);
    } else if (args[0] == coloridlist[4]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${brickyellowTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(brickyellowTeamRole);
    } else if (args[0] == coloridlist[5]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${lightgreenTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(lightgreenTeamRole);
    } else if (args[0] == coloridlist[6]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${lightreddishvioletTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(lightreddishvioletTeamRole);
    } else if (args[0] == coloridlist[7]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${pastelblueTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(pastelblueTeamRole);
    } else if (args[0] == coloridlist[8]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${lightorangebrownTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(lightorangebrownTeamRole);
    } else if (args[0] == coloridlist[9]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${nougat}`);
      await message.guild.members.cache.get(user.id).roles.remove(nougatTeamRole);
    } else if (args[0] == coloridlist[10]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${brightredTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(brightredTeamRole);
    } else if (args[0] == coloridlist[11]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${medreddishvioletTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(medreddishvioletTeamRole);
    } else if (args[0] == coloridlist[12]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${brightblueTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(brightblueTeamRole);
    } else if (args[0] == coloridlist[13]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${brightyellowTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(brightyellowTeamRole);
    } else if (args[0] == coloridlist[14]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${earthorangeTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(earthorangeTeamRole);
    } else if (args[0] == coloridlist[15]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${blackTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(blackTeamRole);
    } else if (args[0] == coloridlist[16]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${darkgreyTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(darkgreyTeamRole);
    } else if (args[0] == coloridlist[17]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${darkgreenTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(darkgreenTeamRole);
    } else if (args[0] == coloridlist[18]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${mediumgreenTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(mediumgreenTeamRole);
    } else if (args[0] == coloridlist[19]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${ligyellowishorangeTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(ligyellowishorangeTeamRole);
    } else if (args[0] == coloridlist[20]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${brightgreenTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(brightgreenTeamRole);
    } else if (args[0] == coloridlist[21]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${darkorangeTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(darkorangeTeamRole);
    } else if (args[0] == coloridlist[22]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${lightbluishvioletTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(lightbluishvioletTeamRole);
    } else if (args[0] == coloridlist[23]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${transparentTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(transparentTeamRole);
    } else if (args[0] == coloridlist[24]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${trredTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(trredTeamRole);
    } else if (args[0] == coloridlist[25]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${trlgblueTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(trlgblueTeamRole);
    } else if (args[0] == coloridlist[26]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${trblueTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(trblueTeamRole);
    } else if (args[0] == coloridlist[27]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${tryellowTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(tryellowTeamRole);
    } else if (args[0] == coloridlist[28]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${lightblueTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(lightblueTeamRole);
    } else if (args[0] == coloridlist[29]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${trfluereddishorangeTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(trflureddishorangeTeamRole);
    } else if (args[0] == coloridlist[30]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${trgreenTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(trgreenTeamRole);
    } else if (args[0] == coloridlist[31]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${trflugreenTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(trflugreenTeamRole);
    } else if (args[0] == coloridlist[32]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${phosphwhiteTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(phosphwhiteTeamRole);
    } else if (args[0] == coloridlist[33]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${lightredTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(lightredTeamRole);
    } else if (args[0] == coloridlist[34]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${mediumredTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(mediumredTeamRole);
    } else if (args[0] == coloridlist[35]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${mediumblueTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(mediumblueTeamRole);
    } else if (args[0] == coloridlist[36]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${lightgreyTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(lightgreyTeamRole);
    } else if (args[0] == coloridlist[37]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${brightvioletTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(brightvioletTeamRole);
    } else if (args[0] == coloridlist[38]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${bryellowishorangeTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(bryellowishorangeTeamRole);
    } else if (args[0] == coloridlist[39]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${brightorangeTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(brightorangeTeamRole);
    } else if (args[0] == coloridlist[40]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${brightbluishgreenTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(brightbluishgreenTeamRole);
    } else if (args[0] == coloridlist[41]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${earthyellowTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(earthyellowTeamRole);
    } else if (args[0] == coloridlist[42]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${brightbluishvioletTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(brightbluishvioletTeamRole);
    } else if (args[0] == coloridlist[43]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${trbrownTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(trbrownTeamRole);
    } else if (args[0] == coloridlist[44]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${mediumbluishvioletTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(mediumbluishvioletTeamRole);
    } else if (args[0] == coloridlist[45]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${trmedireddishvioletTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(trmedireddishvioletTeamRole);
    } else if (args[0] == coloridlist[46]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${medyellowishgreenTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(medyellowishgreenTeamRole);
    } else if (args[0] == coloridlist[47]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${medbluishgreenTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(medbluishgreenTeamRole);
    } else if (args[0] == coloridlist[48]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${lightbluishgreenTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(lightbluishgreenTeamRole);
    } else if (args[0] == coloridlist[49]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${bryellowishgreenTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(bryellowishgreenTeamRole);
    } else if (args[0] == coloridlist[50]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${ligyellowishgreenTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(ligyellowishgreenTeamRole);
    } else if (args[0] == coloridlist[51]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${medyellowishorangeTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(medyellowishorangeTeamRole);
    } else if (args[0] == coloridlist[52]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${brreddishorangeTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(brreddishorangeTeamRole);
    } else if (args[0] == coloridlist[53]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${brightreddishvioletTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(brightreddishvioletTeamRole);
    } else if (args[0] == coloridlist[54]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${lightorangeTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(lightorangeTeamRole);
    } else if (args[0] == coloridlist[55]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${trbrightbluishvioletTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(trbrightbluishvioletTeamRole);
    } else if (args[0] == coloridlist[56]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${goldTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(goldTeamRole);
    } else if (args[0] == coloridlist[57]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${darknougatTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(darknougatTeamRole);
    } else if (args[0] == coloridlist[58]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${silverTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(silverTeamRole);
    } else if (args[0] == coloridlist[59]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${neonorangeTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(neonorangeTeamRole);
    } else if (args[0] == coloridlist[60]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${neongreenTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(neongreenTeamRole);
    } else if (args[0] == coloridlist[61]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${sandblueTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(sandblueTeamRole);
    } else if (args[0] == coloridlist[62]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${sandvioletTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(sandvioletTeamRole);
    } else if (args[0] == coloridlist[63]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${mediumorangeTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(mediumoragneTeamRole);
    } else if (args[0] == coloridlist[64]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${sandyellowTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(sandyellowTeamRole);
    } else if (args[0] == coloridlist[65]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${earthblueTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(earthblueTeamRole);
    } else if (args[0] == coloridlist[66]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${earthgreenTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(earthgreenTeamRole);
    } else if (args[0] == coloridlist[67]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${trflublueTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(trflublueTeamRole);
    } else if (args[0] == coloridlist[68]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${sandbluemetallicTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(sandbluemetallicTeamRole);
    } else if (args[0] == coloridlist[69]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${sandvioletmetallicTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(sandvioletmetallicTeamRole);
    } else if (args[0] == coloridlist[70]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${sandyellowmetallicTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(sandyellowmetallicTeamRole);
    } else if (args[0] == coloridlist[71]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${darkgreymetallicTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(darkgreymetallicTeamRole);
    } else if (args[0] == coloridlist[72]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${blackmetallicTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(blackmetallicTeamRole);
    } else if (args[0] == coloridlist[73]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${lightgreymetallicTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(lightgreymetallicTeamRole);
    } else if (args[0] == coloridlist[74]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${sandgreenTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(sandgreenTeamRole);
    } else if (args[0] == coloridlist[75]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${sandredTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(sandredTeamRole);
    } else if (args[0] == coloridlist[76]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${darkredTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(darkredTeamRole);
    } else if (args[0] == coloridlist[77]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${trfluyellowTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(trfluyellowTeamRole);
    } else if (args[0] == coloridlist[78]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${trflueredTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(trfluredTeamRole);
    } else if (args[0] == coloridlist[79]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${gunmetallicTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(gunmetallicTeamRole);
    } else if (args[0] == coloridlist[80]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${redflipflopTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(redflipflopTeamRole);
    } else if (args[0] == coloridlist[81]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${yellowflipflopTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(yellowflipflopTeamRole);
    } else if (args[0] == coloridlist[82]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${silverflipflopTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(silverflipflopTeamRole);
    } else if (args[0] == coloridlist[83]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${curryTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(curryTeamRole);
    } else if (args[0] == coloridlist[84]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${fireyellowTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(fireyellowTeamRole);
    } else if (args[0] == coloridlist[85]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${flameyellowishorangeTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(flameyellowishorangeTeamRole);
    } else if (args[0] == coloridlist[86]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${reddishbrownTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(reddishbrownTeamRole);
    } else if (args[0] == coloridlist[87]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${flamereddishorangeTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(flamereddishorangeTeamRole);
    } else if (args[0] == coloridlist[88]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${mediumstonegreyTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(mediumstonegreyTeamRole);
    } else if (args[0] == coloridlist[89]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${royalblueTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(royalblueTeamRole);
    } else if (args[0] == coloridlist[90]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${darkroyalblueTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(darkroyalblueTeamRole);
    } else if (args[0] == coloridlist[91]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${brightreddishlilacTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(brightreddishlilacTeamRole);
    } else if (args[0] == coloridlist[92]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${darkstonegreyTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(darkstonegreyTeamRole);
    } else if (args[0] == coloridlist[93]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${lemonmetallicTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(lemonmetallicTeamRole);
    } else if (args[0] == coloridlist[94]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${lightstonegreyTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(lightstonegreyTeamRole);
    } else if (args[0] == coloridlist[95]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${darkcurryTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(darkcurryTeamRole);
    } else if (args[0] == coloridlist[96]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${fadedgreenTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(fadedgreenTeamRole);
    } else if (args[0] == coloridlist[97]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${turquoiseTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(turquoiseTeamRole);
    } else if (args[0] == coloridlist[98]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${lightroyalblueTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(lightroyalblueTeamRole);
    } else if (args[0] == coloridlist[99]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${mediumroyalblueTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(mediumroyalblueTeamRole);
    } else if (args[0] == coloridlist[100]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${rustTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(rustTeamRole);
    } else if (args[0] == coloridlist[101]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${brownTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(brownTeamRole);
    } else if (args[0] == coloridlist[102]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${reddishlilacTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(reddishlilacTeamRole);
    } else if (args[0] == coloridlist[103]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${lilacTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(lilacTeamRole);
    } else if (args[0] == coloridlist[104]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${lightlilacTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(lightlilacTeamRole);
    } else if (args[0] == coloridlist[105]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${brightpurpleTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(brightpurpleTeamRole);
    } else if (args[0] == coloridlist[106]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${lightpurpleTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(lightpurpleTeamRole);
    } else if (args[0] == coloridlist[107]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${lightpinkTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(lightpinkTeamRole);
    } else if (args[0] == coloridlist[108]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${lightbrickyellowTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(lightbrickyellowTeamRole);
    } else if (args[0] == coloridlist[109]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${warmyellowishorangeTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(warmyellowishorangeTeamRole);
    } else if (args[0] == coloridlist[110]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${coolyellowTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(coolyellowTeamRole);
    } else if (args[0] == coloridlist[111]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${doveblueTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(doveblueTeamRole);
    } else if (args[0] == coloridlist[112]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${mediumlilacTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(mediumlilacTeamRole);
    } else if (args[0] == coloridlist[113]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${slimegreenTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(slimegreenTeamRole);
    } else if (args[0] == coloridlist[114]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${smokygreyTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(smokygreyTeamRole);
    } else if (args[0] == coloridlist[115]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${darkblueTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(darkblueTeamRole);
    } else if (args[0] == coloridlist[116]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${parsleygreenTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(parsleygreenTeamRole);
    } else if (args[0] == coloridlist[117]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${steelblueTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(steelblueTeamRole);
    } else if (args[0] == coloridlist[118]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${stormblueTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(stormblueTeamRole);
    } else if (args[0] == coloridlist[119]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${lapisTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(lapisTeamRole);
    } else if (args[0] == coloridlist[120]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${darkindigoTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(darkindigoTeamRole);
    } else if (args[0] == coloridlist[121]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${seagreenTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(seagreenTeamRole);
    } else if (args[0] == coloridlist[122]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${shamrockTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(shamrockTeamRole);
    } else if (args[0] == coloridlist[123]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${fossilTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(fossilTeamRole);
    } else if (args[0] == coloridlist[124]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${mulberryTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(mulberryTeamRole);
    } else if (args[0] == coloridlist[125]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${forestgreenTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(forestgreenTeamRole);
    } else if (args[0] == coloridlist[126]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${cadetblueTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(cadetblueTeamRole);
    } else if (args[0] == coloridlist[127]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${electricblueTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(electricblueTeamRole);
    } else if (args[0] == coloridlist[128]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${eggplantTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(eggplantTeamRole);
    } else if (args[0] == coloridlist[129]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${mossTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(mosssTeamRole);
    } else if (args[0] == coloridlist[130]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${artichokeTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(artichokeTeamRole);
    } else if (args[0] == coloridlist[131]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${sagegreenTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(sagegreenTeamRole);
    } else if (args[0] == coloridlist[132]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${ghostgreyTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(ghostgreyTeamRole);
    } else if (args[0] == coloridlist[133]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${plumTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(plumTeamRole);
    } else if (args[0] == coloridlist[134]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${olivineTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(olivineTeamRole);
    } else if (args[0] == coloridlist[135]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${laurelgreenTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(laurelgreenTeamRole);
    } else if (args[0] == coloridlist[136]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${quillgreyTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(quillgreyTeamRole);
    } else if (args[0] == coloridlist[137]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${crimsonTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(crimsonTeamRole);
    } else if (args[0] == coloridlist[138]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${mintTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(mintTeamRole);
    } else if (args[0] == coloridlist[139]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${babyblueTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(babyblueTeamRole);
    } else if (args[0] == coloridlist[140]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${carnationpinkTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(carnationpinkeamRole);
    } else if (args[0] == coloridlist[141]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${persimmonTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(persimmonTeamRole);
    } else if (args[0] == coloridlist[142]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${maroonTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(maroonTeamRole);
    } else if (args[0] == coloridlist[143]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${daisyorangeTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(daisyorangeTeamRole);
    } else if (args[0] == coloridlist[144]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${pearlTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(pearlTeamRole);
    } else if (args[0] == coloridlist[145]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${fogTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(fogTeamRole);
    } else if (args[0] == coloridlist[146]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${salmonTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(salmonTeamRole);
    } else if (args[0] == coloridlist[147]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${terracottaTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(terracottaTeamRole);
    } else if (args[0] == coloridlist[148]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${cocoaTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(cocoaTeamRole);
    } else if (args[0] == coloridlist[149]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${wheatTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(wheatTeamRole);
    } else if (args[0] == coloridlist[150]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${buttermilkTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(buttermilkTeamRole);
    } else if (args[0] == coloridlist[151]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${mauveTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(mauveTeamRole);
    } else if (args[0] == coloridlist[152]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${sunriseTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(sunriseTeamRole);
    } else if (args[0] == coloridlist[153]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${tawnyTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(tawnyTeamRole);
    } else if (args[0] == coloridlist[154]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${cashmereTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(cashmereTeamRole);
    } else if (args[0] == coloridlist[155]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${khakiTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(khakiTeamRole);
    } else if (args[0] == coloridlist[156]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${lilywhiteTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(lilywhiteTeamRole);
    } else if (args[0] == coloridlist[157]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${seashellTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(seashellTeamRole);
    } else if (args[0] == coloridlist[158]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${burgundyTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(burgundyTeamRole);
    } else if (args[0] == coloridlist[159]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${corkTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(corkTeamRole);
    } else if (args[0] == coloridlist[160]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${burlapTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(burlapTeamRole);
    } else if (args[0] == coloridlist[161]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${beigeTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(beigeTeamRole);
    } else if (args[0] == coloridlist[162]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${oysterTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(oysterTeamRole);
    } else if (args[0] == coloridlist[163]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${pineconeTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(pineconeTeamRole);
    } else if (args[0] == coloridlist[164]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${fawnbrownTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(fawnbrownTeamRole);
    } else if (args[0] == coloridlist[165]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${hurricanegreyTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(hurricanegreyTeamRole);
    } else if (args[0] == coloridlist[166]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${cloudygreyTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(cloudygreyTeamRole);
    } else if (args[0] == coloridlist[167]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${linenTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(linenTeamRole);
    } else if (args[0] == coloridlist[168]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${copperTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(copperTeamRole);
    } else if (args[0] == coloridlist[169]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${dirtbrownTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(dirtbrownTeamRole);
    } else if (args[0] == coloridlist[170]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${bronzeTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(bronzeTeamRole);
    } else if (args[0] == coloridlist[171]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${flintTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(flintTeamRole);
    } else if (args[0] == coloridlist[172]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${darktaupeTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(darktaupeTeamRole);
    } else if (args[0] == coloridlist[173]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${burntsiennaTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(burntsiennaTeamRole);
    } else if (args[0] == coloridlist[174]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${institutionalwhiteTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(institutionalwhiteTeamRole);
    } else if (args[0] == coloridlist[175]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${midgrayTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(midgrayTeamRole);
    } else if (args[0] == coloridlist[176]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${reallyblackTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(reallyblackTeamRole);
    } else if (args[0] == coloridlist[177]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${reallyredTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(reallyredTeamRole);
    } else if (args[0] == coloridlist[178]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${deeporangeTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(deeporangeTeamRole);
    } else if (args[0] == coloridlist[179]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${alderTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(alderTeamRole);
    } else if (args[0] == coloridlist[180]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${dustyroseTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(dustyroseTeamRole);
    } else if (args[0] == coloridlist[181]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${oliveTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(oliveTeamRole);
    } else if (args[0] == coloridlist[182]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${newyellerTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(newyellerTeamRole);
    } else if (args[0] == coloridlist[183]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${reallyblueTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(reallyblueTeamRole);
    } else if (args[0] == coloridlist[184]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${navyblueTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(navyblueTeamRole);
    } else if (args[0] == coloridlist[185]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${deepblueTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(deepblueTeamRole);
    } else if (args[0] == coloridlist[186]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${cyanTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(cyanTeamRole);
    } else if (args[0] == coloridlist[187]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${cgabrownTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(cgabrownTeamRole);
    } else if (args[0] == coloridlist[188]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${magentaTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(magentaTeamRole);
    } else if (args[0] == coloridlist[189]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${pinkTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(pinkTeamRole);
    } else if (args[0] == coloridlist[190]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${deeporangeTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(deeporangeTeamRole);
    } else if (args[0] == coloridlist[191]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${tealTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(tealTeamRole);
    } else if (args[0] == coloridlist[192]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${toothpasteTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(toothpasteTeamRole);
    } else if (args[0] == coloridlist[193]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${limegreenTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(limegreenTeamRole);
    } else if (args[0] == coloridlist[194]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${camoTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(camoTeamRole);
    } else if (args[0] == coloridlist[195]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${grimeTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(grimeTeamRole);
    } else if (args[0] == coloridlist[196]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${lavenderTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(lavenderTeamRole);
    } else if (args[0] == coloridlist[197]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${pastellightblueTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(pastellightblueTeamRole);
    } else if (args[0] == coloridlist[198]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${pastelorangeTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(pastelorangeTeamRole);
    } else if (args[0] == coloridlist[199]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${pastelvioletTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(pastelvioletTeamRole);
    } else if (args[0] == coloridlist[200]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${pastelbluegreenTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(pastelbluegreenTeamRole);
    } else if (args[0] == coloridlist[201]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${pastelgreenTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(pastelgreenTeamRole);
    } else if (args[0] == coloridlist[202]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${pastelyellowTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(pastelyellowTeamRole);
    } else if (args[0] == coloridlist[203]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${pastelbrownTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(pastelbrownTeamRole);
    } else if (args[0] == coloridlist[204]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${royalpurpleTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(royalpurpleTeamRole);
    } else if (args[0] == coloridlist[205]) {
      console.log(
        `${message.author.username} now has a new role color: ${args[0]}.`
      );
      message.channel.send(`You have removed your color: ${hotpinkTeamRole}`);
      await message.guild.members.cache.get(user.id).roles.remove(hotpinkTeamRole);
    } else return message.channel.send(`That's not a valid color!`)
  },
};
