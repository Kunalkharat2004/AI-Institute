import React from "react";

const InstituteTrust = () => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h2 className="text-lg font-bold mb-4">Institute Trust</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="trustName" className="block font-medium mb-1">
            Trust Name
          </label>
          <input id="trustName" type="text" className="border rounded p-2 w-full" />
        </div>
        <div>
          <label htmlFor="establishYear" className="block font-medium mb-1">
            College Establish Year
          </label>
          <input id="establishYear" type="number" className="border rounded p-2 w-full" />
        </div>
      </div>
    </div>
  );
};

export default InstituteTrust;
