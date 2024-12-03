import React from "react";

const RegistrationSPOC = () => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h2 className="text-lg font-bold mb-4">Registration & SPOC Contact</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="spocName" className="block font-medium mb-1">
            SPOC Name
          </label>
          <input id="spocName" type="text" className="border rounded p-2 w-full" />
        </div>
        <div>
          <label htmlFor="email" className="block font-medium mb-1">
            Mail
          </label>
          <input id="email" type="email" className="border rounded p-2 w-full" />
        </div>
        <div>
          <label htmlFor="phone" className="block font-medium mb-1">
            Phone
          </label>
          <input id="phone" type="tel" className="border rounded p-2 w-full" />
        </div>
        <div>
          <label htmlFor="pan" className="block font-medium mb-1">
            PAN
          </label>
          <input id="pan" type="text" className="border rounded p-2 w-full" />
        </div>
      </div>
    </div>
  );
};

export default RegistrationSPOC;
