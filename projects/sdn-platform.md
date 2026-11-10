---
layout: page
title: "SDN & Network Virtualization Platform"
description: "A Linux-based network virtualization project focused on multi-tenant isolation, virtual routing, shared network services, and policy-based traffic forwarding."
permalink: /projects/sdn-platform/
---

<div class="project-page">

  <div class="case-study__header">
    <div class="case-study__badges">
      <span class="badge badge--featured">Featured</span>
      <span class="badge badge--status-inprogress">Active Development</span>
    </div>
    <h1 class="case-study__title">SDN & Network Virtualization Platform</h1>
    <p class="case-study__description">
      A Linux-based network virtualization project focused on multi-tenant isolation,
      virtual routing, shared network services, and policy-based traffic forwarding.
    </p>
  </div>

  <!-- ============================================================
       Architecture
       ============================================================ -->
  <div class="case-study__section">
    <h2 class="case-study__section-title">Architecture</h2>
    <p>
      This project uses native Linux networking components to build a multi-tenant
      virtualized network environment. Each tenant operates in an isolated routing
      domain with overlapping IP address spaces, connected through a shared
      infrastructure that enforces traffic policies at the forwarding level.
    </p>

    <div class="architecture-diagram">
      <svg viewBox="0 0 720 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Architecture diagram showing tenant isolation with Open vSwitch, Linux VRF, network namespaces, and nftables policy enforcement">
        <!-- Background -->
        <rect x="0" y="0" width="720" height="420" fill="#1a1a1a" rx="8"/>

        <!-- OVS Bridge (center) -->
        <rect x="260" y="160" width="200" height="60" fill="#242424" stroke="#0ea5e9" stroke-width="2" rx="6"/>
        <text x="360" y="195" text-anchor="middle" fill="#f5f5f5" font-family="monospace" font-size="13" font-weight="600">Open vSwitch</text>

        <!-- Tenant A box -->
        <rect x="20" y="20" width="200" height="120" fill="#242424" stroke="#e67e22" stroke-width="1.5" rx="8" stroke-dasharray="4,2"/>
        <text x="120" y="42" text-anchor="middle" fill="#e67e22" font-family="sans-serif" font-size="12" font-weight="600">Tenant A (VRF 10)</text>

        <rect x="40" y="55" width="160" height="30" fill="#0f0f0f" stroke="#8b5cf6" stroke-width="1" rx="4"/>
        <text x="120" y="74" text-anchor="middle" fill="#b8b8b8" font-family="monospace" font-size="11">netns: tenant-a</text>

        <rect x="40" y="95" width="160" height="30" fill="#0f0f0f" stroke="#8b5cf6" stroke-width="1" rx="4"/>
        <text x="120" y="114" text-anchor="middle" fill="#b8b8b8" font-family="monospace" font-size="11">VRF: 10.0.0.0/24</text>

        <!-- Tenant B box -->
        <rect x="500" y="20" width="200" height="120" fill="#242424" stroke="#e67e22" stroke-width="1.5" rx="8" stroke-dasharray="4,2"/>
        <text x="600" y="42" text-anchor="middle" fill="#e67e22" font-family="sans-serif" font-size="12" font-weight="600">Tenant B (VRF 20)</text>

        <rect x="520" y="55" width="160" height="30" fill="#0f0f0f" stroke="#8b5cf6" stroke-width="1" rx="4"/>
        <text x="600" y="74" text-anchor="middle" fill="#b8b8b8" font-family="monospace" font-size="11">netns: tenant-b</text>

        <rect x="520" y="95" width="160" height="30" fill="#0f0f0f" stroke="#8b5cf6" stroke-width="1" rx="4"/>
        <text x="600" y="114" text-anchor="middle" fill="#b8b8b8" font-family="monospace" font-size="11">VRF: 10.0.0.0/24 (overlap)</text>

        <!-- Connection lines to OVS -->
        <line x1="120" y1="125" x2="300" y2="160" stroke="#0ea5e9" stroke-width="1.5" opacity="0.6"/>
        <line x1="600" y1="125" x2="420" y2="160" stroke="#0ea5e9" stroke-width="1.5" opacity="0.6"/>

        <!-- nftables layer -->
        <rect x="240" y="260" width="240" height="50" fill="#242424" stroke="#ef4444" stroke-width="1.5" rx="6"/>
        <text x="360" y="290" text-anchor="middle" fill="#f5f5f5" font-family="monospace" font-size="13" font-weight="600">nftables + PBR</text>

        <line x1="360" y1="220" x2="360" y2="260" stroke="#ef4444" stroke-width="1.5" opacity="0.5" stroke-dasharray="3,2"/>

        <!-- Conntrack -->
        <rect x="240" y="340" width="240" height="50" fill="#242424" stroke="#06b6d4" stroke-width="1.5" rx="6"/>
        <text x="360" y="370" text-anchor="middle" fill="#f5f5f5" font-family="monospace" font-size="13" font-weight="600">Conntrack Marks</text>

        <line x1="360" y1="310" x2="360" y2="340" stroke="#06b6d4" stroke-width="1.5" opacity="0.5" stroke-dasharray="3,2"/>

        <!-- Shared services -->
        <rect x="20" y="260" width="180" height="50" fill="#242424" stroke="#10b981" stroke-width="1" rx="6"/>
        <text x="110" y="290" text-anchor="middle" fill="#10b981" font-family="monospace" font-size="12" font-weight="500">Shared Services</text>

        <line x1="200" y1="285" x2="240" y2="285" stroke="#10b981" stroke-width="1" opacity="0.5"/>

        <!-- Internet -->
        <rect x="520" y="260" width="180" height="50" fill="#242424" stroke="#8c8c8c" stroke-width="1" rx="6"/>
        <text x="610" y="290" text-anchor="middle" fill="#8c8c8c" font-family="monospace" font-size="12" font-weight="500">Internet (per-VRF)</text>

        <line x1="480" y1="285" x2="520" y2="285" stroke="#8c8c8c" stroke-width="1" opacity="0.5"/>
      </svg>
    </div>

    <p>
      <strong>Open vSwitch (OVS)</strong> provides the switching fabric, connecting
      tenant network namespaces through virtual ports with VLAN tagging. <strong>Linux VRF</strong>
      devices create separate routing tables per tenant, allowing overlapping IP
      address spaces without conflict. <strong>Network namespaces</strong> isolate
      each tenant's network stack — interfaces, routes, and firewall rules exist
      independently per tenant.
    </p>
    <p>
      <strong>nftables</strong> enforces inter-tenant traffic policies, while
      <strong>Policy-Based Routing (PBR)</strong> directs traffic to the correct
      VRF table based on source, destination, or marking. <strong>Conntrack marks</strong>
      enable stateful per-VRF packet classification, ensuring that return traffic
      follows the correct tenant path through the shared infrastructure.
    </p>
  </div>

  <!-- ============================================================
       Technologies
       ============================================================ -->
  <div class="case-study__section">
    <h2 class="case-study__section-title">Technologies</h2>
    <div class="card__tags">
      <span class="tech-tag" style="--tech-color: #0ea5e9">Open vSwitch</span>
      <span class="tech-tag" style="--tech-color: #8b5cf6">Linux VRF</span>
      <span class="tech-tag" style="--tech-color: #10b981">Network Namespaces</span>
      <span class="tech-tag" style="--tech-color: #f59e0b">VLAN</span>
      <span class="tech-tag" style="--tech-color: #ef4444">nftables</span>
      <span class="tech-tag" style="--tech-color: #e67e22">Policy-Based Routing</span>
      <span class="tech-tag" style="--tech-color: #06b6d4">Conntrack</span>
    </div>
  </div>

  <!-- ============================================================
       Implemented Capabilities
       ============================================================ -->
  <div class="case-study__section">
    <h2 class="case-study__section-title">
      <span class="badge badge--status-implemented">Implemented</span>
    </h2>
    <ul class="case-study__list">
      <li>Multi-tenant network isolation using Linux VRF and network namespaces</li>
      <li>VLAN-based traffic segmentation per tenant on OVS bridges</li>
      <li>Open vSwitch bridge configuration with per-tenant port assignment</li>
      <li>nftables policy rules for inter-tenant traffic control</li>
      <li>Policy-Based Routing with custom routing tables per VRF</li>
      <li>Conntrack marks for stateful per-VRF packet classification</li>
      <li>Overlapping IP address spaces across tenants without conflict</li>
      <li>Shared services accessible from all VRFs with per-tenant internet connectivity</li>
    </ul>
  </div>

  <!-- ============================================================
       Planned / Future Goals
       ============================================================ -->
  <div class="case-study__section">
    <h2 class="case-study__section-title">
      <span class="badge badge--status-planned">Planned</span>
    </h2>
    <ul class="case-study__list">
      <li>Centralized management API for dynamic tenant provisioning</li>
      <li>Automated topology validation and testing framework</li>
      <li>Integration with higher-level orchestration tooling</li>
      <li>Documentation of deployment patterns and configuration templates</li>
    </ul>
  </div>

  <!-- ============================================================
       Scope Note
       ============================================================ -->
  <div class="scope-note">
    <strong>Scope clarification:</strong> This is a Linux-based learning and
    experimentation project focused on understanding network virtualization and
    multi-tenant isolation using native Linux networking components. It is not a
    fully featured centralized SDN controller and not a replacement for production
    platforms such as Calico, Cilium, or Open vSwitch with a full SDN controller
    integration. The goal is engineering exploration and practical understanding
    of VRF-based architecture, not production deployment.
  </div>

</div>
