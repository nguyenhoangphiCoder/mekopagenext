"use client";
import Image from "next/image";
import { Barlow, Fira_Sans } from "next/font/google";
import Nav from "../home/components/Header";
import Footer from "../home/components/Footer";
import { usePosts } from "../helpers/hooks";
import { format } from "date-fns"; // Thêm import cho date-fns
import Link from "next/link";
import NewsEvent from "../home/components/NewsEnvent";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const barlow = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function News() {
  const { posts } = usePosts({ type: 3 });

  return (
    <div className="overflow-hidden">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Nav />
      </div>
      <div className="flex justify-center items-center mt-10  bg-[#f8f9fc]">
        <NewsEvent />
      </div>
      <Footer />
    </div>
  );
}
