/*CMD
  command: /sendtoall
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Please Enter the message that you want to send to all the users
  keyboard: 
  aliases: broadcast message
CMD*/

var admin = user.telegramid

if (admin == 1107912219) {
  let msg = message
  Bot.sendMessageToAllPrivateChats(msg)
} else {
  Bot.sendMessage("You are not Admin!")
}
