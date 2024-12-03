import React, { useState } from "react";
import { toast } from "react-toastify";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getFinancialDetails, submitFinancialDetails } from "../http/api";

const FinancialManagement = () => {
  const [formData, setFormData] = useState({
    bankName: "",
    ifscCode: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  // Fetch existing financial details
  const { data: existingData, isLoading } = useQuery(
    ["financialDetails"],
    getFinancialDetails,
    {
      onSuccess: (data) => {
        if (data && data.data.financialManagement) {
          setFormData((prev)=>({
           ...prev,
            ...data.data.financialManagement 
          }));
        }
      },
      onError: () => {
        toast.error("Failed to fetch financial details.");
      },
    }
  );

  // Submit form mutation
  const mutation = useMutation({
    mutationFn: submitFinancialDetails,
    onSuccess: () => {
      toast.success("Financial Management details submitted successfully!", {
        autoClose: 4000,
      });
      window.location.reload(); // Reload the page to reset the
    },
    onError: () => {
      toast.error("An error occurred while submitting the form.");
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const ifscRegex = /^[A-Z]{4}0[A-Z0-9]{6}$/; // Example IFSC code format: ABCD0123456
    if (!ifscRegex.test(formData.ifscCode)) {
      setErrorMessage("Invalid IFSC Code. Please enter a valid IFSC Code.");
      return false;
    }
    setErrorMessage(""); // Clear error message if validation passes
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    mutation.mutate({ financialManagement: formData });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Financial Management Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Bank Name:</label>
          <input
            type="text"
            name="bankName"
            value={formData.bankName}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter Bank Name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">IFSC Code:</label>
          <input
            type="text"
            name="ifscCode"
            value={formData.ifscCode}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter IFSC Code"
            required
          />
        </div>
        {errorMessage && (
          <p className="text-red-600 font-bold text-center mt-2">{errorMessage}</p>
        )}
        <button
          type="submit"
          className="text-white bg-blue-600 hover:bg-blue-700 p-2 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FinancialManagement;
