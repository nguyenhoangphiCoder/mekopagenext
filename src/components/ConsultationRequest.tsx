"use client";
import { getMessageError } from "@/app/helpers/utils";
import { FeedbackApi } from "@/app/services/feedback-api";
import { useState } from "react";
import { toast } from "react-toastify";

export default function ConsultationRequest() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
    <div className="flex justify-center items-center mt-[-150px] h-[660px] bg-[#f1f1f1] mx-auto">
      <div className="flex h-[511px] w-[1280px] justify-center gap-10 items-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col h-[411px] w-[1180px]"
        >
          <h2 className="font-fira-sans text-[35px] text-[#00428c]">
            Yêu cầu tư vấn
          </h2>
          <div className="w-[1180px] h-[341px] mt-5">
            <div className="flex flex-row gap-5">
              <input
                type="text"
                name="lastName"
                placeholder="Họ"
                required
                className="w-[568px] h-[53px] font-fira-sans rounded-[51px] p-5 bg-white"
              />
              <input
                type="text"
                name="firstName"
                placeholder="Tên"
                required
                className="w-[568px] h-[53px] font-fira-sans rounded-[51px] p-5 bg-white"
              />
            </div>
            <input
              type="text"
              name="phone"
              placeholder="Số điện thoại"
              required
              className="w-full h-[53px] rounded-[51px] font-fira-sans bg-white pl-5 mt-5"
            />
            <input
              type="text"
              name="content"
              placeholder="Nội dung"
              className="w-full h-[113px] font-fira-sans rounded-[20px] bg-white pl-5 mt-5 pb-15"
            />
            {error && (
              <p className="text-red-500 mt-2 font-fira-sans">{error}</p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-[133px] h-[40px] text-white font-barlow rounded-[51px] bg-[#ec500d] mt-5 text-[16px]"
            >
              {loading ? "Đang gửi..." : "Gửi"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
