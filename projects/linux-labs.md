---
layout: page
title: "Linux Networking Labs"
description: "Practical experiments with Linux routing, BGP, FRRouting, VRF, network namespaces, nftables, and policy routing."
permalink: /projects/linux-labs/
---

<div class="project-page">

  <div class="case-study__header">
    <div class="case-study__badges">
      <span class="badge badge--labs">Learning Lab</span>
      <span class="badge badge--status-inprogress">Ongoing</span>
    </div>
    <h1 class="case-study__title">Linux Networking Labs</h1>
    <p class="case-study__description">
      Practical hands-on experiments with Linux routing, BGP, FRRouting, VRF,
      network namespaces, nftables, and policy routing. These are learning activities
      and documented experiments — not production deployments.
    </p>
  </div>

  <div class="case-study__section">
    <h2 class="case-study__section-title">Technologies</h2>
    <div class="card__tags">
      <span class="tech-tag" style="--tech-color: #f5c518">Linux</span>
      <span class="tech-tag" style="--tech-color: #f59e0b">FRRouting</span>
      <span class="tech-tag" style="--tech-color: #0ea5e9">BGP</span>
      <span class="tech-tag" style="--tech-color: #8b5cf6">VRF</span>
      <span class="tech-tag" style="--tech-color: #10b981">Network Namespaces</span>
      <span class="tech-tag" style="--tech-color: #ef4444">nftables</span>
      <span class="tech-tag" style="--tech-color: #e67e22">Policy Routing</span>
    </div>
  </div>

  <div class="case-study__section">
    <h2 class="case-study__section-title">Experiments</h2>
    <ul class="case-study__list">
      <li>BGP peering between Linux hosts using FRRouting — configuring eBGP sessions, route advertisement, and observing convergence behavior</li>
      <li>Multi-path routing with custom routing tables — creating and managing separate tables with ip route and ip rule</li>
      <li>Network namespace isolation and inter-namespace routing — veth pairs, bridge connectivity, and isolated network stacks</li>
      <li>nftables rule chains for stateful packet filtering — building layered firewall rules with conntrack integration</li>
      <li>VRF-based routing table separation on a single Linux host — binding interfaces to VRF devices and testing route isolation</li>
      <li>Policy-Based Routing with ip rule and ip route — directing traffic based on source address, protocol, or fwmark</li>
    </ul>
  </div>

  <div class="scope-note">
    <strong>Note:</strong> These labs are self-directed learning activities focused on
    understanding Linux networking internals through hands-on experimentation. They
    are documented for technical reference and are not production deployments.
  </div>

</div>
