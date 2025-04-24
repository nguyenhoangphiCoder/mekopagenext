"use client";
import fbg from "../../public/img/fbg.png";
export default function ProductBenefits() {
  return (
    <div className="flex justify-center items-center h-[645px]  w-full mt-[-100px] flex-col mx-auto">
      <img
        src={fbg.src}
        alt="/"
        className="w-[1595px] -h[645px] opacity-15  absolute"
      />
      <div className="h-[158px] w-[1230px] flex justify-between mt-50 text-center items-center relative">
        <div className="h-[83px] w-[324px] flex flex-col">
          <span className="font-fira-sans text-[18px] text-[#00428c]  font-[600]">
            Bổ dưỡng
          </span>
          <p className="text-[15px] font-barlow text-center text-[#464646]">
            Trứng muối cung cấp chất đạm, Canxi, sắt, phốt pho cùng với một số
            khoáng chất khác.
          </p>
        </div>
        <div className="h-[83px] w-[324px] flex flex-col">
          <span className="font-fira-sans text-[18px] text-[#00428c]  font-[600]">
            Tiện lợi
          </span>
          <p className="text-[15px] font-barlow text-center text-[#464646]">
            Lòng đỏ trứng muối đã được xử lí, giúp khách hàng dễ dàng sử dụng.
          </p>
        </div>
        <div className="h-[83px] w-[350px] flex flex-col">
          <span className="font-fira-sans text-[18px] text-[#00428c]  font-[600]">
            Hợp khẩu vị
          </span>
          <p className="text-[15px] font-barlow  text-[#464646]">
            Lòng đỏ trứng muối giúp cho các món ăn trở nên ngon hơn với vị mặn
            nhẹ, thơm bùi của trứng muối.
          </p>
        </div>
      </div>
    </div>
  );
}
