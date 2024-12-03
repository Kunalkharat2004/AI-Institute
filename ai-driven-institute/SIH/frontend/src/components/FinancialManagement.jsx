import React, { useState } from 'react';
import axios from 'axios';

const FinancialManagement = () => {
  const [formData, setFormData] = useState({
    bankName: '',
    ifscCode: '',
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
      const response = await axios.post('http://localhost:5000/api/financialManagement', {
        financialDetails: formData,
      });
      alert('Financial Management details submitted successfully!');
      console.log(response.data);
      setFormData({
        bankName: '',
        ifscCode: '',
      });
    } catch (error) {
      console.error('Error submitting data:', error);
      alert('An error occurred while submitting the form.');
    }
  };

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
        <button type="submit" className="text-white bg-blue-600 hover:bg-blue-700 p-2 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FinancialManagement;
