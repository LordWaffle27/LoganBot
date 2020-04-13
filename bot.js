var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch(cmd) {
            // !help
            case 'help':
                bot.sendMessage({
                    to: channelID,
                    message: 'Some commands: pong, quinn, info, credits, roles, club, prefix, teddy, and play. None of these commands do anything now, but I will make them do stuff. This list will get updated as new updates come out.'
                });
            break;
            case 'ping':
                bot.sendMessage({
                    "to": channelID,
                    "message": 'Pong!'
                });
            break;
            case 'quinn':
                bot.sendMessage({
                    "to": channelID,
                    "message": 'Quinn deleted danko memer'
                });
            break;
            case 'Quinn':
                bot.sendMessage({
                    "to": channelID,
                    "message": 'Quinn deleted danko memer'
                });
            break;
            case 'credits':
                bot.sendMessage({
                    "to": channelID,
                    "message": 'Bot creator: Teddy Troubleshooter: Ray'
                });
            break;
            case 'Credits':
                bot.sendMessage({
                    "to": channelID,
                    "message": 'Bot creator: Teddy Troubleshooter: Ray'
                });
            break;
            case 'roles':
                bot.sendMessage({
                    "to": channelID,
                    "message": 'Sorry, this bot is muy crappy and cannot assign roles. Want a member role? Just DM an admin'
                });
            break;
            case 'Roles':
                bot.sendMessage({
                    "to": channelID,
                    "message": 'Sorry, this bot is muy crappy and cannot assign roles. Want a member role? Just DM an admin'
                });
            break;
            case 'info':
                bot.sendMessage({
                    "to": channelID,
                    "message": 'This is LoganBot, a pretty crappy bot. do !help for commands'
                });
            break;
            case 'club':
                bot.sendMessage({
                    "to": channelID,
                    "message": 'CookieSpace is our Rocket League club. To join the club, dm a CookieSpace member. https://discord.gg/pYY5GW'
                });
            break;
            case 'pong':
                bot.sendMessage({
                    "to": channelID,
                    "message": 'WTF are you doing. *YOU ARE* supposed to say pong, not me bozo.'
                });
            break;
            case 'teddy':
                bot.sendMessage({
                    "to": channelID,
                    "message": 'Teddy (𝕙𝕞𝕞#3062) created this bot. He is a god at life.'
                });
            break;
            case 'play':
                bot.sendMessage({
                    "to": channelID,
                    "message": 'In the future, this command will mention CookieSpace players in #game-looking-for-group. Check back later!'
                });
            break;
            case 'prefix':
                bot.sendMessage({
                    "to": channelID,
                    "message": 'Right now, the prefix is !. Idk how to change it with a command'
                });
            break;
            case '!':
                bot.sendMessage({
                    "to": channelID,
                    "message": 'Congrats! u found an easter egg.'
                });
            break;
            case 'wow':
                bot.sendMessage({
                    "to": channelID,
                    "message": 'https://media.discordapp.net/attachments/687081341011230730/699280260960878672/7533_HyperBlob.gif'
                });
            break


         }
     }
});
