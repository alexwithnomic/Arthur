const Discord = require('discord.js');

exports.run = async (message, args, asdf, client) => {
	const invite = await client.generateInvite(client.config.info.inviteperms);

	message.channel.send({embed: {
		title: 'Arthur - Yet another Discord bot',
		description: `A rewrite of Marvin, with tons of.. average features.\n [Invite](${invite}) | [GitHub](https://github.com/Gymnophoria/Arthur) | [Guild](${client.config.info.guildLink}) | [Trello](https://trello.com/b/wt7ptHpC/arthur)`,
		color: 0x00c140,
		fields: [
			{
				name: 'Author',
				value: client.owner.tag,
				inline: true
			},
			{
				name: 'Help',
				value: '@Arthur help',
				inline: true
			},
			{
				name: 'Info',
				value: `Language - Javascript\nNode ${process.version}\nDiscord.JS v${Discord.version}`
			}
		]
	}});
};

exports.config = {
	enabled: true,
	permLevel: 1,
	aliases: ['bot'],
	perms: ['EMBED_LINKS']
};

exports.help = {
	name: 'Info',
	description: 'View information about Arthur.',
	usage: 'info',
	help: 'It\'s really just info about the bot.',
	category: 'Other'
};