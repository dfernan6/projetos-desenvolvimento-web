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

function renderProjetosPage() {
  const page = content[state.language].projetos;
  return `
    <div class="space-y-6">
      <h1>${page.title}</h1>
      <p>${page.description}</p>
      ${page.items.map(item => `
        ${item.title ? `<div class="estavel"><h2>${item.title}</h2></div>` : ""}
        <div class="skills" onclick="this.nextElementSibling.nextElementSibling.classList.toggle('show')">
          <h3><span class="arrow">◀</span> ${item.name}</h3>
        </div>
        <div class="subTexto">
          <h5>Linguagens utilizadas:</h5>
          ${item.languages.map(img => `<img class="simbolos" src="./imagens/${img}" draggable="false">`).join("")}
        </div>
        <div class="textoOculto">
          <p>${item.description}</p>
          <div class="video-wrapper">
            <a href="${item.link}" target="_blank">
              <video class="linkImg" src="${item.video}" muted loop autoplay></video>
              <div class="video-overlay">Clique para ver o projeto</div>
            </a>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

function renderHardSkills() {
  const page = content[state.language]?.hardSkills;
  if (!page) {
    return `<p>Hard skills not defined for this language.</p>`;
  }
  return `
    <section id="iCorpo" class="container">
      <div id="iInterface" class="container">
        <div class="topo">
          <h1 class="exp">${page.title}</h1>
          <p class="topo">${page.description}</p>
        </div>
        <div class="elementsContainer">
          ${page.categories.map(cat => `
            <div class="estavel"><h4>${cat.title}</h4></div>
            <div class="description">
              ${cat.skills.map(skill => `
                <div class="image-wrapper">
                  <img class="languages" draggable="false" src="./imagens/${skill.image}" alt="${skill.name}">
                  <div class="texto-sobre">${skill.name}</div>
                  ${skill.level ? `<div class="duplas"><h5>${skill.level}</h5></div>` : ""}
                </div>
              `).join("")}
            </div>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderFormacaoPage() {
  const page = content[state.language].formacao;
  return `
    <div class="topo">
      <h1 class="exp">${page.title}</h1>
      <p class="topo">${page.description}</p>
    </div>
    <div class="elementsContainer">
      ${page.courses.map(course => `
        <div class="skills">
          <div class="skills" onclick="this.nextElementSibling.nextElementSibling.classList.toggle('show')">
          <h3><span class="arrow">◀</span> ${course.name}</h3>
        </div>
        <div class="subTexto">
          <span><b>${course.institution}</b> | <i>${course.type}</i></span>
        </div>
        <div class="textoOculto">
          <p>${course.status} ${course.period}</p>
        </div>
      `).join("")}

      <br><h1>${page.certificationsTitle}</h1>
      ${page.certifications.map(cert => `
        <div class="skills">
          <h3><span class="arrow">◀</span> ${cert.name}</h3>
        </div>
        <div class="subTexto"><span>${cert.description}</span></div>
        <div class="textoOculto"><p>${cert.details}</p></div>
      `).join("")}

      ${page.extras.map(extra => `
        <div class="estavel"><h4>${extra.name}</h4></div>
        <div class="subTexto"><span>${extra.description}</span></div>
      `).join("")}
    </div>
  `;
}

function renderPage() {
  if (state.currentPage === 'home') return renderHomePage();
  if (state.currentPage === 'hardskills') return renderHardSkills();
  if (state.currentPage === 'softskills') return renderSoftSkillsPage();
  if (state.currentPage === 'projetos') return renderProjetosPage();
  if (state.currentPage === 'experiencia') return renderExperienciaPage();
  if (state.currentPage === 'formacao') return renderFormacaoPage();

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

function attachExperienciaEvents() {
  document.querySelectorAll('.skills').forEach(skill => {
    skill.addEventListener('click', () => {
      const hidden = skill.nextElementSibling.nextElementSibling || skill.nextElementSibling;
      if (hidden && hidden.classList.contains('textoOculto')) {
        hidden.classList.toggle('show');
        const arrow = skill.querySelector('.arrow');
        if (arrow) arrow.textContent = hidden.classList.contains('show') ? '▼' : '◀';
      }
    });
  });
}

function attachProjetosEvents() {
  document.querySelectorAll('.skills').forEach(skill => {
    skill.addEventListener('click', () => {
      // find the hidden block right after the skill
      const hidden = skill.nextElementSibling.nextElementSibling || skill.nextElementSibling;
      if (hidden && hidden.classList.contains('textoOculto')) {
        hidden.classList.toggle('show');
        const arrow = skill.querySelector('.arrow');
        if (arrow) {
          arrow.textContent = hidden.classList.contains('show') ? '▼' : '◀';
        }
      }
    });
  });
}

function attachFormacaoEvents() {
  document.querySelectorAll('.skills').forEach(skill => {
    skill.addEventListener('click', () => {
      // find the hidden block right after the skill
      const hidden = skill.nextElementSibling.nextElementSibling || skill.nextElementSibling;
      if (hidden && hidden.classList.contains('textoOculto')) {
        hidden.classList.toggle('show');
        const arrow = skill.querySelector('.arrow');
        if (arrow) {
          arrow.textContent = hidden.classList.contains('show') ? '▼' : '◀';
        }
      }
    });
  });
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
    
  `;
}

// Função para trocar idioma
function changeLanguage(lang) {
  state.language = lang;
  render();
}

  // Attach events after DOM is updated
  attachExperienciaEvents();
  attachProjetosEvents();
  attachFormacaoEvents();