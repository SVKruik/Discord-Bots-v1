// Speel een lied af. Werkt met music links in het normale (niet 'be') link format.

const ytdl = require("ytdl-core");
const ytSearch = require("yt-search");
const config = require("../Other/config.js"); // Vaste variabelen opgeslagen
const queue = new Map();

module.exports = {
  name: "play",
  aliases: config.aliases.aliasesplay,
  cooldown: config.cooldown.cooldownmusic,
  permissions: config.permissions.permissionmusic,
  description: "Music Bot via YouTube links.",
  async execute(message, args, cmd, client, Discord) {
    try {
      const voice_channel = message.member.voice.channel;
      if (!voice_channel) return message.channel.send(config.basemessages.messagesvcrequired);

      if (!message.member.roles.cache.some(role => role.id === config.base.basemusicroleid)) {
        message.channel.send(`You are missing the role to operate the Music Bot. You need this role: <@${config.base.basemusicroleid}>.`)
      }

      const server_queue = queue.get(message.guild.id);

      const channel = config.base.basemusicchannelid;
      if (message.channel.id == channel) {
      } else {
        return message.channel.send(
          `You are not in the right channel to use this command! Please use <#${channel}> instead!`
        );
      }

      if (!args.length)
        return message.channel.send(config.commandplay.commandplayurl);
      let song = {};

      if (ytdl.validateURL(args[0])) {
        const song_info = await ytdl.getInfo(args[0]);
        song = {
          title: song_info.videoDetails.title,
          url: song_info.videoDetails.video_url,
        };
      } else {
        const video_finder = async (query) => {
          const video_result = await ytSearch(query);
          return video_result.videos.length > 1 ? video_result.videos[0] : null;
        };

        const video = await video_finder(args.join(" "));
        if (video) {
          song = { title: video.title, url: video.url };
        } else {
          message.channel.send(config.basemessages.messagesfinderror);
        }
      }

      if (!server_queue) {
        const queue_constructor = {
          voice_channel: voice_channel,
          text_channel: message.channel,
          connection: null,
          songs: [],
        };

        queue.set(message.guild.id, queue_constructor);
        queue_constructor.songs.push(song);

        try {
          const connection = await voice_channel.join();
          queue_constructor.connection = connection;
          video_player(message.guild, queue_constructor.songs[0]);
        } catch (err) {
          queue.delete(message.guild.id);
          message.channel.send(`Error executing command. EC: \`${config.errorcodes.err7}\`.`)
          console.log(err)
        }
      } else {
        server_queue.songs.push(song);
        return message.channel.send(`👍 **${song.title}** added to the queue!`);
      }
    } catch (err) {
      console.log(err)
      message.channel.send(`Error executing command. EC: \`${config.errorcodes.err7}\`.`)
    }
  },
};

const video_player = async (guild, song) => {
  const song_queue = queue.get(guild.id);

  if (!song) {
    song_queue.voice_channel.leave();
    queue.delete(guild.id);
    return;
  }
  const stream = ytdl(song.url, { filter: "audioonly" });
  song_queue.connection
    .play(stream, { seek: 0, volume: 1 })
    .on("finish", () => {
      song_queue.songs.shift();
      video_player(guild, song_queue.songs[0]);
    });
  await song_queue.text_channel.send(
    `🎶 Now playing **${song.title}**. 🎶`
  );
};
