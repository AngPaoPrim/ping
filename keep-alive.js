const express = require('express');
const https = require('https');

const app = express();
const url = 'https://ggs-27z0.onrender.com';

// ต้องมี route แม้ health check เป็น TCP
app.get('/', (req, res) => {
  res.send('Koyeb alive');
});

// ✅ ตรงนี้สำคัญ: ฟังพอร์ต 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

// 🔁 ยิงไปที่ Render ทุก 5 นาที
function pingWebsite() {
  https.get(url, (res) => {
    console.log(`[${new Date().toLocaleTimeString()}] 📡 Pinged ${url} - Status: ${res.statusCode}`);
  }).on('error', (err) => {
    console.error(`[${new Date().toLocaleTimeString()}] ❌ Error:`, err.message);
  });
}

pingWebsite();
setInterval(pingWebsite, 5 * 60 * 1000);
