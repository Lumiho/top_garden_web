import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Reviews() {
  const [reviews, setReviews] = useState([]); // State to store fetched reviews

  useEffect(() => {
    // Fetch the reviews from the backend
    axios.get('http://localhost:5000/api/v1/reviews')  // Replace with your backend URL if needed
      .then(response => {
        setReviews(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the reviews!', error);
      });
  }, []);

  // use grid utility class in tailwind for grid container. sm for small screens, lg for large
  return (
    <div className="bg-[#F4F1DE] text-center py-10">
      <h2 className="text-3xl font-bold text-[#4A7A63]" style={{ textShadow: '.4px .4px 0px black' }}>Client Reviews</h2>
      <p className="text-lg text-[#4A7A63] mt-4" style={{ textShadow: '.1px .1px 0px darkgreen' }}>Here's what our clients have to say about us. Verified through the app Angi.</p>

      <div className="mt-8 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div key={review.id} className="border rounded-lg p-6 shadow-md bg-white mb-6 transition-transform hover:scale-110">
            <h3 className="text-xl font-bold text-[#E07A5F]">{review.name}</h3>
            <p className="text-[#4A7A63] italic mt-1">{review.description}</p>
            <p className="text-[#4A7A63] mt-2">{review.review}</p>
            <div className="mt-4">
              <span className="text-yellow-500">{"⭐".repeat(review.rating)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Reviews;

