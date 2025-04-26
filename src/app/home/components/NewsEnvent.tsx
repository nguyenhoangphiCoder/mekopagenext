"use client";
import Image from "next/image";
import { Barlow, Fira_Sans, Inter, Lora, Roboto } from "next/font/google";
import { usePosts } from "../../helpers/hooks";
import { format } from "date-fns";
import { FaChevronRight } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700"] });
const barlow = Barlow({ subsets: ["latin"], weight: ["400", "600"] });
const firaSans = Fira_Sans({ subsets: ["latin"], weight: ["400", "600"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "600"] });
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
});

export default function NewsEvent() {
  const { posts } = usePosts({ type: 3 });

  return (
    <div className="flex flex-col justify-center items-center py-16 bg-[#f8f9fc]">
      <div className="w-full max-w-[1280px] px-4">
        {/* Tiêu đề */}
        <div className="text-center mb-10">
          <h1
            className={`${firaSans.className} font-[600] text-[35px] text-[#00428c]`}
          >
            Tin Tức Sự Kiện
          </h1>
        </div>

        {/* Danh sách bài viết */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts?.slice(0, 6).map((post, index) => {
            const formattedDate = post.created_at
              ? format(new Date(post.created_at), "dd/MM/yyyy")
              : "Ngày chưa xác định";

            return (
              <div
                key={index}
                className="bg-white shadow-sm rounded-[6px] overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  width={370}
                  height={208}
                  className="w-full h-[208px] object-cover"
                />
                <div className="p-5 flex flex-col justify-between h-full flex-1">
                  <p className={`text-sm text-gray-500 ${barlow.className}`}>
                    {formattedDate}
                  </p>
                  <div className="flex-grow mt-2">
                    <h3
                      className={`text-[18px] text-[#191919] font-[600] ${barlow.className} line-clamp-2  h-[3.5rem]`}
                    >
                      <a href={post.url || "#"}>{post.title}</a>
                    </h3>
                    <div className="w-full h-[3px] bg-gray-300 mt-5 relative">
                      <div className="w-10 h-[3px] bg-[#ec500d] absolute top-[-0.5px] left-0"></div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <a
                      href={`/new?slug=${post.id}`}
                      className={`text-[#ec500d] text-[15px] font-[600] ${firaSans.className} flex items-center`}
                    >
                      Xem Thêm <FaChevronRight className="text-[14px] m-1.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
