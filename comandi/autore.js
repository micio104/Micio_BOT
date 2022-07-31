const { EmbedBuilder, SlashCommandBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require("discord.js");
const config = require("../config.json")

module.exports = {
    name: "dio",
    description: "Comando per visualizzare il creatore del bot",
    execute(message, args) {
        if (message.content == `${config.prefix}dio`) {
            var autorEmbed = new EmbedBuilder()
            .setColor(0x00FF00)
            .setTitle('Autore Warrior BOT')
            .setURL('https://cdn.discordapp.com/attachments/752419221279080479/1001935763350487231/warrior_bot.png')
            .setThumbnail('https://cdn.discordapp.com/attachments/752419221279080479/1001935841716862996/warrior_bot.gif')
            .setAuthor({ name: 'Warrior RP bot', iconURL: 'https://cdn.discordapp.com/attachments/752419221279080479/1001935763350487231/warrior_bot.png'})
            .setDescription('Questo è l\'autore del BOT')
            .addFields(
                { name: 'Discord', value: 'micio the gamer#3204', inline: false },
            )
            .setFooter({ text: 'micio the gamer#3204', iconURL: 'https://cdn.discordapp.com/avatars/538629606929072140/64302aa377b795d9372503ef91bf63fc.webp?size=2048' })
            .setTimestamp()
            message.channel.send(`${message.author}`)
            message.channel.send({embeds: [autorEmbed]}).then(msg => {
                message.delete();
                return;
            });
        }
    }
}