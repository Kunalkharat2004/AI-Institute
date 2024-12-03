import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getInstituteTrust, instituteTrust } from "../http/api";

const InstituteTrust = () => {
  const [formData, setFormData] = useState({
    trustName: "",
    establishmentYear: "",
  });

  // Fetch existing trust data
  const { data: existingData, isLoading } = useQuery(
    ["instituteTrust"],
    getInstituteTrust,
    {
      onSuccess: (data) => {
        if (data && data.data.institutionTrust) {
          setFormData((prevData) => ({
            ...prevData,
            ...data.data.institutionTrust,
          }));
        }
      },
      onError: () => {
        toast.error("Failed to fetch institute trust details.");
      },
    }
  );

  // Submit form mutation
  const mutation = useMutation({
    mutationFn: instituteTrust,
    onSuccess: () => {
      toast.success("Institute Trust details submitted successfully!");
      window.location.reload(); // Reload the page to reset the state
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      mutation.mutate({ instituteTrust: formData });
    } catch (error) {
      console.error("Error submitting data:", error);
      toast.error("An error occurred while submitting the form.");
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Institute Trust Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Trust Name:</label>
          <input
            type="text"
            name="trustName"
            value={formData.trustName}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter Trust Name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            College Establishment Year:
          </label>
          <input
            type="number"
            name="establishmentYear"
            value={formData.establishmentYear}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter Establishment Year (e.g., 1985)"
            required
          />
        </div>
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

export default InstituteTrust;
