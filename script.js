// ===== مشخصات تکنولوژی‌ها =====
const TECH_META = {
  Cisco:    { icon: "fa-solid fa-network-wired",       bg: "#1ba0d7" },
  MikroTik: { icon: "fa-solid fa-router",              bg: "#29323c" },
  VLAN:     { icon: "fa-solid fa-layer-group",         bg: "#8b5cf6" },
  Routing:  { icon: "fa-solid fa-route",               bg: "#0ea5e9" },
  Zabbix:   { icon: "fa-solid fa-chart-line",          bg: "#d40000" },
  SNMP:     { icon: "fa-solid fa-satellite-dish",      bg: "#16a34a" },
  Linux:    { icon: "fa-brands fa-linux",              bg: "#111111" },
  Firewall: { icon: "fa-solid fa-shield-halved",       bg: "#ef4444" },
  NAT:      { icon: "fa-solid fa-arrows-turn-to-dots", bg: "#f59e0b" },
  IPsec:    { icon: "fa-solid fa-key",                 bg: "#6366f1" },
  L2TP:     { icon: "fa-solid fa-tunnel",              bg: "#0d9488" },
  VPN:      { icon: "fa-solid fa-user-shield",         bg: "#7c3aed" },
  DNS:      { icon: "fa-solid fa-book-atlas",          bg: "#2563eb" },
  DHCP:     { icon: "fa-solid fa-address-card",        bg: "#059669" },
  "Wi-Fi":  { icon: "fa-solid fa-wifi",               bg: "#e11d48" },
  AP:       { icon: "fa-solid fa-tower-broadcast",     bg: "#db2777" },
  SSH:      { icon: "fa-solid fa-terminal",            bg: "#334155" },
  Security: { icon: "fa-solid fa-lock",               bg: "#dc2626" },
  Python:   { icon: "fa-brands fa-python",             bg: "#3776ab" },
  Netmiko:  { icon: "fa-solid fa-plug-circle-bolt",    bg: "#f97316" },
};

function techBadge(name) {
  const m = TECH_META[name] || { icon: "fa-solid fa-microchip", bg: "#22c55e" };
  return `<span class="tech"><span class="tech-ico" style="background:${m.bg}"><i class="${m.icon}"></i></span>${name}</span>`;
}

// ===== زبان =====
let lang = localStorage.getItem("lang") || "fa";

const i18n = {
  fa: {
    hero_sub: "علاقه‌مند به طراحی و پیاده‌سازی شبکه‌های پایدار، امن و مقیاس‌پذیر با بهترین روش‌های مهندسی.",
    request_cv: "درخواست رزومه",
    projects: "پروژه‌ها",
    about: "درباره من",
    bio_title: "ابوالفضل فروغی — <span class='accent'>متخصص شبکه و زیرساخت</span>",
    bio_text: "متخصص شبکه با تجربه در طراحی، پیاده‌سازی و پشتیبانی شبکه‌های سازمانی؛ از مسیریابی و سوئیچینگ تا فایروال، VPN و مانیتورینگ زیرساخت.",
    contact_hint: "در شبکه‌های اجتماعی پیام بدهید یا ایمیل بزنید.",
    name_overlay: "Abolfazl Foroughi",
    li_label: "لینکدین",
    li_text: "پروفایل حرفه‌ای من در لینکدین.",
    profile_btn: "مشاهده پروفایل",
    gh_label: "گیت‌هاب",
    gh_text: "پروژه‌ها و نمونه‌کارهای من.",
    gh_view_btn: "مشاهده گیت‌هاب",
    contact_me: "تماس با من",
    skills: "مهارت‌ها",
    recent_projects: "پروژه‌های اخیر",
    exp_about: "تجربه و درباره من",
    contact_title: "تماس با من",
    tg_label: "تلگرام",
    tg_text: "سریع‌ترین راه ارتباطی با من.",
    tg_btn: "ارسال پیام",
    email_label: "ایمیل",
    email_text: "ایمیل بزنید، هر وقت که باشم جواب می‌دهم.",
    email_btn: "ارسال ایمیل",
    phone_label: "تلفن",
    phone_text: "برای تماس سریع، هر زمان.",
    call_btn: "تماس",
    copy: "کپی",
    details: "مشاهده جزئیات",
    details_soon: "جزئیات به‌زودی",
    copyright: "© تمامی حقوق محفوظ است — ابوالفضل فروغی",
    home: "خانه",
    toast: "کپی شد ✓",
  },
  en: {
    hero_sub: "Passionate about designing and building reliable, secure and scalable networks with the best engineering practices.",
    request_cv: "Request CV",
    projects: "Projects",
    about: "About Me",
    bio_title: "Abolfazl Foroughi — <span class='accent'>Network & Infrastructure Specialist</span>",
    bio_text: "Network specialist experienced in designing, implementing and supporting enterprise networks; from routing & switching to firewalls, VPNs and infrastructure monitoring.",
    contact_hint: "Message me on social networks or send me an email.",
    name_overlay: "Abolfazl Foroughi",
    li_label: "LINKEDIN",
    li_text: "My professional profile on LinkedIn.",
    profile_btn: "View Profile",
    gh_label: "GITHUB",
    gh_text: "My projects and sample works.",
    gh_view_btn: "View GitHub",
    contact_me: "Contact Me",
    skills: "Skills",
    recent_projects: "RECENT PROJECTS",
    exp_about: "EXPERIENCE AND ABOUT ME",
    contact_title: "CONTACT ME",
    tg_label: "TELEGRAM",
    tg_text: "Fastest way to reach me.",
    tg_btn: "Send Message",
    email_label: "EMAIL",
    email_text: "Prefer email? Drop me a line anytime.",
    email_btn: "Send Email",
    phone_label: "PHONE",
    phone_text: "Reach out for a quick call, wherever you are.",
    call_btn: "Call Now",
    copy: "Copy",
    details: "View Details",
    details_soon: "Details coming soon",
    copyright: "© All Rights Reserved By Abolfazl Foroughi",
    home: "Home",
    toast: "Copied ✓",
  },
};

const t = () => i18n[lang];
const hasRealUrl = (url) => Boolean(url && url !== "#");

function applyLang() {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (t()[key]) el.innerHTML = t()[key];
  });
  document.getElementById("langBtn").textContent = lang === "fa" ? "EN" : "فا";
  renderAll();
}

function renderAll() {
  document.getElementById("skillsGrid").innerHTML = skills
    .map(
      (s) => `
    <div class="skill" style="--sk:${s.color}" title="${s.name}">
      <i class="${s.icon}"></i>
      <span>${s.name}</span>
    </div>`
    )
    .join("");

  document.getElementById("projectsGrid").innerHTML = projects
    .map(
      (p) => {
        const hasDemo = hasRealUrl(p.demoUrl);
        const hasRepo = hasRealUrl(p.repoUrl);
        return `
    <article class="project-card reveal">
      <div class="project-top">
        <span class="badge green-b"><i class="fa-solid fa-network-wired"></i> ${p.tag}</span>
        ${hasRepo ? `<a class="repo" href="${p.repoUrl}" target="_blank" rel="noopener" aria-label="GitHub repository"><i class="fa-brands fa-github"></i></a>` : ""}
      </div>
      <div class="project-thumb" aria-hidden="true">🌐</div>
      <h3>${p.title[lang]}</h3>
      <p class="muted small-text clamp">${p.description[lang]}</p>
      <div class="tech-row">${(p.tech || []).map((x) => techBadge(x)).join("")}</div>
      ${hasDemo
        ? `<a class="details" href="${p.demoUrl}" target="_blank" rel="noopener"><i class="fa-solid fa-arrow-up-right-from-square"></i> ${t().details}</a>`
        : `<span class="details details-disabled"><i class="fa-solid fa-hourglass-half"></i> ${t().details_soon}</span>`}
    </article>`;
      }
    )
    .join("");

  document.getElementById("experienceList").innerHTML = experiences
    .map(
      (e) => `
    <div class="exp-row reveal">
      <h2 class="exp-keyword">${e.keyword[lang]}</h2>
      <div class="card exp-card">
        <h3 class="exp-role">${e.role[lang]}</h3>
        ${e.period ? `<span class="exp-period">${e.period}</span>` : ""}
        ${e.paragraphs[lang].map((x) => `<p class="muted">${x}</p>`).join("")}
      </div>
    </div>`
    )
    .join("");

  document.querySelectorAll(".reveal:not(.visible)").forEach((el) => revealObserver.observe(el));
}

// ===== دکمه تغییر زبان =====
document.getElementById("langBtn").addEventListener("click", () => {
  lang = lang === "fa" ? "en" : "fa";
  localStorage.setItem("lang", lang);
  applyLang();
});

// ===== ناوبری کناری و دکمه بالا =====
const sideLinks = document.querySelectorAll(".side-link");
const linkMap = {};
sideLinks.forEach((a) => (linkMap[a.getAttribute("href").slice(1)] = a));
linkMap.hero = linkMap.top;

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        sideLinks.forEach((a) => a.classList.remove("active"));
        linkMap[entry.target.id]?.classList.add("active");
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);
document.querySelectorAll("section[id]").forEach((s) => navObserver.observe(s));

const toTop = document.getElementById("toTop");
toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
window.addEventListener("scroll", () => {
  toTop.classList.toggle("show", window.scrollY > 400);
});

// ===== دکمه‌های کپی =====
const toast = document.getElementById("toast");
document.querySelectorAll(".copy-btn").forEach((btn) => {
  btn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(btn.dataset.copy);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = btn.dataset.copy;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    toast.textContent = t().toast;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 1800);
  });
});

// ===== انیمیشن ظاهر شدن =====
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll(".reveal:not(.visible)").forEach((el) => revealObserver.observe(el));

// شروع
applyLang();
