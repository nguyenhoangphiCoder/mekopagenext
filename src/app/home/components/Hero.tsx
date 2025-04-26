import img151 from "../../../../public/img/image 151.png";
import heroleft from "../../../../public/img/heroleft.png";
import { Barlow, Fira_Sans } from "next/font/google";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const barlow = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Hero() {
  return (
    <div className="flex flex-col-reverse lg:flex-row lg:w-[1440px] relative justify-between items-center lg:h-[660px] mt-20 mx-auto px-4 py-10 gap-10 bg-[#fbfbfb]">
      <div className="flex justify-center items-center w-full lg:w-1/2 relative">
        {/* Background Image */}
        <div className="absolute lg:flex justify-center items-center h-[600px] hidden lg:block w-[900px]">
          <img src={heroleft.src} alt="/" className="h-[600px] w-[900px]" />
        </div>
        <div className="relative flex gap-5 lg:ml-[100px] flex-col text-center lg:text-left px-4">
          <div className="w-full lg:w-[553px]">
            <h1
              className={`text-[#00428C] ${firaSans.className} font-[600] text-[32px] lg:text-[50px]`}
            >
              Trứng Muối Meko
            </h1>
          </div>
          <h2
            className={`text-[#ec500c] text-[24px] lg:text-[32px] ${firaSans.className} font-[600]`}
          >
            Trứng muối sạch, ngon, chuẩn vị
          </h2>
          <p
            className={`text-[16px] mt-[-10px] lg:text-[18px] w-full max-w-[420px] text-[#464646] ${barlow.className} font-[400] leading-relaxed mx-auto lg:mx-0`}
          >
            Sự kết hợp hoàn hảo giữa tinh túy của mỗi quả trứng và vị mặn mà của
            muối, được ấp ủ trong từng sản phẩm. Đó là cách chúng tôi mang lại
            sự đậm đà cho bữa ăn của bạn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-5 justify-center lg:justify-start">
            <a
              href="contact"
              className={`w-full sm:w-[133px] h-[40px] text-center flex justify-center items-center shadow-lg hover:shadow-xl ${barlow.className} font-[600] rounded-full text-white text-sm bg-[#ec500d] hover:bg-[#d7440a] transition`}
            >
              Liên Hệ
            </a>
            <a
              className={`w-full sm:w-[133px] h-[40px] rounded-full text-sm ${barlow.className} font-[600] bg-white justify-center items-center flex hover:bg-gray-300 transition`}
            >
              Xem Thêm
            </a>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[796px] flex justify-center items-center mt-5 lg:mt-0">
        <img
          src={img151.src}
          alt="/"
          className="w-[90%] max-w-[648px] h-auto object-contain"
        />
      </div>
    </div>
  );
}
