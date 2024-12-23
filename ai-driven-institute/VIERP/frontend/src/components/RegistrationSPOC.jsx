import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getRegistrationSPOC, registrationSPOC } from "../http/api";

const RegistrationSPOC = () => {
  const [formData, setFormData] = useState({
    spocName: "",
    spocEmail: "",
    spocPhone: "",
    spocPAN: "",
  });

  // Fetch existing SPOC details
  const { data: existingData, isLoading } = useQuery(
    ["registrationSPOC"],
    getRegistrationSPOC,
    {
      onSuccess: (data) => {
        if (data && data.data.registrationSPOC) {
          setFormData((prevData) => ({
            ...prevData,
            ...data.data.registrationSPOC,
          }));
        }
      },
      onError: () => {
        toast.error("Failed to fetch SPOC details.");
      },
    }
  );

  // Submit form mutation
  const mutation = useMutation({
    mutationFn: registrationSPOC,
    onSuccess: () => {
      toast.success("Registration & SPOC Contact details submitted successfully!");
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
      mutation.mutate({ registrationSPOC: formData });
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
      <h2 className="text-2xl font-bold mb-4">Registration & SPOC Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">SPOC Name:</label>
          <input
            type="text"
            name="spocName"
            value={formData.spocName}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter SPOC Name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">SPOC Email:</label>
          <input
            type="email"
            name="spocEmail"
            value={formData.spocEmail}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter SPOC Email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">SPOC Phone:</label>
          <input
            type="text"
            name="spocPhone"
            value={formData.spocPhone}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter SPOC Phone Number"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">SPOC PAN:</label>
          <input
            type="text"
            name="spocPAN"
            value={formData.spocPAN}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter SPOC PAN Number"
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

export default RegistrationSPOC;
