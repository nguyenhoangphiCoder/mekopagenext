"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { PostApi } from "../services";
import Image from "next/image";
import Nav from "@/app/home/components/Header";
import { usePosts, useSetting } from "../helpers/hooks";
import { formatMoney } from "../helpers/utils";
import Footer from "@/app/home/components/Footer";
import ProductBenefits from "@/components/ProductBenefits";
import ConsultationRequest from "@/components/ConsultationRequest";
import RelatedProducts from "@/components/RelatedProducts";
import ProductDescriptionDetail from "@/components/ProductDescriptionDetail";
export default function ProductDetailPage() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");
  const post = usePosts({ type: "1" });
  const posts = post.posts || [];
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [mainImage, setMainImage] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const {
    settings,
  }: { settings: any; loading: boolean; error: { message?: string } | null } =
    useSetting();
  useEffect(() => {
    if (slug) {
      PostApi.getPostById(slug)
        .then((data: any) => {
          setProduct(data);
          setMainImage(data.image);
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
      <ProductDescriptionDetail product={product} mainImage={mainImage} />
      <ProductBenefits />
      <ConsultationRequest />
      <RelatedProducts />
      <Footer />
    </div>
  );
}
