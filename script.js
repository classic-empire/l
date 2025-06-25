window.addEventListener("DOMContentLoaded", async () => {
  try {
    const ipv4 = await fetch("https://api.ipify.org?format=json").then(res => res.json());
    const geo = await fetch("https://ipapi.co/json/").then(res => res.json());

    const ua = navigator.userAgent;
    const lang = navigator.language;
    const now = new Date();
    const time = `${now.getFullYear()}/${String(now.getMonth()+1).padStart(2,'0')}/${String(now.getDate()).padStart(2,'0')} ${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}:${String(now.getSeconds()).padStart(2,'0')}`;

    const msg = `
📥 دخول جديد للموقع:

🧠 IP: ${ipv4.ip}
🌍 الدولة: ${geo.country_name}
🏙️ المدينة: ${geo.city} - ${geo.region}
📌 الإحداثيات: ${geo.latitude}, ${geo.longitude}
📡 الشركة: ${geo.org}
🕰️ الوقت: ${time}
🌐 المتصفح: ${ua}
🈯 اللغة: ${lang}
    `.trim();

    await fetch("https://discord.com/api/webhooks/1387366915663462410/ETanwu367cBLroWiTWq_Lz2rE21UxWtQDl9bD4Qc1nInY_2c5sTHCkDbIhgoOQB9Kz0K", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: msg })
    });
  } catch (e) {
    console.warn("فشل في إرسال البيانات:", e);
  }
});
