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
              { path: "facility-inspection", element: <FacilityInspection /> },
              { path: "campus-infrastructure", element: <Infrastructure /> },
              { path: "curriculum-inspection", element: <CurriculumInspection /> },
              { path: "document-analysis", element: <DocumentAnalysis /> },
              // Add more routes for other timeline components
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
    path: "/admin/dashboard",
    element: <Dashboard />,
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
