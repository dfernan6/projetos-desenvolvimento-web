function renderHomePage() {
  const page = content[state.language].home; // usa o idioma atual
  return `
    <div class="space-y-8">
      <div class="text-center">
        <div class="hero-avatar">
          <div class="hero-avatar-inner">💻</div>
        </div>
        <h1 class="hero-title">${page.title}</h1>
        <p class="hero-subtitle">${page.subtitle}</p>
      </div>
      
      <div class="quote-box">
        <p class="quote-text">"${page.quote}"</p>
      </div>
      
      <div class="card">
        <h2>${page.resumo.title}</h2>
        ${page.resumo.paragraphs.map(p => `<p>${p}</p>`).join('')}
      </div>
      
      <div class="social-links">
        ${socialLinks.map(link => `
          <a href="${link.url}" target="_blank" class="social-button">
            <span>${link.icon}</span>
            <span>${link.label}</span>
          </a>
        `).join('')}
      </div>
    </div>
  `;
}

function renderHardSkillsPage() {
  const page = content[state.language].hardskills;
  return `
    <div class="space-y-6">
      <h1>${page.title}</h1>
      <div class="skills-grid">
        ${page.categories.map(cat => `
          <div class="skill-category">
            <h3>${cat.name}</h3>
            <div class="skill-tags">
              ${cat.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderSoftSkillsPage() {
  const page = content[state.language].softskills;
  return `
    <div class="space-y-6">
      <h1>${page.title}</h1>
      <div class="card">
        ${page.skills.map(skill => `
          <div class="skill-item">
            <div class="skill-header">
              <span class="skill-name">${skill.name}</span>
              <span>${skill.level}%</span>
            </div>
            <div class="progress-bar">
              <div class="progress-fill" style="width: ${skill.level}%"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderExperienciaPage() {
  const page = content[state.language].experiencia;
  return content[state.language].experiencia.html;
}

function renderPage() {
  if (state.currentPage === 'home') return renderHomePage();
  if (state.currentPage === 'hardskills') return renderHardSkillsPage();
  if (state.currentPage === 'softskills') return renderSoftSkillsPage();
  if (state.currentPage === 'experiencia') return renderExperienciaPage();
  
  const page = content[state.language][state.currentPage];
  return `
    <div class="space-y-6">
      <h1>${page?.title || 'Página'}</h1>
      <div class="card">
        <p>Conteúdo em desenvolvimento...</p>
      </div>
    </div>
  `;
}

function render() {
  document.getElementById('app').innerHTML = `
    <header>
      <div class="header-container">
        <div class="logo">
          <div class="logo-icon">D</div>
          <span class="logo-text">dfernan6</span>
        </div>
        
        <nav class="nav-desktop">
          ${navItems.map(item => `
            <button class="nav-button ${state.currentPage === item.id ? 'active' : ''}" 
                    onclick="navigateTo('${item.id}')">
              <span>${item.icon}</span>
              <span>${item.label}</span>
            </button>
          `).join('')}
        </nav>
        
        <div class="controls">
          <button class="mobile-menu-button" onclick="toggleMobileMenu()">
            ${state.mobileMenuOpen ? '✕' : '☰'}
          </button>
      </div>
      
      <nav class="nav-mobile ${state.mobileMenuOpen ? 'open' : ''}">
        ${navItems.map(item => `
          <button class="nav-button ${state.currentPage === item.id ? 'active' : ''}" 
                  onclick="navigateTo('${item.id}')">
            <span>${item.icon}</span>
            <span>${item.label}</span>
          </button>
        `).join('')}
      </nav>
    </header>
    
    <main>
      <div class="page-content">${renderPage()}</div>
    </main>
    
    <footer>
      <div class="footer-container">
        <p>© Editado por <strong>Danilo Fernandes</strong></p>
      </div>
    </footer>
  `;
}

// Função para trocar idioma
function changeLanguage(lang) {
  state.language = lang;
  render();
}
