import React from "react";

const MaterialSelector = ({ formData, setFormData }) => {
    const handleChange = (event) => {
        const { options } = event.target;
        const selectedValues = [];

        for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
                selectedValues.push(options[i].value);
            }
        }
        console.log("Selected values:", selectedValues); // Debugging line

        setFormData({
            ...formData,
            projectDetails: {
                ...formData.projectDetails,
                materials: selectedValues,
            },
        });
    };

    return (
        <select
            multiple
            value={formData.projectDetails.materials}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-transparent border-2 rounded-2xl border-gradient-to-r from-[#4A7A63] to-[#709c86] focus:outline-none focus:ring-2 focus:ring-[#4A7A63] text-[#709c86]"
        >
            <option value="Gravel">Gravel</option>
            <option value="Soil">Soil</option>
            <option value="Turf/Grass">Turf/Grass</option>
            <option value="Stones">Stones</option>
            <option value="Paving Blocks">Paving Blocks</option>
        </select>
    );
};

export default MaterialSelector;
