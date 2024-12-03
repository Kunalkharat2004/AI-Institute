import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import img1 from "../../assets/image/Hero_06.png"
import img2 from "../../assets/image/Hero_01.jpg"
import img3 from "../../assets/image/Hero_02.jpg"
import img4 from "../../assets/image/Hero_03.jpg"
import img5 from "../../assets/image/Hero_04.jpg"
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Images
const images = [
  { src: img1, caption: "Hallstatt - Austria" },
  { src: img2, caption: "Hallstatt - Austria" },
  { src: img3, caption: "Hvitserkur - Iceland" },
  { src: img4, caption: "Jacksonville - USA" },
  { src: img5, caption: "Moraine Lake - Canada" },
];

const Carousel = () => {
  return (
    <div style={{ width: "100%", height: "60vh",padding:"1.2rem 5rem" }}>
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
        style={{ width: "100%", height: "100%" }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                backgroundImage: `url(${image.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                textShadow: "2px 2px 10px rgba(0, 0, 0, 0.7)",
              }}
            >
              <h1>{image.caption}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
