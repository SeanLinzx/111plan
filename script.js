const DESIGN = {
  width: 1440,
  height: 3728,
  images: {
    zh: "./111%20CH-2.svg",
    en: "./111%20EN-2.svg",
  },
  alt: {
    zh: "人智协同设计 学科创新引智基地",
    en: "Human-AI Collaborative Design Center for International Cooperation and Disciplinary Innovation supported by the 111 Center",
  },
  hotspots: {
    zh: {
      home: { x: 100, y: 22, w: 80, h: 52 },
      intro: { x: 838, y: 24, w: 96, h: 48 },
      themes: { x: 970, y: 24, w: 98, h: 48 },
      leads: { x: 1104, y: 22, w: 104, h: 50 },
      en: { x: 1242, y: 24, w: 52, h: 48 },
      zh: { x: 1292, y: 24, w: 52, h: 48 },
    },
    en: {
      home: { x: 101, y: 20, w: 84, h: 54 },
      intro: { x: 812, y: 20, w: 148, h: 54 },
      themes: { x: 966, y: 20, w: 104, h: 54 },
      leads: { x: 1076, y: 20, w: 162, h: 54 },
      en: { x: 1248, y: 20, w: 42, h: 54 },
      zh: { x: 1295, y: 20, w: 42, h: 54 },
    },
  },
  scrollY: {
    zh: {
      home: 0,
      intro: 1060,
      themes: 1303,
      leads: 2835,
    },
    en: {
      home: 0,
      intro: 1067,
      themes: 1394,
      leads: 2937,
    },
  },
};

const TEXT_LAYERS = {
  zh: [
    { t: "主页", x: 112, y: 42, w: 36, h: 18, fs: 18 },
    { t: "项目介绍", x: 850, y: 41, w: 72, h: 18, fs: 18 },
    { t: "项目主题", x: 984, y: 41, w: 72, h: 18, fs: 18 },
    { t: "专家团队", x: 1118, y: 38, w: 72, h: 18, fs: 18 },
    { t: "英文", x: 1252, y: 41, w: 36, h: 18, fs: 18 },
    { t: "中文", x: 1297, y: 41, w: 36, h: 18, fs: 18 },
    { t: "人智协同设计\n学科创新引智\n基地", x: 112, y: 538, w: 768, h: 262, fs: 92, lh: 1.15 },
    { t: "Human-AI Collaborative Design Center for International Cooperation and Disciplinary Innovation supported by the ‘111 Center’ (B26063)", x: 876, y: 716, w: 452, h: 208, fs: 42, lh: 1.2 },
    { t: "项目介绍", x: 121, y: 1060, w: 138, h: 45, fs: 34 },
    { t: "本项目为期五年，由中国教育部资助，依托湖南大学开展，并与美国、英国及欧洲多所高校建立国际合作关系。 该国际合作项目旨在建设国际化创新平台与智库，推动人智协同设计在数字文化创新、可持续与生态设计、技术创新及产业应用等领域的发展。项目将促进人机交互、数字技术、文化体验、媒体计算、生态经济与可持续发展等方向的研究与实践。", x: 112, y: 1123, w: 1216, h: 90, fs: 22, lh: 1.45 },
    { t: "项目主题", x: 121, y: 1303, w: 138, h: 45, fs: 34 },
    { t: "01", x: 112, y: 1474, w: 58, h: 72, fs: 72 },
    { t: "未来终端与服务设计", x: 112, y: 1566, w: 306, h: 51, fs: 40 },
    { t: "聚焦未来终端从0-1的产品定义与服务模式重塑，构建以前瞻原型设计、智能人因设计、具身智能交互与跨场景服务生态为核心的创新体系。", x: 112, y: 1634, w: 560, h: 99, fs: 22, lh: 1.45 },
    { t: "02", x: 764, y: 1921, w: 68, h: 72, fs: 72 },
    { t: "数字文化创新设计", x: 764, y: 2013, w: 272, h: 51, fs: 40 },
    { t: "构建全球文化动态感知、体验与传播一体化的数字文化创新体系，赋能中华文化自主知识体系与文化科技融合范式的全球应用与推广。", x: 764, y: 2081, w: 560, h: 99, fs: 22, lh: 1.45 },
    { t: "03", x: 112, y: 2393, w: 68, h: 72, fs: 72 },
    { t: "可持续与生态设计", x: 112, y: 2485, w: 272, h: 51, fs: 40 },
    { t: "聚焦气候变化、生物多样性丧失等可持续核心议题，构建以生态设计理论重构、生物设计方法创新、数智生态可视化决策为核心的跨学科设计范式创新。", x: 112, y: 2553, w: 560, h: 99, fs: 22, lh: 1.45 },
    { t: "专家团队", x: 121, y: 2835, w: 138, h: 45, fs: 34 },
    { t: "季铁教授现任湖南大学设计艺术学院院长，教育部长江特聘教授，第八届设计学学科评议组成员，教育部工业设计专业教学指导分委员会秘书长，数字文化创意智能设计技术文化和旅游部重点实验室主任。", x: 149, y: 3077, w: 495.5, h: 120, fs: 19, lh: 1.45 },
    { t: "季铁 教授", x: 149, y: 3277, w: 495.5, h: 24, fs: 24 },
    { t: "湖南大学设计艺术学院，中国", x: 149, y: 3325, w: 495.5, h: 20, fs: 20 },
    { t: "Nick Bryan-Kinns教授是英国皇家艺术学会会士（FRSA）、英国计算机学会会士（FBCS）以及美国计算机协会高级会员（SMACM）。他的研究方向包括负责任人工智能、人工智能与艺术、交互设计以及跨文化设计。", x: 785, y: 3077, w: 516, h: 120, fs: 19, lh: 1.45 },
    { t: "Nick Bryan-Kinns 教授", x: 795, y: 3277, w: 495.5, h: 24, fs: 24 },
    { t: "伦敦艺术大学创意计算学院，英国", x: 795, y: 3325, w: 495.5, h: 20, fs: 20 },
  ],
  en: [
    { t: "Home", x: 113, y: 38, w: 58, h: 18, fs: 18 },
    { t: "Introduction", x: 827, y: 38, w: 118, h: 18, fs: 18 },
    { t: "Themes", x: 981, y: 38, w: 74, h: 18, fs: 18 },
    { t: "Project Leads", x: 1091, y: 38, w: 131, h: 18, fs: 18 },
    { t: "EN", x: 1258, y: 38, w: 26, h: 18, fs: 18 },
    { t: "CH", x: 1303, y: 38, w: 27, h: 18, fs: 18 },
    { t: "Human-AI Collaborative Design Center for International Cooperation and Disciplinary Innovation supported by the ‘111 Center’ (B26063)", x: 112, y: 550, w: 695, h: 314, fs: 58, lh: 1.2 },
    { t: "人智协同设计\n学科创新引智\n基地", x: 920, y: 781, w: 408, h: 151, fs: 46, lh: 1.1 },
    { t: "Introduction", x: 116, y: 1067, w: 198, h: 45, fs: 34 },
    { t: "Five year international collaboration project funded by the Chinese Ministry of Education. Hosted at Hunan University, China, partnering with universities from USA, UK, and Europe. The international collaboration project supports the construction of an international innovation hub and think-tank to enrich human-AI design across digital culture innovation, sustainable and ecological design, technological innovation and industrial applications. Contributing to research in the fields of human-computer interaction, digital technology, cultural experience, media computing, ecological economy, and sustainable development.", x: 112, y: 1136, w: 1216, h: 168, fs: 24, lh: 1.45 },
    { t: "Themes", x: 116, y: 1394, w: 123, h: 45, fs: 34 },
    { t: "01", x: 112, y: 1527, w: 58, h: 72, fs: 72 },
    { t: "Future Products and Service Design", x: 112, y: 1619, w: 621, h: 48, fs: 46 },
    { t: "Redefining product design frameworks and transforming service design in the era of accelerated AI development. Including building innovative ecosystems centred on forward-looking prototype design, intelligent human-centred design, embodied intelligent interaction, and cross-scenario service design. The objective is to support the development of next‑generation interactions, incubation of new innovations, and the upgrading of industrial and commercial services.", x: 112, y: 1687, w: 560, h: 192, fs: 24, lh: 1.4 },
    { t: "02", x: 754, y: 2000, w: 68, h: 72, fs: 72 },
    { t: "Digital Cultural Innovation Design", x: 754, y: 2092, w: 599, h: 48, fs: 46 },
    { t: "Creating an integrated digital cultural innovation design system built upon perception analysis, experience construction, and dissemination transformation. The objective is to address global challenges of misaligned cultural perception, limited immersion in cultural experiences, and difficulties in cultural communication strategies.", x: 754, y: 2160, w: 596, h: 120, fs: 24, lh: 1.4 },
    { t: "03", x: 112, y: 2452, w: 68, h: 72, fs: 72 },
    { t: "Sustainable and Ecological Design", x: 112, y: 2544, w: 609, h: 48, fs: 46 },
    { t: "Establishing an ecological design knowledge system oriented toward integrating design practices grounded in biodiversity. This system will incorporate an intelligent ecosystem visualization and decision‑making platform, delivering both theoretical support and methodological direction. The objective is to advance sustainable development goals and drive a comprehensive green transformation across socio‑economic development.", x: 112, y: 2612, w: 560, h: 168, fs: 24, lh: 1.4 },
    { t: "Project Leads", x: 116, y: 2937, w: 218, h: 45, fs: 34 },
    { t: "Ji Tie is the Dean of the School of Design at Hunan University, a Changjiang Distinguished Professor, a member of the 8th Discipline Appraisal Group for Design Studies under the Academic Degrees Committee of the State Council, and Secretary-General of the Industrial Design Teaching Guidance Sub-Committee of the Ministry of Education.", x: 144, y: 3185, w: 506, h: 175, fs: 20, lh: 1.45 },
    { t: "Prof. Ji Tie", x: 149, y: 3415, w: 495.5, h: 24, fs: 24 },
    { t: "School of Design, Hunan University, China", x: 149, y: 3463, w: 495.5, h: 20, fs: 20 },
    { t: "Nick Bryan-Kinns FRSA FBCS SMACM is a Professor of Creative Computing at the University of the Arts London. He researches Responsible AI, AI and the Arts, Interaction Design, and Cross-Cultural Design.", x: 795, y: 3185, w: 495.5, h: 150, fs: 20, lh: 1.45 },
    { t: "Prof. Nick Bryan-Kinns", x: 795, y: 3415, w: 495.5, h: 24, fs: 24 },
    { t: "Creative Computing Institute, University of the Arts London, UK", x: 795, y: 3463, w: 495.5, h: 40, fs: 20, lh: 1.2 },
  ],
};

const page = document.getElementById("figmaPage");
const image = document.getElementById("pageImage");
const textLayer = document.getElementById("textLayer");
const hotspots = [...document.querySelectorAll(".hotspot")];
let currentLanguage = localStorage.getItem("preferred-language") || "zh";

function designToPercent(rect) {
  return {
    left: `${(rect.x / DESIGN.width) * 100}%`,
    top: `${(rect.y / DESIGN.height) * 100}%`,
    width: `${(rect.w / DESIGN.width) * 100}%`,
    height: `${(rect.h / DESIGN.height) * 100}%`,
  };
}

function updateScale() {
  const scale = scaleFactor();
  page.style.setProperty("--page-scale", scale);
  textLayer.querySelectorAll(".selectable-text").forEach((node) => {
    node.style.fontSize = `${Number(node.dataset.fs) * scale}px`;
  });
}

function applyHotspots() {
  hotspots.forEach((hotspot) => {
    const action = hotspot.dataset.action;
    const key = action === "lang" ? hotspot.dataset.lang : hotspot.dataset.target;
    const rect = DESIGN.hotspots[currentLanguage][key];
    Object.assign(hotspot.style, designToPercent(rect));
  });
}

function renderTextLayer() {
  textLayer.replaceChildren();

  TEXT_LAYERS[currentLanguage].forEach((layer) => {
    const node = document.createElement("div");
    node.className = "selectable-text";
    node.textContent = layer.t;
    node.lang = currentLanguage === "zh" ? "zh-CN" : "en";
    node.dataset.fs = layer.fs;
    node.style.fontSize = `${layer.fs * scaleFactor()}px`;
    node.style.lineHeight = layer.lh || 1.2;
    Object.assign(node.style, designToPercent(layer));
    textLayer.appendChild(node);
  });
}

function scaleFactor() {
  return page.getBoundingClientRect().width / DESIGN.width;
}

function scrollToTarget(target) {
  const y = DESIGN.scrollY[currentLanguage][target] || 0;
  const top = page.getBoundingClientRect().top + window.scrollY + y * scaleFactor();
  window.scrollTo({ top, behavior: "smooth" });
}

function setLanguage(language) {
  const previousScale = scaleFactor();
  const pageTop = page.getBoundingClientRect().top + window.scrollY;
  const designScrollY = Math.max(0, (window.scrollY - pageTop) / previousScale);

  currentLanguage = language;
  localStorage.setItem("preferred-language", language);
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  image.src = DESIGN.images[language];
  image.alt = DESIGN.alt[language];
  applyHotspots();
  renderTextLayer();

  requestAnimationFrame(() => {
    updateScale();
    const nextTop = page.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: nextTop + designScrollY * scaleFactor(), behavior: "auto" });
  });
}

hotspots.forEach((hotspot) => {
  hotspot.addEventListener("click", () => {
    if (hotspot.dataset.action === "lang") {
      setLanguage(hotspot.dataset.lang);
      return;
    }

    scrollToTarget(hotspot.dataset.target);
  });
});

window.addEventListener("resize", () => {
  updateScale();
  applyHotspots();
});

setLanguage(currentLanguage);
