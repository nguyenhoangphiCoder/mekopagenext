"use client";
import Image from "next/image";
import { Barlow, Fira_Sans } from "next/font/google";
import Nav from "../home/components/Header";
import Footer from "../home/components/Footer";
import { usePosts } from "../helpers/hooks";
import { format } from "date-fns"; // Thêm import cho date-fns

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const barlow = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function News() {
  const { posts } = usePosts({ type: 3 });

  return (
    <div>
      <Nav />
      <div className="flex justify-center items-center mt-30">
        <div className="flex flex-col justify-center h-auto mt-[-60px] mx-auto">
          <div className="flex w-full md:w-[1200px] h-auto flex-col">
            <div className="flex flex-col justify-center items-center">
              <h1
                className={`${firaSans.className} font-[600] text-[35px] text-[#00428c]`}
              >
                Tin Tức Sự Kiện
              </h1>
            </div>
            <div className="w-full flex flex-wrap justify-center gap-6 mt-10 p-5 overflow-hidden">
              {posts?.map((singlePost, index) => {
                // Format ngày tháng
                const formattedDate = singlePost.created_at
                  ? format(new Date(singlePost.created_at), "dd/MM/yyyy")
                  : "Ngày chưa xác định";

                return (
                  <div
                    key={index}
                    className="h-auto w-full sm:w-[370px] bg-white shadow-md rounded-[8px] flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    {/* Hiển thị ảnh bài viết */}
                    <Image
                      src={singlePost.image} // Sử dụng ảnh từ dữ liệu
                      alt={singlePost.title} // Sử dụng title làm alt
                      className="h-[208px] rounded-t-[8px] w-full object-cover" // Thêm object-cover để ảnh không bị méo
                      width={1000}
                      height={1000}
                    />
                    <div className="flex flex-col mt-5">
                      {/* Hiển thị ngày bài viết */}
                      <p className={`pl-[26px] ${barlow.className} font-[400]`}>
                        {formattedDate} {/* Hiển thị ngày đã format */}
                      </p>
                      {/* Tiêu đề bài viết */}
                      <h3
                        className={`${barlow.className} font-[600] text-[18px] text-[#191919] pl-[26px]`}
                      >
                        <a href={singlePost.url || "#"}>{singlePost.title}</a>{" "}
                      </h3>
                      <div className="w-70 h-0.6 bg-gray-300 mt-2 ml-[26px] flex items-center">
                        <div className="w-10 h-1 bg-[#ec500d]"></div>
                      </div>
                      <div className="mt-3 pl-[26px]">
                        <a
                          href={singlePost.url || "#"}
                          className={`text-[#ec500d] text-[15px] ${firaSans.className} font-[600] pt-5 flex items-center`}
                        >
                          Xem Thêm <span className="ml-1">›</span>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
