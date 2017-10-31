const Discord = require('discord.js');
const client = new Discord.Client();

//Mostra que o bot foi carregado
client.on('ready', () => {
  console.log('Carregado!');
});

//Executa os comandos
client.on('message', message => {
  if (message.content === '/mensagem') {
    message.reply('Essa é uma mensagem de reposta e mostra que o bot está funcionando perfeitamente.');
  }
});

//Ajuda
client.on('message', message => {
  if (message.content === '/ajuda') {
    message.reply('/avatar - mostra seu avatar ||| /canal - faz o bot entrar no seu canal. ||| /mensagem - envia uma mensagem de teste.');
  }
});

//Avatar
client.on('message', message => {
  if (message.content === '/avatar') {
    message.reply(message.author.avatarURL);
  }
});

//Canal
client.on('message', message => {
if (!message.guild) return;
  if (message.content === '/canal') {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply('Estou em seu canal agora!');
        })
        .catch(console.log)
		    } else {
      message.reply('Você precisa estar em um canal de voz antes!');
    }
  }
});

//Boas vindas
client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'member-log');
  if (!channel) return;
  channel.send(`Bem-vindo(a) ao servidor, ${member}`);
});



//Loga no com o seu token
client.login('SEU_TOKEN');
