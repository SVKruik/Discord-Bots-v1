const ytdl = require("ytdl-core");
const ytSearch = require("yt-search");
const config = require("./../Other/config.js");
const queue = new Map();

module.exports = {
  name: "play",
  aliases: config.aliases.aliasesplay,
  cooldown: config.cooldown.cooldownplay,
  permissions: config.permissions.permissionplay,
  description:
    "Music Bot via YouTube links. You must be in a call for it to work.",
  async execute(message, args, cmd, client, Discord) {
    const voice_channel = message.member.voice.channel;
    if (!voice_channel) return message.channel.send(config.basemessages.messagesvcrequired);
    if (!message.member.roles.cache.some(role => role.id === config.base.basemusicroleid)) {
      message.channel.send(`You are missing permissions to use the Music Bot. You need this role: <@${config.base.basemusicroleid}>.`)
    }
    const channel = config.base.basemusicchannelid;
    if (message.channel.id == channel) {
    } else {
      return message.channel.send(
        `You are not in the right channel to use this command! Please use <#${channel}> instead!`
      );
    }

    const server_queue = queue.get(message.guild.id);

    if (cmd === "play") {
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
          message.channel.send(
            `🎶 Now playing **${song.title}**, requested by ${message.author.username}. 🎶`
          );
        } catch (err) {
          queue.delete(message.guild.id);
          message.channel.send(config.commandplay.commandplayconnecterr);
          throw err;
        }
      } else {
        server_queue.songs.push(song);
        return message.channel.send(`👍 **${song.title}** added to the queue!`);
      }
    } else if (cmd === "skip") {
      skip_song(message, server_queue);
      message.channel.send(config.commandplay.commandplayskip)
    } else if (cmd === "stop") {
      stop_song(message, server_queue);
      message.channel.send(config.commandplay.commandplaystop)
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
};

const skip_song = (message, server_queue) => {
  if (!message.member.voice.channel)
    return message.channel.send(config.basemessages.messagesvcrequired);
  if (!server_queue) {
    return message.channel.send(config.commandplay.commandplayqueueempty);
  }
  server_queue.connection.dispatcher.end();
};

const stop_song = (message, server_queue) => {
  if (!message.member.voice.channel)
    return message.channel.send(config.basemessages.messagesvcrequired);
  server_queue.songs = [];
  server_queue.connection.dispatcher.end();
};
