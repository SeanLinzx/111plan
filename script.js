const DESIGN = {
  width: 1440,
  height: 3728,
  images: {
    zh: "./111%20CH.svg",
    en: "./111%20EN.svg",
  },
  alt: {
    zh: "人智协同设计 学科创新引领基地",
    en: "Human-AI Collaborative Design Center for International Cooperation and Disciplinary Innovation supported by the 111 Center",
  },
  hotspots: {
    zh: {
      home: { x: 105, y: 22, w: 72, h: 52 },
      intro: { x: 836, y: 24, w: 98, h: 46 },
      themes: { x: 968, y: 24, w: 98, h: 46 },
      leads: { x: 1104, y: 22, w: 104, h: 48 },
      en: { x: 1242, y: 24, w: 52, h: 46 },
      zh: { x: 1294, y: 24, w: 52, h: 46 },
    },
    en: {
      home: { x: 101, y: 21, w: 84, h: 54 },
      intro: { x: 812, y: 20, w: 148, h: 54 },
      themes: { x: 966, y: 20, w: 104, h: 54 },
      leads: { x: 1076, y: 20, w: 162, h: 54 },
      en: { x: 1248, y: 22, w: 42, h: 50 },
      zh: { x: 1295, y: 22, w: 42, h: 50 },
    },
  },
  scrollY: {
    zh: {
      home: 0,
      intro: 1064,
      themes: 1303,
      leads: 2919,
    },
    en: {
      home: 0,
      intro: 1072,
      themes: 1394,
      leads: 3016,
    },
  },
};

const page = document.getElementById("figmaPage");
const image = document.getElementById("pageImage");
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

function applyHotspots() {
  hotspots.forEach((hotspot) => {
    const action = hotspot.dataset.action;
    const key = action === "lang" ? hotspot.dataset.lang : hotspot.dataset.target;
    const rect = DESIGN.hotspots[currentLanguage][key];
    Object.assign(hotspot.style, designToPercent(rect));
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

  requestAnimationFrame(() => {
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

window.addEventListener("resize", applyHotspots);
setLanguage(currentLanguage);
