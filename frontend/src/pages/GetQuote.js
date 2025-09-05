import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import slideshow1 from "../Media/slideshow1.jpg";
import slideshow2 from "../Media/slideshow2.jpg";
import slideshow4 from "../Media/slideshow4.jpg";
import slideshow5 from "../Media/slideshow5.jpg";
import Calculator from "../utils/Calculator";
import { formatPhoneNumber } from "../utils/Calculator";

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
      comments: "",
    },
    userDetails: {
      fullName: "",
      email: "",
      phone: "",
    },
  });
  const [confirmed, setConfirmed] = useState(false);
  const handleNext = () => setCurrentScreen((prev) => prev + 1);
  const handleBack = () => setCurrentScreen((prev) => prev - 1);
  const navigate = useNavigate();

  const projectTypes = [
    { name: "Landscaping", image: slideshow4 },
    { name: "Irrigation", image: slideshow2 },
    { name: "Maintenance", image: slideshow1 },
    { name: "Other", image: slideshow5 },
  ];

const handleFormSubmit = async () => {
  // Basic field checks
  const { projectDetails, userDetails, projectType } = formData;

  if (!projectType) {
    alert("Please select a project type.");
    return;
  }

  if (
    !projectDetails.name ||
    !projectDetails.budget ||
    !userDetails.fullName ||
    !userDetails.phone
  ) {
    alert("Please fill out all required fields (name, budget, phone)");
    return;
  }

  if (isNaN(projectDetails.budget)) {
    alert("Please enter a valid number for the budget.");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(userDetails.email)) {
    alert("Please enter a valid email address.");
    return;
  }

  const digitsOnly = userDetails.phone.replace(/\D/g, '');
  if (digitsOnly.length < 10) {
    alert("Please enter a valid phone number with at least 10 digits.");
    return;
  }

  // If validations pass, proceed
  const payload = {
    data: {
      projectType: formData.projectType,
      projectName: formData.projectDetails.name,
      squareFootage: formData.projectDetails.squareFootage,
      completionDate: formData.projectDetails.completionDate,
      materials: formData.projectDetails.materials,
      budget: formData.projectDetails.budget,
      estimatedCost: formData.projectDetails.estimatedCost,
      comments: formData.projectDetails.comments,
      fullName: formData.userDetails.fullName,
      email: formData.userDetails.email,
      phone: formData.userDetails.phone,
    },
  };

  try {
    const response = await fetch("https://sheetdb.io/api/v1/hupsghi5dzep2", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      navigate("/thank-you");
    } else {
      alert("Failed to submit quote. Please try again.");
    }
  } catch (error) {
    console.error("Error submitting to SheetDB:", error);
    alert("Something went wrong. Please try again.");
  }
};


  return (
    <div className="bg-[#4A7A63] min-h-screen flex items-center justify-center bg-cover bg-center">
      {currentScreen === 1 && (
        <div className="p-6 bg-[#1A1A1A] rounded-lg shadow-lg max-w-2xl w-full min-h-[60vh] min-w-[50vw]">
          <h2 className="text-3xl font-bold text-white mb-6 text-center" style={{ textShadow: '1.5px 1.5px 0px #4A7A63' }}>
            Select Project Type
          </h2>
          <div className="grid grid-cols-2 gap-6">
            {projectTypes.map((type) => (
              <div
                key={type.name}
                onClick={() => setFormData({ ...formData, projectType: type.name })}
                className={`relative rounded-lg overflow-hidden cursor-pointer text-center text-white shadow-md ${formData.projectType === type.name ? "border-4 border-[#C9B078] shadow-lg" : "hover:shadow-lg hover:shadow-[#4A7A63]/50"}`}
              >
                <img src={type.image} alt={type.name} className="w-full h-32 object-cover" />
                <div className={`absolute inset-0 flex items-center justify-center ${formData.projectType === type.name ? "bg-[#C9B078]/60" : "bg-black/40"}`}>
                  <h3 className="font-bold text-lg">{type.name}</h3>
                </div>
              </div>
            ))}
          </div>
          <button onClick={handleNext} className="mt-6 w-full bg-gradient-to-r from-[#C9B078] to-[#d46653] text-white py-2 rounded-lg hover:shadow-lg hover:shadow-[#C9B078]/50 transition-transform transform hover:scale-105">
            Next
          </button>
        </div>
      )}

      {currentScreen === 2 && (
        <div className="p-6 bg-[#1A1A1A] rounded-lg shadow-lg max-w-2xl w-full min-h-[60vh] min-w-[50vw]">
          <Calculator
            formData={formData}
            setFormData={setFormData}
            setConfirmed={setConfirmed}
            handleNext={handleNext}
          />

          {confirmed && (
            <div className="text-green-400 text-center mt-4 font-semibold transition-opacity duration-300">
              Information confirmed!
            </div>
          )}

          <div className="flex justify-between mt-6">
            <button
              onClick={() => {
                setConfirmed(false); // reset on back
                handleBack();
              }}
              className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-600 transition-transform transform hover:scale-105"
            >
              Back
            </button>
          </div>
        </div>
      )}

      {currentScreen === 3 && (
        <div className="p-6 bg-[#1A1A1A] rounded-lg shadow-lg max-w-2xl w-full min-h-[60vh] min-w-[50vw]">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Enter Your Details</h2>
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
              className="w-full px-4 py-2 bg-transparent border-2 rounded-2xl border-gradient-to-r from-[#C9B078] to-[#F4A261] focus:outline-none focus:ring-2 focus:ring-[#C9B078] placeholder-gray-400 text-white"
            />
          </div>
          <div className="relative mb-6">
            <input
              type="email"
              placeholder="Email (optional)"
              value={formData.userDetails.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  userDetails: { ...formData.userDetails, email: e.target.value },
                })
              }
              className="w-full px-4 py-2 bg-transparent border-2 rounded-2xl border-gradient-to-r from-[#C9B078] to-[#F4A261] focus:outline-none focus:ring-2 focus:ring-[#C9B078] placeholder-gray-400 text-white"
            />
          </div>
          <div className="relative mb-6">
            <input
              type="tel"
              placeholder="Phone Number"
              value={formData.userDetails.phone}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  userDetails: {
                    ...formData.userDetails,
                    phone: formatPhoneNumber(e.target.value),
                  },
                })
              }
              className="w-full px-4 py-2 bg-transparent border-2 rounded-2xl border-gradient-to-r from-[#C9B078] to-[#F4A261] focus:outline-none focus:ring-2 focus:ring-[#C9B078] placeholder-gray-400 text-white"
            />
          </div>

          <div className="flex justify-between">
            <button onClick={handleBack} className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-600 transition-transform transform hover:scale-105">
              Back
            </button>
            <button onClick={handleFormSubmit} className="bg-gradient-to-r from-[#C9B078] to-[#d46653] text-white py-2 px-4 rounded hover:shadow-lg hover:shadow-[#C9B078]/50 transition-transform transform hover:scale-105">
              Submit Quote
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default GetQuote;