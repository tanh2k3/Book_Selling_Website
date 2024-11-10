require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
  return Product.deleteMany({});
})
.then(() => {
  console.log('All products cleared from the collection');
  mongoose.connection.close();
})
.catch(err => console.error('Error:', err));
