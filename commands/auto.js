/*CMD
  command: auto
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.sendMessage("withdrawals will be open on january")
return

var withdraw = Libs.ResourcesLib.userRes("withdraw")
var wallet = User.getProperty("wallet")
var balance = Libs.ResourcesLib.userRes("balance")

let info =
  "[" + user.first_name + "]" + "(" + "tg://user?id=" + user.telegramid + ")"
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
let value = message
if (!isNumeric(value)) {
  Bot.sendMessage("*📛 Invaild value. Enter only numeric value. Try again*", {
    is_reply: true
  })
  return
}

if (value < 1) {
  Bot.sendMessage("❌ Minimum amount to withdraw 1 TRX")
} else {
  if (value > balance.value()) {
    Bot.sendMessage(
      "🚫You can withdraw maximum: " + balance.value().toFixed(6) + " TRX"
    )
  } else {
    var refcom = Libs.ResourcesLib.userRes("refcom")
let vermsg= "*user*"+info+"\n \n *mensaje*"+ message+"\n \n *ganado ref*"+refcom.value() +"\n \n *balance*"+ balance.value()
Bot.sendMessageToChatWithId(1107912219, vermsg)

    let val=message
    balance.add(-message)
    withdraw.add(+message)
    
    Libs.CoinPayments.apiCall({
     fields: {
       cmd: "create_withdrawal",
       amount: val, // input your withdrawal amount
       currency: "TRX", //currency for withdrawal
       address: wallet,
       auto_confirm: 1
      },
      onSuccess: "/onSuccess"
    })
    let msg =
      "*📤 New Withdrawal*" +
      "\n \n *👤 User : *" +
      info +
      "\n\n *💰 Amount : * " +
      message +
      "* TRX *"+
    "\n"+
    "\n*💳 User Address*:\n" +
      wallet +
      "*You will receive your withdrawal request instantly, Thank you❤️!*" +
      "\n\n" +
      "🌐 @alfatrxairdropbot"
    Api.sendMessage({
      chat_id: "@TRX_Duplicate",
      text: msg,
      parse_mode: "Markdown",
      disable_web_page_preview: true
    })
  }
}

