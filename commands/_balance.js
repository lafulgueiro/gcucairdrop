/*CMD
  command: /balance
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/


let res = Libs.ResourcesLib.userRes("balance")
let withdraw = Libs.ResourcesLib.userRes("withdraw")

let refcom = Libs.ResourcesLib.userRes("refcom")
let inf =
  "[" + user.first_name + "]" + "(" + "tg://user?id=" + user.telegramid + ")"
let info =
  "[" + user.telegramid + "]" + "(" + "tg://user?id=" + user.telegramid + ")"

Bot.sendMessage(
  "*👤 Account Balance:*  " +
    inf +
    "\n\n*➖ Withdrawable Balance:*" +
    "\n" +
    res.value().toFixed(8) +
    " *GCUC*"  +
    "\n\n🎁 *Total Affiliate Bonus:*" +
    "\n" +
    refcom.value().toFixed(8) +
    " *GCUC*" +
    "\n\n*💸Total Withdrawn:*" +
    "\n" +
    withdraw.value().toFixed(8) +
    " *GCUC*",
  { is_reply: true }
)


