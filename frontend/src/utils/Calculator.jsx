import React from "react";
import { estimator } from "./cost";

export function formatPhoneNumber(value) {
    const cleaned = ('' + value).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
    if (match) {
        let result = '';
        if (match[1]) result += '(' + match[1];
        if (match[2]) result += ') ' + match[2];
        if (match[3]) result += '-' + match[3];
        return result;
    }
    return value;
}

const Calculator = ({ formData, setFormData, setConfirmed, handleNext }) => {
    const handleChange = (field, value) => {
        setFormData({
            ...formData,
            projectDetails: {
                ...formData.projectDetails,
                [field]: value,
            },
        });
    };

    const calculateCost = () => {
        const { name, squareFootage, budget, completionDate, materials } = formData.projectDetails;
        const area = parseFloat(squareFootage);
        const parsedBudget = parseFloat(budget);

        if (!name || name.trim() === "") {
            alert("Please enter a project name");
            return;
        }

        if (!completionDate) {
            alert("Please select an expected completion date");
            return;
        }

        if (!materials || materials.trim() === "") {
            alert("Please describe the materials desired");
            return;
        }

        if (isNaN(area) || area <= 0) {
            alert("Please enter a valid square footage (greater than 0)");
            return;
        }

        if (isNaN(parsedBudget) || parsedBudget <= 0) {
            alert("Please enter a valid budget (greater than 0)");
            return;
        }

        const cost = estimator.Calculation({
            area,
            turf_irrigation: formData.projectDetails.turf_irrigation || false,
            mulch: formData.projectDetails.mulch || false,
            turf_or_sod: formData.projectDetails.turf_or_sod || false,
            cleanup: formData.projectDetails.cleanup || false,
        });

        setFormData({
            ...formData,
            projectDetails: {
                ...formData.projectDetails,
                estimatedCost: cost,
            },
        });
    };

    const toggleOption = (field) => {
        setFormData({
            ...formData,
            projectDetails: {
                ...formData.projectDetails,
                [field]: !formData.projectDetails[field],
            },
        });
    };

    return (
        <div className="max-w-md mx-auto bg-white p-5 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
            <input
                type="text"
                placeholder="Project Name"
                value={formData.projectDetails.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="w-full border p-2 rounded mb-3"
            />
            <input
                type="number"
                placeholder="Square Footage"
                value={formData.projectDetails.squareFootage}
                onChange={(e) => handleChange("squareFootage", e.target.value)}
                className="w-full border p-2 rounded mb-3"
            />
            <input
                type="date"
                placeholder="Expected Completion Date"
                value={formData.projectDetails.completionDate}
                onChange={(e) => handleChange("completionDate", e.target.value)}
                className="w-full border p-2 rounded mb-3"
            />
            <input
                type="text"
                placeholder="Materials Desired"
                value={formData.projectDetails.materials}
                onChange={(e) => handleChange("materials", e.target.value)}
                className="w-full border p-2 rounded mb-3"
            />
            <input
                type="number"
                placeholder="Budget ($USD)"
                value={formData.projectDetails.budget}
                onChange={(e) => handleChange("budget", e.target.value)}
                className="w-full border p-2 rounded mb-3"
            />
            <textarea
                placeholder="Additional Comments"
                value={formData.projectDetails.comments}
                onChange={(e) => handleChange("comments", e.target.value)}
                className="w-full border p-2 rounded mb-3"
            />

            <div className="space-y-2">
                {["turf_irrigation", "mulch", "turf_or_sod", "cleanup"].map((field) => (
                    <button
                        key={field}
                        onClick={() => toggleOption(field)}
                        className={`w-full px-4 py-2 rounded transition ${formData.projectDetails[field] ? "bg-[#4A7A63] text-white" : "bg-gray-300"}`}
                    >
                        {field.replace(/_/g, " ")}: {formData.projectDetails[field] ? "Yes" : "No"}
                    </button>
                ))}
            </div>
            <div className="flex justify-center mt-4">

                <button
                    onClick={() => {
                        // You can still calculate estimatedCost here before confirming

                        // Then trigger confirmation + next screen
                        setConfirmed(true);
                        setTimeout(() => {
                            handleNext();
                        }, 1000);
                    }}
                    className="bg-gradient-to-r from-[#E07A5F] to-[#d46653] text-white py-2 px-4 rounded hover:shadow-lg hover:shadow-[#E07A5F]/50 transition-transform transform hover:scale-105"
                >
                    Confirm
                </button>
            </div>
        </div>
    );
};

export default Calculator;
