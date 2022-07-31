const { EmbedBuilder, SlashCommandBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('@discordjs/builders');
const Discord = require('discord.js')
const { MessageEmbed } = require("discord.js");
const fs = require("fs");
const config = require("../config.json")

module.exports = {
    name: "ping",
    description: "Comando per testare il bot",
    execute(message, args) {
        if (message.content == `${config.prefix}ping`) {
            
            const embedping = new EmbedBuilder()
                .setTitle("Qui MicioBOT")
                .setDescription("Qui tutto apposto, non ci sono problemi \n\n🏓 **pong** 🏓")
                .setColor(0x00FF00)
            
            message.channel.send({ embeds: [embedping] })
        }
    }
}