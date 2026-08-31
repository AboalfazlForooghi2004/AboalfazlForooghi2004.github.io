// ===== زبان =====
let lang = localStorage.getItem("lang") || "fa";

const i18n = {
  fa: {
    hero_sub: "علاقه‌مند به طراحی و پیاده‌سازی شبکه‌های پایدار، امن و مقیاس‌پذیر با بهترین روش‌های مهندسی.",
    dl_cv: "دانلود رزومه",
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
    copyright: "© تمامی حقوق محفوظ است — ابوالفضل فروغی",
    home: "خانه",
    toast: "کپی شد ✓",
  },
  en: {
    hero_sub: "Passionate about designing and building reliable, secure and scalable networks with the best engineering practices.",
    dl_cv: "Download CV",
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
    copyright: "© All Rights Reserved By Abolfazl Foroughi",
    home: "Home",
    toast: "Copied ✓",
  },
};

const t = () => i18n[lang];

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
  // مهارت‌ها
  document.getElementById("skillsGrid").innerHTML = skills
    .map(
      (s) => `
    <div class="skill" style="--sk:${s.color}" title="${s.name}">
      <i class="${s.icon}"></i>
      <span>${s.name}</span>
    </div>`
    )
    .join("");

  // پروژه‌ها
  document.getElementById("projectsGrid").innerHTML = projects
    .map(
      (p) => `
    <article class="project-card reveal">
      <div class="project-top">
        <span class="badge green-b"><i class="fa-solid fa-lock-open"></i> ${p.tag}</span>
        ${p.repoUrl && p.repoUrl !== "#" ? `<a class="repo" href="${p.repoUrl}" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i></a>` : ""}
      </div>
      <div class="project-thumb">🌐</div>
      <h3>${p.title[lang]}</h3>
      <p class="muted small-text clamp">${p.description[lang]}</p>
      <div class="tech-row">${(p.tech || []).map((x) => `<span class="tech">${x}</span>`).join("")}</div>
      <a class="details" href="${p.demoUrl || "#"}" target="_blank" rel="noopener">
        <i class="fa-solid fa-arrow-up-right-from-square"></i> ${t().details}
      </a>
    </article>`
    )
    .join("");

  // تجربه‌ها
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

  // عناصر جدید رندرشده را برای انیمیشن ظاهر شدن ثبت کن
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
