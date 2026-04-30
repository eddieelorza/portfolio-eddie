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
      badge: 'Disponible para nuevas oportunidades.',
      title1: 'Construyo',
      titleHighlight: 'frontends creativos',
      rotatingWords: [
        'frontends creativos',
        'experiencias premium',
        'productos escalables',
      ],
      title2: 'que mueven productos reales.',
      subtitle:
        'Frontend Engineer con experiencia en fintech. He trabajado en plataformas de pagos y crédito con alto volumen de uso, enfocándome en performance, confiabilidad y experiencia de usuario.',
      ctaProjects: 'Ver proyectos',
      ctaContact: 'Contáctame',
      avatarLabel: 'El que escribe el código',
      photoLabel: 'El que lidera al equipo',
    },
    about: {
      eyebrow: 'Sobre mí',
      title: 'Trabajo en frontend donde el performance y la estabilidad sí importan',
      p1: 'He trabajado construyendo interfaces para sistemas financieros donde los errores impactan directamente al usuario y al negocio.',
      p2: 'Me enfoco en escribir código claro, tomar decisiones técnicas con criterio y colaborar con producto para que las soluciones realmente funcionen en producción.',
      p3: 'También he liderado equipos pequeños, organizando entregas y ayudando a mantener calidad en sistemas que no pueden fallar.',
      tags: ['Tech Leadership', 'Product Engineering', 'Mentoría', 'Microfrontends'],
    },
    experience: {
      eyebrow: 'Experiencia',
      title: 'Liderando frontend donde cada milisegundo importa',
      description:
        'He trabajado en frontend de sistemas donde la estabilidad, el performance y la calidad en producción son clave.',
      roles: [
        {
          company: 'Banco Azteca',
          role: 'Tech Lead · Frontend Engineer',
          period: '2022 — Presente',
          summary:
            'Trabajé en el frontend de sistemas de pagos y crédito con alto volumen de tráfico. Participé en decisiones de arquitectura, mejora de performance y reducción de incidencias en producción. También coordiné el trabajo de un equipo pequeño para mantener entregas constantes.',
          impact: [
            'Reduje tiempos de release trabajando con microfrontends y despliegues independientes.',
            'Participé en la estandarización de componentes y estructura del frontend.',
            'Implementé testing y monitoreo para reducir errores en producción.',
          ],
          tags: ['React', 'TypeScript', 'Microfrontends', 'AWS'],
        },
        {
          company: 'MRCI',
          role: 'Frontend Engineer',
          period: '2020 — 2022',
          summary:
            'Desarrollo de interfaces internas con enfoque en mantenibilidad y experiencia de usuario. Implementación de React + TypeScript y mejoras en performance del frontend.',
          impact: [
            'Diseñé e implementé un sistema interno de mensajería llamado Octobile.',
            'Definí la experiencia de usuario, documentación y flujos del producto desde cero.',
            'Desarrollé el frontend en React + TypeScript, enfocado en usabilidad y tiempo de respuesta.',
          ],
          tags: ['React', 'TypeScript', 'Jest', 'Node.js'],
        },
        {
          company: 'Lapbytes',
          role: 'Frontend Developer',
          period: '2019 — 2020',
          summary:
            'Desarrollo de plataformas e-commerce enfocadas en performance y experiencia de usuario. Trabajé en la construcción de interfaces conectadas a APIs, cuidando tiempos de carga, usabilidad y estabilidad en producción. Colaboración directa con clientes para traducir requerimientos de negocio en soluciones funcionales.',
          impact: [
            'Desarrollo de interfaces para e-commerce con foco en UX y performance.',
            'Trabajo directo con clientes para aterrizar requerimientos en producto.',
          ],
          tags: ['JavaScript', 'Vue', 'CSS', 'UX'],
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
        'Machine learning y análisis de datos aplicados.',
        'Implementación de soluciones de IA en producto.',
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
            'Plataforma de pagos donde trabajé en el frontend de flujos críticos utilizados diariamente por miles de usuarios. Participé en la evolución del sistema hacia microfrontends y en la mejora de estabilidad en producción, reduciendo errores de pagos no reflejados.',
          metrics: [
            'Alto volumen de transacciones diarias',
            'Reducción de incidencias en pagos',
            'Mejora en tiempos de respuesta',
          ],
          stack: ['React', 'TypeScript', 'AWS'],
        },
        {
          title: 'Microfrontends Architecture',
          tag: 'Arquitectura',
          description:
            'Implementación de arquitectura de microfrontends en React con TypeScript para mejorar escalabilidad y organización del código. Definí patrones y colaboré en la adopción dentro del equipo para facilitar releases independientes.',
          metrics: [
            'Arquitectura usada por múltiples aplicaciones dentro del sistema',
            'Soporte a varios equipos trabajando en paralelo',
            'Mejora en tiempos de entrega gracias a despliegues independientes',
          ],
          stack: ['Module Federation', 'React', 'TypeScript', 'CI/CD'],
        },
        {
          title: 'Sistema Regional',
          tag: 'Plataforma interna',
          description:
            'Desarrollo de módulos frontend (MFEs) para administración de usuarios, historial crediticio y portafolio dentro de una plataforma interna. Enfoque en componentes reutilizables, integración con APIs y alineación con flujos de negocio.',
          metrics: [
            'Componentes reutilizables',
            'Integración con APIs internas',
            'Módulos independientes',
          ],
          stack: ['React', 'TypeScript', 'Feature Flags', 'Edge Config'],
        },
      ],
    },
    stack: {
      eyebrow: 'Tech stack',
      title: 'Las herramientas que uso a diario',
      description:
        'Stack moderno enfocado en productividad, escalabilidad y experiencia de desarrollador.',
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
        'Estoy abierto a roles donde pueda aportar en frontend, liderazgo y producto. Si crees que encajo, hablemos.',
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
      titleHighlight: 'creative frontends',
      rotatingWords: [
        'creative frontends',
        'premium experiences',
        'scalable products',
      ],
      title2: 'that move real products.',
      subtitle:
        "Frontend Engineer with experience in fintech. I've worked on high-traffic payments and credit platforms, focused on performance, reliability and user experience.",
      ctaProjects: 'See projects',
      ctaContact: 'Contact me',
      avatarLabel: 'The one who writes the code',
      photoLabel: 'The one who leads the team',
    },
    about: {
      eyebrow: 'About me',
      title: 'I work on frontend where performance and stability really matter',
      p1: "I've built interfaces for financial systems where bugs directly impact users and the business.",
      p2: 'I focus on writing clear code, making thoughtful technical decisions and collaborating with product so the solutions actually work in production.',
      p3: "I've also led small teams, organizing deliveries and helping maintain quality in systems that can't fail.",
      tags: ['Tech Leadership', 'Product Engineering', 'Mentorship', 'Microfrontends'],
    },
    experience: {
      eyebrow: 'Experience',
      title: 'Leading frontend where every millisecond matters',
      description:
        "I've worked on frontend for systems where stability, performance and production quality are key.",
      roles: [
        {
          company: 'Banco Azteca',
          role: 'Tech Lead · Frontend Engineer',
          period: '2022 — Present',
          summary:
            'Worked on the frontend of high-traffic payments and credit systems. Contributed to architecture decisions, performance improvements and reducing production incidents. Also coordinated a small team to keep delivery steady.',
          impact: [
            'Reduced release times by working with microfrontends and independent deployments.',
            'Contributed to standardizing components and frontend structure.',
            'Implemented testing and monitoring to reduce production errors.',
          ],
          tags: ['React', 'TypeScript', 'Microfrontends', 'AWS'],
        },
        {
          company: 'MRCI',
          role: 'Frontend Engineer',
          period: '2020 — 2022',
          summary:
            'Built internal interfaces focused on maintainability and user experience. Worked with React + TypeScript and improved frontend performance.',
          impact: [
            'Designed and built an internal messaging system called Octobile.',
            'Defined the user experience, documentation and product flows from scratch.',
            'Built the frontend in React + TypeScript, focused on usability and response time.',
          ],
          tags: ['React', 'TypeScript', 'Jest', 'Node.js'],
        },
        {
          company: 'Lapbytes',
          role: 'Frontend Developer',
          period: '2019 — 2020',
          summary:
            'Built e-commerce platforms focused on performance and user experience. Worked on API-connected interfaces, taking care of load times, usability and production stability. Direct collaboration with clients to translate business requirements into working solutions.',
          impact: [
            'Built e-commerce interfaces focused on UX and performance.',
            'Direct work with clients to translate requirements into product.',
          ],
          tags: ['JavaScript', 'Vue', 'CSS', 'UX'],
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
        'Applied machine learning and data analysis.',
        'Implementing AI solutions in product.',
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
            'Payments platform where I worked on the frontend of critical flows used daily by thousands of users. I contributed to the migration toward microfrontends and to improving production stability, reducing missed payment errors.',
          metrics: [
            'High daily transaction volume',
            'Fewer payment incidents',
            'Better response times',
          ],
          stack: ['React', 'TypeScript', 'AWS'],
        },
        {
          title: 'Microfrontends Architecture',
          tag: 'Architecture',
          description:
            'Microfrontend architecture in React + TypeScript to improve scalability and code organization. I defined patterns and helped the team adopt them, enabling independent releases.',
          metrics: [
            'Architecture used by multiple apps within the system',
            'Support for several teams working in parallel',
            'Faster delivery times thanks to independent deployments',
          ],
          stack: ['Module Federation', 'React', 'TypeScript', 'CI/CD'],
        },
        {
          title: 'Regional System',
          tag: 'Internal platform',
          description:
            'Frontend modules (MFEs) for user administration, credit history and portfolio inside an internal platform. Focus on reusable components, API integration and alignment with business flows.',
          metrics: [
            'Reusable components',
            'Internal API integration',
            'Independent modules',
          ],
          stack: ['React', 'TypeScript', 'Feature Flags', 'Edge Config'],
        },
      ],
    },
    stack: {
      eyebrow: 'Tech stack',
      title: 'The tools I use every day',
      description:
        'A modern stack focused on productivity, scalability and developer experience.',
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
        "I'm open to roles where I can contribute on frontend, leadership and product. If you think I'd be a fit, let's talk.",
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
