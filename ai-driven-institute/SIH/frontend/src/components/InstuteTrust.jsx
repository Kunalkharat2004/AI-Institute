import React, { useState } from 'react';
import axios from 'axios';

const InstituteTrust = () => {
  const [formData, setFormData] = useState({
    trustName: '',
    establishmentYear: '',
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
      const response = await axios.post('http://localhost:5000/api/instituteTrust', {
        trustDetails: formData,
      });
      alert('Institute Trust details submitted successfully!');
      console.log(response.data);
      setFormData({
        trustName: '',
        establishmentYear: '',
      });
    } catch (error) {
      console.error('Error submitting data:', error);
      alert('An error occurred while submitting the form.');
    }
  };

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
          <label className="block text-gray-700 font-bold mb-2">College Establishment Year:</label>
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
        <button type="submit" className="text-white bg-blue-600 hover:bg-blue-700 p-2 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default InstituteTrust;
