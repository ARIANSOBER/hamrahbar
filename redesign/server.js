const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

app.use(cors());
app.use(express.json());

// ===== CONNECTION STRING با IP مستقیم =====
const MONGO_URI = 'mongodb://arianatom001_db_user:WHCBUG0U6XNpPKRu@cluster0.tpscyet.mongodb.net:27017/hamrahbar';

// ===== CONNECT TO DATABASE =====
mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ Database connected successfully!'))
  .catch((err) => {
    console.log('❌ Database connection error:');
    console.log(err.message);
  });

// ===== USER MODEL =====
const UserSchema = new mongoose.Schema({
  fullName: String,
  phone: String,
  email: String,
  role: String,
  createdAt: { type: Date, default: Date.now }
});
const User = mongoose.model('User', UserSchema);

// ===== TEST API =====
app.get('/', (req, res) => {
  res.send('🚀 Hamrahbar Backend is running!');
});

// ===== REGISTER API =====
app.post('/api/register', async (req, res) => {
  try {
    const { fullName, phone, email, role } = req.body;
    const newUser = new User({ fullName, phone, email, role });
    await newUser.save();
    res.json({
      success: true,
      message: 'User registered successfully!',
      user: { fullName, phone, email, role }
    });
  } catch (error) {
    console.log('❌ Error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Error saving user data',
      error: error.message
    });
  }
});

// ===== START SERVER =====
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});