/* i18n.js — RU/EN toggle. Подключить перед </body>: <script src="i18n.js"></script>
   Не трогает href/src/атрибуты — только видимый текст. */
(function(){
  const DICT = {
    "О себе":"About","Направления":"Tracks","Проекты":"Projects","Портфолио":"Portfolio",
    "Образование":"Education","Стек":"Stack","Контакты":"Contact",
    "Unity · C# · Gamedev":"Unity · C# · Gamedev",
    "Unity-разработчик":"Unity Developer","преподаватель":"teacher / mentor","репетитор":"tutor",
    "Превращаю идеи в работающие продукты — от серых кубов прототипа до игры со своей графикой, звуком и завершёнными механиками. И учу этому других: от школьников до будущих разработчиков.":
      "I turn ideas into working products — from grey-box prototypes to games with their own art, sound and finished mechanics. And I teach this to others: from schoolkids to future developers.",
    "Написать письмо":"Send an email","Скачать резюме ↓":"Download resume ↓",
    "Коротко о себе":"Quick intro",
    "Меня мотивирует не написание кода само по себе, а возможность превращать идеи в работающие продукты — и объяснять другим, как это делается.":
      "What motivates me isn't writing code for its own sake, but turning ideas into working products — and explaining to others how it's done.",
    "Архитектура проектов":"Project architecture","Проектирование систем":"Systems design",
    "Внутренние инструменты":"Internal tools","Прототипирование":"Prototyping",
    "Оптимизация":"Optimization","Игровой процесс":"Gameplay",
    "Два вектора моего опыта":"Two sides of my experience",
    "РАЗРАБОТКА":"DEVELOPMENT","Инженер в Unity":"Unity Engineer",
    "MVP в первую очередь.":"MVP first.",
    "Сначала рабочий прототип, проверка жизнеспособности идеи — и только потом красота и оптимизация.":
      "A working prototype first, validating the idea — beauty and optimization come later.",
    "Архитектура.":"Architecture.",
    "MVC, MVVM, DI через Zenject, паттерны Factory / Adapter / Facade / Strategy / Observer. SOLID и KISS — как ориентир, а не догма.":
      "MVC, MVVM, DI via Zenject, Factory / Adapter / Facade / Strategy / Observer patterns. SOLID and KISS as a guideline, not dogma.",
    "Любовь к инструментам.":"Love for tooling.",
    "Визуальный редактор диалогов, генератор процедурных подземелий, обработчики логов — интереснее не игра, а то, на чём она держится.":
      "Visual dialogue editor, procedural dungeon generator, log processors — what's under the hood is more interesting than the game itself.",
    "Unity Profiler, Memory Profiler, снижение нагрузки на GC, Object Pool.":
      "Unity Profiler, Memory Profiler, reducing GC pressure, Object Pool.",
    "ОБУЧЕНИЕ":"TEACHING","Преподаватель и методист":"Teacher & Curriculum Designer",
    "Тысячи учеников":"Thousands of students",
    "и 500+ часов занятий — от индивидуальных уроков до вебинаров на 200+ человек.":
      "and 500+ hours of classes — from one-on-one lessons to webinars for 200+ people.",
    "Три авторских курса,":"Three original courses,",
    "включая девятимесячную программу «Промышленное программирование» (Unity + Python + Django + Docker + командная разработка).":
      "including a nine-month \"Industrial Programming\" program (Unity + Python + Django + Docker + team development).",
    "Репетиторство.":"Tutoring.",
    "Школьники 8–11 классов и студенты — Unity, C#, подготовка к сессии, разбор архитектуры учебных проектов.":
      "Grades 8–11 students and university students — Unity, C#, exam prep, reviewing project architecture.",
    "20+ учеников":"20+ students",
    "по моей информации продолжили карьеру в IT.":"went on, as far as I know, to careers in IT.",
    "Решения, которыми горжусь":"Solutions I'm proud of",
    "то, что запомнилось больше чем красивая сцена.":"the things that stuck with people more than a pretty scene.",
    "Capital Lanterns":"Capital Lanterns",
    "Диалоговая система из игры «Свет столичных фонарей»: ветвление на ScriptableObject, визуализация диалогов нодами и собственный редактор графов в Unity Editor — с нуля за 72 часа на Game Jam.":
      "The dialogue system from \"Capital Lanterns\": ScriptableObject-based branching, node-based dialogue visualization and a custom graph editor in the Unity Editor — built from scratch in 72 hours at a game jam.",
    "Editor Tool · «Свет столичных фонарей»":"Editor Tool · \"Capital Lanterns\"",
    "Генератор подземелий":"Dungeon Generator",
    "Процедурная генерация комнат и текстовой карты, соединение комнат алгоритмом A*, автоматическое построение игровой сцены.":
      "Procedural generation of rooms and a text map, connecting rooms with A*, automatic scene assembly.",
    "Proof of Concept":"Proof of Concept",
    "Анализатор логов":"Log Analyzer",
    "Настольное WinForms-приложение: загрузка логов по FTP, обработка и наглядное отображение результатов анализа.":
      "A desktop WinForms app: downloading logs over FTP, processing and clearly displaying the analysis results.",
    "Внутренний инструмент":"Internal tool",
    "Лайв-портфолио":"Live portfolio",
    "геймджемы и коммерческие релизы — можно поиграть и посмотреть":"game jams and commercial releases — playable and viewable",
    "Game Jam":"Game Jam",
    "Играть ↗":"Play ↗","Репозиторий ↗":"Repository ↗",
    "Свет столичных фонарей":"Capital Lanterns",
    "Узнайте загадочную историю отеля в городе Щ.":"Discover the mysterious story of a hotel in the town of Shch.",
    "Тема: Прозрение":"Theme: Epiphany","70 место из 215":"70th place out of 215",
    "MPTJ":"MPTJ",
    "Вы едва помните, что было вчера. Вы находите диктофон с вашим голосом. Что будет дальше — зависит лишь от вас.":
      "You barely remember yesterday. You find a voice recorder with your own voice on it. What happens next is up to you.",
    "Тема: Метаморфозы":"Theme: Metamorphosis","77 место из 228":"77th place out of 228",
    "Beast's Circus":"Beast's Circus",
    "Вы только что взяли на себя управление очень необычным цирком, и теперь ваша очередь привести его к процветанию.":
      "You've just taken charge of a very unusual circus, and now it's your turn to make it thrive.",
    "Тема: Compound":"Theme: Compound","36 место из 130":"36th place out of 130",
    "Искажённые сказки":"Corrupted Tales",
    "Вы — юный антивирус, которому наконец-то нашлась работа! Спасаем сказки от кибер-заразы.":
      "You're a young antivirus who's finally found a job! Saving fairy tales from a cyber-infection.",
    "Тема: Киберсказка":"Theme: Cyber Tale","41 место из 217":"41st place out of 217",
    "ScapeTime continuum BREAK":"ScapeTime continuum BREAK",
    "Восстанови материю пространства и времени.":"Restore the fabric of space and time.",
    "Локальный геймджем сообщества · 2023":"Local community game jam · 2023",
    "MinersRoutine":"MinersRoutine","Нужно копать глубже!":"Gotta dig deeper!",
    "Тема: Deeper and Deeper":"Theme: Deeper and Deeper",
    "PlayFlock — коммерческие проекты":"PlayFlock — commercial projects",
    "рейтинг":"rating","скачиваний":"downloads","отзывов":"reviews",
    "PlayFlock · Unity Client Developer":"PlayFlock · Unity Client Developer",
    "Emily's Dreams: Save the Hotel":"Emily's Dreams: Save the Hotel",
    "Разработка и поддержка live-service мобильных проектов с аудиторией 10M+ пользователей. Реализовывал новые игровые механики, уровни, события и системные изменения, работал с legacy-кодом и оптимизацией производительности.":
      "Development and support of live-service mobile projects with a 10M+ user base. Implemented new gameplay mechanics, levels, events and system changes, worked with legacy code and performance optimization.",
    "Google Play ↗":"Google Play ↗",
    "Family Hotel: Love & Match-3":"Family Hotel: Love & Match-3",
    "Мета (баттлпасы, ивенты), поддержка production, новые механики, оптимизация, legacy-refactoring.":
      "Meta features (battle passes, events), production support, new mechanics, optimization, legacy refactoring.",
    "PlayFlock":"PlayFlock","1 год и 5 месяцев":"1 year 5 months","Unity Client Developer":"Unity Client Developer",
    "Задачи":"Responsibilities","Стек и инструменты":"Stack & tools",
    "новые игровые возможности":"new gameplay features","рефакторинг legacy-кода":"legacy code refactoring",
    "Battle Pass":"Battle Pass","UI-эффекты":"UI effects","оптимизация логики":"logic optimization",
    "интеграция рекламных SDK":"ad SDK integration","сборки Android/iOS":"Android/iOS builds",
    "админ-инструменты":"admin tools",
    "Самая сложная задача":"Toughest challenge",
    "Рефакторинг большого объёма legacy-кода без нарушения существующей логики проекта.":
      "Refactoring a large volume of legacy code without breaking the project's existing logic.",
    "Московская Школа Программистов":"Moscow School of Programmers",
    "3 года и 8 месяцев":"3 years 8 months","IT преподаватель":"IT Teacher",
    "разработка учебных проектов":"developing training projects","ведение групп учеников":"managing student groups",
    "проведение онлайн вебинаров":"hosting online webinars","Zoom-встречи":"Zoom sessions",
    "разработка методических материалов":"developing course materials",
    "Разработка учебного курса по Unity с мультиплеерным взаимодействем на C# с использованием relay-сервера и TCP/UDP протоколов.":
      "Developing a Unity course covering C# multiplayer using a relay server and TCP/UDP protocols.",
    "Образование ":"Education",
    "Московский финансово-юридический университет МФЮА":"Moscow University of Finance and Law (MFUA)",
    "2025 · Бакалавр":"2025 · Bachelor's degree",
    "09.03.02 Информационные системы и технологии":"09.03.02 Information Systems and Technologies",
    "Москва":"Moscow",
    "Московский приборостроительный техникум":"Moscow Instrument-Making College",
    "2021 · Среднее специальное":"2021 · Vocational diploma",
    "Информационные системы (по отраслям)":"Information Systems (by industry)",
    "Сканы и документы об образовании готов предоставить по запросу.":"Scans and diplomas available on request.",
    "Преподавание и Game Jam'ы в цифрах":"Teaching & Game Jams in numbers",
    "лет в Unity":"years in Unity","учеников обучено":"students taught",
    "авторских курса":"original courses","Game Jam'ов":"game jams",
    "Технический стек":"Technical stack",
    "Языки":"Languages","Unity":"Unity","Сеть":"Networking","Backend & Tools":"Backend & Tools",
    "Многопоточность":"Multithreading","Принципы в работе":"Working principles",
    "Сначала рабочий продукт":"Working product first",
    "Работающий MVP всегда лучше идеально спроектированной идеи, которая никогда не была реализована.":
      "A working MVP always beats a perfectly designed idea that never shipped.",
    "KISS важнее сложности":"KISS over complexity",
    "Простой код почти всегда выигрывает у слишком умного.":"Simple code almost always beats overly clever code.",
    "SOLID — ориентир, а не догма":"SOLID as a guide, not dogma",
    "Архитектура должна помогать разработке, а не мешать ей.":"Architecture should help development, not get in its way.",
    "Немного личного":"A bit personal",
    "Люблю игровые истории и сильные эмоциональные произведения. В свободное время экспериментирую с небольшими техническими проектами и делаю аниматики по любимым фандомам в Blender. Сейчас смотрю в сторону Godot и более глубокой 3D-разработки.":
      "I love game narratives and emotionally powerful works. In my free time I experiment with small tech side projects and make animatics for favorite fandoms in Blender. Currently looking into Godot and deeper 3D development.",
    "Игры, которые повлияли":"Games that shaped me",
    "Заинтересованы в сотрудничестве? ":"Interested in working together? ","Напишите.":"Get in touch.",
    "Сейчас открыт к:":"Currently open to:",
    "Unity/C# Developer позиции":"Unity/C# Developer positions",
    "техническому менторству / репетиторству":"technical mentoring / tutoring",
    "разработке игровых инструментов":"game tooling development",
    "Александр Шмелёв — Unity / C# ":"Alexander Shmelev — Unity / C# ",
    "Александр":"Alexander",
    "Шмелёв":"Shmelev",
    "Заинтересованы в сотрудничестве?" : "Have an offer?"
  };

 const RU_LABEL = "🇷🇺", EN_LABEL = "🇬🇧";
  let currentLang = "ru";
  const nodes = []; // {node, ru, en}

  function collect(){
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(n){
        if(!n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        const p = n.parentElement;
        if(!p || ['SCRIPT','STYLE'].includes(p.tagName)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    let n;
    while(n = walker.nextNode()){
      const raw = n.nodeValue;
      const trimmed = raw.trim();
      if(DICT.hasOwnProperty(trimmed)){
        nodes.push({node:n, ru: raw, en: raw.replace(trimmed, DICT[trimmed])});
      }
    }
  }

  function applyLang(lang){
    currentLang = lang;
    nodes.forEach(item => { item.node.nodeValue = lang === 'en' ? item.en : item.ru; });
    document.documentElement.lang = lang;
    const btn = document.getElementById('langToggleBtn');
    if(btn) btn.textContent = lang === 'en' ? RU_LABEL : EN_LABEL;
  }

  function addButton(){
    const nav = document.querySelector('.nav-inner');
    if(!nav) return;
    const btn = document.createElement('button');
    btn.id = 'langToggleBtn';
    btn.type = 'button';
    btn.textContent = EN_LABEL;
    btn.style.cssText = 'font-family:var(--mono,monospace);font-size:12.5px;letter-spacing:0.03em;'+
      'background:transparent;color:var(--paper-dim,#9C9C9E);border:1px solid var(--stroke,#45454A);'+
      'border-radius:6px;padding:6px 12px;cursor:pointer;transition:color .2s ease,border-color .2s ease;';
    btn.addEventListener('mouseenter', () => { btn.style.color = 'var(--node-teal,#4FD8C4)'; btn.style.borderColor = 'var(--node-teal,#4FD8C4)'; });
    btn.addEventListener('mouseleave', () => { btn.style.color = 'var(--paper-dim,#9C9C9E)'; btn.style.borderColor = 'var(--stroke,#45454A)'; });
    btn.addEventListener('click', () => applyLang(currentLang === 'ru' ? 'en' : 'ru'));
    nav.appendChild(btn);
  }

  document.addEventListener('DOMContentLoaded', function(){
    collect();
    addButton();
  });
})();