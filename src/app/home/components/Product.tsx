"use client";
import { usePosts } from "@/app/helpers/hooks";
import { Barlow, Fira_Sans, Inter, Lora, Roboto } from "next/font/google";
import Link from "next/link";
import { FaChevronRight, FaChevronUp } from "react-icons/fa";
import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";
import ProductCard from "@/components/ProductCard";
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
        <ProductCard posts={posts} />
      </div>
    </div>
  );
}
