import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
	ThemeProvider as MuiThemeProvider,
	createTheme,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MainLayout from "./components/layout/MainLayout";
import HomePage from "./pages/HomePage";
import Auth from "./components/layout/Auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";

const theme = createTheme();
const queryClient = new QueryClient();


const router = createBrowserRouter([
  {
    path:"/",
    element: <MainLayout />,
    children:[
      {
        path:"/",element:<HomePage/>,index:true
      }
    ]
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
])
function App() {
  return(
    <QueryClientProvider client={queryClient}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />

      <RouterProvider router={router} />
    </MuiThemeProvider>
  </QueryClientProvider>
  )
}

export default App;
