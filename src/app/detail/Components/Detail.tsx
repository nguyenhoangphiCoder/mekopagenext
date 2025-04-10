"use client";

import Image from "next/image";

import Nav from "@/components/Header";
import Footer from "@/components/Footer";
import { formatMoney } from "@/app/helpers/utils";

export default function Detail({ post }: any) {
  return (
    <div className="">
      <Nav />
      <div className="product-detail flex flex-row justify-center gap-30 items-center ">
        <div className="flex justify-center items-center w-[550px] h-[400px] m-15 rounded-2xl border-[#ffff] shadow-xl duration-300">
          <Image
            src={post.image || "/img/default.png"}
            width={350}
            height={150}
            alt={post.title}
            className=" rounded-2xl h-[400px] w-[450px]"
          />
        </div>
        <div className="flex flex-col w-[573px] h-[400px]  gap-[10px] mt-10">
          <h1 className=" uppercase text-lg font-bold">{post.title}</h1>
          <ul>
            <li className="flex gap-2">
              <p className="text-[16px] font-bold text-[#383838]">Price: </p>
              <span className="font-barlow text-red-700">
                {" "}
                {formatMoney(post.product.price)} vnd
              </span>
            </li>
            <li className="flex gap-2">
              <p className="text-[16px] font-bold text-[#383838]">Code: </p>
              <span className="font-barlow "> {post.product.code} </span>
            </li>
            <li className="flex gap-2">
              <p className="text-[16px] font-bold text-[#383838]">Slug: </p>
              <span className="font-barlow "> {post.slug} </span>
            </li>
            <li className="flex gap-2">
              <p className="text-[16px] font-bold text-[#383838]">Status: </p>
              <span className="font-barlow "> {post.status} </span>
            </li>
            <li className="gap-2">
              <p className="text-[16px] font-bold text-[#383838]">
                Description:{" "}
              </p>
              <span className="font-barlow "> {post.description} </span>
            </li>
          </ul>

          <button className="w-[133px] h-[36px] rounded-[51px] bg-[#ec500d] text-white text-[16px] font-barlow">
            Nhận Báo Giá
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
