import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { Box, ImageList, ImageListItem } from "@mui/material";
import img1 from "../../../assets/image/aicte_img1.jpg";
import img2 from "../../../assets/image/aicte_img2.jpg";
import img3 from "../../../assets/image/aicte_img3.jpg";
import img4 from "../../../assets/image/aicte_img4.jpg";
import img5 from "../../../assets/image/aicte_img5.jpg";
import img6 from "../../../assets/image/aicte_img6.jpg";

const AicteCard = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const navigate = useNavigate();
  const itemData = [
    { img: img1, title: "Bed" },
    { img: img2, title: "Books" },
    { img: img3, title: "Sink" },
    { img: img4, title: "Kitchen" },
    { img: img5, title: "Blinds" },
    { img: img6, title: "Chairs" },
  ];

  const paragraphs = [
    "All India Council for Technical Education (AICTE) was established in November 1945 as a national-level apex advisory body. Its primary mandate was to conduct a comprehensive survey of facilities available for technical education across India and promote coordinated development of technical education in the country.",
    "AICTE plays a pivotal role in laying down the standards, norms, and guidelines for higher education institutions offering technical and professional courses. Over the years, it has evolved into a key organization responsible for ensuring the quality, relevance, and accessibility of technical education in India.",
  ];

  const handleButtonClick = () => {
    return navigate("/animalDetection");
  };

  return (
    <div className="py-20 px-4">
      {/* Heading */}
      <div className="w-full text-center mb-8">
        <h1
          className="text-3xl md:text-5xl font-bold"
          data-aos={"fade-up"}
        >
          <span>Welcome to </span>
          <span className="text-red-500 ml-2">AICTE!</span>
        </h1>
      </div>

      {/* Content Section */}
      <div
        className="w-full flex flex-col md:flex-row mx-auto justify-center items-center bg-opacity-50 
        max-w-[1450px] rounded-3xl md:py-10"
      >
        {/* Image Div */}
        <div className="w-full md:w-1/3 p-4" data-aos="fade-right">
          <Box
            sx={{
              width: "100%",
              maxWidth: 400,
              margin: "0 auto",
              overflowY: "hidden",
            }}
          >
            <ImageList
              variant="masonry"
              cols={2}
              gap={8}
              sx={{
                "& img": {
                  borderRadius: "12px",
                  maxHeight: { xs: 100, sm: 150 }, // Responsive image sizes
                },
              }}
            >
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 p-4 flex flex-col gap-6">
          {paragraphs.map((text, index) => (
            <div
              key={index}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <p className="text-lg leading-7 max-w-3xl mx-auto">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AicteCard;