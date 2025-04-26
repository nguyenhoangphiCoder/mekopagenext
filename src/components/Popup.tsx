import { useSetting } from "@/app/helpers/hooks";
import { FeedbackApi } from "@/app/services/feedback-api";
import { MenuApi } from "@/app/services/menu-api";
import Image from "next/image";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import BgContact from "../../public/img/fbg.png";
import { Fira_Sans } from "next/font/google";
export default function Popup() {
  const [isOpen, setIsOpen] = useState(false);
  const [nav, setNav] = useState(false);
  const MENU = { MAIN: "main" };
  const [mainMenu, setMainMenu] = useState<{ items: any[] } | null>(null);

  const [loadingSubmit, setLoading] = useState(false); // Đổi tên thành loadingSubmit
  const [error, setError] = useState<string | null>(null);

  const [isClient, setIsClient] = useState(false); // Thêm state để xác định client-side
  const router = useRouter(); // Initialize useRouter

  // Set isClient thành true sau khi component được mount (chỉ chạy trên client)
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Fetch menu
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

  const {
    settings,
    loading,
    error: settingError,
  }: {
    settings: any;
    loading: boolean;
    error: { message: string } | null | undefined;
  } = useSetting();

  if (loading) return <p className="text-center mt-10"></p>;

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

      // Sau khi gửi thành công, chuyển đến trang cảm ơn chỉ khi đang ở client-side
      if (isClient) {
        router.push("/thankyou"); // Chuyển tới trang cảm ơn
      }
    } catch (err) {
      setLoading(false);
      setError((err as Error).message || "Đã xảy ra lỗi");
    }
  };

  return (
    <div className="">
      <div className="flex flex-row gap-2   justify-between ">
        <button
          onClick={togglePopup}
          className={`w-[133px] h-[36px] rounded-full border-[#ec500d] border-2 text-[#ec500d] text-[16px] font-barlow font-[600]`}
        >
          Nhận Báo Giá
        </button>
        <div className=" flex justify-center items-center bg-[#ec500d] rounded-full w-[133px] h-[36px]">
          <span className={`text-[16px] text-[#fff] font-[500] font-barlow`}>
            0379 101 969
          </span>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-black  bg-opacity-40 flex items-center justify-center z-50">
          <div className="relative bg-[#f4f2f2] rounded-xl shadow-xl p-8 w-full max-w-3xl animate-fade-in">
            <button
              onClick={togglePopup}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
            >
              ✕
            </button>
            <h2 className="text-2xl font-firaSans font-[700] text-[#00428C] mb-6">
              Yêu Cầu Tư Vấn
            </h2>
            <div className="absolute top-20 left-0 mt-37  right-0 flex justify-center opacity-20 pointer-events-none">
              <Image
                width={500}
                height={500}
                src={BgContact}
                alt="Background Contact"
                className="w-full "
              />
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 relative z-10"
            >
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  name="lastName"
                  className="flex-1 h-12 rounded-full bg-white px-4 font-barlow"
                  placeholder="Họ"
                />
                <input
                  name="firstName"
                  className="flex-1 h-12 rounded-full bg-white px-4 font-barlow"
                  placeholder="Tên"
                />
              </div>
              <input
                name="phone"
                className="h-12 rounded-full bg-white px-4 font-barlow"
                placeholder="Số điện thoại"
              />
              <textarea
                name="content"
                className="h-28 rounded-2xl bg-white px-4 py-2 resize-none font-barlow"
                placeholder="Nội dung"
              />
              <div>
                <button
                  type="submit"
                  className="w-40 h-10 rounded-full bg-[#ec500d] text-white font-semibold"
                  disabled={loadingSubmit}
                >
                  {loadingSubmit ? "Đang gửi..." : "Gửi"}
                </button>
              </div>
            </form>
            {error && <p className="text-red-500 mt-4">{error}</p>}
          </div>
        </div>
      )}
    </div>
  );
}
