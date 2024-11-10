const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  imgSrc: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: String, required: true },
  discount: { type: String },
  sold: { type: String },
});

module.exports = mongoose.model('Product', productSchema);
