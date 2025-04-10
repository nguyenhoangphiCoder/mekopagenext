import tm1 from "../../public/img/tm1.jpg";
import tm2 from "../../public/img/Border.png";
import tm3 from "../../public/img/Paragraph+Background.png";
import AboutUs from "./AboutUs";

export default function About() {
  return (
    <div className="flex relative justify-between items-center mt-[-200px] h-[660px]  mx-auto p-30 gap-5 overflow-hidden ">
      <div className="w-[654px] h-[659px]  relative ml-[-30px] flex flex-row ">
        <img
          src={tm1.src}
          alt="/"
          className=" w-[559px] rounded-2xl absolute z-10 h-[612px] object-cover "
        />
        <img
          src={tm2.src}
          alt="/"
          className="h-[485px] w-[423px]  absolute z-20 ml-[180px] mt-[170px]"
        />
        <img
          src={tm3.src}
          alt="/"
          className="h-[176px] w-[530px]  absolute z-30 ml-[120px] mt-[490px]"
        />
      </div>
      <div className="w-[576px] h-[568px] gap-[15px] mt-[-80px]">
        <h1 className="text-[35px] font-fira-sans text-[#00428c]">
          Về chúng tôi?
        </h1>
        <p className="text-[16px] font-barlow text-[#464646]">
          Là một trong những xí nghiêp lâu đời có trên 30 năm kinh nghiệm làm
          thực phẩm, Xí Nghiệp Chế Biến Thực Phẩm Meko là một trong những xí
          nghiệp chế biến có vốn đầu tư nước ngoài hàng đầu ở Việt Nam.
        </p>
        <AboutUs />
      </div>
    </div>
  );
}
