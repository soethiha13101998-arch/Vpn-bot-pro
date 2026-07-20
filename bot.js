const { Bot } = require("grammy");
const axios = require("axios");
const cheerio = require("cheerio");

const bot = new Bot("8854649813:AAF7R41krqbpGP-tA_psymNhL2ktW81yjVA");

bot.command("getfreekey", async (ctx) => {
    ctx.reply("ခဏလေးနော်... Proxy စာမျက်နှာကို တိုက်ရိုက်ဖတ်နေပါပြီ...");
    try {
        // Proxy တွေတင်တဲ့ site ကနေ တိုက်ရိုက်ဆွဲထုတ်ခြင်း
        const { data } = await axios.get("https://free-ss.site/");
        const $ = cheerio.load(data);
        
        // Site ထဲက ss:// လင့်ခ်တွေကို ရှာယူခြင်း
        const key = $("code").first().text(); 
        
        if (key.startsWith("ss://")) {
            ctx.reply(`ရပြီ အစ်ကို! ဒါကတိုက်ရိုက်ဆွဲထားတဲ့ Key ပါ:\n\n${key}`);
        } else {
            ctx.reply("Proxy လင့်ခ်အသစ် မတွေ့သေးလို့ပါ။");
        }
    } catch (e) {
        ctx.reply("Server အလုပ်မလုပ်သေးလို့ပါ။ ခဏနေမှ ပြန်ကြိုးစားပေးပါဗျ။");
    }
});

const http = require('http');
http.createServer((req, res) => res.end('Bot is running')).listen(process.env.PORT || 3000);

bot.start();
