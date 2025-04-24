import Image from "next/image";
import bgContact from "../../../../public/img/bgContact.png";
import { Barlow, Fira_Sans, Inter, Lora, Roboto } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const barlow = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
});

export default function Contact() {
  return (
    <div className="flex h-[413px] mx-auto   justify-center mt-[50px] items-center flex-col w-full  ">
      <div className="flex flex-col justify-center items-center h-[156px] gap-3 relative w-[526px]">
        <h3
          className={`${firaSans.className} font-[500] text-[40px] text-[#00428c]`}
        >
          897-876-987-90
        </h3>
        <p
          className={`text-[17px] ${roboto.className} font-[400] text-[#464646] text-center`}
        >
          We understand the importance of approaching each work integrally and
          believe in the power of simple and easy communication.
        </p>
        <a
          href="contact"
          className={`w-[133px] flex justify-center items-center ${barlow.className} font-[600] h-[36px] text-[14px] mt-50 text-center text-[#fff] bg-[#ec500d] hover:bg-[#d7440a] absolute transition rounded-[51px]`}
        >
          Liên Hệ
        </a>
      </div>
      <div className="flex justify-between items-center  h-[390px] mt-[-50px]   mx-auto bg-[#fbfbfb]">
        <div className="w-1/2 overflow-hidden pr-2">
          <Image
            src={bgContact}
            alt="left"
            className="w-[100%] h-[600px] object-cover object-right"
          />
        </div>
        <div className="w-1/2 overflow-hidden  ">
          <Image
            src={bgContact}
            alt="left"
            className="w-[100%] h-[600px] object-cover object-left"
          />
        </div>
      </div>
    </div>
  );
}
