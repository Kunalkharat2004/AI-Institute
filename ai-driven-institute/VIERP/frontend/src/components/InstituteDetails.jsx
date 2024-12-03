import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useMutation, useQuery } from "@tanstack/react-query";
import { instituteDetails, getInstituteDetails } from "../http/api";

const InstituteDetails = () => {
  const currentDate = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  const [formData, setFormData] = useState({
    instituteName: "",
    address: "",
    academicYear: "",
    date: currentDate,
    state: "",
    district: "",
    city: "",
    pincode: "",
    aisheCode: "",
  });

  // Fetch existing data using useQuery
  const { data: existingData, isLoading } = useQuery(
    ["instituteDetails"],
    getInstituteDetails,
    {
      onSuccess: (data) => {
        console.log("Institutional data: ",data.data.institutionDetails
        );
        if (data && data.data.institutionDetails) {
          setFormData((prevData) => ({
            ...prevData,
            ...data.data.institutionDetails,
          }));
        }
      },
      onError: () => {
        toast.error("Failed to fetch institute details.");
      },
    }
  );

  const mutation = useMutation({
    mutationFn: instituteDetails,
    onSuccess: () => {
      toast.success("Institute details submitted successfully!", {
        autoClose: 4000,
      });
      window.location.reload(); // Reload the page to reset the state
    },
    onError: () => {
      toast.error("An error occurred while submitting the form.", {
        autoClose: 4000,
      });
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
      mutation.mutate({ instituteDetails: formData });
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
      <h2 className="text-2xl font-bold mb-4">Institute Details Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Institute Name:
          </label>
          <input
            type="text"
            name="instituteName"
            value={formData.instituteName}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter Institute Name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter Address"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Academic Year:
          </label>
          <input
            type="text"
            name="academicYear"
            value={formData.academicYear}
            onChange={handleInputChange}
            placeholder="YYYY-YYYY"
            className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Date:</label>
          <input
            type="text"
            name="date"
            value={formData.date}
            readOnly
            className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">State:</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter State"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            District:
          </label>
          <input
            type="text"
            name="district"
            value={formData.district}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter District"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">City:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter City"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Pincode:</label>
          <input
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter Pincode"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            AISHE Code:
          </label>
          <input
            type="text"
            name="aisheCode"
            value={formData.aisheCode}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter AISHE Code"
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

export default InstituteDetails;
