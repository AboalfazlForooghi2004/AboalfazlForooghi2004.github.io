---
layout: home
title: "Abolfazl Foroughi — Network Engineer"
description: "Network Engineer specializing in Linux Networking, SDN, Network Virtualization, and Network Automation."
permalink: /
---

<!-- ============================================================
     HERO SECTION — Full-width centered, strong typography
     ============================================================ -->
<section class="hero" id="hero">
  <div class="container">
    <div class="hero__content">

      <!-- Profile image -->
      <div class="hero__avatar">
        <img src="/assets/images/me-big.png" alt="Abolfazl Foroughi" onerror="this.parentElement.style.display='none'" loading="eager" />
      </div>

      <!-- Text block -->
      <div class="hero__text">
        <p class="hero__eyebrow">Network Engineer</p>
        <h1 class="hero__name">Abolfazl<br>Foroughi</h1>
        <p class="hero__tagline">
          Working with Linux networking, SDN, and network automation.
          Building, breaking, and understanding how packets actually move.
        </p>

        <!-- CTA row -->
        <div class="hero__cta">
          <a href="/projects/" class="btn btn--primary">View Projects</a>
          <a href="/#contact" class="btn btn--secondary">Get in Touch</a>
          <a href="/blog/" class="btn btn--ghost">Blog</a>
        </div>

        <!-- Social links -->
        <div class="hero__socials">
          <a href="https://github.com/AboalfazlForooghi2004" target="_blank" rel="noopener noreferrer" class="hero__social-link" aria-label="GitHub (opens in new tab)">
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/abolfazl-foroughi-85119a22a" target="_blank" rel="noopener noreferrer" class="hero__social-link" aria-label="LinkedIn (opens in new tab)">
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            LinkedIn
          </a>
        </div>
      </div>

    </div>

    <!-- Focus tags row -->
    <div class="hero__focus-row">
      <span class="focus-tag">Linux Networking</span>
      <span class="focus-tag">SDN</span>
      <span class="focus-tag">Network Automation</span>
      <span class="focus-tag">BGP / FRRouting</span>
      <span class="focus-tag">Open vSwitch</span>
      <span class="focus-tag">Linux VRF</span>
      <span class="focus-tag">nftables</span>
      <span class="focus-tag">Infrastructure</span>
    </div>
  </div>
</section>

<!-- ============================================================
     FEATURED PROJECTS
     ============================================================ -->
<section class="section" id="projects">
  <div class="container">
    <div class="section-header">
      <h2 class="section__heading">Projects</h2>
      <a href="/projects/" class="section-header__link">View all →</a>
    </div>
    <div class="projects-grid">
      {% for project in site.data.projects.featured %}
      {% include project-card.html project=project type="featured" %}
      {% endfor %}
    </div>
  </div>
</section>

<!-- ============================================================
     EXPERTISE SUMMARY
     ============================================================ -->
<section class="section section--alt" id="expertise">
  <div class="container">
    <h2 class="section__heading">What I Work With</h2>
    <div class="expertise-grid">
      <div class="card expertise-card">
        <div class="expertise-card__icon">
          <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
        </div>
        <h3 class="card__title">Core Networking</h3>
        <p class="card__text">Routing, switching, BGP, VLANs, firewalls across Cisco, MikroTik, and FortiGate environments.</p>
        <div class="card__tags">
          <span class="tech-tag" style="--tech-color:#1ba0d7">Cisco</span>
          <span class="tech-tag" style="--tech-color:#e63946">MikroTik</span>
          <span class="tech-tag" style="--tech-color:#f59e0b">BGP</span>
          <span class="tech-tag" style="--tech-color:#ee2928">FortiGate</span>
        </div>
      </div>
      <div class="card expertise-card">
        <div class="expertise-card__icon">
          <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <h3 class="card__title">Linux Networking</h3>
        <p class="card__text">VRF, network namespaces, nftables, policy routing, and traffic control directly on Linux.</p>
        <div class="card__tags">
          <span class="tech-tag" style="--tech-color:#f5c518">Linux</span>
          <span class="tech-tag" style="--tech-color:#8b5cf6">VRF</span>
          <span class="tech-tag" style="--tech-color:#ef4444">nftables</span>
          <span class="tech-tag" style="--tech-color:#10b981">Namespaces</span>
        </div>
      </div>
      <div class="card expertise-card">
        <div class="expertise-card__icon">
          <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
        </div>
        <h3 class="card__title">SDN & Virtualization</h3>
        <p class="card__text">Open vSwitch, multi-tenant isolation, PBR, and Conntrack for lab-based network virtualization.</p>
        <div class="card__tags">
          <span class="tech-tag" style="--tech-color:#0ea5e9">Open vSwitch</span>
          <span class="tech-tag" style="--tech-color:#e67e22">PBR</span>
          <span class="tech-tag" style="--tech-color:#06b6d4">Conntrack</span>
        </div>
      </div>
      <div class="card expertise-card">
        <div class="expertise-card__icon">
          <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
        </div>
        <h3 class="card__title">Automation & Monitoring</h3>
        <p class="card__text">Python scripts, Flask dashboards, and NetFlow/FortiGate log analysis for network visibility.</p>
        <div class="card__tags">
          <span class="tech-tag" style="--tech-color:#3776ab">Python</span>
          <span class="tech-tag" style="--tech-color:#1a1a1a">Flask</span>
          <span class="tech-tag" style="--tech-color:#005eb8">OpenSearch</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ============================================================
     OPEN SOURCE
     ============================================================ -->
<section class="section" id="open-source-highlight">
  <div class="container">
    <div class="section-header">
      <h2 class="section__heading">Open Source</h2>
      <a href="/open-source/" class="section-header__link">View all →</a>
    </div>
    <a href="https://github.com/FRRouting/frr/pull/23650" target="_blank" rel="noopener noreferrer" class="card card--interactive os-card" aria-label="FRRouting contribution, opens in new tab">
      <div class="os-card__left">
        <span class="badge badge--opensource">Contribution</span>
        <h3 class="os-card__title">FRRouting</h3>
        <p class="os-card__desc">Documentation improvement to the FRRouting open-source routing suite for Linux — PR #23650.</p>
      </div>
      <div class="os-card__right">
        <span class="os-card__link">View PR →</span>
      </div>
    </a>
  </div>
</section>

<!-- ============================================================
     BLOG — empty state or posts
     ============================================================ -->
<section class="section section--alt" id="articles">
  <div class="container">
    <div class="section-header">
      <h2 class="section__heading">Writing</h2>
      <a href="/blog/" class="section-header__link">Visit blog →</a>
    </div>

    {% if site.posts.size > 0 %}
    <div class="articles-grid">
      {% for post in site.posts limit: 2 %}
      {% include article-card.html %}
      {% endfor %}
    </div>
    {% else %}
    <div class="writing-empty">
      <p class="writing-empty__lead">Technical articles in progress.</p>
      <ul class="writing-empty__topics">
        <li>Understanding Linux VRF for Multi-Tenant Network Isolation</li>
        <li>BGP Established Does Not Mean Traffic Is Forwarding</li>
        <li>Network Namespaces Explained</li>
        <li>Policy-Based Routing on Linux</li>
        <li>Building a Network Monitoring Dashboard</li>
        <li>My First Contribution to FRRouting</li>
      </ul>
    </div>
    {% endif %}
  </div>
</section>

<!-- ============================================================
     CONTACT
     ============================================================ -->
<section class="section" id="contact">
  <div class="container container--narrow">
    <h2 class="section__heading">Get in Touch</h2>
    <p class="section__subtitle">Open to discussing network engineering, Linux networking, SDN, or collaboration.</p>

    <div class="contact-grid">
      <a href="https://github.com/AboalfazlForooghi2004" target="_blank" rel="noopener noreferrer" class="contact-pill" aria-label="GitHub (opens in new tab)">
        <span class="contact-pill__icon contact-pill__icon--github">
          <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>
        </span>
        <span class="contact-pill__info">
          <span class="contact-pill__label">GitHub</span>
          <span class="contact-pill__value">AboalfazlForooghi2004</span>
        </span>
        <svg class="contact-pill__arrow" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M7 7h10v10"/></svg>
      </a>

      <a href="https://www.linkedin.com/in/abolfazl-foroughi-85119a22a" target="_blank" rel="noopener noreferrer" class="contact-pill" aria-label="LinkedIn (opens in new tab)">
        <span class="contact-pill__icon contact-pill__icon--linkedin">
          <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </span>
        <span class="contact-pill__info">
          <span class="contact-pill__label">LinkedIn</span>
          <span class="contact-pill__value">abolfazl-foroughi</span>
        </span>
        <svg class="contact-pill__arrow" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M7 7h10v10"/></svg>
      </a>

      <a href="https://t.me/Abolfazl_forughi" target="_blank" rel="noopener noreferrer" class="contact-pill" aria-label="Telegram (opens in new tab)">
        <span class="contact-pill__icon contact-pill__icon--telegram">
          <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
        </span>
        <span class="contact-pill__info">
          <span class="contact-pill__label">Telegram</span>
          <span class="contact-pill__value">@Abolfazl_forughi</span>
        </span>
        <button class="contact-pill__copy btn--ghost-sm" data-copy="@Abolfazl_forughi" aria-label="Copy Telegram username" onclick="event.preventDefault(); event.stopPropagation();">Copy</button>
      </a>

      <a href="mailto:ab.forooghi2004@gmail.com" class="contact-pill" aria-label="Send email">
        <span class="contact-pill__icon contact-pill__icon--email">
          <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 6 10-6"/></svg>
        </span>
        <span class="contact-pill__info">
          <span class="contact-pill__label">Email</span>
          <span class="contact-pill__value">ab.forooghi2004@gmail.com</span>
        </span>
        <button class="contact-pill__copy btn--ghost-sm" data-copy="ab.forooghi2004@gmail.com" aria-label="Copy email address" onclick="event.preventDefault(); event.stopPropagation();">Copy</button>
      </a>
    </div>
  </div>
</section>
