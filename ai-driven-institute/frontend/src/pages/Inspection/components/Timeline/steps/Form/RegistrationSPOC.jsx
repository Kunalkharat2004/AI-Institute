import React, { useEffect, useState } from "react";
import useInstituteStore from "../../../../../../store/useInstituteStore";

const RegistrationSPOC = () => {
  const { instituteData, updateRegistrationSPOC } = useInstituteStore(); // Zustand store
  const [spocData, setSpocData] = useState({
    spocName: "",
    spocEmail: "",
    spocPhone: "",
    spocPan: "",
    designation: "",
  });

  useEffect(() => {
    if (instituteData?.registrationSPOC) {
      setSpocData({
        spocName: instituteData.registrationSPOC.spocName || "", // Default value
        spocEmail: instituteData.registrationSPOC.spocEmail || "", // Default value
        spocPhone: instituteData.registrationSPOC.spocPhone || "", // Default value
        spocPan: instituteData.registrationSPOC.spocPAN || "", // Default value
        designation: instituteData.registrationSPOC.designation || "", // Default value
      });
    }
  }, [instituteData]);

  const handleChange = (e) => {
    const { id, value } = e.target;

    // Update local state
    setSpocData((prev) => ({ ...prev, [id]: value }));

    // Update Zustand store directly using the updated value
    updateRegistrationSPOC({
      ...spocData,
      [id]: value,
    });
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h2 className="text-lg font-bold mb-4">Registration & SPOC Contact</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="spocName" className="block font-medium mb-1">
            SPOC Name
          </label>
          <input
            id="spocName"
            type="text"
            value={spocData.spocName}
            onChange={handleChange}
            className="border rounded p-2 w-full bg-[#c2c2ff]"
          />
        </div>
        <div>
          <label htmlFor="spocEmail" className="block font-medium mb-1">
            Mail
          </label>
          <input
            id="spocEmail"
            type="email"
            value={spocData.spocEmail}
            onChange={handleChange}
            className="border rounded p-2 w-full bg-[#c2c2ff]"
          />
        </div>
        <div>
          <label htmlFor="spocPhone" className="block font-medium mb-1">
            Phone
          </label>
          <input
            id="spocPhone"
            type="tel"
            value={spocData.spocPhone}
            onChange={handleChange}
            className="border rounded p-2 w-full bg-[#c2c2ff]"
          />
        </div>
        <div>
          <label htmlFor="spocPan" className="block font-medium mb-1">
            PAN
          </label>
          <input
            id="spocPan"
            type="text"
            value={spocData.spocPan}
            onChange={handleChange}
            className="border rounded p-2 w-full bg-[#c2c2ff]"
          />
        </div>
        <div>
          <label htmlFor="spocType" className="block font-medium mb-1">
            Appointment Type
          </label>
          <input
            id="spocType"
            type="text"
            value={"Permanent"}
            disabled
            className="border rounded p-2 w-full bg-gray-100"
          />
        </div>
        <div>
          <label htmlFor="designation" className="block font-medium mb-1">
            Designation
          </label>
          <input
            id="designation"
            type="text"
            value={spocData.designation}
            onChange={handleChange}
            className="border rounded p-2 w-full bg-[#c2c2ff]"
          />
        </div>
      </div>
    </div>
  );
};

export default RegistrationSPOC;