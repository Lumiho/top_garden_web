import React, { useState } from "react";
import axios from "axios";
import slideshow1 from "../Media/slideshow1.jpg";
import slideshow2 from "../Media/slideshow2.jpg";
import slideshow4 from "../Media/slideshow4.jpg";
import slideshow5 from "../Media/slideshow5.jpg";
import Calculator from "../utils/Calculator"

// import MaterialSelector from "../materials_select"

function GetQuote() {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [formData, setFormData] = useState({
    projectType: "",
    projectDetails: {
      name: "",
      squareFootage: "",
      completionDate: "",
      materials: "",
      budget: "",
    },
    userDetails: {
      fullName: "",
      email: "",
    },
  });

  const handleNext = () => setCurrentScreen((prev) => prev + 1);
  const handleBack = () => setCurrentScreen((prev) => prev - 1);

  const projectTypes = [
    { name: "Landscaping", image: slideshow4 },
    { name: "Irrigation", image: slideshow2 },
    { name: "Design", image: slideshow5 },
    { name: "Maintenance", image: slideshow1 },
  ];

  const handleFormSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/quotes", formData);
      alert("Quote submitted successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting quote:", error);
      alert("Failed to submit quote. Please try again.");
    }
  };

  return (
    <div
      className="bg-[#4A7A63] min-h-screen flex items-center justify-center bg-cover bg-center"
    >
      {/* Screen 1: Project Type */}
      {currentScreen === 1 && (
        <div className="p-6 bg-[#1A1A1A] rounded-lg shadow-lg max-w-2xl w-full min-h-[60vh] min-w-[50vw]">
          <h2 className="text-3xl font-bold text-white mb-6 text-center" style={{ textShadow: '1.5px 1.5px 0px #4A7A63' }}>
            Select Project Type
          </h2>
          <div className="grid grid-cols-2 gap-6">
            {projectTypes.map((type) => (
              <div
                key={type.name}
                onClick={() =>
                  setFormData({ ...formData, projectType: type.name })
                }
                className={`relative rounded-lg overflow-hidden cursor-pointer text-center text-white shadow-md ${formData.projectType === type.name
                  ? "border-4 border-[#E07A5F] shadow-lg"
                  : "hover:shadow-lg hover:shadow-[#4A7A63]/50"
                  }`}
              >
                <img
                  src={type.image}
                  alt={type.name}
                  className="w-full h-32 object-cover"
                />
                <div
                  className={`absolute inset-0 flex items-center justify-center ${formData.projectType === type.name
                    ? "bg-[#E07A5F]/60"
                    : "bg-black/40"
                    }`}
                >
                  <h3 className="font-bold text-lg">{type.name}</h3>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={handleNext}
            className="mt-6 w-full bg-gradient-to-r from-[#E07A5F] to-[#d46653] text-white py-2 rounded-lg hover:shadow-lg hover:shadow-[#E07A5F]/50 transition-transform transform hover:scale-105"
          >
            Next
          </button>
        </div>
      )}

      {/* Screen 2: Project Details */}

      {currentScreen === 2 && (
        <div className="p-6 bg-[#1A1A1A] rounded-lg shadow-lg max-w-2xl w-full min-h-[60vh] min-w-[50vw]">
          <Calculator />
          <div className="flex justify-between">
            <button
              onClick={handleBack}
              className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-600 transition-transform transform hover:scale-105"
            >
              Back
            </button>
            <button
              onClick={handleNext}
              className="bg-gradient-to-r from-[#E07A5F] to-[#d46653] text-white py-2 px-4 rounded hover:shadow-lg hover:shadow-[#E07A5F]/50 transition-transform transform hover:scale-105"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Screen 3: User Details */}
      {currentScreen === 3 && (
        <div className="p-6 bg-[#1A1A1A] rounded-lg shadow-lg max-w-2xl w-full min-h-[60vh] min-w-[50vw]">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Enter Your Details
          </h2>
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Full Name"
              value={formData.userDetails.fullName}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  userDetails: {
                    ...formData.userDetails,
                    fullName: e.target.value,
                  },
                })
              }
              className="w-full px-4 py-2 bg-transparent border-2 rounded-2xl border-gradient-to-r from-[#E07A5F] to-[#F4A261] focus:outline-none focus:ring-2 focus:ring-[#E07A5F] placeholder-gray-400 text-white"
            />
          </div>
          <div className="relative mb-6">
            <input
              type="email"
              placeholder="Email"
              value={formData.userDetails.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  userDetails: {
                    ...formData.userDetails,
                    email: e.target.value,
                  },
                })
              }
              className="w-full px-4 py-2 bg-transparent border-2 rounded-2xl border-gradient-to-r from-[#E07A5F] to-[#F4A261] focus:outline-none focus:ring-2 focus:ring-[#E07A5F] placeholder-gray-400 text-white"
            />
          </div>
          <div className="flex justify-between">
            <button
              onClick={handleBack}
              className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-600 transition-transform transform hover:scale-105"
            >
              Back
            </button>
            <button
              onClick={handleFormSubmit}
              className="bg-gradient-to-r from-[#E07A5F] to-[#d46653] text-white py-2 px-4 rounded hover:shadow-lg hover:shadow-[#E07A5F]/50 transition-transform transform hover:scale-105"
            >
              Submit Quote
            </button>
          </div>
        </div>
      )}
    </div>
  );
} export default GetQuote;