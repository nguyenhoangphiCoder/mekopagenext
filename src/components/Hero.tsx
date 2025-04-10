import img151 from "../../public/img/image 151.png";
import heroleft from "../../public/img/heroleft.png";

export default function Hero() {
  return (
    <div className="flex relative justify-between items-center h-[660px] mt-10 mx-auto p-5 gap-35 overflow-hidden bg-[#fbfbfb]">
      <div className=" justify-center items-center flex">
        <div className="absolute flex justify-center items-center h-[559px] w-[796px]  ">
          <img src={heroleft.src} alt="/" className="h-[559px] w-[796px]  " />
        </div>
        <div className="relative flex  gap-[20px] ml-25 flex-col ">
          <div className="h-[140px] w-[553px] ">
            <h1 className="text-[#00428C] font-fira-sans text-[50px] ">
              Xí Nghiệp Chế Biến Thực Phẩm Meko
            </h1>
          </div>
          <h2 className="text-[#ec500c] text-[32px] font-fira-sans">
            Meko Food Processing Factory
          </h2>
          <p className="text-center md:text-base leading-relaxed text-[18px] w-[420px] font-barlow text-[#464646]">
            Sự kết hợp hoàn hảo giữa tinh túy của mỗi quả trứng và vị mặn mà của
            muối, được ấp ủ trong từng sản phẩm. Đó là cách chúng tôi mang lại
            sự đậm đà cho bữa ăn của bạn.
          </p>
          <div className="flex gap-[30px] p-5 relative">
            <a
              href="contact"
              className="w-[133px] h-[36px] text-center flex justify-center items-center shadow-lg hover:shadow-xl rounded-full text-white text-sm font-barlow bg-[#ec500d] hover:bg-[#d7440a] transition"
            >
              Liên Hệ
            </a>
            <a className="w-[133px] h-[36px] rounded-full  text-sm font-barlow bg-white justify-center items-center flex  hover:bg-gray-300 transition">
              Xem Thêm
            </a>
          </div>
        </div>
      </div>
      <div className="h-[559px] w-[796px] ">
        <img src={img151.src} alt="/" className="h-[539px] w-[648px]  " />
      </div>
    </div>
  );
}
