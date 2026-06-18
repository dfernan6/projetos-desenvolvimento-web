// Navigation Items
const navItems = [
  { id: 'home', icon: '🏠' },
  { id: 'experiencia', icon: '💼' },
  { id: 'hardskills', icon: '💻' },
  { id: 'softskills', icon: '🌟' },
  { id: 'projetos', icon: '🎯' },
  { id: 'formacao', icon: '🎓' },
  { id: 'curriculo', icon: '📄' }
];

const translations = {
  home: { pt: "Home", en: "Home", de: "Startseite" },
  experiencia: { pt: "Experiência", en: "Experience", de: "Erfahrung" },
  hardskills: { pt: "Hard Skills", en: "Hard Skills", de: "Fachkenntnisse" },
  softskills: { pt: "Soft Skills", en: "Soft Skills", de: "Soziale Kompetenzen" },
  projetos: { pt: "Projetos", en: "Projects", de: "Projekte" },
  formacao: { pt: "Formação", en: "Education", de: "Ausbildung" },
  curriculo: { pt: "Currículo", en: "Resume", de: "Lebenslauf" }
};

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
  hardSkills: 
  {
  title: "Habilidades",
  description: "Os conhecimentos técnicos são fundamentais para meu desempenho profissional, permitindo soluções eficientes, tomada de decisões assertivas e constante evolução diante dos desafios tecnológicos ",
  categories: [
    {
      title: "Desenvolvimento Web | Mobile",
      skills: [
        { name: "HTML5", image: "html.PNG" },
        { name: "CSS3", image: "css.PNG" },
        { name: "JavaScript", image: "js.PNG" },
        { name: "TypeScript", image: "ts.PNG" },
        { name: "PHP", image: "php.PNG" },
        { name: "ReactJS", image: "react.PNG" },
        { name: "MongoDB", image: "mongodb.PNG" },
        { name: "Rust", image: "rust.PNG" },
        { name: "NodeJS", image: "nodejs.PNG" },
        { name: "NextJS", image: "nextjs.PNG" },
        { name: "Tailwind", image: "tailwind.PNG" },
        { name: "Bash-Shell", image: "bash.PNG" },
        { name: "C", image: "c.PNG" },
        { name: "Firebase", image: "firebase.PNG" },
        { name: "Vercel", image: "vercel.png" },
        { name: "Bootstrap", image: "bootstrap.PNG" },
        { name: "ESLint", image: "eslint.PNG" },
        { name: "Jira", image: "jira.PNG" },
        { name: "Miro", image: "miro.PNG" },
        { name: "Android Studio", image: "androidStudio.PNG" },
        { name: "React Native", image: "reactNative.PNG" },
        { name: "Expo", image: "expo.PNG" },
        { name: "Docker", image: "docker.png" },
        { name: "Kotlin", image: "kotlin.png" },
        { name: "Laravel", image: "laravel.png" },
        { name: "Figma", image: "figma.png" },
        { name: "Trello", image: "trello.png" }
      ]
    },
    {
      title: "Análise de TI",
      skills: [
        { name: "MS-Office", image: "office.PNG" },
        { name: "Acesso Remoto", image: "remote.PNG" },
        { name: "Postman", image: "postman.PNG" },
        { name: "SAP", image: "sap.PNG" },
        { name: "ERP", image: "erp.PNG" },
        { name: "CRM", image: "CRM.PNG" },
        { name: "Zimbra", image: "zimbra.PNG" },
        { name: "ServiceNow", image: "serviceNow.PNG" },
        { name: "Active Directory", image: "activeDirectory.PNG" },
        { name: "Movidesk", image: "movidesk.PNG" }
      ]
    },
    {
      title: "Análise de Sistemas e CyberSecurity",
      skills: [
        { name: "Packet Tracer", image: "packet tracer.PNG" },
        { name: "VPN", image: "vpn.PNG" },
        { name: "Wireshark", image: "wireshark.PNG" },
        { name: "UNIX", image: "unix.PNG" }
      ]
    },
    {
      title: "Idiomas",
      skills: [
        { name: "Inglês", image: "ingles.PNG", level: "Avançado" },
        { name: "Alemão", image: "alemao.PNG", level: "Intermediário" },
        { name: "Português", image: "português.PNG", level: "Nativo" }
      ]
    }
  ]
},
      projetos: {
      title: "Projetos",
      description: "Projetos desenvolvidos em aulas, treinamentos e para empresas estão reunidos nesta seção",
      items: [
        {
          title: "Projetos profissionais",
          name: "Sabores da Lolô",
          languages: ["nodejs.PNG","nextjs.PNG","tailwind.PNG","ts.PNG","html.PNG","postman.PNG","mongodb.PNG","react.PNG","vercel.png"],
          description: `
        <p>
        Sabores da Lolô é uma aplicação web desenvolvida para facilitar o agendamento e gestão de pedidos de confeitaria artesanal.<br>
        A plataforma permite que clientes escolham produtos como bolos, doces e salgados, definam datas de entrega com antecedência mínima por tipo de item, e finalizem o pedido com validações inteligentes e alertas dinâmicos.
        <br><br>
        🧑‍💻 <b>Tecnologias e arquitetura utilizadas:</b><br><br>
        <b>TypeScript (TS):</b> utilizado em toda a base do projeto para garantir tipagem estática, segurança e escalabilidade no desenvolvimento.<br>
        <b>Zod:</b> biblioteca de validação de esquemas usada para validar formulários e dados do cliente, com mensagens de erro traduzidas e personalizadas.<br>
        <b>React + Context API:</b> gerenciamento de estado global para carrinho, cliente e pedidos, com sincronização entre componentes e persistência local.<br>
        <b>API RESTful:</b> comunicação entre frontend e backend via rotas HTTP (POST, PUT, GET), com envio de dados estruturados em JSON.<br>
        <b>Next.js:</b> framework utilizado para renderização otimizada, rotas dinâmicas e integração com API routes.<br>
        <b>Fetch API:</b> responsável por enviar e receber dados entre cliente e servidor, com tratamento de erros e feedback ao usuário.<br>
        <b>MongoDB:</b> Banco de dados NoSQL utilizado para armazenamento de dados de clientes, carrinho e produtos<br>
        <b>Alerta inteligente:</b> sistema de mensagens que informa o usuário sobre erros, confirmações e validações em tempo real.<br>
        <b>Controle de carrinho com sincronização persistente:</b> o carrinho é sincronizado com o backend e armazenado localmente, evitando perda de dados durante a navegação.<br>
        </p>
      `,
          video: "./imagens/saboresdaloloShort.mp4",
          link: "https://saboresdalolo.vercel.app/"
        },
        {
      title: "Aplicativos Mobile",
      name: "FindWeather",
      languages: [
        "nodejs.PNG","expo.PNG","css.PNG","ts.PNG","html.PNG","reactNative.PNG"
      ],
      description: `
        <p>
        📱 <b>Funcionalidades Principais</b><br><br>
        🔍 Busca por cidade: campo de pesquisa com ícone de lupa para localizar qualquer cidade.<br>
        📍 <b>Localização via GPS:</b> botão com ícone de marcador para obter automaticamente o clima da posição atual.<br>
        🌡️ <b>Previsão atual e estendida:</b> mostra temperatura, mínimas e máximas, condições climáticas e ícones ilustrativos.<br>
        📅 <b>Previsão de 5 dias:</b> cards com resumo diário (ícone, temperatura, min/max).<br>
        ⚠️ <b>Mensagens de erro:</b> feedback visual quando a cidade não é encontrada ou há falha na conexão.<br>
        🌐 <b>Suporte multilíngue:</b> integração com react-i18next para tradução (ex.: português/inglês).<br>
        🎨 <b>Interface responsiva:</b> design adaptado para mobile e web, com ícones e cores intuitivas.<br><br>
        <b>Download:</b> 📦 <br>
        <a href="application-e6e2843b-2d2e-4794-ac5f-f1223ce8e0fd.apk" download>
          Clique aqui ou no vídeo para baixar o APK
        </a><br>
        <i>Instale diretamente no seu dispositivo Android. Ative “Fontes desconhecidas” nas configurações se necessário.</i>
        </p>
      `,
      video: "./imagens/findWeather.mp4",
      link: "application-e6e2843b-2d2e-4794-ac5f-f1223ce8e0fd.apk"
    },
  {
  name: "Art Pixels Mobile",
  languages: [
    "nodejs.PNG","expo.PNG","css.PNG","ts.PNG","html.PNG","reactNative.PNG"
  ],
  description: `
    <p>
    Aplicativo interativo para criação de arte em pixel, com paleta de cores otimizada, modos de uso personalizados e interface responsiva. Ideal para crianças e adultos explorarem criatividade com simplicidade.
    <br><br>
    📱 <b>Funcionalidades:</b><br><br>
    <b>Paleta de cores clicável</b><br>
    <b>Grade de pixels interativa</b><br>
    <b>Modo Infantil e Modo Tradicional</b><br>
    <b>Botão de limpeza rápida</b><br>
    <b>Mensagem personalizada na tela inicial</b><br>
    <b>Reconhecimento de versão anterior para atualização automática</b><br>
    <br>
    <b>Download:</b> 📦 <br>
    <a href="application-ad18b872-4de1-4799-9260-0506da1169d9.apk" download>
      Clique aqui ou no vídeo para baixar o APK
    </a><br>
    <i>Instale diretamente no seu dispositivo Android. Ative “Fontes desconhecidas” nas configurações se necessário.</i>
    </p>
  `,
  video: "./imagens/art-pixels.mp4",
  link: "application-ad18b872-4de1-4799-9260-0506da1169d9.apk"
},
{
  title: "Projetos de treinamento",
  name: "App-Inicial",
  languages: [
    "nodejs.PNG","nextjs.PNG","tailwind.PNG","ts.PNG","html.PNG","react.PNG","vercel.png"
  ],
  description: `
    <p>
    Projeto desenvolvido com o objetivo de demonstrar diferentes abordagens na utilização de <b>Node.js</b> e <b>Tailwind CSS</b>.<br>
    Foram aplicadas práticas de estilização com Tailwind para destacar sua agilidade e modularidade em comparação com estilos tradicionais.<br>
    Além disso, parte do conteúdo foi estruturado com Next.js, evidenciando sua praticidade na renderização de páginas, roteamento automático e integração com <b>APIs</b>.<br>
    O projeto também inclui testes básicos com <b>ESLint</b>, visando garantir padronização e qualidade no código <b>TypeScript.</b><br>
    As imagens utilizadas são provenientes do serviço Unsplash Source, que atualmente requer autenticação para exibição, podendo ocasionar falhas na renderização das imagens.<br>
    <i>Algumas seções foram implementadas apenas com <b>HTML</b>, o que pode gerar divergências na responsividade e no comportamento de renderização entre diferentes partes do projeto.</i>
    </p>
  `,
  video: "./imagens/AppInicialVideo.mp4",
  link: "https://dfernan6.vercel.app/"
},
{
  name: "Fundamentos",
  languages: [
    "nodejs.PNG","redux.PNG","css.PNG","js.PNG","html.PNG","react.PNG","vercel.png"
  ],
  description: `
    <p>
    Este projeto utiliza <b>Node.js</b> como ambiente de execução para o <i>"backend"</i>, permitindo a criação de <b>APIs</b> rápidas e escaláveis com <b>JavaScript.</b><br>
    O <b>ESLint</b> foi integrado para garantir a qualidade do código, identificando erros e promovendo boas práticas de desenvolvimento, acusando falhas na execução e solicitando correções para que o código tenha uma ótima resposta na execução.<br>
    No <i>"frontend"</i>, o <b>Redux</b> desempenha um papel essencial na gestão de estado da aplicação, permitindo que diferentes componentes compartilhem e atualizem dados de forma previsível e organizada, especialmente útil em aplicações com múltiplas interações e atualizações dinâmicas.<br>
    <b><i>Têm mais explicações sobre os modelos na aplicação.</i></b>
    </p>
  `,
  video: "./imagens/fundamentosReact.mp4",
  link: "https://dfernan6-react.vercel.app/"
},
{name: "#7DaysOfCode - React (Aluritter)",
  languages: [
    "vue.png","js.PNG","html.PNG","tailwind.PNG","react.PNG","vercel.png","firebase.PNG"
  ],
  description: `
    <p>
      <b>Aluritter</b><br><br>
      Durante o desafio <strong>#7DaysOfCode</strong>, desenvolvi uma versão simplificada do Twitter 
      (atualmente chamado de X) utilizando <strong>React</strong>.<br>
      A aplicação foi projetada para consumir e enviar dados em tempo real através do <strong>Firebase</strong>, garantindo uma experiência dinâmica 
      e interativa.<br><br>

      <b><i>Tecnologias Utilizadas</i></b><br><br>
      Vite<br>
      JavaScript<br>
      React<br>
      Firebase<br>
      Tailwind CSS<br><br>

      <b><i>Objetivo</i></b><br><br>
      O principal objetivo foi aplicar conceitos de desenvolvimento front-end moderno, integração com APIs externas 
      e estilização responsiva, criando uma aplicação funcional que simula a dinâmica de uma rede social.
    </p>
  `,
  video: "./imagens/aluritter.mp4",
  link: "https://aluritter-dfernan6.vercel.app/"
},
{name: "#7DaysOfCode - JS e DOM",
  languages: [
    "css.PNG","js.PNG","html.PNG","bootstrap.PNG"
  ],
  description: `
    <p>
      Projeto desenvolvido como parte do desafio <b>Alura</b> <i>#7DaysOfCode</i>. 
      Consiste em uma <b>Web</b> app para cadastro de convidados em uma lista de aniversários, exibindo apenas suas respectivas datas. 
      Durante os sete dias, foram aplicados conceitos de DOM e JavaScript para implementar funcionalidades de cadastro, edição, exclusão e limpeza geral dos dados, 
      utilizando o localStorage como servidor local para fins práticos.<br><br>

      Foi utilizado conjunto de operações fundamentais <b>CRUD:</b><br><br>
      <b>CRUD</b> é um acrônimo que representa as quatro operações básicas usadas em sistemas de gerenciamento de dados:<br>
      - C – Create (Criar): adicionar novos dados<br>
      - R – Read (Ler): consultar ou visualizar dados<br>
      - U – Update (Atualizar): modificar dados existentes<br>
      - D – Delete (Excluir): remover dados<br><br>
      Essas operações são fundamentais em aplicações que interagem com bancos de dados, como sistemas web, apps e softwares administrativos.
    </p>
  `,
  video: "./imagens/Aniversarios.mp4",
  link: "./pages/aniversariantes.html"
},{name: "#7DaysOfCode - Lógicas em JS",
  languages: [
    "css.PNG","js.PNG","html.PNG","bootstrap.PNG"
  ],
  description: `
    <p>
      Projeto desenvolvido como parte do desafio <b>Alura</b> <i>#7DaysOfCode</i>. 
      Consiste em uma <b>Web</b> app que foram inseridos 4 chatBots: Cadastro, Sorteio, Calculadora e Produtos.<br><br>

      Foi utilizado conjunto de operações fundamentais <b>Lógicas de programação:</b><br><br>
      - Variáveis<br>
      - Tipos de dados (string, número, booleano, etc.)<br>
      - Operadores (matemáticos e lógicos)<br>
      - Estruturas condicionais (if, else, switch)<br>
      - Laços de repetição (for, while)<br>
      - Funções<br>
      - Estruturas de dados (arrays, objetos)<br>
      - Manipulação de eventos<br>
      - Entrada e saída de dados<br>
    </p>
  `,
  video: "./imagens/logicas-em-JS.mp4",
  link: "./pages/logicas-em-js/index.html"
}
      ]
    },
formacao: {
  title: "Formações",
  description: "Possuo formação acadêmica sólida com foco em Desenvolvimento Web, onde desenvolvi competências técnicas e teóricas essenciais para minha atuação profissional",
  courses: [
    {
      name: "Sistemas de informação",
      institution: "Descomplica",
      type: "Bacharelado",
      status: "Em andamento 🔄",
      period: "7/2023 - 8/2027"
    },
    {
      name: "Desenvolvimento Web",
      institution: "Trybe",
      type: "Técnico",
      status: "Completo ✅",
      period: "7/2021 - 7/2022"
    },
    {
      name: "Inglês para negócios",
      institution: "EF Education First",
      type: "Técnico",
      status: "Completo ✅",
      period: "11/2018 - 11/2019"
    }
  ],
  certificationsTitle: "Certificações de grande prestígio profissional",
  certifications: [
    {
      name: "CEFR ❗",
      description: "Nível de inglês 🎚️ B2 Acima do intermediário",
      details: "O CEFR (Common European Framework of Reference for Languages) é um padrão internacional..."
    },
    {
      name: "EFSET ❗",
      description: "Inglês para negócios 🎚️ C2 Acima do avançado",
      details: "O EF SET (EF Standard English Test) é um teste gratuito e online..."
    }
  ],
  extras: [
    { name: "CISCO", description: "Fundamentos de cybersecurity ⏳ 33 hrs" },
    { name: "Curso em vídeo", description: "PHP basics, PHP POO, JavaScript, HTML5 ⏳ 160 hrs" },
    { name: "Trybe", description: "Fundamentos do desenvolvimento Web, Front-End, Back-End, Ciência da computação ⏳ 1300 hrs" },
    { name: "MongoDB", description: "MongoDB Node.js Developer Path ⏳ 33 hrs" }
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
  hardSkills: {
                title: "Skills",
  description: "Technical knowledge is essential for my professional performance, enabling efficient solutions, assertive decision-making, and constant evolution in the face of technological challenges",
  categories: [
    {
      title: "Web | Mobile Development",
      skills: [
        { name: "HTML5", image: "html.PNG" },
        { name: "CSS3", image: "css.PNG" },
        { name: "JavaScript", image: "js.PNG" },
        { name: "TypeScript", image: "ts.PNG" },
        { name: "PHP", image: "php.PNG" },
        { name: "ReactJS", image: "react.PNG" },
        { name: "MongoDB", image: "mongodb.PNG" },
        { name: "Rust", image: "rust.PNG" },
        { name: "NodeJS", image: "nodejs.PNG" },
        { name: "NextJS", image: "nextjs.PNG" },
        { name: "Tailwind", image: "tailwind.PNG" },
        { name: "Bash-Shell", image: "bash.PNG" },
        { name: "C", image: "c.PNG" },
        { name: "Firebase", image: "firebase.PNG" },
        { name: "Vercel", image: "vercel.png" },
        { name: "Bootstrap", image: "bootstrap.PNG" },
        { name: "ESLint", image: "eslint.PNG" },
        { name: "Jira", image: "jira.PNG" },
        { name: "Miro", image: "miro.PNG" },
        { name: "Android Studio", image: "androidStudio.PNG" },
        { name: "React Native", image: "reactNative.PNG" },
        { name: "Expo", image: "expo.PNG" },
        { name: "Docker", image: "docker.png" },
        { name: "Kotlin", image: "kotlin.png" },
        { name: "Laravel", image: "laravel.png" },
        { name: "Figma", image: "figma.png" },
        { name: "Trello", image: "trello.png" }
      ]
    },
    {
      title: "IT Analysis",
      skills: [
        { name: "MS-Office", image: "office.PNG" },
        { name: "Acesso Remoto", image: "remote.PNG" },
        { name: "Postman", image: "postman.PNG" },
        { name: "SAP", image: "sap.PNG" },
        { name: "ERP", image: "erp.PNG" },
        { name: "CRM", image: "CRM.PNG" },
        { name: "Zimbra", image: "zimbra.PNG" },
        { name: "ServiceNow", image: "serviceNow.PNG" },
        { name: "Active Directory", image: "activeDirectory.PNG" },
        { name: "Movidesk", image: "movidesk.PNG" }
      ]
    },
    {
      title: "System Analysis and CyberSecurity",
      skills: [
        { name: "Packet Tracer", image: "packet tracer.PNG" },
        { name: "VPN", image: "vpn.PNG" },
        { name: "Wireshark", image: "wireshark.PNG" },
        { name: "UNIX", image: "unix.PNG" }
      ]
    },
    {
  title: "Languages",
  skills: [
    { name: "English", image: "ingles.PNG", level: "Advanced" },
    { name: "German", image: "alemao.PNG", level: "Intermediate" },
    { name: "Portuguese", image: "português.PNG", level: "Native" }
  ]
}
  ]
},
  projetos: {
  title: "Projects",
  description: "Projects developed in classes, training sessions, and for companies are gathered in this section",
  items: [
    {
      title: "Professional Projects",
      name: "Sabores da Lolô",
      languages: ["nodejs.PNG","nextjs.PNG","tailwind.PNG","ts.PNG","html.PNG","postman.PNG","mongodb.PNG","react.PNG","vercel.png"],
      description: `
        <p>
        Sabores da Lolô is a web application developed to facilitate the scheduling and management of artisanal confectionery orders.<br>
        The platform allows customers to choose products such as cakes, sweets, and savory items, set delivery dates with a minimum lead time depending on the item type, and finalize the order with intelligent validations and dynamic alerts.
        <br><br>
        🧑‍💻 <b>Technologies and architecture used:</b><br><br>
        <b>TypeScript (TS):</b> used throughout the project to ensure static typing, safety, and scalability in development.<br>
        <b>Zod:</b> schema validation library used to validate forms and customer data, with translated and customized error messages.<br>
        <b>React + Context API:</b> global state management for cart, customer, and orders, with synchronization between components and local persistence.<br>
        <b>RESTful API:</b> communication between frontend and backend via HTTP routes (POST, PUT, GET), sending structured data in JSON.<br>
        <b>Next.js:</b> framework used for optimized rendering, dynamic routes, and integration with API routes.<br>
        <b>Fetch API:</b> responsible for sending and receiving data between client and server, with error handling and user feedback.<br>
        <b>MongoDB:</b> NoSQL database used for storing customer, cart, and product data.<br>
        <b>Smart alerts:</b> messaging system that informs the user about errors, confirmations, and validations in real time.<br>
        <b>Persistent cart synchronization:</b> the cart is synchronized with the backend and stored locally, preventing data loss during navigation.<br>
        </p>
      `,
      video: "./imagens/saboresdaloloShort.mp4",
      link: "https://saboresdalolo.vercel.app/"
    },{
  title: "Mobile Applications",
  name: "FindWeather",
  languages: [
    "nodejs.PNG","expo.PNG","css.PNG","ts.PNG","html.PNG","reactNative.PNG"
  ],
  description: `
    <p>
    📱 <b>Main Features</b><br><br>
    🔍 City search: search field with magnifying glass icon to locate any city.<br>
    📍 <b>GPS location:</b> button with marker icon to automatically get the weather of the current position.<br>
    🌡️ <b>Current and extended forecast:</b> shows temperature, minimum and maximum, weather conditions, and illustrative icons.<br>
    📅 <b>5-day forecast:</b> cards with daily summary (icon, temperature, min/max).<br>
    ⚠️ <b>Error messages:</b> visual feedback when the city is not found or there is a connection failure.<br>
    🌐 <b>Multilingual support:</b> integration with react-i18next for translation (e.g., Portuguese/English).<br>
    🎨 <b>Responsive interface:</b> design adapted for mobile and web, with intuitive icons and colors.<br><br>
    <b>Download:</b> 📦 <br>
    <a href="application-e6e2843b-2d2e-4794-ac5f-f1223ce8e0fd.apk" download>
      Click here or on the video to download the APK
    </a><br>
    <i>Install directly on your Android device. Enable “Unknown sources” in settings if necessary.</i>
    </p>
  `,
  video: "./imagens/findWeather.mp4",
  link: "application-e6e2843b-2d2e-4794-ac5f-f1223ce8e0fd.apk"
},
{
  name: "Art Pixels Mobile",
  languages: [
    "nodejs.PNG","expo.PNG","css.PNG","ts.PNG","html.PNG","reactNative.PNG"
  ],
  description: `
    <p>
    Interactive application for creating pixel art, with optimized color palette, personalized usage modes, and responsive interface. Ideal for children and adults to explore creativity with simplicity.
    <br><br>
    📱 <b>Features:</b><br><br>
    <b>Clickable color palette</b><br>
    <b>Interactive pixel grid</b><br>
    <b>Kids Mode and Traditional Mode</b><br>
    <b>Quick clean button</b><br>
    <b>Custom message on the home screen</b><br>
    <b>Recognition of previous version for automatic update</b><br>
    <br>
    <b>Download:</b> 📦 <br>
    <a href="application-ad18b872-4de1-4799-9260-0506da1169d9.apk" download>
      Click here or on the video to download the APK
    </a><br>
    <i>Install directly on your Android device. Enable “Unknown sources” in settings if necessary.</i>
    </p>
  `,
  video: "./imagens/art-pixels.mp4",
  link: "application-ad18b872-4de1-4799-9260-0506da1169d9.apk"
},
{
  title: "Training Projects",
  name: "App-Inicial",
  languages: [
    "nodejs.PNG","nextjs.PNG","tailwind.PNG","ts.PNG","html.PNG","react.PNG","vercel.png"
  ],
  description: `
    <p>
    Project developed with the goal of demonstrating different approaches in the use of <b>Node.js</b> and <b>Tailwind CSS</b>.<br>
    Styling practices with Tailwind were applied to highlight its agility and modularity compared to traditional styles.<br>
    In addition, part of the content was structured with Next.js, showing its practicality in page rendering, automatic routing, and integration with <b>APIs</b>.<br>
    The project also includes basic tests with <b>ESLint</b>, aiming to ensure standardization and quality in <b>TypeScript</b> code.<br>
    The images used come from the Unsplash Source service, which currently requires authentication for display, possibly causing rendering failures.<br>
    <i>Some sections were implemented only with <b>HTML</b>, which may cause differences in responsiveness and rendering behavior between different parts of the project.</i>
    </p>
  `,
  video: "./imagens/AppInicialVideo.mp4",
  link: "https://dfernan6.vercel.app/"
},
{
  name: "Fundamentos",
  languages: [
    "nodejs.PNG","redux.PNG","css.PNG","js.PNG","html.PNG","react.PNG","vercel.png"
  ],
  description: `
    <p>
    This project uses <b>Node.js</b> as the runtime environment for the <i>"backend"</i>, enabling the creation of fast and scalable <b>APIs</b> with <b>JavaScript</b>.<br>
    <b>ESLint</b> was integrated to ensure code quality, identifying errors and promoting good development practices, pointing out execution failures and requesting corrections so that the code performs optimally.<br>
    On the <i>"frontend"</i>, <b>Redux</b> plays an essential role in application state management, allowing different components to share and update data in a predictable and organized way, especially useful in applications with multiple interactions and dynamic updates.<br>
    <b><i>There are more explanations about the models in the application.</i></b>
    </p>
  `,
  video: "./imagens/fundamentosReact.mp4",
  link: "https://dfernan6-react.vercel.app/"
},{name: "#7DaysOfCode - React (Aluritter)",
  languages: [
    "vue.png","js.PNG","html.PNG","tailwind.PNG","react.PNG","vercel.png","firebase.PNG"
  ],
  description: `
    <p>
      <b>Aluritter</b><br><br>
      During the <strong>#7DaysOfCode</strong> challenge, I developed a simplified version of Twitter (currently called X) using <strong>React</strong>.<br>
      The application was designed to consume and send data in real time through <strong>Firebase</strong>, ensuring a dynamic and interactive experience.<br><br>

      <b><i>Technologies Used</i></b><br><br>
      Vite<br>
      JavaScript<br>
      React<br>
      Firebase<br>
      Tailwind CSS<br><br>

      <b><i>Objective</i></b><br><br>
      The main objective was to apply modern front-end development concepts, integration with external APIs, and responsive styling, creating a functional application that simulates the dynamics of a social network.
    </p>
  `,
  video: "./imagens/aluritter.mp4",
  link: "https://aluritter-dfernan6.vercel.app/"
},{name: "#7DaysOfCode - JS and DOM",
  languages: [
    "css.PNG","js.PNG","html.PNG","bootstrap.PNG"
  ],
  description: `
    <p>
      Project developed as part of the <b>Alura</b> <i>#7DaysOfCode</i> challenge. It consists of a <b>Web</b> app for registering guests in a birthday list, displaying only their respective dates. During the seven days, concepts of DOM and JavaScript were applied to implement functionalities for registration, editing, deletion, and general data cleaning, using localStorage as a local server for practical purposes.<br><br>

      The fundamental set of operations <b>CRUD</b> was used:<br><br>
      <b>CRUD</b> is an acronym that represents the four basic operations used in data management systems:<br>
      - C – Create: add new data<br>
      - R – Read: query or view data<br>
      - U – Update: modify existing data<br>
      - D – Delete: remove data<br><br>
      These operations are fundamental in applications that interact with databases, such as web systems, apps, and administrative software.
    </p>
  `,
  video: "./imagens/Aniversarios.mp4",
  link: "./pages/aniversariantes.html"
},{name: "#7DaysOfCode - Logic in JS",
  languages: [
    "css.PNG","js.PNG","html.PNG","bootstrap.PNG"
  ],
  description: `
    <p>
      Project developed as part of the <b>Alura</b> <i>#7DaysOfCode</i> challenge. It consists of a <b>Web</b> app that includes 4 chatBots: Registration, Lottery, Calculator, and Products.<br><br>

      The fundamental set of operations <b>Programming Logic</b> was used:<br><br>
      - Variables<br>
      - Data types (string, number, boolean, etc.)<br>
      - Operators (mathematical and logical)<br>
      - Conditional structures (if, else, switch)<br>
      - Loops (for, while)<br>
      - Functions<br>
      - Data structures (arrays, objects)<br>
      - Event handling<br>
      - Input and output of data<br>
    </p>
  `,
    video: "./imagens/logicas-em-JS.mp4",
    link: "./pages/logicas-em-js/index.html"
  } 
]
  },
formacao: {
  title: "Education",
  description: "I have a solid academic background focused on Web Development, where I developed essential technical and theoretical skills for my professional career.",
  courses: [
    {
      name: "Information Systems",
      institution: "Descomplica",
      type: "Bachelor’s Degree",
      status: "In progress 🔄",
      period: "07/2023 - 08/2027"
    },
    {
      name: "Web Development",
      institution: "Trybe",
      type: "Technical",
      status: "Completed ✅",
      period: "07/2021 - 07/2022"
    },
    {
      name: "Business English",
      institution: "EF Education First",
      type: "Technical",
      status: "Completed ✅",
      period: "11/2018 - 11/2019"
    }
  ],
  certificationsTitle: "Certifications of high professional prestige", 
  certifications: [
    {
      name: "CEFR ❗",
      description: "English level 🎚️ B2 Upper Intermediate",
      details: "The CEFR (Common European Framework of Reference for Languages) is an international standard that classifies language proficiency into six levels, from A1 (beginner) to C2 (fluent)."
    },
    {
      name: "EFSET ❗",
      description: "Business English 🎚️ C2 Advanced",
      details: "The EF SET (EF Standard English Test) is a free online English proficiency test developed by EF Education First, aligned with CEFR levels."
    }
  ],
  extras: [
    { name: "CISCO", description: "Cybersecurity Fundamentals ⏳ 33 hrs" },
    { name: "Curso em Vídeo", description: "PHP basics, PHP OOP, JavaScript, HTML5 ⏳ 160 hrs" },
    { name: "Trybe", description: "Web Development Fundamentals, Front-End, Back-End, Computer Science ⏳ 1300 hrs" },
    { name: "MongoDB", description: "MongoDB Node.js Developer Path ⏳ 33 hrs" }
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
  hardSkills: {
                title: "Fähigkeiten",
  description: "Technisches Wissen ist entscheidend für meine berufliche Leistung, ermöglicht effiziente Lösungen, fundierte Entscheidungen und ständige Weiterentwicklung angesichts technologischer Herausforderungen",
  categories: [
    {
      title: "Web | Mobile Entwicklung",
      skills: [
        { name: "HTML5", image: "html.PNG" },
        { name: "CSS3", image: "css.PNG" },
        { name: "JavaScript", image: "js.PNG" },
        { name: "TypeScript", image: "ts.PNG" },
        { name: "PHP", image: "php.PNG" },
        { name: "ReactJS", image: "react.PNG" },
        { name: "MongoDB", image: "mongodb.PNG" },
        { name: "Rust", image: "rust.PNG" },
        { name: "NodeJS", image: "nodejs.PNG" },
        { name: "NextJS", image: "nextjs.PNG" },
        { name: "Tailwind", image: "tailwind.PNG" },
        { name: "Bash-Shell", image: "bash.PNG" },
        { name: "C", image: "c.PNG" },
        { name: "Firebase", image: "firebase.PNG" },
        { name: "Vercel", image: "vercel.png" },
        { name: "Bootstrap", image: "bootstrap.PNG" },
        { name: "ESLint", image: "eslint.PNG" },
        { name: "Jira", image: "jira.PNG" },
        { name: "Miro", image: "miro.PNG" },
        { name: "Android Studio", image: "androidStudio.PNG" },
        { name: "React Native", image: "reactNative.PNG" },
        { name: "Expo", image: "expo.PNG" },
        { name: "Docker", image: "docker.png" },
        { name: "Kotlin", image: "kotlin.png" },
        { name: "Laravel", image: "laravel.png" },
        { name: "Figma", image: "figma.png" },
        { name: "Trello", image: "trello.png" }
      ]
    },
    {
      title: "IT-Analyse",
      skills: [
        { name: "MS-Office", image: "office.PNG" },
        { name: "Acesso Remoto", image: "remote.PNG" },
        { name: "Postman", image: "postman.PNG" },
        { name: "SAP", image: "sap.PNG" },
        { name: "ERP", image: "erp.PNG" },
        { name: "CRM", image: "CRM.PNG" },
        { name: "Zimbra", image: "zimbra.PNG" },
        { name: "ServiceNow", image: "serviceNow.PNG" },
        { name: "Active Directory", image: "activeDirectory.PNG" },
        { name: "Movidesk", image: "movidesk.PNG" }
      ]
    },
    {
      title: "Systemanalyse und CyberSecurity",
      skills: [
        { name: "Packet Tracer", image: "packet tracer.PNG" },
        { name: "VPN", image: "vpn.PNG" },
        { name: "Wireshark", image: "wireshark.PNG" },
        { name: "UNIX", image: "unix.PNG" }
      ]
    },
    {
  title: "Sprachen",
  skills: [
    { name: "Englisch", image: "ingles.PNG", level: "Fortgeschritten" },
    { name: "Deutsch", image: "alemao.PNG", level: "Mittelstufe" },
    { name: "Portugiesisch", image: "português.PNG", level: "Muttersprache" }
  ]
}

  ]
},projetos: {
  title: "Projekte",
  description: "In dieser Sektion sind Projekte aus Unterricht, Trainings und für Unternehmen zusammengefasst",
  items: [
    {
      title: "Professionelle Projekte",
      name: "Sabores da Lolô",
      languages: ["nodejs.PNG","nextjs.PNG","tailwind.PNG","ts.PNG","html.PNG","postman.PNG","mongodb.PNG","react.PNG","vercel.png"],
      description: `
        <p>
        Sabores da Lolô ist eine Webanwendung, die entwickelt wurde, um die Terminplanung und Verwaltung von Bestellungen für handwerkliche Konditoreiwaren zu erleichtern.<br>
        Die Plattform ermöglicht es Kunden, Produkte wie Kuchen, Süßigkeiten und herzhafte Speisen auszuwählen, Liefertermine mit einer Mindestvorlaufzeit je nach Artikeltyp festzulegen und die Bestellung mit intelligenten Validierungen und dynamischen Warnungen abzuschließen.
        <br><br>
        🧑‍💻 <b>Verwendete Technologien und Architektur:</b><br><br>
        <b>TypeScript (TS):</b> im gesamten Projekt eingesetzt, um statische Typisierung, Sicherheit und Skalierbarkeit zu gewährleisten.<br>
        <b>Zod:</b> Schema-Validierungsbibliothek zur Validierung von Formularen und Kundendaten, mit übersetzten und angepassten Fehlermeldungen.<br>
        <b>React + Context API:</b> globales Zustandsmanagement für Warenkorb, Kunden und Bestellungen, mit Synchronisation zwischen Komponenten und lokaler Persistenz.<br>
        <b>RESTful API:</b> Kommunikation zwischen Frontend und Backend über HTTP-Routen (POST, PUT, GET), mit strukturierten JSON-Daten.<br>
        <b>Next.js:</b> Framework für optimiertes Rendering, dynamische Routen und Integration mit API-Routen.<br>
        <b>Fetch API:</b> verantwortlich für das Senden und Empfangen von Daten zwischen Client und Server, mit Fehlerbehandlung und Benutzerfeedback.<br>
        <b>MongoDB:</b> NoSQL-Datenbank zur Speicherung von Kunden-, Warenkorb- und Produktdaten.<br>
        <b>Intelligente Warnungen:</b> Nachrichtensystem, das den Benutzer in Echtzeit über Fehler, Bestätigungen und Validierungen informiert.<br>
        <b>Persistente Warenkorb-Synchronisation:</b> der Warenkorb wird mit dem Backend synchronisiert und lokal gespeichert, um Datenverlust während der Navigation zu verhindern.<br>
        </p>
      `,
      video: "./imagens/saboresdaloloShort.mp4",
      link: "https://saboresdalolo.vercel.app/"
    },
    {
  title: "Mobile Anwendungen",
  name: "FindWeather",
  languages: [
    "nodejs.PNG","expo.PNG","css.PNG","ts.PNG","html.PNG","reactNative.PNG"
  ],
  description: `
    <p>
    📱 <b>Hauptfunktionen</b><br><br>
    🔍 Stadtsuche: Suchfeld mit Lupensymbol, um jede Stadt zu finden.<br>
    📍 <b>GPS-Standort:</b> Schaltfläche mit Markierungssymbol, um automatisch das Wetter der aktuellen Position abzurufen.<br>
    🌡️ <b>Aktuelle und erweiterte Vorhersage:</b> zeigt Temperatur, Minimum und Maximum, Wetterbedingungen und illustrative Symbole.<br>
    📅 <b>5-Tage-Vorhersage:</b> Karten mit täglicher Zusammenfassung (Symbol, Temperatur, Min/Max).<br>
    ⚠️ <b>Fehlermeldungen:</b> visuelles Feedback, wenn die Stadt nicht gefunden wird oder eine Verbindungsstörung vorliegt.<br>
    🌐 <b>Mehrsprachige Unterstützung:</b> Integration mit react-i18next für Übersetzungen (z. B. Portugiesisch/Englisch).<br>
    🎨 <b>Responsive Oberfläche:</b> Design für Mobile und Web angepasst, mit intuitiven Symbolen und Farben.<br><br>
    <b>Download:</b> 📦 <br>
    <a href="application-e6e2843b-2d2e-4794-ac5f-f1223ce8e0fd.apk" download>
      Hier klicken oder im Video, um die APK herunterzuladen
    </a><br>
    <i>Direkt auf Ihrem Android-Gerät installieren. Aktivieren Sie „Unbekannte Quellen“ in den Einstellungen, falls erforderlich.</i>
    </p>
  `,
  video: "./imagens/findWeather.mp4",
  link: "application-e6e2843b-2d2e-4794-ac5f-f1223ce8e0fd.apk"
},
{
  name: "Art Pixels Mobile",
  languages: [
    "nodejs.PNG","expo.PNG","css.PNG","ts.PNG","html.PNG","reactNative.PNG"
  ],
  description: `
    <p>
    Interaktive Anwendung zur Erstellung von Pixelkunst, mit optimierter Farbpalette, personalisierten Nutzungsmodi und responsiver Oberfläche. Ideal für Kinder und Erwachsene, um Kreativität einfach zu entfalten.
    <br><br>
    📱 <b>Funktionen:</b><br><br>
    <b>Klickbare Farbpalette</b><br>
    <b>Interaktives Pixelraster</b><br>
    <b>Kinder-Modus und Traditioneller Modus</b><br>
    <b>Schnell-Lösch-Schaltfläche</b><br>
    <b>Benutzerdefinierte Nachricht auf dem Startbildschirm</b><br>
    <b>Erkennung der vorherigen Version für automatische Aktualisierung</b><br>
    <br>
    <b>Download:</b> 📦 <br>
    <a href="application-ad18b872-4de1-4799-9260-0506da1169d9.apk" download>
      Hier klicken oder im Video, um die APK herunterzuladen
    </a><br>
    <i>Direkt auf Ihrem Android-Gerät installieren. Aktivieren Sie „Unbekannte Quellen“ in den Einstellungen, falls erforderlich.</i>
    </p>
  `,
  video: "./imagens/art-pixels.mp4",
  link: "application-ad18b872-4de1-4799-9260-0506da1169d9.apk"
},{
  title: "Trainingsprojekte",
  name: "App-Inicial",
  languages: [
    "nodejs.PNG","nextjs.PNG","tailwind.PNG","ts.PNG","html.PNG","react.PNG","vercel.png"
  ],
  description: `
    <p>
    Projekt entwickelt mit dem Ziel, verschiedene Ansätze bei der Verwendung von <b>Node.js</b> und <b>Tailwind CSS</b> zu demonstrieren.<br>
    Es wurden Styling-Praktiken mit Tailwind angewendet, um seine Agilität und Modularität im Vergleich zu traditionellen Stilen hervorzuheben.<br>
    Außerdem wurde ein Teil des Inhalts mit Next.js strukturiert, was seine Praktikabilität bei der Seitenrenderung, automatischem Routing und Integration mit <b>APIs</b> zeigt.<br>
    Das Projekt enthält auch grundlegende Tests mit <b>ESLint</b>, um Standardisierung und Qualität im <b>TypeScript</b>-Code zu gewährleisten.<br>
    Die verwendeten Bilder stammen vom Dienst Unsplash Source, der derzeit eine Authentifizierung für die Anzeige erfordert, was zu Rendering-Fehlern führen kann.<br>
    <i>Einige Abschnitte wurden nur mit <b>HTML</b> implementiert, was Unterschiede in der Responsivität und im Renderverhalten zwischen verschiedenen Teilen des Projekts verursachen kann.</i>
    </p>
  `,
  video: "./imagens/AppInicialVideo.mp4",
  link: "https://dfernan6.vercel.app/"
},
{
  name: "Fundamentos",
  languages: [
    "nodejs.PNG","redux.PNG","css.PNG","js.PNG","html.PNG","react.PNG","vercel.png"
  ],
  description: `
    <p>
    Dieses Projekt verwendet <b>Node.js</b> als Laufzeitumgebung für das <i>"Backend"</i>, wodurch die Erstellung schneller und skalierbarer <b>APIs</b> mit <b>JavaScript</b> ermöglicht wird.<br>
    <b>ESLint</b> wurde integriert, um die Codequalität sicherzustellen, Fehler zu identifizieren und gute Entwicklungspraktiken zu fördern, Ausführungsfehler aufzuzeigen und Korrekturen anzufordern, damit der Code optimal funktioniert.<br>
    Im <i>"Frontend"</i> spielt <b>Redux</b> eine wesentliche Rolle im Zustandsmanagement der Anwendung, sodass verschiedene Komponenten Daten auf vorhersehbare und organisierte Weise teilen und aktualisieren können, besonders nützlich in Anwendungen mit mehreren Interaktionen und dynamischen Aktualisierungen.<br>
    <b><i>Weitere Erklärungen zu den Modellen finden Sie in der Anwendung.</i></b>
    </p>
  `,
  video: "./imagens/fundamentosReact.mp4",
  link: "https://dfernan6-react.vercel.app/"
},{
  name: "#7DaysOfCode - React (Aluritter)",
  languages: [
    "vue.png","js.PNG","html.PNG","tailwind.PNG","react.PNG","vercel.png","firebase.PNG"
  ],
  description: `
    <p>
      <b>Aluritter</b><br><br>
      Während der <strong>#7DaysOfCode</strong>-Challenge habe ich eine vereinfachte Version von Twitter 
      (heute X genannt) mit <strong>React</strong> entwickelt.<br>
      Die Anwendung wurde entwickelt, um Daten in Echtzeit über <strong>Firebase</strong> zu konsumieren und zu senden, 
      und bietet so eine dynamische und interaktive Erfahrung.<br><br>

      <b><i>Verwendete Technologien</i></b><br><br>
      Vite<br>
      JavaScript<br>
      React<br>
      Firebase<br>
      Tailwind CSS<br><br>

      <b><i>Ziel</i></b><br><br>
      Das Hauptziel war die Anwendung moderner Frontend-Entwicklungskonzepte, die Integration mit externen APIs 
      und responsives Styling, um eine funktionale Anwendung zu schaffen, die die Dynamik eines sozialen Netzwerks simuliert.
    </p>
  `,
  video: "./imagens/aluritter.mp4",
  link: "https://aluritter-dfernan6.vercel.app/"
},
{
  name: "#7DaysOfCode - JS und DOM",
  languages: [
    "css.PNG","js.PNG","html.PNG","bootstrap.PNG"
  ],
  description: `
    <p>
      Projekt entwickelt als Teil der <b>Alura</b> <i>#7DaysOfCode</i>-Challenge. 
      Es handelt sich um eine <b>Web</b>-App zur Registrierung von Gästen in einer Geburtstagsliste, die nur ihre jeweiligen Daten anzeigt. 
      Während der sieben Tage wurden DOM- und JavaScript-Konzepte angewendet, um Funktionen wie Registrierung, Bearbeitung, Löschung und allgemeines Löschen von Daten zu implementieren, 
      wobei localStorage als lokaler Server für praktische Zwecke verwendet wurde.<br><br>

      Es wurde ein Satz grundlegender <b>CRUD</b>-Operationen verwendet:<br><br>
      <b>CRUD</b> ist ein Akronym für die vier grundlegenden Operationen in Datenverwaltungssystemen:<br>
      - C – Create (Erstellen): neue Daten hinzufügen<br>
      - R – Read (Lesen): Daten abfragen oder anzeigen<br>
      - U – Update (Aktualisieren): vorhandene Daten ändern<br>
      - D – Delete (Löschen): Daten entfernen<br><br>
      Diese Operationen sind grundlegend für Anwendungen, die mit Datenbanken interagieren, wie Websysteme, Apps und Verwaltungssoftware.
    </p>
  `,
  video: "./imagens/Aniversarios.mp4",
  link: "./pages/aniversariantes.html"
},
{
  name: "#7DaysOfCode - JS Logik",
  languages: [
    "css.PNG","js.PNG","html.PNG","bootstrap.PNG"
  ],
  description: `
    <p>
      Projekt entwickelt als Teil der <b>Alura</b> <i>#7DaysOfCode</i>-Challenge. 
      Es handelt sich um eine <b>Web</b>-App, in der 4 ChatBots implementiert wurden: Registrierung, Lotterie, Rechner und Produkte.<br><br>

      Es wurden grundlegende <b>Programmierungslogik</b>-Konzepte verwendet:<br><br>
      - Variablen<br>
      - Datentypen (String, Zahl, Boolean usw.)<br>
      - Operatoren (mathematisch und logisch)<br>
      - Bedingungsstrukturen (if, else, switch)<br>
      - Schleifen (for, while)<br>
      - Funktionen<br>
      - Datenstrukturen (Arrays, Objekte)<br>
      - Ereignisbehandlung<br>
      - Ein- und Ausgabe von Daten<br>
    </p>
  `,
  video: "./imagens/logicas-em-JS.mp4",
  link: "./pages/logicas-em-js/index.html"
}
  ]
    },
formacao: {
  title: "Ausbildung",
  description: "Ich verfüge über eine solide akademische Ausbildung mit Schwerpunkt Webentwicklung, in der ich wesentliche technische und theoretische Kompetenzen für meine berufliche Laufbahn entwickelt habe.",
  courses: [
    {
      name: "Informatiksysteme",
      institution: "Descomplica",
      type: "Bachelor",
      status: "Laufend 🔄",
      period: "07/2023 - 08/2027"
    },
    {
      name: "Webentwicklung",
      institution: "Trybe",
      type: "Technisch",
      status: "Abgeschlossen ✅",
      period: "07/2021 - 07/2022"
    },
    {
      name: "Business Englisch",
      institution: "EF Education First",
      type: "Technisch",
      status: "Abgeschlossen ✅",
      period: "11/2018 - 11/2019"
    }
  ],
  certificationsTitle: "Zertifizierungen von hohem beruflichen Prestige",
  certifications: [
    {
      name: "CEFR ❗",
      description: "Englisch-Niveau 🎚️ B2 Oberes Mittelstufe",
      details: "Der CEFR (Gemeinsamer Europäischer Referenzrahmen für Sprachen) ist ein internationaler Standard, der die Sprachkompetenz in sechs Stufen von A1 (Anfänger) bis C2 (fließend) einteilt."
    },
    {
      name: "EFSET ❗",
      description: "Business Englisch 🎚️ C2 Fortgeschritten",
      details: "Der EF SET (EF Standard English Test) ist ein kostenloser Online-Test zur Englischkenntnis, entwickelt von EF Education First und ausgerichtet an den CEFR-Stufen."
    }
  ],
  extras: [
    { name: "CISCO", description: "Grundlagen der Cybersicherheit ⏳ 33 Std." },
    { name: "Curso em Vídeo", description: "PHP Grundlagen, PHP OOP, JavaScript, HTML5 ⏳ 160 Std." },
    { name: "Trybe", description: "Grundlagen der Webentwicklung, Front-End, Back-End, Informatik ⏳ 1300 Std." },
    { name: "MongoDB", description: "MongoDB Node.js Entwicklerpfad ⏳ 33 Std." }
  ]
}
  }
}
// Social Links (iguais em todos os idiomas)
const socialLinks = [
  { icon: '🔗', label: 'GitHub', url: 'https://github.com/dfernan6' },
  { icon: '💼', label: 'LinkedIn', url: 'https://www.linkedin.com/in/dfernan6/' },
  { icon: '📱', label: 'WhatsApp', url: 'https://wa.me/5516997941722' },
  { icon: '📧', label: 'Email', url: 'mailto:danilo.afernandes@outlook.com' }
];