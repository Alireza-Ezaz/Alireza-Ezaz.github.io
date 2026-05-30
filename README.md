# Alireza Ezaz — Portfolio

A bold, modern single-page portfolio showcasing Alireza Ezaz's projects, professional
experience, publications, talks, and education. Deployed via GitHub Pages at
**[alireza-ezaz.github.io](https://alireza-ezaz.github.io)**.

## Highlights

- **Animated hero** with typed subtitle, gradient text, and a glowing portrait.
- **Animated stat counters** (responses evaluated, papers, users, hackathon finish).
- **Filterable project grid** — every notable GitHub repo, grouped into
  *AI & Research*, *Full-Stack & Web*, and *Systems & Coursework*.
- **Experience & education timelines** with company/university logos.
- **Publications, awards, talks** (including the Tracing Summit 2025 video) and volunteering.
- Dark glassmorphism theme, ambient gradient blobs, scroll-reveal animations, fully responsive.

## Tech

- **HTML5 + CSS3** — custom dark theme driven by CSS variables (no Bootstrap).
- **Vanilla JavaScript** — projects render from a single data array in
  [`assets/js/main.js`](assets/js/main.js); navigation, filtering, and counters are dependency-free.
- **AOS** (scroll animations), **Typed.js** (hero subtitle), **Bootstrap Icons**, **Google Fonts (Poppins)**.

## Structure

```text
index.html              # All page markup
assets/css/style.css    # Theme + layout
assets/js/main.js       # Project data, rendering, nav, filters, counters
assets/img/             # Profile + company/university logos
assets/resume.pdf       # Downloadable résumé
```

## Editing content

- **Projects** — add or edit objects in the `PROJECTS` array in `assets/js/main.js`
  (`cat` controls the filter group; `featured` adds a corner ribbon).
- **Experience / education / publications / talks** — edit the corresponding
  `<section>` in `index.html`.
- **Theme colors** — adjust the CSS variables under `:root` in `assets/css/style.css`.

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit <http://localhost:8000>
```

## Deployment

Pushing to the `main` branch of the `Alireza-Ezaz.github.io` repository publishes
automatically to GitHub Pages.

## Contact

- **Email**: ezaz.sar@gmail.com
- **LinkedIn**: [Alireza Ezaz](https://www.linkedin.com/in/s-alireza-ezaz/)
- **GitHub**: [Alireza-Ezaz](https://github.com/Alireza-Ezaz)
