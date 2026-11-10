---
layout: page
title: "NetWatch – Network Monitoring Dashboard"
description: "A web-based monitoring dashboard integrating FortiGate logs, NetFlow analysis, and FreeRADIUS authentication events."
permalink: /projects/netwatch/
---

<div class="project-page">

  <div class="case-study__header">
    <div class="case-study__badges">
      <span class="badge badge--featured">Featured</span>
      <span class="badge badge--status-inprogress">Work in Progress</span>
    </div>
    <h1 class="case-study__title">NetWatch – Network Monitoring Dashboard</h1>
    <p class="case-study__description">
      A web-based monitoring dashboard for network visibility, integrating FortiGate
      firewall logs, NetFlow traffic analysis, and FreeRADIUS authentication events
      into a unified interface.
    </p>
  </div>

  <!-- ============================================================
       Architecture
       ============================================================ -->
  <div class="case-study__section">
    <h2 class="case-study__section-title">Architecture</h2>
    <p>
      NetWatch is built as a Flask web application with a vanilla JavaScript frontend.
      The backend receives syslog data from FortiGate firewalls and authentication
      events from FreeRADIUS, storing them in SQLite for local querying. The
      frontend polls the Flask API for live data and renders monitoring panels
      without any frontend framework dependency.
    </p>

    <div class="architecture-diagram">
      <svg viewBox="0 0 720 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="NetWatch architecture diagram showing FortiGate and FreeRADIUS feeding into Flask backend with SQLite, and a vanilla JS frontend polling the API">
        <rect x="0" y="0" width="720" height="340" fill="#1a1a1a" rx="8"/>

        <!-- Data sources -->
        <rect x="20" y="30" width="140" height="50" fill="#242424" stroke="#ee2928" stroke-width="1.5" rx="6"/>
        <text x="90" y="60" text-anchor="middle" fill="#f5f5f5" font-family="monospace" font-size="12" font-weight="500">FortiGate</text>

        <rect x="20" y="100" width="140" height="50" fill="#242424" stroke="#8b5cf6" stroke-width="1.5" rx="6"/>
        <text x="90" y="130" text-anchor="middle" fill="#f5f5f5" font-family="monospace" font-size="12" font-weight="500">FreeRADIUS</text>

        <rect x="20" y="170" width="140" height="50" fill="#242424" stroke="#0ea5e9" stroke-width="1.5" rx="6"/>
        <text x="90" y="200" text-anchor="middle" fill="#f5f5f5" font-family="monospace" font-size="12" font-weight="500">NetFlow</text>

        <!-- Flask backend -->
        <rect x="240" y="80" width="180" height="80" fill="#242424" stroke="#e67e22" stroke-width="2" rx="6"/>
        <text x="330" y="110" text-anchor="middle" fill="#f5f5f5" font-family="monospace" font-size="13" font-weight="600">Flask Backend</text>
        <text x="330" y="130" text-anchor="middle" fill="#8c8c8c" font-family="monospace" font-size="11">REST API</text>

        <!-- Connection lines -->
        <line x1="160" y1="55" x2="240" y2="95" stroke="#ee2928" stroke-width="1" opacity="0.5"/>
        <line x1="160" y1="125" x2="240" y2="115" stroke="#8b5cf6" stroke-width="1" opacity="0.5"/>
        <line x1="160" y1="195" x2="240" y2="135" stroke="#0ea5e9" stroke-width="1" opacity="0.5"/>

        <!-- SQLite -->
        <rect x="240" y="200" width="180" height="50" fill="#242424" stroke="#003b57" stroke-width="1.5" rx="6"/>
        <text x="330" y="230" text-anchor="middle" fill="#f5f5f5" font-family="monospace" font-size="12" font-weight="500">SQLite</text>
        <line x1="330" y1="160" x2="330" y2="200" stroke="#003b57" stroke-width="1" opacity="0.5" stroke-dasharray="3,2"/>

        <!-- OpenSearch (WIP) -->
        <rect x="240" y="270" width="180" height="50" fill="#242424" stroke="#005eb8" stroke-width="1.5" rx="6" stroke-dasharray="4,2"/>
        <text x="330" y="300" text-anchor="middle" fill="#8c8c8c" font-family="monospace" font-size="12" font-weight="500">OpenSearch (WIP)</text>
        <line x1="330" y1="250" x2="330" y2="270" stroke="#005eb8" stroke-width="1" opacity="0.3" stroke-dasharray="3,2"/>

        <!-- Frontend -->
        <rect x="500" y="80" width="180" height="80" fill="#242424" stroke="#f7df1e" stroke-width="1.5" rx="6"/>
        <text x="590" y="110" text-anchor="middle" fill="#f5f5f5" font-family="monospace" font-size="13" font-weight="600">Vanilla JS</text>
        <text x="590" y="130" text-anchor="middle" fill="#8c8c8c" font-family="monospace" font-size="11">Dashboard UI</text>

        <line x1="420" y1="120" x2="500" y2="120" stroke="#f7df1e" stroke-width="1.5" opacity="0.5"/>
        <text x="460" y="112" text-anchor="middle" fill="#8c8c8c" font-family="monospace" font-size="9">poll</text>
      </svg>
    </div>
  </div>

  <!-- ============================================================
       Technologies
       ============================================================ -->
  <div class="case-study__section">
    <h2 class="case-study__section-title">Technologies</h2>
    <div class="card__tags">
      <span class="tech-tag" style="--tech-color: #1a1a1a">Flask</span>
      <span class="tech-tag" style="--tech-color: #3776ab">Python</span>
      <span class="tech-tag" style="--tech-color: #f7df1e">JavaScript</span>
      <span class="tech-tag" style="--tech-color: #ee2928">FortiGate</span>
      <span class="tech-tag" style="--tech-color: #0ea5e9">NetFlow</span>
      <span class="tech-tag" style="--tech-color: #005eb8">OpenSearch</span>
      <span class="tech-tag" style="--tech-color: #8b5cf6">FreeRADIUS</span>
      <span class="tech-tag" style="--tech-color: #003b57">SQLite</span>
    </div>
  </div>

  <!-- ============================================================
       Implemented Features
       ============================================================ -->
  <div class="case-study__section">
    <h2 class="case-study__section-title">
      <span class="badge badge--status-implemented">Implemented</span>
    </h2>
    <ul class="case-study__list">
      <li>Flask backend with REST API endpoints for dashboard data</li>
      <li>Vanilla JavaScript frontend with live data polling</li>
      <li>FortiGate syslog ingestion and parsing</li>
      <li>SQLite storage for authentication events from FreeRADIUS</li>
      <li>Basic dashboard layout with traffic summary panels</li>
    </ul>
  </div>

  <!-- ============================================================
       Work in Progress
       ============================================================ -->
  <div class="case-study__section">
    <h2 class="case-study__section-title">
      <span class="badge badge--status-inprogress">Work in Progress</span>
    </h2>
    <ul class="case-study__list">
      <li>NetFlow collector integration and traffic visualization</li>
      <li>OpenSearch indexing for historical log search and analysis</li>
      <li>FreeRADIUS RADIUS accounting event correlation</li>
      <li>Alert rules and notification system</li>
    </ul>
  </div>

  <!-- ============================================================
       Repository Link
       ============================================================ -->
  <div class="case-study__section">
    <h2 class="case-study__section-title">Repository</h2>
    <a href="https://github.com/AboalfazlForooghi2004/NetWatch" target="_blank" rel="noopener noreferrer" class="btn btn--primary" aria-label="View NetWatch on GitHub (opens in new tab)">
      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>
      View on GitHub
    </a>
  </div>

</div>
