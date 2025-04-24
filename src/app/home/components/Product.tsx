"use client";
import { usePosts } from "@/app/helpers/hooks";
import { Barlow, Fira_Sans, Inter, Lora, Roboto } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700"] });
const barlow = Barlow({ subsets: ["latin"], weight: ["400", "500", "600"] });
const firaSans = Fira_Sans({ subsets: ["latin"], weight: ["400", "600"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500"] });
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
});

export default function Product() {
  const { posts } = usePosts({ type: 1 });

  return (
    <div className="flex justify-center items-center w-full mt-20 flex-col py-16 bg-[#f8f9fc]">
      <div className="max-w-[1280px] w-full px-4 flex flex-col items-center">
        {/* Heading */}
        <div className="text-center max-w-xl mb-10">
          <h1
            className={`text-4xl ${firaSans.className} text-[#00428c] font-[600] mb-4`}
          >
            Sản Phẩm
          </h1>
          <p
            className={`text-base text-[#464646] leading-relaxed ${barlow.className}`}
          >
            Với triết lý kinh doanh lấy chất lượng sản phẩm làm trọng tâm, chúng
            tôi tự tin cung cấp ra thị trường hàng triệu sản phẩm mỗi năm.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {posts?.map((post) => (
            <div
              key={post.id}
              className="bg-white p-4 flex items-center rounded-2xl shadow w-full min-h-[276px] hover:shadow-xl transition-shadow duration-300"
            >
              <a
                href={`/productdetail?slug=${post.id}`}
                className="flex gap-4 w-full items-center relative"
              >
                <div className="flex flex-col justify-between w-[60%]">
                  <h2
                    className={`text-[20px] ${firaSans.className} font-[600] text-black truncate`}
                  >
                    {post.title}
                  </h2>
                  <p
                    className={`line-clamp-2 ${roboto.className} text-[16px] text-[#333]`}
                  >
                    {post.description}
                  </p>
                  <span
                    className={`text-[16px] ${firaSans.className} font-[600] text-[#ec500d] mt-2`}
                  >
                    Xem ngay <span>&gt;</span>
                  </span>
                </div>
                <div className="w-[40%]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-[150px] object-contain rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
