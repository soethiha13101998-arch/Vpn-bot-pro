const { Bot } = require("grammy");
const fetch = require("node-fetch");

const bot = new Bot("8854649813:AAF7R41krqbpGP-tA_psymNhL2ktW81yjVA");

// အဓိကလုပ်ဆောင်ချက် - Proxy အသစ်တွေကို အွန်လိုင်းကနေ ဆွဲယူခြင်း
async function getWorkingProxy() {
    try {
        // v2rayse API ကိုသုံးပြီး အမြဲ update ဖြစ်နေတဲ့ proxy link တွေကိုဆွဲထုတ်ခြင်း
        const res = await fetch("https://v2rayse.com/api/v1/get-proxy");
        const json = await res.json();
        if (json.proxies && json.proxies.length > 0) {
            // လိုင်းအကောင်းဆုံးလို့ ယူဆရတဲ့ နောက်ဆုံး update ဖြစ်တဲ့ proxy ကို return ပေးခြင်း
            return json.proxies[0].link;
        }
    } catch (e) {
        return null;
    }
    return null;
}

bot.command("start", (ctx) => ctx.reply("VPN Proxy Bot အဆင်သင့်ပါ။ /getfreekey လို့ ရိုက်ပါ။"));

bot.command("getfreekey", async (ctx) => {
    ctx.reply("ခဏလေးနော်... အင်တာနက်ကနေ အကောင်းဆုံး Proxy ကို ရှာနေပါပြီ...");
    const proxy = await getWorkingProxy();
    if (proxy) {
        ctx.reply(`ရပြီ! ဒီမှာ အခုချက်ချင်း Update ဖြစ်နေတဲ့ Key:\n\n${proxy}`);
    } else {
        ctx.reply("အခုလောလောဆယ် Server က Proxy မပေးသေးလို့ပါ။ ၁ မိနစ်လောက်စောင့်ပြီး ပြန်ရိုက်ကြည့်ပေးပါဗျ။");
    }
});

const http = require('http');
http.createServer((req, res) => res.end('Bot is active')).listen(process.env.PORT || 3000);

bot.start();
