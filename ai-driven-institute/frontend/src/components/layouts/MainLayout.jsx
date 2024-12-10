import { useEffect } from "react";
import useTokenStore from "../../store/userTokenStore";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import ScrollToTop from "../common/ScrollToTop";

const loadScript = (src, id, isAsync = true, callback) => {
	if (!document.getElementById(id)) {
		const script = document.createElement("script");
		script.src = src;
		script.id = id;
		script.async = isAsync;

		// Set the callback when the script is loaded
		script.onload = () => {
			if (callback) callback();
		};

		script.onerror = () => {
			console.error(`Error loading script: ${src}`);
		};

		document.body.appendChild(script);
	} else if (callback) {
		// If the script already exists, call the callback immediately
		callback();
	}
};

const MainLayout = () => {
	const { token } = useTokenStore((state) => state);
	const location = useLocation();

	useEffect(() => {
		// Check if the current path is HomePage or its children
		const isHomePage = location.pathname === "/" || location.pathname.startsWith("/home");

		if (isHomePage) {
			// Load chatbot scripts only for HomePage and its children
			loadScript(
				"https://cdn.botpress.cloud/webchat/v2.2/inject.js",
				"botpress-inject",
				true,
				() => {
					loadScript(
						"https://files.bpcontent.cloud/2024/12/08/13/20241208135325-JZU5LP0V.js",
						"botpress-custom-script",
						true,
						() => {
							console.log("Chatbot scripts loaded successfully!");
						}
					);
				}
			);
		} else {
			// Remove chatbot scripts if not on HomePage or its children
			const botpressInject = document.getElementById("botpress-inject");
			const botpressCustom = document.getElementById("botpress-custom-script");

			if (botpressInject) botpressInject.remove();
			if (botpressCustom) botpressCustom.remove();
		}
	}, [location.pathname]);

	if (!token) {
		return <Navigate to={"/auth/login"} replace />;
	}

	return (
		<div className="flex flex-col min-h-screen">
			<ScrollToTop />
			<Navbar />
			<main className="flex-grow">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default MainLayout;
