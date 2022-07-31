const { EmbedBuilder, SlashCommandBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('@discordjs/builders');
const Discord = require('discord.js')
const { MessageEmbed } = require("discord.js");
const fs = require("fs");
const config = require("../config.json")

module.exports = {
    name: "help",
    description: "Comando per bannare",
    execute(message, args) {
        if (message.content == `${config.prefix}help`) {
            var helpEmbed = new EmbedBuilder()
            .setColor(0x00FF00)
            .setTitle('Comandi Warrior RP bot')
            .setURL('https://cdn.discordapp.com/attachments/752419221279080479/1001935763350487231/warrior_bot.png')
            .setThumbnail('https://cdn.discordapp.com/attachments/752419221279080479/1001935841716862996/warrior_bot.gif')
            .setAuthor({ name: 'Warrior RP bot', iconURL: 'https://cdn.discordapp.com/attachments/752419221279080479/1001935763350487231/warrior_bot.png'})
            .setDescription('Questi sono i vari comandi del BOT')
            .addFields(
                { name: '$help', value: 'Una lista di tutti i comandi del BOT', inline: false },
                { name: '$status bot', value: 'Per vedere lo stato sel bot', inline: false },
                { name: '$assistenza', value: 'Per richiedere assistenza nel canale apposito (<#998938155036196985>)', inline: false },
                { name: '$info server', value: 'Per sapere tutte le info del server RP', inline: false },
                { name: '$kick + menzione', value: 'Per kiccare una utente dal server', inline: false },
                { name: '$ban + menzione', value: 'Per bannare una utente dal server', inline: false },
            )
            .setTimestamp()
            message.channel.send(`${message.author}`)
            message.channel.send({embeds: [helpEmbed]}).then(msg => {
                message.delete();
                return;
            });
        }
    }
}