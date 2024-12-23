import React from 'react';

const reviews = [
  {
    id: 1,
    name: 'John Doe',
    review: 'Top Garden transformed our backyard! The team was professional and efficient. Highly recommend!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Jane Smith',
    review: 'The lawn care service exceeded our expectations. My garden looks amazing, and the team was very friendly.',
    rating: 4,
  },
  {
    id: 3,
    name: 'Sam Wilson',
    review: 'Irrigation system installation was quick and effective. Great value for the service.',
    rating: 5,
  },
];

function Reviews() {
  return (
    <div className="bg-[#F4F1DE] text-center py-10">
      <h2 className="text-3xl font-bold text-[#4A7A63]" style={{ textShadow: '.4px .4px 0px black' }}>Client Reviews</h2>
      <p className="text-lg text-[#4A7A63] mt-4" style={{ textShadow: '.1px .1px 0px darkgreen' }}>Here's what our clients have to say about us.</p>

      {/* Reviews */}
      <div className="mt-8 max-w-4xl mx-auto">
        {reviews.map((review) => (
          <div key={review.id} className="border rounded-lg p-6 shadow-md bg-white mb-6">
            <h3 className="text-xl font-bold text-[#E07A5F]">{review.name}</h3>
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

