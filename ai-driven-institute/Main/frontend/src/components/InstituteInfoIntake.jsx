import React, { useState } from "react";

const InstituteInfoIntake = () => {
  const [intakeRows, setIntakeRows] = useState([{ branch: "", ug: "", pg: "" }]);

  const addRow = () => {
    setIntakeRows([...intakeRows, { branch: "", ug: "", pg: "" }]);
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h2 className="text-lg font-bold mb-4">Institute Info & Intake</h2>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="aicteZone" className="block font-medium mb-1">
            AICTE Zone
          </label>
          <select id="aicteZone" className="border rounded p-2 w-full">
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
          <select id="instituteType" className="border rounded p-2 w-full">
            <option value="">Select Institute Type</option>
            <option value="autonomous">Autonomous</option>
            <option value="deemed">Deemed</option>
            <option value="non-autonomous">Non-Autonomous</option>
            <option value="private">Private</option>
            <option value="government">Government</option>
          </select>
        </div>
      </div>
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
                <input type="text" className="w-full p-2" placeholder="Branch" />
              </td>
              <td className="border">
                <input type="number" className="w-full p-2" placeholder="UG" />
              </td>
              <td className="border">
                <input type="number" className="w-full p-2" placeholder="PG" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
