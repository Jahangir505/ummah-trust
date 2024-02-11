// pages/index.js

import ReviewForm from "@/components/ReviewForm";
import ReviewList from "@/components/ReviewList";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [reviews, setReviews] = useState([]);

  const fetchReviews = async () => {
    try {
      const response = await axios.get("/api/review/list");
      setReviews(response.data.data);
      console.log(response.data.data); // response.data is the parsed JSON object
    } catch (error) {
      console.error("Error fetching user list:", error);
    }
  };
  useEffect(() => {
    fetchReviews();
  }, []);
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">Review Service</h1>
      <div className="grid grid-cols-2 gap-4">
        <ReviewForm />
        <ReviewList reviews={reviews} />
      </div>
    </div>
  );
};

export default Home;
