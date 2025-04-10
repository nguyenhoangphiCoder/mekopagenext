import ic1 from "../../public/img/ic1.png";
import if2 from "../../public/img/if2 (2).png";
import if3 from "../../public/img/if3.png";
import if4 from "../../public/img/if4.png";
import FeatureFooter from "./Featurefooter";

export default function Feature() {
  return (
    // <div className="flex relative justify-center items-center  mx-auto flex-col  overflow-hidden bg-[#fbfbfb] mt-20 h-[660px]">
    //   <div className="flex w-[1440px] h-[299px] gap-20">
    //     <div className="h-[167px] w-[350px] flex justify-center items-center flex-col">
    //       <div className=" flex justify-center items-center ">
    //         <img src={ic1.src} alt="/" className="h-[80px] w-[90px] " />
    //       </div>
    //       <h3 className="text-[18px] text-[#00428c] font-barlow mt-3 ">
    //         Nguyên Liệu Tự Nhiên{" "}
    //       </h3>
    //       <p className=" text-[16px] text-center font-barlow">
    //         Choose from select produce to start. Keep, add, or remove items.
    //       </p>
    //     </div>
    //     <div className="h-[167px] w-[350px] flex justify-center items-center flex-col mb-3">
    //       <img src={if2.src} alt="/" className="h-[80px] w-[80px] " />

    //       <h3 className="text-[18px] text-[#00428c] font-barlow pt-3.5">
    //         Quy Trình Tự Động
    //       </h3>
    //       <p className=" text-[16px] text-center font-barlow">
    //         Add in your grocery staples, snacks, and other favorite pantry items
    //         every week.
    //       </p>
    //     </div>
    //     <div className="h-[167px] w-[350px] flex justify-center items-center flex-col mb-3">
    //       <img src={if3.src} alt="/" className="h-[80px] w-[80px] " />

    //       <h3 className="text-[18px] text-[#00428c]  font-barlow pt-3.5">
    //         Sản Phẩm An Toàn
    //       </h3>
    //       <p className=" text-[16px] text-center font-barlow">
    //         Save yourself a trip to the store and enjoy tasty meals – how
    //         delicious is that?
    //       </p>
    //     </div>
    //     <div className="h-[167px] w-[350px] flex justify-center items-center flex-col mb-3">
    //       <img src={if4.src} alt="/" className="h-[80px] w-[85px] " />

    //       <h3 className="text-[18px] text-[#00428c] font-barlow pt-3.5">
    //         Chất Lượng Tôt Nhất
    //       </h3>
    //       <p className=" text-[16px] text-center font-barlow">
    //         Save yourself a trip to the store and enjoy tasty meals – how
    //         delicious is that?
    //       </p>
    //     </div>
    //   </div>
    //   <FeatureFooter />
    // </div>
    <div className="flex relative justify-center items-center  mx-auto flex-col  overflow-hidden bg-[#fbfbfb]  h-[660px]">
      <div className="flex w-[1440px] h-[299px] gap-20">
        <div className="h-[167px] w-[350px] flex justify-center items-center flex-col">
          <div className=" flex justify-center items-center ">
            <img src={ic1.src} alt="/" className="h-[80px] w-[90px] " />
          </div>
          <h3 className="text-[18px] text-[#00428c] font-barlow mt-3 ">
            Nguyên Liệu Tự Nhiên{" "}
          </h3>
          <p className=" text-[16px] text-center font-barlow">
            Choose from select produce to start. Keep, add, or remove items.
          </p>
        </div>
        <div className="h-[167px] w-[350px] flex justify-center items-center flex-col mb-3">
          <img src={if2.src} alt="/" className="h-[80px] w-[80px] " />

          <h3 className="text-[18px] text-[#00428c] font-barlow pt-3.5">
            Quy Trình Tự Động
          </h3>
          <p className=" text-[16px] text-center font-barlow">
            Add in your grocery staples, snacks, and other favorite pantry items
            every week.
          </p>
        </div>
        <div className="h-[167px] w-[350px] flex justify-center items-center flex-col mb-3">
          <img src={if3.src} alt="/" className="h-[80px] w-[80px] " />

          <h3 className="text-[18px] text-[#00428c]  font-barlow pt-3.5">
            Sản Phẩm An Toàn
          </h3>
          <p className=" text-[16px] text-center font-barlow">
            Save yourself a trip to the store and enjoy tasty meals – how
            delicious is that?
          </p>
        </div>
        <div className="h-[167px] w-[350px] flex justify-center items-center flex-col mb-3">
          <img src={if4.src} alt="/" className="h-[80px] w-[85px] " />

          <h3 className="text-[18px] text-[#00428c] font-barlow pt-3.5">
            Chất Lượng Tôt Nhất
          </h3>
          <p className=" text-[16px] text-center font-barlow">
            Save yourself a trip to the store and enjoy tasty meals – how
            delicious is that?
          </p>
        </div>
      </div>
      <FeatureFooter />
    </div>
  );
}
