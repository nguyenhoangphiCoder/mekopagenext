"use client";
import { useState, useRef } from "react";
import { usePosts } from "@/app/helpers/hooks";

export default function Product() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemsPerClick = 3;
  const cardWidth = 410;

  const post = usePosts({ type: "1" });
  const totalPages = Math.ceil(post.posts.length / itemsPerClick);

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
    <div className="flex justify-center items-center w-full flex-col py-16 bg-[#f8f9fc]">
      <div className="max-w-[1280px] w-full px-4 flex flex-col items-center">
        {/* Heading */}
        <div className="text-center max-w-xl mb-10">
          <h1 className="text-4xl font-fira-sans text-[#00428c]  mb-4">
            Sản Phẩm
          </h1>
          <p className="text-base text-[#464646] font-barlow leading-relaxed">
            Với triết lý kinh doanh lấy chất lượng sản phẩm làm trọng tâm, chúng
            tôi tự tin cung cấp ra thị trường hàng triệu sản phẩm mỗi năm.
          </p>
        </div>

        {/* Product Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-5 w-full h-[260px] overflow-hidden scroll-smooth relative"
        >
          {post.posts?.map((post) => (
            <div
              key={post.id}
              className="bg-white p-4 flex items-center rounded-2xl shadow-md w-[400px] h-[230px] flex-shrink-0 hover:shadow-xl transition-shadow duration-300"
            >
              <a
                href="productdescription"
                className="flex gap-4 w-full items-center"
              >
                <div className="flex flex-col justify-between w-[200px] h-[150px]">
                  <h2 className="text-xl font-semibold text-[#00428c]">
                    {post.title}
                  </h2>
                  <p className="line-clamp-2 text-sm text-[#333]">
                    {post.description}
                  </p>
                  <span className="text-sm font-bold text-[#ec500d] mt-2">
                    xem ngay <span>&gt;</span>
                  </span>
                </div>

                <div className="w-[180px] h-[150px] relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center space-x-2 mt-6">
          {[...Array(totalPages)].map((_, index) => (
            <div
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-6 h-1 rounded-full cursor-pointer mb-25 transition-all duration-300 ${
                currentIndex === index ? "bg-orange-500" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
