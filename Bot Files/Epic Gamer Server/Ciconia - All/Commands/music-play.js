const ytdl = require("ytdl-core");
const ytSearch = require("yt-search");
const config = require('./../Other/config.js');
const queue = new Map();

module.exports = {
  name: "play",
  aliases: config.aliases.aliasesplay,
  cooldown: process.env.ASMSC,
  permissions: ["SEND_MESSAGES"],
  description:
    "Music Bot via YouTube links. You must be in a call for it to work.",
  async execute(message, args, cmd, client, Discord) {
    const voice_channel = message.member.voice.channel;
    if (!voice_channel) return message.channel.send(process.env.MSGVCREQ);
    const permissions = voice_channel.permissionsFor(message.client.user);
    if (!permissions.has("CONNECT"))
      return message.channel.send(process.env.MSGPLAYCONNECTMISSING);
    if (!permissions.has("SPEAK"))
      return message.channel.send(process.env.MSGPLAYSPEAKMISSING);

    const server_queue = queue.get(message.guild.id);

    if (cmd === "play") {
      if (!args.length)
        return message.channel.send(process.env.MSGPLAYURLMISSING);
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
          message.channel.send(process.env.MSGFINDERR);
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
          message.channel.send(process.env.MSGPLAYCONNECTERR);
          throw err;
        }
      } else {
        server_queue.songs.push(song);
        return message.channel.send(`👍 **${song.title}** added to the queue!`);
      }
    } else if (cmd === "skip") skip_song(message, server_queue);
    else if (cmd === "stop") stop_song(message, server_queue);
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
    `🎶 Now playing **${song.title}**, requested by ${message.author.username}.🎶`
  );
};

const skip_song = (message, server_queue) => {
  if (!message.member.voice.channel)
    return message.channel.send(process.env.MSGVCREQ);
  if (!server_queue) {
    return message.channel.send(process.env.MSGPLAYQUEUEEMPTY);
  }
  server_queue.connection.dispatcher.end();
};

const stop_song = (message, server_queue) => {
  if (!message.member.voice.channel)
    return message.channel.send(process.env.MSGVCREQ);
  server_queue.songs = [];
  server_queue.connection.dispatcher.end();
};
