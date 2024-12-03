import React, { useState } from "react";

const InstituteDetails = () => {
  const [aisheCode, setAisheCode] = useState("");
  const [applicationNo, setApplicationNo] = useState("");

  const currentAcademicYear = "2024-2025";
  const currentDate = new Date().toISOString().split("T")[0];

  const generateApplicationNo = (code) => {
    if (code) {
      const prefix = "EN24";
      const randomNumber = Math.floor(10000000 + Math.random() * 90000000);
      setApplicationNo(`${prefix}-${code}-${randomNumber}`);
    } else {
      setApplicationNo("");
    }
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h2 className="text-lg font-bold mb-4">Institute Details</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="instituteName" className="block font-medium mb-1">
            Institute Name
          </label>
          <input id="instituteName" type="text" className="border rounded p-2 w-full" />
        </div>
        <div>
          <label htmlFor="address" className="block font-medium mb-1">
            Address
          </label>
          <input id="address" type="text" className="border rounded p-2 w-full" />
        </div>
        <div>
          <label htmlFor="academicYear" className="block font-medium mb-1">
            Academic Year
          </label>
          <input
            id="academicYear"
            type="text"
            value={currentAcademicYear}
            disabled
            className="border rounded p-2 w-full bg-gray-100"
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
          <input id="state" type="text" className="border rounded p-2 w-full" />
        </div>
        <div>
          <label htmlFor="district" className="block font-medium mb-1">
            District
          </label>
          <input id="district" type="text" className="border rounded p-2 w-full" />
        </div>
        <div>
          <label htmlFor="city" className="block font-medium mb-1">
            City
          </label>
          <input id="city" type="text" className="border rounded p-2 w-full" />
        </div>
        <div>
          <label htmlFor="pincode" className="block font-medium mb-1">
            Pincode
          </label>
          <input id="pincode" type="text" className="border rounded p-2 w-full" />
        </div>
        <div>
          <label htmlFor="aisheCode" className="block font-medium mb-1">
            AISHE Code
          </label>
          <input
            id="aisheCode"
            type="text"
            value={aisheCode}
            onChange={(e) => {
              setAisheCode(e.target.value);
              generateApplicationNo(e.target.value);
            }}
            className="border rounded p-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="applicationNo" className="block font-medium mb-1">
            Application Number
          </label>
          <input
            id="applicationNo"
            type="text"
            value={applicationNo}
            disabled
            className="border rounded p-2 w-full bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
};

export default InstituteDetails;
