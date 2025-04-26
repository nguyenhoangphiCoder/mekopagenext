import Image from "next/image";
import { useState } from "react";
import Popup from "./Popup";

export default function ProductDescriptionDetail({
  product,
  mainImage: initialMainImage,
}: any) {
  const [mainImage, setMainImage] = useState(initialMainImage);

  return (
    <div className="p-4 flex flex-row items-center justify-center gap-15 mt-[-60px]">
      <div className="h-[559px] w-[517px] flex items-center justify-center gap-[34px]  mt-25">
        <div className="flex flex-col gap-4">
          <div className="h-[440px] w-[517px] flex items-center justify-center mt-20">
            <Image
              src={mainImage || product.image}
              alt={product.title}
              width={500}
              height={500}
              className="w-[516px] h-[440] max-w-[516.61px] object-cover "
            />
          </div>
          {/* Ảnh phụ */}
          {product.media?.length > 0 && (
            <div className="flex gap-4 overflow-x-auto h-[85px] w-[517px] mt-5 justify-between">
              {product.media.map((img: string, index: number) => (
                <div
                  key={index}
                  onClick={() => setMainImage(img)}
                  className={`w-[85px] h-[85px] flex-shrink-0 cursor-pointer rounded-md transition border-2
      ${mainImage === img ? "border-[#ec500d]" : "border-transparent"}
      hover:border-[#ec500d] hover:bg-amber-100`}
                >
                  <Image
                    src={img}
                    alt={`${product.title} - ảnh phụ ${index}`}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col justify-center h-[500px] gap-5 mt-15 w-[700px]  ">
        <h1 className="text-[40px] font-fira-sans font-[700] text-[#00428c]">
          {product.title}
        </h1>
        <p className="text-[20px] font-barlow font-[400] text-[#383838]">
          {product.description}
        </p>
        <ul className="w-[573px] h-[120px] space-y-2 mb-5">
          <li className="font-barlow  font-[600] text-[20px]">
            {product.title}
          </li>
          <li className="flex">
            <p className="font-barlow text-[20px]  font-[600]">Giá:</p>
            <span className="pl-1 text-[20px] font-barlow font-[400]">
              {product.product?.price || "Liên hệ"}
            </span>
          </li>
          <li className="flex">
            <p className="font-barlow text-[20px]  font-[600]">Code:</p>
            <span className="pl-1 text-[20px] font-barlow font-[400]">
              {product.product?.code || "Không có"}
            </span>
          </li>
          <li className="flex">
            <p className="font-barlow text-[20px]  font-[600]">Trạng thái:</p>
            <span className="pl-1 text-[20px] font-[400] font-barlow">
              {product.status || "Chưa cập nhật"}
            </span>
          </li>
        </ul>
        <Popup />
      </div>
    </div>
  );
}
