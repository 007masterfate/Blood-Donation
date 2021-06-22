var apikey ="1744906425:AAEjfoWsjinc_Hvybn5dPpYMBb6cUk7DLts";
var request = require("request")
var TelegramBot = require('node-telegram-bot-api');

var bot = new TelegramBot(apikey, {polling: true});


bot.on('message',function (a){

var s = 10

 if (a.text =='Hello') {
    bot.sendMessage(a.chat.id,"Hello, Please enter the country in 2 letters to know the Headlines of  the country ");
    console.log(a.text);
  }

})
