/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 🚫 cancel, 🏠 home, ⬅️ return, ✅ i have joined
CMD*/

let tota = Libs.ResourcesLib.anotherChatRes("tota", "global")
tota.add(1)
var admin = user.telegramid
function onAttracted(refUser) {
let deposit = Libs.ResourcesLib.userRes("balance")
deposit.add(1)
Bot.sendMessage("*+ 1* GCUC")
  // access to Bonus Res of refUser
  let res = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid)
  res.add(0) // add 0.05000 bonus for friend
  var refchatid = refUser.chatId
  Bot.sendMessageToChatWithId(refchatid, "✔️ New referral on level 1")
  
}

Libs.ReferralLib.currentUser.track({
  onAtractedByUser: onAttracted
})
Api.getChatMember({
  chat_id: "@gcucairdrop",
  user_id: user.telegramid,
  on_result: "next"
})

