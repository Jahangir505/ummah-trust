// models/Review.js
import mongoose from "mongoose";

const { Schema } = mongoose;

const storeSchema = new Schema({
  autoUpdatedAt: true,
  email: {
    type: String,
    required: true
  },
  store_name: {
    type: String,
    required: true
  },

  user_id: {
    type: String,
    required: true
  },
  
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Store = mongoose.model("Store", storeSchema);

export default Store;
