const { EmbedBuilder, SlashCommandBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('@discordjs/builders');
const Discord = require('discord.js')
const { MessageEmbed } = require("discord.js");
const fs = require("fs");
const config = require("../config.json")

module.exports = {
    name: "membri",
    description: "Comando per visualizzare il creatore del bot",
    execute(message, args) {
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