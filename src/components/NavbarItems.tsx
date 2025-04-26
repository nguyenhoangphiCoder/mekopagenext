"use client";
import { usePosts } from "@/app/helpers/hooks";
import Link from "next/link";
import { useState } from "react";
import { Barlow } from "next/font/google";
import { AiOutlineDown, AiOutlineRight } from "react-icons/ai";
const barlow = Barlow({ subsets: ["latin"], weight: "600" });

export default function NavbarItems({ menu, type }: any) {
  const [dropdown, setDropdown] = useState(false);
  const posts = usePosts({ type: "1" });

  return (
    <div className="flex flex-row  items-center gap-10 ml-20 mr-[-25px] ">
      <nav className="hidden md:flex items-center gap-1 ">
        <ul
          className={`flex gap-8 text-[#00428c] font-barlow relative ${barlow.className} font-[700]`}
        >
          <li>
            <a
              href="/"
              className="cursor-pointer hover:text-[#ec500d] font-barlow font-[700]"
            >
              Trang Chủ
            </a>
          </li>

          {/* Dropdown sản phẩm */}
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            <div>
              <Link
                href={"/allproduct"}
                className="flex items-center gap-1 hover:text-[#ec500d] font-barlow font-[700]"
              >
                Sản Phẩm <AiOutlineDown className=" mt-1 text-[15px]" />
              </Link>
              {dropdown && (
                <ul className="absolute top-full left-0 bg-white shadow-lg border  w-[250px] z-10">
                  {posts.posts?.map((item: any) => (
                    <li
                      key={item.id}
                      className="px-4 py-2 hover:bg-gray-200 hover:text-[#ec500d]"
                    >
                      <Link href={`/productdetail?slug=${item.id}`}>
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>

          <li>
            <a
              className="hover:text-[#ec500d] cursor-pointer font-barlow font-[700]"
              href="/news"
            >
              Tin Tức
            </a>
          </li>
          <li>
            <a
              href="contact"
              className="hover:text-[#ec500d] cursor-pointer font-barlow font-[700]"
            >
              Liên Hệ
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
