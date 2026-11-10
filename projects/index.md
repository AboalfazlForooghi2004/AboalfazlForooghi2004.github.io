---
layout: page
title: "Projects"
description: "Engineering projects including SDN & Network Virtualization Platform, NetWatch monitoring dashboard, and Linux Networking Labs."
permalink: /projects/
---

<div class="project-page">

  <h2 class="section__heading">Featured Projects</h2>
  <div class="projects-grid">
    {% for project in site.data.projects.featured %}
    {% include project-card.html project=project type="featured" %}
    {% endfor %}
  </div>

  <h2 class="section__heading" style="margin-top: 4rem;">Technical Labs</h2>
  <div class="labs-grid">
    {% for project in site.data.projects.labs %}
    {% include project-card.html project=project type="labs" %}
    {% endfor %}
  </div>

</div>
