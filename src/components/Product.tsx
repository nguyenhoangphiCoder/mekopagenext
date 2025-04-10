"use client";
import { useState, useRef } from "react";
import pr1 from "../../public/img/pr1.png";
import pr4 from "../../public/img/pr4.png";
import pr5 from "../../public/img/pr5.png";
import { usePosts } from "@/app/helpers/hooks";

export default function Product() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemsPerClick = 3; // Cuộn 3 sản phẩm mỗi lần click
  const cardWidth = 410; // Chiều rộng mỗi card (bao gồm margin)
  // Số trang
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
    <div className="flex justify-center items-center h-[757px] mt-[-300px] w-full flex-col mx-auto">
      <div className="flex h-[432px] w-[1280px] flex-col justify-center gap-[15px] items-center">
        <div className="flex h-[397px] w-[1280px] flex-col items-center">
          <div className="flex justify-center items-center flex-col gap-[20px] h-[106px] w-[570px]">
            <h1 className="text-[35px] font-fira-sans text-[#00428c]">
              Sản Phẩm
            </h1>
            <p className="text-[16px] text-[#464646] w-xl text-center font-barlow">
              Với triết lý kinh doanh lấy chất lượng sản phẩm làm trọng tâm,
              chúng tôi tự tin cung cấp ra thị trường hàng triệu sản phẩm mỗi
              năm.
            </p>
          </div>
          {/* Danh sách sản phẩm cuộn ngang */}
          <div
            ref={scrollRef}
            className=" py-8 flex gap-5 w-[1200px] h-[276px] mb-5  overflow-x-auto scroll-smooth"
            style={{
              scrollBehavior: "smooth",
              scrollbarWidth: "none",
              overflow: "hidden",
            }}
          >
            {post.posts?.map((post) => (
              <div
                key={post.id}
                className="bg-white p-3 flex justify-center items-center rounded-md shadow w-[400px] h-[230px] flex-shrink-0"
              >
                <div className="flex justify-center items-center flex-row">
                  <a
                    href={"productdescription"}
                    className="h-[200px] w-[400px] flex flex-row justify-center gap-5 items-center"
                  >
                    <p className="mt-30 font-bold text-[#ec500d]">
                      xem ngay <span> {" > "} </span>
                    </p>

                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-[150x] w-[200px]  hover:scale-105 hover:opacity-90"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chấm chuyển đổi (Nhấn vào để cuộn 3 sản phẩm + thay đổi màu) */}
        <div className="flex justify-center items-center space-x-2">
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
