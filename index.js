const { joinVoiceChannel, VoiceConnection, VoiceConnectionStatus } = require('@discordjs/voice');
const { Client, Channel } = require('discord.js-selfbot-v13');
const { token } = require('./config.json');


guildid = "681797849926860810";

 client = new Client();

client.on('ready', async () => {
    


 const connextion =   joinVoiceChannel({
        channelId: "983567692575424543",
        guildId: guildid,
        adapterCreator: client.guilds.cache.get(guildid).voiceAdapterCreator,
});

connextion.on(VoiceConnectionStatus.Ready, async () => {
    

    console.log(`${client.user.username} is ready!`);

});

    });



 
  
client.login(token);

 







