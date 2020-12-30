/*CMD
  command: /walletcreate
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Libs.CoinPayments.createPermanentWallet({
  currency: "TRX",
  label: "myLabel",
  //label: "@" + user.username,
  onSuccess: "/onWalletCreationbtc",
  onIncome: "/onIncomebtc"
});
