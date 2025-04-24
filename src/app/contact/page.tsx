"use client";

import { useSetting } from "@/app/helpers/hooks";
import Nav from "@/app/home/components/Header";
import Footer from "@/app/home/components/Footer";
import FormContact from "./components/FormContact";
import InformationCompany from "./components/InformationCompany";

export default function ContactOne() {
  const {
    settings,
    loading,
    error,
  }: {
    settings: any;
    loading: boolean;
    error: { message: string } | null | undefined;
  } = useSetting();

  if (loading) return <p className="text-center mt-10"></p>;

  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-50">
        <Nav />
      </div>

      <div className="bg-white py-12 px-4 min-h-screen mt-20">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold uppercase text-[#00428c] mb-2">
            Liên hệ với chúng tôi
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold uppercase text-[#00428c]">
            {settings?.company_name || "Tên công ty"}
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-start gap-10 max-w-6xl mx-auto">
          <div className="flex-1">
            <h2 className="text-[28px] font-semibold text-[#00428c] mb-6">
              Yêu cầu tư vấn
            </h2>
            <FormContact />
          </div>

          <div className="flex-1">
            <InformationCompany settings={settings} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
