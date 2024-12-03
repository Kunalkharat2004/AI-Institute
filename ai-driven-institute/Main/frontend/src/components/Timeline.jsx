import React from "react";

const Timeline = () => {
  const steps = Array.from({ length: 12 }, (_, i) => i + 1); // Generate steps 1 to 12
  const currentStep = 2; // Change this dynamically to highlight the current step

  return (
    <div className="flex items-center justify-between bg-white p-4 shadow-md rounded-lg">
      <div className="flex items-center gap-2">
        <button className="bg-purple-200 text-purple-700 rounded-full p-2">
          &#8592;
        </button>
        <span className="font-bold text-blue-700">
          1-43660802466 | EOA Recommended by Council
        </span>
      </div>
      <div className="flex flex-grow items-center justify-center space-x-2">
        {steps.map((step) => (
          <div key={step} className="flex items-center">
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full ${
                step === currentStep
                  ? "bg-orange-500 text-white font-bold"
                  : "bg-blue-800 text-white"
              }`}
            >
              {step}
            </div>
            {step < steps.length && (
              <div className="h-1 w-8 bg-blue-800"></div>
            )}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <button className="bg-gray-300 text-gray-700 rounded px-4 py-1">
          Save
        </button>
        <button className="bg-gray-300 text-gray-700 rounded px-4 py-1">
          Edit
        </button>
        <button className="bg-purple-200 text-purple-700 rounded-full p-2">
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Timeline;
