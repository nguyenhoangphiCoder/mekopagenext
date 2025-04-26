"use client";
import Link from "next/link";
import { usePosts } from "../helpers/hooks";
import Image from "next/image";
import Nav from "@/app/home/components/Header";
import Footer from "@/app/home/components/Footer";

export default function AllProduct() {
  const posts = usePosts({ type: "1" });

  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-50">
        <Nav />
      </div>
      <div className="px-4 py-12 bg-gray-100 min-h-screen mt-20">
        <h1 className="text-center text-4xl font-bold mb-10 text-[#00428C] uppercase tracking-wide">
          Tất cả sản phẩm
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {posts.posts?.map((item: any) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-transform duration-300 hover:-translate-y-1 overflow-hidden border border-gray-200"
            >
              <Link
                href={`/productdetail?slug=${item.id}`}
                className="block group"
              >
                <div className="overflow-hidden flex justify-center items-center">
                  <Image
                    width={500}
                    height={500}
                    src={item.image}
                    alt={item.title}
                    className="w-[200px] h-[200px]  transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-[#00428C] transition-colors duration-300">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
