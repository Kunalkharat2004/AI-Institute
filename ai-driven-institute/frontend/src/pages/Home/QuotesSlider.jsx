import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import quote from "../../data/quotes.js"

// Sample data for the slider
const quotes = quote;

const QuoteSlider = () => {
  return (
    <div style={{ width: "100%", padding: "20px" }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={2}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        style={{ padding: "20px 0" }}
      >
        {quotes.map((quote, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                
                background: "black",
                borderRadius: "10px",
                textAlign: "center",
              }}
            >
              <img
                src={quote.image}
                alt={quote.author}
                style={{
                  width: "100%",
                  height: "100%",
                  marginBottom: "10px",
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default QuoteSlider;
