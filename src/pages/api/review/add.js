import { connectToDatabase } from "@/libs/mongodb";


export default async function reviewAdd(req, res) {
  console.log(req.body);
  let { title, content, rating } = req.body;
  const { db } = await connectToDatabase();
  const reviewsCollection = db.collection("reviews");

  try {
    const newReview = {
      title: title,
      content: content,
      rating: rating,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    // console.log("New Review", newReview);
    const createResult = await reviewsCollection.insertOne(newReview);
    res
      .status(200)
      .json({ data: createResult, message: "Review Create Successfully!" });
  } catch (error) {
    console.log(
      `Review create/update failed with the following error: ${error}`
    );
    res.status(500).json({
      error: "Error.",
      data: {
        status: "failed",
        error: error.message || "Internal Server Error"
      }
    });
  }
}
