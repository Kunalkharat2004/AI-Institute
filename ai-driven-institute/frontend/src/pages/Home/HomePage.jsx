import { useEffect } from "react";
import FeatureCard from "./FeatureCard";
import InfoCard from "./InfoCard";
import AOS from "aos";
import "aos/dist/aos.css";
import FAQ from "./FAQ";
import { useNavigate } from "react-router-dom";
import Carousel from "./Carousel";
import QuoteSlider from "./QuotesSlider";
import InspectionContainer from "./InspectionContainer";

const HomePage = () => {
	const navigate = useNavigate();
	useEffect(() => {
		AOS.init({
			duration: 1000,
		});
	}, []);

	return (
		<>
			<div className="w-full mb-12">
				<div className="w-full mx-auto">
					<div
						className="w-full flex justify-center md:justify-end"
						data-aos="fade-left"
					>
						<Carousel />
					</div>
				</div>

				{/* Additional content below */}
				<FeatureCard />
				<InfoCard />
				<InspectionContainer />
				<QuoteSlider/>
				<FAQ />
			</div>
		</>
	);
};

export default HomePage;
