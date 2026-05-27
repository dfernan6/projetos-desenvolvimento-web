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

// Content Data em três idiomas
const content = {
  pt: {
    home: {
      title: 'Bem-vindo',
      subtitle: 'Analista e Desenvolvedor Web | Mobile Full-Stack',
      quote: 'Meu objetivo é desenvolver projetos que gerem excelentes resultados, sempre priorizando valores dinâmicos, adquirindo novos conhecimentos e compartilhando expertise, ao mesmo tempo em que demonstro alto desempenho por meio das habilidades adquiridas.',
      resumo: {
        title: 'Resumo Profissional',
        paragraphs: [
          'Iniciei minha trajetória na área de Tecnologia da Informação atuando diretamente no atendimento ao cliente, por meio de ligações e gestão de chamados.',
          'Essa experiência inicial foi fundamental para desenvolver habilidades de comunicação, empatia e eficiência no suporte técnico, além de consolidar minha compreensão sobre a importância da experiência do usuário.',
          'Desde então, venho aprimorando minha formação por meio de certificações voltadas à satisfação do cliente, à conformidade com a LGPD, à qualidade no atendimento e à priorização estratégica de chamados — sempre com foco no desenvolvimento de competências interpessoais adquiridas em treinamentos, grupos de trabalho e vivência profissional.',
          'Atualmente, sou graduando em Sistemas de Informação e também possuo formação técnica em Desenvolvimento Web, o que amplia minha capacidade de compreender e aplicar soluções tecnológicas alinhadas às necessidades corporativas. Tenho familiaridade com ambientes empresariais, práticas de conformidade (compliance) e o uso eficiente de plataformas digitais que otimizam processos e promovem agilidade na entrega de valor.',
          'Comprometido com aprendizado contínuo e melhoria constante, busco contribuir de forma ética, estratégica e proativa para os resultados da equipe e da empresa.'
        ]
      }
    },
    softskills: {
      title: 'Soft Skills',
      skills: [
        { name: 'Comunicação', level: 90 },
        { name: 'Trabalho em Equipe', level: 95 },
        { name: 'Resolução de Problemas', level: 88 },
        { name: 'Empatia', level: 92 },
        { name: 'Gestão de Tempo', level: 85 },
        { name: 'Dinamismo', level: 90 },
        { name: 'Conhecimento', level: 95 },
        { name: 'Criatividade', level: 95 },
        { name: 'Organização', level: 92 },
        { name: 'Liderança', level: 85 },
        { name: 'Resiliência', level: 88 },
        { name: 'Compromisso', level: 92 },
        { name: 'Curiosidade', level: 97 }
      ]
    },
    experiencia: {
      title: 'Experiências',
      html: `
<div class="skills" onclick="this.nextElementSibling.nextElementSibling.classList.toggle('show')">
<h3>Positivo S+</h3>
</div>
<div class="subTexto">
<span><b>Analista de suporte bilingue</b> 🗓️<i> Abril 2025 - Julho 2025</i></span>
</div>
<div class="textoOculto">
<p>
🎯 Faziamos a ponte de suporte back end para clientes bancários PJ lidava com assuntos relacionados a problemas de acesso a aplicações, cadastros, reuniões instrutivas à assuntos solicitados pelos clientes.<br>
🎯 As tratativas eram realizadas seguindo correntes de e-mail se guindo os CRMs gerados através do Dynamics.
</p>
</div>
<div class="skills" onclick="this.nextElementSibling.nextElementSibling.classList.toggle('show')">
<h3>Tech Mahindra</h3>
</div>
<div class="subTexto">
<span><b>Analista de atendimento</b> 🗓️  <i>Agosto 2024 - Fevereiro 2025</i></span>
</div>
<div class="textoOculto">
    <p>
🎯 Por meio do sistema ERP, foram realizadas correções em produtos, embalagens, emissão de notas fiscais e faturamento.<br>
🎯 As análises foram conduzidas utilizando as ferramentas Swagger e Postman para obter as informações necessárias da API nos formatos HTTP, XML e JSON.
</p>
</div>
     <div class="skills" onclick="this.nextElementSibling.nextElementSibling.classList.toggle('show')">
    <h3>NTT DATA</h3>
    </div>
    <div class="subTexto">
<span><b>PTN1 Analista de suporte BPO Jr.</b> 🗓️ <i>Abril 2023 - Junho 2024</i></span>
</div>
<div class="textoOculto">
    <p>
       🎯 Abertura de tickets na plataforma Movidesk para atendimento ao cliente, relacionados a erros, dúvidas ou solicitações de serviço.<br>
       🎯 Por meio do sistema ERP, eram realizadas correções em produtos, embalagens, emissão de notas fiscais e faturamento.<br>
       🎯 No ServiceNow, recebíamos detalhes sobre problemas que exigiam resolução ou solicitações de acesso e/ou redefinição de senha para aplicações como WMS, Egates, Logan e PPMS.
    </p>
</div>
<div class="skills" onclick="this.nextElementSibling.nextElementSibling.classList.toggle('show')">
<h3>TCS - Tata Consultancy Services</h3>
</div>
<div class="subTexto">
<span><b>Analista de TI Jr.</b> 🗓️ <i>Agosto 2021 - Agosto 2022</i></span>
</div>
<div class="textoOculto">
<p>
🎯 Utilizei a plataforma ServiceNow para gerenciar os chamados atribuídos à minha equipe, relacionados à resolução de problemas nos sistemas GPV-F (ferrovia), GPV-M (mineração) e GPV-P (portos).<br>
🎯 Quando necessário, inseria códigos XML nas aplicações para corrigir processos de automação dentro do Control-M.<br>
🎯 No grupo de operações ferroviárias, utilizava o Control-M para monitorar e identificar falhas nas tarefas automatizadas diárias.
</p>
</div>
<div class="skills" onclick="this.nextElementSibling.nextElementSibling.classList.toggle('show')">
<h3>Capgemini</h3>
</div>
<div class="subTexto">
<span><b>Técnico de Service Desk bilingue</b> 🗓️ <i>Outubro 2018 - Abril 2021</i></span>
</div>
<div class="textoOculto">
<p>
    🎯 Atuei como Técnico de Service Desk, sendo responsável por identificar e solucionar problemas enfrentados pelos usuários da rede. Realizava atendimentos diretos ou criava chamados no ServiceNow para encaminhar os casos à equipe de TI apropriada.<br>
    🎯 Utilizava o Active Directory para atender solicitações de acesso e gerenciar instalações de aplicativos via Software Center, garantindo conformidade com a LGPD.<br>
    🎯 Além disso, realizava configurações de VPN quando os usuários enfrentavam dificuldades de acesso.
</p>
</div>
<br>
<h1>Experiências autônomas</h1>
<div class="skills" onclick="this.nextElementSibling.classList.toggle('show')">
<h3>Web developer </h3>
</div>
<div class="textoOculto">
<p> Desenvolvedor Web com sólida experiência em criação e manutenção de aplicações responsivas e escaláveis. Ao longo da carreira, adquiri competências em front-end e back-end, atuando com tecnologias como HTML5, CSS3, JavaScript, React, Node.js,PHP e mais outras estão na aba de Hard Skills. Tenho histórico comprovado de:<br><br>
 📈 <b>Melhoria de desempenho:</b> Redução de bugs em até 20% por meio de testes unitários e correções precisas.<br>
 🎯 <b>Foco em usabilidade:</b> Colaboração com designers para aprimorar UX/UI, aumentando a satisfação do usuário em 30%.<br>
 🔧 <b>Manutenção e evolução de sistemas:</b> Implementação de novas funcionalidades e otimização de código, reduzindo o tempo de carregamento em até 25%.<br>
 📊 <b>Documentação e versionamento:</b> Uso de Git e metodologias ágeis (Scrum) para garantir entregas organizadas e eficientes.<br>
 🤝 <b>Trabalho em equipe:</b> Participação ativa em squads multidisciplinares, contribuindo para soluções inovadoras e alinhadas aos objetivos do cliente.<br>
</p>
</div>
<div class="skills" onclick="this.nextElementSibling.nextElementSibling.classList.toggle('show')">
<h3>Mozilla Builder</h3>
</div>
<div class="subTexto">
<img class="simbolos" draggable="false" src="./imagens/mozilla.PNG">
<img class="simbolos" draggable="false" src="./imagens/bugzilla.PNG">
<img class="simbolos" draggable="false" src="./imagens/firefox.PNG">
<img class="simbolos" draggable="false" src="./imagens/thunderbird.PNG">
</div>
<div class="textoOculto">
<p>
    Correção de BUGs em aplicações <b>Mozilla</b> através do <b>Bugzilla</b> que é uma ferramenta de rastreamento de bugs desenvolvida pela Mozilla Foundation.<br> 
    Ela é usada para reportar, acompanhar e corrigir falhas em softwares como <b>Firefox</b>, <b>Thunderbird</b> e outros projetos Mozilla.<br>
    É amplamente adotada por diversas organizações para gerenciar problemas técnicos e melhorias.
</p>
</div>
<div class="skills" onclick="this.nextElementSibling.nextElementSibling.classList.toggle('show')">
<h3>GNU Developer </h3>
</div>
<div class="subTexto">
<h5>Linguagens utilizadas:</h5>
<img class="simbolos" draggable="false" src="./imagens/js.PNG">
<img class="simbolos" draggable="false" src="./imagens/rust.PNG">
<img class="simbolos" draggable="false" src="./imagens/html.PNG">
<img class="simbolos" draggable="false" src="./imagens/css.PNG">
<img class="simbolos" draggable="false" src="./imagens/git.PNG">
<img class="simbolos" draggable="false" src="./imagens/bash.PNG">
<img class="simbolos" draggable="false" src="./imagens/c.PNG">
</div>
<div class="textoOculto">
<p> Contribuir para o desenvolvimento de software livre dentro do projeto <b>GNU</b>, criado pela <b>Free Software Foundation</b>. Seu papel envolve:<br>
- Desenvolver e manter pacotes GNU: Criar, corrigir e melhorar softwares que seguem os princípios do software livre.<br>
- Seguir os padrões de codificação GNU: Isso garante consistência, legibilidade e compatibilidade entre os diversos pacotes.<br>
- Usar ferramentas como Savannah: É o servidor oficial de hospedagem de código-fonte para projetos GNU, onde os desenvolvedores gerenciam repositórios, páginas web e listas de discussão.<br>
- Colaborar com a comunidade: Participar de listas de e-mail, fóruns e grupos de discussão para resolver bugs, propor melhorias e revisar código.<br>
- Promover o software livre: Além da parte técnica, há um compromisso ideológico com a liberdade de uso, modificação e distribuição do software.
</p>
</div>
      `
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
    }
  },

  en: {
    home: {
      title: 'Welcome',
      subtitle: 'Web Analyst & Full-Stack Developer',
      quote: 'My goal is to develop projects that deliver excellent results, always prioritizing dynamic values, acquiring new knowledge and sharing expertise, while demonstrating high performance through acquired skills.',
      resumo: {
        title: 'Professional Summary',
        paragraphs: [
          'I began my career in Information Technology working directly in customer service, through calls and ticket management.',
          'This initial experience was essential to develop communication, empathy and efficiency in technical support, as well as to consolidate my understanding of the importance of user experience.',
          'Since then, I have been improving my training through certifications focused on customer satisfaction, LGPD compliance, quality in service and strategic prioritization of tickets — always with a focus on developing interpersonal skills acquired in training, work groups and professional experience.',
          'Currently, I am pursuing a degree in Information Systems and also hold technical training in Web Development, which expands my ability to understand and apply technological solutions aligned with corporate needs. I am familiar with business environments, compliance practices and the efficient use of digital platforms that optimize processes and promote agility in value delivery.',
          'Committed to continuous learning and constant improvement, I seek to contribute ethically, strategically and proactively to team and company results.'
        ]
      }
    },
    softskills: {
  title: 'Soft Skills',
  skills: [
    { name: 'Communication', level: 90 },
    { name: 'Teamwork', level: 95 },
    { name: 'Problem Solving', level: 88 },
    { name: 'Empathy', level: 92 },
    { name: 'Time Management', level: 85 },
    { name: 'Dynamism', level: 90 },
    { name: 'Knowledge', level: 95 },
    { name: 'Creativity', level: 88 },
    { name: 'Organization', level: 92 },
    { name: 'Leadership', level: 85 },
    { name: 'Resilience', level: 88 },
    { name: 'Commitment', level: 97 },
    { name: 'Curiosity', level: 92 }
  ]
},
    experiencia: {
      title: 'Experiences',
      html: `
<div class="skills" onclick="this.nextElementSibling.nextElementSibling.classList.toggle('show')">
  <h3><span class="arrow">◀</span> Positivo S+</h3>
</div>
<div class="subTexto">
  <span><b>Bilingual Support Analyst</b> 🗓️ <i>April 2025 - July 2025</i></span>
</div>
<div class="textoOculto">
  <p>
    🎯 We acted as a backend support bridge for corporate banking clients, handling issues related to application access, registrations, and instructive meetings requested by clients.<br>
    🎯 Requests were processed through email chains and CRMs generated via Dynamics.
  </p>
</div>

<div class="skills" onclick="this.nextElementSibling.nextElementSibling.classList.toggle('show')">
  <h3><span class="arrow">◀</span> Tech Mahindra</h3>
</div>
<div class="subTexto">
  <span><b>Customer Service Analyst</b> 🗓️ <i>August 2024 - February 2025</i></span>
</div>
<div class="textoOculto">
  <p>
    🎯 Using the ERP system, corrections were made in products, packaging, invoice issuance, and billing.<br>
    🎯 Analyses were conducted with Swagger and Postman to obtain API information in HTTP, XML, and JSON formats.
  </p>
</div>

<div class="skills" onclick="this.nextElementSibling.nextElementSibling.classList.toggle('show')">
  <h3><span class="arrow">◀</span> NTT DATA</h3>
</div>
<div class="subTexto">
  <span><b>PTN1 BPO Jr. Support Analyst</b> 🗓️ <i>April 2023 - June 2024</i></span>
</div>
<div class="textoOculto">
  <p>
    🎯 Ticket creation in Movidesk for customer support related to errors, questions, or service requests.<br>
    🎯 Corrections in products, packaging, invoice issuance, and billing via ERP.<br>
    🎯 In ServiceNow, we received details about issues requiring resolution or access requests and password resets for applications such as WMS, Egates, Logan, and PPMS.
  </p>
</div>

<div class="skills" onclick="this.nextElementSibling.nextElementSibling.classList.toggle('show')">
  <h3><span class="arrow">◀</span> TCS - Tata Consultancy Services</h3>
</div>
<div class="subTexto">
  <span><b>Junior IT Analyst</b> 🗓️ <i>August 2021 - August 2022</i></span>
</div>
<div class="textoOculto">
  <p>
    🎯 Used ServiceNow to manage tickets assigned to my team, related to problem resolution in GPV-F (railway), GPV-M (mining), and GPV-P (ports) systems.<br>
    🎯 When necessary, inserted XML code into applications to fix automation processes in Control-M.<br>
    🎯 In railway operations, used Control-M to monitor and identify failures in daily automated tasks.
  </p>
</div>

<div class="skills" onclick="this.nextElementSibling.nextElementSibling.classList.toggle('show')">
  <h3><span class="arrow">◀</span> Capgemini</h3>
</div>
<div class="subTexto">
  <span><b>Bilingual Service Desk Technician</b> 🗓️ <i>October 2018 - April 2021</i></span>
</div>
<div class="textoOculto">
  <p>
    🎯 Worked as a Service Desk Technician, responsible for identifying and solving user network issues. Provided direct support or created tickets in ServiceNow to forward cases to the appropriate IT team.<br>
    🎯 Used Active Directory to handle access requests and managed application installations via Software Center, ensuring LGPD compliance.<br>
    🎯 Configured VPNs when users faced access difficulties.
  </p>
</div>

<br>
<h1>Freelance Experiences</h1>

<div class="skills" onclick="this.nextElementSibling.classList.toggle('show')">
  <h3><span class="arrow">◀</span> Web Developer</h3>
</div>
<div class="textoOculto">
  <p>
    Web Developer with solid experience in creating and maintaining responsive and scalable applications. Skilled in front-end and back-end technologies such as HTML5, CSS3, JavaScript, React, Node.js, PHP, and more.<br><br>
    📈 <b>Performance improvement:</b> Reduced bugs by up to 20% through unit testing and precise fixes.<br>
    🎯 <b>Usability focus:</b> Collaborated with designers to enhance UX/UI, increasing user satisfaction by 30%.<br>
    🔧 <b>System maintenance and evolution:</b> Implemented new features and optimized code, reducing load times by up to 25%.<br>
    📊 <b>Documentation and versioning:</b> Used Git and agile methodologies (Scrum) to ensure organized and efficient deliveries.<br>
    🤝 <b>Teamwork:</b> Actively participated in multidisciplinary squads, contributing to innovative solutions aligned with client goals.<br>
  </p>
</div>

<div class="skills" onclick="this.nextElementSibling.nextElementSibling.classList.toggle('show')">
  <h3><span class="arrow">◀</span> Mozilla Builder</h3>
</div>
<div class="subTexto">
  <img class="simbolos" draggable="false" src="./imagens/mozilla.PNG">
  <img class="simbolos" draggable="false" src="./imagens/bugzilla.PNG">
  <img class="simbolos" draggable="false" src="./imagens/firefox.PNG">
  <img class="simbolos" draggable="false" src="./imagens/thunderbird.PNG">
</div>
<div class="textoOculto">
  <p>
    Bug fixing in <b>Mozilla</b> applications using <b>Bugzilla</b>, a bug tracking tool developed by the Mozilla Foundation.<br>
    It is used to report, track, and fix issues in software such as <b>Firefox</b>, <b>Thunderbird</b>, and other Mozilla projects.<br>
    Widely adopted by organizations to manage technical problems and improvements.
  </p>
</div>

<div class="skills" onclick="this.nextElementSibling.nextElementSibling.classList.toggle('show')">
  <h3><span class="arrow">◀</span> GNU Developer</h3>
</div>
<div class="subTexto">
  <h5>Languages used:</h5>
  <img class="simbolos" draggable="false" src="./imagens/js.PNG">
  <img class="simbolos" draggable="false" src="./imagens/rust.PNG">
  <img class="simbolos" draggable="false" src="./imagens/html.PNG">
  <img class="simbolos" draggable="false" src="./imagens/css.PNG">
  <img class="simbolos" draggable="false" src="./imagens/git.PNG">
  <img class="simbolos" draggable="false" src="./imagens/bash.PNG">
  <img class="simbolos" draggable="false" src="./imagens/c.PNG">
</div>
<div class="textoOculto">
  <p>
    Contributed to free software development within the <b>GNU</b> project, created by the <b>Free Software Foundation</b>. Responsibilities included:<br>
    - Developing and maintaining GNU packages.<br>
    - Following GNU coding standards for consistency and compatibility.<br>
    - Using tools like Savannah to manage repositories and discussions.<br>
    - Collaborating with the community to fix bugs, propose improvements, and review code.<br>
    - Promoting free software and its principles of freedom to use, modify, and distribute.
  </p>
</div>
      `
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
  }
  },

  de: {
    home: {
      title: 'Willkommen',
      subtitle: 'Analyst und Full-Stack Webentwickler',
      quote: 'Mein Ziel ist es, Projekte zu entwickeln, die hervorragende Ergebnisse liefern, stets dynamische Werte zu priorisieren, neues Wissen zu erwerben und Expertise zu teilen, während ich durch erworbene Fähigkeiten hohe Leistung demonstriere.',
      resumo: {
        title: 'Beruflicher Überblick',
        paragraphs: [
          'Ich begann meine Karriere in der Informationstechnologie mit direktem Kundenservice, über Telefonate und Ticketverwaltung.',
          'Diese erste Erfahrung war entscheidend, um Kommunikationsfähigkeit, Empathie und Effizienz im technischen Support zu entwickeln sowie mein Verständnis für die Bedeutung der Benutzererfahrung zu festigen.',
          'Seitdem habe ich meine Ausbildung durch Zertifizierungen verbessert, die sich auf Kundenzufriedenheit, DSGVO-Konformität, Servicequalität und strategische Priorisierung von Tickets konzentrieren — stets mit dem Fokus auf die Entwicklung zwischenmenschlicher Kompetenzen, die in Schulungen, Arbeitsgruppen und beruflicher Praxis erworben wurden.',
          'Derzeit studiere ich Informationssysteme und habe auch eine technische Ausbildung in Webentwicklung, was meine Fähigkeit erweitert, technologische Lösungen zu verstehen und anzuwenden, die mit den Unternehmensbedürfnissen übereinstimmen. Ich bin vertraut mit Unternehmensumgebungen, Compliance-Praktiken und der effizienten Nutzung digitaler Plattformen, die Prozesse optimieren und Agilität bei der Wertschöpfung fördern.',
          'Engagiert für kontinuierliches Lernen und ständige Verbesserung, möchte ich ethisch, strategisch und proaktiv zu den Ergebnissen des Teams und des Unternehmens beitragen.'
        ]
      }
    },
    softskills: {
      title: 'Soziale Kompetenzen',
      skills: [
        { name: 'Kommunikation', level: 90 },
        { name: 'Teamarbeit', level: 95 },
        { name: 'Problemlösung', level: 88 },
        { name: 'Empathie', level: 92 },
        { name: 'Zeitmanagement', level: 85 },
        { name: 'Dynamik', level: 90 },
        { name: 'Wissen', level: 95 },
        { name: 'Kreativität', level: 88 },
        { name: 'Organisation', level: 92 },
        { name: 'Führung', level: 85 },
        { name: 'Resilienz', level: 88 },
        { name: 'Engagement', level: 92 },
        { name: 'Neugier', level: 85 }
        ]
    },
  experiencia: {
      title: 'Erfahrungen',
      html: `
<div class="skills" onclick="this.nextElementSibling.nextElementSibling.classList.toggle('show')">
  <h3><span class="arrow">◀</span> Positivo S+</h3>
</div>
<div class="subTexto">
  <span><b>Zweisprachiger Support-Analyst</b> 🗓️ <i>April 2025 - Juli 2025</i></span>
</div>
<div class="textoOculto">
  <p>
    🎯 Wir fungierten als Backend-Support-Brücke für Firmenkunden im Bankwesen und bearbeiteten Themen wie Zugriffsprobleme auf Anwendungen, Registrierungen und Schulungstreffen zu Kundenanfragen.<br>
    🎯 Die Bearbeitung erfolgte über E-Mail-Ketten und CRMs, die über Dynamics erstellt wurden.
  </p>
</div>

<div class="skills" onclick="this.nextElementSibling.nextElementSibling.classList.toggle('show')">
  <h3><span class="arrow">◀</span> Tech Mahindra</h3>
</div>
<div class="subTexto">
  <span><b>Kundenservice-Analyst</b> 🗓️ <i>August 2024 - Februar 2025</i></span>
</div>
<div class="textoOculto">
  <p>
    🎯 Mit dem ERP-System wurden Korrekturen an Produkten, Verpackungen, Rechnungsstellung und Fakturierung durchgeführt.<br>
    🎯 Analysen wurden mit Swagger und Postman durchgeführt, um API-Informationen in den Formaten HTTP, XML und JSON zu erhalten.
  </p>
</div>

<div class="skills" onclick="this.nextElementSibling.nextElementSibling.classList.toggle('show')">
  <h3><span class="arrow">◀</span> NTT DATA</h3>
</div>
<div class="subTexto">
  <span><b>PTN1 BPO Jr. Support-Analyst</b> 🗓️ <i>April 2023 - Juni 2024</i></span>
</div>
<div class="textoOculto">
  <p>
    🎯 Erstellung von Tickets in Movidesk für Kundensupport zu Fehlern, Fragen oder Serviceanfragen.<br>
    🎯 Korrekturen an Produkten, Verpackungen, Rechnungsstellung und Fakturierung über ERP.<br>
    🎯 In ServiceNow erhielten wir Details zu Problemen, die gelöst werden mussten, sowie Zugriffs- und Passwort-Reset-Anfragen für Anwendungen wie WMS, Egates, Logan und PPMS.
  </p>
</div>

<div class="skills" onclick="this.nextElementSibling.nextElementSibling.classList.toggle('show')">
  <h3><span class="arrow">◀</span> TCS - Tata Consultancy Services</h3>
</div>
<div class="subTexto">
  <span><b>Junior IT-Analyst</b> 🗓️ <i>August 2021 - August 2022</i></span>
</div>
<div class="textoOculto">
  <p>
    🎯 Nutzung von ServiceNow zur Verwaltung von Tickets, die meinem Team zugewiesen wurden, im Zusammenhang mit der Problemlösung in den Systemen GPV-F (Eisenbahn), GPV-M (Bergbau) und GPV-P (Häfen).<br>
    🎯 Bei Bedarf XML-Code in Anwendungen eingefügt, um Automatisierungsprozesse in Control-M zu korrigieren.<br>
    🎯 In Eisenbahnbetrieben Control-M verwendet, um tägliche automatisierte Aufgaben zu überwachen und Fehler zu identifizieren.
  </p>
</div>

<div class="skills" onclick="this.nextElementSibling.nextElementSibling.classList.toggle('show')">
  <h3><span class="arrow">◀</span> Capgemini</h3>
</div>
<div class="subTexto">
  <span><b>Zweisprachiger Service Desk-Techniker</b> 🗓️ <i>Oktober 2018 - April 2021</i></span>
</div>
<div class="textoOculto">
  <p>
    🎯 Tätigkeit als Service Desk-Techniker, verantwortlich für die Identifizierung und Lösung von Netzwerkproblemen der Benutzer. Direkter Support oder Erstellung von Tickets in ServiceNow zur Weiterleitung an das zuständige IT-Team.<br>
    🎯 Verwendung von Active Directory zur Bearbeitung von Zugriffsanfragen und Verwaltung von Anwendungsinstallationen über Software Center, unter Einhaltung der DSGVO.<br>
    🎯 VPNs konfiguriert, wenn Benutzer auf Zugriffsprobleme stießen.
  </p>
</div>

<br>
<h1>Freiberufliche Erfahrungen</h1>

<div class="skills" onclick="this.nextElementSibling.classList.toggle('show')">
  <h3><span class="arrow">◀</span> Webentwickler</h3>
</div>
<div class="textoOculto">
  <p>
    Webentwickler mit solider Erfahrung in der Erstellung und Wartung von responsiven und skalierbaren Anwendungen. Kenntnisse in Frontend- und Backend-Technologien wie HTML5, CSS3, JavaScript, React, Node.js, PHP und mehr.<br><br>
    📈 <b>Leistungsverbesserung:</b> Reduzierung von Bugs um bis zu 20 % durch Unit-Tests und präzise Korrekturen.<br>
    🎯 <b>Usability-Fokus:</b> Zusammenarbeit mit Designern zur Verbesserung von UX/UI, wodurch die Benutzerzufriedenheit um 30 % gesteigert wurde.<br>
    🔧 <b>Systemwartung und -entwicklung:</b> Implementierung neuer Funktionen und Optimierung des Codes, wodurch die Ladezeiten um bis zu 25 % reduziert wurden.<br>
    📊 <b>Dokumentation und Versionierung:</b> Einsatz von Git und agilen Methoden (Scrum), um organisierte und effiziente Lieferungen sicherzustellen.<br>
    🤝 <b>Teamarbeit:</b> Aktive Teilnahme an multidisziplinären Squads, Beitrag zu innovativen Lösungen im Einklang mit den Zielen des Kunden.<br>
  </p>
</div>

<div class="skills" onclick="this.nextElementSibling.nextElementSibling.classList.toggle('show')">
  <h3><span class="arrow">◀</span> Mozilla Builder</h3>
</div>
<div class="subTexto">
  <img class="simbolos" draggable="false" src="./imagens/mozilla.PNG">
  <img class="simbolos" draggable="false" src="./imagens/bugzilla.PNG">
  <img class="simbolos" draggable="false" src="./imagens/firefox.PNG">
  <img class="simbolos" draggable="false" src="./imagens/thunderbird.PNG">
</div>
<div class="textoOculto">
  <p>
    Fehlerbehebung in <b>Mozilla</b>-Anwendungen mit <b>Bugzilla</b>, einem von der Mozilla Foundation entwickelten Bug-Tracking-Tool.<br>
    Es wird verwendet, um Probleme in Software wie <b>Firefox</b>, <b>Thunderbird</b> und anderen Mozilla-Projekten zu melden, zu verfolgen und zu beheben.<br>
    Weit verbreitet bei Organisationen zur Verwaltung technischer Probleme und Verbesserungen.
  </p>
</div>

<div class="skills" onclick="this.nextElementSibling.nextElementSibling.classList.toggle('show')">
  <h3><span class="arrow">◀</span> GNU-Entwickler</h3>
</div>
<div class="subTexto">
  <h5>Verwendete Sprachen:</h5>
  <img class="simbolos" draggable="false" src="./imagens/js.PNG">
  <img class="simbolos" draggable="false" src="./imagens/rust.PNG">
  <img class="simbolos" draggable="false" src="./imagens/html.PNG">
  <img class="simbolos" draggable="false" src="./imagens/css.PNG">
  <img class="simbolos" draggable="false" src="./imagens/git.PNG">
  <img class="simbolos" draggable="false" src="./imagens/bash.PNG">
  <img class="simbolos" draggable="false" src="./imagens/c.PNG">
</div>
<div class="textoOculto">
  <p>
    Beitrag zur Entwicklung freier Software im Rahmen des <b>GNU</b>-Projekts, das von der <b>Free Software Foundation</b> ins Leben gerufen wurde. Verantwortlichkeiten:<br>
    - Entwicklung und Wartung von GNU-Paketen.<br>
    - Einhaltung der GNU-Codierungsstandards für Konsistenz und Kompatibilität.<br>
    - Nutzung von Tools wie Savannah zur Verwaltung von Repositories und Diskussionen.<br>
    - Zusammenarbeit mit der Community zur Fehlerbehebung, Verbesserungsvorschlägen und Code-Reviews.<br>
    - Förderung freier Software und ihrer Prinzipien der Freiheit zur Nutzung, Änderung und Verbreitung.
  </p>
</div>
      `
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
    }
  },
};


// Social Links (iguais em todos os idiomas)
const socialLinks = [
  { icon: '🔗', label: 'GitHub', url: 'https://github.com/dfernan6' },
  { icon: '💼', label: 'LinkedIn', url: 'https://www.linkedin.com/in/dfernan6/' },
  { icon: '📱', label: 'WhatsApp', url: 'https://wa.me/5516997941722' },
  { icon: '📧', label: 'Email', url: 'mailto:danilo.afernandes@outlook.com' }
];
