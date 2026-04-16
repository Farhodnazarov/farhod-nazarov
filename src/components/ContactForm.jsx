"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";

function ContactForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    userName: "",
    companyName: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const BOT_TOKEN = "8609904626:AAGGjaKL2jvi1QZlvjMQDGc0GLL7Iyd-z1M";
  const CHAT_ID = "1384563291";

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validateForm = () => {
    if (!formData.userName.trim()) {
      toast.error(t("nameValidate"));
      return false;
    }

    if (!formData.companyName.trim()) {
      toast.error(t("companyNameValidate"));
      return false;
    }

    if (!formData.email.trim()) {
      toast.error(t("emailValidate"));
      return false;
    }

    if (!formData.message.trim()) {
      toast.error(t("messageValidate"));
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    const text = `
📩 <b>New Contact Form</b>

👤 <b>Name:</b> ${formData.userName}
🏢 <b>Company:</b> ${formData.companyName}
📧 <b>Email:</b> ${formData.email}

💬 <b>Message:</b>
${formData.message}
`;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: text,
            parse_mode: "HTML",
          }),
        },
      );

      if (!response.ok) throw new Error();

      toast.success("Xabar yuborildi ✅");

      setFormData({
        userName: "",
        companyName: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast.error("Xabar yuborilmadi ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full px-4 sm:px-8 md:px-14 lg:w-[50%]">
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col gap-4 rounded-2xl bg-gray-900 p-4 text-black shadow-xl sm:p-6 md:p-8"
      >
        {/* Name */}
        <div className="flex w-full flex-col items-start gap-2">
          <label className="font-medium text-white">
            {t("contactLabelName")}
          </label>
          <input
            className="text-md w-full rounded-xl bg-gray-800 px-4 py-2 font-semibold text-white placeholder-gray-400 transition-all focus:ring-2 focus:ring-purple-500 focus:outline-none sm:px-5 sm:py-3"
            type="text"
            name="userName"
            autoComplete="none"
            value={formData.userName}
            onChange={handleChange}
            placeholder={t("contactInputName")}
          />
        </div>

        {/* Company Name */}
        <div className="flex w-full flex-col items-start gap-2">
          <label className="font-medium text-white">
            {t("contactLabelCompanyName")}
          </label>
          <input
            className="text-md w-full rounded-xl bg-gray-800 px-4 py-2 font-semibold text-white placeholder-gray-400 transition-all focus:ring-2 focus:ring-purple-500 focus:outline-none sm:px-5 sm:py-3"
            type="text"
            name="companyName"
            autoComplete="none"
            value={formData.companyName}
            onChange={handleChange}
            placeholder={t("contactInputCompanyName")}
          />
        </div>

        {/* Email */}
        <div className="flex w-full flex-col items-start gap-2">
          <label className="font-medium text-white">
            {t("contactLabelEmail")}
          </label>
          <input
            className="text-md w-full rounded-xl bg-gray-800 px-4 py-2 font-semibold text-white placeholder-gray-400 transition-all focus:ring-2 focus:ring-purple-500 focus:outline-none sm:px-5 sm:py-3"
            type="email"
            name="email"
            autoComplete="none"
            value={formData.email}
            onChange={handleChange}
            placeholder={t("contactInputEmail")}
          />
        </div>

        {/* Message */}
        <div className="flex w-full flex-col items-start gap-2">
          <label className="font-medium text-white">
            {t("contactLabelMessage")}
          </label>
          <textarea
            className="text-md w-full resize-none rounded-xl bg-gray-800 px-4 py-2 font-semibold text-white placeholder-gray-400 transition-all focus:ring-2 focus:ring-purple-500 focus:outline-none sm:px-5 sm:py-3"
            name="message"
            autoComplete="none"
            value={formData.message}
            onChange={handleChange}
            placeholder={t("contactInputMessage")}
            rows={5}
          />
        </div>

        {/* Submit Button */}
        <button
          disabled={loading}
          className="ml-auto rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 font-semibold text-white shadow-lg shadow-purple-400/50 transition-transform hover:scale-105 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 sm:px-10 sm:py-3"
        >
          {loading ? t("contactButtonSending") : t("contactButton")}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
