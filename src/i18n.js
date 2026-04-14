"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // Navbar
      Home: "Home",
      About: "About",
      Skills: "Skills",
      Projects: "Projects",
      Contact: "Contact",

      // Lan Select
      English: "English",
      Russian: "Russian",
      Uzbek: "Uzbek",

      // Hero
      Name: "Farhod",
      Role: "Frontend Developer",
      Description:
        "I create modern, fast and beautiful web applications using React and Next.js. I have 2.5+ years of experience.",
      ViewProjects: "View Projects",
      ContactMe: "Contact me",

      // About
      AboutMe:
        "I am Farhod Nazarov, a frontend developer with over 2.5 years of experience in the IT field. I was born in 2002 in the Fergana region (Tashlak district). I specialize in building modern, user-friendly web interfaces using React.js, Next.js, JavaScript (ES6+), HTML, CSS, and Tailwind CSS. I am a responsible, fast-learning, and result-oriented developer. I also have teaching experience, having worked as a frontend mentor at Coddy Camp IT Academy in Tashkent for 1 year. Additionally, I have basic knowledge of accounting (1C, Excel), which enhances my analytical thinking and helps me better understand business processes.",
    },
  },

  ru: {
    translation: {
      // Navbar
      Home: "Главная",
      About: "Обо мне",
      Skills: "Навыки",
      Projects: "Проекты",
      Contact: "Контакты",

      // Lan Select
      English: "Английский",
      Russian: "Русский",
      Uzbek: "Узбекский",

      // Hero
      Name: "Фарход",
      Role: "Frontend разработчик",
      Description:
        "Я создаю современные, быстрые и красивые веб-приложения с помощью React и Next.js. У меня более 2.5 лет опыта.",
      ViewProjects: "Посмотреть проекты",
      ContactMe: "Связаться со мной",

      // About
      AboutMe:
        "Я Фарход Назаров — frontend разработчик с более чем 2.5-летним опытом в сфере IT. Родился в 2002 году в Ферганской области (Ташлакский район). Специализируюсь на создании современных и удобных пользовательских интерфейсов с использованием React.js, Next.js, JavaScript (ES6+), HTML, CSS и Tailwind CSS. Ответственно подхожу к работе, быстро обучаюсь и ориентирован на результат. Имею опыт преподавания — работал ментором по frontend разработке в IT-академии Coddy Camp в Ташкенте на протяжении 1 год. Также обладаю базовыми знаниями в бухгалтерии (1C, Excel), что помогает мне лучше понимать бизнес-процессы и развивает аналитическое мышление.",
    },
  },

  uz: {
    translation: {
      // Navbar
      Home: "Bosh sahifa",
      About: "Men haqimda",
      Skills: "Ko‘nikmalar",
      Projects: "Loyihalar",
      Contact: "Aloqa",

      // Lan Select
      English: "Ingliz tili",
      Russian: "Rus tili",
      Uzbek: "O‘zbek tili",

      // Hero
      Name: "Farhod",
      Role: "Frontend Dasturchi",
      Description:
        "React va Next.js yordamida zamonaviy, tez va chiroyli web ilovalar yarataman. 2.5+ yil tajribaga egaman.",
      ViewProjects: "Loyihalarni ko‘rish",
      ContactMe: "Bog‘lanish",

      // About
      AboutMe:
        "Men Farhod Nazarov — frontend dasturchiman. 2002-yilda Farg‘ona viloyati Toshloq tumanida tug‘ilganman. IT sohasida 2.5 yildan ortiq tajribaga egaman va zamonaviy web texnologiyalar yordamida samarali, foydalanuvchi uchun qulay interfeyslar yaratishga ixtisoslashganman. React.js, Next.js, JavaScript (ES6+), HTML, CSS va Tailwind CSS bilan ishlayman. Loyihalarda mas’uliyatli, tez o‘rganadigan va natijaga yo‘naltirilgan dasturchiman. Shuningdek, Toshkent shahridagi Coddy Camp IT akademiyasida 1 yil davomida frontend mentor sifatida faoliyat yuritganman. Bu jarayonda o‘quvchilarga zamonaviy web dasturlashni o‘rgatish orqali pedagogik va texnik ko‘nikmalarimni rivojlantirdim. Qo‘shimcha ravishda buxgalteriya yo‘nalishida ham bilimga egaman (1C, Excel), bu esa analitik fikrlashimni yanada kuchaytirgan.",
    },
  },
};

const savedLang =
  typeof window !== "undefined" ? localStorage.getItem("lang") : "en";

i18n.use(initReactI18next).init({
  resources,
  lng: savedLang || "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
