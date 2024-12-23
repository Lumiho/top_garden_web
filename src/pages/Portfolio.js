import React from 'react';
import '../Components/Portfolio.css'
import landscapingImage from '../Media/irrigationImg.png' // just testings
import pruningImage from '../Media/pruning.jpeg'
const projects = [
  {
    id: 1,
    category: 'Landscaping',
    description: 'Beautiful landscaping projects to transform your outdoor spaces.',
    image: pruningImage, // Replace with actual images
  },
  {
    id: 2,
    category: 'Irrigation',
    description: 'Efficient irrigation systems for healthy gardens.',
    image: landscapingImage, // Replace with actual images
  },
  {
    id: 3,
    category: 'Design',
    description: 'Creative garden designs tailored to your preferences.',
    image: pruningImage, // Replace with actual images
  },
  {
    id: 4,
    category: 'Lawn Care',
    description: 'Premium lawn care services for lush, green grass.',
    image: 'https://via.placeholder.com/300x200', // Replace with actual images
  },
];

function Portfolio() {
  return (
    <div className="bg-[#F4F1DE] py-10">
      <h1 className="text-3xl font-bold text-center text-[#4A7A63]" style={{ textShadow: '.1px .1px 0px black' }}>Our Portfolio</h1>
      <p className="text-center text-lg text-[#4A7A63] mt-4" style={{ textShadow: '.1px .1px 0px darkgreen' }}>
        Browse through our completed projects and services we proudly offer.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-10 px-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border rounded-lg overflow-hidden shadow-md bg-white"
          >
            <img src={project.image} alt={project.category} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-[#E07A5F]">{project.category}</h3>
              <p className="text-[#4A7A63] mt-2">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
