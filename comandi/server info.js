const { EmbedBuilder, SlashCommandBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('@discordjs/builders');
const Discord = require('discord.js')
const { MessageEmbed } = require("discord.js");
const fs = require("fs");
const config = require("../config.json")

module.exports = {
    name: "server info",
    description: "Comando per bannare",
    execute(message, args) {
        if (message.content == `${config.prefix}info server`){
            var ipEmbed = new EmbedBuilder()
            .setColor(0x00FF00)
            .setTitle('Warrior RP')
            .setURL('https://discord.js/')
            .setAuthor({ name: 'Warrior RP', iconURL: 'https://cdn.discordapp.com/attachments/752419221279080479/1001935763350487231/warrior_bot.png'})
            .setDescription('Questi sono i vari ip del server RP')
            .setThumbnail('https://cdn.discordapp.com/attachments/752419221279080479/1001935841716862996/warrior_bot.gif')
            .addFields(
                { name: 'IP server FiveM', value: 'warrior.vpsgh.it', inline: true },
                { name: 'IP Teamspeak', value: 'WARRIORRP', inline: false },
            )
            .setTimestamp()
            .setFooter({ text: 'micio the gamer#3204', iconURL: 'https://cdn.discordapp.com/avatars/538629606929072140/64302aa377b795d9372503ef91bf63fc.webp?size=2048' });
            message.author.send({embeds: [ipEmbed] }).then(msg => {
                message.delete();
                return;
            });
        }
    }
}