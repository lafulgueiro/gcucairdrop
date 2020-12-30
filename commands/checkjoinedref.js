/*CMD
  command: checkjoinedref
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
  Bot.runCommand("/refer")
} else {
  Bot.runCommand("/start")
}

Bot.setProperty("status", user,"text")
