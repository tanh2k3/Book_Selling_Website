const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  imgSrc: { type: String, required: true }, 
  title: { type: String, required: true },
  author: { type: String, required: true },
  translator: { type: String }, 
  price: { type: String, required: true },
  originalPrice: { type: String },
  discount: { type: String },
  rating: { type: Number },
  reviewsCount: { type: Number },
  soldCount: { type: String },
  features: [{ type: String }], 
  similarBooks: [
    {
      title: { type: String },
      imgSrc: { type: String }
    }
  ],
  galleryImages: [{ type: String }], 
  sku: { type: String }, 
  ageGroup: { type: String }, 
  supplier: { type: String }, 
  publisher: { type: String }, 
  publicationYear: { type: Number }, 
  language: { type: String }, 
  weight: { type: String }, 
  dimensions: { type: String }, 
  pages: { type: Number }, 
  binding: { type: String } 
});

module.exports = mongoose.model('Product', productSchema);
