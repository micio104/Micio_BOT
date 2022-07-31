const { EmbedBuilder, SlashCommandBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('@discordjs/builders');
const Discord = require('discord.js')
const { MessageEmbed } = require("discord.js");
const fs = require("fs");
const config = require("../config.json")

module.exports = {
    name: "kick",
    description: "Comando per bannare",
    execute(message, args) {
        if (message.content.startsWith(`${config.prefix}kick`)){

            //} <- this was also a problem : move it to the end
            
                var utenteKick = message.mentions.members.first();
                 
                if(!message.member.roles.cache.has("993865736755888188", "993865735971536936", "993865733073289326", "993865732398002206")){
                    message.channel.send({content: `**COMMAND KICK** \n${message.author}, non hai il permesso`, ephemeral: true }).then(msg => {
                       message.delete({ timeout: 20000 });
                       return;
                    });
                    return;
                }
        
                if(!utenteKick){ // this before the other
                    message.channel.send({ content: `**COMMAND KICK** \n${message.author}, non hai menzionato nessun utente`}).then(msg => {
                       message.delete({ timeout: 20000 });
                       return;
                    });
                    return;
                }
                 
                if(!utenteKick.kickable) {
                        message.channel.send({content: `**COMMAND KICK** \n${message.author}, il bot non ha il permesso`}).then(msg => {
                            message.delete({ timeout: 20000 });
                        return;
                    });
                    return;
                }
        
                utenteKick.kick()
                .then(() => message.channel.send("<@" + utenteKick + "> è stato kiccato"))
                
            } // this must be here
        }
    }
