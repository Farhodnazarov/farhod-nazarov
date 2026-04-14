"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function NavbarBurger({
  open,
  setOpen,
  languages,
  currentLang,
  handleChange,
  isMenuOpen,
  setIsMenuOpen,
}) {
  const [active, setActive] = useState("Home");
  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];
  const { t } = useTranslation();
  return (
    <div>
      {/* Overlay */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/50"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-64 transform bg-black transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-5">
          <button onClick={() => setIsMenuOpen(false)}>✕</button>
        </div>

        <ul className="flex flex-col gap-6 px-6">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                onClick={() => {
                  setActive(item);
                  setIsMenuOpen(false);
                }}
                className={
                  active === item ? "font-semibold text-blue-300 underline" : ""
                }
                href={`#${item.toLowerCase()}`}
              >
                {t(item)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Language inside sidebar */}
        {/* <div className="mt-10 px-6">
          <div
            onClick={() => setOpen(!open)}
            className="cursor-pointer rounded-xl border border-white/50 bg-black px-6 py-2"
          >
            {languages.find((l) => l.code === currentLang)?.label}
          </div>

          {open && (
            <ul className="mt-2 rounded-xl border border-white/50 bg-black">
              {languages.map((item) => (
                <li
                  key={item.code}
                  onClick={() => handleChange(item)}
                  className="cursor-pointer px-5 py-3 hover:bg-white/20"
                >
                  {item.label}
                </li>
              ))}
            </ul>
          )}
        </div> */}
      </div>
    </div>
  );
}
