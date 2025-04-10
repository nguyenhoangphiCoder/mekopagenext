"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { usePosts } from "@/app/helpers/hooks";

export default function Description() {
  const [mainImage, setMainImage] = useState<string>("/img/default.png");
  const [activeDot, setActiveDot] = useState(0);
  const post = usePosts({ type: "1" });

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const posts = post.posts || [];

  // Cập nhật mainImage từ API khi có dữ liệu
  useEffect(() => {
    if (posts.length > 0) {
      setMainImage(posts[0].image || "/img/default.png");
    }
  }, [posts]);

  // Tự động chuyển ảnh mỗi 3 giây
  useEffect(() => {
    if (posts.length === 0) return;

    const interval = setInterval(() => {
      const currentIndex = posts.findIndex((p) => p.image === mainImage);
      const nextIndex = (currentIndex + 1) % posts.length;
      setMainImage(posts[nextIndex].image || "/img/default.png");

      // Cập nhật dot nếu cần (mỗi dot đại diện cho 4 ảnh)
      setActiveDot(Math.floor(nextIndex / 4));

      // Cuộn thumbnail
      if (scrollRef.current) {
        const child = scrollRef.current.children[nextIndex] as HTMLElement;
        if (child) {
          scrollRef.current.scrollTo({
            left: child.offsetLeft - 10,
            behavior: "smooth",
          });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [mainImage, posts]);

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;

    const child = scrollRef.current.children[index * 4] as HTMLElement;
    if (child) {
      scrollRef.current.scrollTo({
        left: child.offsetLeft - 10,
        behavior: "smooth",
      });
      setActiveDot(index);
    }
  };

  const currentPost = posts.find((p) => p.image === mainImage);

  return (
    <div className="flex flex-col items-center justify-center mx-auto mt-30 w-full h-[500px]">
      <div className="flex w-[1062px] h-[470px] gap-[40px]">
        {/* Hình lớn */}
        <motion.div
          key={mainImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={mainImage}
            alt="Ảnh chính"
            className="w-[430px] h-[300px] object-cover transition-transform duration-300 hover:scale-105 hover:opacity-90 rounded-lg"
            width={500}
            height={365}
          />

          {/* Thumbnail + Dot */}
          <div className="relative flex flex-col items-center w-[500px] mt-5">
            <motion.div
              ref={scrollRef}
              className="flex gap-[10px] overflow-x-auto whitespace-nowrap w-full px-10"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {posts.map((p) => (
                <Image
                  key={p.id}
                  src={p.image || "/img/default.png"}
                  width={70}
                  height={70}
                  alt={`Thumbnail ${p.id}`}
                  className={`cursor-pointer border-2 rounded transition-all flex-shrink-0 ${
                    mainImage === p.image
                      ? "border-[#ec500d]"
                      : "border-transparent hover:border-[#ec500d]"
                  }`}
                  onClick={() => {
                    setMainImage(p.image || "/img/default.png");
                  }}
                />
              ))}
            </motion.div>

            <div className="flex mt-3 gap-2">
              {Array.from({ length: Math.ceil(posts.length / 4) }).map(
                (_, index) => (
                  <span
                    key={index}
                    className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                      activeDot === index ? "bg-[#ec500d]" : "bg-gray-400"
                    }`}
                    onClick={() => scrollToIndex(index)}
                  ></span>
                )
              )}
            </div>
          </div>
        </motion.div>

        {/* Thông tin */}
        <div className="flex flex-col w-[573px] h-[400px] gap-[20px]">
          {currentPost ? (
            <div>
              <h1 className="text-[40px] font-fira-sans text-[#00428c]">
                {currentPost.title}
              </h1>
              <p className="text-[16px] font-barlow text-[#383838]">
                {currentPost.description}
              </p>
              <ul className="w-[573px] h-[120px] space-y-2">
                <li className="font-fira-sans text-[16px]">
                  {currentPost.slug}
                </li>
                <li className="flex">
                  <p className="font-fira-sans text-[16px]">Giá:</p>
                  <span className="pl-1 text-[16px] font-barlow">
                    {currentPost.product?.price || "Liên hệ"}
                  </span>
                </li>
                <li className="flex">
                  <p className="font-fira-sans text-[16px]">Code:</p>
                  <span className="pl-1 text-[16px] font-barlow">
                    {currentPost.product?.code || "Không có"}
                  </span>
                </li>
                <li className="flex">
                  <p className="font-fira-sans text-[16px]">Trạng thái:</p>
                  <span className="pl-1 text-[16px] font-barlow">
                    {currentPost.status || "Chưa cập nhật"}
                  </span>
                </li>
              </ul>
              <button className="w-[133px] h-[36px] rounded-[51px] bg-[#ec500d] text-white text-[14px] font-barlow">
                Nhận Báo Giá
              </button>
            </div>
          ) : (
            <p className="text-[16px] font-barlow text-[#383838]">
              Không có dữ liệu sản phẩm.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
