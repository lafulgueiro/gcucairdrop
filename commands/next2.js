/*CMD
  command: next2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var user = options.result.status

if (user == "member" || user == "creator" || user == "administrator") {

  var hasref = Libs.ResourcesLib.userRes("hasref")
if(hasref.value()<1){
  let referrer = Libs.ReferralLib.currentUser.attractedByUser()
 if(referrer){
  let bonus = 0.5
  let bonus2 = 1
  hasref.add(1)
    let referrerRes = Libs.ResourcesLib.anotherUserRes(
      "balance",
     referrer.telegramid
    )
   referrerRes.add(bonus)
    let refcom = Libs.ResourcesLib.anotherUserRes("refcom", referrer.telegramid)
   refcom.add(bonus)
    Bot.sendMessageToChatWithId(
      referrer.telegramid,
      "*➕ "+ bonus +" GCUC*"
   )
   }
  }

  Bot.runCommand("OpenHome")
} else {
  Bot.runCommand("Task-On-Joining")
}

Bot.setProperty("status", user, "text")
