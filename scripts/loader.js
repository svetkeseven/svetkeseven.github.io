function hideLoader() {
  const loader = document.querySelector(".loader");
  if (!loader) return;

  loader.classList.add("loader-hidden");

  loader.addEventListener("transitionend", () => {
    if (document.body.contains(loader)) {
      document.body.removeChild(loader);
    }
  });
}

if (document.readyState === "complete") {
  hideLoader();
} else {
  window.addEventListener("load", hideLoader);
}
