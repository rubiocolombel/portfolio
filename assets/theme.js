// Chargé dans <head> pour appliquer le thème avant l'affichage (pas de flash).
(function () {
  var root = document.documentElement;
  root.classList.add("js");
  var saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) {}
  var theme = saved === "dark" || saved === "light"
    ? saved
    : (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  root.setAttribute("data-theme", theme);
})();
