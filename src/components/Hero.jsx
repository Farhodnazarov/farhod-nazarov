"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ scale: 0.7, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false }}
      id="hero"
      className="relative z-10 container mx-auto px-4 sm:px-8 lg:px-14"
    >
      <div className="my-20 flex flex-col items-center justify-center pt-10 text-center lg:mt-48">
        {/* NAME */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="font-serif text-4xl font-medium sm:text-6xl md:text-7xl lg:text-[100px]"
        >
          {t("Name")}
        </motion.h1>

        {/* ROLE */}
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: false }}
          className="mt-2 font-serif text-xl text-blue-200 sm:text-3xl md:text-4xl lg:-mt-2 lg:text-[50px]"
        >
          {t("Role")}
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false }}
          className="mt-4 max-w-xs text-sm sm:max-w-md sm:text-base md:max-w-lg md:text-lg"
        >
          {t("Description")}
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          viewport={{ once: false }}
          className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-5"
        >
          <a
            href="#projects"
            className="cursor-pointer rounded-xl border border-white/30 bg-gradient-to-r from-white/80 via-cyan-400 to-white/80 px-5 py-2 text-sm font-medium text-black shadow-lg shadow-cyan-400/30 backdrop-blur-md transition hover:scale-105 sm:px-6 sm:py-3 sm:text-base"
          >
            {t("ViewProjects")}
          </a>

          <a
            href="#contact"
            className="cursor-pointer rounded-xl border border-white/20 bg-white/5 px-5 py-2 text-sm font-medium text-white backdrop-blur-md transition hover:border-white/40 hover:bg-white/10 sm:px-6 sm:py-3 sm:text-base"
          >
            {t("ContactMe")}
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}
