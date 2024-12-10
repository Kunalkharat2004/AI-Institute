import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import useTokenStore from "../../store/userTokenStore";
import {  useNavigate } from "react-router-dom";
import AicteLgLogo from "../../assets/image/aicte-logo.png";
import AicteSmLogo from "../../assets/image/aicte-sm-logo.png";
import DigitalIndiaLogo from "../../assets/image/digital-india-logo.png";
import SIHLogo from "../../assets/image/sih_2024_logo2.png";
import sun from "../../assets/image/sun.png"; // Import sun icon
import moon from "../../assets/image/moon.png"; // Import moon icon
import { useMediaQuery } from "@mui/material";

import AOS from "aos";
import "aos/dist/aos.css";
import { jwtDecode } from "jwt-decode";

const pages = [
	{ name: "Home", path: "/home" },
	{ name: "Handbook", path: "https://aicte-india.org/sites/default/files/approval/APH%20Final.pdf" },
	{ name: "Inspection", path: "/inspection/timeline/form" },
	{ name: "FAQ", path: "/faq" },
	{ name: "AI Assistant", path: "https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2024/12/08/13/20241208135325-9430ATBC.json" },
	{ name: "Feedback", path: "/feedback" },
	{ name: "Contact", path: "/contact" },
];

const settings = ["Profile", "Account", "Dashboard", "Logout"];


const Navbar = () => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);
	const [theme, setTheme] = React.useState("light"); // State for theme

	const isSmallScreen = useMediaQuery("(max-width:600px)"); // Adjust the breakpoint as needed
	const isLargeScreen = useMediaQuery("(min-width:1180px)"); // Adjust the breakpoint as needed
	const { token, setToken,setHasfetchData,setPaymentStatus } = useTokenStore((state) => state);
	React.useEffect(() => {
		AOS.init({
			duration: 1000,
		});
	});

	const user = token ? jwtDecode(token): { email: "User" };
	React.useEffect(() => {
		const savedTheme = localStorage.getItem("theme") || "light";
		setTheme(savedTheme);
		document.body.classList.toggle("dark-mode", savedTheme === "dark");
		document.body.classList.toggle("light-mode", savedTheme === "light");
	}, []);

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		localStorage.setItem("theme", newTheme);
		document.body.classList.toggle("dark-mode", newTheme === "dark");
		document.body.classList.toggle("light-mode", newTheme === "light");
	};

	const navigate = useNavigate();

	const handleMenuClick = (page)=>{
		if(page.name === "Handbook" || page.name === "AI Assistant"){
			window.open(page.path, "_blank","noopener,noreferrer");
		}
		else{
			navigate(page.path);
		}
		handleCloseNavMenu();
	}
	const handleLogout = () => {
		console.log("Logging out!..");
		setToken("");
		setHasfetchData(false);
		setPaymentStatus(false);
	};

	const handleProfile = () => {
		console.log("Profile clicked");
	};

	const handleAccount = () => {
		console.log("Account clicked");
	};

	const handleDashboard = () => {
		navigate("/dashboard");
	};

	const settingsHandlers = {
		Profile: handleProfile,
		Account: handleAccount,
		Dashboard: handleDashboard,
		Logout: handleLogout,
	};

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<AppBar
			position="sticky"
			sx={{
				backgroundColor: theme === "light" ? "#0B2F9F" : "black",
				boxShadow: "none",
				borderBottom: "1px solid #E0E0E0"
			}}
		>
			<Container maxWidth="2xl"
			>
				<Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
					{/* Logo Section for Desktop */}
					<Box
						sx={{
							display: { xs: "none", md: "flex" },
							alignItems: "center",
							gap: "1rem",
							padding: "0.5rem",
							marginRight: "3rem",
						}}
					>
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
								gap: "1rem",
							}}
						>
							<img
								src={SIHLogo}
								alt="SIH Logo"
								className="h-8 md:h-10 w-auto"
							/>
								<img
									src={DigitalIndiaLogo}
									alt="CGWB Logo"
									className="h-8 md:h-14 w-auto"
								/>
							{isLargeScreen?(
								<img
								src={AicteLgLogo}
								alt="MOE Logo"
								className="h-10 md:h-12 w-auto mt-2"
							/>
							):(
								<img
								src={AicteSmLogo}
								alt="MOE Logo"
								className="h-10 md:h-12 w-auto mt-2"
							/>
							)}
						</Box>
					</Box>

					{/* Mobile Menu Icon */}
					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="open menu"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							sx={{ color: theme === "light" ? "black" : "white" }}
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{ display: { xs: "block", md: "none" }, minWidth: "240px" }}
						>
							<Box
								sx={{
									p: 2,
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
								}}
							>
								{/* Navigation Links in Mobile Menu */}
								{pages.map((page) => (
									<MenuItem
										key={page.name}
										onClick={()=>handleMenuClick(page)}
									>
										<Typography sx={{ textAlign: "center" }}>
											{page.name}
										</Typography>
									</MenuItem>
								))}
							</Box>
						</Menu>
					</Box>

					{/* Logo Section for Mobile */}
					<Box
						sx={{
							display: { xs: "flex", md: "none" },
							flexGrow: 1,
							width: "100%",
							justifyContent: "center",
						}}
					>
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
								gap: "1rem",
							}}
						>
							<img
								src={SIHLogo}
								alt="SIH Logo"
								className="h-8 md:h-4 w-auto"
							/>
								<img
									src={DigitalIndiaLogo}
									alt="CGWB Logo"
									className="h-8 md:h-10 w-auto"
								/>
							<img
								src={AicteSmLogo}
								alt="MOE Logo"
								className="h-10 md:h-10 w-auto mt-2"
							/>
						</Box>
					</Box>

					{/* Navbar Links and Theme Toggle Button */}
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "none", md: "flex" },
							justifyContent: "center",
						}}
					>
						{pages.map((page) => (
							<Button
								key={page.name}
								onClick={() => handleMenuClick(page)}
								sx={{
									color: theme === "light" ? "white" : "black",
									mx: 1,
									position: "relative",
									transition: "all 0.3s ease-in-out",
									"&:hover": {
										color: theme === "light" ? "white" : "black",
										"&:after": {
											content: '""',
											position: "absolute",
											left: 0,
											bottom: -4,
											width: "100%",
											height: "2px",
											backgroundColor: "white",
											transform: "scaleX(1)",
											transformOrigin: "bottom left",
										},
									},
									"&:after": {
										content: '""',
										position: "absolute",
										left: 0,
										bottom: -4,
										width: "100%",
										height: "2px",
										backgroundColor: "white",
										transform: "scaleX(0)",
										transformOrigin: "bottom right",
										transition: "transform 0.3s ease-in-out",
									},
								}}
							>
								{page.name}
							</Button>
						))}
					</Box>

					{/* Theme Toggle Button */}
					<IconButton
						onClick={toggleTheme}
						sx={{
							color: theme === "light" ? "black" : "white",
							marginRight: "1rem",
						}}
					>
						<img
							src={theme === "light" ? moon : sun}
							alt={
								theme === "light"
									? "Switch to dark mode"
									: "Switch to light mode"
							}
							className="w-6 h-6"
						/>
					</IconButton>

					{/* User Menu */}
					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Open settings">
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<Avatar
									alt="User"
									sx={{
										bgcolor: "secondary.main",
										width: isSmallScreen ? 32 : 40,
										height: isSmallScreen ? 32 : 40,
									}}
								>
									{user.email[0].toUpperCase()}
									</Avatar>
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: "45px" }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{settings.map((setting) => (
								<MenuItem
									key={setting}
									onClick={() => settingsHandlers[setting]()}
								>
									<Typography textAlign="center">{setting}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Navbar;
