"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useRef } from "react";

export default function About() {
  const { t } = useTranslation();
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cardRef.current.style.setProperty("--x", `${x}px`);
    cardRef.current.style.setProperty("--y", `${y}px`);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ x: -250, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="group relative mx-4 my-6 flex w-full cursor-pointer flex-col items-center justify-center gap-6 overflow-hidden rounded-2xl border border-white/30 bg-[#1D1928] p-6 sm:mx-6 sm:p-8 lg:mx-0 lg:ml-4 lg:h-[400px] lg:w-[70%] lg:flex-row lg:gap-10 lg:p-10"
    >
      {/* 🔥 GREEN BORD */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(300px circle at var(--x) var(--y), rgba(66,245,84,1), transparent 50%)`,
          padding: "1px",
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {/* ✨ CURSOR LIGHT */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(220px circle at var(--x) var(--y), rgba(66, 245, 224,0.3), transparent 20%)`,
        }}
      />

      <motion.img
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        src="./me.jpg"
        alt="Photo"
        className="w-40 rounded-[30px] shadow-[4px_4px_50px_7px_rgba(255,255,255,0.2)] sm:w-56 md:w-64 lg:w-80 lg:rounded-[40px]"
      />

      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="mb-3 font-serif text-3xl font-semibold">{t("About")}</p>

        <p className="text-center !text-[12px] leading-4 md:text-base md:leading-[19px] lg:text-left">
          {t("AboutMe")}
        </p>
      </motion.div>
    </motion.div>
  );
}
