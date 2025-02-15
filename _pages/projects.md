---
layout: page
title: Research
permalink: /research/
description: 
nav: true
nav_order: 2
display_categories: [Research areas] # [work, fun]
horizontal: false
---

<p style="text-align: justify; margin-bottom: -35px; margin-top: -35px">
   My research focuses on <strong>compact objects</strong>, such as <strong>Neutron Stars</strong> and <strong>Black Holes</strong>, which act as exceptional cosmic laboratories, hosting some of the <strong>most extreme physical conditions</strong> in the universe. These dense remnants provide invaluable opportunities to explore <strong>fundamental physics</strong>, high-energy astrophysical processes, and relativistic phenomena.     Since my <strong>Master’s degree</strong>, I have been actively studying <strong>transient astronomical events</strong>. These include X-ray Binaries (Soft X-ray transients) in thier quiesence, outbursts and active states, Gamma Ray Bursts, fast optical transients and Electromagnetic Counterparts to Gravitational Waves. <strong>Click on the topics</strong> to explore them further!
</p>



<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
