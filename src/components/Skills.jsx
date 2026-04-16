"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function Skills() {
  const { t } = useTranslation();
  const cardRef = useRef(null);

  const mySkills = [
    { name: "React", img: "/react.jpg", link: "https://react.dev/" },
    { name: "Next.js", img: "/imgNext.png", link: "https://nextjs.org/" },
    {
      name: "Tailwind",
      img: "/tailwind.png",
      link: "https://tailwindcss.com/",
    },
    {
      name: "JavaScript",
      img: "/js.png",
      link: "https://www.youtube.com/watch?v=zJuDsji3IbE&list=PLNS3PujVHR-ay0HpqbsPWccgEhJZk6K9u",
    },
    {
      name: "TypeScript",
      img: "/ts.png",
      link: "https://www.typescriptlang.org/",
    },
    { name: "Node.js", img: "/node.png", link: "https://nodejs.org/en" },
    { name: "Git", img: "/git.svg", link: "https://git-scm.com/" },
    { name: "GitHub", img: "/gitHub.png", link: "https://github.com" },
  ];

  const handleMouseMove = (e) => {
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
      initial={{ x: 250, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="group relative mx-4 my-6 w-full cursor-pointer overflow-hidden rounded-2xl border border-white/30 bg-[#1D1928] p-5 sm:mx-6 lg:mr-4 lg:ml-0 lg:h-[450px] lg:w-[30%]"
    >
      {/* GREEN BORDER */}
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

      {/* GREEN CURSOR LIGHT */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(220px circle at var(--x) var(--y), rgba(66, 245, 224,0.3), transparent 20%)`,
        }}
      />

      <p className="mb-3 font-serif text-4xl font-semibold">{t("Skills")}</p>

      <motion.ul
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="lg:scrollbar-hide flex flex-wrap gap-2 lg:h-80 lg:flex-col lg:flex-nowrap lg:overflow-y-scroll"
      >
        {mySkills.map((skill, i) => (
          <li key={i} className="min-w-[45%] flex-1 lg:w-full lg:min-w-0">
            <Link
              target="_blank"
              href={skill.link}
              className="flex w-full flex-row items-center gap-3 rounded-xl bg-white/5 px-4 py-3 backdrop-blur-md transition hover:bg-white/10"
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="h-8 w-8 object-contain"
              />
              <p className="text-sm font-medium whitespace-nowrap">
                {skill.name}
              </p>
            </Link>
          </li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
