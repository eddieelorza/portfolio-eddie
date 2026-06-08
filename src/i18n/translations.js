export const translations = {
  es: {
    nav: {
      about: 'Sobre mí',
      experience: 'Experiencia',
      product: 'Producto',
      education: 'Estudios',
      projects: 'Proyectos',
      stack: 'Stack',
      impact: 'Impacto',
      contact: 'Contacto',
      cta: 'Hablemos',
    },
    hero: {
      badge: 'Disponible para nuevas oportunidades · Producto · AI · Fintech',
      title1: 'Construyo',
      titleHighlight: 'productos escalables',
      rotatingWords: [
        'productos escalables',
        'experiencias premium',
        'soluciones con IA',
        'plataformas fintech',
      ],
      title2: 'que mueven productos reales.',
      subtitle:
        'Product Engineer con 6+ años en fintech y pagos. Combino producto, ingeniería e IA para entregar plataformas escalables, confiables y alineadas con objetivos de negocio.',
      chips: ['MSc IA Aplicada', 'PSPO I', 'Fintech', 'IA & Automation'],
      ctaProjects: 'Ver iniciativas',
      ctaContact: 'Hablemos',
      avatarLabel: 'El que construye el producto',
      photoLabel: 'El que lidera la ejecución',
    },
    about: {
      chapter: '02',
      chapterLabel: 'La persona',
      eyebrow: 'Sobre mí',
      title: 'Producto e ingeniería, en partes iguales.',
      p1: '6+ años construyendo producto en fintech y pagos. Combino criterio técnico, foco en negocio y experiencia liderando equipos para entregar plataformas que escalan y no fallan.',
      p2: 'Trabajo en la intersección entre producto e ingeniería: traduzco necesidades de negocio en decisiones técnicas, prioridades de roadmap y entregas medibles. Colaboro cerca de operaciones, vendors y stakeholders.',
      p3: 'MSc en Inteligencia Artificial Aplicada y PSPO I. Aplico IA y automatización para reducir esfuerzo operativo y mejorar la toma de decisiones.',
      tags: ['Product Engineering', 'Fintech & Pagos', 'AI & Automation', 'PSPO I · MSc AI'],
    },
    experience: {
      chapter: '03',
      chapterLabel: 'La trayectoria',
      eyebrow: 'Experiencia',
      title: 'Liderando producto en sistemas de alto tráfico',
      description:
        'Trayectoria construyendo y liderando producto en fintech y pagos, donde escalabilidad, confiabilidad e impacto de negocio son críticos.',
      phases: [
        'Frontend Developer',
        'Product Engineer',
        'Tech Lead',
        'AI Product Builder',
      ],
      roles: [
        {
          company: 'Banco Azteca',
          role: 'Tech Lead · Product Engineer',
          period: '2022 — Presente',
          summary:
            'Lidero la entrega de producto en sistemas de pagos y crédito de alto tráfico. Balanceo prioridades de negocio con decisiones de arquitectura, gestiono releases y alineo la ejecución con stakeholders, operaciones y vendors.',
          impact: [
            'Lideré la migración de monolito a microfrontends, aumentando la velocidad de release y la autonomía del equipo.',
            'Reduje incidencias en flujos de pago críticos implementando testing y monitoreo.',
            'Alineé la entrega con prioridades de negocio y operaciones para reducir esfuerzo manual recurrente.',
          ],
          tags: ['React', 'TypeScript', 'Microfrontends', 'AWS'],
        },
        {
          company: 'MRCI',
          role: 'Product Engineer',
          period: '2020 — 2022',
          summary:
            'Construí productos internos end-to-end: discovery, definición de flujos, diseño y entrega. Trabajé directo con el negocio para convertir necesidades reales en producto.',
          impact: [
            'Diseñé y construí Octobile, un sistema interno de mensajería, desde concepto hasta producción.',
            'Definí experiencia, flujos y documentación, alineando expectativas con stakeholders.',
            'Lideré la entrega técnica del producto en React + TypeScript, priorizando usabilidad y tiempo de respuesta.',
          ],
          tags: ['React', 'TypeScript', 'Jest', 'Node.js'],
        },
        {
          company: 'Lapbytes',
          role: 'Frontend Developer',
          period: '2019 — 2020',
          summary:
            'Construí plataformas e-commerce conectadas a APIs, traduciendo requerimientos de negocio en producto funcional y entregando soluciones estables en producción.',
          impact: [
            'Construí interfaces de e-commerce optimizando tiempos de carga y experiencia de compra.',
            'Alineé la entrega con las prioridades de negocio de cada cliente, traduciendo requerimientos en producto.',
          ],
          tags: ['JavaScript', 'Vue', 'CSS', 'UX'],
        },
      ],
    },
    product: {
      chapter: '04',
      chapterLabel: 'Sistema operativo',
      eyebrow: 'Product OS',
      title: 'Mi forma de construir producto',
      description:
        'Una forma de convertir retos fintech, IA y operación en productos escalables con impacto de negocio.',
      strengthLabel: 'Operating Strength',
      relatedLabel: 'Capacidades relacionadas',
      closeLabel: 'Cerrar',
      categories: {
        core: 'Core',
        strategic: 'Strategic',
        'ai-enabled': 'AI-enabled',
        execution: 'Execution',
      },
      items: [
        {
          id: 'payments',
          title: 'Pagos & Fintech',
          category: 'core',
          strength: 95,
          content:
            'Construcción y evolución de productos de pago, flujos de checkout y procesos financieros en entornos de alto volumen.',
          related: ['discovery', 'prioritization', 'delivery'],
        },
        {
          id: 'discovery',
          title: 'Product Discovery',
          category: 'strategic',
          strength: 90,
          content:
            'Conversión de dolores operativos, necesidades de usuario y restricciones de negocio en oportunidades de producto validadas.',
          related: ['payments', 'prioritization', 'stakeholders'],
        },
        {
          id: 'prioritization',
          title: 'Priorización & Estrategia',
          category: 'strategic',
          strength: 92,
          content:
            'Evaluación de trade-offs entre impacto de negocio, esfuerzo técnico, riesgo operativo y valor estratégico.',
          related: ['discovery', 'payments', 'delivery'],
        },
        {
          id: 'ai',
          title: 'Automatización con IA',
          category: 'ai-enabled',
          strength: 88,
          content:
            'Aplicación de IA y automatización para reducir trabajo manual, mejorar decisiones y escalar procesos operativos.',
          related: ['discovery', 'stakeholders', 'delivery'],
        },
        {
          id: 'stakeholders',
          title: 'Alineación de Stakeholders',
          category: 'execution',
          strength: 85,
          content:
            'Conexión entre negocio, operación, compliance e ingeniería alrededor de objetivos y prioridades compartidas.',
          related: ['discovery', 'prioritization', 'ai'],
        },
        {
          id: 'delivery',
          title: 'Product Delivery',
          category: 'execution',
          strength: 90,
          content:
            'Ejecución de iniciativas desde discovery hasta producción, balanceando escalabilidad, confiabilidad y valor de negocio.',
          related: ['payments', 'prioritization', 'ai', 'stakeholders'],
        },
      ],
    },
    education: {
      chapter: '05',
      chapterLabel: 'Fundamentos',
      eyebrow: 'Educación & Certificaciones',
      title: 'Formación que impulsa mi impacto',
      description:
        'Combinación estratégica de educación avanzada y certificaciones que respaldan mi enfoque en producto, IA, datos y ejecución técnica.',
      photoAlt:
        'Título de Maestría en Inteligencia Artificial Aplicada de Eddie Elorza',
      verifyLabel: 'Verificar',
      featuredLabel: 'Credencial destacada',
      stats: ['MSc IA Aplicada', 'PSPO I', 'AI & Data', 'Cloud Foundations'],
      featured: [
        {
          label: 'MSc IA Aplicada',
          href: 'https://certificados.tec.mx/certificate/ac443de24951594489ed639728a30e04',
        },
        {
          label: 'Business Intelligence',
          href: 'https://www.credential.net/84ab1b58-7192-44e9-8526-8d8014b0df3d#acc.BMTI2GeD',
        },
      ],
      tabs: [
        {
          id: 'ai',
          label: 'AI',
          category: 'Especialización',
          title: 'IA aplicada y automatización',
          featured: 'MSc IA Aplicada + IA & Machine Learning',
          items: [
            {
              label: 'IA & Machine Learning',
              href: 'https://www.credential.net/65d5f712-b228-4079-9665-f6227cf9aa31#acc.Gw5mNbUT',
            },
            { label: 'LLM Apps' },
            { label: 'IA aplicada al negocio' },
            { label: 'Workflows de automatización' },
          ],
        },
        {
          id: 'product',
          label: 'Producto',
          category: 'Ownership',
          title: 'Product Ownership',
          featured: 'Professional Scrum Product Owner™ I',
          items: [
            {
              label: 'PSPO I',
              href: 'https://www.credly.com/badges/31fa03b0-fbe1-4d6e-a405-64d747b6070c/linked_in_profile',
            },
            {
              label: 'Scrum Fundamentals',
              href: 'https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/ScrumFundamentalsCertified-EddieGuadalupeElorzaRuiz.-842748.pdf',
            },
            { label: 'Google Project Management' },
            { label: 'Roadmaps y backlog' },
          ],
        },
        {
          id: 'data',
          label: 'Data',
          category: 'Analítica',
          title: 'Decisiones basadas en datos',
          featured: 'Data Science + Data Visualization',
          items: [
            {
              label: 'Data Science',
              href: 'https://www.credential.net/62973c26-b6d0-4ee8-99a4-829f71c011a2#acc.2PgJhFA6',
            },
            {
              label: 'Data Visualization',
              href: 'https://www.credential.net/0b9a18ec-b9ba-41bd-8009-26346e027a26#acc.sYDgoLZC',
            },
            {
              label: 'Python for Data Science · IBM',
              href: 'https://www.credly.com/badges/c5f655fe-2e8f-4c54-855b-0fab6d4ffe6a/linked_in_profile',
            },
            {
              label: 'IBM Data Analysis',
              href: 'https://www.credly.com/badges/00cbdf50-4cba-47c9-86ae-7ce827c29003/linked_in_profile',
            },
            { label: 'KPIs y dashboards' },
          ],
        },
        {
          id: 'cloud',
          label: 'Cloud',
          category: 'Fundamentos',
          title: 'Fundamentos técnicos',
          featured: 'Microsoft Azure Fundamentals',
          items: [
            {
              label: 'Azure Fundamentals',
              href: 'https://www.credly.com/badges/4c23d8a9-30c9-47f7-890d-02e0fd99e37f/linked_in_profile',
            },
            {
              label: 'Google Cloud Computing',
              href: 'https://www.skills.google/public_profiles/1cdffa3d-eee7-4802-b707-292810a740d0/badges/3204614?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share',
            },
            {
              label: 'Python · UPV (edX)',
              href: 'https://courses.edx.org/certificates/52a50a8b9ed140478f3ffb3b7ba3d501',
            },
            {
              label: 'Algoritmos JS · freeCodeCamp',
              href: 'https://www.freecodecamp.org/certification/eddieelorza/javascript-algorithms-and-data-structures',
            },
            { label: 'Producto con visión cloud' },
          ],
        },
      ],
    },
    projects: {
      chapter: '06',
      chapterLabel: 'Trabajo seleccionado',
      eyebrow: 'Proyectos destacados',
      title: 'Iniciativas con impacto real',
      description:
        'Iniciativas donde combiné producto, ingeniería y liderazgo técnico para resolver problemas reales en plataformas financieras.',
      items: [
        {
          title: 'Paga Fácil',
          tag: 'Producto fintech',
          mockup: 'BANCO AZTECA · LIVE',
          description:
            'Plataforma de pagos usada a diario por miles de usuarios. Trabajé en flujos críticos de transacción y lideré la migración hacia microfrontends para mejorar estabilidad y reducir incidencias operativas en pagos no reflejados.',
          metrics: [
            'Alto volumen de transacciones diarias',
            'Menos carga operativa por incidencias de pagos',
            'Mayor velocidad de release entre equipos',
          ],
          stack: ['React', 'TypeScript', 'AWS'],
        },
        {
          title: 'Microfrontends Architecture',
          tag: 'Decisión técnica · impacto de negocio',
          mockup: 'ARQUITECTURA · 2023',
          description:
            'Lideré la migración a microfrontends en React + TypeScript para desbloquear releases independientes, escalar el trabajo de varios equipos y reducir el riesgo de despliegue en sistemas críticos.',
          metrics: [
            'Releases independientes entre aplicaciones',
            'Varios equipos entregando en paralelo sin bloqueos',
            'Menor riesgo y menor tiempo en cada despliegue',
          ],
          stack: ['Module Federation', 'React', 'TypeScript', 'CI/CD'],
        },
        {
          title: 'Sistema Regional',
          tag: 'Plataforma interna',
          mockup: 'PLATAFORMA INTERNA · MFE',
          description:
            'Módulos de producto (MFEs) para administración de usuarios, historial crediticio y portafolio dentro de una plataforma interna. Foco en alineación con flujos de negocio y reutilización entre módulos.',
          metrics: [
            'Componentes reutilizables entre módulos',
            'Integración con APIs y reglas de negocio',
            'Módulos desplegables de forma independiente',
          ],
          stack: ['React', 'TypeScript', 'Feature Flags', 'Edge Config'],
        },
      ],
    },
    stack: {
      chapter: '07',
      chapterLabel: 'Toolbox',
      eyebrow: 'Toolbox',
      title: 'El toolbox detrás del producto',
      description:
        'Herramientas que uso día a día para discovery, decisiones técnicas, automatización con IA y entrega en producción.',
      categories: ['Product', 'AI', 'Data', 'Engineering', 'Delivery'],
    },
    impact: {
      chapter: '08',
      chapterLabel: 'Resultados',
      eyebrow: 'Impacto',
      title: 'Lo que ha movido mi trabajo',
      description:
        'Indicadores del impacto operativo y de negocio detrás de los productos que he ayudado a construir y sostener.',
      items: [
        {
          value: '+6',
          label: 'años de experiencia',
          context: 'Construyendo producto en fintech y pagos.',
        },
        {
          value: '+6M',
          label: 'transacciones procesadas',
          context: 'Soportando operaciones críticas a escala.',
        },
        {
          value: '2',
          label: 'años liderando',
          context: 'Tech Lead alineando ingeniería y negocio.',
        },
        {
          value: '−70%',
          label: 'incidencias en producción',
          context: 'Testing y monitoreo en flujos de pago.',
        },
      ],
    },
    contact: {
      chapter: '09',
      chapterLabel: 'Construyamos',
      eyebrow: 'Contacto',
      title: '¿Construimos algo grande juntos?',
      description:
        'Estoy abierto a roles de Product Engineer, Product Manager y liderazgo técnico, especialmente en fintech, pagos y producto con foco en IA. Si crees que encajo, hablemos.',
      cta: 'Enviar un mensaje',
      form: {
        name: 'Nombre',
        namePh: '¿Cómo te llamas?',
        email: 'Email',
        emailPh: 'tu@correo.com',
        subject: 'Asunto',
        subjectPh: 'Sobre qué quieres hablar',
        message: 'Mensaje',
        messagePh: 'Cuéntame los detalles…',
        submit: 'Enviar mensaje',
        sending: 'Enviando…',
        success: '¡Listo! Te responderé pronto.',
      },
    },
    footer: 'Eddie Elorza Ruiz · Product Engineer · Fintech & AI',
    languageLabel: 'Idioma',
    themeLabel: 'Color',
  },
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      product: 'Product',
      education: 'Education',
      projects: 'Projects',
      stack: 'Stack',
      impact: 'Impact',
      contact: 'Contact',
      cta: "Let's talk",
    },
    hero: {
      badge: 'Open to new opportunities · Product · AI · Fintech',
      title1: 'Building',
      titleHighlight: 'scalable products',
      rotatingWords: [
        'scalable products',
        'premium experiences',
        'AI-powered solutions',
        'fintech platforms',
      ],
      title2: 'that move real products.',
      subtitle:
        'Product Engineer with 6+ years in fintech and payments. I combine product, engineering and AI to ship scalable, reliable platforms aligned with business outcomes.',
      ctaProjects: 'See initiatives',
      ctaContact: "Let's talk",
      avatarLabel: 'The one who builds the product',
      photoLabel: 'The one who leads execution',
    },
    about: {
      eyebrow: 'About me',
      title: 'Product and engineering, in equal parts.',
      p1: "6+ years building product in fintech and payments. I combine technical judgment, business focus and team leadership to ship platforms that scale and don't break.",
      p2: 'I work at the intersection of product and engineering: I turn business needs into technical decisions, roadmap priorities and measurable delivery. I work closely with operations, vendors and stakeholders.',
      p3: 'MSc in Applied Artificial Intelligence and PSPO I. I apply AI and automation to cut operational effort and improve decision-making.',
      tags: ['Product Engineering', 'Fintech & Payments', 'AI & Automation', 'PSPO I · MSc AI'],
    },
    experience: {
      chapter: '03',
      chapterLabel: 'The track',
      eyebrow: 'Experience',
      title: 'Leading product in high-traffic systems',
      description:
        'A track record building and leading product in fintech and payments, where scalability, reliability and business impact are critical.',
      phases: [
        'Frontend Developer',
        'Product Engineer',
        'Tech Lead',
        'AI Product Builder',
      ],
      roles: [
        {
          company: 'Banco Azteca',
          role: 'Tech Lead · Product Engineer',
          period: '2022 — Present',
          summary:
            'I lead product delivery across high-traffic payments and credit systems. I balance business priorities with architecture decisions, manage releases and align execution with stakeholders, operations and vendors.',
          impact: [
            'Led the migration from monolith to microfrontends, increasing release velocity and team autonomy.',
            'Reduced incidents in critical payment flows by implementing testing and monitoring.',
            'Aligned delivery with business and operations priorities to cut recurring manual effort.',
          ],
          tags: ['React', 'TypeScript', 'Microfrontends', 'AWS'],
        },
        {
          company: 'MRCI',
          role: 'Product Engineer',
          period: '2020 — 2022',
          summary:
            'Built internal products end-to-end: discovery, flow definition, design and delivery. Worked directly with the business to turn real needs into working product.',
          impact: [
            'Designed and built Octobile, an internal messaging system, from concept to production.',
            'Defined experience, flows and documentation, aligning expectations with stakeholders.',
            'Led product delivery in React + TypeScript, prioritizing usability and response time.',
          ],
          tags: ['React', 'TypeScript', 'Jest', 'Node.js'],
        },
        {
          company: 'Lapbytes',
          role: 'Frontend Developer',
          period: '2019 — 2020',
          summary:
            'Built e-commerce platforms connected to APIs, turning business requirements into working product and shipping stable solutions in production.',
          impact: [
            'Built e-commerce interfaces, optimizing load times and the buying experience.',
            'Aligned delivery with each client business priorities, translating requirements into product.',
          ],
          tags: ['JavaScript', 'Vue', 'CSS', 'UX'],
        },
      ],
    },
    product: {
      chapter: '04',
      chapterLabel: 'Operating system',
      eyebrow: 'Product OS',
      title: 'Product Operating System',
      description:
        'A system for turning fintech, AI and operational challenges into scalable product outcomes.',
      strengthLabel: 'Operating Strength',
      relatedLabel: 'Related Capabilities',
      closeLabel: 'Close',
      categories: {
        core: 'Core',
        strategic: 'Strategic',
        'ai-enabled': 'AI-enabled',
        execution: 'Execution',
      },
      items: [
        {
          id: 'payments',
          title: 'Payments & Fintech',
          category: 'core',
          strength: 95,
          content:
            'Building and evolving payment products, checkout flows and financial workflows in high-volume environments.',
          related: ['discovery', 'prioritization', 'delivery'],
        },
        {
          id: 'discovery',
          title: 'Product Discovery',
          category: 'strategic',
          strength: 90,
          content:
            'Turning operational pain points, user needs and business constraints into validated product opportunities.',
          related: ['payments', 'prioritization', 'stakeholders'],
        },
        {
          id: 'prioritization',
          title: 'Prioritization & Strategy',
          category: 'strategic',
          strength: 92,
          content:
            'Evaluating trade-offs between business impact, technical effort, operational risk and strategic value.',
          related: ['discovery', 'payments', 'delivery'],
        },
        {
          id: 'ai',
          title: 'AI Automation',
          category: 'ai-enabled',
          strength: 88,
          content:
            'Applying AI and automation to reduce manual work, improve decision-making and scale operational processes.',
          related: ['discovery', 'stakeholders', 'delivery'],
        },
        {
          id: 'stakeholders',
          title: 'Stakeholder Alignment',
          category: 'execution',
          strength: 85,
          content:
            'Connecting business, operations, compliance and engineering teams around shared outcomes and priorities.',
          related: ['discovery', 'prioritization', 'ai'],
        },
        {
          id: 'delivery',
          title: 'Product Delivery',
          category: 'execution',
          strength: 90,
          content:
            'Driving initiatives from discovery to production while balancing scalability, reliability and business value.',
          related: ['payments', 'prioritization', 'ai', 'stakeholders'],
        },
      ],
    },
    education: {
      chapter: '05',
      chapterLabel: 'Foundations',
      eyebrow: 'Education & Certifications',
      title: 'Education that drives my impact',
      description:
        'A strategic mix of advanced education and certifications backing my focus on product, AI, data and technical execution.',
      photoAlt:
        "Eddie Elorza's Master's diploma in Applied Artificial Intelligence",
      verifyLabel: 'Verify',
      featuredLabel: 'Featured credential',
      stats: ['MSc Applied AI', 'PSPO I', 'AI & Data', 'Cloud Foundations'],
      featured: [
        {
          label: 'MSc Applied AI',
          href: 'https://certificados.tec.mx/certificate/ac443de24951594489ed639728a30e04',
        },
        {
          label: 'Business Intelligence',
          href: 'https://www.credential.net/84ab1b58-7192-44e9-8526-8d8014b0df3d#acc.BMTI2GeD',
        },
      ],
      tabs: [
        {
          id: 'ai',
          label: 'AI',
          category: 'Specialization',
          title: 'Applied AI & Automation',
          featured: 'MSc Applied AI + AI & Machine Learning',
          items: [
            {
              label: 'AI & Machine Learning',
              href: 'https://www.credential.net/65d5f712-b228-4079-9665-f6227cf9aa31#acc.Gw5mNbUT',
            },
            { label: 'LLM Apps' },
            { label: 'Applied AI for business' },
            { label: 'Automation workflows' },
          ],
        },
        {
          id: 'product',
          label: 'Product',
          category: 'Ownership',
          title: 'Product Ownership',
          featured: 'Professional Scrum Product Owner™ I',
          items: [
            {
              label: 'PSPO I',
              href: 'https://www.credly.com/badges/31fa03b0-fbe1-4d6e-a405-64d747b6070c/linked_in_profile',
            },
            {
              label: 'Scrum Fundamentals',
              href: 'https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/ScrumFundamentalsCertified-EddieGuadalupeElorzaRuiz.-842748.pdf',
            },
            { label: 'Google Project Management' },
            { label: 'Roadmaps & backlog' },
          ],
        },
        {
          id: 'data',
          label: 'Data',
          category: 'Analytics',
          title: 'Data-informed decisions',
          featured: 'Data Science + Data Visualization',
          items: [
            {
              label: 'Data Science',
              href: 'https://www.credential.net/62973c26-b6d0-4ee8-99a4-829f71c011a2#acc.2PgJhFA6',
            },
            {
              label: 'Data Visualization',
              href: 'https://www.credential.net/0b9a18ec-b9ba-41bd-8009-26346e027a26#acc.sYDgoLZC',
            },
            {
              label: 'Python for Data Science · IBM',
              href: 'https://www.credly.com/badges/c5f655fe-2e8f-4c54-855b-0fab6d4ffe6a/linked_in_profile',
            },
            {
              label: 'IBM Data Analysis',
              href: 'https://www.credly.com/badges/00cbdf50-4cba-47c9-86ae-7ce827c29003/linked_in_profile',
            },
            { label: 'KPIs & dashboards' },
          ],
        },
        {
          id: 'cloud',
          label: 'Cloud',
          category: 'Foundations',
          title: 'Technical foundations',
          featured: 'Microsoft Azure Fundamentals',
          items: [
            {
              label: 'Azure Fundamentals',
              href: 'https://www.credly.com/badges/4c23d8a9-30c9-47f7-890d-02e0fd99e37f/linked_in_profile',
            },
            {
              label: 'Google Cloud Computing',
              href: 'https://www.skills.google/public_profiles/1cdffa3d-eee7-4802-b707-292810a740d0/badges/3204614?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share',
            },
            {
              label: 'Python · UPV (edX)',
              href: 'https://courses.edx.org/certificates/52a50a8b9ed140478f3ffb3b7ba3d501',
            },
            {
              label: 'JS Algorithms · freeCodeCamp',
              href: 'https://www.freecodecamp.org/certification/eddieelorza/javascript-algorithms-and-data-structures',
            },
            { label: 'Cloud-aware product thinking' },
          ],
        },
      ],
    },
    projects: {
      chapter: '06',
      chapterLabel: 'Selected work',
      eyebrow: 'Featured projects',
      title: 'Initiatives with real impact',
      description:
        'Initiatives where I combined product, engineering and technical leadership to solve real problems on financial platforms.',
      items: [
        {
          title: 'Paga Fácil',
          tag: 'Fintech product',
          mockup: 'BANCO AZTECA · LIVE',
          description:
            'Payments platform used daily by thousands of users. I worked on critical transaction flows and led the migration to microfrontends to improve stability and reduce operational incidents from missed payments.',
          metrics: [
            'High daily transaction volume',
            'Lower operational load from payment incidents',
            'Faster release velocity across teams',
          ],
          stack: ['React', 'TypeScript', 'AWS'],
        },
        {
          title: 'Microfrontends Architecture',
          tag: 'Technical decision · business impact',
          mockup: 'ARCHITECTURE · 2023',
          description:
            'Led the migration to microfrontends in React + TypeScript to unlock independent releases, scale work across multiple teams and reduce deployment risk in critical systems.',
          metrics: [
            'Independent releases across applications',
            'Several teams delivering in parallel without blockers',
            'Lower risk and shorter time per deployment',
          ],
          stack: ['Module Federation', 'React', 'TypeScript', 'CI/CD'],
        },
        {
          title: 'Regional System',
          tag: 'Internal platform',
          mockup: 'INTERNAL PLATFORM · MFE',
          description:
            'Product modules (MFEs) for user administration, credit history and portfolio inside an internal platform. Focus on alignment with business flows and reusability across modules.',
          metrics: [
            'Reusable components across modules',
            'Integration with APIs and business rules',
            'Independently deployable modules',
          ],
          stack: ['React', 'TypeScript', 'Feature Flags', 'Edge Config'],
        },
      ],
    },
    stack: {
      chapter: '07',
      chapterLabel: 'Toolbox',
      eyebrow: 'Toolbox',
      title: 'The toolbox behind the product',
      description:
        'Tools I use day to day across discovery, technical decisions, AI automation and shipping to production.',
      categories: ['Product', 'AI', 'Data', 'Engineering', 'Delivery'],
    },
    impact: {
      chapter: '08',
      chapterLabel: 'Outcomes',
      eyebrow: 'Impact',
      title: 'What my work has moved',
      description:
        "Operational and business signals behind the products I've helped build and sustain.",
      items: [
        {
          value: '+6',
          label: 'years of experience',
          context: 'Building product across fintech and payments.',
        },
        {
          value: '+6M',
          label: 'transactions processed',
          context: 'Supporting critical operations at scale.',
        },
        {
          value: '2',
          label: 'years leading',
          context: 'Tech Lead aligning engineering and business.',
        },
        {
          value: '−70%',
          label: 'production incidents',
          context: 'Testing and monitoring on payment flows.',
        },
      ],
    },
    contact: {
      chapter: '09',
      chapterLabel: "Let's build",
      eyebrow: 'Contact',
      title: 'Shall we build something great together?',
      description:
        "I'm open to Product Engineer, Product Manager and technical leadership roles — especially in fintech, payments and AI-focused product. If you think I'd be a fit, let's talk.",
      cta: 'Send a message',
      form: {
        name: 'Name',
        namePh: "What's your name?",
        email: 'Email',
        emailPh: 'you@email.com',
        subject: 'Subject',
        subjectPh: 'What do you want to talk about',
        message: 'Message',
        messagePh: 'Share the details…',
        submit: 'Send message',
        sending: 'Sending…',
        success: 'Got it! I will reply soon.',
      },
    },
    footer: 'Eddie Elorza Ruiz · Product Engineer · Fintech & AI',
    languageLabel: 'Language',
    themeLabel: 'Color',
  },
};
