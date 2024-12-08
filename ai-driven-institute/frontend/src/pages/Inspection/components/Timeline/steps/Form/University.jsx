import  { useEffect, useState } from "react";
import useInstituteStore from "../../../../../../store/useInstituteStore";

const University = () => {
  const { instituteData, updateUniversity } = useInstituteStore(); // Zustand store to get data
  const [universityData, setUniversityData] = useState({
    universityName:"",
    universityCode:""
  });

  useEffect(() => {
    if (instituteData?.instituteTrust) {
        setUniversityData({
        universityName: instituteData.university.universityName || "", // Ensure a default value
        universityCode: instituteData.university.universityCode || "", // Ensure a default value
      });
    }
  }, [instituteData]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUniversityData((prev) => ({ ...prev, [id]: value }));
    updateUniversity({ ...universityData, [id]: value });
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h2 className="text-lg font-bold mb-4">University</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="universityName" className="block font-medium mb-1">
            University Name
          </label>
          <input
            id="universityName"
            type="text"
            value={universityData.universityName}
            onChange={handleChange}
            className="border rounded p-2 w-full bg-[#c2c2ff]"
          />
        </div>
        <div>
          <label htmlFor="universityCode" className="block font-medium mb-1">
            University Code
          </label>
          <input
            id="universityCode"
            type="text"
            value={universityData.universityCode}
            onChange={handleChange}
            className="border rounded p-2 w-full bg-[#c2c2ff]"
          />
        </div>
      </div>
    </div>
  );
};

export default University;
