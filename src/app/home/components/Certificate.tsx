"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { Barlow, Fira_Sans, Inter, Lora, Roboto } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const barlow = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
});

const certificates = [
  {
    id: 1,
    title: "Vegetables",
    description: "Purchasing from select family farmers who farm organically.",
    image: "/img/Link___h3-product5-400x326.png-removebg-preview.png",
    borderColor: "#76a713",
  },
  {
    id: 2,
    title: "Fresh Fruits",
    description: "Purchasing from select family farmers who farm organically.",
    image: "/img/Link___h3-product5-400x326.png-removebg-preview.png",
    borderColor: "#bd0496",
  },
  {
    id: 3,
    title: "Nuts & dried food",
    description: "Purchasing from select family farmers who farm organically.",
    image: "/img/Link___h3-product5-400x326.png-removebg-preview.png",
    borderColor: "#c88149",
  },
  {
    id: 4,
    title: "Organic Products",
    description: "Purchasing from select family farmers who farm organically.",
    image: "/img/Link___h3-product5-400x326.png-removebg-preview.png",
    borderColor: "#76a713",
  },
  {
    id: 5,
    title: "Vegetables",
    description: "Purchasing from select family farmers who farm organically.",
    image: "/img/Link___h3-product5-400x326.png-removebg-preview.png",
    borderColor: "#76a713",
  },
  {
    id: 6,
    title: "Fresh Fruits",
    description: "Purchasing from select family farmers who farm organically.",
    image: "/img/Link___h3-product5-400x326.png-removebg-preview.png",
    borderColor: "#bd0496",
  },
  {
    id: 7,
    title: "Nuts & dried food",
    description: "Purchasing from select family farmers who farm organically.",
    image: "/img/Link___h3-product5-400x326.png-removebg-preview.png",
    borderColor: "#c88149",
  },
  {
    id: 8,
    title: "Organic Products",
    description: "Purchasing from select family farmers who farm organically.",
    image: "/img/Link___h3-product5-400x326.png-removebg-preview.png",
    borderColor: "#76a713",
  },
];

export default function Certificate() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemsPerClick = 3;
  const cardWidth = 290;
  const totalPages = Math.ceil(certificates.length / itemsPerClick);

  const scrollToIndex = (index: number): void => {
    if (scrollRef.current) {
      setCurrentIndex(index);
      scrollRef.current.scrollTo({
        left: index * itemsPerClick * cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex justify-center items-center h-[670px]  w-full flex-col mx-auto">
      <div className="flex flex-col w-[1440px] h-[670px] justify-center items-center">
        {" "}
        <div className="flex justify-center items-center flex-col">
          <h1
            className={`text-[35px] ${firaSans.className} font-[600] text-[#00428c]`}
          >
            Chứng Nhận
          </h1>
          <p className="text-[16px] text-[#464646] w-xl text-center font-barlow font-[400]">
            Với sản phẩm chất lượng cao, chúng tôi đã giành được nhiều giải
            thưởng tại các hội chợ và triển lãm trong nước và quốc tế.
          </p>
        </div>
        {/* Danh sách chứng nhận */}
        <div
          ref={scrollRef}
          className="flex gap-5 w-[1170px] mt-10 p-5 overflow-x-auto scroll-smooth"
          style={{
            scrollBehavior: "smooth",
            scrollbarWidth: "none",
            overflow: "hidden",
          }}
        >
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="h-[325px] w-[270px] gap-1 bg-white items-center justify-center shadow-xs flex flex-col flex-shrink-0"
            >
              <div
                className={`h-[289px] w-[234px]  flex justify-center border-[1px]  flex-col text-center`}
                style={{
                  borderColor: `${cert.borderColor}50`,
                  borderWidth: 0.25,
                  opacity: 1,
                }}
              >
                <div className="h-[171px] w-[210px] flex justify-center items-center">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-[190px] h-[155px]"
                  />
                </div>
                <h4 className="text-[24px] font-lora font-[600]">
                  {cert.title}
                </h4>
                <p className="text-[15px] font-barlow font-[300]">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Chấm chuyển đổi */}
        <div className="flex justify-center items-center mt-4 space-x-2">
          {[...Array(totalPages)].map((_, index) => (
            <div
              key={index}
              className={`w-5 h-1 rounded-full cursor-pointer transition-all ${
                currentIndex === index ? "bg-orange-500" : "bg-gray-500"
              }`}
              onClick={() => scrollToIndex(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
