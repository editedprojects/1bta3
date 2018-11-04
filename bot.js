const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    console.log('I am ready!');
     client.user.setGame("RoyaleGames","http://twitch.tv/HP");
});

client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', '•-chat')
    let memberavatar = member.user.avatarURL
      if (!channel) return;
message.channel.send('**~~~Welcome~ To RG. :beers: ~~**')
    });
    
     client.login(process.env.BOT_TOKEN); 
