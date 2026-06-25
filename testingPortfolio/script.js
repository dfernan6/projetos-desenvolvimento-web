// App State
        const state = {
            currentPage: 'home',
            mobileMenuOpen: false
        };

        // Navigation Items
        const navItems = [
            { id: 'home', label: 'Home', icon: '🏠' },
            { id: 'experiencia', label: 'Experiência', icon: '💼' },
            { id: 'hardskills', label: 'Hard Skills', icon: '💻' },
            { id: 'softskills', label: 'Soft Skills', icon: '🌟' },
            { id: 'projetos', label: 'Projetos', icon: '🎯' },
            { id: 'formacao', label: 'Formação', icon: '🎓' },
            { id: 'curriculo', label: 'Currículo', icon: '📄' }
        ];

        // Content Data
        const content = {
            home: {
                title: 'Bem-vindo',
                subtitle: '📢 Analista e Desenvolvedor Web | Mobile Full-Stack, integrando visão analítica e habilidades técnicas para entregar soluções completas 📢',
                quote: 'Meu objetivo é desenvolver projetos que gerem excelentes resultados, sempre priorizando valores dinâmicos, adquirindo novos conhecimentos e compartilhando expertise, ao mesmo tempo em que demonstro alto desempenho por meio das habilidades adquiridas.',
                resumo: {
                    title: 'Resumo Profissional',
                    paragraphs: [
                        'Iniciei minha trajetória na área de Tecnologia da Informação atuando diretamente no atendimento ao cliente, por meio de ligações e gestão de chamados. Essa experiência inicial foi fundamental para desenvolver habilidades de comunicação, empatia e eficiência no suporte técnico, além de consolidar minha compreensão sobre a importância da experiência do usuário.',
                        'Desde então, venho aprimorando minha formação por meio de certificações voltadas à satisfação do cliente, à conformidade com a LGPD, à qualidade no atendimento e à priorização estratégica de chamados — sempre com foco no desenvolvimento de competências interpessoais adquiridas em treinamentos, grupos de trabalho e vivência profissional.',
                        'Atualmente, sou graduando em Sistemas de Informação e também possuo formação técnica em Desenvolvimento Web, o que amplia minha capacidade de compreender e aplicar soluções tecnológicas alinhadas às necessidades corporativas. Tenho familiaridade com ambientes empresariais, práticas de conformidade (compliance) e o uso eficiente de plataformas digitais que otimizam processos e promovem agilidade na entrega de valor.',
                        'Comprometido com aprendizado contínuo e melhoria constante, busco contribuir de forma ética, estratégica e proativa para os resultados da equipe e da empresa.'
                    ]
                }
            },
            experiencia: {
                title: 'Experiência Profissional',
                items: [
                    {
                        role: 'Atendimento ao Cliente & Suporte TI',
                        company: 'Área de Tecnologia da Informação',
                        period: '2020 - Presente',
                        description: 'Atendimento direto ao cliente via ligações e gestão de chamados. Desenvolvimento de habilidades em comunicação, empatia e suporte técnico eficiente.'
                    }
                ]
            },
            hardskills: {
                title: 'Hard Skills',
                categories: [
                    {
                        name: 'Frontend',
                        skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Vue.js', 'Tailwind']
                    },
                    {
                        name: 'Backend',
                        skills: ['Node.js', 'Python', 'PHP', 'SQL', 'MongoDB', 'REST APIs']
                    },
                    {
                        name: 'DevOps',
                        skills: ['Git', 'GitHub', 'Docker', 'CI/CD', 'Linux']
                    }
                ]
            },
            softskills: {
                title: 'Soft Skills',
                skills: [
                    { name: 'Comunicação', level: 90 },
                    { name: 'Trabalho em Equipe', level: 95 },
                    { name: 'Resolução de Problemas', level: 88 },
                    { name: 'Adaptabilidade', level: 92 },
                    { name: 'Gestão de Tempo', level: 85 }
                ]
            },
            projetos: {
                title: 'Projetos',
                items: [
                    {
                        name: 'Portfolio Moderno SPA',
                        description: 'Portfolio desenvolvido como Single Page Application',
                        tech: ['HTML5', 'CSS3', 'JavaScript']
                    }
                ]
            },
            formacao: {
                title: 'Formação Acadêmica',
                items: [
                    {
                        degree: 'Bacharelado em Sistemas de Informação',
                        institution: 'Universidade',
                        period: 'Em andamento',
                        status: 'Cursando'
                    }
                ]
            }
        };



        function renderHomePage() {
            const page = content.home;
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
            const page = content.hardskills;
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
            const page = content.softskills;
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

        function renderPage() {
            if (state.currentPage === 'home') return renderHomePage();
            if (state.currentPage === 'hardskills') return renderHardSkillsPage();
            if (state.currentPage === 'softskills') return renderSoftSkillsPage();
            
            const page = content[state.currentPage];
            return `
                <div class="space-y-6">
                    <h1>${page?.title || 'Página'}</h1>
                    <div class="card">
                        <p>Conteúdo em desenvolvimento...</p>
                    </div>
                </div>
            `;
        }

        function navigateTo(pageId) {
            state.currentPage = pageId;
            state.mobileMenuOpen = false;
            render();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function toggleMobileMenu() {
            state.mobileMenuOpen = !state.mobileMenuOpen;
            render();
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

        const toggleButton = document.getElementById("toggle-theme");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Update button text/icon
  if (document.body.classList.contains("dark-mode")) {
    toggleButton.textContent = "☀️ Light Mode";
  } else {
    toggleButton.textContent = "🌙 Dark Mode";
  }
});


        document.addEventListener('DOMContentLoaded', render);