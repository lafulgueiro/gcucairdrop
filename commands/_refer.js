/*CMD
  command: /refer
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (chat.chat_type != "private") {
  Bot.sendMessage("_Open me in private_")
  return
}

let lib = Libs.ReferralLib
let reflist = lib.currentUser.refList
reflist = lib.currentUser.refList.get()
let tgid = user.telegramid
let refcom = Libs.ResourcesLib.userRes("refcom")
let bots = Libs.ReferralLib.currentUser.getRefLink('gcucairdropbot', "bot")
let TRX = 12.5 * refcom.value()

let msg
if (reflist.length > 0) {
  msg = reflist.length
} else {
  msg = "0"
}



Bot.sendMessage(
  
  "🏆 *Refferrals System*" +
    "\n\n" +
    "1 Level:" +
    "\n" +
    "*🥇 Level → 0.5 GCUC per referal*" +
    
    "\n\n" +
    "*🗣 Referral direct bot url:*" +
    "\n" +
    bots +
    "\n\n" +
    "*🗣 Referral Statistics*" +
    "\n\n" +
    "1° Level: " +
    reflist.length +
    " users" +
   
    "\n\n" 
)

