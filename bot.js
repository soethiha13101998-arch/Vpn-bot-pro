const { Bot } = require("grammy");
const bot = new Bot("8854649813:AAF7R41krqbpGP-tA_psymNhL2ktW81yjVA");

// နေ့စဉ် Update ဖြစ်တဲ့ Proxy Channel လင့်ခ်များ
const proxySource = "https://t.me/s/v2rayng_org"; // ဒီ Channel ကနေ အစ်ကို့ဘာသာ ယူလို့ရပါတယ်

bot.command("start", (ctx) => ctx.reply("VPN Bot အဆင်သင့်ပါ။ /getfreekey လို့ ရိုက်ပါ။"));

bot.command("getfreekey", (ctx) => {
    ctx.reply(`အစ်ကိုရေ၊ Proxy တွေအမြဲ Update ဖြစ်နေတဲ့ Channel မှာ ယူလိုက်ပါဗျာ။ ဒါက အသေချာဆုံးပါ:\n\n${proxySource}\n\nဒီ Link ထဲက ss:// သို့မဟုတ် vmess:// နဲ့စတဲ့ဟာတွေကို Copy ကူးပြီး V2RayNG ထဲမှာ Import လုပ်လိုက်ပါနော်။`);
});

const http = require('http');
http.createServer((req, res) => res.end('Bot is running')).listen(process.env.PORT || 3000);

bot.start();
