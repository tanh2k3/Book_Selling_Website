const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  imgSrc: { type: String, required: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  translator: { type: String },
  price: { type: Number, required: true },
  originalPrice: { type: Number },
  discount: { type: Number },
  rating: { type: Number },
  reviewsCount: { type: Number },
  soldCount: { type: Number },
  features: [{ type: String }],
  similarBooks: [
    {
      title: { type: String },
      imgSrc: { type: String }
    }
  ],
  sku: { type: String },
  ageGroup: { type: String },
  supplier: { type: String },
  publisher: { type: String },
  publicationYear: { type: Number },
  language: { type: String },
  weight: { type: String },
  dimensions: { type: String },
  pages: { type: Number },
  binding: { type: String },

  // New fields
  description: { type: String }, // Product description
  type: {
    type: String,
    enum: ['V', 'E', 'O', 'G'], // Enums for V, E, O, G
    required: true
  }
});

module.exports = mongoose.model('Product', productSchema);
