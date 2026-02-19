(function () {
  const root = document.documentElement;
  const saved = localStorage.getItem("theme");
  if (saved === "dark") root.setAttribute("data-theme", "dark");

  const btn = document.getElementById("themeToggle");
  if (btn) {
    const setLabel = () => {
      const isDark = root.getAttribute("data-theme") === "dark";
      btn.innerText = isDark ? "☀️ Light" : "🌙 Dark";
    };
    setLabel();

    btn.addEventListener("click", () => {
      const isDark = root.getAttribute("data-theme") === "dark";
      if (isDark) {
        root.removeAttribute("data-theme");
        localStorage.setItem("theme", "light");
      } else {
        root.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
      }
      setLabel();
    });
  }

  // footer year (optional)
  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());
})();
