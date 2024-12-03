const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create an Express app
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect('your_mongo_link', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Define Schemas
const instituteDetailsSchema = new mongoose.Schema({
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
});

const instituteTrustSchema = new mongoose.Schema({
  trustName: String,
  establishmentYear: Number,
});

const registrationSPOCSchema = new mongoose.Schema({
  spocName: String,
  spocEmail: String,
  spocPhone: String,
  spocPAN: String,
});

const instituteInfoSchema = new mongoose.Schema({
  aicteZone: String,
  instituteType: String,
  intake: [
    {
      branch: String,
      ug: Number,
      pg: Number,
    },
  ],
});

const financialManagementSchema = new mongoose.Schema({
  bankName: String,
  ifscCode: String,
});

// Define Models
const InstituteDetails = mongoose.model('InstituteDetails', instituteDetailsSchema);
const InstituteTrust = mongoose.model('InstituteTrust', instituteTrustSchema);
const RegistrationSPOC = mongoose.model('RegistrationSPOC', registrationSPOCSchema);
const InstituteInfo = mongoose.model('InstituteInfo', instituteInfoSchema);
const FinancialManagement = mongoose.model('FinancialManagement', financialManagementSchema);

// API Endpoints

// Institute Details
app.post('/api/instituteDetails', async (req, res) => {
  try {
    const { instituteDetails } = req.body;

    // Generate Application No
    const randomNumber = Math.floor(10000000 + Math.random() * 90000000);
    const applicationNo = `EN24${randomNumber}`;
    instituteDetails.applicationNo = applicationNo;

    const newInstituteDetails = new InstituteDetails(instituteDetails);
    await newInstituteDetails.save();

    res.status(201).json({ message: 'Institute details saved successfully', applicationNo });
  } catch (error) {
    console.error('Error saving institute details:', error);
    res.status(500).json({ error: 'Error saving institute details' });
  }
});

// Institute Trust
app.post('/api/instituteTrust', async (req, res) => {
  try {
    const { trustDetails } = req.body;
    const newTrustDetails = new InstituteTrust(trustDetails);
    await newTrustDetails.save();

    res.status(201).json({ message: 'Institute trust details saved successfully' });
  } catch (error) {
    console.error('Error saving institute trust details:', error);
    res.status(500).json({ error: 'Error saving institute trust details' });
  }
});

// Registration & SPOC Contact
app.post('/api/registrationSPOC', async (req, res) => {
  try {
    const { spocDetails } = req.body;
    const newSPOCDetails = new RegistrationSPOC(spocDetails);
    await newSPOCDetails.save();

    res.status(201).json({ message: 'SPOC details saved successfully' });
  } catch (error) {
    console.error('Error saving SPOC details:', error);
    res.status(500).json({ error: 'Error saving SPOC details' });
  }
});

// Institute Info & Intake
app.post('/api/instituteInfo', async (req, res) => {
  try {
    const { infoDetails } = req.body;
    const newInstituteInfo = new InstituteInfo(infoDetails);
    await newInstituteInfo.save();

    res.status(201).json({ message: 'Institute info saved successfully' });
  } catch (error) {
    console.error('Error saving institute info:', error);
    res.status(500).json({ error: 'Error saving institute info' });
  }
});

// Financial Management
app.post('/api/financialManagement', async (req, res) => {
  try {
    const { financialDetails } = req.body;
    const newFinancialDetails = new FinancialManagement(financialDetails);
    await newFinancialDetails.save();

    res.status(201).json({ message: 'Financial details saved successfully' });
  } catch (error) {
    console.error('Error saving financial details:', error);
    res.status(500).json({ error: 'Error saving financial details' });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
