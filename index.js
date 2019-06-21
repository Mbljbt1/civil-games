const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', ()=>{
    console.log(`Bot is ready to go, set as ${client.user.tag}`);
})

client.on('message', message =>{
    if (message.content === "!CC" || message.content === "!cc" || message.content === "!Cc"){
        message.reply('You can join our Civil Gamers server at: 208.103.169.208:27016');
    } else if (message.content === "!CG" || message.content ==="!cg"||message.content === "!Cg"){
        message.reply('You can join our Civil City RP at: 208.103.169.208:27015');
    } else if (message.content === "!ContentCC"||message.content === "!contentcc"||message.content ==="Contentcc"){
        message.reply('Content for the Civil Gamers Server can be found at: https://steamcommunity.com/sharedfiles/filedetails/?id=1690222203');
    } else if (message.content === "!ContentCG" ||message.content === "!contentcg" ||message.content ==="!Contentcg"){
        message.reply('Content for the Civil City RP Server can be found at: https://steamcommunity.com/sharedfiles/filedetails/?id=1690201027');
    } else if (message.content === "!steamgroup"||message.content ==="!Steamgroup"||message.content ==="!SteamGroup"){
        message.reply('You can join our Steam Group at: https://steamcommunity.com/groups/CivilGamers');
    } else if (message.content === "!forums" ||message.content === "!Forums"){
        message.reply('You can join our forums at: https://www.civilgamers.com/');
    } else if (message.content === "!discord" ||message.content === "!Discord"){
        message.reply('The link to our Discord is: https://discord.gg/GXgArxX');
    } else if (message.content === "!teamspeak"||message.content ==="!Teamspeak"){
        message.reply('Our Teamspeak can be found here: ts3.civilgamers.com');
    } else if (message.content === "!help"){
        message.reply('My Commands are as follows:\n\
    !CC: IP to the CC Server\n\
    !CG: IP to the CG Server\n\
    !ContentCC: Content for the CC Server\n\
    !ContentCG: Content for the CG Server\n\
    !SteamGroup: Link to the SteamGroup\n\
    !Forums: A link to the forums\n\
    !Discord: A link to the discord.\n\
    !Teamspeak: The IP to the TS3 server');
    }
})

client.login('NTkxNzYxMjAxNDgzMjE4OTc5.XQ1fRg.1fraE8KU9QrCMPW7zJZdOGJufnw');