const mongoose = require('mongoose');

// Define schema for Product Category
const productCategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  modified_at: { type: Date, default: Date.now },
  deleted_at: { type: Date }
});

// Define schema for Product Inventory
const productInventorySchema = new mongoose.Schema({
  quantity: { type: Number, required: true },
  created_at: { type: Date, default: Date.now },
  modified_at: { type: Date, default: Date.now },
  deleted_at: { type: Date }
});

// Define schema for Discount
const discountSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  discount_percent: { type: Number, required: true },
  active: { type: Boolean, default: true },
  created_at: { type: Date, default: Date.now },
  modified_at: { type: Date, default: Date.now },
  deleted_at: { type: Date }
});

// Define schema for Product
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  sku: { type: String, required: true },
  category_id: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductCategory', required: true },
  inventory_id: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductInventory', required: true },
  price: { type: Number, required: true },
  discount_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Discount' },
  created_at: { type: Date, default: Date.now },
  modified_at: { type: Date, default: Date.now },
  deleted_at: { type: Date }
});

// Define models
const ProductCategory = mongoose.model('ProductCategory', productCategorySchema);
const ProductInventory = mongoose.model('ProductInventory', productInventorySchema);
const Discount = mongoose.model('Discount', discountSchema);
const Product = mongoose.model('Product', productSchema);

module.exports = {
  ProductCategory,
  ProductInventory,
  Discount,
  Product
};
