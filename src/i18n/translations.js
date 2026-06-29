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
        'Technical Product Manager con 6+ años en fintech y pagos. Conecto negocio, operación e ingeniería para construir productos escalables y automatizaciones — aplicando IA cuando aporta valor, y evitando complejidad cuando una solución determinística es suficiente.',
      chips: ['MSc IA Aplicada', 'PSPO I', 'Fintech', 'IA & Automation'],
      ctaProjects: 'Ver iniciativas',
      ctaContact: 'Hablemos',
      avatarLabel: 'El que construye el producto',
      photoLabel: 'El que lidera la ejecución',
    },
    about: {
      eyebrow: 'Sobre mí',
      title: 'Producto e ingeniería, en partes iguales.',
      p1: '6+ años construyendo producto en fintech y pagos. Combino criterio técnico, foco en negocio y experiencia liderando equipos para entregar plataformas que escalan y no fallan.',
      p2: 'Trabajo en la intersección entre producto e ingeniería: traduzco necesidades de negocio en decisiones técnicas, prioridades de roadmap y entregas medibles. Colaboro cerca de operaciones, vendors y stakeholders.',
      p3: 'MSc en Inteligencia Artificial Aplicada y PSPO I. Aplico IA y automatización para reducir esfuerzo operativo y mejorar la toma de decisiones.',
      tags: ['Product Engineering', 'Fintech & Pagos', 'AI & Automation', 'PSPO I · MSc AI'],
    },
    experience: {
      eyebrow: 'Experiencia',
      title: 'Liderando producto en sistemas de alto tráfico',
      description:
        'Trayectoria construyendo y liderando producto en fintech y pagos, donde escalabilidad, confiabilidad e impacto de negocio son críticos.',
      phases: [
        'Web Developer',
        'Business Analyst / Product Owner',
        'Software Engineer',
        'Technical Product Manager',
      ],
      roles: [
        {
          company: 'Banco Azteca · Paga Fácil',
          role: 'Product Engineer · Plataforma de Pagos',
          period: 'Ene 2025 — Mar 2026',
          summary:
            'Rol de producto con fundamento técnico en una plataforma de pagos de alto volumen. Aporté a la priorización del roadmap junto a líderes de producto, negocio e ingeniería, en tres iniciativas.',
          impact: [
            'Propuse y defendí iniciativas de negocio en la plataforma de pagos (~6M transacciones diarias); fortalecí el monitoreo de transacciones y errores con dashboards y KPIs.',
            'Lideré la migración monolito → microfrontends: habilitó despliegues independientes y eliminó dependencias entre equipos.',
            'Replanteé un cuello de botella de ruteo manual (Abonos) como problema de producto; diseñé y entregué una asignación round-robin determinística que procesa 500+ incidencias diarias, con human-in-the-loop antes de acciones financieras críticas. Tiempo de resolución ~6h → ~2h por ciclo (estimación operativa).',
          ],
          tags: ['Producto', 'Pagos', 'Automatización', 'Human-in-the-loop'],
        },
        {
          company: 'Banco Azteca · Sistema Regional',
          role: 'Software Engineer · Crédito y Cobranza Regional',
          period: 'Oct 2022 — Dic 2024',
          summary:
            'Producto distinto a Paga Fácil. Ownership end-to-end de cuatro microfrontends y participación activa en la migración a microfrontends.',
          impact: [
            'Ownership end-to-end de 4 microfrontends: solicitudes, portafolio de clientes, administración de usuarios e información crediticia.',
            'Participé en la migración monolito → microfrontends; implementé testing y CI/CD para reducir riesgo de releases.',
          ],
          tags: ['React', 'TypeScript', 'Microfrontends', 'CI/CD'],
        },
        {
          company: 'MRCI',
          role: 'Business Analyst / Product Owner (de facto)',
          period: 'Nov 2021 — Oct 2022',
          summary:
            'Lideré el roadmap, el backlog y las historias de usuario de Octobile, una app interna de mensajería tipo WhatsApp, coordinando a un vendor externo de desarrollo desde concepto hasta producción.',
          impact: [
            'Definí flujos, diagramas y criterios de aceptación; gestioné testing y revisión de bugs como puente entre negocio y el equipo técnico.',
            'Coordiné a un vendor externo de desarrollo desde concepto hasta producción.',
          ],
          tags: ['Product Ownership', 'Roadmap', 'Backlog', 'Stakeholders'],
        },
        {
          company: 'Lapbytes',
          role: 'Web Developer',
          period: 'Ene 2020 — Nov 2021',
          summary:
            'Entregué ~6 plataformas web y e-commerce de diferentes industrias, trabajando directo con clientes desde requerimientos hasta entrega.',
          impact: [
            'Construí ~6 plataformas e-commerce / web; comunicación directa con clientes de requerimientos a entrega.',
          ],
          tags: ['JavaScript', 'Vue', 'CSS', 'UX'],
        },
      ],
    },
    product: {
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
      eyebrow: 'Proyectos destacados',
      title: 'Iniciativas con impacto real',
      description:
        'Iniciativas donde combiné producto, ingeniería y liderazgo técnico para resolver problemas reales en plataformas financieras.',
      items: [
        {
          title: 'CRM Hotelero',
          tag: 'Producto · Cliente',
          description:
            'CRM a medida para un grupo hotelero (Operadora SI): 10 hoteles, ~35 usuarios, ~1,500 empresas. Lidero el producto end-to-end con el cliente.',
          metrics: [
            'Discovery: el dolor real era la falta de visibilidad comercial, no las pantallas pedidas — reformuló el roadmap.',
            'Build-vs-buy: justifiqué construir custom sobre HubSpot / Salesforce para un proceso comercial multi-hotel.',
            'Modelo de datos de un solo dueño para habilitar cross-selling sin perder accountability.',
            'Permisos por rol (RLS) como decisión de producto; GenAI deferido a fase 2 con hipótesis explícita.',
          ],
          stack: ['React', 'TypeScript', 'Supabase', 'Product Discovery'],
        },
        {
          title: 'Paga Fácil',
          tag: 'Producto fintech',
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
      eyebrow: 'Toolbox',
      title: 'El toolbox detrás del producto',
      description:
        'Herramientas que uso día a día para discovery, decisiones técnicas, automatización con IA y entrega en producción.',
      categories: ['Product', 'AI', 'Data', 'Engineering', 'Delivery'],
    },
    impact: {
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
          value: '6M+',
          label: 'transacciones diarias',
          context: 'Trabajo de producto en pagos a escala.',
        },
        {
          value: '500+',
          label: 'incidencias enrutadas al día',
          context: 'Asignación determinística en operación de pagos.',
        },
        {
          value: '4',
          label: 'microfrontends propios',
          context: 'Módulos de producto end-to-end en Banco Azteca.',
        },
      ],
    },
    contact: {
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
    theme: {
      tooltip: 'Arrastra · Click color',
      mobileHint: 'Mantén y arrastra',
    },
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
        'Technical Product Manager with 6+ years in fintech and payments. I connect business, operations and engineering to build scalable products and automations — applying AI when it adds value, and avoiding complexity when a deterministic solution is enough.',
      chips: ['MSc Applied AI', 'PSPO I', 'Fintech', 'AI & Automation'],
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
      eyebrow: 'Experience',
      title: 'Leading product in high-traffic systems',
      description:
        'A track record building and leading product in fintech and payments, where scalability, reliability and business impact are critical.',
      phases: [
        'Web Developer',
        'Business Analyst / Product Owner',
        'Software Engineer',
        'Technical Product Manager',
      ],
      roles: [
        {
          company: 'Banco Azteca · Paga Fácil',
          role: 'Product Engineer · Payments Platform',
          period: 'Jan 2025 — Mar 2026',
          summary:
            'Product role with a technical foundation on a high-volume payments platform. I contributed to roadmap prioritization alongside product, business and engineering leaders, across three initiatives.',
          impact: [
            'Proposed and defended business-driven initiatives on the payments platform (~6M daily transactions); strengthened transaction and error monitoring with dashboards and KPIs.',
            'Led the monolith → microfrontends migration: enabled independent deployments and removed cross-team dependencies.',
            'Reframed a manual-routing bottleneck (Abonos) as a product problem; designed and shipped a deterministic round-robin assignment handling 500+ daily incidents, with human-in-the-loop before critical financial actions. Resolution time ~6h → ~2h per cycle (operational estimate).',
          ],
          tags: ['Product', 'Payments', 'Automation', 'Human-in-the-loop'],
        },
        {
          company: 'Banco Azteca · Sistema Regional',
          role: 'Software Engineer · Regional Credit & Collections',
          period: 'Oct 2022 — Dec 2024',
          summary:
            'Distinct product from Paga Fácil. End-to-end ownership of four microfrontends and active role in the monolith → microfrontends migration.',
          impact: [
            'End-to-end ownership of 4 microfrontends: applications, client portfolio, user administration and credit information.',
            'Participated in the monolith → microfrontends migration; instated testing and CI/CD to reduce release risk.',
          ],
          tags: ['React', 'TypeScript', 'Microfrontends', 'CI/CD'],
        },
        {
          company: 'MRCI',
          role: 'Business Analyst / Product Owner (de facto)',
          period: 'Nov 2021 — Oct 2022',
          summary:
            'Owned the roadmap, backlog and user stories for Octobile, an internal WhatsApp-style messaging app, coordinating an external development vendor from concept to production.',
          impact: [
            'Defined flows, diagrams and acceptance criteria; managed testing and bug review as the bridge between business and the technical team.',
            'Coordinated an external development vendor from concept to production.',
          ],
          tags: ['Product Ownership', 'Roadmap', 'Backlog', 'Stakeholders'],
        },
        {
          company: 'Lapbytes',
          role: 'Web Developer',
          period: 'Jan 2020 — Nov 2021',
          summary:
            'Delivered ~6 web and e-commerce platforms across industries, working directly with clients from requirements to delivery.',
          impact: [
            'Built ~6 e-commerce / web platforms; direct client communication from requirements to delivery.',
          ],
          tags: ['JavaScript', 'Vue', 'CSS', 'UX'],
        },
      ],
    },
    product: {
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
      eyebrow: 'Featured projects',
      title: 'Initiatives with real impact',
      description:
        'Initiatives where I combined product, engineering and technical leadership to solve real problems on financial platforms.',
      items: [
        {
          title: 'Hotel Commercial Intelligence Platform',
          tag: 'Product · Client work',
          description:
            'A custom CRM for a hotel group (Operadora SI): 10 hotels, ~35 users, ~1,500 companies. I lead the product end-to-end with the client.',
          metrics: [
            'Discovery revealed the real pain was lack of commercial visibility, not the screens they asked for — reshaped the roadmap.',
            'Build-vs-buy: justified building custom over HubSpot / Salesforce for a multi-hotel commercial process.',
            'Single-owner data model to enable cross-selling without losing accountability.',
            'Role-based permissions (RLS) as a product decision; GenAI deferred to phase 2 with an explicit hypothesis.',
          ],
          stack: ['React', 'TypeScript', 'Supabase', 'Product Discovery'],
        },
        {
          title: 'Paga Fácil',
          tag: 'Fintech product',
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
      eyebrow: 'Toolbox',
      title: 'The toolbox behind the product',
      description:
        'Tools I use day to day across discovery, technical decisions, AI automation and shipping to production.',
      categories: ['Product', 'AI', 'Data', 'Engineering', 'Delivery'],
    },
    impact: {
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
          value: '6M+',
          label: 'daily transactions',
          context: 'Product work on payments at scale.',
        },
        {
          value: '500+',
          label: 'daily incidents routed',
          context: 'Deterministic assignment in payments operations.',
        },
        {
          value: '4',
          label: 'microfrontends owned',
          context: 'End-to-end product modules at Banco Azteca.',
        },
      ],
    },
    contact: {
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
    theme: {
      tooltip: 'Drag · Click color',
      mobileHint: 'Hold and drag',
    },
  },
};
