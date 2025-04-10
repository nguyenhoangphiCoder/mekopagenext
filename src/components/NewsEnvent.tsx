import Image from "next/image";
import new1 from "../../public/img/New1.jpg";
import new2 from "../../public/img/new2.jpg";
import new3 from "../../public/img/new3.jpg";
export default function NewsEvent() {
  return (
    <div className="flex flex-col justify-center h-[576px]  mt-[-60px] mx-auto ">
      <div className="flex w-[1200px] h-[516px] flex-col">
        <div className="flex flex-col justify-center items-center ">
          <h1 className="font-fira-sans text-[35px] text-[#00428c]">
            Tin Tức Sự Kiện
          </h1>
        </div>
        <div className="w-[1158px] h-[406px] gap-[26px]  mt-10 p-5 flex justify-center items-center">
          <div className="h-[406px] w-[370px]  bg-white shadow-sm rounded-[6px] flex flex-col">
            <Image
              src={new1}
              alt="/"
              className="h-[208px] rounded-t-[6px] w-[370px]"
            />
            <div className="flex flex-col mt-5 ">
              <p className="pl-[26px] font-barlow ">12/27/2024</p>
              <h3 className="font-barlow text-[18px] text-[#191919] pl-[26px]">
                <a href="#"> Tiềm Năng Xuất Khẩu Trứng Vịt Muối Của Việt Nam</a>
              </h3>
              <div className="w-70 h-0.6 bg-gray-300 mt-2 ml-[26px] flex  items-center">
                <div className="w-10 h-1 bg-[#ec500d]"></div>
              </div>
              <div className="mt-3 pl-[26px]">
                <a
                  href="#"
                  className="text-[#ec500d] text-[15px] font-fira-sans pt-5 flex items-center"
                >
                  Xem Thêm <span className="ml-1">›</span>
                </a>
              </div>
            </div>
          </div>
          <div className="h-[406px] w-[370px] bg-white shadow-sm flex rounded-[6px] flex-col">
            <Image
              src={new2}
              alt="/"
              className="h-[208px] rounded-t-[6px] w-[370px]"
            />
            <div className="flex flex-col mt-5">
              <p className="pl-[26px] font-barlow">12/27/2024</p>
              <h3 className="font-barlow text-[18px] text-[#191919] pl-[26px]">
                <a href="#"> Tiềm Năng Xuất Khẩu Trứng Vịt Muối Của Việt Nam</a>
              </h3>
              <div className="w-70 h-0.6 bg-gray-300 mt-2 ml-[26px] flex items-center">
                <div className="w-10 h-1 bg-[#ec500d]"></div>
              </div>
              <div className="mt-3 pl-[26px]">
                <a
                  href="#"
                  className="text-[#ec500d] text-[15px] font-fira-sans pt-5 flex items-center"
                >
                  Xem Thêm <span className="ml-1">›</span>
                </a>
              </div>
            </div>
          </div>
          <div className="h-[406px] w-[370px] bg-white shadow-sm rounded-[6px] flex flex-col">
            <Image
              src={new3}
              alt="/"
              className="h-[208px] w-[370px] rounded-t-[6px]"
            />
            <div className="flex flex-col mt-5">
              <p className="pl-[26px] font-barlow">12/27/2024</p>
              <h3 className="font-barlow text-[18px] text-[#191919] pl-[26px]">
                <a href="#"> Tiềm Năng Xuất Khẩu Trứng Vịt Muối Của Việt Nam</a>
              </h3>
              <div className="w-70 h-0.6 bg-gray-300 mt-2 ml-[26px] flex items-center">
                <div className="w-10 h-1 bg-[#ec500d]"></div>
              </div>
              <div className="mt-3 pl-[26px]">
                <a
                  href="#"
                  className="text-[#ec500d] text-[15px] font-fira-sans pt-5 flex items-center"
                >
                  Xem Thêm <span className="ml-1">›</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
