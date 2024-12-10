import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img from "../../assets/image/AI_inspection.jpg";
import { FaRobot } from "react-icons/fa"; // Use an AI-related icon
import { useNavigate } from "react-router-dom";

const InspectionContainer = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
		});
	}, []);

	const navigate = useNavigate();

	const handleButtonClick = () => {
		return navigate("/inspection/timeline/form");
	};

	return (
		<div className="py-20">
			<div className="w-full flex flex-wrap mx-auto justify-center items-center bg-opacity-50 max-w-[1450px] rounded-3xl md:py-8">
				<div className="w-full md:flex-[0_0_55%] md:w-auto p-4 md:p-8">
					<h1 className="text-3xl mb-8" data-aos={"fade-up"}>
						AI-Driven Inspection System{" "}
						<FaRobot className="inline-block ml-2 text-blue-500" />
					</h1>
					<p className="text-[20px]" data-aos={"fade-up"}>
						Our AI-Driven Inspection System revolutionizes institutional
						inspections with advanced technology. By leveraging AI algorithms,
						image recognition, and real-time data analysis, this system enhances
						accuracy, efficiency, and compliance. Discover how our solution can
						transform your inspection process and provide actionable insights
						for institutional improvements.
					</p>
					<button
						className="mt-6 w-full md:w-auto px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold transition duration-500 ease-in-out transform hover:scale-105 hover:bg-blue-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						onClick={handleButtonClick}
						data-aos={"fade-up"}
					>
						Get Started with Inspection
					</button>
				</div>

				<div className="w-full md:flex-[0_0_40%] md:w-auto p-4 text-center mb-8 md:mb-0">
					<img
						src={img}
						alt="AI-Driven Inspection Overview"
						className="w-[90%] max-w-[200px] md:max-w-[350px] mx-auto md:w-[min(90%,_400px)] rounded-3xl"
						data-aos="fade-up"
					/>
				</div>
			</div>
		</div>
	);
};

export default InspectionContainer;
