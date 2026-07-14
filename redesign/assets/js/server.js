const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('🚀 بک‌اند همراه بار کار میکنه!');
});

app.post('/api/register', (req, res) => {
  const { fullName, phone, email, role } = req.body;
  console.log('📦 اطلاعات دریافت شد:', { fullName, phone, email, role });
  res.json({
    success: true,
    message: 'ثبت‌نام با موفقیت انجام شد!',
    user: { fullName, phone, email, role }
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ سرور روی پورت ${PORT} راه‌اندازی شد`);
  console.log(`📍 آدرس: http://localhost:${PORT}`);
});