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
import AdminDashboard from "./pages/Admin/pages/AdminDashboard.jsx";
import UserDashboardPage from "./pages/UserDashboard/UserDashboardPage.jsx";
import FAQ from "./pages/FAQ/Faq.jsx";
import InspectionPage from "./pages/Inspection/Inspection.jsx";
// import "./global.css";

const theme = createTheme();
const queryClient = new QueryClient();

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{ path: "home", element: <HomePage /> },
			{ path: "faq", element: <FAQ /> },
			{ path: "contact", element: <Contact /> },
			{ path: "feedback", element: <FeedbackPage /> },
			{ path: "inspection", element: <InspectionPage /> },
			{ path: "/", element: <HomePage />, index: true },
			{
				path: "/dashboard",
				element: <UserDashboardPage/>
			}
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
		path:"/admin/dashboard",
		element: <AdminDashboard/>
	},
	
]);

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<MuiThemeProvider theme={theme}>
				<CssBaseline />

				<RouterProvider router={router} />
			</MuiThemeProvider>
		</QueryClientProvider>
	);
};

export default App;
