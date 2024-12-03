import React, { useState } from "react";
import { toast } from "react-toastify";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getInstituteInfo, submitInstituteInfo } from "../http/api";

const InstituteInfo = () => {
  const [formData, setFormData] = useState({
    aicteZone: "",
    instituteType: "",
    intake: [{ branch: "", ug: "", pg: "" }],
  });

  const [errorMessage, setErrorMessage] = useState("");

  // Fetch existing data
  const { data: existingData, isLoading } = useQuery(
    ["instituteInfo"],
    getInstituteInfo,
    {
      onSuccess: (data) => {
        if (data && data.data.institutionInfo) {
          setFormData((prevData) => ({
            ...prevData,
            ...data.data.institutionInfo,
          }));
        }
      },
      onError: () => {
        toast.error("Failed to fetch institute information.");
      },
    }
  );

  // Mutation for submitting data
  const mutation = useMutation({
    mutationFn: submitInstituteInfo,
    onSuccess: () => {
      toast.success("Institute info submitted successfully!", {
        autoClose: 4000,
      });
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

  const handleIntakeChange = (index, field, value) => {
    const updatedIntake = formData.intake.map((row, i) =>
      i === index ? { ...row, [field]: value } : row
    );
    setFormData((prevData) => ({ ...prevData, intake: updatedIntake }));
  };

  const addRow = () => {
    setFormData((prevData) => ({
      ...prevData,
      intake: [...prevData.intake, { branch: "", ug: "", pg: "" }],
    }));
  };

  const removeRow = (index) => {
    setFormData((prevData) => ({
      ...prevData,
      intake: prevData.intake.filter((_, i) => i !== index),
    }));
  };

  const validateForm = () => {
    for (const row of formData.intake) {
      if (parseInt(row.ug) > 120) {
        setErrorMessage("UG value cannot exceed 120.");
        return false;
      }
      if (parseInt(row.pg) > 60) {
        setErrorMessage("PG value cannot exceed 60.");
        return false;
      }
    }
    setErrorMessage(""); // Clear error message if validation passes
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    mutation.mutate({ instituteInfo: formData });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Institute Info & Intake Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">AICTE Zone:</label>
          <select
            name="aicteZone"
            value={formData.aicteZone}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          >
            <option value="">Select Zone</option>
            <option value="east">East</option>
            <option value="west">West</option>
            <option value="north">North</option>
            <option value="south">South</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Institute Type:</label>
          <select
            name="instituteType"
            value={formData.instituteType}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          >
            <option value="">Select Institute Type</option>
            <option value="Autonomous">Autonomous</option>
            <option value="Deemed">Deemed</option>
            <option value="Non-Autonomous">Non-Autonomous</option>
            <option value="Private">Private</option>
            <option value="Government">Government</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Intake:</label>
          <table className="w-full border border-gray-300">
            <thead>
              <tr>
                <th className="border px-2 py-1">Branch</th>
                <th className="border px-2 py-1">UG</th>
                <th className="border px-2 py-1">PG</th>
                <th className="border px-2 py-1">Actions</th>
              </tr>
            </thead>
            <tbody>
              {formData.intake.map((row, index) => (
                <tr key={index}>
                  <td className="border px-2 py-1">
                    <input
                      type="text"
                      value={row.branch}
                      onChange={(e) =>
                        handleIntakeChange(index, "branch", e.target.value)
                      }
                      className="w-full p-1 border border-gray-300 rounded-md"
                      placeholder="Branch"
                      required
                    />
                  </td>
                  <td className="border px-2 py-1">
                    <input
                      type="number"
                      value={row.ug}
                      onChange={(e) =>
                        handleIntakeChange(index, "ug", e.target.value)
                      }
                      className="w-full p-1 border border-gray-300 rounded-md"
                      placeholder="UG"
                      required
                    />
                  </td>
                  <td className="border px-2 py-1">
                    <input
                      type="number"
                      value={row.pg}
                      onChange={(e) =>
                        handleIntakeChange(index, "pg", e.target.value)
                      }
                      className="w-full p-1 border border-gray-300 rounded-md"
                      placeholder="PG"
                      required
                    />
                  </td>
                  <td className="border px-2 py-1 text-center">
                    <button
                      type="button"
                      onClick={() => removeRow(index)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            type="button"
            onClick={addRow}
            className="mt-2 text-blue-600 hover:text-blue-800"
          >
            Add Row
          </button>
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

export default InstituteInfo;
