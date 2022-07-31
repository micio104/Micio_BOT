const { EmbedBuilder, SlashCommandBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('@discordjs/builders');
const Discord = require('discord.js')
const { Client, intents } = require('discord.js');
const client = new Discord.Client({ intents: ['DirectMessageReactions', 'DirectMessageTyping', 'DirectMessages', 'GuildBans', 'GuildEmojisAndStickers', 'GuildIntegrations', 'GuildInvites', 'GuildMembers', 'GuildMessageReactions', 'GuildMessageTyping', 'GuildMessages', 'GuildPresences', 'GuildScheduledEvents', 'GuildVoiceStates', 'GuildWebhooks', 'Guilds', 'MessageContent'] });
const { MessageEmbed } = require("discord.js");
const fs = require("fs");
const config = require("../config.json")

module.exports = {
    name: "ban",
    description: "Comando per bannare",
    execute(message, args) {
        
        if (message.content.startsWith(`${config.prefix}ban`)){

            //} <- this was also a problem : move it to the end
            
                 var utenteBan = message.mentions.members.first();
                 
                if(!message.member.roles.cache.has("993865733073289326", "993865732398002206")){
                    message.channel.send(`**COMMAND BAN** \n${message.author}, non hai il permesso`).then(msg => {
                       message.delete({ timeout: 20000 });
                       return;
                    });
                }
        
                if(!utenteBan){ // this before the other
                    message.channel.send(`**COMMAND BAN** \n${message.author}, non hai menzionato nessun utente`).then(msg => {
                       message.delete({ timeout: 20000 });
                       return;
                    });
                }
                 
                if(!utenteBan.bannable) {
                      message.channel.send(`**COMMAND BAN** \n${message.author}, il bot non ha il permesso`).then(msg => {
                       message.delete({ timeout: 20000 });
                       return;
                    });
                }
        
                utenteBan.ban()
                .then(() => message.channel.send("<@" + utenteBan + "> è stato bannato"))
                
            } // this must be here
        }
    }
