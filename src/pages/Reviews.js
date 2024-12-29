import React from 'react';

const reviews = [
  {
    id: 1,
    name: 'Grant & Laurie Jones',
    description: 'Landscaping and Lighting, October 2024',
    review: 'It went very well. The guys were curtious, efficient and extremely hard working.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sally Verdin',
    description: 'Landscaping, May 2023',
    review: 'It went well. Job was completed as per the contract. Mr. Zavala and his crew were prompt, polite and overall I was pleased with their work.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Barbara Hempstead',
    description: 'Lawn & Yard Work, Lawn Irrigation, December 2022',
    review: 'So appreciate the help this commpany gave repairing our sprinklers! Love spending time in our yard after they have made it so beautiful.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Lubnar Khan',
    description: 'Lawn & Yard Work',
    review: 'David recently started maintaining our lawn and it looks great. He does quality work and is fairly priced.',
    rating: 5,
  },
];

function Reviews() {
  return (
    <div className="bg-[#F4F1DE] text-center box-left py-10">
      <h2 className="text-3xl font-bold text-[#4A7A63]" style={{ textShadow: '.4px .4px 0px black' }}>Client Reviews</h2>
      <p className="text-lg text-[#4A7A63] mt-4" style={{ textShadow: '.1px .1px 0px darkgreen' }}>Here's what our clients have to say about us.</p>

      <div className="mt-8 max-w-4xl mx-auto">
        {reviews.map((review) => (
          <div key={review.id} className="border rounded-lg p-6 shadow-md bg-white mb-6">
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

