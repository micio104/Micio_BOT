const Discord = require("discord.js");
const { ActionRowBuilder, SelectMenuBuilder, EmbedBuilder } = require('discord.js')

module.exports = {
    name: "ticket",
    description: 'Ticket Message',
    execute(message) {
        const row = new ActionRowBuilder()
            .addComponents(
                new SelectMenuBuilder()
                    .setCustomId('select')
                    .setPlaceholder('Seleziona la categoria.')
                    .addOptions(
                        {
                            label: 'Uno',
                            description: 'Descrizione',
                            // emoji: "Emoji",
                            value: 'uno',
                        }
                    )
            )

        var categoria = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle("Something")
            // .setThumbnail("")
            .setDescription("a")
            // .setFooter({ text: "a" })
            .setTimestamp()

        message.delete()
        message.channel.send({
            embeds: [categoria],
            components: [row]
        })
    }
}