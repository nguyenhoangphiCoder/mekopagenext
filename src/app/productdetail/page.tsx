"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { PostApi } from "../services";
import Image from "next/image";
import Nav from "@/app/home/components/Header";
import { useSetting } from "../helpers/hooks";
import { formatMoney } from "../helpers/utils";
import Footer from "@/app/home/components/Footer";
import ProductBenefits from "@/components/ProductBenefits";
import ConsultationRequest from "@/components/ConsultationRequest";
import RelatedProducts from "@/components/RelatedProducts";
export default function ProductDetailPage() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");

  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const {
    settings,
  }: { settings: any; loading: boolean; error: { message?: string } | null } =
    useSetting();
  useEffect(() => {
    if (slug) {
      PostApi.getPostById(slug)
        .then((data) => {
          setProduct(data);
          setLoading(false);
        })
        .catch((err) => {
          setError("Không thể tải dữ liệu sản phẩm.");
          setLoading(false);
        });
    } else {
      setError("Không tìm thấy slug sản phẩm trong URL.");
      setLoading(false);
    }
  }, [slug]);

  if (loading) {
    return <div></div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-50">
        <Nav />
      </div>
      <div className="p-4 flex flex-row items-center justify-center gap-30 mt-10">
        <div className="h-[500px] w-[500px] flex items-center justify-center  mb-4">
          <Image
            src={product.image}
            alt={product.title}
            width={500}
            height={500}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="flex flex-col justify-center h-[500px] gap-3  w-[700px] ">
          <h1 className="text-[40px] font-fira-sans font-[600] text-[#00428c]">
            {product.title}
          </h1>
          <p className="text-[16px] font-barlow text-[#383838]">
            {product.description}
          </p>
          <ul className="w-[573px] h-[120px] space-y-2">
            <li className="font-fira-sans  font-[500] text-[16px]">
              {product.slug}
            </li>
            <li className="flex">
              <p className="font-fira-sans text-[16px]  font-[500]">Giá:</p>
              <span className="pl-1 text-[16px] font-barlow">
                {product.product?.price || "Liên hệ"}
              </span>
            </li>
            <li className="flex">
              <p className="font-fira-sans text-[16px]  font-[500]">Code:</p>
              <span className="pl-1 text-[16px] font-barlow">
                {product.product?.code || "Không có"}
              </span>
            </li>
            <li className="flex">
              <p className="font-fira-sans text-[16px]  font-[500]">
                Trạng thái:
              </p>
              <span className="pl-1 text-[16px] font-barlow">
                {product.status || "Chưa cập nhật"}
              </span>
            </li>
          </ul>
          <button className="w-[133px] h-[40px] text-white font-barlow rounded-[51px] bg-[#ec500d] mt-5 text-[16px]">
            Yêu cầu tư vấn
          </button>
        </div>
      </div>
      <ProductBenefits />
      <ConsultationRequest />
      <RelatedProducts />

      <Footer />
    </div>
  );
}
