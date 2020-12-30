/*CMD
  command: /onIncomebtc
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/



if (!options) {
  // for security we need to check
  // that this command runned only by lib
  // user can not run command with options
  return
}

let wallet = options.address
let currency = options.currency
let amount = options.amount
if(currency!=="TRX"){
Bot.sendMessage("scammer")
return }

let fiat_amount = options.fiat_amount
let fiat_currency = options.fiat_coin

let fee = options.fee
//var time = Libs.DateTimeFormat.format(new Date(), "dd/m/yyyy h:M:s T") + "M"

let txn_id = options.txn_id
let info =
  "[" + user.first_name + "]" + "(" + "tg://user?id=" + user.telegramid + ")"

// see another fields by
//Bot.sendMessage(inspect(options));

if (amount >= 1 && amount <= 300000) {
  Bot.sendMessage(
    "*✔️ Your investment of " +
      amount +
      " TRX has been added to system \n You will receive direct payment to your wallet within 24 hours."
  )
  let msg =
    "* 📥 NEW BUY *" +
    "\n*Amount*: " +
    amount +
    "* TRX *\n*👤 User : * " +
    info
  Api.sendMessage({
    chat_id: "@gcucairdrop",
    text: msg,
    parse_mode: "Markdown",
    disable_web_page_preview: true
  })
let bonus2 = amount /10
let wallet = User.getProperty("wallet")
//let wallet = Libs.ResourcesLib.userRes("wallet")
  let msg2 = "/send "+ wallet+ " "+bonus2.toFixed(6)+ " gcuc"
Api.sendMessage({
    chat_id: "@ventasgcuc",
    text: msg2,
    parse_mode: "Markdown",
    disable_web_page_preview: true
  })



  let depo = Libs.ResourcesLib.anotherChatRes("depo", "global")
  //let deposit = //Libs.ResourcesLib.userRes("deposit")
//let depositact = Libs.ResourcesLib.userRes("depositact")
 // deposit.add(amount)
 // depositact.add(amount)
 depo.add(amount)
//let hasdepo = Libs.ResourcesLib.userRes("hasdepo")
//hasdepo.add(1)
 // User.setProperty("minertrx", amount, "text")
//  Bot.runCommand("minertrx")
 // let lilo = Bot.getProperty("total")
//  let total = lilo + amount
 // Bot.setProperty("total", total, "integer")
  let referrer = Libs.ReferralLib.currentUser.attractedByUser()
  let bonus = amount * 0.2 /10

  if (referrer) {
    let referrerRes = Libs.ResourcesLib.anotherUserRes(
      "balance",
      referrer.telegramid
    )
    referrerRes.add(bonus)
    let refcom = Libs.ResourcesLib.anotherUserRes("refcom", referrer.telegramid)
    refcom.add(bonus)
    Bot.sendMessageToChatWithId(
      referrer.telegramid,
      "*➕ Referral Deposit:* " + bonus.toFixed(6) + "*GCUC*"
    )
  } else {
    Bot.sendMessage("Check Payment Channel: @gcucairdrop")
  }
}

