/*CMD
  command: trx
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.sendMessage("withdrawals will be open on january")
return

let res = Libs.ResourcesLib.userRes("balance")
  Bot.sendMessage(
    "📤 _How many Trx you want to withdraw?_\n\n_Minimum: 1 TRX_" +
      "\n" +
      "_Maximum: _" +
      res.value().toFixed(8) +
      "\n" +
      " _Maximum amount corresponds to your balance_" +
      "\n\n" +
      "➡️ _Send now the amount of  you want to withdraw_"
  )
  Bot.runCommand("auto")

