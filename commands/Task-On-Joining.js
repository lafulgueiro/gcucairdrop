/*CMD
  command: Task-On-Joining
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var join = [[{ title: "Joined", command: "/start" }]]
Bot.sendKeyboard("✅ i have joined", "💡 To use this bot you must join")
Bot.sendInlineKeyboard(
  join,
  "To participate you must join the channels of our sponsors:  \n @gcucairdrop \n @goodcucgroup ",
  {
    disable_web_page_preview: true
  }
)

