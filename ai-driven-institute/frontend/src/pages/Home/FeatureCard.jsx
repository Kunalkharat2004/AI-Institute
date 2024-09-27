import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaBuilding, FaFileAlt, FaChartBar, FaLightbulb } from "react-icons/fa";

const features = [
	{
		icon: <FaBuilding />,
		title: "Automated Facility Inspections",
		description:
			"Utilize AI-powered image recognition to assess and evaluate institutional infrastructure and facilities.",
	},
	{
		icon: <FaFileAlt />,
		title: "Document Analysis",
		description:
			"Employ natural language processing to analyze and evaluate compliance reports, faculty qualifications, and other critical documentation.",
	},
	{
		icon: <FaChartBar />,
		title: "Real-time Data Collection",
		description:
			"Continuously gather and analyze data from multiple sources to provide up-to-date insights and trends.",
	},
	{
		icon: <FaLightbulb />,
		title: "Actionable Insights",
		description:
			"Generate comprehensive reports with AI-driven suggestions for improvements and regulatory compliance.",
	},
];

const FeatureCard = () => {
	useEffect(() => {
		Aos.init({
			duration: 1000,
		});
	}, []);

	return (
		<section className="services-section py-8 md:py-12 md:mt-12">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<h2 className="text-3xl font-extrabold ">Our Expertise</h2>
				<p className="mt-4 text-lg leading-6 ">
					Explore how our AI-driven inspection system enhances accuracy,
					efficiency, and compliance in institutional inspections.
				</p>

				<div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
					{features.map((feature, index) => (
						<div
							key={index}
							data-aos="fade-up" // or any other AOS animation type
							className="service-item p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
						>
							<div className="icon-container mb-4 flex justify-center items-center">
								<div className="icon text-indigo-600 text-4xl sm:text-5xl lg:text-6xl">
									{feature.icon}
								</div>
							</div>
							<h3 className="text-xl font-semibold">{feature.title}</h3>
							<p className="mt-2 ">{feature.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default FeatureCard;
