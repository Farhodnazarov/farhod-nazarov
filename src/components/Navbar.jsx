"use client";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import LanguageSelect from "./LanguageSelect";
import { motion } from "framer-motion";

export default function Navbar() {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const languages = [
    { label: "English", code: "en" },
    { label: "Russia", code: "ru" },
    { label: "Uzbek", code: "uz" },
  ];

  // 🌍 Language init
  useEffect(() => {
    setMounted(true);

    const savedLang = localStorage.getItem("lang");
    if (savedLang) {
      i18n.changeLanguage(savedLang);
      setCurrentLang(savedLang);
    }
  }, []);

  // 👇 Navbar hide/show
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleChange = (item) => {
    i18n.changeLanguage(item.code);
    localStorage.setItem("lang", item.code);
    setCurrentLang(item.code);
    setOpen(false);
  };

  if (!mounted) return null;

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: show ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-xl"
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-2 sm:px-6 lg:px-14">
        {/* LOGO */}
        <img className="w-20 sm:w-24" src="./dark-mode-fn.png" />

        {/* LANGUAGE */}
        <LanguageSelect
          open={open}
          setOpen={setOpen}
          languages={languages}
          currentLang={currentLang}
          handleChange={handleChange}
        />
      </div>
    </motion.div>
  );
}
