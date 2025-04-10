"use client";
import { usePosts } from "@/app/helpers/hooks";
import Link from "next/link";
import { useState } from "react";

export default function NavbarItems({ menu, type }: any) {
  const [dropdown, setDropdown] = useState(false);
  const posts = usePosts({ type: "1" });

  return (
    <div className="flex flex-row items-center gap-10">
      <nav className="hidden md:flex items-center gap-1">
        <ul className="flex gap-8 text-[#00428c] font-barlow relative">
          <li>
            <a href="/" className="cursor-pointer">
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
              <Link href={"/allproduct"} className="flex items-center gap-1">
                Sản Phẩm <span className="ml-1">›</span>
              </Link>
              {dropdown && (
                <ul className="absolute top-full left-0 bg-white shadow-lg border mt-1 w-[250px] z-10">
                  {posts.posts?.map((item: any) => (
                    <li key={item.id} className="px-4 py-2 hover:bg-gray-200">
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
            <a className="hover:text-[#ec500d] cursor-pointer">Tin Tức</a>
          </li>
          <li>
            <a href="contact" className="hover:text-[#ec500d] cursor-pointer">
              Liên Hệ
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
