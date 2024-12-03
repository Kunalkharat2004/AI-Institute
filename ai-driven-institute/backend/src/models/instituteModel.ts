import mongoose from "mongoose";
import { Iinstitute } from "../utils/instituteType";

const institutionsSchema = new mongoose.Schema<Iinstitute>(
    {
      applicationNo: { type: String, default: null }, // Defaults to null but will be generated later
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true,
      },
      instituteDetails: {
        instituteName: { type: String, default: null },
        address: { type: String, default: null },
        academicYear: { type: String, default: null },
        date: { type: String, default: null },
        state: { type: String, default: null },
        district: { type: String, default: null },
        city: { type: String, default: null },
        pincode: { type: String, default: null },
        aisheCode: { type: String, default: null },
      },
      instituteTrust: {
        trustName: { type: String, default: null },
        establishmentYear: { type: Number, default: null },
      },
      registrationSPOC: {
        spocName: { type: String, default: null },
        spocEmail: { type: String, default: null },
        spocPhone: { type: String, default: null },
        spocPAN: { type: String, default: null },
      },
      instituteInfo: {
        aicteZone: { type: String, default: null },
        instituteType: { type: String, default: null },
        intake: [
          {
            branch: { type: String, default: null },
            ug: { type: Number, default: null },
            pg: { type: Number, default: null },
          },
        ],
      },
      financialManagement: {
        bankName: { type: String, default: null },
        ifscCode: { type: String, default: null },
      },
    },
    { timestamps: true }
  );
  
  // Pre-save hook to generate applicationNo
  institutionsSchema.pre("save", function (next) {
    if (!this.applicationNo) {
      const randomNumber = Math.floor(10000000 + Math.random() * 90000000);
      this.applicationNo = `EN24${randomNumber}`;
    }
    next();
  });
  
  const Institutions = mongoose.model("Institutions", institutionsSchema);
  export default Institutions;
  