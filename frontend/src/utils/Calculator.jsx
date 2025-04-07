import React, { useState } from "react";
import { estimator } from "./cost";

const Calculator = () => {
    const [projectName, setProjectName] = useState("");
    const [budget, setBudget] = useState("");
    const [area, setArea] = useState("");
    const [turf_irrigation, setTurfIrrigation] = useState(false);
    const [mulch, setMulch] = useState(false);
    const [turf_or_sod, setTurfOrSod] = useState(false);
    const [cleanup, setCleanup] = useState(false);
    const [totalCost, setTotalCost] = useState(null);

    const calculateCost = () => {
        const parsedArea = parseFloat(area);
        if (isNaN(parsedArea) || parsedArea <= 0) {
            alert("Please enter a valid area");
            return;
        }
        const parsedBudget = parseFloat(budget);
        if (isNaN(parsedBudget) || parsedBudget <= 0) {
            alert("Please enter a valid budget");
            return;
        }

        const cost = estimator.Calculation({
            area: parsedArea || 0,
            turf_irrigation,
            mulch,
            turf_or_sod,
            cleanup,
        });
        setTotalCost(cost);
    };

    return (
        <div className="max-w-md mx-auto bg-white p-5 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">Cost Estimator</h2>
            <input
                type="text"
                placeholder="Enter project name"
                className="w-full border p-2 rounded mb-3"
                onChange={(e) => setProjectName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Enter budget ($USD)"
                className="w-full border p-2 rounded mb-3"
                onChange={(e) => setBudget(e.target.value)}
            />
            <input
                type="number"
                placeholder="Enter area (sq ft)"
                className="w-full border p-2 rounded mb-3"
                onChange={(e) => setArea(e.target.value)}
            />

            <div className="space-y-2">
                {[
                    { label: "Turf (with Irrigation)", state: turf_irrigation, setter: setTurfIrrigation },
                    { label: "Mulch", state: mulch, setter: setMulch },
                    { label: "Turf (no Irrigation) or Sod", state: turf_or_sod, setter: setTurfOrSod },
                    { label: "Cleanup", state: cleanup, setter: setCleanup },
                ].map((item) => (
                    <button
                        key={item.label}
                        onClick={() => item.setter(!item.state)}
                        className={`w-full px-4 py-2 rounded transition ${item.state ? "bg-[#4A7A63] text-white" : "bg-gray-300"
                            }`}
                    >
                        {item.label}: {item.state ? "Yes" : "No"}
                    </button>
                ))}
            </div>

            <button
                onClick={calculateCost}
                className="w-full bg-[#E07A5F] text-white px-4 py-2 mt-4 rounded hover:bg-[#4A7A63]">
                Calculate Cost
            </button>

            {totalCost !== null && (
                <p className="text-lg font-bold mt-4">Estimated Cost*: ${totalCost} for Project {projectName}</p>
            )}
            <h3 className="text-small font-semibold mb-1">*Actual Price May Vary</h3>
        </div>
    );
};

export default Calculator;
