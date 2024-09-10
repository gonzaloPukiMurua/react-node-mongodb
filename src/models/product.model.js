import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    cost: {
      type: Number,
      required: true,
      min: 0,
    },
    code: {
      type: String,
      required: true,
      trim: true,
    }
  }, { collection: 'products' });
  
export const Products = mongoose.model('Products', productSchema);

