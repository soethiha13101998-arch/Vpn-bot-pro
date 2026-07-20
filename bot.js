const { Bot } = require("grammy");
const bot = new Bot("8854649813:AAF7R41krqbpGP-tA_psymNhL2ktW81yjVA");

// Free VPN/Proxy List ကို ပို့ပေးမယ့် Command
bot.command("getfreekey", (ctx) => {
  const freeKeys = [
    "ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpWbmV0d29ya0BpcDE6NDQz#FreeVPN_1",
    "ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpWbmV0d29ya0BpcDI6NDQz#FreeVPN_2",
    "ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpWbmV0d29ya0BpcDM6NDQz#FreeVPN_3"
  ];
  const randomKey = freeKeys[Math.floor(Math.random() * freeKeys.length)];
  ctx.reply(`ဒီမှာ အခမဲ့ VPN Key ပါ:\n\n${randomKey}`);
});

bot.command("start", (ctx) => ctx.reply("VPN Bot အဆင်သင့်ပါ။ /getfreekey လို့ ရိုက်ပြီး Key ယူနိုင်ပါတယ်။"));

const http = require('http');
http.createServer((req, res) => res.end('Bot is running')).listen(process.env.PORT || 3000);

bot.start();
