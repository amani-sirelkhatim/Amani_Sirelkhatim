(function () {
  "use strict";

  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

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


  $("#footerYear").textContent = `© ${new Date().getFullYear()}`;


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

    
        let thumbHtml;
      if (project.logo) {
        thumbHtml = `<div class="project-thumb project-thumb-logo">
          <img src="${projectImgPath(project, project.logo)}" alt="${project.org} logo" loading="lazy">
        </div>`;
      } else {
        const thumbs = project.gallery.slice(0, 2);
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


  const STATUS_GLYPHS_SVG = `<svg class="sig" viewBox="0 0 18 12" aria-hidden="true"><path d="M1 9h2.1v3H1zM5.4 6.4h2.1V12H5.4zM9.8 3.8h2.1V12H9.8zM14.2 1.2h2.1V12h-2.1z"/></svg><svg class="wifi" viewBox="0 0 16 12" aria-hidden="true"><path d="M8 10.8 5.3 8a3.8 3.8 0 0 1 5.4 0zM8 4.3a7 7 0 0 0-5 2.1L1.3 4.5A9.5 9.5 0 0 1 8 1.7c2.6 0 5 1 6.7 2.8L13 6.4a7 7 0 0 0-5-2.1z"/></svg><svg class="batt" viewBox="0 0 27 13" aria-hidden="true"><rect x=".6" y=".6" width="21.8" height="11.8" rx="3.6" fill="none" stroke="currentColor" stroke-opacity=".42" stroke-width="1.2"/><rect x="2.2" y="2.2" width="16.5" height="8.6" rx="2.2"/><path d="M24.4 4.5c1.3.5 1.3 3.5 0 4z" fill-opacity=".42"/></svg>`;

  function renderPhoneRail(container, project) {
    container.className = "phone-rail-wrap";
    container.innerHTML = `
      <div class="phone-rail" tabindex="0" role="region" aria-label="App screens, scroll horizontally">
        ${project.gallery
          .map(
            (g, i) => `
          <figure class="phone-slot" data-index="${i}" tabindex="0" role="button" aria-label="View screenshot: ${g.caption}">
            <div class="phone-frame">
              <div class="phone-screen">
                <div class="phone-status">
                  <span class="clock">9:41</span>
                  <span class="glyphs">${STATUS_GLYPHS_SVG}</span>
                  <span class="island"></span>
                </div>
                <img src="${projectImgPath(project, g.file)}" alt="${g.caption}" loading="lazy" draggable="false">
              </div>
            </div>
            <figcaption class="phone-caption"><b>${i + 1}</b>${g.caption}</figcaption>
          </figure>`
          )
          .join("")}
      </div>
      <div class="phone-rail-track"><div class="phone-rail-thumb"></div></div>
    `;

    const rail = $(".phone-rail", container);
    const track = $(".phone-rail-track", container);
    const thumb = $(".phone-rail-thumb", container);

    $$(".phone-slot", rail).forEach((slot) => {
      const open = () => openLightbox(project, parseInt(slot.dataset.index, 10));
      slot.addEventListener("click", open);
      slot.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          open();
        }
      });
    });

    rail.addEventListener(
      "wheel",
      (e) => {
        if (e.deltaY === 0 || e.shiftKey) return;
        const max = rail.scrollWidth - rail.clientWidth;
        if (max <= 0) return;
        const next = rail.scrollLeft + e.deltaY;
        if (next > 0 && next < max) {
          rail.scrollLeft = next;
          e.preventDefault();
        }
      },
      { passive: false }
    );

    let down = false,
      startX = 0,
      startLeft = 0,
      moved = 0;
    rail.addEventListener("pointerdown", (e) => {
      if (e.pointerType === "touch") return;
      down = true;
      moved = 0;
      startX = e.clientX;
      startLeft = rail.scrollLeft;
      rail.classList.add("dragging");
      rail.setPointerCapture(e.pointerId);
    });
    rail.addEventListener("pointermove", (e) => {
      if (!down) return;
      const dx = e.clientX - startX;
      moved = Math.max(moved, Math.abs(dx));
      rail.scrollLeft = startLeft - dx;
    });
    ["pointerup", "pointercancel"].forEach((evt) =>
      rail.addEventListener(evt, () => {
        down = false;
        rail.classList.remove("dragging");
      })
    );
    rail.addEventListener(
      "click",
      (e) => {
        if (moved > 6) {
          e.stopPropagation();
          e.preventDefault();
        }
      },
      true
    );

    function syncTrack() {
      const max = rail.scrollWidth - rail.clientWidth;
      const ratio = rail.clientWidth / rail.scrollWidth;
      const tw = track.clientWidth;
      const width = Math.max(32, Math.round(tw * ratio));
      thumb.style.width = width + "px";
      const travel = tw - width;
      const pos = max > 0 ? (rail.scrollLeft / max) * travel : 0;
      thumb.style.transform = `translateX(${Math.round(pos)}px)`;
      track.style.visibility = max > 1 ? "visible" : "hidden";
    }
    rail.addEventListener("scroll", syncTrack, { passive: true });
    window.addEventListener("resize", syncTrack);
    requestAnimationFrame(syncTrack);

    let tDown = false,
      tStartX = 0,
      tStartLeft = 0;
    function trackTravel() {
      return track.clientWidth - thumb.getBoundingClientRect().width;
    }
    thumb.addEventListener("pointerdown", (e) => {
      tDown = true;
      tStartX = e.clientX;
      tStartLeft = rail.scrollLeft;
      thumb.classList.add("held");
      thumb.setPointerCapture(e.pointerId);
      e.preventDefault();
      e.stopPropagation();
    });
    thumb.addEventListener("pointermove", (e) => {
      if (!tDown) return;
      const travel = trackTravel();
      if (travel <= 0) return;
      const max = rail.scrollWidth - rail.clientWidth;
      rail.scrollLeft = tStartLeft + ((e.clientX - tStartX) / travel) * max;
    });
    ["pointerup", "pointercancel"].forEach((evt) =>
      thumb.addEventListener(evt, () => {
        tDown = false;
        thumb.classList.remove("held");
      })
    );
    track.addEventListener("pointerdown", (e) => {
      if (e.target === thumb) return;
      const rect = track.getBoundingClientRect();
      const width = thumb.getBoundingClientRect().width;
      const travel = trackTravel();
      if (travel <= 0) return;
      const pos = Math.min(Math.max(e.clientX - rect.left - width / 2, 0), travel);
      rail.scrollLeft = (pos / travel) * (rail.scrollWidth - rail.clientWidth);
    });

    rail.addEventListener("keydown", (e) => {
      const slot = $(".phone-slot", rail);
      if (!slot) return;
      const step = slot.getBoundingClientRect().width + 26;
      if (e.key === "ArrowRight") {
        rail.scrollLeft += step;
        e.preventDefault();
      }
      if (e.key === "ArrowLeft") {
        rail.scrollLeft -= step;
        e.preventDefault();
      }
      if (e.key === "Home") {
        rail.scrollLeft = 0;
        e.preventDefault();
      }
      if (e.key === "End") {
        rail.scrollLeft = rail.scrollWidth;
        e.preventDefault();
      }
    });
  }

  const modalOverlay = $("#projectModal");
  let currentProject = null;

  function openProjectModal(project) {
    currentProject = project;
    $("#modalCat").textContent = project.category;
    $("#modalTitle").textContent = project.title;
    $("#modalRole").textContent = project.role;
    $("#modalOverview").textContent = project.overview;
    // $("#modalSummary").innerHTML = project.summary
    //   .map((s) => `<li>${s}</li>`)
    //   .join("");
    $("#modalContribution").innerHTML = project.contribution
      .map((c) => `<li>${c}</li>`)
      .join("");
    $("#modalTags").innerHTML = project.tech
      .map((t) => `<span class="tag">${t}</span>`)
      .join("");

    const gallerySection = $("#modalGallerySection");
    const galleryEl = $("#modalGallery");
    if (project.gallery.length === 0) {
      gallerySection.style.display = "none";
    } else {
      gallerySection.style.display = "";
      if (project.galleryStyle === "portrait") {
        renderPhoneRail(galleryEl, project);
      } else {
        galleryEl.className = `modal-gallery ${project.galleryStyle === "landscape" ? "landscape" : ""}`;
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

 
  if (scrollY < 100) {
    navLinks.forEach(link => link.classList.remove("active"));
    homeLink.classList.add("active");
    return;
  }

  homeLink.classList.remove("active");


  const activationPoint = scrollY + 180;

  let currentSection = null;

  sections.forEach(section => {
    const sectionTop =
      section.getBoundingClientRect().top + window.scrollY;

    if (sectionTop <= activationPoint) {
      currentSection = section;
    }
  });


  navLinks.forEach(link => {
    link.classList.remove("active");
  });


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