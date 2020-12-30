/*CMD
  command: /setwallet2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 💼 trx wallet
CMD*/

Api.getChatMember({
  chat_id: "@gcucairdrop",
  user_id: user.telegramid,
  on_result: "checkjoinedwal"
})
