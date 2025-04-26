import poup1 from "../../../public/img/Ellipse 1.png";
import poup2 from "../../../public/img/Ellipse 2.png";
import Image from "next/image";
import Nav from "../home/components/Header";

import Footer from "../home/components/Footer";
import { Fira_Sans } from "next/font/google";
const firaSans = Fira_Sans({ subsets: ["latin"], weight: ["400", "600"] });
export default function ThankYou() {
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-50">
        <Nav />
      </div>
      <div className="flex flex-col-reverse lg:flex-col  items-center lg:h-[660px] mx-auto   ">
        <div className="mr-340 mt-10">
          <Image src={poup1} alt="Thank you illustration" />
        </div>
        <div className="max-w-[1440px] max-h-[837px]  left-[522px]  flex flex-col justify-center items-center">
          <h1 className={`text-[90px] ${firaSans.className} font-[600]`}>
            Cảm ơn quý khách
          </h1>
          <p className={`text-[25px] ${firaSans.className} font-[400]`}>
            Chúng tôi sẽ liên hệ quý khách trong thời gian sớm nhất.
          </p>
          <p
            className={`${firaSans.className} text-[20px] font-[400] text-[#464646]`}
          >
            Nếu cần gấp có thể liên hệ qua số hotline:{" "}
            <span className="text-[#ec500d]">0908 209 694</span>{" "}
          </p>
          <a
            href="/home"
            className={`w-[208px] h-[54px] rounded-[48px] text-[#ffff] bg-[#ec500d]  flex items-center justify-center ${firaSans.className} font-[600] text-[18px] mt-5`}
          >
            Quay lại Trang chủ
          </a>
        </div>
        <div className=" ml-[1350px] ">
          <Image src={poup2} alt="Thank you illustration" />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
