"use client";
import { useParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import "@/i18n";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function SingleProject() {
  const { t } = useTranslation();
  const { slug } = useParams();

  const projects = [
    {
      name: "Tip Calculator",
      description: "tipCalculator",
      image: "../tip-caculator.png",
      vercelLink: "https://calculator-of-tip.vercel.app/",
    },
    {
      name: "Devfinder",
      description: "devfinder",
      image: "../devfinder.png",
      vercelLink: "https://devfinder-pink-pi.vercel.app/",
    },
    {
      name: "Furniture",
      description: "furniture",
      image: "../furnitures.png",
      vercelLink: "https://furniture-five-ashy.vercel.app/",
    },
    {
      name: "Quiz",
      description: "quiz",
      image: "../queiz.png",
      vercelLink: "https://farhod-s-quiz.vercel.app/",
    },
    {
      name: "My Kitchen",
      description: "myKitchen",
      image: "../my-kitchen.png",
      vercelLink: "https://my-kitchen-five.vercel.app/",
    },
    {
      name: "Random User",
      description: "randomUser",
      image: "../random-user.png",
      vercelLink: "https://random-user-ashen-chi.vercel.app/",
    },
    {
      name: "Trand Solution",
      description: "trandSolution",
      image: "../trand-solution.png",
      vercelLink: "https://trend-solution-chi.vercel.app",
    },
    {
      name: "My Todo App",
      description: "myTodoApp",
      image: "../my-todo.png",
      vercelLink: "https://my-todo-list-iota-black.vercel.app",
    },
  ];

  const project = projects.find((p) => p.description === slug);

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black px-4 text-center text-white">
        <p className="text-lg sm:text-2xl">Loyiha topilmadi :(</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-5xl">
        {/* Navbar */}
        <div className="text-white">
          <Navbar />
        </div>

        {/* Back Button */}
        <Link
          href="/"
          className="mt-10 mb-6 inline-flex items-center gap-2 text-xs text-zinc-400 transition hover:text-white sm:mb-8 sm:text-sm lg:mt-14"
        >
          ← {t("back")}
        </Link>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/80 shadow-xl backdrop-blur-xl sm:rounded-3xl sm:shadow-2xl">
          {/* IMAGE (BALANDLIK OSHIRILDI) */}
          <div className="relative aspect-[16/10] max-h-[300px] w-full overflow-hidden sm:aspect-video sm:max-h-[420px] md:max-h-[450px]">
            <img
              src={project.image}
              alt={project.name}
              className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* Title */}
            <div className="absolute right-4 bottom-4 left-4 sm:bottom-8 sm:left-8">
              <h1 className="text-2xl leading-tight font-semibold text-white sm:text-4xl md:text-5xl">
                {project.name}
              </h1>
            </div>
          </div>

          {/* CONTENT */}
          <div className="p-5 sm:p-8 md:p-12">
            <p className="text-sm leading-relaxed text-zinc-300 sm:text-base md:text-lg">
              {t(project.description)}
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <Link
                href="/"
                className="w-full rounded-xl border border-white/20 px-6 py-3 text-center text-sm text-white transition hover:border-white/40 hover:bg-white/5 sm:w-auto"
              >
                ← {t("back")}
              </Link>

              <Link
                href={project.vercelLink}
                target="_blank"
                className="w-full rounded-xl bg-white px-6 py-3 text-center text-sm font-semibold text-black transition hover:bg-zinc-200 sm:w-auto"
              >
                🚀 {t("live")}
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-[10px] text-zinc-500 sm:mt-10 sm:text-xs">
          One of Farhod’s portfolio projects
        </p>
      </div>
    </div>
  );
}
