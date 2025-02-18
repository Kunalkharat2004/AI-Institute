import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useLocation, Outlet, useNavigate } from "react-router-dom";
import useInstituteStore from "../../../../store/useInstituteStore";
import { useMutation } from "@tanstack/react-query";
import { updateInstituteDetailsAPI } from "../../../../http/api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const steps = [
  "Form",
  "Self Disclosure",
  "Facility Inspection",
  "NLP",
  "Real Time",
  "Trend Analysis",
  "Deficiency Report",
];

const Timeline = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const { instituteData } = useInstituteStore();
  const navigate = useNavigate();
  const location = useLocation();

  const mutation = useMutation({
    mutationFn: updateInstituteDetailsAPI,
    onSuccess: () => {
      toast.success("Details updated successfully.", {
        autoClose: 4000,
      });
    },
    onError: () => {
      toast.error("Error updating details.", {
        autoClose: 4000,
      });
    },
  });

  const handleStepClick = (step, index) => {
    setCurrentStep(index + 1);
    const route = steps[index].toLowerCase().replace(/[^a-zA-Z0-9]/g, "-");
    navigate(`/inspection/timeline/${route}`);
  };

  const handleSave = () => {
    mutation.mutate(instituteData);
  };

  // Define a color scheme for the steps
  const colors = [
    "bg-red-500",
    "bg-green-500",
    "bg-blue-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-teal-500",
  ];

  return (
    <div className="flex flex-col items-center bg-white p-4 shadow-md rounded-lg">
      {/* Header Section */}
      {location.pathname === "/inspection/timeline/form" && (
        <div className="flex flex-col lg:flex-row justify-between items-center w-full space-y-4 lg:space-y-0">
          <div className="flex items-center gap-2">
            <button className="bg-purple-200 text-purple-700 rounded-full p-2">
              <FaArrowLeft className="w-4 h-4" />
            </button>
            <span className="font-bold text-blue-700 text-sm lg:text-base">
              {instituteData.applicationNo} | EOA Recommended by Council
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="bg-gray-300 text-gray-700 rounded px-3 py-1 text-sm lg:text-base"
              onClick={handleSave}
            >
              Save
            </button>
            <button className="bg-purple-200 text-purple-700 rounded-full p-2">
              <FaArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Timeline Steps */}
      <div className="flex items-center justify-center gap-4 mt-4 w-full">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center w-full">
            <button
              onClick={() => handleStepClick(step, index)}
              className={`transition-all duration-500 ease-in-out ${
                index + 1 === currentStep
                  ? `font-bold rounded-[30px] px-8 py-3 border-2 scale-105 shadow-lg ${
                      colors[index % colors.length]
                    } text-white`
                  : `${colors[index % colors.length]} text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 border-2 border-gray-300 hover:scale-105`
              }`}
            >
              {index + 1 === currentStep ? step : index + 1}
            </button>
            {index < steps.length - 1 && (
              <div
                className={`h-1 flex-grow transition-all duration-500 ease-in-out bg-orange-500`}
              ></div>
            )}
          </div>
        ))}
      </div>

      {/* Render Child Component */}
      <div className="mt-6 w-full">
        <Outlet />
      </div>

      <ToastContainer />
    </div>
  );
};

export default Timeline;