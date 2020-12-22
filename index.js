const Discord = require("discord.js");
const intent_list = new Discord.Intents(["GUILD_MEMBERS", "GUILD_MESSAGES", "GUILDS", "GUILD_INVITES"])
const client = new Discord.Client({ ws: { intents: intent_list } })
const token = "Nzg1MTQ1Mjg2NDIyMTY3NTUy.X8zlhw._8RU9r3VS9R3IdHQPyd7dIpck7Y"
const welcomeChannelName = "웰컴" 
const byeChannelName = "웰컴" 
const welcomeChannelComment = "어서오세요 :smile:" 
const byeChannelComment = "안녕히가세요 ㅠㅠ :cry:" 
const roleName = "" 

client.on("ready", () => {
  console.log("켰다.")
  client.user.setPresence({ activity: { name: "!help를 치거라." }, status: "online" })
})

client.on("guildMemberAdd", (member) => {
  const guild = member.guild
  const newUser = member.user
  const welcomeChannel = guild.channels.cache.find((channel) => channel.name == welcomeChannelName)

  welcomeChannel.send(`<@${newUser.id}> ${welcomeChannelComment}\n`) // 올바른 채널명을 기입하지 않았다면, Cannot read property 'send' of undefined; 오류가 발생합니다.
  member.roles.add(guild.roles.cache.find((r) => r.name === roleName).id)
})

client.on("guildMemberRemove", (member) => {
  const guild = member.guild
  const deleteUser = member.user
  const byeChannel = guild.channels.cache.find((channel) => channel.name == byeChannelName)

  byeChannel.send(`<@${deleteUser.id}> ${byeChannelComment}\n`)
})

client.on("message", (message) => {
  if (message.author.bot) return

  if (message.content == "!나이" || message.content == '몆살' || message.content == '몆살?' || message.content == '몇살' || message.content == '몇살?' || message.content == '나이?') {
    return message.reply("다섯살이야");
  }
  if (message.content == "!help") {
    const embed = new Discord.MessageEmbed()
      .setTitle("도와줄게")
      .setDescription("`!도움말` 치삼")
      .setColor("A4A4A4")
    message.channel.send(embed);
  }
  if (message.content == '!안녕' || message.content == '!ㅎㅇ' || message.content == '!안뇽' || message.content == '!하이' ) {
    message.channel.send('안녕')
  }
  if (message.content == '!모해?' || message.content == '!뭐해' || message.content == '모해' || message.content == '!뭐하니' || message.content == '!뭐하니?' || message.contents == '!뭐해') {
     message.channel.send('얼불춤함')
  }
  if (message.content == "!조미래") { 
    const embed = new Discord.MessageEmbed()
        .setTitle ("마트다녀요셨어요?")
        .setDescription('음~맛있다')
        .setThumbnail("https://cdn.discordapp.com/attachments/780057300106608641/785716879645868082/Screenshot_216.png")
        .setColor("A4A4A4")
      message.channel.send(embed);
    } else if (message.content == "!도움말") {
      let helpImg = "https://images-ext-1.discordapp.net/external/RyofVqSAVAi0H9-1yK6M8NGy2grU5TWZkLadG-rwqk0/https/i.imgur.com/EZRAPxR.png"
      let commandList = [
        { name: "!조미래", desc: "조미래 존잘 ㅇㅈ?" },
        { name: "!뭐해", desc: "뭐하는거 같음?" },
        { name: "!얼불춤 포럼", desc: "얼불춤 커스텀 맵 레벨 보기" },
        { name: "!전체공지", desc: "dm으로 전체 공지 보내기" },
        {name:  "!봇건의", desc: "봇 에러 또는 추가하고 싶은게 있으면 말해주세요!"},
        {name:  "!귤묵자", desc: "귤"}
      ]
      let commandStr = ""
      let embed = new Discord.MessageEmbed().setAuthor("Help", helpImg).setColor("#186de6").setFooter(`BOT`).setTimestamp()
  
      commandList.forEach((x) => {
        commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`
      })
  
      embed.addField("Commands: ", commandStr)
  
      message.channel.send(embed)
    }
  if (message.content == "!봇건의"){
    return message.reply("봇 에러 또는 추가하고 싶은게 있으면 말해주세요! = https://discord.gg/4QqNp3jxWC") 
  }
 

  if (message.content == '!얼불춤 포럼'){
    return message.reply("얼불춤 포럼 도움말 `(참고) 본 포럼은 얼불춤 비공식 포럼에서 가져온 자료입니다.` 사용법 ```!얼불춤 {곡 이름}``` {작곡가를 제외한 곡이름만 작성해주세요} (예시 `!얼불춤 we could get more machinegun psystyle` (예시2 `!얼불춤 tripple cross` `대문자 제외하고 소문자로 써주세요.` `[ns] 처럼 대괄호나 소괄호 도 작성해주세요`")
  }
  if (message.content == "!얼불춤 we could get more machinegun psystyle") { 
    const embed = new Discord.MessageEmbed()
        .setTitle ("Adofai Custom we could get more machinegun psystyle")
        .setDescription('Artist : `かめりあ(Camellia)`, Mab by: `Appeal` ')
        .setThumbnail("https://cdn.discordapp.com/attachments/785305021575200769/785871667720486962/Screenshot_231.png")
        .setFooter("레벨 :19")
        .setColor("#880E4F")
      message.channel.send(embed);
}
if (message.content == "!얼불춤 tripple cross") { 
  const embed = new Discord.MessageEmbed()
      .setTitle ("Adofai Custom `tripple cross`")
      .setDescription('Artist : `Hyun`, Mab by: `헤르니` ')
      .setThumbnail("https://cdn.discordapp.com/attachments/758650043610824714/786069043936886805/Screenshot_233.png")
      .setFooter("레벨 :18")
      .setColor("#E53935")
    message.channel.send(embed);
}


if (message.content == "!얼불춤 [ns]") { 
  const embed = new Discord.MessageEmbed()
      .setTitle ("Adofai Custom `[ns]`")
      .setDescription('Artist : `かめりあ(Camellia)`, Mab by: Ruren')
      .setThumbnail("https://cdn.discordapp.com/attachments/758650043610824714/786073731029663754/Screenshot_235.png")
      .setFooter("레벨 : 20")
      .setColor("#000000")
    message.channel.send(embed);

}

if (message.content == "!얼불춤 hydra") { 
  const embed = new Discord.MessageEmbed()
      .setTitle ("Adofai Custom `hydra`")
      .setDescription('Artist : `F-777`, Mab by: `XiZnYng`')
      .setThumbnail("https://cdn.discordapp.com/attachments/758650043610824714/786075112537194516/Screenshot_237.png")
      .setFooter("레벨 : 18")
      .setColor("#BF360C")
    message.channel.send(embed);
}

if (message.content == "!얼불춤 etude -storm-") { 
  const embed = new Discord.MessageEmbed()
      .setTitle ("Adofai Custom `etude -Storm-`")
      .setDescription('Artist : `Polymath9`, Mab by : `Ruren`')
      .setThumbnail("https://cdn.discordapp.com/attachments/786235888128360488/786491739132657674/Screenshot_246.png")
      .setFooter("레벨 : 17")
      .setColor("#D84315")
    message.channel.send(embed);
}
if (message.content == "!얼불춤 19ZZ") { 
  const embed = new Discord.MessageEmbed()
      .setTitle ("Adofai Custom `19ZZ`")
      .setDescription('Artist : `Frums` , Mab by : `XiZnYng`')
      .setThumbnail("https://cdn.discordapp.com/attachments/786235888128360488/786492569495535636/Screenshot_254.png")
      .setFooter("레벨 :16")
      .setColor("#E53935")
    message.channel.send(embed);

}

if (message.content == "!얼불춤 8th planet") { 
  const embed = new Discord.MessageEmbed()
      .setTitle ("Adofai Custom 8th planet")
      .setDescription('Artist : `P4Koo`, Mab by : `Bwen`')
      .setThumbnail("https://cdn.discordapp.com/attachments/786235888128360488/786520788366393404/Screenshot_262.png")
      .setFooter("레벨 :14")
      .setColor("#57C00")
    message.channel.send(embed);

}
if (message.content == "!얼불춤 Dog Bite") { 
  const embed = new Discord.MessageEmbed()
      .setTitle ("Adofai Custom Dog Bite")
      .setDescription('Artist : `t+pazolite`, Mab by : `Goyeetroll`')
      .setFooter("레벨 :17")
      .setColor("#F4511E")
    message.channel.send(embed);
}
if(message.content == `!귤묵자`) {
  const number = [
  "붼쿤이 먹다 남은 귤",
  "귤",
  "붼쿤이 먹다 남은 귤",
  "굴",
  "붼쿤이 먹다 남은 귤",
  "귤",
];

const Response = Math.floor(Math.random() * number.length);

message.channel.send(`${number[Response]}`)
}

  let verify = "790562687783665695"

if(message.content.startsWith("/인증")) {
  let member = message.mentions.users.first()
  let _verifyRole = message.guild.roles.cache.find(r => r.id === verify).id
  if(!member) return message.reply("/인증 <유저멘션> 이 올바른 명령어입니다.")
  if(!_verifyRole) return message.reply("존재하지 않는 역할입니다.")
  member.roles.add(_verifyRole).catch((error) => message.reply("오류가 발생했습니다.\n" + error))
  message.reply("해당 유저에게 인증 역할을 지급하였습니다.")
}

if (message.content == "!얼불춤 Shiver") { 
  const embed = new Discord.MessageEmbed()
      .setTitle ("Adofai Custom Shiver")
      .setDescription('Artist : `False Noise`, Mab by : `PLORALD`')
      .setThumbnail("")
      .setFooter("레벨 : 17")
      .setColor("#B71C1C")
    message.channel.send(embed);
}
    

if (message.content.startsWith("!전체공지")) {
  if (checkPermission(message)) return
  if (message.member != null) {
    // 채널에서 공지 쓸 때
    let contents = message.content.slice("!전체공지".length)
    message.member.guild.members.cache.array().forEach((x) => {
      if (x.user.bot) return
      x.user.send(`<@${message.author.id}> ${contents}`)
    })

    return message.reply("공지를 전송했습니다.")
  } else {
    return message.reply("채널에서 실행해주세요.")
  }
}

if (message.content.startsWith("!청소")) {
  if (message.channel.type == "dm") {
    return message.reply("dm에서 사용할 수 없는 명령어 입니다.")
  }

  if (message.channel.type != "dm" && checkPermission(message)) return

  var clearLine = message.content.slice("!청소 ".length)
  var isNum = !isNaN(clearLine)

  if (isNum && (clearLine <= 0 || 100 < clearLine)) {
    message.channel.send("1부터 100까지의 숫자만 입력해주세요.")
    return
  } else if (!isNum) {
    // c @나긋해 3
    if (message.content.split("<@").length == 2) {
      if (isNaN(message.content.split(" ")[2])) return

      var user = message.content.split(" ")[1].split("<@!")[1].split(">")[0]
      var count = parseInt(message.content.split(" ")[2]) + 1
      let _cnt = 0

      message.channel.messages.fetch().then((collected) => {
        collected.every((msg) => {
          if (msg.author.id == user) {
            msg.delete()
            ++_cnt
          }
          return !(_cnt == count)
        })
      })
    }
  } else {
    message.channel
      .bulkDelete(parseInt(clearLine) + 1)
      .then(() => {
        message.channel.send(`<@${message.author.id}> ${parseInt(clearLine)} 개의 메시지를 삭제했습니다. (이 메시지는 잠시 후 사라집니다.)`).then((msg) => msg.delete({ timeout: 3000 }))
      })
      .catch(console.error)
  }
}
})

function checkPermission(message) {
if (!message.member.hasPermission("MANAGE_MESSAGES")) {
  message.channel.send(`<@${message.author.id}> 명령어를 수행할 관리자 권한을 소지하고 있지않습니다.`)
  return true
} else {
  return false
}
}

function changeCommandStringLength(str, limitLen = 8) {
let tmp = str
limitLen -= tmp.length

for (let i = 0; i < limitLen; i++) {
  tmp += " "
}

return tmp
}
client.login(token)