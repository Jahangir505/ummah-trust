import { connectToDatabase } from "@/libs/mongodb";

export default async function reviewList(req, res) {
  try {
    const { db } = await connectToDatabase();
    const reviewsCollection = db.collection("reviews");

    // Fetch the actual data from the collection

    const reviewsData = await reviewsCollection.find({}).toArray();

    // Send only the relevant data in the response
    res.status(200).json({ data: reviewsData });
  } catch (error) {
    console.error(
      `Review list fetch failed with the following error: ${error}`
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
