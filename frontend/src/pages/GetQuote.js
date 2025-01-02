import React, { useState } from "react";
import try1 from '../Media/try1.jpg'
import irrigationImg from '../Media/irrigationImg.png'

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
    { name: "Landscaping", image: irrigationImg },
    { name: "Irrigation", image: irrigationImg },
    { name: "Design", image: irrigationImg },
    { name: "Maintenance", image: irrigationImg },
  ];

  const handleExportPDF = () => {
    const quoteData = `
      Project Type: ${formData.projectType}
      Project Name: ${formData.projectDetails.name}
      Square Footage: ${formData.projectDetails.squareFootage}
      Completion Date: ${formData.projectDetails.completionDate}
      Materials: ${formData.projectDetails.materials}
      Budget: ${formData.projectDetails.budget}
      Full Name: ${formData.userDetails.fullName}
      Email: ${formData.userDetails.email}
    `;
    const blob = new Blob([quoteData], { type: "application/pdf" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "quote.pdf";
    link.click();
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${try1})`,
      }}
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
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Project Details
          </h2>
          <div className="relative mb-7">
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
              className="w-full px-4 py-2 bg-transparent border-2 rounded-2xl border-gradient-to-r from-[#E07A5F] to-[#F4A261] focus:outline-none focus:ring-2 focus:ring-[#E07A5F] placeholder-gray-400 text-white"
            />
          </div>

          {/* Square Footage */}
          <div className="relative mb-7">
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
              className="w-full px-4 py-2 bg-transparent border-2 rounded-2xl border-gradient-to-r from-[#4A7A63] to-[#709c86] focus:outline-none focus:ring-2 focus:ring-[#4A7A63] placeholder-gray-400 text-white"
            />
          </div>

          {/* Preferred Completion Date */}
          <label className="block text-left text-gray-400 mb-1">
            Preferred Completion Date
          </label>
          <div className="relative mb-7">
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
              className="w-full px-4 py-2 bg-transparent border-2 rounded-2xl border-gradient-to-r from-[#E07A5F] to-[#F4A261] focus:outline-none focus:ring-2 focus:ring-[#E07A5F] placeholder-gray-400 text-white"
            />
          </div>

          {/* Preferred Materials */}
          <label className="block text-left text-gray-400 mb-1">
            Preferred Materials
          </label>
          <div className="relative mb-7">
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
              className="w-full px-4 py-2 bg-transparent border-2 rounded-2xl border-gradient-to-r from-[#4A7A63] to-[#709c86] focus:outline-none focus:ring-2 focus:ring-[#4A7A63] text-white"
            >
              <option value="" className="text-gray-400">
                Select Materials
              </option>
              <option value="Gravel">Gravel</option>
              <option value="Soil">Soil</option>
              <option value="Turf/Grass">Turf/Grass</option>
              <option value="Stones">Stones</option>
              <option value="Paving Blocks">Paving Blocks</option>
            </select>
          </div>

          {/* Budget Range */}
          <label className="block text-left text-gray-400 mb-1">
            Budget Range
          </label>
          <div className="relative mb-10">
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
        <div className="p-6 bg-[#1A1A1A] rounded-lg shadow-lg max-w-lg w-full relative">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Final Step. Enter Your Details Please.
          </h2>
          {/* Full Name and Email Fields */}
          <div className="relative mb-4">
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
              className="w-full px-4 py-2 bg-transparent border-2 rounded-lg border-gradient-to-r from-[#E07A5F] to-[#F4A261] focus:outline-none focus:ring-2 focus:ring-[#E07A5F] placeholder-gray-400 text-white"
            />
          </div>
          <div className="relative mb-6">
            <input
              type="email"
              placeholder="Email Address"
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
              className="w-full px-4 py-2 bg-transparent border-2 rounded-lg border-gradient-to-r from-[#E07A5F] to-[#F4A261] focus:outline-none focus:ring-2 focus:ring-[#E07A5F] placeholder-gray-400 text-white"
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
              onClick={handleExportPDF}
              className="bg-gradient-to-r from-[#E07A5F] to-[#d46653] text-white py-2 px-4 rounded hover:shadow-lg hover:shadow-[#E07A5F]/50 transition-transform transform hover:scale-105"
            >
              Export PDF
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default GetQuote;