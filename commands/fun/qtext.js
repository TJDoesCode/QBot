const commando = require('discord.js-commando');
const oneLine = require('common-tags').oneLine;
const Discord = require('discord.js');
<<<<<<< HEAD
=======
function randomtext()
{
    let text = "";
<<<<<<< HEAD
    let possible = "@#%@#@#%>?@#%>?%>@#%>??>?";
=======
    let possible = "@#%>?";
>>>>>>> db40e3b121410eb7f0ddf2c328c57e0bf440516e

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length * message.content.length));

    return text;
}
>>>>>>> 82aedfd67cbcfcc729496608543cadd15e78acf3

module.exports = class SuggestCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'qtext',
      group: 'fun',
      memberName: 'qtext',
      description: 'random qbert text!',
      details: oneLine `
        qbert like text!
			`,
      examples: ['qtext'],
      args: [{
        key: 'toQtext',
        label: 'qtext',
        prompt: 'Random Text',
        type: 'string',
        infinite: false
      }],
      guildOnly: true,
      guarded: true
    })
  }

  async run(message, args) {
<<<<<<< HEAD
    let toQbert = message.content.split(" ").slice(1).join(" ")

    function randomtext() {
      let text = "";
      let possible = "@#%><?!&^+=";

      for (var i = 0; i < toQbert.length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
    }

    let qbert = randomtext()
    message.delete(1)
      .then(() => {
        message.channel.send(qbert)
      })
=======
<<<<<<< HEAD
    let qbert = randomtext(message)
    message.reply()
=======
<<<<<<< HEAD
    let qbert = randomtext(message)
    message.reply()
=======
    let qbert = randomtext()
    message.reply(qbert)
>>>>>>> parent of 83fe2ef... Update
>>>>>>> db40e3b121410eb7f0ddf2c328c57e0bf440516e
>>>>>>> 82aedfd67cbcfcc729496608543cadd15e78acf3
  }
};
