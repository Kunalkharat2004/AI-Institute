import React, { useEffect, useState } from "react";
import useInstituteStore from "../../../store/useInstituteStore";

const InstituteDetails = () => {
  const { instituteData,updateInstituteDetails } = useInstituteStore(); // Zustand store to get data
  const [formData, setFormData] = useState({
    instituteName: "",
    address: "",
    academicYear: "",
    state: "",
    district: "",
    city: "",
    pincode: "",
    aisheCode: "",
  });

  const currentDate = new Date().toISOString().split("T")[0];


  useEffect(() => {
    if (instituteData?.instituteDetails) {
      setFormData({
        ...formData,
        ...instituteData.instituteDetails, // Pre-fill fields with data
      });
    }
  }, [instituteData]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    updateInstituteDetails({ ...formData, [id]: value });
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h2 className="text-lg font-bold mb-4">Institute Details</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="instituteName" className="block font-medium mb-1">
            Institute Name
          </label>
          <input
            id="instituteName"
            type="text"
            value={formData.instituteName}
            onChange={handleChange}
            className="border rounded p-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="address" className="block font-medium mb-1">
            Address
          </label>
          <input
            id="address"
            type="text"
            value={formData.address}
            onChange={handleChange}
            className="border rounded p-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="academicYear" className="block font-medium mb-1">
            Academic Year
          </label>
          <input
            id="academicYear"
            type="text"
            value={formData.academicYear}
            onChange={handleChange}
            placeholder="YYYY-YYYY"
            className="border rounded p-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="date" className="block font-medium mb-1">
            Date
          </label>
          <input
            id="date"
            type="date"
            value={currentDate}
            disabled
            className="border rounded p-2 w-full bg-gray-100"
          />
        </div>
        <div>
          <label htmlFor="state" className="block font-medium mb-1">
            State
          </label>
          <input
            id="state"
            type="text"
            value={formData.state}
            onChange={handleChange}
            className="border rounded p-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="district" className="block font-medium mb-1">
            District
          </label>
          <input
            id="district"
            type="text"
            value={formData.district}
            onChange={handleChange}
            className="border rounded p-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="city" className="block font-medium mb-1">
            City
          </label>
          <input
            id="city"
            type="text"
            value={formData.city}
            onChange={handleChange}
            className="border rounded p-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="pincode" className="block font-medium mb-1">
            Pincode
          </label>
          <input
            id="pincode"
            type="text"
            value={formData.pincode}
            onChange={handleChange}
            className="border rounded p-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="aisheCode" className="block font-medium mb-1">
            AISHE Code
          </label>
          <input
            id="aisheCode"
            type="text"
            value={formData.aisheCode}
            onChange={handleChange}
            className="border rounded p-2 w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default InstituteDetails;
