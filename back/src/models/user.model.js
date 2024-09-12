import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
        type: String,
        required: true,
        min: 0,
      }
  }, { collection: 'users' });
  
export const Users = mongoose.model('Users', userSchema);