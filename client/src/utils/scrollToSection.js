export function removeUrlHash() {
  if (typeof window === "undefined" || !window.location.hash) {
    return;
  }

  window.history.replaceState(
    null,
    "",
    `${window.location.pathname}${window.location.search}`
  );
}

export function scrollToSection(hash) {
  if (!hash?.startsWith("#")) {
    return false;
  }

  const sectionId = hash.slice(1);
  const section = document.getElementById(sectionId);

  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    removeUrlHash();
    return true;
  }

  return false;
}
