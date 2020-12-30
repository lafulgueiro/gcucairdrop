/*CMD
  command: /sendtotareas
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Please Enter the message that you want to send to all the users
  keyboard: 
  aliases: 
CMD*/

var admin = user.telegramid

if (admin == 1107912219) {
//Bot.sendMessageToChatWithId(refchatid, "✔️ New referral on level 1")
Api.sendMessage({
      chat_id: "@goodcucgroup",
      text: message,
      parse_mode: "Markdown",
      disable_web_page_preview: true
    })
  
} else {
  Bot.sendMessage("You are not Admin!")
}
