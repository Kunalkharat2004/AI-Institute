import { Request, Response } from "express";
import { AuthRequest } from "../middlewares/authentication";
import Institutions from "../models/instituteModel";

const institutionController = {
  // Update or Create Institute Details
  instituteDetails: async (req: Request, res: Response): Promise<void> => {
    try {
      const _req = req as AuthRequest;
      const userID = _req.userID;
      const { instituteDetails } = req.body;

      if (!userID) {
        res.status(404).json({
          message: "User not found",
        });
        return;
      }

      let institution = await Institutions.findOne({ user: userID });

      if (institution) {
        institution.instituteDetails = instituteDetails;
      } else {
        institution = new Institutions({
          user: userID,
          instituteDetails,
        });
      }

      const savedInstitution = await institution.save();

      res.status(200).json({
        message: "Institute details updated successfully",
        institution: savedInstitution,
      });
    } catch (err) {
      console.error("Error occurred while updating institute details:", err);
      res.status(500).json({
        message: "Error occurred while updating institute details",
      });
    }
  },

  // Update or Create Institute Trust
  instituteTrust: async (req: Request, res: Response): Promise<void> => {
    try {
      const _req = req as AuthRequest;
      const userID = _req.userID;
      const { instituteTrust } = req.body;

      if (!userID) {
        res.status(404).json({
          message: "User not found",
        });
        return;
      }

      let institution = await Institutions.findOne({ user: userID });

      if (institution) {
        institution.instituteTrust = instituteTrust;
      } else {
        institution = new Institutions({
          user: userID,
          instituteTrust,
        });
      }

      const savedInstitution = await institution.save();

      res.status(200).json({
        message: "Institute trust updated successfully",
        institution: savedInstitution,
      });
    } catch (err) {
      console.error("Error occurred while updating institute trust:", err);
      res.status(500).json({
        message: "Error occurred while updating institute trust",
      });
    }
  },

  // Update or Create Registration SPOC
  registrationSPOC: async (req: Request, res: Response): Promise<void> => {
    try {
      const _req = req as AuthRequest;
      const userID = _req.userID;
      const { registrationSPOC } = req.body;

      if (!userID) {
        res.status(404).json({
          message: "User not found",
        });
        return;
      }

      let institution = await Institutions.findOne({ user: userID });

      if (institution) {
        institution.registrationSPOC = registrationSPOC;
      } else {
        institution = new Institutions({
          user: userID,
          registrationSPOC,
        });
      }

      const savedInstitution = await institution.save();

      res.status(200).json({
        message: "Registration SPOC updated successfully",
        institution: savedInstitution,
      });
    } catch (err) {
      console.error("Error occurred while updating registration SPOC:", err);
      res.status(500).json({
        message: "Error occurred while updating registration SPOC",
      });
    }
  },

  // Update or Create Institute Info
  instituteInfo: async (req: Request, res: Response): Promise<void> => {
    try {
      const _req = req as AuthRequest;
      const userID = _req.userID;
      const { instituteInfo } = req.body;

      if (!userID) {
        res.status(404).json({
          message: "User not found",
        });
        return;
      }

      let institution = await Institutions.findOne({ user: userID });

      if (institution) {
        institution.instituteInfo = instituteInfo;
      } else {
        institution = new Institutions({
          user: userID,
          instituteInfo,
        });
      }

      const savedInstitution = await institution.save();

      res.status(200).json({
        message: "Institute info updated successfully",
        institution: savedInstitution,
      });
    } catch (err) {
      console.error("Error occurred while updating institute info:", err);
      res.status(500).json({
        message: "Error occurred while updating institute info",
      });
    }
  },

  // Update or Create Financial Management
  financialManagement: async (req: Request, res: Response): Promise<void> => {
    try {
      const _req = req as AuthRequest;
      const userID = _req.userID;
      const { financialManagement } = req.body;

      if (!userID) {
        res.status(404).json({
          message: "User not found",
        });
        return;
      }

      let institution = await Institutions.findOne({ user: userID });

      if (institution) {
        institution.financialManagement = financialManagement;
      } else {
        institution = new Institutions({
          user: userID,
          financialManagement,
        });
      }

      const savedInstitution = await institution.save();

      res.status(200).json({
        message: "Financial management updated successfully",
        institution: savedInstitution,
      });
    } catch (err) {
      console.error("Error occurred while updating financial management:", err);
      res.status(500).json({
        message: "Error occurred while updating financial management",
      });
    }
  },

  // Get Institute Details
  getInstituteDetails: async (req: Request, res: Response): Promise<void> => {
    try {
      const _req = req as AuthRequest;
      const userID = _req.userID;

      if (!userID) {
        res.status(404).json({
          message: "User not found",
        });
        return;
      }

      const institution = await Institutions.findOne({ user: userID });

      if (!institution) {
        res.status(404).json({
          message: "Institute details not found",
        });
        return;
      }

      res.status(200).json({
        message: "Institute details found",
        institutionDetails: institution.instituteDetails,
      });
    } catch (err) {
      console.error("Error occurred while fetching institute details:", err);
      res.status(500).json({
        message: "Error occurred while fetching institute details",
      });
    }
  },

  // Get Institute Trust
  getInstituteTrust: async (req: Request, res: Response): Promise<void> => {
    try {
      const _req = req as AuthRequest;
      const userID = _req.userID;

      if (!userID) {
        res.status(404).json({
          message: "User not found",
        });
        return;
      }

      const institution = await Institutions.findOne({ user: userID });

      if (!institution) {
        res.status(404).json({
          message: "Institute trust not found",
        });
        return;
      }

      res.status(200).json({
        message: "Institute trust found",
        institutionTrust: institution.instituteTrust,
      });
    } catch (err) {
      console.error("Error occurred while fetching institute trust:", err);
      res.status(500).json({
        message: "Error occurred while fetching institute trust",
      });
    }
  },

  // Get Registration SPOC
  getRegistrationSPOC: async (req: Request, res: Response): Promise<void> => {
    try {
      const _req = req as AuthRequest;
      const userID = _req.userID;

      if (!userID) {
        res.status(404).json({
          message: "User not found",
        });
        return;
      }

      const institution = await Institutions.findOne({ user: userID });

      if (!institution) {
        res.status(404).json({
          message: "Registration SPOC not found",
        });
        return;
      }

      res.status(200).json({
        message: "Registration SPOC found",
        registrationSPOC: institution.registrationSPOC,
      });
    } catch (err) {
      console.error("Error occurred while fetching registration SPOC:", err);
      res.status(500).json({
        message: "Error occurred while fetching registration SPOC",
      });
    }
  },

  // Get Institute Info
  getInstituteInfo: async (req: Request, res: Response): Promise<void> => {
    try {
      const _req = req as AuthRequest;
      const userID = _req.userID;

      if (!userID) {
        res.status(404).json({
          message: "User not found",
        });
        return;
      }

      const institution = await Institutions.findOne({ user: userID });

      if (!institution) {
        res.status(404).json({
          message: "Institute info not found",
        });
        return;
      }

      res.status(200).json({
        message: "Institute info found",
        institutionInfo: institution.instituteInfo,
      });
    } catch (err) {
      console.error("Error occurred while fetching institute info:", err);
      res.status(500).json({
        message: "Error occurred while fetching institute info",
      });
    }
  },

  // Get Financial Management
  getFinancialManagement: async (req: Request, res: Response): Promise<void> => {
    try {
      const _req = req as AuthRequest;
      const userID = _req.userID;

      if (!userID) {
        res.status(404).json({
          message: "User not found",
        });
        return;
      }

      const institution = await Institutions.findOne({ user: userID });

      if (!institution) {
        res.status(404).json({
          message: "Financial management not found",
        });
        return;
      }

      res.status(200).json({
        message: "Financial management found",
        financialManagement: institution.financialManagement,
      });
    } catch (err) {
      console.error("Error occurred while fetching financial management:", err);
      res.status(500).json({
        message: "Error occurred while fetching financial management",
      });
    }
  },
};

export default institutionController;
