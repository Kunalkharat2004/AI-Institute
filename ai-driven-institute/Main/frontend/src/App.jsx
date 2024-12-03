import React from "react";
import Header from "./components/Header";
import ProfilePicture from "./components/ProfilePicture";
import InstituteDetails from "./components/InstitutionDetails";
import InstituteTrust from "./components/InstituteTrust";
import RegistrationSPOC from "./components/RegistrationSPOC";
import InstituteInfoIntake from "./components/InstituteInfoIntake";
import FinancialManagement from "./components/FinancialManagement";
import Timeline from "./components/Timeline"

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="min-h-screen bg-gray-100 p-4">
      <Timeline />
      <div className="p-8 space-y-8">
        <div className="grid grid-cols-2 gap-8">
          <ProfilePicture />
          <InstituteDetails />
        </div>
        <InstituteTrust />
        <RegistrationSPOC />
        <InstituteInfoIntake />
        <FinancialManagement />
        </div>
      </div>
    </div>
  );
};

export default App;
