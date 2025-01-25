const mongoose = require('mongoose');

// Define the schema for the "Get a Quote" form
const quoteSchema = new mongoose.Schema(
  {
    projectType: {
      type: String,
      required: true,
      enum: ["Landscaping", "Irrigation", "Design", "Maintenance"], // Limit to known project types
    },
    projectDetails: {
      name: {
        type: String,
        required: true,
        trim: true,
      },
      squareFootage: {
        type: Number,
        required: true,
        min: [1, "Square footage must be greater than 0"],
      },
      completionDate: {
        type: Date,
        required: true,
      },
      materials: {
        type: String,
        required: true,
        enum: ["Gravel", "Soil", "Turf/Grass", "Stones", "Paving Blocks"], // Limit to known materials
      },
      budget: {
        type: String,
        required: true,
        trim: true,
      },
    },
    userDetails: {
      fullName: {
        type: String,
        required: true,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        match: [/.+@.+\..+/, "Please provide a valid email address"],
      },
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

module.exports = mongoose.model('Quote', quoteSchema);
