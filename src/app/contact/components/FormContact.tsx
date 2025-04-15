"use client";

import { getMessageError } from "@/app/helpers/utils";
import { FeedbackApi } from "@/app/services/feedback-api";
import { useState } from "react";

import { toast } from "react-toastify";
import { Alert, Button, Spinner } from "reactstrap"; // Replace with the correct library or file path if different

export default function FormContact() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const form = e.target;

    const data = {
      type: "Liên hệ",
      name: form["lastName"].value + " " + form["firstName"].value,
      phone: form["phone"].value,
      email: "", // Bạn có thể thêm input email nếu cần
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
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {error && <Alert color="danger">{error}</Alert>}

      <input
        type="text"
        name="lastName"
        placeholder="Họ"
        required
        className="w-[568px] h-[53px] font-fira-sans rounded-[51px] p-5 bg-gray-300"
        disabled={loading}
      />
      <input
        type="text"
        name="firstName"
        placeholder="Tên"
        required
        className="w-[568px] h-[53px] font-fira-sans rounded-[51px] p-5 bg-gray-300"
        disabled={loading}
      />
      <input
        type="tel"
        name="phone"
        placeholder="Số điện thoại"
        required
        className="w-[568px] h-[53px] font-fira-sans rounded-[51px] p-5 bg-gray-300"
        disabled={loading}
      />
      <div className="flex flex-col w-[568px]">
        <textarea
          name="content"
          placeholder="Nội dung"
          required
          className="h-[150px] rounded-[20px] font-fira-sans p-5 bg-gray-300 resize-none"
          disabled={loading}
        ></textarea>
      </div>
      <div className="text-center">
        {loading ? (
          <Spinner />
        ) : (
          <Button
            type="submit"
            color="primary"
            className="w-[133px] mr-300 h-[50px] text-white font-barlow rounded-[51px] bg-[#ec500d] mt-5 text-[16px]"
          >
            {"Gửi yêu cầu"}
          </Button>
        )}
      </div>
    </form>
  );
}
