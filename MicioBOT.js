const { EmbedBuilder, SlashCommandBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder, MessageAttachment } = require('discord.js');
const Discord = require('discord.js')
const client = new Discord.Client({
    intents: ['DirectMessageReactions', 'DirectMessageTyping', 'DirectMessages', 'GuildBans', 'GuildEmojisAndStickers', 'GuildIntegrations', 'GuildInvites', 'GuildMembers', 'GuildMessageReactions', 'GuildMessageTyping', 'GuildMessages', 'GuildPresences', 'GuildScheduledEvents', 'GuildVoiceStates', 'Guilds', 'MessageContent'],
    partials: ['Discord.Partials.Message', 'Discord.Partials.Channel', 'Discord.Partials.Reaction']
});
const { MessageEmbed } = require("discord.js");
const fs = require("fs");
const { DisTube, Options } = require("distube")
const { SpotifyPlugin } = require("@distube/spotify")
const { SoundCloudPlugin } = require("@distube/soundcloud")
const config = require("./config.json");
const { PermissionsBitField, ChannelType } = require('discord.js');
const { description } = require('./comandi/ban');


//ready

client.once("ready", () => {
    console.log("MicioBOT è online!!!");

    //Solo un server
    //var server = client.guilds.cache.get("869679008185467001")
    //server.commands.create({
    //    name: "ping",
    //    description: "Comando di test"
    //})

    //server.commands.create({
    //    name: "kick",
    //    description: "Espellere uhn utente",
    //    options: [
    //        {
    //            name:"user",
    //            description: "L'utente da espellere",
    //            type: `6`,
    //            required: true
    //        }
    //    ]
    //})


    //tutti i server
    //client.guilds.cache.forEach(guild => {
    //    guild.commands.create({
    //        name: "ping",
    //        description: "Comando di test" 
    //    })
    //})
})


client.commands = new Discord.Collection();

const commandsFiles = fs.readdirSync("./comandi").filter(file => file.endsWith(".js"));

for (const file of commandsFiles) {
    var command = require(`./comandi/${file}`);
    client.commands.set(command.name, command);
}

client.on("messageCreate", message => {
    const prefix = `${config.prefix}`;

    if (!message.content.startsWith(prefix) || message.author.bot) return

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('C\'è stato un errore durante l\' esecuzione di questo comando');
    }
})


    //Ticket
    client.on('interactionCreate', interaction => {
        if (interaction.customId == "select") {
            if (interaction.values == "uno") {
                
                var server = interaction.message.channel.guild;
                server.channels.create({
                    name: `Ticket di: ${interaction.user.username}`,
                    type: ChannelType.GuildText,
                    parent: "869679008185467003",
                    permissionOverwrites: [
                        {
                            id: server.id,
                            deny: [PermissionsBitField.Flags.ViewChannel]
                        },
                        {
                            id: '869682693196099605',
                            allow: [PermissionsBitField.Flags.ViewChannel]
                        },
                        {
                            id: interaction.user.id,
                            allow: [PermissionsBitField.Flags.ViewChannel]
                        }
                    ],
                    topic: `User Id: ${interaction.user.id}`
                }).then(canale => {

                    const row = new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder()
                                .setCustomId('close')
                                .setLabel('Chiudi Ticket')
                                .setStyle(ButtonStyle.Primary)
                                .setEmoji('🔨')
                        );


                    const risposta = new EmbedBuilder()
                        .setColor(0x0099FF)
                        .setTitle("Something")
                        .setDescription(`aaaaaaaaaa`)
                        // .setFooter({ text: "a" })
                        .setTimestamp()

                    interaction.reply({
                        content: `Ticket creato. <#${canale.id}>`,
                        ephemeral: true
                    });
                    canale.send({
                        content: `${interaction.member}`,
                        ephemeral: false,
                        embeds: [risposta],
                        components: [row]
                    })
                })
            }
        }
        if (interaction.customId === "close") {
            var topic = interaction.channel.topic;

            if (topic.startsWith("User Id:")) {
                if (interaction.member.roles.cache.has("869682693196099605")) {

                    let persona = interaction.guild.members.cache.get(topic.slice('User Id: '.length))

                    var risposta1 = new EmbedBuilder()
                        .setColor(0x0099FF)
                        .addFields({ name :`Ticket di: `, value: `${persona}`, inline: true })
                        .addFields({ name: `Chiuso da: `, value: `${interaction.member}`, inline: true }) 
                        // .setFooter({ text: "a" })
                        .setTimestamp()

                    interaction.guild.channels.cache.get('869682846850224198').send({
                        embeds: [risposta1]
                    })
                    interaction.channel.delete();
                } else {
                    interaction.reply({
                        content: 'Non hai il permesso di utilizzare questo comando!',
                        ephemeral: true
                    });
                }
            }
        }
    })

    //token
    client.login(config.token);