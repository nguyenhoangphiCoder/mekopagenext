"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePosts } from "@/app/helpers/hooks";
import Image from "next/image";

export default function NewInfor({ news }: any) {
  const { posts: relatedPosts } = usePosts({ type: 3 });
  const [selectedPost, setSelectedPost] = useState(news); // Quản lý bài viết được chọn

  // Hàm xử lý khi click vào một bài viết trong sidebar
  const handleClick = (post: any) => {
    setSelectedPost(post);
  };

  return (
    <div className="flex gap-12 p-8 bg-gray-100 font-sans overflow-hidden">
      {/* Cột chính bên trái */}
      <div className="w-3/4 bg-white p-8 rounded-3xl shadow-xl transition-all duration-300 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {selectedPost.title}
        </h2>
        <div className="text-center mb-6">
          <p className="text-md text-gray-600 italic">{selectedPost.caption}</p>
        </div>
        <div
          className="text-lg leading-[1.8] text-gray-800"
          dangerouslySetInnerHTML={{ __html: selectedPost.content }}
        />
      </div>

      {/* Sidebar bên phải */}
      <div className="w-1/4 bg-white p-8 rounded-3xl shadow-xl">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800 border-b-2 border-gray-300 pb-2">
          Bài viết liên quan
        </h3>
        <div className="flex flex-col gap-6">
          {relatedPosts.map((post) => (
            <div
              key={post.id}
              className="flex items-center bg-gray-100 rounded-lg p-4 hover:bg-gray-200 transition-all duration-200 cursor-pointer transform hover:scale-105"
              onClick={() => handleClick(post)} // Cập nhật trạng thái khi click vào bài viết
            >
              <Image
                width={80}
                height={60}
                src={post.image}
                alt={post.title}
                className="w-[80px] h-[60px] object-cover rounded-lg mr-6"
              />
              <p className="text-md font-medium text-gray-700 flex-1">
                {post.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
