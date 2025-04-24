"use client";

import Image from "next/image";
import Nav from "@/app/home/components/Header";
import Footer from "@/app/home/components/Footer";
import { formatMoney } from "@/app/helpers/utils";

export default function Detail({ post }: any) {
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-50">
        <Nav />
      </div>
      <div className="py-10 px-4 bg-white min-h-screen">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
          {/* Image section */}
          <div className="flex justify-center items-center w-full lg:w-[550px] h-[400px] bg-white rounded-2xl shadow-lg p-4">
            <Image
              src={post.image || "/img/default.png"}
              width={400}
              height={400}
              alt={post.title}
              className="rounded-2xl object-cover w-full h-full"
            />
          </div>

          {/* Info section */}
          <div className="flex flex-col gap-4 w-full">
            <h1 className="text-2xl font-bold uppercase text-[#00428C]">
              {post.title}
            </h1>
            <ul className="space-y-2">
              <li className="flex gap-2">
                <p className="text-base font-semibold text-gray-800">Price:</p>
                <span className="text-red-600 font-medium">
                  {formatMoney(post.product.price)} VND
                </span>
              </li>
              <li className="flex gap-2">
                <p className="text-base font-semibold text-gray-800">Code:</p>
                <span>{post.product.code}</span>
              </li>
              <li className="flex gap-2">
                <p className="text-base font-semibold text-gray-800">Slug:</p>
                <span>{post.slug}</span>
              </li>
              <li className="flex gap-2">
                <p className="text-base font-semibold text-gray-800">Status:</p>
                <span>{post.status}</span>
              </li>
              <li>
                <p className="text-base font-semibold text-gray-800 mb-1">
                  Description:
                </p>
                <span className="text-gray-700">{post.description}</span>
              </li>
            </ul>

            <button className="mt-6 w-[160px] h-[45px] rounded-full bg-[#ec500d] text-white text-base font-semibold hover:bg-[#d4490a] transition">
              Nhận báo giá
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
