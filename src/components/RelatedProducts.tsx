"use client";
import { useState, useRef, use } from "react";
import pr1 from "../../public/img/pr1.png";
import pr5 from "../../public/img/pr5.png";
import pr4 from "../../public/img/pr4.png";
import { usePosts } from "@/app/helpers/hooks";
import ProductCard from "./ProductCard";

export default function RelatedProducts() {
  const { posts } = usePosts({ type: 1 });
  return (
    <div className="flex justify-center mt-[-150px] items-center top-[1580px] h-[757px]  w-full mb-[-50px] flex-col mx-auto">
      <div className="flex h-[432px] w-[1280px] flex-col justify-center items-center">
        <div className="flex justify-center items-center flex-col gap-[15px] h-[106px] w-[570px]">
          <h1 className="text-[35px] font-fira-sans text-[#00428c] font-[600] ">
            Sản Phẩm Liên Quan
          </h1>
        </div>
        {/* Danh sách sản phẩm cuộn ngang */}
        <ProductCard posts={posts} />
      </div>
    </div>
  );
}
