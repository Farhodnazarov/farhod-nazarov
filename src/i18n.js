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
        "My name is Farhod Nazarov — a frontend developer. I was born in 2002 in the Toshloq district of the Fergana region. Currently, I work as an IT teacher at Platon School, a private school located in Fergana city. I have over 2.5 years of experience in the IT field and specialize in building efficient and user-friendly interfaces using modern web technologies. I mainly work with React.js, Next.js, JavaScript (ES6+), HTML, CSS, and Tailwind CSS. Additionally, I have experience with TypeScript, Redux, Node.js, Webpack, Git, Bootstrap, Ant Design, DaisyUI, Shadcn/UI, Zustand, and working with APIs (JSON). I am a responsible, fast learner, and result-oriented developer. I also worked as a frontend mentor for one year at Coddy Camp IT Academy in Tashkent, where I taught modern web development and strengthened both my technical and teaching skills. Additionally, I have knowledge in accounting (1C, Excel), which enhances my analytical thinking. I am proficient in English and Russian.",
      // Projects description
      tipCalculator:
        " Tip Calculator is a simple and convenient web application designed to help users easily calculate the total bill in a restaurant or café. First, the user enters the total amount spent. Then, they select or input the tip percentage. After that, the number of people sharing the bill is entered. The application automatically: 💰 calculates the tip amount separately 👤 determines how much  each person should pay  ➕ shows the final total including the tip This project helps users make quick and accurate calculations, especially when splitting the bill among a group of people.  ",
      devfinder:
        "DevFinder is a modern web application designed to search for GitHub users and display detailed information about their profiles. Users can search for any GitHub username, and the application will automatically fetch and present key profile data such as avatar, bio, number of repositories, followers, and other statistics. Key features: 🔍 Fast GitHub user search  📊 Display of essential profile information 🌙 Support for Light and Dark mode  ⚡ Clean, fast, and user-friendly interface This project makes it easy to explore developers and quickly access information about their GitHub activity.",
      furniture:
        "Furniture is a modern online furniture store that allows users to browse and purchase a wide range of furniture products بسهولة and efficiently. The platform offers furniture for both home and office use. Users can easily find suitable products using categories and filtering options. Key features: 🛋️ Browse and choose furniture for home and office 🔍 Product filtering system for better search experience 🛒 Full e-commerce functionality (cart, pricing, and more) 👤 User registration and authentication 🌙 Light and Dark mode support ⚡ Clean, modern, and user-friendly interface This project demonstrates a complete online store experience, making shopping simple, fast, and convenient.",
      quiz: "Frontend Quiz is a beautifully designed interactive quiz application that puts your frontend development knowledge to the test. Choose from four essential topics — HTML, CSS, JavaScript, or Accessibility — and tackle a set of 10 carefully crafted multiple-choice questions, each with four possible answers (A, B, C, D). Upon selecting an answer, the correct option is instantly highlighted in green, providing immediate feedback and reinforcing learning in real time. A smooth progress bar at the bottom of each question keeps you informed of how far you've come and how much is left to go. With a sleek dark-themed UI, a Light/Dark mode toggle, and a clean distraction-free layout, Frontend Quiz delivers a premium quiz experience that feels as good as it looks. Whether you're a beginner building your foundation or an experienced developer prepping for a technical interview — this app is your go-to practice tool!",
      myKitchen:
        "FN Kitchen is a full-stack personal recipe management platform powered by Firebase Authentication. Create your account, log in securely, and step into your very own private culinary cabinet — a personalized space where your recipes belong only to you. Every user has a completely isolated experience: the recipes you create are visible only in your account, never shared with or accessible by others. Think of it as your digital recipe book in the cloud — private, secure, and always available. Adding a recipe is seamless: fill in the dish name, cooking time, ingredients, preparation method, and an image URL. Your recipe instantly appears as a beautifully styled card on your personal home feed. Like your favorites with ♥, delete what you no longer need, and keep your kitchen organized just the way you like it. Built with Firebase for real-time data and secure authentication, FN Kitchen also features a live weather display in the navbar, smooth Dark/Light mode toggle, and a clean user profile — all combining to make this more than just a recipe app. It's your personal corner of the internet, dedicated entirely to the food you love. FN Kitchen — Cook it. Save it. Own it. 🍳",
      randomUser:
        "Random User Generator is a feature-rich web application that fetches and displays randomly generated users from across the globe in real time. Each user card presents a profile photo, full name, age, country, and gender — offering a complete and visually appealing snapshot of a unique individual. The app comes packed with powerful tools for an enhanced user experience. Live Search filters users instantly as you type — no page reloads, no delays, just smooth real-time results. The Filter system lets you sort and narrow down users by gender, age, or other criteria with ease. Refresh pulls a fresh set of random users straight from the API, while Clear resets everything back to a blank slate. Dark/Light Mode gives users full control over their visual experience — toggle between the immersive dark cosmic theme and the clean bright interface with a single click. Both modes are thoughtfully designed and look equally polished. With users spanning from India, Turkey, and Finland to Mexico, Ukraine, the USA, and Australia — this app is truly a window to the world. Whether you're showcasing API integration skills, live filtering logic, or theme switching — Random User Generator brings it all together in one elegant, fully functional frontend project. 🌐",
      trandSolution:
        "TrendSolution is a professional IT company website offering smart digital solutions across web development, mobile applications, UI/UX design, branding, and cybersecurity. Built with a bold dark aesthetic and sharp blue accents, the site immediately communicates technical expertise and corporate authority. The Services section highlights three core offerings delivered through an elegant carousel. Mobile Apps covers fast, modern Android and iOS development with offline support and full App Store/Google Play deployment. Logo & Branding delivers professional identity design — from color palettes and typography to a complete unique brand concept. UI/UX Design focuses on building aesthetic, user-friendly interfaces, wireframes, prototypes, and fully responsive layouts for both web and mobile platforms. Each service card includes detailed bullet points and a direct 'Bog'lanish' (Contact) CTA button. The Testimonials section features a sliding carousel of real client reviews. Highlighted projects include a Mobile Fitness App praised for speed and bug-free performance, and an IoT Dashboard for Smart Farming recognized for real-time data visualization and flawless sensor integration — showcasing TrendSolution's versatility across industries. The Technologies section proudly displays the company's full tech stack: React, Django, Figma, JavaScript, MongoDB, Node.js, PostgreSQL, Python, Tailwind CSS, and TypeScript — a comprehensive modern stack covering frontend, backend, database, and design. The Contact page features a structured inquiry form where clients can submit their company name, full name, phone number (with Uzbekistan +998 prefix), project type (UI/UX, web, mobile, etc.), and a detailed project description. A dedicated team member then follows up personally. Available in both Russian and Uzbek, with smooth navigation across Home, About, Services, Projects, Technologies, and Contact sections — TrendSolution is more than a company website. It's a digital storefront that builds trust, communicates capability, and invites collaboration. Based in Tashkent, Uzbekistan, serving clients nationwide and beyond. 🌐",
      myTodoApp:
        "TODO is a clean and powerful personal task management application built to help you stay organized, focused, and productive every single day. With the motto 'Stay Organized, Stay Productive,' it delivers exactly what it promises — a simple yet feature-rich tool designed around you. The authentication system offers two seamless ways to get started: sign up with your name, email, password, and a profile photo, or jump straight in with Google Sign-In in a single click. Once logged in, your name and profile picture appear in the navbar — making the experience feel personal from the very first moment. Every user gets a fully private todo cabinet — your tasks are yours alone, completely isolated from other users. Creating a task is effortless: enter a title and set a deadline, and your task card appears instantly, showing the exact creation date and time alongside the deadline. Each card supports inline editing ✏️ and deletion 🗑️, giving you full control over your task list at all times. The landing page highlights three core strengths: Easy Task Management — create, organize, and track all your todos in one intuitive place; Mark Completed — check off finished tasks and stay motivated with visual progress feedback; Never Miss Deadlines — set due dates and accomplish your goals right on schedule. With a warm golden accent palette, crisp white layout, friendly UI copy, and Google authentication — TODO is more than a checklist. It's your personal productivity companion, built to help you win the day, every day. ✅",
      // Single Project buttons
      back: "Back",
      live: "Live",
      // Contact with me text
      contactText:
        "I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. If you have any questions or would like to work together, feel free to reach out. I’ll do my best to respond as soon as possible. Let’s build something great together!",
      contactTitle: "Contact Me :",
      // Contact Form
      contactInputName: "Enter Your Name",
      contactInputCompanyName: "Enter Your Company Name",
      contactInputEmail: "Enter Your Email",
      contactInputMessage: "Write me your opinion",
      contactLabelName: "Name",
      contactLabelCompanyName: "Company Name",
      contactLabelEmail: "Email Address",
      contactLabelMessage: "Message",
      contactButton: "Send",
      contactButtonSendding: "Sending...",
      // Contact Form Validate
      nameValidate: "Enter your name ❌",
      companyNameValidate: "Enter company name ❌",
      emailValidate: "Enter email address ❌",
      messageValidate: "Enter a message ❌",
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
        "Меня зовут Фарход Назаров — frontend-разработчик. Я родился в 2002 году в Ташлакском районе Ферганской области. В настоящее время преподаю IT в частной школе Platon School, расположенной в городе Фергана. Имею более 2.5 лет опыта в сфере IT и специализируюсь на создании эффективных и удобных пользовательских интерфейсов с использованием современных веб-технологий. В основном работаю с React.js, Next.js, JavaScript (ES6+), HTML, CSS и Tailwind CSS. Также имею опыт работы с TypeScript, Redux, Node.js, Webpack, Git, Bootstrap, Ant Design, DaisyUI, Shadcn/UI, Zustand, а также работой с API (JSON). Я ответственный, быстро обучаемый и ориентированный на результат разработчик. В течение 1 года работал frontend-ментором в IT-академии Coddy Camp в Ташкенте, где обучал студентов современному веб-программированию и развивал свои педагогические и технические навыки. Дополнительно обладаю знаниями в области бухгалтерии (1C, Excel), что усиливает мое аналитическое мышление. Владею английским и русским языками.",
      // Projects description
      tipCalculator:
        "Tip Calculator — это удобное веб-приложение, которое помогает легко и точно рассчитать общий счет в ресторане или кафе. Пользователь сначала вводит общую сумму, потраченную в заведении. Затем указывает процент чаевых (tip) — можно выбрать из предложенных вариантов или ввести вручную. После этого вводится количество человек, между которыми будет делиться счет. Приложение автоматически: 💰 рассчитывает сумму чаевых отдельно 👤 определяет, сколько должен заплатить каждый человек ➕ выводит итоговую сумму с учетом чаевых Этот проект помогает быстро и без ошибок производить расчеты, особенно когда вы находитесь в компании.",
      devfinder:
        "DevFinder — это современное веб-приложение, предназначенное для поиска пользователей GitHub и просмотра информации об их профилях. Пользователь может ввести любой username GitHub, после чего приложение автоматически получает и отображает основную информацию о профиле, такую как аватар, описание (bio), количество репозиториев, подписчиков и другие статистические данные. Основные возможности: 🔍 Быстрый поиск пользователей GitHub 📊 Отображение ключевой информации профиля 🌙 Поддержка светлой и тёмной темы (Light/Dark mode) ⚡ Удобный и быстрый пользовательский интерфейс Этот проект упрощает получение информации о разработчиках и их активности на GitHub.",
      furniture:
        "Furniture — это современный онлайн-магазин мебели, который позволяет пользователям удобно выбирать и покупать различные виды мебели. На платформе представлены товары как для дома, так и для офиса. Пользователи могут легко находить нужные товары с помощью категорий и фильтров. Основные возможности: 🛋️ Просмотр и выбор мебели для дома и офиса 🔍 Фильтрация товаров по различным параметрам 🛒 Полная логика интернет-магазина (корзина, расчёты и т.д.) 👤 Регистрация и авторизация пользователей 🌙 Поддержка светлой и тёмной темы (Light/Dark mode) ⚡ Удобный и современный интерфейс Этот проект реализует все основные функции онлайн-магазина и обеспечивает комфортный пользовательский опыт.",
      quiz: "Frontend Quiz — современное интерактивное приложение для проверки знаний по frontend-разработке. Выбери одну из четырёх тем: HTML, CSS, JavaScript или Accessibility — и пройди тест из 10 вопросов с вариантами ответов A, B, C и D. После выбора ответа правильный вариант мгновенно подсвечивается зелёным цветом — так обучение становится не только полезным, но и наглядным. Прогресс-бар внизу всегда показывает, сколько вопросов уже пройдено и сколько осталось. Стильный тёмный интерфейс с поддержкой светлой темы, плавные анимации и чистый UX делают процесс прохождения теста максимально приятным. Frontend Quiz — твой лучший тренажёр перед техническим собеседованием или просто способ проверить себя!",
      myKitchen:
        "FN Kitchen — персональная кулинарная платформа с полноценной системой авторизации на базе Firebase. Зарегистрируйся, войди в свой аккаунт — и получи доступ к личному кабинету, где хранятся только твои рецепты, видимые только тебе. Каждый пользователь имеет изолированное пространство: рецепты одного пользователя недоступны другим. Это не просто сайт с едой — это твоя цифровая кулинарная книга, защищённая и всегда под рукой. Добавляй рецепты с названием, временем приготовления, ингредиентами, способом готовки и фото. Каждый рецепт отображается как стильная карточка с возможностью просмотра деталей или удаления. Реальная погода в шапке, тёмная и светлая тема, удобный профиль — всё это делает FN Kitchen современным и функциональным инструментом для настоящих ценителей кулинарии. Готовь. Сохраняй. Это твоё личное пространство. 🍽️",
      randomUser:
        "Random User Generator — современное веб-приложение, которое в реальном времени генерирует случайных пользователей со всего мира. Каждая карточка содержит фото, имя, возраст, страну и пол — всё необходимое для полноценного представления человека. Приложение оснащено мощным набором инструментов. Live Search фильтрует пользователей прямо во время набора текста — мгновенно и без перезагрузки страницы. Фильтр позволяет сортировать пользователей по полу, возрасту или другим параметрам. Refresh загружает новую порцию случайных людей из API, а Clear полностью очищает список. Dark/Light Mode — переключайся между тёмной космической атмосферой и светлым дневным интерфейсом в один клик. Оба режима тщательно проработаны и выглядят одинаково стильно. Пользователи из Индии, Турции, Финляндии, Мексики, Украины, США, Австралии и десятков других стран делают платформу по-настоящему глобальной. Random User Generator — это полноценный frontend-проект, демонстрирующий работу с внешним API, живую фильтрацию, систему тем и адаптивный дизайн в одном месте. 🌍",
      trandSolution:
        "TrendSolution — официальный корпоративный сайт современной IT-компании, специализирующейся на разработке умных цифровых решений и кибербезопасности. Слоган 'В Основе — Умные IT-решения' отражает главную миссию компании: создавать мощные, надёжные и инновационные продукты для бизнеса. В разделе Услуги представлены три ключевых направления. Мобильные приложения — разработка быстрых и современных приложений для Android и iOS с поддержкой офлайн-режима и публикацией в магазинах. Logo & Branding — создание профессиональных логотипов, фирменного стиля и уникальной брендовой концепции. UI/UX Дизайн — проектирование эстетичных пользовательских интерфейсов, прототипов и адаптивных макетов для мобильных и веб-платформ. Раздел Testimonials представлен в виде карусели с отзывами реальных клиентов. Среди упомянутых проектов — Mobile Fitness App (быстрое приложение с push-уведомлениями и аналитикой прогресса) и IoT Dashboard for Smart Farming (визуализация данных в реальном времени с интеграцией датчиков). Это подтверждает опыт компании в разных отраслях. В разделе Технологии показан полный стек: React, Django, Figma, JavaScript, MongoDB, Node.js, PostgreSQL, Python, Tailwind CSS, TypeScript — мощная комбинация для frontend, backend и дизайна. На странице Контакт клиент может заполнить форму с названием компании, именем, номером телефона, типом проекта и его описанием. После отправки с ним связывается ответственный специалист. Сайт доступен на русском и узбекском языках. Тёмный дизайн с синими акцентами и технологической анимацией создаёт профессиональное и современное впечатление. Компания базируется в Ташкенте, Узбекистан, обслуживая клиентов по всей стране. 🚀",
      myTodoApp:
        "TODO — современное персональное приложение для управления задачами, разработанное для тех, кто ценит своё время и хочет оставаться продуктивным каждый день. Девиз 'Stay Organized, Stay Productive' точно отражает суть этого инструмента. Система авторизации предлагает два удобных способа входа: регистрация через email и пароль или быстрый вход через Google-аккаунт в один клик. При регистрации пользователь указывает имя, email, пароль и загружает фото профиля — создавая полноценный персональный аккаунт. После входа в верхней панели отображается имя пользователя и его аватар. Каждый пользователь получает изолированное личное пространство — его задачи недоступны другим. Создание задачи занимает секунды: введи заголовок и дедлайн — и карточка задачи появляется в списке с точным временем создания и крайним сроком выполнения. Каждую задачу можно редактировать ✏️ или удалить 🗑️ в любой момент. На главной странице три ключевых преимущества: Easy Task Management — все задачи в одном месте с интуитивным интерфейсом, Mark Completed — отмечай выполненные задачи и следи за прогрессом, Never Miss Deadlines — устанавливай дедлайны и достигай целей вовремя. Золотисто-жёлтая цветовая схема, чистый белый фон и дружелюбный дизайн делают работу с приложением приятной и эффективной. TODO — твой личный помощник в достижении целей. Организуй. Выполняй. Побеждай. ✅",
      // Single Project buttons
      back: "Назад",
      live: "Посмотреть проект",
      // Contact with me text
      contactText:
        "Я всегда открыт к обсуждению новых проектов, креативных идей и возможностей стать частью вашей команды. Если у вас есть вопросы или вы хотите сотрудничать — смело пишите. Я постараюсь ответить как можно быстрее. Давайте создавать что-то крутое вместе!",
      contactTitle: "Связаться со мной :",
      // Contact Form
      contactInputName: "Введите ваше имя",
      contactInputCompanyName: "Введите название компании",
      contactInputEmail: "Введите ваш email",
      contactInputMessage: "Напишите ваше мнение",
      contactLabelName: "Имя",
      contactLabelCompanyName: "Название компании",
      contactLabelEmail: "Электронная почта",
      contactLabelMessage: "Сообщение",
      contactButton: "Отправить",
      contactButtonSending: "Отправка...",
      // Contact Form Validate
      nameValidate: "Введите имя ❌",
      companyNameValidate: "Введите название компании ❌",
      emailValidate: "Введите адрес электронной почты ❌",
      messageValidate: "Введите сообщение ❌",
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
        "Men Farhod Nazarov — frontend dasturchiman. 2002-yilda Farg‘ona viloyati Toshloq tumanida tug‘ilganman. Hozirda Farg‘ona viloyati Farg‘ona shahrida joylashgan Platon School xususiy maktabida IT fanidan dars beraman. IT sohasida 2.5 yildan ortiq tajribaga egaman va zamonaviy web texnologiyalar yordamida samarali, foydalanuvchi uchun qulay interfeyslar yaratishga ixtisoslashganman. Asosan React.js, Next.js, JavaScript (ES6+), HTML, CSS va Tailwind CSS bilan ishlayman.Shuningdek, TypeScript, Redux, Node.js, Webpack, Git, Bootstrap, Ant Design, DaisyUI, Shadcn/UI, Zustand va API bilan ishlash (JSON) bo‘yicha ham tajribaga egaman.Loyihalarda mas’uliyatli, tez o‘rganadigan va natijaga yo‘naltirilgan dasturchiman. Shuningdek, Toshkent shahridagi Coddy Camp IT akademiyasida 1 yil davomida frontend mentor sifatida faoliyat yuritganman. Bu jarayonda o‘quvchilarga zamonaviy web dasturlashni o‘rgatish orqali pedagogik va texnik ko‘nikmalarimni rivojlantirdim.Qo‘shimcha ravishda buxgalteriya yo‘nalishida ham bilimga egaman (1C, Excel), bu esa analitik fikrlashimni yanada kuchaytirgan. Til bilimlari: ingliz va rus tillarida ishlay olaman.",
      // Projects description
      tipCalculator:
        "Tip Calculator — bu restoran yoki kafega borganingizda umumiy xarajatlarni oson va aniq hisoblash uchun yaratilgan qulay web ilova. Foydalanuvchi dastlab restoranda sarflagan umumiy summani kiritadi. Shundan so‘ng, xizmat uchun beriladigan tip (foizda) tanlanadi yoki qo‘lda kiritiladi. Keyingi bosqichda esa nechta odam hisobni bo‘lishi kiritiladi. Ilova avtomatik tarzda: 💰 Tip miqdorini alohida hisoblaydi 👤 Har bir odamga to‘g‘ri keladigan summani aniqlaydi ➕ Umumiy summa + tip bilan yakuniy to‘lovni chiqaradi Bu loyiha foydalanuvchilarga hisob-kitobni tez va xatosiz amalga oshirishga yordam beradi, ayniqsa guruh bo‘lib ovqatlanganda juda qulay.",
      devfinder:
        "DevFinder — bu GitHub foydalanuvchilarini qidirish va ularning profil ma’lumotlarini ko‘rish uchun yaratilgan zamonaviy web ilova. Foydalanuvchi istalgan GitHub username orqali qidiruv amalga oshirishi mumkin. Ilova esa tanlangan profil bo‘yicha asosiy ma’lumotlarni (avatar, bio, repositorylar soni, followerlar va boshqa statistikalar) avtomatik tarzda olib chiqadi. Asosiy imkoniyatlari: GitHub foydalanuvchilarini tezkor qidirish 📊 Profilga oid barcha muhim ma’lumotlarni ko‘rsatish 🌙 Light va Dark mode qo‘llab-quvvatlashi ⚡ Tezkor va foydalanuvchiga qulay interfeys Bu loyiha developerlar va GitHub foydalanuvchilari haqida tezkor ma’lumot olishni osonlashtiradi.",
      furniture:
        "Furniture — bu zamonaviy onlayn mebel do‘koni bo‘lib, foydalanuvchilarga turli xil mebellarni qulay tarzda tanlash va xarid qilish imkonini beradi. Platformada uy va ofis uchun mo‘ljallangan keng turdagi mebellar mavjud. Foydalanuvchilar mahsulotlarni kategoriya va filterlar orqali saralab, o‘z ehtiyojlariga mos variantlarni oson topishlari mumkin. Asosiy imkoniyatlari: 🛋️ Uy va ofis uchun turli xil mebellarni ko‘rish va tanlash 🔍 Filter orqali mahsulotlarni saralash  🛒 To‘liq onlayn magazin logikasi (cart, isob-kitob va boshqalar) 👤 Foydalanuvchi ro‘yxatdan o‘tishi va tizimga kirishi 🌙 Light va Dark mode qo‘llab-quvvatlashi ⚡ Zamonaviy va foydalanuvchiga qulay interfeys Bu loyiha real onlayn do‘kon funksiyalarini o‘z ichiga olgan bo‘lib, foydalanuvchilarga qulay va tezkor xarid qilish tajribasini taqdim etadi.",
      quiz: "Frontend Quiz — frontend dasturlash bo'yicha bilimlarni interaktiv tarzda sinab ko'rish uchun mo'ljallangan zamonaviy web ilova. HTML, CSS, JavaScript va Accessibility — to'rtta asosiy mavzudan birini tanlab, 10 savollik testni boshlang. Har bir savol A, B, C, D ko'rinishida 4 ta javob varianti bilan taqdim etiladi. To'g'ri javobni tanlaganingizda u yashil rang bilan ajralib turadi — bu esa o'rganish jarayonini yanada samarali qiladi. Pastdagi progress bar esa qancha yo'l bosib o'tganingizni doim ko'rsatib turadi. Minimalist va zamonaviy dizayn, Dark/Light mode, silliq animatsiyalar — hammasi birgalikda foydalanuvchiga qulay va estetik tajriba yaratadi. Intervyuga tayyorlanayapsizmi yoki shunchaki bilimingizni tekshirmoqchimisiz? Frontend Quiz har doim yoningizda!",
      myKitchen:
        "Endi yanada to'liqroq picture ko'rindi! 🔥 Firebase auth + shaxsiy kabinet — bu juda professional yondashuv! 🇺🇿 O'zbekcha FN Kitchen — har bir foydalanuvchi uchun shaxsiy kulinariya kabineti. Ro'yxatdan o'ting, tizimga kiring va o'zingizning retseptlar to'plamingizni yarating — faqat siz ko'ra oladigan, faqat sizga tegishli bo'lgan raqamli oshxonangiz! Firebase autentifikatsiyasi orqali xavfsiz ro'yxatdan o'tish va kirish imkoniyati mavjud. Har bir foydalanuvchining retseptlari boshqalardan to'liq ajratilgan — siz qo'shgan taom faqat sizning kabinetingizda ko'rinadi. Bu shunchaki retsept saytи emas, bu sizning shaxsiy oshxonangiz. Taom nomini, pishirish vaqtini, ingredientlar va tayyorlash usulini kiriting — retseptingiz darhol chiroyli karta shaklida saqlanadi. Yoqtirgan retseptlarni ♥ bilan belgilang, kerakmasini o'chiring. Real vaqtda ob-havo, Dark/Light mode va qulay interfeys — hammasi birgalikda FN Kitchen'ni oddiy saytdan professional platforma darajasiga ko'taradi! FN Kitchen — pishiring, saqlang, zavqlaning. Faqat o'zingiz uchun. 🍳",
      randomUser:
        "Random User Generator — dunyo bo'ylab tasodifiy foydalanuvchilarni real vaqtda generatsiya qilib ko'rsatuvchi zamonaviy web ilova. Har bir foydalanuvchi kartasida profil rasmi, to'liq ism, yosh, mamlakat va jins ma'lumotlari to'liq ko'rsatiladi. Ilova bir nechta kuchli funksiyalar bilan jihozlangan. Live Search — foydalanuvchi nomini yozishni boshlaganingizdan so'ng darhol filtrlash amalga oshadi, hech qanday sahifa yangilanishisiz. Filter tizimi orqali foydalanuvchilarni jinsi, yoshi yoki mamlakati bo'yicha saralash mumkin. Refresh tugmasi API dan yangi tasodifiy odamlar to'plamini yuklaydi, Clear esa ekranni tozalaydi. Dark/Light Mode — ko'zingizga qulay bo'lgan rejimni tanlang. Tungi kosmik fon yoki kunduzgi yorug' interfeys — ikkalasi ham alohida chiroyli ko'rinishga ega. Dunyoning ondan ortiq mamlakatidan foydalanuvchilar: Hindiston, Turkiya, Finlyandiya, Meksika, Ukraina, Norvegiya, AQSh, Avstraliya va boshqalar — haqiqatan global platforma! Random User Generator — API integratsiyasi, live filtering va Dark/Light mode kabi zamonaviy frontend texnologiyalarini birlashtirib yaratilgan to'laqonli loyiha. 🌐",
      trandSolution:
        "TrendSolution — zamonaviy IT va kiberxavfsizlik yechimlarini taqdim etuvchi professional texnologiya kompaniyasining rasmiy veb-sayti. 'Умные IT-решения' — aqlli raqamli yechimlar bilan biznesingizni yangi bosqichga olib chiqish uchun yaratilgan platforma. Xizmatlar bo'limida uchta asosiy yo'nalish taqdim etilgan: Mobile ilovalar (Android va iOS uchun tezkor va zamonaviy ilovalar), Logo & Branding (biznes ruhini aks ettiruvchi professional logotip va brend konsepsiyasi) va UI/UX dizayn (zamonaviy va estetik foydalanuvchi interfeyslari, prototip va maketlar). Har bir xizmat batafsil tavsif va 'Bog'lanish' tugmasi bilan jihozlangan. Testimonials bo'limida real mijozlarning fikrlari carousel shaklida taqdim etilgan — Mobile Fitness App va IoT Dashboard for Smart Farming kabi haqiqiy loyihalar bo'yicha muvaffaqiyatli hamkorlik misollari keltirilgan. Technologies bo'limida kompaniya foydalanadigan texnologiyalar to'liq ko'rsatilgan: React, Django, Figma, JavaScript, MongoDB, Node.js, PostgreSQL, Python, Tailwind CSS, TypeScript — bu stack zamonaviy va kuchli. Kontakt sahifasida mijoz kompaniya nomi, to'liq ismi, telefon raqami, loyiha turi va loyiha tavsifini kiritib, to'g'ridan-to'g'ri so'rov yuborishi mumkin. Loyiha turlari orasida UI/UX dizayn, web sayt, mobil ilova va boshqalar mavjud. Sayt Rus va O'zbek tillarida ishlaydi, navigatsiyada Главная, О нас, Услуги, Проекты, Технологии, Контакт bo'limlari bor. Qora fon, moviy aksent ranglar va kosmik animatsiyalar saytga kuchli korporativ va texnologik ko'rinish beradi. Toshkent, O'zbekiston bazasida bo'lib, butun mamlakat bo'ylab mijozlarga xizmat ko'rsatadi. 🌐",
      myTodoApp:
        "TODO — kundalik vazifalaringizni tartibli va samarali boshqarish uchun yaratilgan zamonaviy shaxsiy produktivlik ilovasi. 'Stay Organized, Stay Productive' — bu shunchaki shior emas, bu ilovaning asosiy falsafasi. Autentifikatsiya tizimi to'liq jihozlangan: email va parol orqali ro'yxatdan o'tish, yoki bir marta bosish bilan Google akkauntingiz orqali tizimga kirish. Ro'yxatdan o'tishda ism, email, parol va profil fotosini yuklash imkoniyati ham mavjud — bu har bir foydalanuvchiga o'ziga xos shaxsiy kabinet yaratadi. Tizimga kirganingizdan so'ng navigatsiya barida sizning ismingiz va profil rasmingiz ko'rinadi. Har bir foydalanuvchining vazifalari faqat o'ziga ko'rinadigan shaxsiy todo kabineti shaklida taqdim etiladi. Vazifa yaratishda sarlavha va deadline (muddat) kiritiladi — har bir karta yaratilgan sana va soati, hamda deadline sanasi bilan birga chiroyli karta shaklida saqlanadi. Vazifani tahrirlash ✏️ yoki o'chirish 🗑️ ham mumkin. Landing page'da uchta asosiy ustunlik taqdim etilgan: Easy Task Management (barcha vazifalar bir joyda), Mark Completed (bajarilgan vazifalarni belgilash va vizual progress), Never Miss Deadlines (muddat belgilash va o'z vaqtida bajarish). Sariq-oltin aksent ranglar, toza oq fon va do'stona interfeys — hammasi birgalikda ilovani ham chiroyli, ham qulay qiladi. TODO — maqsadlaringizga ering, vaqtingizni nazorat qiling, hayotingizni tartibga soling! ✅ ",
      // Single Project buttons
      back: "Ortga",
      live: "Loyihani ko‘rish",
      // Contact with me text
      contactText: `Men har doim yangi loyihalar, kreativ g‘oyalar yoki sizning loyihangizning bir qismi bo‘lish imkoniyatlarini muhokama qilishga ochiqman. Agar sizda savollar bo‘lsa yoki hamkorlik qilishni istasangiz, bemalol murojaat qiling. Imkon qadar tezroq javob berishga harakat qilaman. Keling, birgalikda ajoyib loyihalar yarataylik!`,
      contactTitle: "Bog'lanish :",
      // Contact Form
      contactInputName: "Ismingizni kiriting",
      contactInputCompanyName: "Kompaniya nomini kiriting",
      contactInputEmail: "Email manzilingizni kiriting",
      contactInputMessage: "Fikringizni yozing",
      contactLabelName: "Ism",
      contactLabelCompanyName: "Kompaniya nomi",
      contactLabelEmail: "Email manzil",
      contactLabelMessage: "Xabar",
      contactButton: "Yuborish",
      contactButtonSending: "Yuborilmoqda...",
      // Contact Form Validate
      nameValidate: "Ism kiriting ❌",
      companyNameValidate: "Kompaniya nomini kiriting ❌",
      emailValidate: "Email manzil kiriting ❌",
      messageValidate: "Xabar yozing ❌",
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
