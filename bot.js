const { Bot } = require("grammy");
const bot = new Bot("8854649813:AAF7R41krqbpGP-tA_psymNhL2ktW81yjVA");

bot.command("getfreekey", (ctx) => {
  // ဒါက အလုပ်လုပ်နိုင်ချေများတဲ့ Proxy ပုံစံပါ
  const workingKey = "ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpWbmV0d29ya0BpcDE6NDQz/?outline=1"; 
  ctx.reply(`ဒီ Key ကို Copy ကူးပြီး Outline ထဲထည့်ကြည့်ပါ:\n\n${workingKey}`);
});

const http = require('http');
http.createServer((req, res) => res.end('Bot is running')).listen(process.env.PORT || 3000);

bot.start();
