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
      badge: 'Disponible para nuevas oportunidades.',
      title1: 'Construyo',
      titleHighlight: 'productos escalables',
      rotatingWords: [
        'productos escalables',
        'experiencias premium',
        'soluciones de negocio',
      ],
      title2: 'que mueven productos reales.',
      subtitle:
        'Ingeniero orientado a producto con experiencia en fintech, pagos y plataformas de alto tráfico. Me enfoco en construir soluciones escalables, confiables y alineadas a objetivos de negocio.',
      ctaProjects: 'Ver proyectos',
      ctaContact: 'Contáctame',
      avatarLabel: 'El que construye el producto',
      photoLabel: 'El que lidera la ejecución',
    },
    about: {
      eyebrow: 'Sobre mí',
      title: 'Ingeniería orientada a producto, donde cada decisión impacta al negocio',
      p1: 'He construido productos y sistemas en fintech, donde una decisión técnica se traduce directamente en impacto para el usuario y para el negocio.',
      p2: 'Trabajo en la intersección entre producto e ingeniería: equilibro objetivos de negocio con decisiones técnicas y colaboro con equipos cross-funcionales para entregar soluciones que funcionan en producción.',
      p3: 'He liderado equipos, coordinado entregas con stakeholders y vendors, y sostenido la calidad de plataformas de alto tráfico que no pueden fallar.',
      tags: ['Product Engineering', 'Liderazgo técnico', 'Fintech & Pagos', 'Sistemas escalables'],
    },
    experience: {
      eyebrow: 'Experiencia',
      title: 'Construyendo y liderando producto en sistemas de alto tráfico',
      description:
        'Trayectoria construyendo plataformas de fintech y pagos donde la escalabilidad, la confiabilidad y el impacto de negocio son críticos.',
      roles: [
        {
          company: 'Banco Azteca',
          role: 'Tech Lead · Product Engineer',
          period: '2022 — Presente',
          summary:
            'Lideré la entrega de producto en sistemas de pagos y crédito de alto tráfico, equilibrando prioridades de negocio con decisiones de arquitectura. Coordiné a un equipo, gestioné releases y alineé la ejecución con stakeholders y áreas operativas.',
          impact: [
            'Lideré la migración de monolito a microfrontends para mejorar la velocidad de release, la escalabilidad y la autonomía del equipo.',
            'Estandaricé arquitectura y componentes para escalar el trabajo de varios equipos en paralelo sin fricción.',
            'Implementé testing y monitoreo para reducir el riesgo operativo en flujos de pago críticos.',
          ],
          tags: ['React', 'TypeScript', 'Microfrontends', 'AWS'],
        },
        {
          company: 'MRCI',
          role: 'Product Engineer',
          period: '2020 — 2022',
          summary:
            'Construí productos internos de extremo a extremo: desde el discovery y la definición de flujos hasta la entrega en producción. Trabajé cerca del negocio para traducir necesidades reales en producto funcional.',
          impact: [
            'Diseñé y construí Octobile, un sistema interno de mensajería, desde el concepto hasta producción.',
            'Definí la experiencia, los flujos de producto y la documentación alineando expectativas con los stakeholders.',
            'Desarrollé el frontend en React + TypeScript priorizando usabilidad, mantenibilidad y tiempo de respuesta.',
          ],
          tags: ['React', 'TypeScript', 'Jest', 'Node.js'],
        },
        {
          company: 'Lapbytes',
          role: 'Frontend Developer',
          period: '2019 — 2020',
          summary:
            'Desarrollé plataformas de e-commerce conectadas a APIs, cuidando el rendimiento y la estabilidad en producción. Trabajé directamente con clientes para convertir requerimientos de negocio en producto funcional.',
          impact: [
            'Construí interfaces de e-commerce optimizando tiempos de carga y experiencia de compra.',
            'Alineé la entrega con las prioridades de negocio de cada cliente, traduciendo requerimientos en producto.',
          ],
          tags: ['JavaScript', 'Vue', 'CSS', 'UX'],
        },
      ],
    },
    product: {
      eyebrow: 'Product & Execution',
      title: 'Cómo construyo y entrego producto',
      description:
        'Más allá del código: priorizo, alineo equipos y entrego con foco en el impacto de negocio y la confiabilidad operativa.',
      items: [
        {
          title: 'Roadmap y priorización',
          description:
            'Defino qué construir y en qué orden, equilibrando impacto de negocio, esfuerzo y riesgo técnico.',
        },
        {
          title: 'Alineación con stakeholders',
          description:
            'Conecto ingeniería, producto y áreas operativas para que la entrega responda a objetivos reales.',
        },
        {
          title: 'Releases y rollouts',
          description:
            'Planifico despliegues graduales y feature flags para lanzar con control y bajo riesgo.',
        },
        {
          title: 'Confiabilidad operativa',
          description:
            'Monitoreo, testing y manejo de incidentes para sostener sistemas críticos en producción.',
        },
        {
          title: 'Discovery de producto',
          description:
            'Valido problemas y necesidades antes de construir, para invertir el esfuerzo donde importa.',
        },
        {
          title: 'Entrega cross-funcional',
          description:
            'Coordino equipos, vendors y dependencias para mantener una ejecución constante y predecible.',
        },
      ],
    },
    education: {
      eyebrow: 'Estudios',
      title: 'Maestría en Inteligencia Artificial Aplicada',
      description: 'IA aplicada a producto, datos y sistemas reales.',
      cardLabel: 'Tecnológico de Monterrey',
      cardTitle: 'Software Inteligente',
      photoAlt: 'Eddie Elorza · graduación',
      meta: ['2024', 'Promedio 3.8/4', 'Grupo estudiantil'],
      highlights: [
        'Machine learning y análisis de datos aplicados a producto.',
        'Implementación de soluciones de IA en sistemas reales.',
        'Liderazgo y gobernanza de proyectos tecnológicos.',
      ],
      certificates: [
        {
          label: 'Certificado Tec',
          href: 'https://certificados.tec.mx/certificate/ac443de24951594489ed639728a30e04',
        },
        {
          label: 'Credencial digital',
          href: 'https://www.credential.net/84ab1b58-7192-44e9-8526-8d8014b0df3d#acc.cGR4xWvb',
        },
      ],
    },
    projects: {
      eyebrow: 'Proyectos destacados',
      title: 'Trabajo que se mide en impacto',
      description:
        'Una selección de iniciativas donde combiné decisiones técnicas, liderazgo y enfoque en producto para mover métricas reales.',
      items: [
        {
          title: 'Paga Fácil',
          tag: 'Producto fintech',
          description:
            'Plataforma de pagos usada a diario por miles de usuarios. Trabajé en flujos críticos de transacción y lideré parte de la migración hacia microfrontends, mejorando la estabilidad en producción y reduciendo errores de pagos no reflejados que generaban carga operativa.',
          metrics: [
            'Alto volumen de transacciones diarias',
            'Menos incidencias operativas en pagos',
            'Mayor estabilidad y tiempos de respuesta',
          ],
          stack: ['React', 'TypeScript', 'AWS'],
        },
        {
          title: 'Microfrontends Architecture',
          tag: 'Arquitectura',
          description:
            'Lideré la migración a una arquitectura de microfrontends en React + TypeScript para mejorar la velocidad de release, la escalabilidad y la autonomía de los equipos. Definí los patrones y acompañé su adopción.',
          metrics: [
            'Releases independientes entre aplicaciones',
            'Varios equipos trabajando en paralelo sin bloqueos',
            'Menor tiempo de entrega y menos riesgo en despliegues',
          ],
          stack: ['Module Federation', 'React', 'TypeScript', 'CI/CD'],
        },
        {
          title: 'Sistema Regional',
          tag: 'Plataforma interna',
          description:
            'Módulos de producto (MFEs) para administración de usuarios, historial crediticio y portafolio dentro de una plataforma interna. Foco en componentes reutilizables, integración con APIs y alineación con los flujos de negocio.',
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
      eyebrow: 'Tech stack',
      title: 'Las herramientas que uso a diario',
      description:
        'Stack enfocado en construir productos escalables, confiables y listos para producción.',
    },
    impact: {
      eyebrow: 'Impacto',
      title: 'Algunos números del trabajo que he hecho',
      description:
        'Los números detrás de los productos que he ayudado a construir y sostener.',
      items: [
        { value: '+5', label: 'años de experiencia' },
        { value: '+6M', label: 'transacciones procesadas' },
        { value: '1', label: 'año liderando' },
        { value: '−70%', label: 'incidencias en producción' },
      ],
    },
    contact: {
      eyebrow: 'Contacto',
      title: '¿Construimos algo grande juntos?',
      description:
        'Estoy abierto a roles de Product Engineer y liderazgo técnico, especialmente en fintech y producto. Si crees que encajo, hablemos.',
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
    footer: 'Diseñado y construido con React · Tailwind · Framer Motion',
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
      badge: 'Open to new opportunities.',
      title1: 'Building',
      titleHighlight: 'scalable products',
      rotatingWords: [
        'scalable products',
        'premium experiences',
        'business-driven solutions',
      ],
      title2: 'that move real products.',
      subtitle:
        'Product-oriented engineer with experience in fintech, payments and high-traffic platforms. Focused on building scalable, reliable solutions aligned with business goals.',
      ctaProjects: 'See projects',
      ctaContact: 'Contact me',
      avatarLabel: 'The one who builds the product',
      photoLabel: 'The one who leads execution',
    },
    about: {
      eyebrow: 'About me',
      title: 'Product-oriented engineering, where every decision impacts the business',
      p1: "I've built products and systems in fintech, where a technical decision translates directly into impact for the user and the business.",
      p2: 'I work at the intersection of product and engineering: balancing business goals with technical decisions and collaborating with cross-functional teams to ship solutions that work in production.',
      p3: "I've led teams, coordinated deliveries with stakeholders and vendors, and sustained the quality of high-traffic platforms that can't fail.",
      tags: ['Product Engineering', 'Technical Leadership', 'Fintech & Payments', 'Scalable Systems'],
    },
    experience: {
      eyebrow: 'Experience',
      title: 'Building and leading product in high-traffic systems',
      description:
        'A track record building fintech and payments platforms where scalability, reliability and business impact are critical.',
      roles: [
        {
          company: 'Banco Azteca',
          role: 'Tech Lead · Product Engineer',
          period: '2022 — Present',
          summary:
            'Led product delivery across high-traffic payments and credit systems, balancing business priorities with architecture decisions. Coordinated a team, managed releases and aligned execution with stakeholders and operations.',
          impact: [
            'Led the migration from monolith to microfrontends to improve release velocity, scalability and team autonomy.',
            'Standardized architecture and components to scale the work of several teams in parallel without friction.',
            'Implemented testing and monitoring to reduce operational risk in critical payment flows.',
          ],
          tags: ['React', 'TypeScript', 'Microfrontends', 'AWS'],
        },
        {
          company: 'MRCI',
          role: 'Product Engineer',
          period: '2020 — 2022',
          summary:
            'Built internal products end to end: from discovery and flow definition to production delivery. Worked closely with the business to translate real needs into working product.',
          impact: [
            'Designed and built Octobile, an internal messaging system, from concept to production.',
            'Defined the experience, product flows and documentation, aligning expectations with stakeholders.',
            'Built the frontend in React + TypeScript, prioritizing usability, maintainability and response time.',
          ],
          tags: ['React', 'TypeScript', 'Jest', 'Node.js'],
        },
        {
          company: 'Lapbytes',
          role: 'Frontend Developer',
          period: '2019 — 2020',
          summary:
            'Built e-commerce platforms connected to APIs, taking care of performance and production stability. Worked directly with clients to turn business requirements into working product.',
          impact: [
            'Built e-commerce interfaces, optimizing load times and the buying experience.',
            'Aligned delivery with each client business priorities, translating requirements into product.',
          ],
          tags: ['JavaScript', 'Vue', 'CSS', 'UX'],
        },
      ],
    },
    product: {
      eyebrow: 'Product & Execution',
      title: 'How I build and ship product',
      description:
        'Beyond code: I prioritize, align teams and deliver with a focus on business impact and operational reliability.',
      items: [
        {
          title: 'Roadmap & Prioritization',
          description:
            'Defining what to build and in what order, balancing business impact, effort and technical risk.',
        },
        {
          title: 'Stakeholder Alignment',
          description:
            'Connecting engineering, product and operations so delivery maps to real objectives.',
        },
        {
          title: 'Releases & Rollouts',
          description:
            'Planning gradual deployments and feature flags to ship with control and low risk.',
        },
        {
          title: 'Operational Reliability',
          description:
            'Monitoring, testing and incident handling to sustain critical systems in production.',
        },
        {
          title: 'Product Discovery',
          description:
            'Validating problems and needs before building, to invest effort where it matters.',
        },
        {
          title: 'Cross-functional Delivery',
          description:
            'Coordinating teams, vendors and dependencies to keep execution steady and predictable.',
        },
      ],
    },
    education: {
      eyebrow: 'Education',
      title: 'MSc in Applied Artificial Intelligence',
      description: 'AI applied to product, data and real-world systems.',
      cardLabel: 'Tecnológico de Monterrey',
      cardTitle: 'Intelligent Software',
      photoAlt: 'Eddie Elorza · graduation',
      meta: ['2024', 'GPA 3.8/4', 'Student group'],
      highlights: [
        'Applied machine learning and data analysis for product.',
        'Implementing AI solutions in real-world systems.',
        'Leadership and governance of technology projects.',
      ],
      certificates: [
        {
          label: 'Tec certificate',
          href: 'https://certificados.tec.mx/certificate/ac443de24951594489ed639728a30e04',
        },
        {
          label: 'Digital credential',
          href: 'https://www.credential.net/84ab1b58-7192-44e9-8526-8d8014b0df3d#acc.cGR4xWvb',
        },
      ],
    },
    projects: {
      eyebrow: 'Featured projects',
      title: 'Work measured in impact',
      description:
        'A selection of initiatives where I combined technical decisions, leadership and product focus to move real metrics.',
      items: [
        {
          title: 'Paga Fácil',
          tag: 'Fintech product',
          description:
            'Payments platform used daily by thousands of users. I worked on critical transaction flows and led part of the migration toward microfrontends, improving production stability and reducing missed payment errors that created operational load.',
          metrics: [
            'High daily transaction volume',
            'Fewer operational payment incidents',
            'Stronger stability and response times',
          ],
          stack: ['React', 'TypeScript', 'AWS'],
        },
        {
          title: 'Microfrontends Architecture',
          tag: 'Architecture',
          description:
            'Led the migration to a microfrontend architecture in React + TypeScript to improve release velocity, scalability and team autonomy. I defined the patterns and supported their adoption.',
          metrics: [
            'Independent releases across applications',
            'Several teams working in parallel without blockers',
            'Faster delivery and lower deployment risk',
          ],
          stack: ['Module Federation', 'React', 'TypeScript', 'CI/CD'],
        },
        {
          title: 'Regional System',
          tag: 'Internal platform',
          description:
            'Product modules (MFEs) for user administration, credit history and portfolio inside an internal platform. Focus on reusable components, API integration and alignment with business flows.',
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
      eyebrow: 'Tech stack',
      title: 'The tools I use every day',
      description:
        'A stack focused on building scalable, reliable, production-ready products.',
    },
    impact: {
      eyebrow: 'Impact',
      title: 'Some numbers from the work I have done',
      description:
        "The numbers behind the products I've helped build and sustain.",
      items: [
        { value: '+5', label: 'years of experience' },
        { value: '+6M', label: 'transactions processed' },
        { value: '1', label: 'year leading' },
        { value: '−70%', label: 'production incidents' },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Shall we build something great?',
      description:
        "I'm open to Product Engineer and technical leadership roles, especially in fintech and product. If you think I'd be a fit, let's talk.",
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
    footer: 'Designed and built with React · Tailwind · Framer Motion',
    languageLabel: 'Language',
    themeLabel: 'Color',
  },
};
