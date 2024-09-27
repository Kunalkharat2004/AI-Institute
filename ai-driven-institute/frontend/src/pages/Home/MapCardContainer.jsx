import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img from "../../assets/image/QA_engineers.gif"; // Consider updating this image to one that aligns with the AI-driven inspection theme
import { FaRobot, FaFileAlt, FaChartBar } from "react-icons/fa";

function MapCardContainer() {
	useEffect(() => {
		AOS.init({
			duration: 1000,
		});
	}, []);

	return (
		<div className="py-20">
			<div className="w-full flex flex-wrap mx-auto justify-center items-center bg-opacity-50 max-w-[1450px] rounded-3xl md:py-10">
				<div className="w-full md:flex-[0_0_40%] md:w-auto p-4 text-center mb-8 md:mb-0">
					<img
						src={img}
						alt="Inspection System Overview"
						className="w-[90%] max-w-[200px] md:max-w-[350px] mx-auto md:w-[min(90%,_400px)] rounded-3xl"
						data-aos="fade-up"
					/>
				</div>
				<div className="w-full md:flex-[0_0_55%] md:w-auto p-4 md:p-8">
					<h1 className="text-3xl mb-8" data-aos={"fade-up"}>
						Why Embrace AI-Driven Inspections?{" "}
						<FaRobot className="inline-block ml-2 text-blue-500" />
					</h1>
					<ul>
						<li className="my-4 text-[20px]" data-aos={"fade-up"}>
							<FaChartBar className="inline-block mr-2 text-blue-500" />
							AI algorithms provide in-depth analysis and predictive insights to
							enhance institutional inspections.
						</li>
						<li className="my-4 text-[20px]" data-aos={"fade-up"}>
							<FaFileAlt className="inline-block mr-2 text-blue-500" />
							Automated document analysis ensures accurate evaluation of
							compliance reports and institutional records.
						</li>
						<li className="my-4 text-[20px]" data-aos={"fade-up"}>
							<FaRobot className="inline-block mr-2 text-blue-500" />
							Real-time data collection and pattern recognition identify issues
							early, enabling timely interventions.
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default MapCardContainer;
