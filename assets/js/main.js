document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");
  const icon = document.getElementById("theme-icon");
  const html = document.documentElement;

  if (!toggle || !icon) return;

  function updateIcon() {
    icon.src = html.classList.contains("dark")
      ? "/assets/images/sun.png"
      : "/assets/images/moon.png";
  }

  updateIcon();

  toggle.addEventListener("click", () => {
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      html.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      html.classList.remove("light");
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }

    updateIcon();
  });
});
