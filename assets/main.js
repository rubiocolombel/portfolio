(function () {
  var root = document.documentElement;

  // Bascule clair / sombre
  var themeBtn = document.querySelector(".theme-toggle");
  function syncThemeLabel() {
    var dark = root.getAttribute("data-theme") === "dark";
    themeBtn.setAttribute("aria-label", dark ? "Passer en thème clair" : "Passer en thème sombre");
  }
  if (themeBtn) {
    syncThemeLabel();
    themeBtn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      syncThemeLabel();
    });
  }

  // Menu mobile
  var navBtn = document.querySelector(".nav-toggle");
  var navList = document.getElementById("nav-list");
  if (navBtn && navList) {
    navBtn.addEventListener("click", function () {
      var open = navList.classList.toggle("open");
      navBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    navList.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        navList.classList.remove("open");
        navBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Photo absente : on garde les initiales
  var avatar = document.querySelector(".avatar");
  var img = avatar && avatar.querySelector("img");
  if (img) {
    var fail = function () { avatar.classList.add("no-photo"); };
    if (img.complete && img.naturalWidth === 0) fail();
    img.addEventListener("error", fail);
  }
})();
