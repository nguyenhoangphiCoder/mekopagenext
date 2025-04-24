import tm1 from "../../../../public/img/tm1.jpg";
import tm2 from "../../../../public/img/Border.png";
import tm3 from "../../../../public/img/Paragraph+Background.png";
import AboutUs from "../../../components/AboutUs";
import { Barlow, Fira_Sans } from "next/font/google";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["600"],
});
const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function About() {
  return (
    <div className="flex flex-col sm:flex-row relative justify-between items-center mt-[-200px] h-auto sm:h-[660px] mx-auto px-4 sm:px-30 gap-5 overflow-hidden">
      <div className="w-full sm:w-[654px] h-auto sm:h-[659px] relative ml-[-30px] flex flex-col sm:flex-row">
        <img
          src={tm1.src}
          alt="/"
          className="w-full sm:w-[559px] rounded-2xl absolute z-10 h-[312px] sm:h-[612px] object-cover"
        />
        <img
          src={tm2.src}
          alt="/"
          className="h-[230px] w-full sm:h-[485px] sm:w-[423px] absolute z-20 sm:ml-[180px] mt-[80px] sm:mt-[170px]"
        />
        <img
          src={tm3.src}
          alt="/"
          className="h-[120px] w-full sm:h-[176px] sm:w-[530px] absolute z-30 sm:ml-[120px] mt-[400px] sm:mt-[490px]"
        />
      </div>

      <div className="w-full sm:w-[576px] h-auto sm:h-[568px] gap-[15px] mt-4 sm:mt-[-80px]">
        <h1
          className={`text-[28px] sm:text-[35px] font-fira-sans text-[#00428c] ${firaSans.className} font-[600]`}
        >
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
