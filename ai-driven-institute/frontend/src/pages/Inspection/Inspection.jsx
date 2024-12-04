import React, { useEffect, useState } from "react";
import useInstituteStore from "../../store/useInstituteStore";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";
import ProfilePicture from "./components/ProfilePicture";
import InstituteDetails from "./components/InstitutionDetails";
import InstituteTrust from "./components/InstituteTrust";
import RegistrationSPOC from "./components/RegistrationSPOC";
import InstituteInfoIntake from "./components/InstituteInfoIntake";
import FinancialManagement from "./components/FinancialManagement";
import Timeline from "./components/Timeline";
import { fetchInstituteDetails } from "../../http/api"; // API function
import { useQuery } from "@tanstack/react-query";
import useTokenStore from "../../store/userTokenStore";

const InspectionPage = () => {
  const [openDialog, setOpenDialog] = useState(false); // Dialog state
  const { instituteData, setInstituteData } = useInstituteStore(); // Zustand store
  const {setHasfetchData,hasFetchedData} = useTokenStore()
  // Fetch data using React Query
  const { data, isLoading, error } = useQuery({
    queryKey: ["instituteDetails"], // Unique query key
    queryFn: async () => {
      const response = await fetchInstituteDetails();
      if (response.data.institutionData) {
        console.log(response.data.institutionData);
        setInstituteData(response.data.institutionData); // Set the data in the store

        // Show dialog only if user hasn't already fetched data
        if (!hasFetchedData) {
          setOpenDialog(true); // Open dialog
        }
      }
      return response; // Return the response
    },
  });

  useEffect(() => {
    // Check if the user has already fetched data
    if (hasFetchedData) {
      setOpenDialog(false);
    }
  }, []);

  const handleFetchData = () => {
    setOpenDialog(false); // Close dialog
    setHasfetchData(true)
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dialog Box */}
      <Dialog
        open={openDialog}
        onClose={() => {}}
        PaperProps={{
          style: { borderRadius: 10, padding: "10px", backgroundColor: "#fff" },
        }}
        BackdropProps={{
          style: {
            backgroundColor: "rgba(0, 0, 0, 0.8)", // Dark overlay
          },
        }}
      >
        <DialogTitle>Fetch Data from ERP</DialogTitle>
        <DialogContent>
          It seems you have already filled in the institute details on the ERP
          system. Would you like to fetch this data?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleFetchData} color="primary" variant="contained">
            OK
          </Button>
        </DialogActions>
      </Dialog>

      {/* Main Content */}
      <div className="min-h-screen bg-gray-100 p-4">
        <Timeline />
        <div className="p-8 space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
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

export default InspectionPage;
