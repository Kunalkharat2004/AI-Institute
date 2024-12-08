import  { useEffect, useState } from "react";
import useInstituteStore from "../../store/useInstituteStore";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";
import { fetchInstituteDetails } from "../../http/api"; // API function
import { useQuery } from "@tanstack/react-query";
import useTokenStore from "../../store/userTokenStore";
import { toast } from "react-toastify";
import { useNavigate, Outlet } from "react-router-dom";
import Timeline from "./components/Timeline/Timeline";

const InspectionPage = () => {
  const { setHasfetchData, hasFetchedData, paymentStatus } = useTokenStore();
  const navigate = useNavigate();

  const [openDialog, setOpenDialog] = useState(false); // Dialog state
  const {  setInstituteData } = useInstituteStore(); // Zustand store

  // Fetch data using React Query
  const { isLoading, error } = useQuery({
    queryKey: ["instituteDetails"], // Unique query key
    queryFn: async () => {
      const response = await fetchInstituteDetails();
      if (response.data.institutionData) {
        setInstituteData(response.data.institutionData);

        // Show dialog only if user hasn't already fetched data
        if (!hasFetchedData) {
          setOpenDialog(true); // Open dialog
        }
      } else {
        setOpenDialog(false);
      }
      return response; // Return the response
    },
  });

  useEffect(() => {
    if (!paymentStatus) {
      toast.error("Please complete payment to proceed.", {
        autoClose: 4000,
      });
      navigate("/payment");
    }
  }, [paymentStatus, navigate]);

  useEffect(() => {
    if (hasFetchedData) {
      setOpenDialog(false);
    }
  }, [hasFetchedData]);

  const handleFetchData = () => {
    setOpenDialog(false); // Close dialog
    setHasfetchData(true);
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
          <Outlet /> {/* Dynamic rendering of child components */}
      </div>
    </div>
  );
};

export default InspectionPage;