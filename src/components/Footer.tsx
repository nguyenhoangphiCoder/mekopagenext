"use client"; // Bắt buộc khi dùng hooks hoặc react-icons

import { usePosts } from "@/app/helpers/hooks";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

export default function Footer() {
  // const menuItems = ["Trang chủ", "Sản Phẩm", "Liên Hệ", "Tin tức"];
  const [dropdown, setDropdown] = useState(false);
  const posts = usePosts({ type: "1" });
  return (
    <div className="relative flex justify-center items-center h-[443px] max-w-full w-full flex-col mx-auto">
      <Image
        src="/img/footer.png"
        alt="Footer"
        className="h-[443px] w-screen absolute top-0 left-0"
        layout="fill"
      />
      <div className="relative h-[443px] w-[1406px] max-w-[1415px] flex flex-row items-center justify-center gap-10">
        <ul className="relative h-[279px] w-[1406px] ml-15 flex flex-col gap-1  ">
          <li className="text-[16px] font-fira-sans text-[#ec500d]">
            Nhà máy sản xuất:
          </li>
          <li className=" text-[16px] font-fira-sans uppercase">
            XÍ NGHIỆP CBTP MEKO
          </li>
          <li>
            <p className="font-barlow text-[16px]">
              <span className="font-fira-sans">Địa chỉ:</span> Lô 25, KCN Trà
              Nóc 1, P. Trà Nóc, Q. Bình Thủy, TP. Cần Thơ
            </p>
          </li>
          <li className="text-[16px] font-fira-sans text-[#ec500d]">
            Đơn vị phân phối:
          </li>
          <li className=" text-[16px] font-fira-sans uppercase">
            CÔNG TY TNHH THƯƠNG MẠI MEKO
          </li>
          <li>
            <p className=" text-[16px] font-barlow">
              <span className="font-fira-sans">Địa chỉ:</span> 193 Phan Huy Chú,
              P. An Khánh, Q. Ninh Kiều, TP. Cần Thơ
            </p>
          </li>
        </ul>
        <div className="relative h-[279px] w-[1406px] max-w-[1410px] flex flex-col pl-20 ">
          <h3 className="text-[20px] text-[#464646] font-fira-sans ">
            Liên kết
          </h3>
          <div className="h-[2px] w-[28px] bg-[#ec500d] "></div>
          {/* <ul className="space-y-2 text-lg text-gray-700 gap-3 mt-5">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center font-fira-sans gap-2 pt-3"
              >
                <FaChevronRight className="w-4 h-4 text-gray-500" />
                {item}
              </li>
            ))}
          </ul> */}
          <ul className="space-y-2 text-lg text-gray-700 gap-3 mt-5">
            <li>
              <a
                href="/"
                className="flex items-center font-fira-sans gap-2 pt-3"
              >
                Trang Chủ
              </a>
            </li>

            {/* Dropdown sản phẩm */}
            {/* Dropdown sản phẩm */}
            <li
              className="relative flex items-center font-fira-sans gap-2 pt-3 group cursor-pointer"
              onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
            >
              <Link href={"/allproduct"} className="flex items-center gap-1">
                Sản Phẩm <span className="ml-1">›</span>
              </Link>

              {/* Dropdown menu */}
              <ul
                className={`absolute top-full left-0 mt-2 w-[250px] bg-white shadow-xl border rounded-md z-20 transition-all duration-300 ease-in-out ${
                  dropdown
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                {posts.posts?.map((item: any) => (
                  <li key={item.id} className="px-4 py-2 hover:bg-gray-100">
                    <Link href={`/productdetail?slug=${item.id}`}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <a className="flex items-center font-fira-sans gap-2 pt-3">
                Tin Tức
              </a>
            </li>
            <li>
              <a
                href="contact"
                className="flex items-center font-fira-sans gap-2 pt-3"
              >
                Liên Hệ
              </a>
            </li>
          </ul>
        </div>
        <div className="relative h-[279px] w-[1406px] max-w-[1415px] flex flex-col mr-8 ">
          <h3 className="text-[20px] text-[#464646] font-fira-sans ">
            Liên Hệ
          </h3>
          <div className="h-[2px] w-[28px] bg-[#ec500d]"></div>
          <ul className="space-y-2 text-lg text-gray-700 gap-5 mt-5">
            <li className="flex items-center font-fira-sans  gap-2 pt-5">
              <Image src="/img/sms.png" alt="Email" width={20} height={20} />
              mekofty.sales@gmail.com
            </li>
            <li className="flex items-center font-fira-sans gap-2 pt-5">
              <Image
                src="/img/Vector (1).png"
                alt="Phone"
                width={20}
                height={20}
              />
              0379 101 969
            </li>
          </ul>
        </div>
        <div className="relative h-[279px] w-[1406px] max-w-[1415px] flex flex-col mr-15 ">
          <h3 className="text-[20px] text-[#464646] font-fira-sans ">
            Fanpage
          </h3>
          <div className="h-[2px] w-[28px] bg-[#ec500d]"></div>
          <div className="h-[167px] w-[280px] bg-[#d7d7d7] flex mt-5"></div>
        </div>
      </div>
      <div className="h-[64px] w-[1450px] bg-[#ffffff] relative rounded-[12px] mb-10 flex flex-row items-center ">
        <p className="ml-5 text-[14px] text-gray-400 font-semibold ">©2024,</p>
        <a href="/" className="text-[14px] font-inter ">
          Copyright by Satek.vn
        </a>
      </div>
    </div>
  );
}
