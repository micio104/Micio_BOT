const { EmbedBuilder, SlashCommandBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('@discordjs/builders');
const Discord = require('discord.js')
const { MessageEmbed } = require("discord.js");
const fs = require("fs");
const { send } = require('process');
const config = require("../config.json")

module.exports = {
    name: "statusbot",
    description: "Per far vedere lo status del bot",
    execute(message, args) {
        
    }
}