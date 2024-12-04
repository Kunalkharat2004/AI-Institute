import React from "react";

const InstitutionMoreInfo = () => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h2 className="text-lg font-bold mb-4">Institution Details: More Information</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label>Name of Institution:</label>
          <p className="border rounded p-2">Rajiv Gandhi College of Engineering</p>
        </div>
        <div>
          <label>Address of Institution:</label>
          <p className="border rounded p-2">Ballarpur Road, Babupeht</p>
        </div>
        <div>
          <label>State/UT:</label>
          <p className="border rounded p-2">Maharashtra</p>
        </div>
        <div>
          <label>District:</label>
          <p className="border rounded p-2">Chandrapur</p>
        </div>
      </div>
    </div>
  );
};

export default InstitutionMoreInfo;
