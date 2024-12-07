import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaBuilding, FaFileAlt, FaChartBar, FaLightbulb } from "react-icons/fa";
import feature1 from "../../assets/image/feature_card_01.jpeg";
import feature2 from "../../assets/image/feature_card_02.jpg";
import feature3 from "../../assets/image/feature_card_03.jpeg";
import feature4 from "../../assets/image/feature_card_04.jpg";

const features = [
  {
    image: feature1,
    icon: <FaBuilding />,
    title: "Automated Facility Inspections",
    description:
      "Utilize AI-powered image recognition to assess and evaluate institutional infrastructure and facilities.",
  },
  {
    image: feature2,
    icon: <FaFileAlt />,
    title: "Document Analysis",
    description:
      "Employ natural language processing to analyze and evaluate compliance reports, faculty qualifications, and other critical documentation.",
  },
  {
    image: feature3,
    icon: <FaChartBar />,
    title: "Real-time Data Collection",
    description:
      "Continuously gather and analyze data from multiple sources to provide up-to-date insights and trends.",
  },
  {
    image: feature4,
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
              data-aos="fade-up"
              className="group relative service-item p-6 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:border-2 bg-[#fafaf5] hover:shadow-xl animate-float"
            >
              {/* Image Layer */}
              <img
                src={feature.image}
                alt={feature.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-90 group-hover:opacity-0"
              />
              {/* Text Layer */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-10 transition-all duration-700 ease-in-out">
                <div className="icon-container mb-4 flex justify-center items-center">
                  <div className="icon text-indigo-600 text-4xl sm:text-5xl lg:text-6xl">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCard;
