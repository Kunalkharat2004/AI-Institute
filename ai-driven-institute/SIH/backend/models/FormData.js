const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
  instituteDetails: {
    instituteName: String,
    address: String,
    academicYear: String,
    date: String,
    state: String,
    district: String,
    city: String,
    pincode: String,
    aisheCode: String,
    applicationNo: String,
  },
  instituteTrust: {
    trustName: String,
    establishmentYear: Number,
  },
  registrationSPOC: {
    spocName: String,
    spocEmail: String,
    spocPhone: String,
    spocPAN: String,
  },
  instituteInfo: {
    aicteZone: String,
    instituteType: String,
    intake: [
      {
        branch: String,
        ug: Number,
        pg: Number,
      },
    ],
  },
  financialManagement: {
    bankName: String,
    ifscCode: String,
  },
});

const FormData = mongoose.model('FormData', formDataSchema);

module.exports = FormData;
