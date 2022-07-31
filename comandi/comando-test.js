const { EmbedBuilder, SlashCommandBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('@discordjs/builders');
const Discord = require('discord.js')
const { MessageEmbed } = require("discord.js");
const fs = require("fs");
const config = require("../config.json")

module.exports = {
    name: "autore",
    description: "Comando per visualizzare il creatore del bot",
    execute(message, args) {
        if (message.content == `${config.prefix}ping`) {
            message.channel.send("🏓 pong 🏓")
        }
    }
}