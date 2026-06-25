// Quando o DOM estiver pronto, chama render()
document.addEventListener('DOMContentLoaded', render);

document.getElementById("language-select").addEventListener("change", (e) => {
  state.language = e.target.value;
  render();
});

// Dark mode toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById("toggle-theme");
  if (toggleButton) {
    toggleButton.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      toggleButton.textContent = document.body.classList.contains("dark-mode")
        ? "☀️ Light Mode"
        : "🌙 Dark Mode";
    });
  }
});

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const docHeight = document.documentElement.scrollHeight;

  // Progresso da rolagem (0 = topo, 1 = fundo)
  const progress = scrollTop / (docHeight - windowHeight);

  // Ângulo do gradiente: começa em 135° e vai até 315°
  const angle = 135 + (180 * progress);

  // Elementos que terão apenas borda com gradiente
  const borderElements = document.querySelectorAll(
    ".card, .social-button, .textoOculto, .logo-image, .languages, .progress-fill , .video-wrapper, .simbolos"
  );

  borderElements.forEach(el => {
    el.style.border = "3px solid transparent";
    el.style.borderImage = `linear-gradient(${angle}deg, var(--primary), var(--secondary)) 1`;
    el.style.transition = "border-image 0.3s ease";
  });

  // Elementos que terão fundo com gradiente
  const backgroundElements = document.querySelectorAll(
    " .logo-icon, .logo-text, .nav-button.active, .progress-fill"
  );

  backgroundElements.forEach(el => {
    el.style.backgroundImage = `linear-gradient(${angle}deg, var(--primary), var(--secondary))`;
    el.style.transition = "background-image 0.3s ease";
  });

  const titles = document.querySelectorAll("h1");

  titles.forEach(el => {
    el.style.backgroundImage = `linear-gradient(${angle}deg, var(--primary), var(--secondary))`;
    el.style.backgroundClip = "text";
    el.style.webkitBackgroundClip = "text";
    el.style.color = "transparent";
  });

  const headers = document.querySelectorAll("header, .header-container");

headers.forEach(el => {
  el.style.borderBottom = "3px solid transparent";
  el.style.borderImage = `linear-gradient(${angle}deg, var(--primary), var(--secondary)) 1`;
  el.style.borderImageSlice = 1; // garante que o gradiente seja aplicado corretamente
});
});

