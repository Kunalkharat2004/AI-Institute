import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import img1 from "../../assets/image/aicte_img8.jpg";
import img2 from "../../assets/image/Hero_01.jpg";
import img3 from "../../assets/image/Hero_02.jpg";
import img4 from "../../assets/image/Hero_03.jpeg";
import img5 from "../../assets/image/Hero_04.jpeg";
import img6 from "../../assets/image/Hero_05.jpg";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Carousel.css"; // Import your CSS file here

const images = [
  {
    src: img1,
    heading:"Welcome to AICTE!",
    subheading: "Empowering technical education through quality assurance and innovation.",
  },
  {
    src: img2,
    heading: "Transforming Institutional Excellence through AI",
    subheading: "Revolutionizing institutional assessment with cutting-edge artificial intelligence.",
  },
  {
    src: img3,
    heading: "Data-Driven Insights, Precision Unleashed",
    subheading: "Uncover hidden insights through advanced data processing and intelligent algorithms. Turn complex information into actionable intelligence.",
  },
  {
    src: img4,
    heading: "Intelligent Document Processing",
    subheading: "Comprehensive document evaluation using natural language processing. Ensuring accuracy, compliance, and depth of analysis.",
  },
  {
    src: img5,
    heading: "Comprehensive Facility Scanning",
    subheading: "Comprehensive facility monitoring through state-of-the-art image recognition. No detail goes unnoticed, no standard unmet.",
  },
  {
    src: img6,
    heading: "Real-Time Performance Tracking",
    subheading: "Instantaneous performance tracking across multiple institutional parameters. Empowering decision-makers with real-time insights.",
  },
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      className="overflow-hidden relative h-[23vh] md:h-[55vh] lg:h-[60vh]"
    >
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        style={{ width: "100%", height: "100%" }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                backgroundImage: `url(${image.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "100%",
              }}
              className="flex items-start p-4 md:p-6 lg:p-8"
            >
              <div className="w-[70%] md:w-[40%] xl:py-0 2xl:py-12">
                {/* Heading */}
                <h1
                  className={`image-caption text-base sm:text-xl md:text-3xl xl:text-5xl font-bold ${
                    activeIndex === index ? "slide-in" : ""
                  }`}
                >
                  {image.heading}
                </h1>
                {/* Subheading */}
                <div className="mt-2">
                  <h4
                    className={`image-subheading text-sm sm:text-base hidden sm:block md:text-sm xl:text-xl ${
                      activeIndex === index ? "slide-in" : ""
                    }`}
                  >
                    {image.subheading}
                  </h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
