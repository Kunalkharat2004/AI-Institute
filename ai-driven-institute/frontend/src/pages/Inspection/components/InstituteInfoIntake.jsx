import React, { useEffect, useState } from "react";
import useInstituteStore from "../../../store/useInstituteStore";

const InstituteInfoIntake = () => {
  const { instituteData, updateInstituteInfo } = useInstituteStore(); // Zustand store
  const [intakeRows, setIntakeRows] = useState([{ branch: "", ug: "", pg: "" }]);
  const [aicteZone, setAicteZone] = useState("");
  const [instituteType, setInstituteType] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (instituteData?.instituteInfo) {
      setAicteZone(instituteData.instituteInfo.aicteZone || "");
      setInstituteType(instituteData.instituteInfo.instituteType || "");
      setIntakeRows(
        instituteData.instituteInfo.intake || [{ branch: "", ug: "", pg: "" }]
      );
    }
  }, [instituteData]);

  const addRow = () => {
    const updatedRows = [...intakeRows, { branch: "", ug: "", pg: "" }];
    setIntakeRows(updatedRows);

    // Update Zustand store
    updateInstituteInfo({
      aicteZone,
      instituteType,
      intake: updatedRows,
    });
  };

  const handleRowChange = (index, field, value) => {
    const updatedRows = intakeRows.map((row, i) =>
      i === index ? { ...row, [field]: value } : row
    );
    setIntakeRows(updatedRows);

    // Validation
    const exceedsLimit = updatedRows.some(
      (row) => parseInt(row.ug || 0) > 480 || parseInt(row.pg || 0) > 120
    );
    setError(
      exceedsLimit
        ? "You are not eligible for inspection. You have broken the guidelines."
        : ""
    );

    // Update Zustand store
    updateInstituteInfo({
      aicteZone,
      instituteType,
      intake: updatedRows,
    });
  };

  const handleFieldChange = (field, value) => {
    if (field === "aicteZone") setAicteZone(value);
    if (field === "instituteType") setInstituteType(value);

    // Update Zustand store
    updateInstituteInfo({
      aicteZone: field === "aicteZone" ? value : aicteZone,
      instituteType: field === "instituteType" ? value : instituteType,
      intake: intakeRows,
    });
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h2 className="text-lg font-bold mb-4">Institute Info & Intake</h2>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="aicteZone" className="block font-medium mb-1">
            AICTE Zone
          </label>
          <select
            id="aicteZone"
            value={aicteZone}
            onChange={(e) => handleFieldChange("aicteZone", e.target.value)}
            className="border rounded p-2 w-full"
          >
            <option value="">Select AICTE Zone</option>
            <option value="east">East</option>
            <option value="west">West</option>
            <option value="north">North</option>
            <option value="south">South</option>
          </select>
        </div>
        <div>
          <label htmlFor="instituteType" className="block font-medium mb-1">
            Institute Type
          </label>
          <select
            id="instituteType"
            value={instituteType}
            onChange={(e) => handleFieldChange("instituteType", e.target.value)}
            className="border rounded p-2 w-full"
          >
            <option value="">Select Institute Type</option>
            <option value="autonomous">Autonomous</option>
            <option value="deemed">Deemed</option>
            <option value="non-autonomous">Non-Autonomous</option>
            <option value="private">Private</option>
            <option value="government">Government</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="instituteIntake" className="block font-medium mb-1">
          Institute Intake
        </label>
        <table className="w-full border rounded">
          <thead>
            <tr>
              <th className="border px-2 py-1">Branch</th>
              <th className="border px-2 py-1">UG</th>
              <th className="border px-2 py-1">PG</th>
            </tr>
          </thead>
          <tbody>
            {intakeRows.map((row, index) => (
              <tr key={index}>
                <td className="border">
                  <input
                    type="text"
                    className="w-full p-2"
                    placeholder="Branch"
                    value={row.branch}
                    onChange={(e) =>
                      handleRowChange(index, "branch", e.target.value)
                    }
                  />
                </td>
                <td className="border">
                  <input
                    type="number"
                    className="w-full p-2"
                    placeholder="UG"
                    value={row.ug}
                    onChange={(e) => handleRowChange(index, "ug", e.target.value)}
                  />
                </td>
                <td className="border">
                  <input
                    type="number"
                    className="w-full p-2"
                    placeholder="PG"
                    value={row.pg}
                    onChange={(e) => handleRowChange(index, "pg", e.target.value)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <button
        type="button"
        onClick={addRow}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Row
      </button>
    </div>
  );
};

export default InstituteInfoIntake;
