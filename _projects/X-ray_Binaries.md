---
layout: page
title: X-ray Binaries 
description: |
  <p>Probing the Physics of accretion by compact objects</p>
  <p style="font-size: smaller; color: gray;"><em>Image credits - <a href='https://svs.gsfc.nasa.gov/11804'>NASA's Goddard Space Flight Center</a></em></p>
img: assets/img/XRB.gif
importance: 1
category: Research
related_publications: true
---

Every project has a beautiful feature showcase page.
It's easy to include images in a flexible 3-column grid format.
Make your photos 1/3, 2/3, or full width.

To give your project a background in the portfolio page, just add the img tag to the front matter like so:

    ---
    layout: page
    title: project
    description: a project with a background image
    img: /assets/img/12.jpg
    ---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

You can also put regular text between your rows of images, even citations {% cite einstein1950meaning %}.
Say you wanted to write a bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
```

{% endraw %}

<p style="text-align: justify;">
 <title>X-ray Binaries: Probing the Physics of Compact Objects</title>

<body>

    <h1>X-ray Binaries: Probing the Physics of Compact Objects</h1>
    <p>
        My research centers on <strong>X-ray binaries (XRBs)</strong>, systems in which a compact object—either a <strong>neutron star (NS)</strong> or a <strong>black hole (BH)</strong>—accretes matter from a companion star. These systems serve as natural laboratories for studying extreme physics, from the behavior of matter under intense gravitational fields to the interaction of radiation with highly energetic plasmas. In an X-ray binary, the companion star, typically a low- or high-mass stellar object, transfers material onto the compact object through either <strong>Roche-lobe overflow</strong> or <strong>stellar winds</strong>. As this matter spirals inward, it forms an <strong>accretion disk</strong>, heating up to millions of degrees and emitting copious amounts of X-rays. This radiation is modulated by a variety of physical processes, including <strong>thermonuclear bursts</strong>, <strong>Quasi-Periodic Oscillations (QPOs)</strong>, and variations in the accretion flow.
    </p>
    <p>
        Using space-based X-ray observatories such as <strong>AstroSat</strong> and <strong>NICER</strong>, I focus on the study of <strong>X-ray variability</strong>, especially during periods of heightened activity known as <strong>outbursts</strong>. These outbursts often signal a dramatic increase in the accretion rate, leading to significant changes in the X-ray luminosity and spectral characteristics. In the case of <strong>neutron stars</strong>, my research specifically explores <strong>thermonuclear bursts</strong>, which are sudden and violent releases of energy on the surface of the neutron star, triggered by the ignition of accreted hydrogen or helium. These bursts provide a unique window into the equation of state of ultra-dense matter, enabling us to probe the fundamental properties of neutron stars, including their mass, radius, and internal structure.
    </p>
    <p>
        Central to my work is the investigation of <strong>rapid X-ray variability</strong>, particularly <strong>QPOs</strong> and <strong>Kilohertz QPOs</strong>, which arise from processes occurring in the inner accretion disk near the compact object. These oscillations provide a powerful diagnostic tool for understanding the behavior of matter in strong gravitational fields, and can help constrain models of accretion physics, the geometry of the system, and even the spin rates of neutron stars. <strong>Kilohertz QPOs</strong>, in particular, are of great interest as they are thought to originate from regions close to the <strong>innermost stable circular orbit (ISCO)</strong> of the compact object, offering a direct probe of strong-field general relativity.
    </p>
    <p>
        In addition to X-ray observations, I have recently started monitoring <strong>X-ray binaries undergoing outbursts</strong> using the <strong>GROWTH India Telescope</strong>, expanding my research to the optical regime. By combining X-ray and optical data, I aim to provide a more comprehensive understanding of the accretion processes, the interaction between the disk and the companion star, and the broader implications for the physics of compact objects.
    </p>

</body>

<!-- My research centers on X-ray binaries (XRBs), systems in which a compact object—either a neutron star (NS) or a black hole (BH)—accretes matter from a companion star. These systems serve as natural laboratories for studying extreme physics, from the behavior of matter under intense gravitational fields to the interaction of radiation with highly energetic plasmas. In an X-ray binary, the companion star, typically a low- or high-mass stellar object, transfers material onto the compact object through either Roche-lobe overflow or stellar winds. As this matter spirals inward, it forms an accretion disk, heating up to millions of degrees and emitting copious amounts of X-rays. This radiation is modulated by a variety of physical processes, including thermonuclear bursts, Quasi-Periodic Oscillations (QPOs), and variations in the accretion flow.

Using space-based X-ray observatories such as AstroSat and NICER, I focus on the study of X-ray variability, especially during periods of heightened activity known as outbursts. These outbursts often signal a dramatic increase in the accretion rate, leading to significant changes in the X-ray luminosity and spectral characteristics. In the case of neutron stars, my research specifically explores thermonuclear bursts, which are sudden and violent releases of energy on the surface of the neutron star, triggered by the ignition of accreted hydrogen or helium. These bursts provide a unique window into the equation of state of ultra-dense matter, enabling us to probe the fundamental properties of neutron stars, including their mass, radius, and internal structure.

Central to my work is the investigation of rapid X-ray variability, particularly QPOs and Kilohertz QPOs, which arise from processes occurring in the inner accretion disk near the compact object. These oscillations provide a powerful diagnostic tool for understanding the behavior of matter in strong gravitational fields, and can help constrain models of accretion physics, the geometry of the system, and even the spin rates of neutron stars. Kilohertz QPOs, in particular, are of great interest as they are thought to originate from regions close to the innermost stable circular orbit (ISCO) of the compact object, offering a direct probe of strong-field general relativity.

In addition to X-ray observations, I have recently started monitoring X-ray binaries undergoing outbursts using the GROWTH India Telescope, expanding my research to the optical regime. By combining X-ray and optical data, I aim to provide a more comprehensive understanding of the accretion processes, the interaction between the disk and the companion star, and the broader implications for the physics of compact objects. -->
</p>