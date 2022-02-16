const config = require("../Other/config")

module.exports = {
    name: "color",
    aliases: config.aliases.aliasescolor,
    cooldown: config.cooldown.cooldowncolor,
    permissions: config.permissions.permissioncolor,
    description: "Color command",
    execute(message, args, cmd, client, Discord) {
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
            return message.channel.send("What color would you like to have?")
        }

        const randomcolorid = colorroleidlist[Math.floor(Math.random() * colorroleidlist.length)];
        const randomcolor = `<@&${randomcolorid}>`

        const logmsg = `${message.author.username} now has a new rolecolor: || ${args[0]} ||`
        const errmsg = `I cannot find that color. Maybe try ${randomcolor}?`
        const user = message.author;

        message.guild.members.cache
            .get(user.id)
            .roles.remove(whiteTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(greyTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(lightyellowTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(brickyellowTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(lightgreenTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(lightreddishvioletTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(pastelblueTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(lightorangebrownTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(nougatTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(brightredTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(medreddishvioletTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(brightblueTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(brightyellowTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(earthorangeTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(blackTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(darkgreyTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(darkgreenTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(mediumgreenTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(ligyellowishorangeTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(brightgreenTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(darkorangeTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(lightbluishvioletTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(transparentTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(trredTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(trlgblueTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(trblueTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(tryellowTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(lightblueTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(trflureddishorangeTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(trgreenTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(trflugreenTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(phosphwhiteTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(lightredTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(mediumredTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(mediumblueTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(lightgreyTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(brightvioletTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(bryellowishorangeTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(brightorangeTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(brightbluishgreenTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(earthyellowTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(brightbluishvioletTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(trbrownTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(mediumbluishvioletTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(trmedireddishvioletTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(medyellowishgreenTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(medbluishgreenTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(lightbluishgreenTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(bryellowishgreenTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(ligyellowishgreenTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(medyellowishorangeTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(brreddishorangeTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(brightreddishvioletTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(lightorangeTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(trbrightbluishvioletTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(goldTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(darknougatTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(silverTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(neonorangeTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(neongreenTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(sandblueTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(sandvioletTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(mediumorangeTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(sandyellowTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(earthblueTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(earthgreenTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(trflublueTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(sandbluemetallicTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(sandvioletmetallicTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(sandyellowmetallicTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(darkgreymetallicTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(blackmetallicTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(lightgreymetallicTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(sandgreenTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(sandredTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(darkredTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(trfluyellowTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(trfluredTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(gunmetallicTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(redflipflopTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(yellowflipflopTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(silverflipflopTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(curryTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(fireyellowTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(flameyellowishorangeTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(reddishbrownTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(flamereddishorangeTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(mediumstonegreyTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(royalblueTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(darkroyalblueTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(brightreddishlilacTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(darkstonegreyTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(lemonmetallicTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(lightstonegreyTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(darkcurryTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(fadedgreenTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(turquoiseTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(lightroyalblueTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(mediumroyalblueTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(rustTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(brownTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(reddishlilacTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(lilacTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(lightlilacTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(brightpurpleTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(lightpurpleTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(lightpinkTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(lightbrickyellowTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(warmyellowishorangeTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(coolyellowTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(doveblueTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(mediumlilacTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(slimegreenTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(smokygreyTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(darkblueTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(parsleygreenTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(steelblueTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(stormblueTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(lapisTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(darkindigoTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(seagreenTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(shamrockTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(fossilTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(mulberryTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(forestgreenTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(cadetblueTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(electricblueTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(eggplantTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(mossTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(artichokeTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(sagegreenTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(ghostgreyTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(lilacTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(plumTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(olivineTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(laurelgreenTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(quillgreyTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(crimsonTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(mintTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(babyblueTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(carnationpinkTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(persimmonTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(maroonTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(daisyorangeTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(pearlTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(fogTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(salmonTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(terracottaTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(cocoaTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(wheatTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(buttermilkTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(mauveTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(sunriseTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(tawnyTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(cashmereTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(khakiTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(lilywhiteTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(seashellTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(burgundyTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(corkTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(burlapTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(beigeTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(oysterTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(pineconeTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(fawnbrownTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(hurricanegreyTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(cloudygreyTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(linenTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(copperTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(dirtbrownTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(bronzeTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(flintTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(darktaupeTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(burntsiennaTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(institutionalwhiteTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(midgrayTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(reallyblackTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(reallyredTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(deeporangeTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(alderTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(dustyroseTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(oliveTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(newyellerTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(reallyblueTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(navyblueTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(deepblueTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(cyanTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(cgabrownTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(magentaTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(pinkTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(deeporangeTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(tealTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(toothpasteTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(limegreenTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(camoTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(grimeTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(lavenderTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(pastellightblueTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(pastelorangeTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(pastelvioletTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(pastelbluegreenTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(pastelgreenTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(pastelyellowTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(pastelbrownTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(royalpurpleTeamRole);
        message.guild.members.cache
            .get(user.id)
            .roles.remove(hotpinkTeamRole);

        if (args[0] === "1") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "2") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "3") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "4") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "5") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "6") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "7") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "8") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "9") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "10") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "11") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "12") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "13") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "14") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "15") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "16") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "17") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "18") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "19") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "20") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "21") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "22") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "23") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "24") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "25") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "26") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "27") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "28") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "29") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "30") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "31") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "32") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "33") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "34") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "35") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "36") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "37") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "38") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "39") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "40") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "41") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "42") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "43") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "44") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "45") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "46") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "47") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "48") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "49") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "50") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "51") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "52") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "53") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "54") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "55") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "56") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "57") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "58") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "59") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "60") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "61") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "62") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "63") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "64") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "65") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "66") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "67") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "68") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "69") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "70") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "71") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "72") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "73") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "74") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "75") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "76") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "77") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "78") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "79") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "80") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "81") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "82") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "83") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "84") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "85") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "86") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "87") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "88") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "89") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "90") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "91") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "92") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "93") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "94") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "95") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "96") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "97") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "98") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "99") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "100") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "101") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "102") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "103") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "104") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "105") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "106") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "107") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "108") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "109") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "110") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "111") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "112") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "113") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "114") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "115") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "116") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "117") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "118") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "119") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "120") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "121") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "122") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "123") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "124") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "125") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "126") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "127") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "128") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "129") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "130") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "131") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "132") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "133") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "134") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "135") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "136") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "137") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "138") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "139") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "140") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "141") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "142") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "143") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "144") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "145") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "146") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "147") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "148") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "149") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "150") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "151") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "152") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "153") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "154") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "155") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "156") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "157") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "158") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "159") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "160") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "161") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "162") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "163") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "164") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "165") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "166") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "167") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "168") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "169") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "170") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "171") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "172") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "173") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "174") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "175") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "176") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "177") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "178") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "179") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "180") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "181") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "182") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "183") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "184") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "185") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "186") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "187") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "188") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "189") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "190") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "191") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "192") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "193") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "194") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "195") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "196") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "197") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "198") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "199") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "200") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "201") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "202") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "203") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "204") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else if (args[0] === "205") {
            message.guild.members.cache
            .get(user.id)
            .roles.add(whiteTeamRole);
            message.channel.send(errmsg);
            console.log(logmsg);
        } else return message.channel.send(config.commandcolor.commandcolorerrmsg);
    },
};