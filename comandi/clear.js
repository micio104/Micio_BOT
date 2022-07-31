const { EmbedBuilder, SlashCommandBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('@discordjs/builders');
const Discord = require('discord.js')
const { MessageEmbed } = require("discord.js");
const fs = require("fs");
const config = require("../config.json")

module.exports = {
    name: "autore",
    description: "Comando per visualizzare il creatore del bot",
    execute(message, args) {
        //clear

        client.on("messageCreate", (message) => {
            if(message.content.startsWith(`${config.prefix}clear`)){
                if(!message.member.permissions.has("MANAGE_MESSAGES")){
                    message.channel.send(`${mention.message.author}` + " non hai il permesso");
                    return
                }

                var count = message.content.slice(7);
                count = parseInt(count);

                if(!count) {
                    message.channel.send("Inserisci un numero valido");
                    return
                }

                message.chennel.bulkDelete(count + 1)
                message.channel.send("Ho eliminato " + count + " messaggi")
                    .then(msg => {
                        msg.delete({ setTimeout: 2000})
                    })
            }
        })

        client.on('guildMemberAdd', member => {
            var canale = client.channels.cache.get('1002145628664631356')
            canale.setName('Membri: ' + member.guild.memberCount)
        })

        client.on('guildRemoveAdd', member => {
            var canale = client.channels.cache.get('1002145628664631356')
            canale.setName('Membri: ' + member.guild.memberCount)
        })
    }
}