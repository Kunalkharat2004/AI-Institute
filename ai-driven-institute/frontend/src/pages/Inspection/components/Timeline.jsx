import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import useInstituteStore from "../../../store/useInstituteStore";
import { useMutation } from "@tanstack/react-query";
import { updateInstituteDetailsAPI } from "../../../http/api";
import { toast,ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Timeline = () => {
  const steps = Array.from({ length: 12 }, (_, i) => i + 1); // Generate steps 1 to 12
  const [currentStep, setCurrentStep] = useState(1); // Default current step
  const { instituteData } = useInstituteStore(); // Zustand store to get data

  // Mutation for saving data
  const mutation = useMutation({
    mutationFn: updateInstituteDetailsAPI, // API function
    onSuccess: (data) => {
      console.log("Update successful:", data);
      toast.success("Details updated successfully.",{
        autoClose: 4000,
      });
    },
    onError: (error) => {
      console.error("Error updating details:", error);
      toast.error("Error updating details.",{
        autoClose: 4000,
      })
    },
  });

  const handleStepClick = (step) => {
    setCurrentStep(step);
  };

  const handleSave = () => {
    mutation.mutate(instituteData); // Trigger mutation with Zustand data
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-white p-4 shadow-md rounded-lg space-y-4 lg:space-y-0">
      {/* Left Section */}
      <div className="flex items-center gap-2">
        <button className="bg-purple-200 text-purple-700 rounded-full p-2 lg:p-3">
          <FaArrowLeft className="w-4 h-4 lg:w-5 lg:h-5" />
        </button>
        <span className="font-bold text-blue-700 text-sm lg:text-base">
          {instituteData.applicationNo} | EOA Recommended by Council
        </span>
      </div>

      {/* Timeline Section */}
      <div className="flex flex-wrap items-center justify-center gap-2 lg:gap-4">
        {steps.map((step) => (
          <div key={step} className="flex items-center">
            <button
              onClick={() => handleStepClick(step)}
              className={`flex items-center justify-center w-6 h-6 lg:w-8 lg:h-8 rounded-full transition ${
                step === currentStep
                  ? "bg-orange-500 text-white font-bold"
                  : "bg-blue-800 text-white"
              }`}
            >
              {step}
            </button>
            {step < steps.length && (
              <div
                className={`h-1 w-6 lg:w-10 transition ${
                  step < currentStep ? "bg-orange-500" : "bg-blue-800"
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2">
        <button
          className="bg-gray-300 text-gray-700 rounded px-2 py-1 lg:px-4 lg:py-1"
          onClick={handleSave}
        >
          Save
        </button>
        <button className="bg-purple-200 text-purple-700 rounded-full p-2 lg:p-3">
          <FaArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Timeline;
