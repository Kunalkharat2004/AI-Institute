import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Inspection = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [iframeSrc, setIframeSrc] = useState(""); // State to hold the iframe source URL

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	// Menu items data with name and URL
	const menuItems = [
		{ name: "Lab Assessment", url: "http://192.168.43.194:8501/" },
		{ name: "Infrastructure Grading", url: "http://192.168.43.194:8502/" },
		{
			name: "Faculty Data Analysis and Grading",
			url: "http://192.168.43.194:8503/",
		},
		{
			name: "Student Satisfaction Survey",
			url: "http://192.168.43.194:8504/",
		},
		{
			name: "Institute Classroom Assessment",
			url: "http://192.168.43.194:8505/",
		},
		{
			name: "College Safety and Security",
			url: "http://192.168.43.194:8506/",
		},
		{
			name: "Institute Campus Area",
			url: "http://192.168.43.194:8507/",
		},
		{
			name: "Campus Life",
			url: "http://192.168.43.194:8508/",
		},
		{
			name: "Institute Facility",
			url: "http://192.168.43.194:8509/",
		},
		{
			name: "Educational Methodology Report",
			url: "http://192.168.43.194:8510/",
		},
		{
			name: "Enhanced College Data Analysis",
			url: "http://192.168.43.194:8511/",
		},
		{
			name: "College Examination Evaluation",
			url: "http://192.168.43.194:8512/",
		},
		{
			name: "College Research and Publication",
			url: "http://192.168.43.194:8513/",
		},
		{
			name: "College Placement Analysis",
			url: "http://192.168.43.194:8514/",
		},
		{
			name: "Satellite Image Analysis",
			url: "http://192.168.43.194:8515/",
		},
	];

	const handleLinkClick = (url) => {
		setIframeSrc(url); // Update iframe source when a link is clicked
		setIsOpen(false); // Optional: Close sidebar after clicking on a menu item
	};

	return (
		<div className="flex h-screen">
			{/* Sidebar */}
			<div
				className={`bg-gray-800 text-white w-72 p-4 space-y-6 transition-transform duration-300 ease-in-out transform ${
					isOpen ? "translate-x-0" : "-translate-x-64"
				} md:translate-x-0`}
			>
				{/* Close button for mobile */}
				<div className="flex justify-between items-center mb-6">
					<h2 className="text-xl font-bold">Menu</h2>
					{/* Close icon to close the sidebar */}
					<button onClick={toggleSidebar} className="md:hidden">
						<FaTimes size={24} />
					</button>
				</div>
				<nav>
					<ul className="space-y-4">
						{/* Map through the menuItems array */}
						{menuItems.map((item, index) => (
							<li key={index}>
								<button
									onClick={() => handleLinkClick(item.url)}
									className="hover:text-gray-400"
								>
									{item.name}
								</button>
							</li>
						))}
					</ul>
				</nav>
			</div>

			{/* Main Content */}
			<div className="flex-1 flex flex-col">
				{/* Mobile Menu Button */}
				<div className="bg-gray-200 md:hidden">
					<button
						onClick={toggleSidebar}
						className="text-gray-800 focus:outline-none"
					>
						<FaBars size={24} />
					</button>
				</div>

				{/* Content */}
				<div className="flex-1">
					{iframeSrc ? (
						<div style={{ height: "100vh", width: "100%" }}>
							<iframe
								src={iframeSrc}
								title="Streamlit App"
								style={{ width: "100%", height: "100%", border: "none" }}
							/>
						</div>
					) : (
						<h1 className="text-2xl font-bold">Select a menu option</h1>
					)}
				</div>
			</div>
		</div>
	);
};

export default Inspection;
