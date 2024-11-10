const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bcrypt = require('bcrypt');
require('dotenv').config();
const app = express();

app.use(express.json());
app.use(cors());

const SECRET_KEY = process.env.SECRET_KEY || 'your_secret_key';

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('Error:', err));

// Import models
const User = require('./models/User');
const Product = require('./models/Product');

// Login endpoint
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ email: username });
    if (user) {
      const validPassword = await bcrypt.compare(password, user.password);
      if (validPassword) {
        const token = jwt.sign({ userId: user._id, email: user.email }, SECRET_KEY, { expiresIn: '1h' });
        return res.status(200).json({ status: 'success', token: token, user: user });
      } else {
        return res.status(401).json({ status: 'fail', message: 'Invalid credentials' });
      }
    } else {
      return res.status(404).json({ status: 'fail', message: 'User not found' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ status: 'error', message: 'Server error' });
  }
});

// Endpoint to display the product list
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ status: 'error', message: 'Server error' });
  }
});

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server is running on port ${port}`));