const body = document.body;
const navToggle = document.querySelector(".nav-toggle");
const navLinks = Array.from(document.querySelectorAll("[data-nav-link]"));
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);
const revealTargets = document.querySelectorAll(".reveal");
const yearNode = document.getElementById("current-year");

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

if (navToggle) {
  navToggle.addEventListener("click", () => {
    const isOpen = body.classList.toggle("menu-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    body.classList.remove("menu-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const activeId = `#${entry.target.id}`;
        navLinks.forEach((link) => {
          const isActive = link.getAttribute("href") === activeId;
          link.classList.toggle("is-active", isActive);
        });
      });
    },
    {
      rootMargin: "-30% 0px -55% 0px",
      threshold: 0.1,
    }
  );

  sections.forEach((section) => {
    sectionObserver.observe(section);
  });

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -10% 0px",
    }
  );

  revealTargets.forEach((target) => {
    revealObserver.observe(target);
  });
} else {
  revealTargets.forEach((target) => {
    target.classList.add("is-visible");
  });
}
