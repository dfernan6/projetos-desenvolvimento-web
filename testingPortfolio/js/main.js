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
