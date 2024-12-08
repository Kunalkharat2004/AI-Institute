/* eslint-disable react/prop-types */
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
  "Facility Inspection",
  "Campus Infrastructure",
  "Campus Greenery & Geomapical Navigation",
  "Curriculum Inspection",
  "Document Analysis",
  "Faculty, Teaching & Evaluation Learning Inspection",
  "Faculty Verification",
  "Student Satisfaction Survey",
  "Student Placement",
  "Research & Publication",
  "Student Growth, Grades & Progression",
  "College Deficiency Report",
  "Extracurricular & Social Activities",
  "College Management Activities",
];

const Timeline = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const { instituteData } = useInstituteStore();
  const navigate = useNavigate();
  const location = useLocation(); // Get current route

  const mutation = useMutation({
    mutationFn: updateInstituteDetailsAPI,
    onSuccess: (data) => {
      console.log("Update successful:", data);
      toast.success("Details updated successfully.", {
        autoClose: 4000,
      });
    },
    onError: (error) => {
      console.error("Error updating details:", error);
      toast.error("Error updating details.", {
        autoClose: 4000,
      });
    },
  });

  const handleStepClick = (step, index) => {
    setCurrentStep(index + 1);
    const route = steps[index].toLowerCase().replace(/[^a-zA-Z0-9]/g, "-"); // Convert step name to URL-friendly route
    navigate(`/inspection/timeline/${route}`);
  };

  const handleSave = () => {
    mutation.mutate(instituteData);
  };

  return (
    <div className="flex flex-col items-center bg-white p-4 shadow-md rounded-lg">
      {/* Conditionally Render Header Sections */}
      {location.pathname === "/inspection/timeline/form" && (
        <>
          {/* Timeline Header */}
          <div className="flex justify-between items-center w-full lg:flex-row space-y-4 lg:space-y-0">
            {/* Left Section */}
            <div className="flex items-center gap-2">
              <button className="bg-purple-200 text-purple-700 rounded-full p-2 lg:p-3">
                <FaArrowLeft className="w-4 h-4 lg:w-5 lg:h-5" />
              </button>
              <span className="font-bold text-blue-700 text-sm lg:text-base">
                {instituteData.applicationNo} | EOA Recommended by Council
              </span>
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
          </div>
        </>
      )}

      {/* Timeline Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-2 lg:gap-4 mt-4">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center">
            <button
              onClick={() => handleStepClick(step, index)}
              className={`flex items-center justify-center w-6 h-6 lg:w-8 lg:h-8 rounded-full transition ${
                index + 1 === currentStep
                  ? "bg-orange-500 text-white font-bold"
                  : "bg-blue-800 text-white"
              }`}
            >
              {index + 1}
            </button>
            {index + 1 === currentStep && (
              <span className="text-sm lg:text-base font-medium ml-2">
                {step}
              </span>
            )}
            {index < steps.length - 1 && (
              <div
                className={`h-1 w-6 lg:w-10 transition ${
                  index + 1 < currentStep ? "bg-orange-500" : "bg-blue-800"
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>

      {/* Render Dynamic Child Component */}
      <div className="mt-6 w-full">
        <Outlet />
      </div>

      <ToastContainer />
    </div>
  );
};

export default Timeline;
