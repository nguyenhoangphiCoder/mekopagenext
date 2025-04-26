"use client";

import NewInfor from "@/app/new/components/NewInfor";
import { PostApi } from "../services";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useSetting } from "../helpers/hooks";
import Nav from "../home/components/Header";
import Footer from "../home/components/Footer";

export default function NewsDetail() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");

  const [news, setNews] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { settings } = useSetting();

  useEffect(() => {
    if (slug) {
      PostApi.getPostById(slug)
        .then((data) => {
          setNews(data);
        })
        .catch(() => {
          setError("Không thể tải dữ liệu sản phẩm.");
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setError("Không tìm thấy slug sản phẩm trong URL.");
      setLoading(false);
    }
  }, [slug]);

  return (
    <div className="overflow-hidden">
      <div>
        {" "}
        <Nav />
      </div>
      {loading ? (
        <div className="text-center py-10">Đang tải...</div>
      ) : error ? (
        <div className="text-red-500 text-center py-10">{error}</div>
      ) : (
        <NewInfor news={news} />
      )}
      <Footer />
    </div>
  );
}
