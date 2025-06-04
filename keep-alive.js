const https = require('https');

const url = 'https://ggs-27z0.onrender.com'; // เปลี่ยนเป็น URL ของ server

function pingWebsite() {
  https.get(url, (res) => {
    console.log(`[${new Date().toLocaleTimeString()}] 📡 Pinged ${url} - Status: ${res.statusCode}`);
  }).on('error', (err) => {
    console.error(`[${new Date().toLocaleTimeString()}] ❌ Error:`, err.message);
  });
}

// Ping ทุกๆ 5 นาที
setInterval(pingWebsite, 5 * 60 * 1000);

// เรียกทันทีตอนเริ่ม
pingWebsite();
