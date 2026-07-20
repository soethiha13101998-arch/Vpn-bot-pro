const { Bot } = require("grammy");
const fetch = require("node-fetch");

// အစ်ကို့ Bot Token
const bot = new Bot("8854649813:AAF7R41krqbpGP-tA_psymNhL2ktW81yjVA");

bot.command("start", (ctx) => {
    ctx.reply("VPN Proxy Bot အဆင်သင့်ဖြစ်ပါပြီ။\n/getfreekey လို့ ရိုက်ပြီး Proxy Key အသစ်ရယူပါ။");
});

bot.command("getfreekey", async (ctx) => {
    ctx.reply("ခဏလေးနော်... Proxy အသစ် ရှာနေပါတယ်...");
    try {
        const response = await fetch("https://v2rayse.com/api/v1/get-proxy");
        const data = await response.json();
        
        if (data && data.proxies && data.proxies.length > 0) {
            const proxy = data.proxies[0]; // Proxy တစ်ခုကို ယူလိုက်ခြင်း
            ctx.reply(`ဒီ Key ကို Copy ကူးပြီး V2RayNG ထဲမှာ Import လုပ်ပါ:\n\n${proxy.link}`);
        } else {
            ctx.reply("Proxy မတွေ့သေးပါဘူး။ ခဏနေမှ ပြန်ကြိုးစားကြည့်ပေးပါ။");
        }
    } catch (error) {
        ctx.reply("Error ဖြစ်နေပါတယ် အစ်ကို။ Bot ကို ပြန်စစ်ကြည့်ပေးပါဦး။");
    }
});

// ဝဘ်ဆာဗာအတွက် (Render အတွက် လိုအပ်ပါတယ်)
const http = require('http');
http.createServer((req, res) => {
    res.write('Bot is running...');
    res.end();
}).listen(process.env.PORT || 3000);

bot.start();
