"use client";

import { createLinkDetail, formatMoney } from "@/app/helpers/utils";
import Link from "next/link";
import Image from "next/image";

export function ProductItem({ type, post }: any) {
  if (!type) {
    console.error("Type is undefined for post:", post);
    return null;
  }

  return (
    <div className="p-4">
      <div className="bg-white border w-[450px] m-15 border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
        <Link
          href={createLinkDetail(post, type.slug)}
          className="flex overflow-hidden rounded-t-2xl  justify-center items-center"
        >
          <Image
            src={post.image || "/img/default.png"}
            width={400}
            height={250}
            alt={post.title}
            className="w-80 h-60 object-cover mb-5  transition-transform duration-300 hover:scale-105"
          />
        </Link>
        <div className="p-4 text-center space-y-2">
          <Link href={createLinkDetail(post, type.slug)}>
            <h5 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors line-clamp-2">
              {post.title}
            </h5>
          </Link>

          <div className="text-base font-bold text-red-500">
            {formatMoney(post.product.price)}
          </div>
        </div>
      </div>
    </div>
  );
}
