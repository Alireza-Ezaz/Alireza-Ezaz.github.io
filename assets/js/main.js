/*======================================================================
  Alireza Ezaz — Portfolio · main.js
======================================================================*/
(function () {
  "use strict";

  /*---------------- Project data ----------------*/
  const LANG = {
    Python:     "#3572A5",
    TypeScript: "#3178c6",
    JavaScript: "#f1e05a",
    "C#":       "#178600",
    Java:       "#b07219",
    C:          "#555555",
    SCSS:       "#c6538c",
    HTML:       "#e34c26",
  };

  const repo = (name) => "https://github.com/Alireza-Ezaz/" + name;

  const PROJECTS = [
    // ---------- AI & Research ----------
    {
      cat: "ai", featured: "ICSE 2026", icon: "bi-diagram-3-fill", lang: "Python",
      title: "TAAF — Trace Abstraction & Analysis Framework",
      desc: "LLM-assisted trace analysis using query-specific temporal knowledge graphs to make large-scale trace data interpretable. M.Sc. thesis, accepted to ICSE 2026.",
      badges: ["Knowledge Graphs", "LLMs", "Research"],
      links: [{ i: "bi-github", url: repo("TAAF") }],
    },
    {
      cat: "ai", featured: "3rd Place 🏆", icon: "bi-scale", lang: "Python",
      title: "CaseLogic",
      desc: "Source-grounded AI legal research assistant for personal-injury workflows. Hybrid Chroma + MiniLM vector retrieval and SQLite FTS5/BM25 search fused via reciprocal rank fusion, with citation-verifying agents.",
      badges: ["RAG", "Claude", "LangGraph", "Firecrawl"],
      links: [{ i: "bi-github", url: repo("CaseLogic") }, { i: "bi-youtube", url: "https://github.com/Alireza-Ezaz/CaseLogic" }],
    },
    {
      cat: "ai", featured: "Live demo", icon: "bi-robot", lang: "Python",
      title: "BakeryPilot",
      desc: "Supply-chain cockpit for bakery operations with a LangGraph multi-agent copilot (Inventory, Procurement, Scheduler, Yield, ESG). Human-in-the-loop action cards, live PixiJS facility map. TMLS Agentic Hackathon.",
      badges: ["LangGraph", "Next.js", "FastAPI", "pgvector"],
      links: [{ i: "bi-globe", url: "https://bakerypilot.ca" }, { i: "bi-youtube", url: "https://youtu.be/xRnEM6mPpQk" }, { i: "bi-github", url: repo("BakeryPilot") }],
    },
    {
      cat: "ai", icon: "bi-envelope-paper", lang: "TypeScript",
      title: "Personal Apply Assistant",
      desc: "Graduate-application assistant that tracks programs, professors, and outreach, with AI-assisted email and résumé drafting. Next.js + FastAPI + Postgres + OpenAI.",
      badges: ["Next.js", "FastAPI", "OpenAI"],
      links: [{ i: "bi-github", url: repo("personal-apply-assistant") }],
    },
    {
      cat: "ai", icon: "bi-cpu", lang: "Python",
      title: "Synthetic Trace Generation with LLMs",
      desc: "Exploring large language models to generate realistic synthetic kernel traces for system-behavior analysis and evaluation.",
      badges: ["LLMs", "Tracing"],
      links: [{ i: "bi-github", url: repo("Synthetic-Trace-Generation-with-LLMs-for-Kernel-Traces") }],
    },
    {
      cat: "ai", icon: "bi-chat-square-dots", lang: "Python",
      title: "LSTM Cyberbullying Detection",
      desc: "Leveraging LSTM networks to detect cyberbullying on Twitter — a deep-learning NLP course project on sequence classification.",
      badges: ["Deep Learning", "NLP", "LSTM"],
      links: [{ i: "bi-github", url: repo("Leveraging-LSTM-Networks-for-Cyberbullying-Detection-on-Twitter") }],
    },
    {
      cat: "ai", featured: "ICPE 2024", icon: "bi-graph-up", lang: "Python",
      title: "Alibaba Microservice Performance Analysis",
      desc: "Critical-path-based analysis of performance variability in Alibaba's production microservice clusters. Published in the ICPE 2024 Data Track.",
      badges: ["Microservices", "Data Analysis"],
      links: [{ i: "bi-github", url: repo("Analyzing-Performance-Variability-in-Alibaba-s-Microservice-Architecture") }],
    },
    {
      cat: "ai", featured: "★ 5", icon: "bi-share-fill", lang: "Python",
      title: "AID-Tool",
      desc: "Dependency-intensity detection of services in cloud systems — the tool built for my B.Sc. thesis on aggregated dependency prediction in large-scale cloud architectures.",
      badges: ["Cloud Systems", "Thesis"],
      links: [{ i: "bi-github", url: repo("AID-Tool") }],
    },
    {
      cat: "ai", icon: "bi-terminal", lang: "Python",
      title: "Trace Analysis",
      desc: "Analyzing system calls collected with the LTTng tracing tool to study and visualize runtime system behavior.",
      badges: ["LTTng", "Systems"],
      links: [{ i: "bi-github", url: repo("Trace-Analysis") }],
    },
    {
      cat: "ai", icon: "bi-grid-3x3", lang: "Python",
      title: "Optimal Edit-Metric Codes",
      desc: "Exhaustive search to prove whether an (n, d) q-ary code with more than M codewords can exist — a combinatorics / coding-theory exploration.",
      badges: ["Algorithms", "Coding Theory"],
      links: [{ i: "bi-github", url: repo("Optimal-Edit-Metric-Codes") }],
    },

    // ---------- Full-Stack & Web ----------
    {
      cat: "fullstack", featured: "Startup", icon: "bi-kanban-fill", lang: "C#",
      title: "SevenTask (7Task)",
      desc: "Full-stack task-management platform I co-founded — Kanban board, calendar, authentication, and chat. Angular + .NET + SQL Server, scaled to 200+ monthly active users.",
      badges: ["Angular", ".NET", "SQL Server", "REST"],
      links: [{ i: "bi-github", url: repo("7Task") }, { i: "bi-youtube", url: "https://github.com/Alireza-Ezaz/7Task" }],
    },
    {
      cat: "fullstack", featured: "Next.js 16", icon: "bi-upc-scan", lang: "TypeScript",
      title: "Barcode Registration System",
      desc: "Register people via a web form, generate a unique scannable barcode, then look them up by scanning with a phone or webcam. Next.js 16 frontend + FastAPI backend.",
      badges: ["Next.js", "FastAPI", "Tailwind"],
      links: [{ i: "bi-github", url: repo("barcode-registration-system") }],
    },
    {
      cat: "fullstack", featured: "★ 2", icon: "bi-buildings", lang: "JavaScript",
      title: "Parsi Hotel Website",
      desc: "A responsive marketing and booking website for Parsi Hotel, built with modern HTML, SCSS, and JavaScript.",
      badges: ["Web", "SCSS"],
      links: [{ i: "bi-github", url: repo("Parsi-Hotel-Website") }],
    },
    {
      cat: "fullstack", icon: "bi-cloud-fill", lang: "TypeScript",
      title: "Cloud Computing Final — Frontend",
      desc: "Angular frontend for a cloud-computing course capstone, paired with a Python backend service.",
      badges: ["Angular", "Cloud"],
      links: [{ i: "bi-github", url: repo("CC-Final-Front") }, { i: "bi-github", url: repo("CC-Final-Back") }],
    },
    {
      cat: "fullstack", icon: "bi-film", lang: "TypeScript",
      title: "MovieFes",
      desc: "A movie-festival web application with a TypeScript frontend and Python backend, built for a cloud-computing assignment.",
      badges: ["TypeScript", "REST"],
      links: [{ i: "bi-github", url: repo("MovieFes") }, { i: "bi-github", url: repo("MovieFesBackEnd") }],
    },
    {
      cat: "fullstack", icon: "bi-calculator", lang: "JavaScript",
      title: "Calculator",
      desc: "A clean, responsive calculator built with vanilla JavaScript — DOM manipulation and event handling fundamentals.",
      badges: ["JavaScript", "DOM"],
      links: [{ i: "bi-github", url: repo("Calculator") }],
    },
    {
      cat: "fullstack", icon: "bi-plus-slash-minus", lang: "JavaScript",
      title: "React Counter",
      desc: "A small React project demonstrating component state and hooks through an interactive counter.",
      badges: ["React", "Hooks"],
      links: [{ i: "bi-github", url: repo("React-counter") }],
    },
    {
      cat: "fullstack", icon: "bi-database-fill-gear", lang: "JavaScript",
      title: "JSON Placeholder",
      desc: "Front-end app consuming a REST API to practice asynchronous data fetching and rendering.",
      badges: ["REST", "Fetch API"],
      links: [{ i: "bi-github", url: repo("Json-Placeholder") }],
    },

    // ---------- Systems & Coursework ----------
    {
      cat: "systems", featured: "★ 3", icon: "bi-house-gear-fill", lang: "Python",
      title: "Smart Office IoT",
      desc: "An IoT system for smart-office automation, integrating sensors and control logic for connected workspace devices.",
      badges: ["IoT", "Embedded"],
      links: [{ i: "bi-github", url: repo("Smart-Office-IOT") }],
    },
    {
      cat: "systems", icon: "bi-grid-3x3-gap-fill", lang: "Java",
      title: "Chess",
      desc: "A fully playable chess game implemented in Java with object-oriented design and move-validation logic.",
      badges: ["Java", "OOP"],
      links: [{ i: "bi-github", url: repo("Chess") }],
    },
    {
      cat: "systems", icon: "bi-music-note-beamed", lang: "Java",
      title: "Jpotify",
      desc: "A Spotify-inspired desktop music player built in Java as the final project for an Advanced Programming course.",
      badges: ["Java", "Swing"],
      links: [{ i: "bi-github", url: repo("Jpotify") }],
    },
    {
      cat: "systems", icon: "bi-shield-fill", lang: "Java",
      title: "Police",
      desc: "A Java lab project modeling a police dispatch/management scenario with object-oriented design.",
      badges: ["Java", "OOP"],
      links: [{ i: "bi-github", url: repo("Police") }],
    },
    {
      cat: "systems", featured: "★ 4", icon: "bi-filetype-c", lang: "C",
      title: "C Programming",
      desc: "Lectures and projects from a foundational C programming course — pointers, memory management, and data structures.",
      badges: ["C", "Fundamentals"],
      links: [{ i: "bi-github", url: repo("C-Programming") }],
    },
    {
      cat: "systems", icon: "bi-calculator-fill", lang: "Python",
      title: "Linear Algebra",
      desc: "Lectures and Python projects from a linear-algebra course — matrix operations, transformations, and numerical methods.",
      badges: ["Python", "Math"],
      links: [{ i: "bi-github", url: repo("Linar-Algebra") }],
    },
    {
      cat: "systems", icon: "bi-database-fill", lang: "HTML",
      title: "Database Systems (MySQL)",
      desc: "Lectures and projects from a database course covering relational modeling, SQL, and MySQL.",
      badges: ["SQL", "MySQL"],
      links: [{ i: "bi-github", url: repo("Database-MySQL-") }],
    },
  ];

  /*---------------- Render projects ----------------*/
  function renderProjects() {
    const grid = document.getElementById("projGrid");
    if (!grid) return;

    grid.innerHTML = PROJECTS.map((p) => {
      const color = LANG[p.lang] || "#888";
      const links = p.links.map((l) =>
        `<a href="${l.url}" target="_blank" rel="noopener" aria-label="link"><i class="bi ${l.i}"></i></a>`
      ).join("");
      const badges = p.badges.map((b) => `<span class="proj-badge">${b}</span>`).join("");
      const ribbon = p.featured ? `<span class="ribbon">${p.featured}</span>` : "";
      return `
        <article class="proj-card" data-cat="${p.cat}">
          ${ribbon}
          <div class="proj-top">
            <div class="proj-icon"><i class="bi ${p.icon}"></i></div>
            <div class="proj-links">${links}</div>
          </div>
          <h4>${p.title}</h4>
          <p class="desc">${p.desc}</p>
          <div class="proj-badges">${badges}</div>
          <div class="proj-meta">
            <span><i class="lang-dot" style="background:${color}"></i> ${p.lang}</span>
          </div>
        </article>`;
    }).join("");
  }

  /*---------------- Filtering ----------------*/
  function initFilters() {
    const filters = document.getElementById("projFilters");
    if (!filters) return;
    filters.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      filters.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const f = btn.dataset.filter;
      document.querySelectorAll(".proj-card").forEach((card) => {
        const show = f === "all" || card.dataset.cat === f;
        card.classList.toggle("hide", !show);
      });
    });
  }

  /*---------------- Navbar: scroll state, active link, mobile ----------------*/
  function initNav() {
    const nav = document.getElementById("navbar");
    const links = document.getElementById("navLinks");
    const toggle = document.getElementById("navToggle");
    const sections = Array.from(document.querySelectorAll("section[id]"));
    const navAnchors = Array.from(document.querySelectorAll(".nav-link"));
    const toTop = document.getElementById("toTop");

    const onScroll = () => {
      nav.classList.toggle("scrolled", window.scrollY > 30);
      if (toTop) toTop.classList.toggle("show", window.scrollY > 500);

      let current = "";
      const pos = window.scrollY + 120;
      for (const s of sections) {
        if (s.offsetTop <= pos) current = s.id;
      }
      navAnchors.forEach((a) =>
        a.classList.toggle("active", a.getAttribute("href") === "#" + current)
      );
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    if (toggle) {
      toggle.addEventListener("click", () => {
        const open = links.classList.toggle("open");
        toggle.innerHTML = open ? '<i class="bi bi-x-lg"></i>' : '<i class="bi bi-list"></i>';
      });
      links.addEventListener("click", (e) => {
        if (e.target.closest("a")) {
          links.classList.remove("open");
          toggle.innerHTML = '<i class="bi bi-list"></i>';
        }
      });
    }
  }

  /*---------------- Animated counters ----------------*/
  function initCounters() {
    const nums = document.querySelectorAll(".num[data-target]");
    if (!nums.length) return;
    const animate = (el) => {
      const target = +el.dataset.target;
      const prefix = el.dataset.prefix || "";
      const suffix = el.dataset.suffix || "";
      const dur = 1400;
      const start = performance.now();
      const step = (now) => {
        const t = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = prefix + Math.round(eased * target) + suffix;
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { animate(en.target); obs.unobserve(en.target); }
      });
    }, { threshold: 0.5 });
    nums.forEach((n) => obs.observe(n));
  }

  /*---------------- Misc ----------------*/
  function initMisc() {
    const y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();

    const toTop = document.getElementById("toTop");
    if (toTop) toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

    // Typed.js subtitle
    const typedEl = document.querySelector(".typed");
    if (typedEl && window.Typed) {
      const items = typedEl.dataset.typedItems.split(",").map((s) => s.trim());
      new Typed(".typed", { strings: items, typeSpeed: 55, backSpeed: 30, backDelay: 1800, loop: true });
    }

    // Mobile-friendly résumé download
    document.querySelectorAll("#resumeBtnNav, #resumeBtnHero").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
          e.preventDefault();
          window.open("assets/resume.pdf", "_blank");
        }
      });
    });
  }

  /*---------------- Boot ----------------*/
  function boot() {
    renderProjects();
    initFilters();
    initNav();
    initCounters();
    initMisc();
    if (window.AOS) AOS.init({ duration: 700, easing: "ease-out-cubic", once: true, offset: 60 });
  }

  document.addEventListener("DOMContentLoaded", boot);

  window.addEventListener("load", () => {
    const pre = document.getElementById("preloader");
    if (pre) pre.classList.add("hide");
    if (window.AOS) AOS.refresh();
  });
})();
