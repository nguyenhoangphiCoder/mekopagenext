"use client"; // Bắt buộc khi dùng Next.js client component

import Image from "next/image";

export default function FeatureFooter() {
  return (
    <div className="flex justify-between items-center h-[390px] mt-[-130px] mx-auto bg-[#fbfbfb] relative">
      {/* Hình bên trái */}
      <Image
        src="/img/fbg.png"
        alt="left"
        width={959}
        height={388}
        className="w-[959px] h-[388px] object-cover object-right opacity-15"
      />

      {/* Hình bên phải */}
      <Image
        src="/img/fbg.png"
        alt="right"
        width={1200}
        height={300}
        className="w-[120%] h-[300px] object-cover object-left opacity-15"
      />
    </div>
  );
}
