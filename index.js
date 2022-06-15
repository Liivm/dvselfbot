const { joinVoiceChannel, VoiceConnection, VoiceConnectionStatus } = require('@discordjs/voice');
const { Client, Channel } = require('discord.js-selfbot-v13');


guildid = "681797849926860810";

 client = new Client();

client.on('ready', async () => {
    


 const connextion =   joinVoiceChannel({
        channelId: "979701087802101790",
        guildId: guildid,
        adapterCreator: client.guilds.cache.get(guildid).voiceAdapterCreator,
});

connextion.on(VoiceConnectionStatus.Ready, async () => {
    

    console.log(`${client.user.username} is connected!`);

});

    });



 
  
client.login(process.env.TOKEN);
