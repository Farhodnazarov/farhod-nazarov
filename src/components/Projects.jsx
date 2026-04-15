"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();
  const projects = [
    {
      name: "Tip Calculator",
      description: "tipCalculator",
      image: "/tip-caculator.png",
      vercelLink: "https://calculator-of-tip.vercel.app/",
    },
    {
      name: "Devfinder",
      description: "devfinder",
      image: "/devfinder.png",
      vercelLink: "https://devfinder-pink-pi.vercel.app/",
    },
    {
      name: "Furniture",
      description: "furniture",
      image: "furnitures.png",
      vercelLink: "https://furniture-five-ashy.vercel.app/",
    },
    {
      name: "Quiz",
      description: "quiz",
      image: "/queiz.png",
      vercelLink: "https://farhod-s-quiz.vercel.app/",
    },
    {
      name: "My Kitchen",
      description: "myKitchen",
      image: "/my-kitchen.png",
      vercelLink: "https://my-kitchen-five.vercel.app/",
    },
    {
      name: "Random User",
      description: "randomUser",
      image: "/random-user.png",
      vercelLink: "https://random-user-ashen-chi.vercel.app/",
    },
    {
      name: "Trand Solution",
      description: "trandSolution",
      image: "/trand-solution.png",
      vercelLink: "https://trend-solution-chi.vercel.app",
    },
    {
      name: "My Todo App",
      description: "myTodoApp",
      image: "/my-todo.png",
      vercelLink: "https://my-todo-list-iota-black.vercel.app",
    },
  ];

  return (
    <motion.div
      id="projects"
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 1 }}
      className="container mx-auto w-full bg-black py-16 text-white"
    >
      {/* Title */}
      <h2 className="mb-10 ml-20 font-serif text-4xl lg:text-6xl">Projects</h2>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 40,
          stretch: 0,
          depth: 120,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="w-full"
      >
        {projects.map((project, index) => (
          <SwiperSlide
            key={index}
            className="!w-[260px] sm:!w-[280px] md:!w-[300px]"
          >
            <div className="flex h-full min-h-[360px] flex-col overflow-hidden rounded-xl border border-white/20 bg-zinc-900 shadow-lg">
              {/* Image */}
              <img
                src={project.image}
                alt={project.name}
                className="w-full object-cover"
              />

              {/* Content */}
              <div className="flex flex-1 flex-col p-4">
                <h3 className="text-lg font-bold">{project.name}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-gray-400">
                  {project.description == "tipCalculator"
                    ? t("tipCalculator")
                    : project.description == "devfinder"
                      ? t("devfinder")
                      : project.description == "furniture"
                        ? t("furniture")
                        : project.description == "quiz"
                          ? t("quiz")
                          : project.description == "myKitchen"
                            ? t("myKitchen")
                            : project.description == "randomUser"
                              ? t("randomUser")
                              : project.description == "trandSolution"
                                ? t("trandSolution")
                                : project.description == "myTodoApp"
                                  ? t("myTodoApp")
                                  : ""}
                </p>

                {/* Buttons */}
                <div className="mt-auto flex gap-3 pt-4">
                  <a
                    href={project.vercelLink}
                    target="_blank"
                    className="rounded-md bg-white px-3 py-1 text-sm text-black hover:opacity-80"
                  >
                    Live
                  </a>

                  <button className="cursor-pointer rounded-md border border-white px-3 py-1 text-sm transition hover:bg-white hover:text-black">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}
