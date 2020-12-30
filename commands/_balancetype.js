/*CMD
  command: /balancetype
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 🕺balance
CMD*/

Api.getChatMember({
  chat_id: "@gcucairdrop",
  user_id: user.telegramid,
  on_result: "checkjoinedbal"
})
