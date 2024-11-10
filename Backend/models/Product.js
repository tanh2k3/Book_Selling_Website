const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  imgSrc: { type: String, required: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: String, required: true },
  originalPrice: { type: String },
  discount: { type: String },
  rating: { type: Number },
  reviewsCount: { type: Number },
  soldCount: { type: String },
  features: [{ type: String }],
  similarBooks: [{
    title: { type: String },
    imgSrc: { type: String }
  }]
});

module.exports = mongoose.model('Product', productSchema);
