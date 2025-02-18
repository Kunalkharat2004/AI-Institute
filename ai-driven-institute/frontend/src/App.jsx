import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import HomePage from "./pages/Home/HomePage.jsx";
import LoginPage from "./pages/Auth/LoginPage.jsx";
import Auth from "./components/layouts/Auth.jsx";
import RegisterPage from "./pages/Auth/RegisterPage.jsx";
import MainLayout from "./components/layouts/MainLayout.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import FeedbackPage from "./pages/Feedback/FeedbackPage.jsx";
import ResetPasswordPage from "./pages/Auth/ResetPasswordPage.jsx";
import UserDashboardPage from "./pages/UserDashboard/UserDashboardPage.jsx";
import FAQ from "./pages/FAQ/Faq.jsx";
import InspectionPage from "./pages/Inspection/Inspection.jsx";
import PaymentPage from "./pages/Payment/PaymentForm.jsx";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import config from "./config/config.js";
import "./global.css";
import Timeline from "./pages/Inspection/components/Timeline/Timeline.jsx";
import Form from "./pages/Inspection/components/Timeline/steps/Form/Form.jsx";
import FacilityInspection from "./pages/Inspection/components/Timeline/steps/FacilityInspection.jsx";
import Infrastructure from "./pages/Inspection/components/Timeline/steps/Infrastructure.jsx";
import CurriculumInspection from "./pages/Inspection/components/Timeline/steps/CurriculumInspection.jsx";
import DocumentAnalysis from "./pages/Inspection/components/Timeline/steps/DocumentAnalysis.jsx";
import Dashboard from "./pages/Admin/dashboard/Dashboard.jsx";
import CampusGreeneryNavigation from "./pages/Inspection/components/Timeline/steps/CampusGreeneryNavigation.jsx";
import FacultyEvaluation from "./pages/Inspection/components/Timeline/steps/FacultyEvaluation.jsx";
import FacultyVerification from "./pages/Inspection/components/Timeline/steps/FacultyVerification.jsx";
import StudentPlacement from "./pages/Inspection/components/Timeline/steps/StudentPlacement.jsx";
import ResearchAndPublication from "./pages/Inspection/components/Timeline/steps/ResearchAndPublication.jsx";
import StudentSurvey from "./pages/Inspection/components/Timeline/steps/StudentSurvey.jsx";
import StudentProgress from "./pages/Inspection/components/Timeline/steps/StudentProgress.jsx";
import CollegeDeficiencyReport from "./pages/Inspection/components/Timeline/steps/CollegeDeficiencyReport.jsx";
import ExtracurricularActivities from "./pages/Inspection/components/Timeline/steps/ExtracurricularActivities.jsx";
import CollegeManagementActivities from "./pages/Inspection/components/Timeline/steps/CollegeManagementActivities.jsx";
import AdminLayout from "./pages/Admin/dashboard/layouts/AdminLayout.jsx";
import AdminFeedback from "./pages/Admin/dashboard/pages/AdminFeedback.jsx";
import AnalyticsDashboard from "./pages/Admin/dashboard/pages/Analytics.jsx";
import Scholarship from "./pages/Inspection/components/Timeline/steps/Scholarship.jsx";
import FacultyInspection from "./pages/Inspection/components/Timeline/steps/FacultyInspection.jsx";
import AdminContact from "./pages/Admin/dashboard/pages/AdminContact.jsx";
import NLPPage from "./pages/Inspection/components/Timeline/steps/NLPPage.jsx";
import RealTimePage from "./pages/Inspection/components/Timeline/steps/RealTimePage.jsx";
import TrendAnalysis from "./pages/Inspection/components/Timeline/steps/TrendAnalysis.jsx";
import Dificency from "./pages/Inspection/components/Timeline/steps/Dificency.jsx";
import SelfDisclosure from "./pages/Inspection/components/Timeline/steps/SelfDisclosure.jsx";

const theme = createTheme();
const queryClient = new QueryClient();
const stripePromise = loadStripe(config.stripePublicKey);

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "home", element: <HomePage /> },
      { path: "faq", element: <FAQ /> },
      { path: "contact", element: <Contact /> },
      { path: "feedback", element: <FeedbackPage /> },
      { path: "payment", element: <PaymentPage /> },
      { path: "/", element: <HomePage />, index: true },
      {
        path: "/dashboard",
        element: <UserDashboardPage />,
      },
      {
        path: "/inspection",
        element: <InspectionPage />,
        children: [
          {
            path: "timeline",
            element: <Timeline />,
            children: [
              { path: "form", element: <Form />, index: true },
              { path: "self-disclosure", element: <SelfDisclosure /> },
              { path: "facility-inspection", element: <FacilityInspection/> },
              { path: "nlp", element: <NLPPage /> },
              { path: "real-time", element: <RealTimePage /> },
              { path: "trend-analysis", element: <TrendAnalysis /> },
              { path: "deficiency-report", element: <Dificency /> },
              { path: "infra", element: <Infrastructure /> },
              { path: "greenery", element: <CampusGreeneryNavigation /> },
              { path: "curriculum", element: <CurriculumInspection /> },
              { path: "docs", element: <DocumentAnalysis /> },
              { path: "faculty-evaluation", element: <FacultyEvaluation /> },
              { path: "faculty-inspection", element: <FacultyInspection /> },
              { path: "verify-faculty", element: <FacultyVerification /> },
              { path: "student-survey", element: <StudentSurvey /> },
              { path: "placement", element: <StudentPlacement /> },
              { path: "research", element: <ResearchAndPublication /> },
              { path: "student-progress", element: <StudentProgress /> },
              { path: "extracurricular", element: <ExtracurricularActivities /> },
              { path: "scholarship", element: <Scholarship /> },
              { path: "college-management", element: <CollegeManagementActivities /> },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      { path: "login", element: <LoginPage /> },
      { path: "reset-password", element: <ResetPasswordPage /> },
      { path: "register", element: <RegisterPage /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />, // Admin layout wraps all admin routes
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "feedback", element: <AdminFeedback /> },
      { path: "analytics", element: <AnalyticsDashboard /> },
      {path:"contact",element:<AdminContact/>}
    ],
  },
]);


const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Elements stripe={stripePromise}>
          <RouterProvider router={router} />
        </Elements>
      </MuiThemeProvider>
    </QueryClientProvider>
  );
};

export default App;