import React, { useState } from 'react';

function GetQuote() {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [formData, setFormData] = useState({
    projectType: '',
    projectDetails: {
      name: '',
      squareFootage: '',
      completionDate: '',
      materials: '',
      budget: '',
    },
  });

  const handleNext = () => setCurrentScreen((prev) => prev + 1);
  const handleBack = () => setCurrentScreen((prev) => prev - 1);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F4F1DE]">
      {/* Screen 1: Project Type */}
      {currentScreen === 1 && (
        <div className="p-6 bg-white rounded-lg shadow-md max-w-lg w-full">
          <h2 className="text-2xl font-bold text-[#4A7A63] mb-4">Select Project Type</h2>
          <div className="grid grid-cols-1 gap-4">
            {['Landscaping', 'Irrigation', 'Design', 'Maintenance'].map((type) => (
              <div
                key={type}
                onClick={() =>
                  setFormData({ ...formData, projectType: type })
                }
                className={`p-4 border rounded-lg cursor-pointer ${
                  formData.projectType === type
                    ? 'border-[#E07A5F]'
                    : 'border-gray-300'
                }`}
              >
                <h3 className="font-bold text-[#4A7A63]">{type}</h3>
              </div>
            ))}
          </div>
          <button
            onClick={handleNext}
            className="mt-6 w-full bg-[#E07A5F] text-white py-2 rounded hover:bg-[#d46653]"
          >
            Next
          </button>
        </div>
      )}

      {/* Screen 2: Project Details */}
      {currentScreen === 2 && (
        <div className="p-6 bg-white rounded-lg shadow-md max-w-lg w-full">
          <h2 className="text-2xl font-bold text-[#4A7A63] mb-4">Project Details</h2>
          
          {/* Project Name */}
          <input
            type="text"
            placeholder="Project Name"
            value={formData.projectDetails.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                projectDetails: {
                  ...formData.projectDetails,
                  name: e.target.value,
                },
              })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded mb-4"
          />

          {/* Square Footage */}
          <input
            type="number"
            placeholder="Square Footage (e.g., 500)"
            value={formData.projectDetails.squareFootage}
            onChange={(e) =>
              setFormData({
                ...formData,
                projectDetails: {
                  ...formData.projectDetails,
                  squareFootage: e.target.value,
                },
              })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded mb-4"
          />

          {/* Preferred Completion Date */}
          <label className="block text-left text-gray-600 mb-1">Preferred Completion Date</label>
          <input
            type="date"
            value={formData.projectDetails.completionDate}
            onChange={(e) =>
              setFormData({
                ...formData,
                projectDetails: {
                  ...formData.projectDetails,
                  completionDate: e.target.value,
                },
              })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded mb-4"
          />

          {/* Preferred Materials */}
          <label className="block text-left text-gray-600 mb-1">Preferred Materials</label>
          <select
            value={formData.projectDetails.materials}
            onChange={(e) =>
              setFormData({
                ...formData,
                projectDetails: {
                  ...formData.projectDetails,
                  materials: e.target.value,
                },
              })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded mb-4"
          >
            <option value="">Select Materials</option>
            <option value="Gravel">Gravel</option>
            <option value="Soil">Soil</option>
            <option value="Turf/Grass">Turf/Grass</option>
            <option value="Stones">Stones</option>
            <option value="Paving Blocks">Paving Blocks</option>
          </select>

          {/* Budget Range */}
          <label className="block text-left text-gray-600 mb-1">Budget Range</label>
          <input
            type="text"
            placeholder="e.g., $1000 - $5000"
            value={formData.projectDetails.budget}
            onChange={(e) =>
              setFormData({
                ...formData,
                projectDetails: {
                  ...formData.projectDetails,
                  budget: e.target.value,
                },
              })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded mb-4"
          />

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <button
              onClick={handleBack}
              className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500"
            >
              Back
            </button>
            <button
              onClick={handleNext}
              className="bg-[#E07A5F] text-white py-2 px-4 rounded hover:bg-[#d46653]"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Screen 3: Review and Submit */}
      {currentScreen === 3 && (
        <div className="p-6 bg-white rounded-lg shadow-md max-w-lg w-full">
          <h2 className="text-2xl font-bold text-[#4A7A63] mb-4">Review Your Details</h2>
          <div className="mb-4">
            <p className="font-bold text-[#4A7A63]">Project Type:</p>
            <p>{formData.projectType || 'Not Selected'}</p>
          </div>
          <div className="mb-4">
            <p className="font-bold text-[#4A7A63]">Project Name:</p>
            <p>{formData.projectDetails.name || 'Not Provided'}</p>
          </div>
          <div className="mb-4">
            <p className="font-bold text-[#4A7A63]">Square Footage:</p>
            <p>{formData.projectDetails.squareFootage || 'Not Provided'}</p>
          </div>
          <div className="mb-4">
            <p className="font-bold text-[#4A7A63]">Preferred Completion Date:</p>
            <p>{formData.projectDetails.completionDate || 'Not Selected'}</p>
          </div>
          <div className="mb-4">
            <p className="font-bold text-[#4A7A63]">Preferred Materials:</p>
            <p>{formData.projectDetails.materials || 'Not Selected'}</p>
          </div>
          <div className="mb-4">
            <p className="font-bold text-[#4A7A63]">Budget Range:</p>
            <p>{formData.projectDetails.budget || 'Not Provided'}</p>
          </div>
          <div className="flex justify-between">
            <button
              onClick={handleBack}
              className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500"
            >
              Back
            </button>
            <button
              onClick={() => alert('Quote Submitted!')}
              className="bg-[#E07A5F] text-white py-2 px-4 rounded hover:bg-[#d46653]"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default GetQuote;
