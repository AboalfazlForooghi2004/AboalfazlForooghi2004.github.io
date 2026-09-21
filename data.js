// ===== پروژه‌ها (دوزبانه) =====
// { tag, title: {fa,en}, description: {fa,en}, tech: [...], demoUrl, repoUrl }
const projects = [
  {
    tag: "Enterprise",
    title: { fa: "پیاده‌سازی و پیکربندی شبکه سازمانی", en: "Enterprise Network Implementation & Configuration" },
    description: {
      fa: "طراحی و پیاده‌سازی شبکه سازمانی با سوئیچ‌ها و روترهای سیسکو، تفکیک VLAN، مسیریابی بین‌شبکه‌ای و پیکربندی دسترسی‌ها.",
      en: "Designed and deployed an enterprise network using Cisco switches and routers with VLAN segmentation, inter-VLAN routing and access policies.",
    },
    tech: ["Cisco", "VLAN", "Routing"],
    demoUrl: "#", repoUrl: "#",
  },
  {
    tag: "Monitoring",
    title: { fa: "مانیتورینگ و مدیریت شبکه با Zabbix", en: "Network Monitoring & Management with Zabbix" },
    description: {
      fa: "استقرار سیستم مانیتورینگ Zabbix برای پایش لحظه‌ای تجهیزات شبکه، هشداردهی هوشمند و گزارش‌گیری از وضعیت و پهنای باند لینک‌ها.",
      en: "Deployed Zabbix monitoring for real-time device health, smart alerting and bandwidth/link status reporting across the network.",
    },
    tech: ["Zabbix", "SNMP", "Linux"],
    demoUrl: "#", repoUrl: "#",
  },
  {
    tag: "Security",
    title: { fa: "پیکربندی فایروال و امنیت پیرامونی MikroTik", en: "MikroTik Firewall & Perimeter Security" },
    description: {
      fa: "پیاده‌سازی قواعد فایروال، NAT و فیلترینگ لایه‌ای روی روترهای میکروتیک برای محافظت از شبکه داخلی در برابر ترافیک مخرب.",
      en: "Implemented firewall rules, NAT and layer-based filtering on MikroTik routers to protect the internal network from malicious traffic.",
    },
    tech: ["MikroTik", "Firewall", "NAT"],
    demoUrl: "#", repoUrl: "#",
  },
  {
    tag: "VPN",
    title: { fa: "اتصال امن شعب با VPN Site-to-Site", en: "Secure Branch Connectivity with Site-to-Site VPN" },
    description: {
      fa: "برپایی تونل‌های IPsec و L2TP بین شعب سازمان برای ارتباط امن و رمزنگاری‌شده داده‌ها بین سایت‌های مختلف.",
      en: "Established IPsec and L2TP tunnels between branches for secure, encrypted inter-site data communication.",
    },
    tech: ["IPsec", "L2TP", "VPN"],
    demoUrl: "#", repoUrl: "#",
  },
  {
    tag: "Infrastructure",
    title: { fa: "راه‌اندازی سرویس‌های زیرساخت (DNS / DHCP)", en: "Core Infrastructure Services (DNS / DHCP)" },
    description: {
      fa: "راه‌اندازی و پیکربندی سرویس‌های DNS و DHCP روی سرورهای لینوکسی برای مدیریت متمرکز نام‌ها و تخصیص خودکار IP.",
      en: "Set up and configured DNS and DHCP services on Linux servers for centralized name management and automatic IP allocation.",
    },
    tech: ["DNS", "DHCP", "Linux"],
    demoUrl: "#", repoUrl: "#",
  },
  {
    tag: "Wireless",
    title: { fa: "شبکه بی‌سیم سازمانی با پوشش کامل", en: "Enterprise Wireless Network with Full Coverage" },
    description: {
      fa: "طراحی و استقرار شبکه Wi-Fi سازمانی با نقاط دسترسی مدیریت‌شده، رومینگ یکپارچه و تفکیک شبکه کاربران و تجهیزات.",
      en: "Designed and deployed a managed enterprise Wi-Fi network with seamless roaming and separation of user and device networks.",
    },
    tech: ["Wi-Fi", "AP", "MikroTik"],
    demoUrl: "#", repoUrl: "#",
  },
  {
    tag: "Linux",
    title: { fa: "استقرار و هاردنینگ سرورهای لینوکسی", en: "Linux Server Deployment & Hardening" },
    description: {
      fa: "نصب، پیکربندی و امن‌سازی سرورهای لینوکسی شامل SSH، فایروال، به‌روزرسانی خودکار و پشتیبان‌گیری زمان‌بندی‌شده.",
      en: "Installed, configured and hardened Linux servers including SSH, firewall, automatic updates and scheduled backups.",
    },
    tech: ["Linux", "SSH", "Security"],
    demoUrl: "#", repoUrl: "#",
  },
  {
    tag: "Automation",
    title: { fa: "اتوماسیون پیکربندی شبکه با پایتون", en: "Network Configuration Automation with Python" },
    description: {
      fa: "اسکریپت‌های پایتون (Netmiko / Paramiko) برای پیکربندی گروهی تجهیزات شبکه، بکاپ خودکار تنظیمات و کاهش خطای انسانی.",
      en: "Python scripts (Netmiko / Paramiko) for bulk device configuration, automatic config backups and reduced human error.",
    },
    tech: ["Python", "Netmiko", "SSH"],
    demoUrl: "#", repoUrl: "#",
  },
];

// ===== تجربه‌ها (دوزبانه) =====
const experiences = [
  {
    keyword: { fa: "ابوالفضل فروغی", en: "Abolfazl Foroughi" },
    role: { fa: "متخصص شبکه و زیرساخت", en: "Network & Infrastructure Specialist" },
    period: "",
    paragraphs: {
      fa: [
        "فعال در حوزه شبکه و زیرساخت با تمرکز بر طراحی، پیاده‌سازی و پشتیبانی شبکه‌های سازمانی. تجربه کار عملی با تجهیزات سیسکو و میکروتیک، مسیریابی و سوئیچینگ، فایروال، VPN و سرویس‌های زیرساختی.",
        "علاقه‌مند به امنیت شبکه، مانیتورینگ و اتوماسیون؛ همواره در حال یادگیری فناوری‌های جدید و بهبود پایداری و کارایی شبکه‌هایی که مدیریت می‌کنم.",
        "با رویکرد حل مسئله و دقت بالا، خدمات پشتیبانی فنی، عیب‌یابی و بهینه‌سازی زیرساخت شبکه را ارائه می‌دهم.",
      ],
      en: [
        "Working in networking and infrastructure with a focus on designing, implementing and supporting enterprise networks. Hands-on experience with Cisco and MikroTik equipment, routing & switching, firewalls, VPNs and core infrastructure services.",
        "Passionate about network security, monitoring and automation; always learning new technologies and improving the stability and efficiency of the networks I manage.",
        "With a problem-solving mindset and attention to detail, I provide technical support, troubleshooting and infrastructure optimization.",
      ],
    },
  },
  {
    keyword: { fa: "پروژه‌ها و تجربه عملی", en: "Projects & Hands-on Work" },
    role: { fa: "پیاده‌سازی شبکه‌های واقعی", en: "Real-world Network Deployments" },
    period: "",
    paragraphs: {
      fa: [
        "طراحی و اجرای شبکه‌های LAN/WAN، پیکربندی تجهیزات، امن‌سازی دسترسی‌ها و راه‌اندازی سیستم‌های مانیتورینگ و بکاپ برای محیط‌های واقعی.",
      ],
      en: [
        "Designing and deploying LAN/WAN networks, configuring devices, securing access and setting up monitoring and backup systems for real environments.",
      ],
    },
  },
];

// ===== مهارت‌ها (آیکون + رنگ) =====
const skills = [
  { name: "Cisco",      icon: "fa-solid fa-network-wired",         color: "#1ba0d7" },
  { name: "MikroTik",   icon: "fa-solid fa-router",                color: "#e63946" },
  { name: "Routing",    icon: "fa-solid fa-route",                 color: "#10b981" },
  { name: "Switching",  icon: "fa-solid fa-ethernet",              color: "#f59e0b" },
  { name: "VLAN",       icon: "fa-solid fa-layer-group",            color: "#8b5cf6" },
  { name: "Firewall",   icon: "fa-solid fa-shield-halved",          color: "#ef4444" },
  { name: "VPN",        icon: "fa-solid fa-user-shield",             color: "#06b6d4" },
  { name: "Zabbix",     icon: "fa-solid fa-chart-line",              color: "#d40000" },
  { name: "Wireshark",  icon: "fa-solid fa-magnifying-glass-chart", color: "#3b82f6" },
  { name: "Linux",      icon: "fa-brands fa-linux",                  color: "#f5c518" },
  { name: "Windows",    icon: "fa-brands fa-windows",                color: "#0078d4" },
  { name: "Python",     icon: "fa-brands fa-python",                 color: "#3776ab" },
  { name: "DNS",        icon: "fa-solid fa-server",                  color: "#14b8a6" },
  { name: "DHCP",       icon: "fa-solid fa-address-book",            color: "#a855f7" },
  { name: "TCP/IP",     icon: "fa-solid fa-globe",                   color: "#22c55e" },
  { name: "CCNA",       icon: "fa-solid fa-certificate",             color: "#0ea5e9" },
  { name: "Security",   icon: "fa-solid fa-lock",                    color: "#f43f5e" },
  { name: "IT Support", icon: "fa-solid fa-headset",                 color: "#94a3b8" },
];

// ===== شبکه‌های اجتماعی =====
const socials = {
  github: "https://github.com/AboalfazlForooghi2004",
  linkedin: "https://www.linkedin.com/in/abolfazl-foroughi-85119a22a",
  telegram: "https://t.me/Abolfazl_forughi",
};
