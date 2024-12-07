import {create} from "zustand";

const useInstituteStore = create((set) => ({
  instituteData: null, // Holds the complete institute data

  // Set the entire institute data (e.g., fetched from the backend)
  setInstituteData: (data) => set({ instituteData: data }),

  // Update specific sections of the data
  updateInstituteDetails: (details) =>
    set((state) => ({
      instituteData: {
        ...state.instituteData,
        instituteDetails: details,
      },
    })),

  updateUniversity: (data) =>
    set((state) => ({
      instituteData: {
        ...state.instituteData,
        university: data,
      },
    })),

  updateInstituteTrust: (trust) =>
    set((state) => ({
      instituteData: {
        ...state.instituteData,
        instituteTrust: trust,
      },
    })),

    updateRegistrationSPOC: (spoc) =>
        set((state) => ({
          instituteData: {
            ...state.instituteData,
            registrationSPOC: {
              spocName: spoc.spocName,
              spocEmail: spoc.spocEmail,
              spocPhone: spoc.spocPhone,
              spocPAN: spoc.spocPan,
              designation: spoc.designation
            },
          },
        })),
        updateprincipalData: (principal) =>
        set((state) => ({
          instituteData: {
            ...state.instituteData,
            principalDetails: {
              principalName: principal.principalName,
              principalEmail: principal.principalEmail,
              principalPhone: principal.principalPhone,
              principalPAN: principal.principalPan,
              designation: principal.designation,
              isDoctorDegree: principal.isDoctorDegree
            },
          },
        })),

  updateInstituteInfo: (info) =>
    set((state) => ({
      instituteData: {
        ...state.instituteData,
        instituteInfo: info,
      },
    })),

  updateFinancialManagement: (financials) =>
    set((state) => ({
      instituteData: {
        ...state.instituteData,
        financialManagement: financials,
      },
    })),
}));

export default useInstituteStore;
