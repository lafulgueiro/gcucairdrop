/*CMD
  command: /onWalletCreationbtc
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

//Bot.sendMessage(inspect(options))

let wallet = options.result.address

Bot.sendMessage(
  "*➕ Welcome! Here you can buy GCUC!*\n\n💵 Price:\n *1 GCUC* = 10 TRX\n📆 Paid on Every Day"
)

Bot.sendMessage("✋️*Hold on..... generating your deposit address...*")
Bot.sendMessage(
  "⚠️ If you send less than 1 TRX, your deposit will be cancelled!\n\n✅ Send the amount you want to invest to the following address:"
)

Bot.sendMessage("`" + wallet + "`")

