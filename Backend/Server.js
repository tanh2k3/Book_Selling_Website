const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
//const { sendMail } = require('./emailService');
const app = express();
const {ObjectId} = require('mongodb');
app.use(bodyParser.json());
app.use(cors());
require('dotenv').config();
const path = require('path');
const SECRET_KEY = 'your_secret_key';

// Kết nối MongoDB
const uri = "mongodb+srv://trantuananhbo2093:FPa18YPpQAi7VkSM@cluster0.lydwo.mongodb.net/bookDB?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('Error:', err));

const User = require('./models/User');

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    User.findOne({ email: username, password: password }).then((data) => {
      if (data) {
        const token = jwt.sign({ userId: data._id, email: data.email }, SECRET_KEY, { expiresIn: '1h' });
        res.send({ status: 'success', token: token, user: data });
      } else {
        res.send({ status: 'fail' });
      }
    });
  });

const port = 3001;
app.listen(port, () => console.log(`Server is running on port ${port}`));