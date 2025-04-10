"use client";
import Link from "next/link";
import { usePosts } from "../helpers/hooks";
import Image from "next/image";
import Nav from "@/components/Header";
import Footer from "@/components/Footer";

export default function AllProduct() {
  const posts = usePosts({ type: "1" });

  return (
    <div>
      <Nav />
      <div className="px-4 py-10 bg-gray-50 min-h-screen">
        <h1 className="text-center text-4xl font-bold mb-8 text-[#ec500d] uppercase">
          Tất cả sản phẩm
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          {posts.posts?.map((item: any) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <Link
                href={`/productdetail?slug=${item.id}`}
                className="block group"
              >
                <div className="overflow-hidden">
                  <Image
                    width={400}
                    height={300}
                    src={item.image}
                    alt={item.title}
                    className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-[#333] mb-2">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 text-sm line-clamp-3">
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
