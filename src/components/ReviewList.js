// components/ReviewList.js
const ReviewList = ({ reviews }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-3xl mx-auto py-12">
        <h1 className="text-3xl font-semibold mb-8">Reviews</h1>
        <ul>
          {reviews.map((review) => (
            <li
              key={review.id}
              className="bg-white rounded-lg shadow-md p-6 mb-4"
            >
              <h2 className="text-xl font-semibold">{review.title}</h2>
              <p className="text-gray-600 mt-2">{review.content}</p>
              <p className="text-gray-700 mt-2">Rating: {review.rating}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReviewList;
