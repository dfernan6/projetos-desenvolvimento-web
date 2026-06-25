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

  // Seleciona todos os elementos que devem ter o efeito
  const elements = document.querySelectorAll(
    "header, .card, .quote-box, .skills, .estavel, .social-button, .textoOculto"
  );

  elements.forEach(el => {
    el.style.borderImage = `linear-gradient(${angle}deg, var(--primary), var(--secondary)) 1`;
  });
});
