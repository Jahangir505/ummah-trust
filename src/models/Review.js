// models/Review.js
import mongoose from "mongoose";

const { Schema } = mongoose;

const reviewSchema = new Schema({
  autoUpdatedAt: true,
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Review = mongoose.model("Review", reviewSchema);

export default Review;
