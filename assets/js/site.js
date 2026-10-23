document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("#site-nav");
  const menuButton = nav?.querySelector(":scope > button");
  const visibleLinks = nav?.querySelector(".visible-links");
  const hiddenLinks = nav?.querySelector(".hidden-links");
  const updateNavigation = () => {
    if (!nav || !menuButton || !visibleLinks || !hiddenLinks) return;

    while (hiddenLinks.firstElementChild) {
      visibleLinks.appendChild(hiddenLinks.firstElementChild);
    }

    const menuButtonWidth = menuButton.offsetWidth || 30;
    menuButton.classList.add("hidden");
    hiddenLinks.classList.add("hidden");
    menuButton.classList.remove("close");

    const availableWidth = nav.clientWidth - menuButtonWidth - 30;
    let movableLinks = visibleLinks.querySelectorAll(":scope > li:not(.persist)");

    while (visibleLinks.scrollWidth > availableWidth && movableLinks.length > 0) {
      hiddenLinks.prepend(movableLinks[movableLinks.length - 1]);
      movableLinks = visibleLinks.querySelectorAll(":scope > li:not(.persist)");
    }

    if (hiddenLinks.children.length > 0) {
      menuButton.classList.remove("hidden");
      menuButton.setAttribute("count", hiddenLinks.children.length);
    }

    const mastheadHeight = document.querySelector(".masthead")?.offsetHeight || 70;
    document.body.style.paddingTop = `${mastheadHeight}px`;
    const sidebar = document.querySelector(".sidebar");
    if (sidebar) {
      const contactButtonIsVisible = contactButton && window.getComputedStyle(contactButton).display !== "none";
      sidebar.style.paddingTop = contactButtonIsVisible ? "" : `${mastheadHeight}px`;
    }
  };

  menuButton?.addEventListener("click", () => {
    hiddenLinks?.classList.toggle("hidden");
    menuButton.classList.toggle("close");
  });

  const contactButton = document.querySelector(".author__urls-wrapper button");
  const contactLinks = document.querySelector(".author__urls--icons");
  contactButton?.addEventListener("click", () => {
    const isOpen = contactLinks?.classList.toggle("is-open") || false;
    contactButton.classList.toggle("open", isOpen);
    contactButton.setAttribute("aria-expanded", String(isOpen));
  });

  const updateFooterSpacing = () => {
    const footer = document.querySelector(".page__footer");
    document.body.style.paddingBottom = "0";
    document.body.style.marginBottom = footer ? `${footer.offsetHeight}px` : "0";
  };

  window.addEventListener("resize", () => {
    updateNavigation();
    updateFooterSpacing();
  });

  updateNavigation();
  updateFooterSpacing();
});
