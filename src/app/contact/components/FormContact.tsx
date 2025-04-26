"use client";

import { getMessageError } from "@/app/helpers/utils";
import { FeedbackApi } from "@/app/services/feedback-api";
import { Fira_Sans } from "next/font/google";
import { useState } from "react";
import { toast } from "react-toastify";
import { Alert, Button, Spinner } from "reactstrap";
const firaSans = Fira_Sans({ subsets: ["latin"], weight: ["400", "600"] });
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
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 w-full max-w-xl mx-auto"
    >
      {error && <Alert color="danger">{error}</Alert>}

      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          name="lastName"
          placeholder="Họ"
          required
          className={`flex-1 h-12  rounded-full px-5 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 ${firaSans.className} `}
          disabled={loading}
        />
        <input
          type="text"
          name="firstName"
          placeholder="Tên"
          required
          className={`flex-1 h-12 rounded-full px-5 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 ${firaSans.className}`}
          disabled={loading}
        />
      </div>

      <input
        type="tel"
        name="phone"
        placeholder="Số điện thoại"
        required
        className={`h-12 rounded-full px-5 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 ${firaSans.className}`}
        disabled={loading}
      />

      <textarea
        name="content"
        placeholder="Nội dung"
        required
        className={`h-36 rounded-2xl px-5 py-3 bg-gray-200 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400 ${firaSans.className}`}
        disabled={loading}
      ></textarea>

      <div className="text-center">
        {loading ? (
          <Spinner />
        ) : (
          <Button
            type="submit"
            color="primary"
            className={`w-40 h-12 text-white ${firaSans.className} font-[600] rounded-full bg-[#ec500d] hover:bg-[#d64600] transition duration-300`}
          >
            Gửi yêu cầu
          </Button>
        )}
      </div>
    </form>
  );
}
