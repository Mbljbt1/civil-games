const Discord = require('discord.js');
const client = new Discord.Client();
const token = ' '; 
client.login(token); 
 
client.on('message', message => { 

    if(message.content.toLowerCase() === '!CC')
        message.channel.send("208.103.169.208:27016");

    else if(message.content.toLowerCase() === '!CG'
    	message.channel.send("208.103.169.208:27015");

    else if(message.content.toLowerCase() === '!ContentCC'
    	message.channel.send("https://steamcommunity.com/sharedfiles/filedetails/?id=1690222203");

    	else if(message.content.toLowerCase() === '!ContentCG'
    	message.channel.send("https://steamcommunity.com/sharedfiles/filedetails/?id=1690201027");

    	else if(message.content.toLowerCase() === '!SteamGroup'
    	message.channel.send("https://steamcommunity.com/groups/CivilGamers");

    	else if(message.content.toLowerCase() === '!Forums'
    	message.channel.send("https://www.civilgamers.com/");

    	else if(message.content.toLowerCase() === '!Discord'
    	message.channel.send("https://discord.gg/GXgArxX");

    	else if(message.content.toLowerCase() === '!Teamspeak'
    	message.channel.send("ts3.civilgamers.com");
    
 
});