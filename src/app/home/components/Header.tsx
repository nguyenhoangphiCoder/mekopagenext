"use client";

import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineDown, AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import mekoName from "../../../../public/img/newlogo.png";
import VNFlag from "../../../../public/img/co-viet-nam-2.jpg";
import { MenuApi } from "@/app/services/menu-api";
import NavbarItems from "../../../components/NavbarItems";
import { usePosts, useSetting } from "@/app/helpers/hooks";
import { Barlow } from "next/font/google";
import Link from "next/link";
import { FeedbackApi } from "@/app/services/feedback-api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import Popup from "@/components/Popup";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "600"],
});

interface MenuItem {
  id: number;
  title: string;
  slug: string;
}

export default function Nav() {
  const [nav, setNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mainMenu, setMainMenu] = useState<{ items: MenuItem[] } | null>(null);
  const [loadingSubmit, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [dropdown, setDropdown] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const post = usePosts();
  const posts = usePosts({ type: "1" });

  const MENU = { MAIN: "main" };

  const {
    settings,
    loading,
    error: settingError,
  }: {
    settings: any;
    loading: boolean;
    error: { message: string } | null | undefined;
  } = useSetting();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const fetchMenu = async () => {
      const menu = await MenuApi.getMenuInfo(MENU.MAIN);
      setMainMenu(menu);
    };
    fetchMenu();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNav(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const togglePopup = () => setIsOpen(!isOpen);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    const data = {
      type: "Liên hệ",
      name: form["lastName"].value + " " + form["firstName"].value,
      phone: form["phone"].value,
      email: "",
      address: "",
      content: form["content"].value,
    };

    setLoading(true);
    setError(null);

    try {
      await FeedbackApi.createFeedback(data);
      setLoading(false);
      form.reset();
      toast.success("Yêu cầu đã được ghi nhận");

      if (typeof window !== "undefined") {
        router.push("/thankyou");
      }
    } catch (err) {
      setLoading(false);
      const message = (err as Error).message || "Đã xảy ra lỗi";
      setError(message);
      toast.error(message);
    }
  };

  if (loading) return <p className="text-center mt-10"></p>;

  return (
    <div>
      <div className="flex justify-between items-center h-[77px] w-full bg-white mx-auto lg:w-full">
        {/* Logo */}
        <div className="flex justify-between items-center h-[77px] w-full bg-white mx-auto px-4 md:px-16 lg:px-20">
          {/* Logo */}
          <Link href="/home" className="flex items-center gap-2">
            <Image
              src={mekoName}
              alt="Meko Logo"
              width={120} // nhỏ hơn cho mobile
              height={40}
              priority
            />
          </Link>

          {/* Navbar Desktop */}
          <div className="hidden md:flex flex-row gap-20 items-center">
            <NavbarItems menu={mainMenu?.items} post={post} />
            <div className="flex items-center gap-2 mr-[-70px]">
              <Image src={VNFlag} alt="VN Flag" width={30} height={20} />
            </div>
            <Popup />
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden mt-4">
            <button onClick={() => setNav(!nav)} className="focus:outline-none">
              {nav ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {/* Mobile Menu Dropdown */}
        {nav && (
          <div className="fixed top-[77px] left-0 w-full h-screen bg-white z-50 md:hidden p-4 overflow-y-auto">
            <ul className="flex flex-col gap-4 text-[#00428c] font-barlow font-[700]">
              <li>
                <Link href="/" onClick={() => setNav(false)}>
                  Trang Chủ
                </Link>
              </li>

              <li className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-1 hover:text-[#ec500d]"
                >
                  Sản Phẩm{" "}
                  <AiOutlineDown
                    className={`mt-1 text-[15px] ${
                      dropdownOpen ? "rotate-180" : ""
                    } transition-transform`}
                  />
                </button>

                {dropdownOpen && posts?.posts?.length > 0 && (
                  <ul className="mt-2 bg-white shadow-lg border rounded w-full z-10">
                    {posts.posts.map((item: any) => (
                      <li
                        key={item.id}
                        className="px-4 py-2 hover:bg-gray-200 hover:text-[#ec500d]"
                      >
                        <Link
                          href={`/productdetail?slug=${item.id}`}
                          onClick={() => {
                            setDropdownOpen(false);
                            setNav(false);
                          }}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li>
                <Link href="/news" onClick={() => setNav(false)}>
                  Tin Tức
                </Link>
              </li>

              <li>
                <Link href="/contact" onClick={() => setNav(false)}>
                  Liên Hệ
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
