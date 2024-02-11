// pages/index.js

import PublicLayout from "@/components/HOC/PublicLayout";
import HeroSection from "@/components/Hero/HeroSection";
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
    <PublicLayout pageTitle={"Home"}>
      <div className="min-h-screen bg-gray-100">
        <HeroSection />
      </div>
    </PublicLayout>
  );
};

export default Home;
