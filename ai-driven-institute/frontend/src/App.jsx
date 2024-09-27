import React from "react";
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
import Analysis from "./pages/Analysis/AnalysisPage.jsx";
import Predict from "./pages/GroundWater/PredictPage.jsx";
import Info from "./pages/Info/InfoPage.jsx";
import About from "./pages/About/AboutPage.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import OptimalGWSuggestor from "./pages/GroundWater/OptimalGWSuggestor.jsx";
import Inspection from "./pages/Inspection/Inspection.jsx";
import FeedbackPage from "./pages/Feedback/FeedbackPage.jsx";
// import "./global.css";

const theme = createTheme();
const queryClient = new QueryClient();

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{ path: "home", element: <HomePage /> },
			{ path: "info", element: <Info /> },
			{ path: "about", element: <About /> },
			{ path: "contact", element: <Contact /> },
			{ path: "feedback", element: <FeedbackPage /> },
			{ path: "inspection", element: <Inspection /> },
			{ path: "/", element: <HomePage />, index: true },
		],
	},
	{
		path: "/auth",
		element: <Auth />,
		children: [
			{ path: "login", element: <LoginPage /> },
			{ path: "register", element: <RegisterPage /> },
		],
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
