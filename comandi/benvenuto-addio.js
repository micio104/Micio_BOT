const { EmbedBuilder, SlashCommandBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('@discordjs/builders');
const Discord = require('discord.js')
const { MessageEmbed } = require("discord.js");
const fs = require("fs");
const config = require("../config.json")

module.exports = {
    name: "autore",
    description: "Comando per visualizzare il creatore del bot",
    execute(message, args) {
        //Benvenuto

        client.on("guildMemberAdd", (member) => {
            client.channels.cache.get("869679008185467004").send("Benvenuto " + member.toString() + " in " + member.guild.name + ", sei il " + member.guild.memberCount + "° membro");
        })


        //Addio

        client.on("guildMemberRemove", (member) => {
            client.channels.cache.get("ID_CANALE").send(member.toString() + " è uscito da " + member.guild.name);
        })
    }
}