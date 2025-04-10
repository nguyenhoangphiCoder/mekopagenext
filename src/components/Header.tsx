"use client";
import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import mekoName from "../../public/img/Rectangle.png";
import logoMeko from "../../public/img/Logo-MEKO-Trading-2-1 2.png";
import VNFlag from "../../public/img/co-viet-nam-2.jpg";
import { MenuApi } from "@/app/services/menu-api";
import NavbarItems from "./NavbarItems";
import { usePosts } from "@/app/helpers/hooks";

export default function Nav() {
  const [nav, setNav] = useState(false);
  const post = usePosts();
  const MENU = { MAIN: "main" }; // Define MENU constant

  const [mainMenu, setMainMenu] = useState<{ items: any[] } | null>(null);

  useEffect(() => {
    const fetchMenu = async () => {
      const menu = await MenuApi.getMenuInfo(MENU.MAIN);
      setMainMenu(menu);
    };
    fetchMenu();
  }, []);

  // 🛠 Tự động tắt menu khi chuyển sang desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNav(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex justify-between items-center h-[77px] w-full max-w-[screen] mx-auto bg-white px-20">
      {/* Logo */}
      <div className="flex items-center gap-6">
        <Image src={mekoName} alt="Meko Name" className="h-[40px]" />
        <Image src={logoMeko} alt="Meko Logo" className="h-[40px]" />
      </div>

      {/* Navbar Desktop */}
      <div className="flex flex-row gap-20">
        <NavbarItems menu={mainMenu?.items} post={post} />

        {/* Cờ VN + Nút Báo Giá (Luôn hiển thị trên Mobile) */}
        <div className="flex items-center gap-2 ">
          <img src={VNFlag.src} alt="VN Flag" className="h-[20px]" />
          <button className="w-[133px] h-[36px] rounded-[51px] bg-[#ec500d] text-white text-[16px] font-barlow">
            Nhận Báo Giá
          </button>
        </div>
      </div>
      {/* Mobile Menu Icon */}
      <div onClick={() => setNav(!nav)} className="md:hidden cursor-pointer  ">
        {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </div>
    </div>
  );
}
