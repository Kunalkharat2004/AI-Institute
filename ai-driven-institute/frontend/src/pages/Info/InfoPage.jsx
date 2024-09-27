import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import sections from "../../data/info";
import { useNavigate } from "react-router-dom";

const Info = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: true,
		});
	}, []);

	const navigate = useNavigate();

	const handleOnClick = () => {
		navigate("/inspection");
	};

	return (
		<div className="mx-auto flex-grow py-20 max-w-screen-xl p-6 md:px-10 lg:px-10">
			<div className="text-3xl md:text-5xl font-bold pb-10 text-center">
				Information
			</div>
			{sections.map((section, index) => (
				<section
					key={index}
					className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-14 items-center ${
						section.reverse ? "md:grid-cols-2 md:gap-12" : ""
					}`}
					data-aos="fade-up"
					data-aos-delay={index * 100}
				>
					<div
						className={`flex justify-center ${
							section.reverse ? "order-2" : "order-1"
						}`}
					>
						<img
							src={section.img}
							alt={section.title}
							className="w-full h-auto rounded-lg shadow-lg"
						/>
					</div>
					<div className={`${section.reverse ? "order-1" : "order-2"}`}>
						<h2 className="text-2xl md:text-3xl font-bold mb-4">
							{section.title}
						</h2>
						{section.content.map((text, i) => (
							<p key={i} className="mb-4 text-md md:text-lg">
								{text}
							</p>
						))}
					</div>
				</section>
			))}
			<section className="md:py-12 mt-12 mb-12 text-center flex flex-col items-center gap-4 justify-center">
				<h2 className="text-2xl md:text-3xl font-bold mb-4" data-aos="fade-up">
					Get Started with AI-Driven Institute Inspection
				</h2>
				<p className="mb-4" data-aos="fade-up">
					Begin your journey towards enhancing the accuracy and efficiency of
					institutional inspections. Leverage our AI-powered tool to streamline
					inspections, ensure consistency, and improve decision-making processes
					across institutions.
				</p>
				<button
					className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
					onClick={handleOnClick}
					data-aos="fade-up"
				>
					Explore AI-Driven Inspection System
				</button>
			</section>
		</div>
	);
};

export default Info;
