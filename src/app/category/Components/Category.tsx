"use client";

import { createLinkCategory } from "@/app/helpers/utils";
import Link from "next/link";
import { ProductItem } from "./ProductItem";
import Nav from "@/components/Header";
import Footer from "@/components/Footer";

export default function Category({ category, categories, posts, type }: any) {
  return (
    <div>
      <Nav />
      <div className="product-category">
        <h1 className="text-center uppercase text-lg font-bold text-[50px] mb-3">
          {category.title}
        </h1>

        <div className="grid grid-cols-3 gap-3">
          {posts.map((post: any) => (
            <ProductItem type={type} post={post} key={post.id} />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
}
