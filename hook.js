document.getElementById("applyForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const data = {
    username: "classic |",
    embeds: [
      {
        title: " تقديم ",
        color: 0xff0000,
        fields: [
          {
            name: "👤 الاسم الكامل",
            value: document.getElementById("sector").value || "غير محدد"
          },
          {
            name: "💬 ديسكورد",
            value: document.getElementById("discord").value || "غير محدد"
          },
          {
            name: "🧒 اسمك في روبلوكس",
            value: document.getElementById("roblox").value || "غير محدد"
          },
          {
            name: "🎂 العمر",
            value: document.getElementById("age").value || "غير محدد"
          },
          {
            name: "🏳️ آخر دولة كنت فيها",
            value: document.getElementById("lastCountry").value || "غير محدد"
          },
          {
            name: "🎖️ رتبتك فيها",
            value: document.getElementById("rank").value || "غير محدد"
          },
          {
            name: "🤝 القسم",
            value: document.getElementById("promise").value || "غير محدد"
          },
          {
            name: "🎵 TikTok",
            value: document.getElementById("tiktokUser").value || "غير محدد"
          },
          {
            name: "📱 تواصل آخر",
            value: document.getElementById("contact").value || "غير محدد"
          }
        ],
        footer: {
          text: "تم الإرسال من نموذج تقديم دولة كلاسيك"
        },
        timestamp: new Date().toISOString()
      }
    ]
  };

  const webhookURL = "https://discord.com/api/webhooks/1379911696658858104/fk1eCMLvMeMdY4z45Dl7sVpUCpYy8qESHMp-5uzMCr7FapqD_OOjWt09FYR7AO0w7nMm";

  fetch(webhookURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(response => {
    if (response.ok) {
      alert("✅ تم إرسال التقديم بنجاح!");
      document.getElementById("applyForm").reset();
    } else {
      alert("❌ فشل الإرسال. تحقق من الرابط أو أعد المحاولة لاحقًا.");
    }
  }).catch(error => {
    alert("🚫 حصل خطأ أثناء الإرسال.");
    console.error(error);
  });
});
