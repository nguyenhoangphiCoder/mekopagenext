import Image from "next/image";
import bgContact from "../../public/img/bgContact.png";
export default function Contact() {
  return (

    <div className="flex h-[413px] mx-auto  justify-center mt-[-50px] items-center flex-col w-full  ">
      <div className="flex flex-col justify-center items-center h-[156px] gap-3 relative w-[526px]">
        <h3 className="font-fira-sans text-[40px] text-[#00428c]">
          897-876-987-90
        </h3>
        <p className="text-[17px] font-roboto text-[#464646] text-center ">
          We understand the importance of approaching each work integrally and
          believe in the power of simple and easy communication.
        </p>
        <a
          href="contact"
          className="w-[133px] flex justify-center items-center font-barlow h-[36px] text-[14px] mt-50 text-center text-[#fff] bg-[#ec500d] hover:bg-[#d7440a] absolute transition rounded-[51px]"
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
