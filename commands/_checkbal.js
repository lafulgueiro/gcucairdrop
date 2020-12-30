/*CMD
  command: /checkbal
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var admin = user.telegramid

if (admin == 1107912219) {
  Libs.CoinPayments.apiCall({
    fields: {
      cmd: "balances",
    },
    onSuccess: "/onInfo"
  })
} else {
  Bot.sendMessage("You are not Admin!")
}

