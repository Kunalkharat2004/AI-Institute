import React, { useState } from 'react';
import axios from 'axios';

const InstituteDetails = () => {
  const currentYear = '2024-2025';
  const currentDate = new Date().toLocaleDateString();

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    academicYear: currentYear,
    date: currentDate,
    state: '',
    district: '',
    city: '',
    pincode: '',
    aisheCode: '',
    applicationNo: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      applicationNo:
        name === 'aisheCode' ? `${value.toUpperCase()}EN24${Math.random().toString().slice(2, 10)}` : prevData.applicationNo,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/institute', {
        instituteDetails: formData,
      });
      alert('Institute details submitted successfully!');
      console.log(response.data);
      setFormData({
        name: '',
        address: '',
        academicYear: currentYear,
        date: currentDate,
        state: '',
        district: '',
        city: '',
        pincode: '',
        aisheCode: '',
        applicationNo: '',
      });
    } catch (error) {
      console.error('Error submitting data:', error);
      alert('An error occurred while submitting the form.');
    }
  };

  return (
    <div className="p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Institute Details Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Institute Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
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
          <label className="block text-gray-700 font-bold mb-2">Academic Year:</label>
          <input
            type="text"
            name="academicYear"
            value={formData.academicYear}
            readOnly
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
          <label className="block text-gray-700 font-bold mb-2">District:</label>
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
          <label className="block text-gray-700 font-bold mb-2">AISHE Code:</label>
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
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Application Number:</label>
          <input
            type="text"
            name="applicationNo"
            value={formData.applicationNo}
            readOnly
            className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
          />
        </div>
        <button type="submit" className="text-white bg-blue-600 hover:bg-blue-700 p-2 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default InstituteDetails;
