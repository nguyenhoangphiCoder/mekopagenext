"use client";
import { useState, useRef, use } from "react";
import pr1 from "../../public/img/pr1.png";
import pr5 from "../../public/img/pr5.png";
import pr4 from "../../public/img/pr4.png";
import { usePosts } from "@/app/helpers/hooks";

const products = [
  {
    id: 1,
    name: "Lòng Trắng Trứng Muối",
    description: "Sectetur adipiscing elit, sed dolabore et dolore magna.",
    image: pr1,
    link: "productDescription",
  },
  {
    id: 2,
    name: "Lòng Đỏ Trứng Muối",
    description: "Sectetur adipiscing elit, sed dolabore et dolore magna.",
    image: pr5,
    link: "#",
  },
  {
    id: 3,
    name: "Trứng Gà Muối",
    description: "Sectetur adipiscing elit, sed dolabore et dolore magna.",
    image: pr4,
    link: "#",
  },
  {
    id: 4,
    name: "Bánh Trung Thu",
    description: "Sectetur adipiscing elit, sed dolabore et dolore magna.",
    image: pr1,
    link: "#",
  },
  {
    id: 5,
    name: "Bánh Mì Trứng",
    description: "Sectetur adipiscing elit, sed dolabore et dolore magna.",
    image: pr5,
    link: "#",
  },
  {
    id: 6,
    name: "Bánh Flan",
    description: "Sectetur adipiscing elit, sed dolabore et dolore magna.",
    image: pr4,
    link: "#",
  },
  {
    id: 7,
    name: "Bánh Trung Thu",
    description: "Sectetur adipiscing elit, sed dolabore et dolore magna.",
    image: pr1,
    link: "#",
  },
  {
    id: 8,
    name: "Bánh Mì Trứng",
    description: "Sectetur adipiscing elit, sed dolabore et dolore magna.",
    image: pr5,
    link: "#",
  },
  {
    id: 9,
    name: "Bánh Flan",
    description: "Sectetur adipiscing elit, sed dolabore et dolore magna.",
    image: pr4,
    link: "#",
  },
];
export default function RelatedProducts() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemsPerClick = 3; // Cuộn 3 sản phẩm mỗi lần click
  const cardWidth = 410; // Chiều rộng mỗi card (bao gồm margin)
  const totalPages = Math.ceil(products.length / itemsPerClick); // Số trang
  const post = usePosts();
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
    <div className="flex justify-center mt-[-150px] items-center top-[1580px] h-[757px]  w-full mb-[-50px] flex-col mx-auto">
      <div className="flex h-[432px] w-[1280px] flex-col justify-center items-center">
        <div className="flex justify-center items-center flex-col gap-[15px] h-[106px] w-[570px]">
          <h1 className="text-[35px] font-fira-sans text-[#00428c]">
            Sản Phẩm Liên Quan
          </h1>
        </div>
        {/* Danh sách sản phẩm cuộn ngang */}
        <div
          ref={scrollRef}
          className=" py-8 flex gap-5 w-[1200px] h-[300px] mb-5 mt-[-30px]  overflow-x-auto scroll-smooth"
          style={{
            scrollBehavior: "smooth",
            scrollbarWidth: "none",
            overflow: "hidden",
          }}
        >
          {post.posts?.map((post) => (
            <div
              key={post.id}
              className="bg-white p-3 rounded-md shadow w-[385px]  h-[245px] flex-shrink-0"
            >
              <h3 className="text-xl font-fira-sans  ml-5">{post.title}</h3>
              <div className="h-[59px] w-[296px] flex  ">
                <p className="text-gray-600 font-roboto text-[16px] p-4">
                  {post.slug}
                </p>
              </div>
              <div className="mt-5 ml-5">
                <a
                  href={"productdescription"}
                  className="text-orange-600 font-fira-sans hover:text-orange-800"
                >
                  Xem ngay <span className="ml-1">›</span>
                </a>
              </div>
              <div className="flex justify-center items-center mt-[-65px] ml-45">
                <img
                  src={post.image}
                  alt={"/"}
                  className="h-[100px] w-[150px] object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Chấm chuyển đổi (Nhấn vào để cuộn 3 sản phẩm + thay đổi màu) */}
        <div className="flex justify-center items-center  space-x-2">
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
