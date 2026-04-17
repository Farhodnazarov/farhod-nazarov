"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { RiTelegramLine } from "react-icons/ri";
import { AiOutlineLinkedin, AiOutlineFacebook } from "react-icons/ai";

export default function ContactLink() {
  const { t } = useTranslation();

  return (
    <div className="flex w-full flex-col items-start justify-between gap-6 lg:w-[50%] lg:items-start">
      {/* Title */}
      <motion.div
        initial={{ x: -250, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className="text-center lg:text-left"
      >
        <h2 className="font-serif text-2xl leading-tight font-semibold sm:text-3xl lg:text-5xl">
          {t("contactTitle")}
        </h2>

        <h3 className="mt-3 text-sm text-gray-500 sm:text-base lg:text-xl">
          {t("contactText")}
        </h3>
      </motion.div>

      {/* Social Links */}
      <div className="flex w-full justify-center">
        <motion.ul
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          viewport={{ once: false }}
          className="flex items-center gap-4 sm:gap-6"
        >
          <li>
            <Link
              href="https://www.instagram.com/farkhodnazarov_?igsh=ZnhiYnN4NXBhajVv&utm_source=qr"
              className="text-2xl transition duration-300 hover:scale-110 hover:text-blue-500 sm:text-3xl lg:text-5xl"
              target="_blank"
            >
              <FaInstagram />
            </Link>
          </li>

          <li>
            <Link
              href="https://t.me/farhodweb"
              className="text-2xl transition duration-300 hover:scale-110 hover:text-blue-500 sm:text-3xl lg:text-5xl"
              target="_blank"
            >
              <RiTelegramLine />
            </Link>
          </li>

          <li>
            <Link
              href="https://github.com/Farhodnazarov"
              className="text-2xl transition duration-300 hover:scale-110 hover:text-blue-500 sm:text-3xl lg:text-5xl"
              target="_blank"
            >
              <FaGithub />
            </Link>
          </li>

          <li>
            <Link
              href="https://www.linkedin.com/in/farhod-nazarov-334510326/"
              className="text-2xl transition duration-300 hover:scale-110 hover:text-blue-500 sm:text-3xl lg:text-5xl"
              target="_blank"
            >
              <AiOutlineLinkedin />
            </Link>
          </li>
        </motion.ul>
      </div>
    </div>
  );
}
