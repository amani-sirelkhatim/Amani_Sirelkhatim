(function () {
  "use strict";

  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

  /* ---------------------------------------------------------
     Mobile nav
  --------------------------------------------------------- */
  const navToggle = $("#navToggle");
  const mobileMenu = $("#mobileMenu");
  function closeMenu() {
    navToggle.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    mobileMenu.classList.remove("is-open");
    setTimeout(() => mobileMenu.classList.remove("is-visible"), 220);
  }
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    if (isOpen) {
      mobileMenu.classList.add("is-visible");
      requestAnimationFrame(() => mobileMenu.classList.add("is-open"));
    } else {
      closeMenu();
    }
  });
  $$("#mobileMenu a").forEach((a) => a.addEventListener("click", closeMenu));

  /* ---------------------------------------------------------
     Footer year
  --------------------------------------------------------- */
  $("#footerYear").textContent = `© ${new Date().getFullYear()}`;

  /* ---------------------------------------------------------
     Skills
  --------------------------------------------------------- */
  const skillsGrid = $("#skillsGrid");
  SITE_DATA.skills.forEach((cat) => {
    const el = document.createElement("div");
    el.className = "skill-cat reveal";
    el.innerHTML = `
      <h3>${cat.category}</h3>
      <span class="skill-sub">${cat.sub}</span>
      <div class="skill-tags">
        ${cat.items.map((i) => `<span class="tag">${i}</span>`).join("")}
      </div>
    `;
    skillsGrid.appendChild(el);
  });

  /* ---------------------------------------------------------
     Experience timeline
  --------------------------------------------------------- */
  const expTimeline = $("#experienceTimeline");
  SITE_DATA.experience.forEach((item) => {
    const el = document.createElement("div");
    el.className = `timeline-item reveal ${item.accent === "amber" ? "is-amber" : ""}`;
    el.innerHTML = `
      <div class="timeline-date">${item.date}</div>
      <h3>${item.title}</h3>
      <div class="timeline-org">${item.org}</div>
      <div class="timeline-desc">
        <ul>${item.points.map((p) => `<li>${p}</li>`).join("")}</ul>
      </div>
      ${item.badge ? `<span class="timeline-badge">${item.badge}</span>` : ""}
    `;
    expTimeline.appendChild(el);
  });

  /* ---------------------------------------------------------
     Education timeline
  --------------------------------------------------------- */
  const eduTimeline = $("#educationTimeline");
  SITE_DATA.education.forEach((item) => {
    const el = document.createElement("div");
    el.className = `timeline-item reveal ${item.accent === "amber" ? "is-amber" : ""}`;
    el.innerHTML = `
      <div class="timeline-date">${item.date}</div>
      <h3>${item.degree}</h3>
      ${item.org ? `<div class="timeline-org">${item.org}</div>` : ""}
      <div class="edu-degree">${item.detail}</div>
    `;
    eduTimeline.appendChild(el);
  });

  /* ---------------------------------------------------------
     Projects grid
  --------------------------------------------------------- */
  const projectGrid = $("#projectGrid");

  function projectImgPath(project, file) {
    return `assets/img/projects/${project.id}/${file}`;
  }

  function renderProjects(filter) {
    projectGrid.innerHTML = "";
    const list = SITE_DATA.projects.filter(
      (p) => filter === "all" || p.filter === filter
    );
    list.forEach((project) => {
      const card = document.createElement("article");
      card.className = "project-card reveal";
      card.tabIndex = 0;
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", `Open case study: ${project.title}`);

      const thumbs = project.gallery.slice(0, 2);
      let thumbHtml;
      if (thumbs.length === 0) {
        thumbHtml = `<div class="project-thumb no-shots"><span>${project.category}</span></div>`;
      } else {
        thumbHtml = `<div class="project-thumb">
          ${thumbs
            .map(
              (g) =>
                `<img src="${projectImgPath(project, g.file)}" alt="${g.caption}" loading="lazy">`
            )
            .join("")}
        </div>`;
      }

      card.innerHTML = `
        ${thumbHtml}
        <div class="project-body">
          <span class="project-cat">${project.category}</span>
          <h3>${project.title}</h3>
          <p class="project-summary">${project.summary}</p>
          <div class="project-tags">
            ${project.tech.slice(0, 4).map((t) => `<span class="tag">${t}</span>`).join("")}
          </div>
          <span class="project-cta">View case study <span class="arrow">→</span></span>
        </div>
      `;

      card.addEventListener("click", () => openProjectModal(project));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openProjectModal(project);
        }
      });

      projectGrid.appendChild(card);
    });
    observeReveals();
  }

  $$(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      $$(".filter-btn").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      renderProjects(btn.dataset.filter);
    });
  });

  renderProjects("all");

  /* ---------------------------------------------------------
     Project modal
  --------------------------------------------------------- */
  const modalOverlay = $("#projectModal");
  let currentProject = null;

  function openProjectModal(project) {
    currentProject = project;
    $("#modalCat").textContent = project.category;
    $("#modalTitle").textContent = project.title;
    $("#modalRole").textContent = project.role;
    $("#modalOverview").textContent = project.overview;
    $("#modalContribution").textContent = project.contribution;
    $("#modalFeatures").innerHTML = project.features
      .map((f) => `<li>${f}</li>`)
      .join("");
    $("#modalTags").innerHTML = project.tech
      .map((t) => `<span class="tag">${t}</span>`)
      .join("");

    const gallerySection = $("#modalGallerySection");
    const galleryEl = $("#modalGallery");
    galleryEl.className = `modal-gallery ${project.galleryStyle === "landscape" ? "landscape" : ""}`;
    if (project.gallery.length === 0) {
      gallerySection.style.display = "none";
    } else {
      gallerySection.style.display = "";
      galleryEl.innerHTML = project.gallery
        .map(
          (g, i) =>
            `<button data-index="${i}" aria-label="View screenshot: ${g.caption}">
               <img src="${projectImgPath(project, g.file)}" alt="${g.caption}" loading="lazy">
             </button>`
        )
        .join("");
      $$("button", galleryEl).forEach((btn) =>
        btn.addEventListener("click", () =>
          openLightbox(project, parseInt(btn.dataset.index, 10))
        )
      );
    }

    modalOverlay.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  function closeProjectModal() {
    modalOverlay.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  $("#modalClose").addEventListener("click", closeProjectModal);
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeProjectModal();
  });

  /* ---------------------------------------------------------
     Lightbox
  --------------------------------------------------------- */
  const lightbox = $("#lightbox");
  const lightboxImg = $("#lightboxImg");
  let lightboxIndex = 0;

  function openLightbox(project, index) {
    lightboxIndex = index;
    updateLightbox(project);
    lightbox.classList.add("is-open");
  }
  function updateLightbox(project) {
    const shot = project.gallery[lightboxIndex];
    lightboxImg.src = projectImgPath(project, shot.file);
    lightboxImg.alt = shot.caption;
  }
  function closeLightbox() {
    lightbox.classList.remove("is-open");
  }
  $("#lightboxClose").addEventListener("click", closeLightbox);
  $("#lightboxPrev").addEventListener("click", () => {
    if (!currentProject) return;
    lightboxIndex =
      (lightboxIndex - 1 + currentProject.gallery.length) %
      currentProject.gallery.length;
    updateLightbox(currentProject);
  });
  $("#lightboxNext").addEventListener("click", () => {
    if (!currentProject) return;
    lightboxIndex = (lightboxIndex + 1) % currentProject.gallery.length;
    updateLightbox(currentProject);
  });
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (lightbox.classList.contains("is-open")) closeLightbox();
      else if (modalOverlay.classList.contains("is-open")) closeProjectModal();
    }
    if (lightbox.classList.contains("is-open") && currentProject) {
      if (e.key === "ArrowRight") $("#lightboxNext").click();
      if (e.key === "ArrowLeft") $("#lightboxPrev").click();
    }
  });

  /* ---------------------------------------------------------
     Contact links
  --------------------------------------------------------- */
  const contactLinks = $("#contactLinks");
  const c = SITE_DATA.contact;
  const links = [
    { k: "Email", v: c.email, href: `mailto:${c.email}` },
    { k: "LinkedIn", v: "View profile", href: c.linkedin },
    { k: "GitHub", v: "View profile", href: c.github },
  ];
  contactLinks.innerHTML = links
    .map(
      (l) => `
    <a class="contact-link" href="${l.href}" target="_blank" rel="noopener">
      <span class="k">${l.k}</span>
      <span class="v">${l.v}</span>
    </a>`
    )
    .join("");

  /* ---------------------------------------------------------
     Scroll reveal (single restrained pattern, respects
     prefers-reduced-motion via CSS transition-duration override)
  --------------------------------------------------------- */
  function observeReveals() {
    const items = $$(".reveal:not(.is-observed)");
    if (!("IntersectionObserver" in window)) {
      items.forEach((i) => i.classList.add("is-shown"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-shown");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    items.forEach((i) => {
      i.classList.add("is-observed");
      io.observe(i);
    });
  }
  observeReveals();

  /* ---------------------------------------------------------
     Hero SVG — one orchestrated draw-in on load
  --------------------------------------------------------- */
  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  if (!prefersReduced) {
    const svg = $("#heroSvg");
    if (svg) {
      const lines = $$("line", svg);
      lines.forEach((line, i) => {
        const len =
          Math.hypot(
            line.x2.baseVal.value - line.x1.baseVal.value,
            line.y2.baseVal.value - line.y1.baseVal.value
          ) || 1;
        line.style.strokeDasharray = String(len);
        line.style.strokeDashoffset = String(len);
        line.style.transition = `stroke-dashoffset 0.9s cubic-bezier(.4,0,.2,1) ${i * 60}ms`;
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            line.style.strokeDashoffset = "0";
          });
        });
      });
      const nodes = $$(".node-draw circle", svg);
      nodes.forEach((n, i) => {
        n.style.opacity = "0";
        n.style.transform = "scale(0)";
        n.style.transformOrigin = `${n.getAttribute("cx")}px ${n.getAttribute("cy")}px`;
        n.style.transition = `opacity 0.4s ease ${500 + i * 70}ms, transform 0.4s cubic-bezier(.34,1.56,.64,1) ${500 + i * 70}ms`;
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            n.style.opacity = "1";
            n.style.transform = "scale(1)";
          });
        });
      });
    }
  }
})();
const navLinks = document.querySelectorAll(".nav-links a");
const homeLink = document.querySelector(".nav-mark");

const sections = document.querySelectorAll("main section[id]");

function updateActiveNav() {
  const scrollY = window.scrollY;

  // =========================
  // HOME
  // =========================
  if (scrollY < 100) {
    navLinks.forEach(link => link.classList.remove("active"));
    homeLink.classList.add("active");
    return;
  }

  homeLink.classList.remove("active");

  // Position where we consider a section "active"
  const activationPoint = scrollY + 180;

  let currentSection = null;

  sections.forEach(section => {
    const sectionTop =
      section.getBoundingClientRect().top + window.scrollY;

    if (sectionTop <= activationPoint) {
      currentSection = section;
    }
  });

  // Remove active from all nav links
  navLinks.forEach(link => {
    link.classList.remove("active");
  });

  // Activate matching link
  if (currentSection) {
    const activeLink = document.querySelector(
      `.nav-links a[href="#${currentSection.id}"]`
    );

    if (activeLink) {
      activeLink.classList.add("active");
    }
  }
}

window.addEventListener("scroll", updateActiveNav, {
  passive: true
});

window.addEventListener("load", updateActiveNav);