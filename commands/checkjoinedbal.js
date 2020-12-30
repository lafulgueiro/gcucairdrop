/*CMD
  command: checkjoinedbal
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var user = options.result.status

if(user=="member"||user=="creator"||user=="administrator"){
  Bot.runCommand("/balance")
} else {
  Bot.runCommand("/start")
}

Bot.setProperty("status", user,"text")
