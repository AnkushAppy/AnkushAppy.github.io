(function () {
  "use strict";

  // Year in footer
  document.getElementById("year").textContent = new Date().getFullYear();

  // Mobile nav toggle
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Build learnings TOC from articles
  const tocList = document.getElementById("learnings-toc-list");
  const topics = document.querySelectorAll(".learning-topic");
  const emptyState = document.getElementById("learnings-empty");

  if (topics.length === 0 && emptyState) {
    emptyState.hidden = false;
  } else if (tocList) {
    topics.forEach((article) => {
      const id = article.id;
      const title =
        article.dataset.title ||
        article.querySelector("h3")?.textContent ||
        id;

      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = `#${id}`;
      a.textContent = title;
      li.appendChild(a);
      tocList.appendChild(li);
    });
  }

  // Active nav + TOC highlighting on scroll
  const sections = document.querySelectorAll("section[id], .learning-topic");
  const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
  const tocAnchors = document.querySelectorAll(".toc-list a");

  function setActive(anchors, id) {
    anchors.forEach((a) => {
      const href = a.getAttribute("href");
      a.classList.toggle("active", href === `#${id}`);
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActive(navAnchors, id);
          if (entry.target.classList.contains("learning-topic")) {
            setActive(tocAnchors, id);
          }
        }
      });
    },
    { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
  );

  sections.forEach((section) => {
    if (section.id) observer.observe(section);
  });

  // Smooth scroll offset fix for hash links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const targetId = anchor.getAttribute("href").slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
        history.pushState(null, "", `#${targetId}`);
      }
    });
  });
})();
