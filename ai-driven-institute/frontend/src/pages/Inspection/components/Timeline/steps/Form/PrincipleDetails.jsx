import { useEffect, useState } from "react";
import useInstituteStore from "../../../../../../store/useInstituteStore";

const PrincipalDetails = () => {
  const { instituteData, updateprincipalData } = useInstituteStore(); // Zustand store
  const [principalData, setPrincipalData] = useState({
    principalName: "",
    principalEmail: "",
    principalPhone: "",
    principalPan: "",
    designation: "",
    isDoctorDegree: false,
  });

  useEffect(() => {
    if (instituteData?.principalDetails) {
      setPrincipalData({
        principalName: instituteData.principalDetails.principalName || "", // Default value
        principalEmail: instituteData.principalDetails.principalEmail || "", // Default value
        principalPhone: instituteData.principalDetails.principalPhone || "", // Default value
        principalPan: instituteData.principalDetails.principalPAN || "", // Default value
        designation: instituteData.principalDetails.designation || "", // Default value
        isDoctorDegree: instituteData.principalDetails.isDoctorDegree || false, // Default value
      });
    }
  }, [instituteData]);

  const handleChange = (e) => {
    const { id, value, type } = e.target;
  
    // Parse radio button values to boolean
    const parsedValue = type === "radio" ? value === "true" : value;
  
    // Update local state
    setPrincipalData((prev) => {
      const updatedData = { ...prev, [id]: parsedValue };
  
      // Update Zustand store
      updateprincipalData(updatedData);
  
      return updatedData;
    });
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h2 className="text-lg font-bold mb-4">Principal Details</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="principalName" className="block font-medium mb-1">
            Principal Name
          </label>
          <input
            id="principalName"
            type="text"
            value={principalData.principalName}
            onChange={handleChange}
            className="border rounded p-2 w-full bg-[#c2c2ff]"
          />
        </div>
        <div>
          <label htmlFor="principalEmail" className="block font-medium mb-1">
            Mail
          </label>
          <input
            id="principalEmail"
            type="email"
            value={principalData.principalEmail}
            onChange={handleChange}
            className="border rounded p-2 w-full bg-[#c2c2ff]"
          />
        </div>
        <div>
          <label htmlFor="principalPhone" className="block font-medium mb-1">
            Phone
          </label>
          <input
            id="principalPhone"
            type="tel"
            value={principalData.principalPhone}
            onChange={handleChange}
            className="border rounded p-2 w-full bg-[#c2c2ff]"
          />
        </div>
        <div>
          <label htmlFor="principalPan" className="block font-medium mb-1">
            PAN
          </label>
          <input
            id="principalPan"
            type="text"
            value={principalData.principalPan}
            onChange={handleChange}
            className="border rounded p-2 w-full bg-[#c2c2ff]"
          />
        </div>
        <div>
          <label htmlFor="principalType" className="block font-medium mb-1">
            Appointment Type
          </label>
          <input
            id="principalType"
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
            value={principalData.designation}
            onChange={handleChange}
            className="border rounded p-2 w-full bg-[#c2c2ff]"
          />
        </div>
        <div>
  <label htmlFor="isDoctorDegree" className="block font-medium mb-2">
    Is Doctor
  </label>
  <div className="flex items-center space-x-4">
    <label className="flex items-center space-x-2">
      <input
        id="isDoctorDegree"
        name="isDoctorDegree"
        type="radio"
        value="true"
        checked={principalData.isDoctorDegree === true}
        onChange={handleChange}
        className="border rounded p-2 text-blue-600"
      />
      <span>Yes</span>
    </label>
    <label className="flex items-center space-x-2">
      <input
        id="isDoctorDegree"
        name="isDoctorDegree"
        type="radio"
        value="false"
        checked={principalData.isDoctorDegree === false}
        onChange={handleChange}
        className="border rounded p-2 text-red-600"
      />
      <span>No</span>
    </label>
  </div>
</div>


      </div>
    </div>
  );
};

export default PrincipalDetails;