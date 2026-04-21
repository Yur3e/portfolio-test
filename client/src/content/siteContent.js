export const siteContent = {
  pt: {
    profile: {
      name: "José Yure da Silva Fernandes",
      title: "Desenvolvedor de Software | Estudante de Ciência de Dados",
      subtitle:
        "Desenvolvo aplicações e projetos orientados a dados com foco em clareza, boa estrutura, experiência do usuário e evolução constante.",
      location: "João Pessoa, PB",
      email: "joseyure.dev@gmail.com",
      linkedin: "https://www.linkedin.com/in/yurefernandes/",
      github: "https://github.com/Yur3e",
      resume: "/resume-placeholder.txt"
    },
    intro: {
      loading: "Portfólio carregando",
      ready: "Role para entrar",
      helperLoading: "Preparando a entrada do portfólio.",
      helperReady: "Desça o scroll para revelar o portfólio.",
      wait: "Aguarde"
    },
    languageSwitcher: {
      pt: "Português",
      en: "English"
    },
    game: {
      hudAriaLabel: "Painel de campanha do portfólio",
      hudKicker: "Campanha",
      hudTitle: "Jornada do Portfólio",
      hudDescription:
        "Cada seção agora funciona como uma zona explorável com objetivo, recompensa e progresso.",
      progressLabel: "Exploração",
      activeLabel: "Zona ativa",
      difficultyLabel: "Dificuldade",
      objectiveLabel: "Objetivo",
      rewardLabel: "Recompensa",
      sections: [
        {
          id: "sobre",
          level: "Lvl 01",
          label: "Prólogo do Player",
          objective: "Ler o perfil",
          reward: "+ contexto do dev",
          difficulty: "Baixa"
        },
        {
          id: "stacks",
          level: "Lvl 02",
          label: "Inventário Técnico",
          objective: "Inspecionar stack",
          reward: "+ build desbloqueada",
          difficulty: "Baixa"
        },
        {
          id: "projetos",
          level: "Lvl 03",
          label: "Missões em Campo",
          objective: "Abrir projetos",
          reward: "+ portfólio prático",
          difficulty: "Média"
        },
        {
          id: "experiencia",
          level: "Lvl 04",
          label: "Log de Batalhas",
          objective: "Ler trajetória",
          reward: "+ XP acumulado",
          difficulty: "Alta"
        },
        {
          id: "contato",
          level: "Lvl 05",
          label: "Quest Final",
          objective: "Iniciar contato",
          reward: "+ conexão direta",
          difficulty: "Boss"
        }
      ]
    },
    hero: {
      available: "Disponível para oportunidades",
      lead:
        "Interfaces com presença, lógica organizada e projetos onde visual e dados conversam de verdade.",
      sheetTitle: "Ficha do player",
      stats: [
        { label: "Classe", value: "Dev de Software" },
        { label: "Build", value: "Web + Dados" },
        { label: "Base", value: "João Pessoa, PB" },
        { label: "Modo", value: "Disponível" }
      ],
      pillarsLabel: "Pilares da proposta de valor",
      pillars: [
        "Frontend com identidade e sensação de sistema vivo.",
        "Backends pensados para manutenção, clareza e evolução.",
        "Projetos orientados a dados, métricas e leitura de contexto."
      ],
      supportTitle: "Cena interativa",
      supportText:
        "O d20 agora fica solto pela página inteira. Você pode arrastar, girar, arremessar nas bordas e clicar para forçar uma nova rolagem.",
      viewProjects: "Ver projetos",
      linkedin: "LinkedIn",
      fieldKicker: "Campo d20",
      fieldTitle: "Mova, carregue, solte e role de novo.",
      fieldBody:
        "Um campo inspirado em rolagens de d20, partículas vivas e visualização de estados para dar personalidade real ao topo da página.",
      fieldRoll: "Rolagem",
      fieldCharge: "Carga",
      fieldFocus: "Foco",
      fieldModeLabel: "Estado",
      fieldModeIdle: "Órbita livre",
      fieldModeHover: "Campo em leitura",
      fieldModeHold: "Carga acumulando",
      fieldModeBurst: "Release executado",
      fieldReroll: "Rolar d20",
      fieldHint: "Passe o mouse para deformar o campo. Clique e segure para acumular energia."
    },
    dice: {
      hint: "Arraste, gire e solte",
      ariaLabel: "Dado d20 interativo"
    },
    about: {
      eyebrow: "Sobre mim",
      title: "Quem sou eu",
      description: "Resumo profissional e foco de atuação.",
      codexTitle: "Resumo rapido",
      codexItems: [
        { label: "Origem", value: "UEPB · Ciência de Dados" },
        { label: "Foco", value: "Frontend, backend e dados" },
        { label: "Estilo", value: "Clareza, estrutura e evolução" }
      ],
      statsTitle: "Areas de foco",
      stats: [
        { label: "Arquitetura", value: "78" },
        { label: "UX/UI", value: "72" },
        { label: "Dados", value: "80" }
      ],
      paragraphs: [
        "Sou estudante de Ciência de Dados na Universidade Estadual da Paraíba e desenvolvedor em formação, com interesse em criar soluções que unam desenvolvimento web, organização de software e análise de dados. Tenho construído projetos com React, Node.js, Python e banco de dados, sempre buscando transformar ideias em aplicações claras, funcionais e bem estruturadas.",
        "Busco crescer como desenvolvedor júnior com boa base técnica, visão analítica e atenção à manutenção do código, sempre evoluindo entre desenvolvimento web, backend e projetos orientados a dados."
      ]
    },
    stacks: {
      eyebrow: "Tecnologias",
      title: "Stacks principais",
      description: "Ferramentas e linguagens com as quais venho construindo projetos.",
      inventoryTitle: "Stack atual",
      inventoryText:
        "Cada item da build compõe o loadout usado para criar aplicações web, backends e projetos orientados a dados."
    },
    projectsSection: {
      eyebrow: "Projetos",
      title: "Projetos em destaque",
      description: "Alguns trabalhos e ideias que representam minha forma de desenvolver.",
      demo: "Demo",
      repo: "Repositório",
      missionLabel: "Tipo",
      rewardLabel: "Recompensa",
      missions: ["Side Quest", "Dungeon Run", "Data Raid"],
      rewards: ["UX refinada", "Fluxo validado", "Insight aplicado"]
    },
    projects: [
      {
        title: "Organizador de Filmes",
        description:
          "Aplicação para PC, web e mobile para organizar filmes, favoritar títulos e marcar assistidos, com foco em experiência do usuário e boa estrutura de dados.",
        tech: ["React", "Node.js", "SQLite", "API REST"],
        demo: "#",
        repo: "#"
      },
      {
        title: "Sistema de Cadastro e Atendimento",
        description:
          "Protótipo com login, cadastro e geração de ficha de atendimento, pensado para fluxo mobile e apresentação profissional.",
        tech: ["React", "JavaScript", "UI/UX", "Figma"],
        demo: "#",
        repo: "#"
      },
      {
        title: "Bilhetrometro",
        description:
          "Projeto orientado a dados com coleta, tratamento e visualização interativa de informações, utilizando Pandas, NumPy, Streamlit e Altair para gerar análises mais claras e acessíveis.",
        tech: ["Python", "Pandas", "NumPy", "Streamlit", "Altair"],
        demo: "#",
        repo: "https://github.com/Yur3e/bilhetrometro"
      }
    ],
    experienceSection: {
      eyebrow: "Experiência",
      title: "Trajetória",
      description: "Experiências que construíram minha base técnica e prática.",
      rankLabel: "Tier",
      rewardLabel: "XP",
      ranks: ["Elite", "Tático", "Veterano", "Research"]
    },
    experience: [
      {
        title: "Estagiário",
        company: "SMN Tecnologia da Informação",
        employmentType: "Estágio",
        period: "out. de 2025 - o momento",
        duration: "7 meses",
        location: "João Pessoa, Paraíba, Brasil",
        mode: "No local",
        tech: ["C#"],
        bullets: [
          "Apoio atividades de desenvolvimento e manutenção de sistemas em C#, trabalhando com padrões MVC, organização baseada em Clean Code e integrações com SQL Server."
        ]
      },
      {
        title: "Desenvolvedor - Freelancer",
        company: "Freelancer",
        employmentType: "Freelance",
        period: "set. de 2023 - abr. de 2024",
        duration: "8 meses",
        location: "João Pessoa, Paraíba, Brasil",
        mode: "Remoto",
        tech: [],
        bullets: [
          "Desenvolvi soluções web com Python (Flask e Django) e JavaScript, entregando funcionalidades sob medida e interfaces alinhadas aos objetivos de cada projeto.",
          "Estruturei e mantive APIs e sistemas web, assegurando integração consistente entre frontend, backend e regras de negócio.",
          "Otimizei fluxos de consulta, organização e atualização de dados, elevando a confiabilidade das informações e a eficiência operacional das aplicações."
        ]
      },
      {
        title: "Técnico de suporte de informática",
        company: "Freelance (Self employed)",
        employmentType: "Freelance",
        period: "jan. de 2014 - jun. de 2023",
        duration: "9 anos e 6 meses",
        location: "João Pessoa, Paraíba, Brasil",
        mode: "Híbrido",
        tech: ["IT Hardware Support", "Suporte técnico"],
        bullets: [
          "Otimizei a infraestrutura de hardware e software por meio de diagnóstico técnico, correção de falhas e melhoria contínua do desempenho de sistemas e redes.",
          "Gerenciei o ciclo de vida de equipamentos, da aquisição e montagem à manutenção e descarte, promovendo maior organização, disponibilidade e continuidade operacional."
        ]
      },
      {
        title: "Pesquisador Jr & Mobile Development",
        company: "Universidade Federal da Paraíba",
        employmentType: "Trainee",
        period: "ago. de 2019 - fev. de 2020",
        duration: "7 meses",
        location: "João Pessoa, Paraíba, Brasil",
        mode: "Presencial",
        tech: ["C#", "Unity 3D", "Unity Android Build Support (APK)"],
        note: "Bolsista do Programa Institucional de Bolsas de Iniciação Científica - PIBIC - EM/CNPq/UFPB.",
        bullets: [
          "Desenvolvi uma aplicação educacional em Unity 3D com C#, unindo lógica de programação e proposta pedagógica.",
          "Apliquei princípios de Serious Games e gamificação para tornar a experiência mais engajadora e orientada ao objetivo do projeto.",
          "Conduzi o processo de build para Android (APK), apoiando a validação prática da aplicação em ambiente mobile."
        ]
      }
    ],
    contact: {
      eyebrow: "Contato",
      title: "Disponível para novas oportunidades",
      description:
        "Estou disponível para oportunidades em desenvolvimento de software, com interesse em contribuir com projetos bem estruturados, aprender com times experientes e gerar valor com soluções consistentes.",
      finalQuestTitle: "Quest final",
      finalQuestText:
        "Se a campanha fizer sentido para o seu time, o portal final é simples: me chama e vamos transformar briefing em entrega.",
      contactButton: "Entrar em contato",
      github: "GitHub",
      resume: "Currículo",
      name: "Nome",
      email: "E-mail",
      message: "Mensagem",
      namePlaceholder: "Seu nome",
      emailPlaceholder: "seuemail@exemplo.com",
      messagePlaceholder: "Digite sua mensagem",
      submitting: "Enviando...",
      submit: "Enviar mensagem",
      sendError: "Não foi possível enviar a mensagem.",
      genericError: "Erro ao enviar a mensagem."
    },
  },
  en: {
    profile: {
      name: "José Yure da Silva Fernandes",
      title: "Software Developer | Data Science Student",
      subtitle:
        "I build applications and data-oriented projects with a focus on clarity, solid structure, user experience, and continuous growth.",
      location: "João Pessoa, PB, Brazil",
      email: "joseyure.dev@gmail.com",
      linkedin: "https://www.linkedin.com/in/yurefernandes/",
      github: "https://github.com/Yur3e",
      resume: "/resume-placeholder.txt"
    },
    intro: {
      loading: "Loading portfolio",
      ready: "Scroll to enter",
      helperLoading: "Preparing the portfolio intro.",
      helperReady: "Scroll down to reveal the portfolio.",
      wait: "Please wait"
    },
    languageSwitcher: {
      pt: "Portuguese",
      en: "English"
    },
    game: {
      hudAriaLabel: "Portfolio campaign panel",
      hudKicker: "Campaign",
      hudTitle: "Portfolio Journey",
      hudDescription:
        "Each section now behaves like an explorable zone with an objective, reward, and progression.",
      progressLabel: "Exploration",
      activeLabel: "Active zone",
      difficultyLabel: "Difficulty",
      objectiveLabel: "Objective",
      rewardLabel: "Reward",
      sections: [
        {
          id: "sobre",
          level: "Lvl 01",
          label: "Player Prologue",
          objective: "Read the profile",
          reward: "+ developer context",
          difficulty: "Low"
        },
        {
          id: "stacks",
          level: "Lvl 02",
          label: "Tech Inventory",
          objective: "Inspect the stack",
          reward: "+ build unlocked",
          difficulty: "Low"
        },
        {
          id: "projetos",
          level: "Lvl 03",
          label: "Field Missions",
          objective: "Open projects",
          reward: "+ practical portfolio",
          difficulty: "Medium"
        },
        {
          id: "experiencia",
          level: "Lvl 04",
          label: "Battle Log",
          objective: "Review experience",
          reward: "+ accumulated XP",
          difficulty: "High"
        },
        {
          id: "contato",
          level: "Lvl 05",
          label: "Final Quest",
          objective: "Start contact",
          reward: "+ direct connection",
          difficulty: "Boss"
        }
      ]
    },
    hero: {
      available: "Open to opportunities",
      lead:
        "Interfaces with presence, organized logic, and projects where visuals and data genuinely reinforce each other.",
      sheetTitle: "Player sheet",
      stats: [
        { label: "Class", value: "Software Dev" },
        { label: "Build", value: "Web + Data" },
        { label: "Base", value: "João Pessoa, PB" },
        { label: "Mode", value: "Available" }
      ],
      pillarsLabel: "Value pillars",
      pillars: [
        "Frontend work with identity and the feeling of a living system.",
        "Backends designed for maintenance, clarity, and long-term growth.",
        "Data-oriented projects shaped by metrics, structure, and context."
      ],
      supportTitle: "Interactive scene",
      supportText:
        "The d20 now moves across the entire page. You can drag it, spin it, throw it into the edges, and click it to force a new roll.",
      viewProjects: "View projects",
      linkedin: "LinkedIn",
      fieldKicker: "d20 field",
      fieldTitle: "Move, charge, release, and roll again.",
      fieldBody:
        "A scene inspired by d20 rolls, living particles, and state-driven visuals to give the top of the page real personality.",
      fieldRoll: "Roll",
      fieldCharge: "Charge",
      fieldFocus: "Focus",
      fieldModeLabel: "Mode",
      fieldModeIdle: "Free orbit",
      fieldModeHover: "Reading field",
      fieldModeHold: "Charging",
      fieldModeBurst: "Burst released",
      fieldReroll: "Roll d20",
      fieldHint: "Hover to bend the field. Click and hold to build energy, then release."
    },
    dice: {
      hint: "Drag, spin, and release",
      ariaLabel: "Interactive d20 die"
    },
    about: {
      eyebrow: "About me",
      title: "Who I am",
      description: "Professional summary and main focus.",
      codexTitle: "Quick snapshot",
      codexItems: [
        { label: "Origin", value: "UEPB · Data Science" },
        { label: "Focus", value: "Frontend, backend, and data" },
        { label: "Style", value: "Clarity, structure, and growth" }
      ],
      statsTitle: "Focus areas",
      stats: [
        { label: "Architecture", value: "78" },
        { label: "UX/UI", value: "72" },
        { label: "Data", value: "80" }
      ],
      paragraphs: [
        "I am a Data Science student at the State University of Paraíba and a software developer in progress, interested in building solutions that connect web development, software organization, and data analysis. I have been developing projects with React, Node.js, Python, and databases, always aiming to turn ideas into clear, functional, and well-structured applications.",
        "My goal is to grow as a junior developer with a strong technical foundation, analytical thinking, and attention to maintainable code, continuously evolving across web development, backend, and data-oriented projects."
      ]
    },
    stacks: {
      eyebrow: "Technologies",
      title: "Core stack",
      description: "Tools and languages I have been using to build projects.",
      inventoryTitle: "Current stack",
      inventoryText:
        "Each item in the build composes the loadout used to create web apps, backends, and data-oriented projects."
    },
    projectsSection: {
      eyebrow: "Projects",
      title: "Featured projects",
      description: "Some of the work and ideas that represent how I build software.",
      demo: "Demo",
      repo: "Repository",
      missionLabel: "Type",
      rewardLabel: "Reward",
      missions: ["Side Quest", "Dungeon Run", "Data Raid"],
      rewards: ["Polished UX", "Validated flow", "Applied insight"]
    },
    projects: [
      {
        title: "Movie Organizer",
        description:
          "An application for desktop, web, and mobile to organize movies, favorite titles, and mark watched content, with a focus on user experience and solid data structure.",
        tech: ["React", "Node.js", "SQLite", "REST API"],
        demo: "#",
        repo: "#"
      },
      {
        title: "Registration and Service System",
        description:
          "A prototype with login, registration, and service record generation, designed for mobile flow and professional presentation.",
        tech: ["React", "JavaScript", "UI/UX", "Figma"],
        demo: "#",
        repo: "#"
      },
      {
        title: "Bilhetrometro",
        description:
          "A data-oriented project focused on collecting, processing, and interactively visualizing information using Pandas, NumPy, Streamlit, and Altair to make analysis clearer and more accessible.",
        tech: ["Python", "Pandas", "NumPy", "Streamlit", "Altair"],
        demo: "#",
        repo: "https://github.com/Yur3e/bilhetrometro"
      }
    ],
    experienceSection: {
      eyebrow: "Experience",
      title: "Career path",
      description: "Experiences that helped build my technical and practical foundation.",
      rankLabel: "Tier",
      rewardLabel: "XP",
      ranks: ["Elite", "Tactical", "Veteran", "Research"]
    },
    experience: [
      {
        title: "Intern",
        company: "SMN Information Technology",
        employmentType: "Internship",
        period: "Oct 2025 - Present",
        duration: "7 months",
        location: "João Pessoa, Paraíba, Brazil",
        mode: "On-site",
        tech: ["C#"],
        bullets: [
          "Supporting software development and maintenance activities in C#, working with MVC patterns, Clean Code practices, and SQL Server integrations."
        ]
      },
      {
        title: "Freelance Developer",
        company: "Freelancer",
        employmentType: "Freelance",
        period: "Sep 2023 - Apr 2024",
        duration: "8 months",
        location: "João Pessoa, Paraíba, Brazil",
        mode: "Remote",
        tech: [],
        bullets: [
          "Built web solutions with Python (Flask and Django) and JavaScript, delivering tailored features and interfaces aligned with each project's goals.",
          "Structured and maintained APIs and web systems, ensuring consistent integration across frontend, backend, and business rules.",
          "Optimized data querying, organization, and update flows, improving information reliability and operational efficiency."
        ]
      },
      {
        title: "IT Support Technician",
        company: "Freelance (Self employed)",
        employmentType: "Freelance",
        period: "Jan 2014 - Jun 2023",
        duration: "9 years and 6 months",
        location: "João Pessoa, Paraíba, Brazil",
        mode: "Hybrid",
        tech: ["IT Hardware Support", "Technical Support"],
        bullets: [
          "Optimized hardware and software infrastructure through technical diagnostics, issue resolution, and continuous improvements to system and network performance.",
          "Managed the full equipment lifecycle, from acquisition and assembly to maintenance and disposal, improving organization, availability, and operational continuity."
        ]
      },
      {
        title: "Junior Researcher & Mobile Development",
        company: "Federal University of Paraíba",
        employmentType: "Trainee",
        period: "Aug 2019 - Feb 2020",
        duration: "7 months",
        location: "João Pessoa, Paraíba, Brazil",
        mode: "On-site",
        tech: ["C#", "Unity 3D", "Unity Android Build Support (APK)"],
        note: "Scholarship holder in the Institutional Scientific Initiation Scholarship Program - PIBIC - EM/CNPq/UFPB.",
        bullets: [
          "Developed an educational application in Unity 3D with C#, combining programming logic with a pedagogical purpose.",
          "Applied Serious Games and gamification principles to create a more engaging and goal-oriented experience.",
          "Led the Android build process (APK), supporting practical validation of the application in a mobile environment."
        ]
      }
    ],
    contact: {
      eyebrow: "Contact",
      title: "Open to new opportunities",
      description:
        "I am open to software development opportunities, with a strong interest in contributing to well-structured projects, learning from experienced teams, and delivering value through consistent solutions.",
      finalQuestTitle: "Final quest",
      finalQuestText:
        "If this campaign feels right for your team, the final portal is simple: reach out and let's turn the briefing into delivery.",
      contactButton: "Get in touch",
      github: "GitHub",
      resume: "Resume",
      name: "Name",
      email: "Email",
      message: "Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "you@example.com",
      messagePlaceholder: "Type your message",
      submitting: "Sending...",
      submit: "Send message",
      sendError: "Could not send the message.",
      genericError: "Error sending the message."
    },
  }
};
