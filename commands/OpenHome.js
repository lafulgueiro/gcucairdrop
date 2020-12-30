/*CMD
  command: OpenHome
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
  Bot.sendKeyboard(
    "🕺Balance,\n 📥Deposit,💳 Withdraw,\n♻️ Reinvest,💻 Details, 🎁 Bonus,\n👬 Referral,📞 Support, 📒History ,\n💡Calculator,💼 TRX Wallet,📊 Statistic,📶 live,\nAdmin Menu",
    "❤️ *Welcome* Home Admin[" +
      user.username +
      "](tg://user?id=" +
      user.username +
      ")"
  )
} else {
  Bot.sendKeyboard(
    "🕺Balance,📥Buy,\n👬 Referral,💳 Withdraw,\n,💼 TRX Wallet,",
    "❤️ *Welcome* [" + user.username + "](tg://user?id=" + user.username + ") \n"+
"❇️ GCUC Airdrop ❇️\n"+

"🤑 Airdrop Joining 1 GCUC (10 trx)\n"+

"💰 Refer:- 0.5 GCUC (5 trx)\n "+

"⏭️ Distribution:- 1 January \n"+

"💸 Airdrop Withdrawal Will Be"+" 100% "+"Free😍"

  )
} 

  

