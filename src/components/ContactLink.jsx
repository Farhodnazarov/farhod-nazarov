"use client";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function ContactLink() {
  const { t } = useTranslation();
  return (
    <div className="w-full lg:w-[50%]">
      <motion.div
        initial={{ x: -250, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        <h2 className="font-serif text-3xl leading-tight font-semibold sm:text-4xl lg:text-5xl">
          {t("contactTitle")}
        </h2>
        <h3 className="mt-3 text-base font-normal text-gray-500 sm:text-lg lg:text-xl">
          {t("contactText")}
        </h3>
      </motion.div>
      <div></div>
    </div>
  );
}
