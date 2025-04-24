"use client";
import InformationCompany from "@/app/contact/components/InformationCompany";
import { useSetting } from "@/app/helpers/hooks";
import { getMessageError } from "@/app/helpers/utils";
import { FeedbackApi } from "@/app/services/feedback-api";
import { useState } from "react";
import { toast } from "react-toastify";
import InforCompany from "./inforCompany";

export default function ConsultationRequest() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const {
    settings,
  }: {
    settings: any;
    loading: boolean;
    error: { message: string } | null | undefined;
  } = useSetting();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const form = e.target;

    const data = {
      type: "Liên hệ",
      name: form["lastName"].value + " " + form["firstName"].value,
      phone: form["phone"].value,
      email: "",
      address: "",
      content: form["content"].value,
    };

    setLoading(true);
    setError(null);

    try {
      await FeedbackApi.createFeedback(data);
      setLoading(false);
      form.reset();
      toast.success("Yêu cầu đã được ghi nhận");
    } catch (err) {
      setLoading(false);
      setError(getMessageError(err));
    }
  };

  return (
    <div className="flex justify-center items-center mt-[-150px] h-[660px] gap-[24px] flex-row mx-auto">
      <div className="bg-[#fafafa] h-[511px] w-[1280px]  flex flex-col rounded-[10px] items-center justify-center">
        <div className="flex h-[511px] w-[950px] justify-center gap-10 items-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col  justify-center h-[411px] w-[850px]"
          >
            <h2 className="font-fira-sans text-[35px] text-[#00428c] font-[600]">
              Yêu cầu tư vấn
            </h2>
            <div className="w-[1180px] h-[341px] mt-5">
              <div className="flex flex-row gap-5">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Họ"
                  required
                  className="w-[403px] h-[53px] font-fira-sans font-[500] rounded-[51px] p-5 bg-white"
                />
                <input
                  type="text"
                  name="firstName"
                  placeholder="Tên"
                  required
                  className="w-[403px] h-[53px] font-fira-sans rounded-[51px] font-[500]  p-5 bg-white"
                />
              </div>
              <input
                type="text"
                name="phone"
                placeholder="Số điện thoại"
                required
                className="w-[828px] h-[53px] rounded-[51px] font-[500]  font-fira-sans bg-white pl-5 mt-5"
              />
              <input
                type="text"
                name="content"
                placeholder="Nội dung"
                className="w-[828px]  h-[113px] font-fira-sans rounded-[20px] font-[500]  bg-white pl-5 mt-5 pb-15"
              />
            </div>
            {error && <p className="text-red-500  font-fira-sans">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-[133px] h-[40px] font-[600]  text-white font-barlow rounded-[51px] bg-[#ec500d]  text-[16px]"
            >
              {loading ? "Đang gửi..." : "Gửi"}
            </button>
          </form>
        </div>
      </div>
      <InforCompany settings={settings} />
    </div>
  );
}
