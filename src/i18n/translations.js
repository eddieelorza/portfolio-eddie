export const translations = {
  es: {
    nav: {
      about: 'Sobre mí',
      experience: 'Experiencia',
      education: 'Estudios',
      projects: 'Proyectos',
      stack: 'Stack',
      impact: 'Impacto',
      contact: 'Contacto',
      cta: 'Hablemos',
    },
    hero: {
      badge: 'Abierto a roles de Tech Lead / Engineering Manager.',
      title1: 'Lidero',
      titleHighlight: 'equipos de ingeniería',
      rotatingWords: [
        'Tech Lead',
        'Engineering Manager',
        'Impacto al Negocio',
        'Liderazgo Técnico',
        'Entregas a Escala',
        'Resultados Reales',
      ],
      title2: 'que entregan resultados de negocio.',
      subtitle:
        'Tech Lead y Engineering Manager con 6+ años en fintech. Lidero un equipo de 5 ingenieros entregando plataformas a alta escala (~6M transacciones/día), alineando ingeniería con producto, stakeholders y vendors.',
      ctaProjects: 'Ver impacto',
      ctaContact: 'Hablemos',
      avatarLabel: 'El que define la estrategia',
      photoLabel: 'El que lidera al equipo',
    },
    about: {
      eyebrow: 'Sobre mí',
      title: 'Lidero ingeniería donde la entrega y el negocio importan',
      p1: 'He liderado equipos de ingeniería en fintech entregando plataformas que procesan millones de transacciones diarias y sostienen operaciones críticas.',
      p2: 'Mi enfoque es traducir objetivos de negocio en decisiones técnicas claras, alineando producto, ingeniería, stakeholders y vendors hacia entregas medibles.',
      p3: 'Lidero un equipo de 5 ingenieros, mentoría técnica y la migración de monolito a microfrontends, manteniendo calidad y velocidad de entrega.',
      tags: [
        'Engineering Management',
        'Tech Leadership',
        'Delivery a Escala',
        'Stakeholders & Vendors',
      ],
    },
    experience: {
      eyebrow: 'Experiencia',
      title: 'Liderando ingeniería donde cada decisión impacta al negocio',
      description:
        'He liderado equipos en sistemas críticos donde la entrega, la calidad y el impacto al negocio son lo que define el éxito.',
      roles: [
        {
          company: 'Banco Azteca',
          role: 'Tech Lead · Engineering Manager',
          period: '2022 — Presente',
          summary:
            'Lidero un equipo de 5 ingenieros entregando plataformas de pagos y crédito a alta escala (~6M transacciones/día). Defino estrategia técnica, prioridades de delivery y alineo decisiones con producto, stakeholders y vendors.',
          impact: [
            'Lideré la migración de monolito a microfrontends, habilitando despliegues independientes por squad.',
            'Reduje incidencias en producción y mejoré la cadencia de release coordinando equipos cross-functional.',
            'Trabajé con stakeholders y vendors para asegurar entregas alineadas a objetivos de negocio.',
          ],
          tags: ['Leadership', 'Delivery', 'Microfrontends', 'AWS'],
        },
        {
          company: 'MRCI',
          role: 'Tech Lead · Frontend Engineer',
          period: '2020 — 2022',
          summary:
            'Lideré el diseño y delivery de un sistema interno de mensajería, definiendo estrategia técnica, flujos de producto y experiencia de usuario desde cero.',
          impact: [
            'Definí la visión técnica y de producto del sistema interno Octobile.',
            'Coordiné delivery end-to-end con producto y stakeholders internos.',
            'Establecí prácticas de calidad y testing para sostener la operación.',
          ],
          tags: ['Leadership', 'Product', 'React', 'Delivery'],
        },
        {
          company: 'Lapbytes',
          role: 'Frontend Engineer',
          period: '2019 — 2020',
          summary:
            'Desarrollo de plataformas e-commerce con enfoque en delivery y resultado de negocio. Colaboración directa con clientes para traducir requerimientos en producto funcional.',
          impact: [
            'Entregas alineadas a objetivos de negocio del cliente.',
            'Trabajo directo con stakeholders para aterrizar requerimientos.',
          ],
          tags: ['Delivery', 'Stakeholders', 'E-commerce', 'UX'],
        },
      ],
    },
    education: {
      eyebrow: 'Estudios',
      title: 'Maestría en Inteligencia Artificial Aplicada',
      description: 'IA aplicada a producto, negocio y decisiones técnicas.',
      cardLabel: 'Tecnológico de Monterrey',
      cardTitle: 'Software Inteligente',
      photoAlt: 'Eddie Elorza · graduación',
      meta: ['2024', 'Promedio 3.8/4', 'Grupo estudiantil'],
      highlights: [
        'Machine learning aplicado a decisiones de producto y negocio.',
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
        'Iniciativas donde combiné liderazgo técnico, delivery y alineación con negocio para mover métricas reales.',
      items: [
        {
          title: 'Paga Fácil',
          tag: 'Producto fintech',
          description:
            'Plataforma fintech procesando ~6M transacciones diarias. Lideré la evolución hacia microfrontends y la reducción de incidencias en producción, alineando entregas con producto, stakeholders y vendors.',
          metrics: [
            '~6M transacciones diarias',
            'Reducción de incidencias críticas',
            'Cadencia de release sostenida',
          ],
          stack: ['Leadership', 'Microfrontends', 'AWS'],
        },
        {
          title: 'Microfrontends Architecture',
          tag: 'Decisión técnica',
          description:
            'Lideré la adopción de arquitectura de microfrontends para escalar entregas y permitir releases independientes entre squads. Definí patrones, gobernanza técnica y plan de migración.',
          metrics: [
            'Adoptado por múltiples squads',
            'Releases independientes por equipo',
            'Time-to-delivery reducido',
          ],
          stack: ['Architecture', 'Module Federation', 'CI/CD'],
        },
        {
          title: 'Sistema Regional',
          tag: 'Plataforma interna',
          description:
            'Plataforma interna de gestión de usuarios, crédito y portafolio. Coordiné delivery de módulos independientes, alineación con stakeholders de negocio e integración cross-equipo.',
          metrics: [
            'Delivery cross-equipo',
            'Alineación con stakeholders',
            'Módulos independientes',
          ],
          stack: ['Delivery', 'Feature Flags', 'Edge Config'],
        },
      ],
    },
    stack: {
      eyebrow: 'Tech stack',
      title: 'El stack que respalda mis decisiones técnicas',
      description:
        'Herramientas elegidas con criterio para sostener entregas, escala y decisiones de negocio.',
    },
    impact: {
      eyebrow: 'Impacto',
      title: 'Resultados que respaldan el liderazgo',
      description:
        'Los números detrás de los equipos y plataformas que he liderado.',
      items: [
        { value: '+6', label: 'años en fintech' },
        { value: '+6M', label: 'transacciones diarias' },
        { value: '5', label: 'ingenieros liderados' },
        { value: '−70%', label: 'incidencias en producción' },
      ],
    },
    contact: {
      eyebrow: 'Contacto',
      title: '¿Construimos algo grande juntos?',
      description:
        'Abierto a roles de Tech Lead y Engineering Manager donde pueda combinar liderazgo, delivery e impacto al negocio. Si crees que encajo, hablemos.',
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
    footer: 'Liderazgo técnico · Delivery · Impacto al negocio',
    languageLabel: 'Idioma',
    themeLabel: 'Color',
  },
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      education: 'Education',
      projects: 'Projects',
      stack: 'Stack',
      impact: 'Impact',
      contact: 'Contact',
      cta: "Let's talk",
    },
    hero: {
      badge: 'Open to Tech Lead / Engineering Manager roles.',
      title1: 'Leading',
      titleHighlight: 'engineering teams',
      rotatingWords: [
        'Tech Lead',
        'Engineering Manager',
        'Driving Business Impact',
        'Leading Engineering Teams',
        'Delivering at Scale',
        'Shipping Real Outcomes',
      ],
      title2: 'that ship real business outcomes.',
      subtitle:
        'Tech Lead and Engineering Manager with 6+ years in fintech. I lead a team of 5 engineers delivering high-scale platforms (~6M transactions/day), aligning engineering with product, stakeholders and vendors.',
      ctaProjects: 'See impact',
      ctaContact: "Let's talk",
      avatarLabel: 'The one who shapes strategy',
      photoLabel: 'The one who leads the team',
    },
    about: {
      eyebrow: 'About me',
      title: 'I lead engineering where delivery and business impact matter',
      p1: "I've led engineering teams in fintech, delivering platforms that process millions of daily transactions and sustain critical operations.",
      p2: 'My focus is translating business goals into clear technical decisions, aligning product, engineering, stakeholders and vendors toward measurable delivery.',
      p3: 'I lead a team of 5 engineers, technical mentorship and the monolith-to-microfrontends migration, sustaining quality and delivery speed.',
      tags: [
        'Engineering Management',
        'Tech Leadership',
        'Delivery at Scale',
        'Stakeholders & Vendors',
      ],
    },
    experience: {
      eyebrow: 'Experience',
      title: 'Leading engineering where every decision impacts the business',
      description:
        "I've led teams on critical systems where delivery, quality and business impact define success.",
      roles: [
        {
          company: 'Banco Azteca',
          role: 'Tech Lead · Engineering Manager',
          period: '2022 — Present',
          summary:
            'Lead a team of 5 engineers delivering high-scale payments and credit platforms (~6M transactions/day). I define technical strategy, delivery priorities and align decisions with product, stakeholders and vendors.',
          impact: [
            'Led the monolith-to-microfrontends migration, enabling independent squad deployments.',
            'Reduced production incidents and improved release cadence by coordinating cross-functional teams.',
            'Partnered with stakeholders and vendors to keep delivery aligned with business goals.',
          ],
          tags: ['Leadership', 'Delivery', 'Microfrontends', 'AWS'],
        },
        {
          company: 'MRCI',
          role: 'Tech Lead · Frontend Engineer',
          period: '2020 — 2022',
          summary:
            'Led the design and delivery of an internal messaging system, defining technical strategy, product flows and user experience from scratch.',
          impact: [
            'Defined the technical and product vision for the internal system Octobile.',
            'Coordinated end-to-end delivery with product and internal stakeholders.',
            'Established quality and testing practices to sustain the operation.',
          ],
          tags: ['Leadership', 'Product', 'React', 'Delivery'],
        },
        {
          company: 'Lapbytes',
          role: 'Frontend Engineer',
          period: '2019 — 2020',
          summary:
            'Built e-commerce platforms focused on delivery and business outcomes. Direct collaboration with clients to translate requirements into working product.',
          impact: [
            'Delivery aligned to client business goals.',
            'Direct work with stakeholders to land requirements.',
          ],
          tags: ['Delivery', 'Stakeholders', 'E-commerce', 'UX'],
        },
      ],
    },
    education: {
      eyebrow: 'Education',
      title: 'MSc in Applied Artificial Intelligence',
      description: 'AI applied to product, business and technical decisions.',
      cardLabel: 'Tecnológico de Monterrey',
      cardTitle: 'Intelligent Software',
      photoAlt: 'Eddie Elorza · graduation',
      meta: ['2024', 'GPA 3.8/4', 'Student group'],
      highlights: [
        'Applied machine learning for product and business decisions.',
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
      eyebrow: 'Featured work',
      title: 'Work measured in impact',
      description:
        'Initiatives where I combined technical leadership, delivery and business alignment to move real metrics.',
      items: [
        {
          title: 'Paga Fácil',
          tag: 'Fintech product',
          description:
            'Fintech platform processing ~6M daily transactions. Led the evolution to microfrontends and reduced production incidents, aligning delivery with product, stakeholders and vendors.',
          metrics: [
            '~6M daily transactions',
            'Critical incidents reduced',
            'Sustained release cadence',
          ],
          stack: ['Leadership', 'Microfrontends', 'AWS'],
        },
        {
          title: 'Microfrontends Architecture',
          tag: 'Technical decision',
          description:
            'Led the adoption of microfrontend architecture to scale delivery and enable independent releases across squads. Defined patterns, technical governance and migration plan.',
          metrics: [
            'Adopted across multiple squads',
            'Independent releases per team',
            'Reduced time-to-delivery',
          ],
          stack: ['Architecture', 'Module Federation', 'CI/CD'],
        },
        {
          title: 'Regional System',
          tag: 'Internal platform',
          description:
            'Internal platform for user management, credit history and portfolio. Coordinated delivery of independent modules, business stakeholder alignment and cross-team integration.',
          metrics: [
            'Cross-team delivery',
            'Stakeholder alignment',
            'Independent modules',
          ],
          stack: ['Delivery', 'Feature Flags', 'Edge Config'],
        },
      ],
    },
    stack: {
      eyebrow: 'Tech stack',
      title: 'The stack that backs my technical decisions',
      description:
        'Tools chosen with judgment to sustain delivery, scale and business decisions.',
    },
    impact: {
      eyebrow: 'Impact',
      title: 'Numbers that back the leadership',
      description:
        "The numbers behind the teams and platforms I've led.",
      items: [
        { value: '+6', label: 'years in fintech' },
        { value: '+6M', label: 'daily transactions' },
        { value: '5', label: 'engineers led' },
        { value: '−70%', label: 'production incidents' },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Shall we build something great?',
      description:
        "Open to Tech Lead and Engineering Manager roles where I can combine leadership, delivery and business impact. If you think I'd be a fit, let's talk.",
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
    footer: 'Technical leadership · Delivery · Business impact',
    languageLabel: 'Language',
    themeLabel: 'Color',
  },
};
