"use client";

import { useSetting } from "@/app/helpers/hooks";
import ConsultationRequest from "@/components/ConsultationRequest";
import Contact from "@/components/Contact";
import Nav from "@/components/Header";
import React from "react";
import FormContact from "./components/FormContact";
import Footer from "@/components/Footer";
import InformationCompany from "./components/InformationCompany";

export default function ContactOne() {
  const {
    settings,
    loading,
    error,
  }: { settings: any; loading: boolean; error: { message?: string } | null } =
    useSetting();

  if (loading) return <p>Đang tải...</p>;

  return (
    <div className=" ">
      <Nav />
      <div className="flex flex-col items-center justify-center w-full min-h-screen p-6 bg-white">
        <div className=" text-center">
          <h1 className="text-2xl font-semibold uppercase text-[#00428c]">
            Liên hệ với chúng tôi
          </h1>
          <h2>
            <div className="text-2xl font-semibold uppercase text-[#00428c]">
              {settings?.company_name || "Tên công ty"}
            </div>
          </h2>
        </div>
        <div className="flex flex-row mt-20 ">
          <div className="flex flex-col h-[411px] w-[600px] ">
            <h2 className="font-fira-sans text-[35px] text-[#00428c]">
              Yêu cầu tư vấn
            </h2>
            <FormContact />
            <div className="w-[1180px] h-[341] mt-6 ">
              <button className="w-[133px] h-[40px] text-white font-barlow rounded-[51px] bg-[#ec500d] mt-5 text-[16px]">
                Gửi
              </button>
            </div>
          </div>
          <InformationCompany settings={settings} />
        </div>
        <div className="m-10"></div>
        <Footer />
      </div>
    </div>
  );
}
