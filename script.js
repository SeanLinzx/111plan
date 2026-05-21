const translations = {
  zh: {
    nav: {
      home: "主页",
      introduction: "项目介绍",
      themes: "项目主题",
      leads: "专家团队",
    },
    lang: {
      en: "英文",
      zh: "中文",
    },
    hero: {
      title: "人智协同设计 学科创新引领基地",
      subtitle:
        "Human-AI Collaborative Design Center for International Cooperation and Disciplinary Innovation supported by the '111 Center' (B26063)",
    },
    intro: {
      label: "项目介绍",
      body:
        "本项目为期五年，由中国教育部资助，依托湖南大学开展，并与美国、英国及欧洲多所高校建立国际合作关系。该国际合作项目旨在建设国际化创新平台与智库，推动人智协同设计在数字文化创新、可持续与生态设计、技术创新及产业应用等领域的发展。项目将促进人机交互、数字技术、文化体验、媒体计算、生态经济与可持续发展等方向的研究与实践。",
    },
    themes: {
      label: "项目主题",
      items: [
        {
          title: "未来终端与服务设计",
          body:
            "聚焦未来终端从0-1的产品定义与服务模式重塑，构建以前瞻原型设计、智能人因设计、具身智能交互与跨场景服务生态为核心的创新体系。",
        },
        {
          title: "数字文化创新设计",
          body:
            "构建全球文化动态感知、体验与传播一体化的数字文化创新体系，赋能中华文化自主知识体系与文化科技融合范式的全球应用与推广。",
        },
        {
          title: "可持续与生态设计",
          body:
            "聚焦气候变化、生物多样性丧失等可持续核心议题，构建以生态设计理论重构、生物设计方法创新、数智生态可视化决策为核心的跨学科设计范式创新。",
        },
      ],
    },
    leads: {
      label: "专家团队",
      items: [
        {
          name: "季铁 教授",
          affiliation: "湖南大学设计学院，中国",
          bio:
            "季铁教授现任湖南大学设计艺术学院院长，教育部长江特聘教授，第八届设计学学科评议组成员，教育部工业设计专业教学指导分委员会秘书长，数字文化创意智能设计技术文化和旅游部重点实验室主任。",
        },
        {
          name: "Nick Bryan-Kinns 教授",
          affiliation: "伦敦艺术大学创意计算学院，英国",
          bio:
            "Nick Bryan-Kinns教授是英国皇家艺术学会会士（FRSA）、英国计算机学会会士（FBCS）以及美国计算机协会高级会员（SMACM）。他的研究方向包括负责任人工智能、人工智能与艺术、交互设计以及跨文化设计。",
        },
      ],
    },
  },
  en: {
    nav: {
      home: "Home",
      introduction: "Introduction",
      themes: "Themes",
      leads: "Project Leads",
    },
    lang: {
      en: "EN",
      zh: "CH",
    },
    hero: {
      title:
        "Human-AI Collaborative Design Center for International Cooperation and Disciplinary Innovation supported by the '111 Center' (B26063)",
      subtitle: "人智协同设计 学科创新引领基地",
    },
    intro: {
      label: "Introduction",
      body:
        "Five year international collaboration project funded by the Chinese Ministry of Education. Hosted at Hunan University, China, partnering with universities from USA, UK, and Europe. The international collaboration project supports the construction of an international innovation hub and think-tank to enrich human-AI design across digital culture innovation, sustainable and ecological design, technological innovation and industrial applications. Contributing to research in the fields of human-computer interaction, digital technology, cultural experience, media computing, ecological economy, and sustainable development.",
    },
    themes: {
      label: "Themes",
      items: [
        {
          title: "Future Products and Service Design",
          body:
            "Redefining product design frameworks and transforming service design in the era of accelerated AI development. Including building innovative ecosystems centred on forward-looking prototype design, intelligent human-centred design, embodied intelligent interaction, and cross-scenario service design. The objective is to support the development of next-generation interactions, incubation of new innovations, and the upgrading of industrial and commercial services.",
        },
        {
          title: "Digital Cultural Innovation",
          body:
            "Creating an integrated digital cultural innovation design system built upon perception analysis, experience construction, and dissemination transformation. The objective is to address global challenges of misaligned cultural perception, limited immersion in cultural experiences, and difficulties in cultural communication strategies.",
        },
        {
          title: "Sustainable and Ecological Design",
          body:
            "Establishing an ecological design knowledge system oriented toward integrating design practices grounded in biodiversity. This system will incorporate an intelligent ecosystem visualization and decision-making platform, delivering both theoretical support and methodological direction. The objective is to advance sustainable development goals and drive a comprehensive green transformation across socio-economic development.",
        },
      ],
    },
    leads: {
      label: "Project Leads",
      items: [
        {
          name: "Prof. Ji Tie",
          affiliation: "School of Design, Hunan University, China",
          bio:
            "Ji Tie is the Dean of the School of Design at Hunan University, Changjiang Distinguished Professor, a member of the 8th Discipline Appraisal Group for Design Studies under the Academic Degrees Committee of the State Council, Secretary-General of the Industrial Design Teaching Guidance Sub-Committee of the Ministry of Education.",
        },
        {
          name: "Prof. Nick Bryan-Kinns",
          affiliation:
            "Creative Computing Institute, University of the Arts London, UK",
          bio:
            "Nick Bryan-Kinns FRSA FBCS SMACM is a Professor of Creative Computing at the University of the Arts London. He researches Responsible AI, AI and the Arts, Interaction Design, and Cross-Cultural Design.",
        },
      ],
    },
  },
};

const selectors = {
  activeNav: ".nav-link[href^='#']",
  translatable: "[data-i18n]",
  languageButton: "[data-lang-switch]",
};

function getValue(path, lang) {
  return path.split(".").reduce((value, key) => value?.[key], translations[lang]);
}

function setLanguage(lang) {
  document.body.dataset.lang = lang;
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";

  document.querySelectorAll(selectors.translatable).forEach((node) => {
    const value = getValue(node.dataset.i18n, lang);
    if (typeof value === "string") {
      node.textContent = value;
    }
  });

  localStorage.setItem("preferred-language", lang);
}

document.querySelectorAll(selectors.languageButton).forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.langSwitch));
});

document.querySelectorAll(selectors.activeNav).forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", link.getAttribute("href"));
  });
});

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(selectors.activeNav)];

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navLinks.forEach((link) => {
        link.classList.toggle(
          "is-active",
          link.getAttribute("href") === `#${entry.target.id}`
        );
      });
    });
  },
  { rootMargin: "-30% 0px -62% 0px", threshold: 0.01 }
);

sections.forEach((section) => observer.observe(section));

setLanguage(localStorage.getItem("preferred-language") || "zh");
