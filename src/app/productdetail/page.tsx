"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { PostApi } from "../services";
import Image from "next/image";
import Nav from "@/components/Header";
import { useSetting } from "../helpers/hooks";
import { formatMoney } from "../helpers/utils";
import Footer from "@/components/Footer";
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
    return <div>Đang tải dữ liệu sản phẩm...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div>
      <Nav />
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
          <h2 className="text-5xl font-bold mb-2 ">{product.title}</h2>
          <p className="text-gray-700 text-xl ">{product.description}</p>
          <p className="text-gray-700 text-xl ">
            Hot Line : {settings?.company_phone}
          </p>
          <p className="text-gray-700 text-xl ">
            Giá : {formatMoney(product.product.price)}
          </p>
          <button className="w-[133px] h-[40px] text-white font-barlow rounded-[51px] bg-[#ec500d] mt-5 text-[16px]">
            Yêu cầu tư vấn
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
