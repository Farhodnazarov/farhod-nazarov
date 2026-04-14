"use client";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import Link from "next/link";
import LanguageSelect from "./LanguageSelect";
import NavbarBurger from "./NavbarBurger";
import { motion } from "framer-motion";

export default function Navbar() {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");
  const [active, setActive] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const languages = [
    { label: "English", code: "en" },
    { label: "Russia", code: "ru" },
    { label: "Uzbek", code: "uz" },
  ];

  useEffect(() => {
    setMounted(true);

    const savedLang = localStorage.getItem("lang");
    if (savedLang) {
      i18n.changeLanguage(savedLang);
      setCurrentLang(savedLang);
    }
  }, []);

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

  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <>
      {/* NAVBAR */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: show ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-xl"
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-2 sm:px-6 lg:px-14">
          {/* LOGO */}
          <motion.img
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-20 sm:w-24"
            src="./dark-mode-fn.png"
          />

          {/* Desktop menu */}
          <div className="hidden items-center gap-10 lg:flex">
            <ul className="flex items-center gap-6 xl:gap-10">
              {navItems.map((item) => (
                <li key={item}>
                  <Link
                    onClick={() => setActive(item)}
                    className={
                      active === item
                        ? "font-semibold text-blue-300 underline"
                        : "transition hover:text-blue-200"
                    }
                    href={`#${item.toLowerCase()}`}
                  >
                    {t(item)}
                  </Link>
                </li>
              ))}
            </ul>

            <LanguageSelect
              open={open}
              setOpen={setOpen}
              languages={languages}
              currentLang={currentLang}
              handleChange={handleChange}
            />
          </div>

          {/* MOBILE RIGHT SIDE */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* Language (optional mobile) */}
            <LanguageSelect
              open={open}
              setOpen={setOpen}
              languages={languages}
              currentLang={currentLang}
              handleChange={handleChange}
            />

            {/* Burger */}
            <button onClick={() => setIsMenuOpen(true)} className="text-2xl">
              ☰
            </button>
          </div>
        </div>
      </motion.div>

      {/* MOBILE MENU */}
      <NavbarBurger
        open={open}
        setOpen={setOpen}
        languages={languages}
        currentLang={currentLang}
        handleChange={handleChange}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
    </>
  );
}
