import React, { useState, useEffect } from 'react';
import axios from 'axios';
import vitlogo from './assets/vit_logo.jpeg';
import InstituteDetails from './components/InstituteDetails';
import InstituteTrust from './components/InstuteTrust';
import RegistrationSPOC from './components/RegistrationSPOC';
import InstituteInfo from './components/InstituteInfo';
import FinancialManagement from './components/FinancialManagement';

const modules = [
  { name: 'Institute Details', icon: '📚', component: InstituteDetails },
  { name: 'Institute Trust', icon: '💵', component: InstituteTrust },
  { name: 'Registration & SPOC Contact', icon: '📄', component: RegistrationSPOC },
  { name: 'Institute Info & Intake', icon: '📜', component: InstituteInfo },
  { name: 'Financial Management', icon: '📝', component: FinancialManagement },
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedModule, setSelectedModule] = useState(null);
 

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCardClick = (module) => {
    setSelectedModule(module);
  };

  const filteredModules = modules.filter((module) =>
    module.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-accent min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center py-4 px-6 bg-secondary text-white shadow-md">
        <div className="flex items-center space-x-4">
          <img src={vitlogo} alt="Institute Logo" className="h-10" />
          <div>
            <h1 className="text-xl font-bold">Vishwakarma Institute of Technology, Pune</h1>
            <p className="text-sm">BTech-Information Technology</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm">3G 📶 1.35 Mbps</span>
          <div className="h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-lg font-bold">PM</span>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 mt-6 px-6">
        {!selectedModule ? (
          <>
            <input
              type="text"
              placeholder="Search Module"
              className="w-full p-2 mb-4 border border-gray-300 rounded-md"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {filteredModules.map((module) => (
                <div
                  key={module.name}
                  className="h-52 p-4 bg-primary shadow-md rounded-md text-center transform transition duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
                  onClick={() => handleCardClick(module)}
                >
                  <div className="text-2xl mb-2">{module.icon}</div>
                  <div className="text-lg font-semibold">{module.name}</div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="bg-white p-6 shadow-md rounded-md">
            <button onClick={() => setSelectedModule(null)} className="mb-4 text-blue-500">
              Back to Modules
            </button>
            {/* Dynamically render the selected component with documentId */}
            {selectedModule.component && <selectedModule.component />}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-white py-4 flex justify-center items-center">
        <div className="text-center">
          <p>Powered By Eduplus</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
