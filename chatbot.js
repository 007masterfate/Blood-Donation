var apikey ="1184471228:AAG_xmQm7I13GsAFBKDtGzuBm6E_FK2pfQQ";
var request = require("request")
var TelegramBot = require('node-telegram-bot-api');
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('7f2613758abe4c98b52d126bafb18304');


var bot = new TelegramBot(apikey, {polling: true});


bot.on('message',function (a){

var s = 10

 if (a.text =='Hello') {
    bot.sendMessage(a.chat.id,"Hello, Please enter the country in 2 letters to know the Headlines of  the country ");
    console.log(a.text);
  }else {
    newsapi.v2.topHeadlines({
      country: a.text
    }).then(response => {
      for(i=0;i<s;i++){
    console.log(response.articles[i].title +"\n\n\n"+response.articles[i].description+"\n\n\n"+response.articles[i].url);

    bot.sendMessage(a.chat.id,response.articles[i].title +"\n\n\n"+response.articles[i].description+"\n\n\n"+response.articles[i].url)

      }});
                     }
    }


)
