import  { useEffect, useState } from "react";
import useInstituteStore from "../../../../../../store/useInstituteStore";

const FinancialManagement = () => {
  const { instituteData, updateFinancialManagement } = useInstituteStore(); // Zustand store
  const [financialData, setFinancialData] = useState({
    accountNo: "",
    bankName: "",
    ifscCode: "",
  });

  useEffect(() => {
    if (instituteData?.financialManagement) {
      setFinancialData({
        accountNo: instituteData.financialManagement.accountNo || "", // Default value
        bankName: instituteData.financialManagement.bankName || "", // Default value
        ifscCode: instituteData.financialManagement.ifscCode || "", // Default value
      });
    }
  }, [instituteData]);

  const handleChange = (e) => {
    const { id, value } = e.target;

    // Update local state
    setFinancialData((prev) => ({ ...prev, [id]: value }));

    // Update Zustand store
    updateFinancialManagement({ ...financialData, [id]: value });
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h2 className="text-lg font-bold mb-4">Financial Management</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="accountNo" className="block font-medium mb-1">
            Account Number
          </label>
          <input
            id="accountNo"
            type="number"
            value={financialData.accountNo}
            onChange={handleChange}
            className="border rounded p-2 w-full bg-[#c2c2ff]"
          />
        </div>
        <div>
          <label htmlFor="bankName" className="block font-medium mb-1">
            Bank Name
          </label>
          <input
            id="bankName"
            type="text"
            value={financialData.bankName}
            onChange={handleChange}
            className="border rounded p-2 w-full bg-[#c2c2ff]"
          />
        </div>
        <div>
          <label htmlFor="ifscCode" className="block font-medium mb-1">
            IFSC Code
          </label>
          <input
            id="ifscCode"
            type="text"
            value={financialData.ifscCode}
            onChange={handleChange}
            className="border rounded p-2 w-full bg-[#c2c2ff]"
          />
        </div>
      </div>
    </div>
  );
};

export default FinancialManagement;
