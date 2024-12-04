import React, { useEffect, useState } from "react";
import useInstituteStore from "../../../store/useInstituteStore";

const InstituteTrust = () => {
  const { instituteData,updateInstituteTrust  } = useInstituteStore(); // Zustand store to get data
  const [trustData, setTrustData] = useState({
    trustName: "",
    establishmentYear: "",
  });

  useEffect(() => {
    if (instituteData?.instituteTrust) {
      setTrustData({
        trustName: instituteData.instituteTrust.trustName || "", // Ensure a default value
        establishmentYear: instituteData.instituteTrust.establishmentYear || "", // Ensure a default value
      });
    }
  }, [instituteData]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setTrustData((prev) => ({ ...prev, [id]: value }));
    updateInstituteTrust({ ...trustData, [id]: value });
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h2 className="text-lg font-bold mb-4">Institute Trust</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="trustName" className="block font-medium mb-1">
            Trust Name
          </label>
          <input
            id="trustName"
            type="text"
            value={trustData.trustName}
            onChange={handleChange}
            className="border rounded p-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="establishmentYear" className="block font-medium mb-1">
            College Establish Year
          </label>
          <input
            id="establishmentYear"
            type="number"
            value={trustData.establishmentYear}
            onChange={handleChange}
            className="border rounded p-2 w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default InstituteTrust;
