const { EmbedBuilder, SlashCommandBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('@discordjs/builders');
const Discord = require('discord.js')
const { MessageEmbed } = require("discord.js");
const fs = require("fs");
const config = require("../config.json")

module.exports = {
    name: "assistenza",
    description: "Comando per richiedere assistenza",
    execute(message, args) {
        if (message.content == `${config.prefix}assistenza`) {
            message.channel.send("Hey" +message.author.toString() + "! Hai richiesto di parlare in assistenza, il nostro <@1001854578536493196> ti aiutera' al piu' presto possibile. \nNel frattempo connettiti alla chat vocale <#993875608939544606>")
        }
    }
}