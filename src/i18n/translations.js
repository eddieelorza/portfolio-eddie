export const translations = {
  es: {
    nav: {
      about: 'Sobre mí',
      experience: 'Experiencia',
      product: 'Cómo trabajo',
      education: 'Estudios',
      projects: 'Proyectos',
      stack: 'Stack',
      personal: 'Fuera del código',
      contact: 'Contacto',
      cta: 'Hablemos',
    },
    hero: {
      badge: 'Software Engineer · Product Builder · Fintech & IA',
      title1: 'Diseño y construyo',
      titleHighlight: 'productos escalables',
      rotatingWords: [
        'productos escalables',
        'experiencias premium',
        'soluciones con IA',
        'plataformas fintech',
      ],
      title2: 'end-to-end.',
      subtitle:
        'Software Engineer y Product Builder con 6+ años en fintech y pagos. Del problema de negocio a la arquitectura, el código y la operación, con un enfoque AI First.',
      chips: ['MSc IA Aplicada', 'PSPO I'],
      ctaProjects: 'Ver proyectos',
      ctaContact: 'Hablemos',
      avatarLabel: 'El que construye el producto',
      photoLabel: 'El que lidera la ejecución',
      stickerHello: '¡Hola, soy Eddie!',
      stickerTag: 'Product Builder',
    },
    about: {
      eyebrow: 'Sobre mí',
      title: 'Software Engineer con mentalidad de *producto*.',
      p1: 'Llevo más de 6 años construyendo software en fintech y pagos. En Paga Fácil lideré un equipo fullstack de cinco personas sin dejar de programar. Hoy construyo el back office de crédito en Clip, y construí y mantengo un CRM en producción para un grupo hotelero.',
      p2: 'Mi trabajo cubre todo el ciclo: reglas de negocio, arquitectura, contratos de API, pruebas y operación. Cuando el proyecto lo necesita, escribo el PRD y construyo lo que define.',
      p3: 'Tengo una maestría en Inteligencia Artificial Aplicada y la certificación PSPO I. Trabajo con un enfoque AI First: uso agentes de IA en todo el desarrollo y llevo IA al producto donde aporta valor.',
      tags: ['Product Engineering', 'Fintech & Pagos', 'AI First', 'PSPO I · MSc AI'],
      photoAlt: 'Ilustración de Eddie Elorza programando en su laptop',
      photoCaption: 'Detrás del código',
    },
    experience: {
      eyebrow: 'Trayectoria',
      title: 'Experiencia entre *ingeniería* y producto',
      description:
        'De desarrollo web y móvil para clientes a plataformas de pagos y crédito, liderazgo técnico y productos en producción.',
      trackLabels: { prod: 'Producto', ing: 'Ingeniería' },
      currentNote: '← hoy',
      phases: [
        'Web Developer',
        'Business Analyst / Product Owner',
        'Software Engineer',
        'Product Engineer',
        'IA aplicada a producto',
      ],
      roles: [
        {
          company: 'Clip · Crédito y pagos',
          role: 'Software Engineer · Frontend | Credits',
          period: 'Ago 2026 — Actualidad',
          track: ['ing'],
          summary:
            'Frontend del Back Office de crédito en un equipo distribuido entre México y China.',
          impact: [
            'Desarrollo microfrontends con React, TypeScript, Umi Max y qiankun para originación y servicing de crédito.',
            'Defino contratos de API tipados con adapters y mocks para que el frontend avance sin esperar al backend.',
            'Pruebo con Jest, Testing Library y Playwright, y diagnostico fallos de integración entre host, microfrontends y servicios.',
          ],
          tags: ['React', 'TypeScript', 'Microfrontends', 'Playwright'],
        },
        {
          company: 'Operadora SI · CRM hotelero',
          role: 'Producto end-to-end · Proyecto para cliente',
          period: 'May 2026 — Actualidad',
          track: ['prod', 'ing'],
          summary:
            'CRM a medida para un grupo de 10 hoteles, en producción desde septiembre de 2026.',
          impact: [
            'Llevo el producto end-to-end: discovery, PRD, diseño, desarrollo y operación.',
            'Implementé permisos por hotel y rol con RLS en Postgres, verificados con pruebas automáticas.',
            'Prioricé el registro de visitas y el seguimiento comercial; la IA generativa quedó para una segunda fase.',
          ],
          tags: ['Discovery', 'PRD', 'Supabase · RLS', 'React'],
        },
        {
          company: 'Banco Azteca · Paga Fácil',
          role: 'Product Engineer · Plataforma de Pagos',
          period: 'Ene 2025 — Mar 2026',
          track: ['prod', 'ing'],
          summary:
            'Pasarela para pagar créditos en línea. Lideré la iniciativa y a un equipo fullstack de 5 personas.',
          impact: [
            'Gestioné roadmap, backlog, Scrum y code reviews sin dejar de desarrollar features.',
            'Migré la pasarela de Vue 2 a React como microfrontend con Module Federation y PWA.',
            'Implementé la clave de idempotencia por intento de pago para manejar reintentos sin duplicar abonos.',
            'En el área de Abonos automaticé la resolución de incidencias.',
          ],
          tags: ['Liderazgo técnico', 'Pagos', 'React', 'Microfrontends'],
        },
        {
          company: 'Banco Azteca · Sistema Regional',
          role: 'Software Engineer · Crédito y Cobranza Regional (segunda etapa)',
          period: 'Dic 2023 — Ene 2025',
          track: ['ing'],
          summary:
            'Segunda etapa en la plataforma de crédito y cobranza: módulos sobre el core compartido.',
          impact: [
            'Desarrollé portafolio por cliente, información crediticia y administración de usuarios.',
            'Construí contra contratos y mocks acordados con backend mientras llegaba la integración real.',
            'Mantuve el core y la plantilla base de microfrontends, y escribí pruebas con Jest y Testing Library.',
          ],
          tags: ['React', 'Module Federation', 'Testing', 'CI/CD'],
        },
        {
          company: 'IDS Comercial',
          role: 'Fullstack Engineer · Servicios financieros',
          period: 'Abr 2023 — Dic 2023',
          track: ['ing'],
          summary:
            'Aplicaciones para proyectos de pensiones y banca con React, Java e integraciones por API.',
          impact: [
            'Coordiné prioridades y decisiones técnicas del frontend.',
            'Participé en análisis de requerimientos, historias de usuario y backlog.',
            'Trabajé en optimización de rendimiento y prácticas de observabilidad.',
          ],
          tags: ['React', 'Java', 'APIs', 'Observabilidad'],
        },
        {
          company: 'Banco Azteca · Sistema Regional',
          role: 'Software Engineer · Crédito y Cobranza Regional (primera etapa)',
          period: 'Oct 2022 — Abr 2023',
          track: ['ing'],
          summary:
            'Primera etapa: mantener el sistema heredado mientras se construía la nueva base de microfrontends.',
          impact: [
            'Di mantenimiento al sistema heredado en JSP, jQuery y AJAX.',
            'Construí el core frontend: layout, login, tema y componentes compartidos con Module Federation.',
            'Documenté los contratos entre aplicaciones y la integración de los módulos en el sistema heredado.',
          ],
          tags: ['JSP → React', 'Module Federation', 'Core frontend', 'Documentación'],
        },
        {
          company: 'MRCI',
          role: 'Product & Software Engineer',
          period: 'Nov 2021 — Oct 2022',
          track: ['prod', 'ing'],
          summary:
            'Octobile, app interna de mensajería construida con un proveedor externo, y proyectos de e-commerce.',
          impact: [
            'Llevé roadmap, backlog, historias de usuario y criterios de aceptación con el proveedor.',
            'Desarrollé componentes en React Native e implementé i18n en la versión web con react-i18next.',
            'Coordiné pruebas y revisión de entregas hasta producción.',
          ],
          tags: ['Roadmap', 'React Native', 'i18n', 'QA'],
        },
        {
          company: 'Lapbytes',
          role: 'Web Developer',
          period: 'Ene 2020 — Nov 2021',
          track: ['ing'],
          summary:
            'Sitios y plataformas de e-commerce para clientes de distintas industrias.',
          impact: [
            'Desarrollé y mantuve cerca de 6 plataformas con HTML, CSS, JavaScript y WordPress.',
            'Trabajé directo con clientes, de requerimientos a entrega.',
          ],
          tags: ['JavaScript', 'CSS', 'WordPress', 'E-commerce'],
        },
      ],
    },
    product: {
      eyebrow: 'Método · AI First',
      title: 'Cómo *trabajo*',
      description:
        'Trabajo con un enfoque AI First: uso agentes de IA en todo el ciclo, del análisis al código y la revisión, y llevo IA al producto cuando aporta valor. Siete pasos, del problema a la operación.',
      relatedLabel: 'Pasos relacionados',
      closeLabel: 'Cerrar',
      categories: {
        problem: 'Paso 1',
        scope: 'Paso 2',
        solution: 'Paso 3',
        plan: 'Paso 4',
        build: 'Paso 5',
        quality: 'Paso 6',
        operate: 'Paso 7',
      },
      craft: {
        title: 'Estándares de ingeniería',
        note: 'Lo que cuido al construir y operar software.',
        groups: ['Construir', 'Asegurar', 'Operar y entregar'],
        items: [
          {
            k: 'Arquitectura',
            v: 'Módulos y microfrontends cuando el equipo y el despliegue lo justifican, con contratos claros entre piezas; una base simple cuando no.',
          },
          {
            k: 'Rendimiento',
            v: 'Code splitting, lazy loading, caching y control de dependencias para que la aplicación cargue rápido también en dispositivos modestos.',
          },
          {
            k: 'Seguridad',
            v: 'Permisos aplicados en el servidor y la base de datos, validación de entradas y análisis de seguridad como parte del flujo de entrega.',
          },
          {
            k: 'Confiabilidad',
            v: 'Reintentos idempotentes y estados de carga, vacío y error bien definidos, para que una falla no deje resultados ambiguos.',
          },
          {
            k: 'Observabilidad',
            v: 'Identificadores de correlación, logs y métricas de errores para diagnosticar problemas con datos, no a ciegas.',
          },
          {
            k: 'Testing',
            v: 'Pruebas unitarias, de integración y end-to-end enfocadas en el comportamiento que importa, integradas al pipeline de CI/CD.',
          },
          {
            k: 'Accesibilidad',
            v: 'Foco visible, navegación por teclado, áreas táctiles adecuadas, buen contraste y respeto a reduced-motion.',
          },
          {
            k: 'DevEx',
            v: 'Plantillas, convenciones y documentación para que un módulo nuevo arranque rápido y cada equipo despliegue sin bloquear a otros.',
          },
          {
            k: 'Delivery',
            v: 'Entregas incrementales: primero el flujo crítico, con alcance y criterios de aceptación claros.',
          },
          {
            k: 'Product Analytics',
            v: 'Métricas ligadas al objetivo del producto, definidas antes de construir y fáciles de interpretar.',
          },
        ],
      },
      items: [
        {
          id: 'problem',
          short: 'Problema',
          title: 'Entender el problema y las reglas de negocio',
          category: 'problem',
          content:
            'En el CRM hotelero, el punto de partida fue la operación comercial: visitas, metas distintas por puesto y convenios con vencimiento. Esas reglas definieron qué debía registrar y calcular el sistema.',
          related: ['scope'],
        },
        {
          id: 'scope',
          short: 'Alcance',
          title: 'Definir alcance y criterios',
          category: 'scope',
          content:
            'Para el CRM escribí el PRD: problema, usuarios, los tres recorridos del MVP y lo que quedaba fuera, como la IA generativa. En Octobile, los flujos y criterios de aceptación definían qué debía incluir cada entrega.',
          related: ['problem', 'solution'],
        },
        {
          id: 'solution',
          short: 'Solución',
          title: 'Analizar el sistema y diseñar la solución',
          category: 'solution',
          content:
            'En Paga Fácil modelé el flujo antes de construirlo, incluido el resultado incierto de un pago interrumpido. En Sistema Regional, la solución tuvo que convivir con el sistema heredado mediante un core compartido.',
          related: ['scope', 'plan'],
        },
        {
          id: 'plan',
          short: 'Plan',
          title: 'Planear la entrega',
          category: 'plan',
          content:
            'En Paga Fácil lideré un equipo de cinco personas: roadmap, backlog, Scrum, asignación de actividades y revisión de avance, sin dejar de desarrollar.',
          related: ['solution', 'build'],
        },
        {
          id: 'build',
          short: 'Construcción',
          title: 'Construir end-to-end',
          category: 'build',
          content:
            'En el CRM y en Tastify trabajé interfaz, base de datos y lógica de servidor: permisos en Postgres, migraciones y cálculo de importes en el servidor. En Paga Fácil desarrollé features nuevas y cambios sobre el monolito.',
          related: ['plan', 'quality'],
        },
        {
          id: 'quality',
          short: 'Calidad',
          title: 'Asegurar calidad, seguridad y confiabilidad',
          category: 'quality',
          content:
            'En el CRM, los permisos por hotel y rol se verifican con pruebas de acceso. En Paga Fácil implementé la clave de idempotencia por intento de pago, y la entrega pasó por pruebas, análisis estático y revisión de seguridad.',
          related: ['build', 'operate'],
        },
        {
          id: 'operate',
          short: 'Operación',
          title: 'Operar y medir',
          category: 'operate',
          content:
            'El CRM está en producción: las solicitudes llegan como tickets dentro del sistema y el cumplimiento se mide contra la meta de cada persona. En Paga Fácil, un identificador por intento permite seguir cada transacción.',
          related: ['quality'],
        },
      ],
    },
    education: {
      eyebrow: 'Educación',
      title: 'Formación y *certificaciones*',
      description:
        'Maestría en IA Aplicada y certificaciones en producto, datos y cloud.',
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
          title: 'Datos y analítica',
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
          ],
        },
      ],
    },
    projects: {
      eyebrow: 'Proyectos',
      viewLabel: 'Ver proyecto',
      noDemoLabel: 'Sistema interno · sin demo pública',
      newTabLabel: 'se abre en una pestaña nueva',
      detail: {
        open: 'Ver recursos',
        keyPoints: 'Puntos clave',
        close: 'Cerrar',
        breadcrumb: 'Proyectos',
        meta: {
          status: 'Estado',
          role: 'Mi rol',
          period: 'Periodo',
          stack: 'Stack',
        },
      },
      carousel: {
        region: 'Proyectos',
        prev: 'Proyecto anterior',
        next: 'Siguiente proyecto',
      },
      gallery: {
        open: 'Ampliar pantalla',
        note: 'Capturas con datos ficticios',
        prev: 'Anterior',
        next: 'Siguiente',
        close: 'Cerrar',
      },
      title: 'Lo que he *construido*',
      description:
        'Plataformas de pagos y crédito, un CRM en producción y productos propios con IA: el problema, mi rol y las decisiones técnicas.',
      items: [
        {
          title: 'CRM comercial hotelero',
          tag: 'Producto · Cliente',
          status: 'En producción',
          role: 'Producto end-to-end',
          period: 'May 2026 — Actualidad',
          description:
            'CRM a medida para un grupo hotelero (Operadora SI) que reemplazó un Excel de cumplimiento de visitas. Producto end-to-end —discovery, diseño, desarrollo y operación—, en producción desde septiembre de 2026.',
          metrics: [
            'Discovery: el problema de fondo era la falta de visibilidad comercial, no las pantallas pedidas; eso reorientó el roadmap.',
            'Build-vs-buy: justifiqué construir a la medida frente a HubSpot / Salesforce para un proceso comercial multi-hotel.',
            'Permisos por fila en Postgres (RLS), verificados por pruebas automáticas en cada cambio: cada hotel ve solo su cartera.',
            'Metas comparables: el ranking ordena por % de la meta propia y el pipeline se mide en oportunidades, no en pesos.',
          ],
          stack: ['React', 'TypeScript', 'TanStack Query', 'Supabase · RLS', 'Vercel'],
          galleryVariant: 'desktop',
          galleryNote: 'Capturas del sistema real con marca, nombres y empresas ficticios para proteger al cliente.',
          gallery: [
            { image: 'crm-cumplimiento', caption: 'Cumplimiento semanal · la hoja de Excel, calculada sola' },
            { image: 'crm-equipo-hoy', caption: 'Equipo hoy · a dónde va cada quien y qué se venció' },
            { image: 'crm-pipeline', caption: 'Pipeline por hotel' },
            { image: 'crm-kanban', caption: 'Tablero por etapa, con el pulso de cada cuenta' },
            { image: 'crm-ficha', caption: 'Ficha de empresa · próximo paso, decisor e historial' },
            { image: 'crm-convenios', caption: 'Convenios · tarifas por hotel y aviso 45 días antes' },
          ],
          detail: {
            intro:
              'Diez hoteles, cada uno con su cartera y su equipo. El objetivo: que dirección tenga visibilidad de la actividad comercial y que cada ejecutivo lleve el seguimiento de sus cuentas.',
            sections: [
              {
                title: 'El problema',
                body: 'La dirección fija metas semanales de visitas efectivas —25 para un ejecutivo, 20 para un gerente— y el Excel registraba el número, pero no la empresa, el contacto ni lo acordado.',
                points: [
                  'Una visita repetida contaba dos veces y una cuenta abandonada no se notaba hasta perderla.',
                  'Capturar una visita tenía que costar menos que anotarla en la hoja: el ejecutivo trabaja de pie, entre citas, desde el teléfono.',
                  'Cada quien debía ver solo su cartera y su equipo; dirección, el avance contra la meta sin pedir reportes.',
                ],
              },
              {
                title: 'Mi rol',
                body: 'Producto end-to-end con el cliente: discovery, diseño, desarrollo, puesta en producción y operación. Trabajo solo, así que cada decisión de producto es también una decisión técnica.',
                points: [
                  'Discovery: el problema de fondo era la falta de visibilidad comercial, no las pantallas que pidieron. Eso reorientó el roadmap.',
                  'Build-vs-buy: justifiqué construir a la medida frente a HubSpot o Salesforce para un proceso multi-hotel con cartera por propiedad.',
                  'Secuencié el MVP para validar el flujo crítico —registrar la visita— antes de invertir en lo secundario.',
                  'Dirección reporta fallos y mejoras con tickets dentro del mismo CRM; yo los atiendo y los libero.',
                ],
              },
              {
                title: 'Lo que resuelve',
                body: 'Tres recorridos, en este orden: registrar una visita, saber qué toca hoy, y ver si el equipo cumple.',
                points: [
                  'Cumplimiento: la tabla que vivía en Excel, calculada desde las visitas registradas. Cuenta la cita realizada y capturada el mismo día, una sola vez.',
                  'Equipo hoy: a dónde va cada quien, qué seguimientos se vencieron y qué cuentas llevan días paradas.',
                  'Pipeline en tres niveles: por hotel, por persona y tablero por etapa, con el pulso de cada cuenta en la tarjeta.',
                  'Ficha de empresa: próximo paso, decisor y último contacto arriba; el historial de visitas con su autor abajo.',
                  'Convenios: tarifas corporativas por hotel, con aviso 45 días antes del vencimiento para negociar la renovación con tiempo.',
                ],
              },
              {
                title: 'Decisiones de producto',
                body: 'Las que cambian cómo se comporta el equipo, no solo cómo se ve la pantalla.',
                points: [
                  'El pipeline se mide en oportunidades, no en pesos: venden convenios de hospedaje, y un monto estimado al inicio engaña más de lo que informa.',
                  'El podio ordena por porcentaje de la meta propia, así un gerente con meta de 20 y un ejecutivo con meta de 25 se miden con la misma vara.',
                  'El ritmo de una cuenta se muestra en color: seis ritmos con nombre sobre nueve semanas de actividad, para ver “a la baja” antes de que se enfríe.',
                  'Lo que un hotel ve de una cuenta que otro trabaja bajo la misma marca está acotado: etapa, responsable y última actividad, sin contactos ni tarifas.',
                ],
              },
              {
                title: 'Ingeniería',
                body: 'Maneja datos comerciales de un cliente y lo mantiene una sola persona, así que la seguridad y la automatización son prioridad.',
                points: [
                  'Permisos por fila en Postgres (RLS): un ejecutivo no puede leer la cartera de otro hotel, ni consultando la base directamente. Pruebas automáticas revisan esas reglas en cada cambio.',
                  'Una acción solo aparece en la interfaz si el servidor la va a aceptar.',
                  'Edición concurrente: si dos personas abren la misma empresa, la segunda recibe un aviso en lugar de pisar el trabajo de la primera.',
                  'Bloqueo tras tres intentos fallidos, cierre de sesión por inactividad, tokens que caducan a los 15 minutos y cabeceras de seguridad verificadas en el build.',
                  'PWA: se usa sobre todo en el teléfono, en la calle, y también en escritorio para supervisión.',
                  'Nada entra a producción sin revisión de tipos, reglas de acceso y build; las migraciones se comprueban objeto por objeto en producción.',
                ],
              },
            ],
          },
          figures: [
            { value: '10', label: 'hoteles' },
          ],
        },
        {
          title: 'Entre Todos · Red de apoyo comunitaria',
          tag: 'Producto propio · MVP',
          status: 'MVP funcional · demo pública',
          role: 'Producto, diseño e ingeniería, end-to-end',
          period: 'Sep 2026',
          description:
            'Cuentas una situación con tus palabras —"voy a hacer una carne asada para 12"— y el sistema descubre qué personas, objetos y conocimiento ya existen cerca para resolverla, con un mundo 3D navegable de tu comunidad. Producto propio de principio a fin: modelo de datos, pipeline de resolución y tres niveles de visualización, sin backend ni IA en runtime.',
          metrics: [
            'Tres comunidades simuladas con estructura social propia: la misma frase produce soluciones distintas en cada una.',
            'Pipeline de seis etapas en reglas puras; las dos primeras devuelven objetos planos, listos para sustituirse por un LLM sin tocar el resto.',
            'Mapa → edificio en Three.js → constelación: tres niveles de la misma comunidad, con el mismo estado, sin recargar.',
          ],
          stack: ['HTML/CSS/JS vanilla', 'Canvas 2D', 'Three.js · bajo demanda', 'Sin backend · localStorage'],
          href: 'https://eddieelorza.github.io/entre-todos',
          linkLabel: 'Ver demo',
          galleryVariant: 'desktop',
          galleryNote: 'Capturas del mundo 3D generadas con Playwright contra el producto real, sin retoques.',
          gallery: [
            { image: 'et-comunidad', caption: 'Mi comunidad: el residencial completo, de día, con sus edificios etiquetados' },
            { image: 'et-edificio', caption: 'Mi edificio en 3D: fachada de cristal, personas en su piso, capacidades del lugar' },
            { image: 'et-necesidad', caption: '"Necesito un vestido…": la necesidad crea gravedad y el círculo de confianza converge' },
            { image: 'et-visual-confirm', caption: 'La foto de la persona emerge junto a su nodo con "¿Te sirve?"' },
            { image: 'et-reveal', caption: 'El momento principal: Community Twin → Constelación, casas → personas → confianza' },
          ],
          detail: {
            intro:
              'Toda comunidad tiene capacidad ociosa —sillas guardadas, alguien que sabe arreglar bicis, alguien que va a Costco cada sábado— pero usarla hoy exige saber exactamente qué pedir, a quién y dónde. Entre Todos elimina esa fricción: cuentas una situación con tus palabras y el sistema arma una solución con lo que tu comunidad ya tiene.',
            sections: [
              {
                title: 'El problema y la interfaz',
                body: 'No es un marketplace de vecinos, ni un feed, ni un chatbot: es una interfaz distinta entre una persona y la capacidad colectiva de su comunidad.',
                points: [
                  'El usuario nunca elige categorías, solo cuenta una situación: "voy a hacer una carne asada para 12 personas el sábado".',
                  'El sistema entiende qué hace falta, descubre qué personas, objetos, conocimiento, tiempo y trayectos ya existen cerca, y arma una solución honesta: "tu comunidad ya tiene 7 de las 8 cosas que necesitas".',
                  'Cada ayuda que sale bien se convierte en una relación de confianza registrada en el grafo, no en un post que se pierde en un feed.',
                ],
              },
              {
                title: 'El pipeline y el Community Resource Graph',
                body: 'Seis etapas en reglas puras, sin IA en runtime: entender → detectar necesidades → buscar capacidades → armar soluciones → ordenar → titular y mensaje.',
                points: [
                  'Las dos primeras etapas devuelven objetos planos: un modelo de lenguaje puede sustituirlas mañana devolviendo la misma forma, sin tocar el resto del pipeline.',
                  'El grafo no modela lo que la gente publica, sino lo que la gente es, tiene, sabe y hace por rutina, con evidencia por capacidad ("ha recibido paquetes 3 veces").',
                  'El grafo aprende: cada situación resuelta suma evidencia, y un trayecto u oferta tuya pasa a ser algo que tu comunidad sabe de ti.',
                ],
              },
              {
                title: 'Community Simulation Layer',
                body: 'Tres comunidades con estructura social propia inyectan o suprimen necesidades según el lugar, sin una sola regla escrita por comunidad.',
                points: [
                  'Residencial Jacarandas (CDMX): familias en torres; la capacidad oculta está en objetos guardados y rutinas de home office.',
                  'Colonia Los Pinos (Guadalajara): adultos mayores con pocos coches; la capacidad oculta es tiempo y experiencia de oficio.',
                  'Residència Internacional de Gràcia (Barcelona): estudiantes de doce países; la capacidad oculta es quien ya pasó por el trámite y los idiomas.',
                  'La misma frase —"voy a hacer una comida para 10"— descubre necesidades y personas distintas en cada una.',
                ],
              },
              {
                title: 'Tres niveles de la misma comunidad',
                body: 'Mapa → Community Twin → Constelación, con un recorrido continuo y la misma identidad visual (tono, iniciales, anillo de confianza) en los tres.',
                points: [
                  'Mapa ilustrado propio en Canvas 2D, sin tiles ni lugares reales, con posiciones aproximadas por diseño.',
                  'Community Twin: el edificio se levanta piso a piso en Three.js cargado bajo demanda; sin conexión, la ficha del edificio da la misma información.',
                  'Place Capabilities: cada edificio declara lo que puede hacer por sí mismo —recepción 24 h, bicicletero, elevador de carga— y el resolver las combina con personas y objetos.',
                  'Constelación: la comunidad en Canvas 2D donde cada persona es un nodo y una necesidad crea gravedad hacia quien puede resolverla.',
                ],
              },
              {
                title: 'Confianza y privacidad por diseño',
                body: 'Las situaciones sensibles priorizan confianza sobre proximidad, y nada se muestra como número.',
                points: [
                  'Trust Graph: relaciones persona a persona, círculos explícitos y emergentes, y contextos —alguien puede ser de confianza para paquetes y no para entrar a casa.',
                  'Nunca el número de departamento, teléfono, dirección ni ubicación exacta; confianza por comportamiento, no estrellas ni rankings.',
                  'Autorización antes de conectar: cada persona recibe su propio mensaje editable, y decides a quién pedir y con qué alcance.',
                ],
              },
              {
                title: 'Estado y qué falta',
                body: 'Es un MVP de demostración: las tres comunidades y sus personas son ficticias, y nadie responde de verdad.',
                points: [
                  'Sin backend ni autenticación: todo el estado vive en localStorage, con reinicio de demo en un botón.',
                  'Frases fuera de los escenarios conocidos caen en un intérprete genérico por palabras clave; el siguiente paso es sustituir esas dos primeras etapas por un LLM real.',
                  'Falta validar con usuarios reales que "contar una situación" resuelve más fricción que un marketplace o un grupo de WhatsApp.',
                ],
              },
            ],
          },
        },
        {
          title: 'Tastify · SaaS para restaurantes',
          tag: 'Producto propio · SaaS',
          status: 'Listo para piloto',
          role: 'Producto propio, end-to-end',
          period: 'Abr 2026 — Actualidad',
          description:
            'Menú por QR con mesero de IA, carrito compartido por mesa y un panel que recibe cada ronda en vivo. Lo diseñé y lo construí: producto, datos, seguridad y operación.',
          metrics: [
            'Tres apps sobre la misma base: comensal, panel del restaurante y landing.',
            'Las reglas viven en Postgres: los precios se calculan en el servidor, no en el navegador.',
            'El mesero de IA sugiere, pero la base de datos decide qué existe y qué está agotado.',
          ],
          stack: ['React 18', 'TypeScript', 'Supabase · RLS', 'Realtime', 'Gemini'],
          galleryVariant: 'desktop',
          galleryNote: 'Grabado en local con datos sintéticos: los comensales y las ventas son de prueba.',
          gallery: [
            { image: 'tastify-pedido', caption: 'El comensal envía su ronda y la tarjeta entra sola al tablero' },
            { image: 'tastify-cuenta', caption: 'Cada ronda suma al consumo de quien la pidió, sin recargar' },
          ],
          detail: {
            intro:
              'En un restaurante se pierde tiempo en momentos concretos: esperar al mesero para otra ronda, dividir la cuenta, entender el menú. Tastify resuelve eso desde la mesa, sin reemplazar el punto de venta del restaurante.',
            diagrams: [
              {
                id: 'tastify',
                labels: {
                  title: 'Arquitectura de Tastify',
                  description: 'Las dos apps del navegador solo llevan la llave pública y hablan con la plataforma por funciones de base de datos. Postgres decide con políticas por fila quién ve qué y cuánto cuesta una ronda; Realtime avisa de los cambios y las apps vuelven a preguntar. La llave del modelo de IA y el acceso privilegiado viven solo en las Edge Functions.',
                  note: 'Diagrama propio del producto.',
                  browser: 'Navegador',
                  diner: 'App del comensal', dinerSub: 'entra por el QR de la mesa',
                  panel: 'Panel del restaurante', panelSub: 'cocina, piso y caja',
                  platform: 'Plataforma gestionada',
                  auth: 'Auth', authSub: 'anónimo para el comensal, correo para el personal',
                  db: 'Postgres', dbSub: 'políticas por fila', dbSub2: 'funciones transaccionales',
                  realtime: 'Realtime', realtimeSub: 'cambios de la base',
                  storage: 'Storage', storageSub: 'fotos y logos',
                  edge: 'Edge Functions', edgeSub: 'recomendación y traducción', edgeSub2: 'las únicas con rol de servicio',
                  model: 'Modelo de IA', modelSub: 'servicio externo',
                  key: 'llave pública',
                  rpc: 'funciones',
                  invalidate: 'invalida y vuelven a preguntar',
                },
              },
              {
                id: 'tastify-ronda',
                labels: {
                  title: 'Ciclo de una ronda',
                  description: 'El comensal escanea el QR y entra a la sesión de la mesa, arma el carrito compartido con su grupo y envía la ronda. El servidor recalcula precios y extras, la numera y la manda al tablero. Cada cambio de estado en cocina vuelve al teléfono sin recargar.',
                  note: 'Diagrama propio del producto.',
                  scan: 'Escanea el QR', scanSub: 'entra a la sesión de la mesa',
                  cart: 'Carrito compartido', cartSub: 'lo ve toda la mesa',
                  submit: 'Envía la ronda', submitSub: 'el servidor recalcula y numera',
                  board: 'Tablero de cocina', boardSub: 'la tarjeta entra sola',
                  received: 'Recibida', preparing: 'Preparando', ready: 'Lista', delivered: 'Entregada',
                  stateLabel: 'cocina mueve el estado',
                  backToPhone: 'el teléfono lo ve cambiar',
                },
              },
            ],
            sections: [
              {
                title: 'Qué resuelve',
                body: 'Cuatro personas con trabajos distintos usan el mismo sistema: comensal, cocina, mesero y dueño.',
                points: [
                  'El comensal escanea el QR, pide con su grupo en un carrito compartido y ve cuánto va a pagar, sin crear cuenta.',
                  'La cocina recibe rondas con folio, extras y notas, y las mueve de estado con un toque: recibida, preparando, lista, entregada.',
                  'El mesero ve el piso, registra el cobro por persona y libera mesas; el dueño ve cuánto vendió y qué ventas vinieron de la IA.',
                  'El mesero de IA responde con platillos del menú disponible y sugiere acompañamientos que sí existen.',
                ],
              },
              {
                title: 'Arquitectura: frontends delgados, reglas en la base',
                body: 'Los frontends solo llevan la llave pública. Quién ve qué, cuánto cuesta una ronda y si un platillo existe lo decide Postgres, con políticas por fila y funciones transaccionales.',
                points: [
                  'Las órdenes solo nacen dentro de submit_order, que recalcula precio, extras y disponibilidad en una transacción: editar la petición en el navegador no te hace pagar menos.',
                  'El QR es un token opaco. Cambiar un número en la URL no te sienta en otra mesa.',
                  'El comensal entra con autenticación anónima y aun así tiene un identificador en la base para que las políticas por fila validen su mesa.',
                  'Realtime invalida queries en lugar de replicar estado, con sondeo de respaldo cada 4 segundos si la conexión se cae.',
                  'La llave de IA y el acceso privilegiado viven solo en Edge Functions; si Gemini falla, responde una búsqueda local.',
                ],
              },
              {
                title: 'Cuenta dividida',
                body: 'Cada platillo guarda quién lo pidió, y lo compartido se reparte por pesos.',
                points: [
                  'La función que calcula el saldo por persona usa la misma fórmula que la del cobro, así la suma cuadra con el total.',
                  'Lo que no se puede atribuir aparece como “Sin asignar” y queda visible para revisarlo.',
                ],
              },
              {
                title: 'Verificación',
                body: 'Es un producto que toca dinero y lo mantengo yo solo, así que las guardas están del lado del sistema.',
                points: [
                  'Un script revisa la base de datos después de cada despliegue: permisos por rol, guardias de las funciones, firmas y columnas que usa el frontend.',
                  'El entorno local se reconstruye desde cero con las migraciones, que es la única prueba de que reproducen el esquema de producción.',
                  'Un envoltorio del CLI aborta si el proyecto enlazado no es el correcto y bloquea las banderas destructivas.',
                  'Grabando la demo apareció un descuadre: el panel mostraba $490 y el consumo por persona $355. El aviso de descuadre lo detectó; la corrección fue recalcular el saldo en cada ronda nueva y en cada reconexión.',
                ],
              },
              {
                title: 'Decisiones de negocio',
                body: 'Una capa de venta en la mesa, no otro punto de venta: así el piloto no exige integrarse con la caja ni con el inventario.',
                points: [
                  'Cada platillo registra si se pidió solo, por recomendación de la IA o por sugerencia de acompañamiento, para medir cuánto mueve cada canal.',
                  'Cliente objetivo: restaurantes independientes casual-premium, de una a tres sucursales, con ticket de 400 a 800 pesos.',
                  'Los precios de los planes son propuestas para validar en pilotos, todavía no son precios publicados.',
                ],
              },
              {
                title: 'Qué falta',
                body: 'Lo que está funcionando ya cubre menú, rondas, cocina, reservas, cuenta dividida, menú bilingüe y reportes.',
                points: [
                  'Pago en mesa por persona con Stripe Connect: diseñado y en pausa.',
                  'Pruebas automatizadas e integración continua.',
                  'Alta de restaurantes sin intervención y facturación.',
                ],
              },
            ],
          },
        },
        {
          title: 'English OS · Sistema de estudio local-first',
          tag: 'Producto propio · IA local',
          status: 'En uso diario',
          role: 'Producto, diseño e ingeniería, end-to-end',
          period: 'May 2026 — Sep 2026',
          description:
            'Sistema de estudio de inglés que registra lo que produzco, detecta mis errores frecuentes y genera lecturas, prácticas y podcasts a partir de ellos. Corre en mi Mac con IA local.',
          metrics: [
            'Diseñado para mejorar el nivel, no para sostener rachas ni engagement.',
            'SQLite como fuente de verdad y un worker que procesa una inferencia a la vez para no saturar la máquina.',
            'Tres arquitecturas en tres meses, cada corte con verificación previa y marcha atrás.',
          ],
          stack: ['React', 'TypeScript', 'FastAPI', 'SQLite · FSRS', 'Ollama'],
          galleryVariant: 'desktop',
          galleryNote: 'Capturas de la app real, grabadas sobre una copia de la base de datos.',
          gallery: [
            { image: 'eos-review', caption: 'La lección del día abre una sentada de repaso con FSRS' },
            { image: 'eos-reader', caption: 'Lector interactivo: cada palabra lleva su estado y su entrada' },
            { image: 'eos-stats', caption: 'El nivel, con la evidencia de dónde sale cada número' },
          ],
          detail: {
            intro:
              'Anki guardaba tarjetas, Notion guardaba notas y las correcciones de un tutor quedaban en texto suelto. Ninguna herramienta conectaba con las otras, y faltaba un modelo del aprendizaje: qué palabras no se fijan, qué errores se repiten y en qué nivel leo.',
            sections: [
              {
                title: 'El problema',
                body: 'Soy hispanohablante, estudio entre 60 y 75 minutos por la mañana, y ninguna herramienta construía sobre lo que yo producía.',
                points: [
                  'La métrica que importa es el nivel: menos errores por cada 100 palabras y pruebas externas. No hay rachas.',
                  'Dos restricciones dieron forma al producto: dejo las actividades que piden escribir mucho, así que la práctica diaria prioriza opción múltiple.',
                  'Y la IA local tarda de 15 a 80 segundos, así que la espera se diseñó como un estado de primera clase, no como un spinner.',
                ],
              },
              {
                title: 'Arquitectura',
                body: 'Un archivo SQLite, un worker, una inferencia a la vez. La app responde al instante leyendo de la base; lo lento pasa por una cola persistente.',
                points: [
                  'React con una API tipada contra FastAPI, y polling que se reengancha a los trabajos que siguen vivos si recargas.',
                  'SQLite en WAL con 18 tablas: palabras, historial de repasos, errores, textos, actividades, sesiones y la cola de trabajos.',
                  'Un worker único toma trabajos con un UPDATE atómico y llama al proveedor de IA: Ollama por defecto, con una interfaz que permite cambiarlo.',
                  'Voz local para transcribir y sintetizar, así el shadowing y los podcasts tampoco salen de la máquina.',
                ],
              },
              {
                title: 'El ciclo diario',
                body: 'Cinco pasos, y ninguno depende de que la IA responda a tiempo.',
                points: [
                  'Abro el día y veo mi nivel de trabajo con su razón: retención, comprensión y la evidencia que lo sostiene.',
                  'Hago la sentada de repaso con un presupuesto en minutos y el ritmo calibrado por la mediana entre respuestas.',
                  'Al cerrarla se encolan los trabajos del día, así la sesión no depende de que el modelo responda.',
                  'El worker genera lectura, actividades y tema de escritura con mis palabras atascadas y mis errores frecuentes.',
                  'Todo lo que produzco se corrige y alimenta la misma tabla de errores, que es la que cierra el círculo.',
                ],
              },
              {
                title: 'Decisiones y lo que costaron',
                body: 'Cada decisión grande quedó escrita antes del cambio, con su costo aceptado.',
                points: [
                  'SQLite como fuente de verdad: un archivo, sin servidor, fácil de respaldar. Costo: sin sincronización entre dispositivos.',
                  'IA local por defecto: privado y sin costo por token. Costo: respuestas de 15 a 80 segundos.',
                  'FSRS sin aleatoriedad: el intervalo que muestra cada botón es exactamente el que se agenda.',
                  'Congelar Anki: un solo sistema agenda, porque dos fuentes generaban conflictos difíciles de rastrear. Costo: sin estudio en el celular.',
                  'Nivel con evidencia múltiple: cada fuente declara si tiene datos suficientes, y con pocos datos dice “no hay datos” en vez de inventar un número.',
                ],
              },
              {
                title: 'Problemas que no se veían en la interfaz',
                body: 'Lo que más aprendí no estaba en la pantalla.',
                points: [
                  'El worker se detenía sin avisar: el bloqueo de archivo no serializa hilos, y abrirlo en modo escritura truncaba un archivo que el propio proceso tenía bloqueado. Lo corregí en dos capas y el loop ahora sobrevive a excepciones.',
                  'Los conteos engañaban: la app parecía tener más contenido, pero 77 de 77 escrituras y 79 de 86 lecturas estaban vacías. Aprendí a comparar contenido, no filas.',
                  'Cortar el sistema viejo sin perder historia: se cruzaron las tarjetas en vivo contra el sistema anterior, con cero divergencia, respaldo obligatorio y un comando de marcha atrás.',
                ],
              },
              {
                title: 'Diseño',
                body: 'Un cuaderno de autoestudio, no un tablero de SaaS. La referencia es un curso europeo de autoestudio de mediados de siglo.',
                points: [
                  'La pantalla es la página abierta del cuaderno y la navegación es el lomo de la portada.',
                  'Reglas finas en lugar de tarjetas y sombras; cifras exactas en lugar de anillos de progreso.',
                  'Dos voces tipográficas: una serif para el contenido del idioma y una sans para la interfaz.',
                  'Una sola ley de movimiento, un deslizamiento sobre el eje de la columna.',
                ],
              },
            ],
          },
        },
        {
          title: 'Spine · Razonamiento de producto trazable',
          tag: 'Producto propio · Open source',
          status: 'v0.1 funcional · licencia MIT',
          role: 'Product Engineer: producto, arquitectura, implementación, evals y landing',
          description:
            'Herramienta open source (CLI + agentes para Claude Code) que guarda el razonamiento de producto como un grafo versionado en git, al lado del código. Cada tarea explica a qué objetivo sirve y en qué parte de esa cadena todavía hay una suposición sin validar.',
          metrics: [
            'No genera PRDs: mantiene un grafo que se consulta y se valida en CI.',
            'Los permisos de los agentes se aplican en código, no se piden en el prompt.',
            '77 tests, 15 reglas de validación y 7 evals adversariales que cambiaron el producto.',
          ],
          stack: ['TypeScript', 'Node ≥20', 'YAML/Markdown en git', 'React + Vite', 'GitHub Actions'],
          galleryVariant: 'desktop',
          galleryNote: 'Capturas del CLI y del landing reales; diagramas propios.',
          gallery: [
            { image: 'spine-landing', caption: 'Landing bilingüe: la salida real de product why, sin editar' },
            { image: 'spine-why', caption: 'product why: la cadena hasta el objetivo y dónde se apoya en una suposición' },
            { image: 'spine-guardrails', caption: 'Guard-rails: un agente no puede crear fuera de su contrato ni aceptar nada' },
            { image: 'spine-check', caption: 'product check: cada hallazgo con regla, archivo, línea y fix sugerido' },
            { image: 'spine-arquitectura', caption: 'Arquitectura en tres capas: inteligencia, determinismo y verdad' },
            { image: 'spine-agentes', caption: 'Cuatro agentes que se comunican solo a través del workspace' },
          ],
          detail: {
            intro:
              'Los agentes de código ya escriben software con mucha precisión, pero no saben por qué debe existir. El razonamiento de producto se queda en documentos que nadie consulta y se pierde en cuanto el trabajo llega al repositorio: construyen lo incorrecto, muy rápido.',
            sections: [
              {
                title: 'El problema',
                body: 'Si un documento de producto es “bueno” es subjetivo, pero la trazabilidad se puede verificar con un programa. Eso permite convertirla en una regla de CI.',
                points: [
                  'Usuario de la v0.1: el solo product engineer, que decide qué construir y además lo construye desde la terminal con un agente.',
                  'Dolor: “decidí esto hace tres semanas y no puedo reconstruir por qué”, “mi agente construyó exactamente lo que pedí, y era lo incorrecto”.',
                  'Estas necesidades están marcadas como hipótesis sin evidencia: validarlas con 5 a 10 usuarios es el siguiente paso.',
                ],
              },
              {
                title: 'Arquitectura',
                body: 'Tres capas: la inteligencia es portátil, el determinismo vive en código y la verdad vive en git.',
                points: [
                  'El CLI nunca llama a un modelo: sin API keys, costo de inferencia ni lock-in. Un test de arquitectura prohíbe imports de red y de SDKs de LLM.',
                  'Los agentes nunca se llaman entre sí: se coordinan a través del workspace, como un pizarrón, sin orquestador.',
                  'Core de módulos puros (parse → schema → graph → rules → query → render) y un único módulo que escribe nodos.',
                  'Un archivo Markdown con frontmatter YAML por nodo. Sin base de datos, servidor ni caché.',
                ],
              },
              {
                title: 'Modelo de datos',
                body: 'Un grafo de 11 tipos de nodo, del objetivo a la tarea, con honestidad epistémica como tipo de dato.',
                points: [
                  'Cada nodo es fact, hypothesis, assumption, decision u open_question; declarar fact sin evidencia es un error (E007).',
                  'Aristas tipadas según una matriz; las aristas se guardan solo hacia arriba, así crear un hijo nunca modifica al padre ni provoca conflictos de merge.',
                  'IDs permanentes KIND-NNN que nunca se reutilizan; los nodos no se borran, pasan a dropped o superseded.',
                  '15 reglas con fix sugerido y un exit code propio (4) para “rechazado por un guard-rail”, distinto de “el grafo tiene errores”.',
                ],
              },
              {
                title: 'Agentes con límites',
                body: 'Cuatro agentes (discovery, manager, analyst y critic), cada uno con un contrato de lo que puede crear.',
                points: [
                  'Un agente no puede crear tipos fuera de su contrato, nodos huérfanos ni facts sin evidencia.',
                  'Tampoco puede modificar lo que un humano aceptó ni aceptar nada: solo un humano decide qué es real.',
                  'Honestidad sobre los límites: 17 prohibiciones las aplica el CLI y 16 dependen del prompt, y la herramienta dice cuáles son cuáles.',
                ],
              },
              {
                title: 'Calidad y evals adversariales',
                body: '77 tests de arquitectura, contrato y rendimiento, más 7 escenarios que intentan que los agentes hagan trampa.',
                points: [
                  'Investigación fabricada, instrucciones escondidas, presión de sobreproducción, KPIs no medibles: todos PASS.',
                  'Dos escenarios encontraron huecos reales, que se convirtieron en una regla de contrato nueva y en una corrección del auto-reporte.',
                  'Lección de método: puntuar cada corrida contra los archivos en disco, nunca contra lo que el agente dice que hizo.',
                ],
              },
              {
                title: 'Métricas y decisiones',
                body: 'North star: ratio de mantenimiento, nodos editados en la semana 2+ entre nodos al final de la semana 1, con meta > 0.3.',
                points: [
                  'Generar es fácil; mantener es la hipótesis. Si el ratio queda cerca de cero, el plan es reducir la herramienta, no agregar features.',
                  'Anti-métricas: estrellas, descargas y artefactos generados. Cero telemetría.',
                  'TypeScript/Node en lugar de Go o Rust: menos fricción para probarlo con npx, a cambio de ~50–90 ms de arranque.',
                ],
              },
            ],
          },
        },
        {
          title: 'Paga Fácil',
          tag: 'Producto fintech',
          role: 'Product Engineer · Plataforma de Pagos',
          period: 'Ene 2025 — Mar 2026',
          description:
            'PWA de Banco Azteca con la que clientes de crédito pagan en línea, sin ir a sucursal. Lideré la iniciativa y a un equipo fullstack de 5 personas —del discovery a producción— y migré la pasarela de Vue 2 a React como microfrontend federado con configuración de PWA.',
          metrics: [
            'Un microfrontend federado, con React y el router compartidos como singleton.',
            'Cuatro flujos de cobro: adquirente, billetera, gemas y pago inicial.',
            'Flujo end-to-end: acceso → monto → tarjeta → dirección → 3-D Secure → comprobante.',
          ],
          stack: ['React', 'TypeScript', 'Module Federation', 'PWA'],
          status: 'En producción',
          galleryNote: 'Recreación propia del flujo con billetera: sin marca y con datos ficticios.',
          gallery: [
            { image: 'pf-monto', caption: 'Elige cuánto pagar' },
            { image: 'pf-metodo', caption: 'Elige cómo pagar' },
            { image: 'pf-tarjeta', caption: 'Agregar tarjeta' },
            { image: 'pf-resumen', caption: 'Revisa y confirma' },
            { image: 'pf-comprobante', caption: 'Comprobante' },
          ],
          detail: {
            diagram: {
              id: 'paga-facil',
              labels: {
                title: 'Flujos de Paga Fácil',
                description: 'El usuario llega por un link de pago enviado por WhatsApp, por la URL directa de Paga Fácil o embebido desde plataformas digitales. La PWA es un solo microfrontend federado: detecta con qué parámetros llega y entra a uno de cuatro flujos — adquirente, billetera con tarjetas tokenizadas, canje de gemas o pago inicial. En todos se aplica el abono al crédito y se registra la transacción en bitácora.',
                note: 'Diagrama propio con nombres genéricos; no reproduce material interno.',
                link: 'Link de pago', linkSub: 'enviado por WhatsApp',
                url: 'URL directa', urlSub: 'el cliente entra por su cuenta',
                platforms: 'Plataformas digitales', platformsSub: 'embebida, con parámetros',
                pwa: 'PWA · Paga Fácil', pwaSub: 'un microfrontend', pwaSub2: 'Module Federation',
                router: 'Detecta el flujo', routerSub: 'según los parámetros',
                acquirer: 'Adquirente', acquirerSub: 'flujo normal: tarjeta + 3-D Secure',
                wallet: 'Billetera', walletSub: 'tarjetas tokenizadas del usuario',
                gems: 'Gemas', gemsSub: 'canje aplicado como descuento',
                initial: 'Pago inicial', initialSub: 'enganche al abrir el crédito',
                apply: 'Se aplica el abono al crédito', applySub: 'el saldo del cliente se actualiza', applySub2: 'cada transacción queda en bitácora',
                receipt: 'comprobante',
              },
            },
            sections: [
              {
                title: 'Mi rol',
                body: 'Combinó liderazgo, producto e ingeniería: lideré la iniciativa y a un equipo fullstack de 5 personas, gestioné el proyecto de punta a punta y desarrollé features yo mismo.',
                points: [
                  'Gestión del equipo: roadmap, backlog y Scrum; asignación de actividades, revisión de avance y code reviews.',
                  'Desarrollo directo: features nuevas en la PWA y cambios sobre el monolito.',
                  'Discovery con negocio y operación para entender qué frenaba el cobro digital antes de comprometer pantallas.',
                  'Backlog y roadmap de la iniciativa, priorizados por impacto en el cobro y valor para el usuario, no por orden de llegada.',
                  'Qué migrar, qué mantener y qué cambios no justificaban su costo: los trade-offs entre producto, complejidad técnica y tiempos.',
                  'Identifiqué riesgos operativos desde el inicio: en una pasarela de pago, un error afecta directamente el dinero del cliente.',
                  'Aunque mi foco era frontend, participé en contratos de API, validación en base de datos y despliegues para liderar la entrega con contexto completo.',
                  'El ciclo completo: problema → discovery → priorización → decisión técnica → implementación → entrega → producción → seguimiento.',
                ],
              },
              {
                title: 'Cómo está construida',
                body: 'La pasarela venía en Vue 2 y la migré a React como un solo microfrontend federado con Webpack Module Federation, con React y el router compartidos como singleton y configuración de PWA. No orquesta remotos: es la pieza que otras plataformas cargan.',
                points: [
                  'Se abre por link de pago de WhatsApp, por su URL directa o embebida por plataformas digitales.',
                  'Con los parámetros de entrada resuelve a cuál de los cuatro flujos de cobro entra.',
                  'React con Module Federation, por la madurez del ecosistema y por alinearla con el resto de la plataforma.',
                  'Rendimiento de la PWA: code splitting, lazy loading y caching para que la pasarela abra rápido incluso en un teléfono modesto con datos móviles.',
                  'La migración también cambió dónde vive: de infraestructura on-premise a AWS.',
                  'En el análisis propuse separarla en cuatro dominios —identidad, flujo, transacción y comprobante— para desplegarlos por separado; eso quedó como propuesta, no como lo entregado.',
                ],
              },
              {
                title: 'Flujo de pago end-to-end',
                body: 'Lo modelé en diagramas BPM, de flujo y de secuencia antes de construirlo.',
                points: [
                  'El usuario entra con sus credenciales y llega a elegir cuánto pagar.',
                  'Cuatro opciones de monto: pago requerido, sugerido, para liquidar u otra cantidad capturada a mano.',
                  'Datos de contacto —correo y teléfono— y alta de la tarjeta: número, titular, vigencia y CVV.',
                  'Dirección completa —calle, ciudad, estado y código postal— antes de procesar el cobro.',
                  'Si la tarjeta lo exige, 3-D Secure con código de verificación; si no, el cobro se procesa directo.',
                  'Recibo con el monto pagado y opción de descargarlo.',
                ],
              },
              {
                title: 'Flujos de cobro',
                body: 'La pasarela no tenía un solo camino: según cómo llegara el usuario y qué datos trajera, resolvía un flujo distinto.',
                points: [
                  'Adquirente: el flujo normal, con captura de tarjeta y validación 3-D Secure.',
                  'Billetera: el usuario paga con sus tarjetas ya tokenizadas y solo confirma la orden.',
                  'Gemas: el canje de gamificación se valida y se aplica como descuento antes de cobrar.',
                  'Pago inicial: el enganche que se cubre al abrir el crédito.',
                  'Cada transacción queda registrada en bitácora.',
                ],
              },
              {
                title: 'Calidad y seguridad',
                body: 'La migración se planeó con fases propias de certificación, seguridad y calidad, no como un paso final.',
                points: [
                  'Implementé la clave de idempotencia por intento de pago: si el usuario reintenta, toca dos veces o la red duplica la petición, esa misma clave se resuelve como un solo abono.',
                  'Si la red se cae a media transacción, la app consulta el estado del intento y reintenta con esa misma clave, en vez de dejar al usuario frente a un error ambiguo.',
                  'Ese identificador de intento viaja del front al servicio de pagos, así un cobro concreto se puede seguir de punta a punta.',
                  'Pruebas unitarias, de integración y end-to-end.',
                  'Análisis estático con SonarQube y de seguridad con Checkmarx.',
                  'CI/CD para desplegar la pasarela sin depender del calendario del sistema que la aloja.',
                ],
              },              {
                title: 'Qué haría distinto hoy',
                body: 'Revisaría una decisión de arquitectura.',
                points: [
                  'Module Federation se eligió en parte por su adopción en ese momento. Hoy compararía alternativas antes de comprometerme: una PWA moderna no necesariamente necesita federación, y la elección debe responder al problema.',
                  'Dedicaría más tiempo a entender a fondo la arquitectura —la del sistema que la aloja y la del propio producto— antes de elegir con qué construirla.',
                ],
              },
            ],
          },
        },
        {
          title: 'Sistema Regional',
          tag: 'Plataforma interna · Microfrontends',
          role: 'Software Engineer · Crédito y Cobranza Regional',
          period: 'Oct 2022 — Ene 2025, en dos etapas',
          description:
            'Plataforma interna de crédito y cobranza que convivía con un sistema heredado. Desarrollé el core frontend —la base común que los microfrontends consumen en tiempo de ejecución con Module Federation— y tres de sus módulos: administración de usuarios, información crediticia del cliente y portafolio por cliente.',
          metrics: [
            'Core compartido: layout, login, tema y componentes que consumen los módulos.',
            'Tres módulos desarrollados por mí: usuarios, información crediticia y portafolio.',
            'Cartera navegable en tres niveles: gestor → cliente → pedido.',
            'Plantilla base de nuevos microfrontends actualizada a React 19.',
          ],
          stack: ['React', 'Module Federation', 'Jest', 'Jenkins'],
          internal: true,
          galleryVariant: 'desktop',
          galleryNote: 'Recreación propia de las pantallas: sin marca y con datos ficticios.',
          gallery: [
            { image: 'portafolio', caption: 'Portafolio · nivel gestor' },
            { image: 'portafolio-clientes', caption: 'Portafolio · cartera del gestor' },
            { image: 'portafolio-pedidos', caption: 'Portafolio · pedidos del cliente' },
            { image: 'usuarios', caption: 'Administración de usuarios' },
            { image: 'usuarios-cambio', caption: 'Cambio de empleado' },
            { image: 'usuarios-resultado', caption: 'Resultado de la operación' },
            { image: 'informacion-crediticia', caption: 'Información crediticia del cliente' },
          ],
          detail: {
            intro:
              'Traducir flujos operativos a interfaces, construir una base reutilizable para varias aplicaciones y permitir que las experiencias nuevas convivieran con el sistema heredado sin exigir una migración completa.',
            diagram: {
              id: 'sistema-regional',
              labels: {
                title: 'Arquitectura del Sistema Regional',
                description: 'El core es la base compartida: publica layout, login, tema, estilos y una biblioteca de componentes, y cada microfrontend la consume en tiempo de ejecución con Module Federation. Tres de esos módulos —portafolio por cliente, información crediticia del cliente y administración de usuarios— son desarrollo propio; el de solicitudes pertenece al sistema. Los módulos consumen APIs por dominio, se sirven por ruta mediante Ingress y se muestran embebidos en un iframe dentro del sistema heredado.',
                note: 'Diagrama propio con nombres genéricos; no reproduce material interno.',
                shell: 'Core · base compartida', shellSub: 'layout, login, tema y componentes', shellSub2: 'Module Federation',
                provides: 'provee',
                legacy: 'Sistema heredado', legacySub: 'muestra los módulos',
                iframe: 'iframe',
                remotes: 'Microfrontends', remotesSub: 'remotos independientes',
                portfolio: 'Portafolio por cliente', credit: 'Información crediticia', users: 'Administración de usuarios', applications: 'Solicitudes',
                mine: 'desarrollo propio', context: 'contexto del sistema',
                apis: 'APIs por dominio', apisSub: 'crédito y cobranza',
                ingress: 'Ingress', ingressSub: 'una ruta por módulo', ingressSub2: 'infraestructura, fuera de mi alcance',
                routes: 'enruta',
              },
            },
            sections: [
              {
                title: 'Contexto',
                body: 'La plataforma se construía progresivamente por módulos mientras el sistema anterior seguía en operación.',
                points: [
                  'La usaban gestores de cobranza, supervisión y las áreas responsables de la administración de personal.',
                  'Los módulos nuevos tenían que integrarse con la operación existente sin reemplazar todo el sistema de una sola vez.',
                  'Cada módulo era un dominio distinto y podía evolucionar por su cuenta.',
                ],
              },
              {
                title: 'Mi contribución',
                body: 'Desarrollé el core frontend y tres microfrontends. El módulo de solicitudes era parte de la plataforma, pero no de mi trabajo; tampoco participé en backend ni en infraestructura.',
                points: [
                  'Core: la base común que consumen los microfrontends —layout, login, tema, estilos y biblioteca de componentes— publicada con Module Federation.',
                  'Administración de usuarios: altas, bajas y cambios de personal, con validación de puestos y vacantes disponibles.',
                  'Información crediticia del cliente: datos básicos, estado de la línea, capacidad de pago e historiales de pedidos y solicitudes.',
                  'Portafolio por cliente: recorrer la cartera en tres niveles de contexto, gestor → cliente → pedido.',
                  'Actualicé a React 19 la plantilla base con la que se arrancan los microfrontends nuevos.',
                ],
              },
              {
                title: 'De los flujos de negocio a la interfaz',
                body: 'Buena parte del trabajo fue convertir procesos operativos en interacciones capaces de mover mucha información sin perder el contexto.',
                points: [
                  'La cartera se recorre del gestor a sus clientes y de ahí a los pedidos de cada cliente.',
                  'Los totales de saldo, atraso, moratorios y pago requerido acompañan al nivel que se está consultando.',
                  'Las altas, bajas y cambios de personal validan antes las posiciones disponibles.',
                  'La consulta crediticia concentra cliente, domicilio, crédito, capacidad de pago e historiales en una sola vista.',
                  'Las funcionalidades visibles se ajustan a los permisos del puesto de quien entra.',
                ],
              },
              {
                title: 'Arquitectura',
                body: 'El core no orquesta ni monta aplicaciones: es un remoto que publica la base visual y los componentes comunes, y cada microfrontend los consume en tiempo de ejecución con Webpack Module Federation.',
                points: [
                  'Actualizar un elemento compartido no obliga a copiar código entre repositorios ni a recompilar cada aplicación consumidora.',
                  'React se comparte como singleton para evitar runtimes duplicados y errores de hooks.',
                  'El estado vive aislado dentro de cada microfrontend.',
                  'En administración de usuarios usé Context para lo transversal —catálogos y filtros que comparten varias pantallas—; el estado de cada vista se queda local.',
                  'Los módulos se muestran embebidos en iframe dentro del sistema heredado, que aporta el contexto para iniciar la consulta; en portafolio, la respuesta hacia el contenedor va por postMessage.',
                  'La ruta de infraestructura hacia cada aplicación la resolvía Ingress, una por microfrontend. Esa capa ya existía y no estuvo bajo mi responsabilidad.',
                ],
              },
              {
                title: 'Frontend engineering',
                body: 'Sostener aplicaciones que están en operación pide más que construir la pantalla.',
                points: [
                  'Rendimiento: code splitting, lazy loading de lo que no hace falta de inmediato, caching para evitar descargas repetidas, optimización de renders y control de las dependencias compartidas entre microfrontends.',
                  'Resiliencia: cada pantalla contempla sus estados —carga, éxito, vacío y error—, para que el usuario sepa qué pasa cuando algo tarda, no hay datos o falla.',
                  'Resiliencia: también evitar solicitudes duplicadas y resultados inconsistentes cuando alguien cambia de filtro o navega rápido.',
                  'Seguridad: la interfaz respeta las restricciones del puesto y decide qué se muestra o se puede ejecutar; la autorización efectiva de cada operación es responsabilidad de los servicios.',
                  'Observabilidad: los módulos van conectados a las herramientas de la plataforma, así un problema visible en la interfaz se puede relacionar con las llamadas a servicios y el diagnóstico deja de ser a ciegas.',
                ],
              },
              {
                title: 'Calidad y entrega',
                body: 'El pipeline de CI/CD ya existía en la plataforma; mi responsabilidad fue integrar mis módulos y cumplir sus controles. No diseñé el pipeline ni la infraestructura de despliegue.',
                points: [
                  'Pruebas con Jest y React Testing Library.',
                  'Cada cambio pasaba por pruebas, análisis estático, escaneo de seguridad, build, imagen y despliegue.',
                ],
              },
              {
                title: 'Cómo lo llevaría a la siguiente etapa',
                body: 'El siguiente paso no es cambiar tecnologías por versiones más nuevas: es bajar el acoplamiento, hacer explícitos los contratos entre aplicaciones y convertir el frontend en una plataforma más fácil de evolucionar y de operar.',
                points: [
                  'Contratos entre aplicaciones: formalizar la comunicación entre el sistema heredado y los microfrontends con contratos tipados, versionados y validados en runtime, sin depender de conocimiento implícito.',
                  'Independencia entre módulos: revisar qué dependencias vale la pena compartir en runtime y cuáles conviene aislar, considerando tamaño de bundle, frecuencia de actualización, compatibilidad y despliegue independiente.',
                  'Observabilidad como parte de la arquitectura: una estrategia común de errores, rendimiento, navegación y llamadas a servicios, con identificadores de correlación donde haya soporte end-to-end, para reconstruir una operación completa en lugar de investigar cada aplicación por separado.',
                  'Rendimiento medible: pasar de optimizaciones sueltas a performance budgets compartidos —bundle, tiempo de carga, renders costosos— como criterio del pipeline, para detectar regresiones antes de producción.',
                  'Resiliencia consistente: estandarizar carga, vacíos, errores, timeouts, reintentos y pérdida de conexión en el core o en librerías comunes, en vez de que cada equipo resuelva lo mismo a su manera.',
                  'Evolución progresiva del legado: mantener la migración incremental, pero con límites claros que vayan reduciendo la dependencia del iframe y de postMessage. La meta no es una reescritura completa, sino poder reemplazar un dominio cuando haya valor suficiente.',
                  'Developer experience: convertir la plantilla que actualicé a React 19 en un golden path —estructura, testing, observabilidad, seguridad, rendimiento y convenciones listas— para que arrancar una aplicación no dependa de que cada quien conozca todas las decisiones de la plataforma.',
                ],
              },
            ],
          },
        },
        {
          title: 'Octobile · App interna de mensajería',
          tag: 'Producto · Vendor externo',
          status: 'Entregado a producción',
          role: 'Coordinación de producto y desarrollo',
          period: 'Nov 2021 — Oct 2022',
          description:
            'App de mensajería interna con versión web y móvil. Un proveedor externo desarrolló la mayor parte del producto; yo llevé el roadmap, coordiné a ese equipo y participé en el desarrollo.',
          metrics: [
            'Coordiné al equipo externo de desarrollo desde concepto hasta producción.',
            'Monté la internacionalización de la versión web y escribí los copys en español e inglés.',
            'Dejé por escrito los manuales y las listas de verificación con las que se probaba cada entrega.',
          ],
          stack: ['React', 'React Native', 'i18n', 'QA'],
          galleryNote: 'Pantallas del manual y de las pruebas, con datos de ejemplo; la exploración del botón es una recreación propia, sin marca.',
          gallery: [
            { image: 'octo-onboarding', caption: 'Carrusel de bienvenida, cuatro pantallas' },
            { image: 'octo-perfil', caption: 'Alta de perfil: vacío, lleno y bienvenida' },
            { image: 'octo-boton', caption: 'Recreación de la exploración: el botón flotante en tres posiciones' },
            { image: 'octo-opciones', caption: 'Recreación: el botón cerrado y abierto, con sus cinco acciones' },
            { image: 'octo-registro', caption: 'Registro con validación del teléfono' },
            { image: 'octo-password', caption: 'Sugerencias de contraseña' },
            { image: 'octo-chat', caption: 'Recreación: conversación con envío de foto y horas de entrega' },
          ],
          detail: {
            diagram: {
              id: 'octobile',
              labels: {
                title: 'Octobile de un vistazo',
                description: 'Una app de mensajería interna para iOS, Android y web. El alta pide cuenta, teléfono, código y perfil, y no deja pasar sin tres validaciones. Dentro, la aplicación se divide en estados, chats y salas, y desde cualquier chat se abren cinco acciones: llamada, videollamada, cámara, archivos y encuesta.',
                note: 'Diagrama propio con nombres genéricos.',
                signupTitle: 'Alta de cuenta',
                signupSub: 'no avanza sin nombre libre, términos aceptados y código recibido',
                account: 'Nombre de cuenta',
                phone: 'Teléfono',
                code: 'Código por SMS',
                profile: 'Perfil',
                appTitle: 'La aplicación',
                states: 'Estados', statesSub: 'publicaciones que caducan',
                chats: 'Chats', chatsSub: 'directos y grupos con roles',
                rooms: 'Salas', roomsSub: 'espacios de varios participantes',
                actionsTitle: 'Desde un chat',
                call: 'Llamada', video: 'Videollamada', camera: 'Cámara',
                files: 'Archivos', poll: 'Encuesta',
                platforms: 'iOS · Android · Web',
                platformsSub: 'la misma experiencia en las tres, con su propio manual de instalación',
              },
            },
            intro:
              'Con el desarrollo fuera de la empresa, el mayor riesgo era que lo entregado no coincidiera con lo que se necesitaba. Mi trabajo fue reducir esa brecha con criterios de aceptación, pruebas y documentación.',
            sections: [
              {
                title: 'Mi papel',
                body: 'Llevar el producto y ser el puente entre negocio y un equipo de desarrollo externo.',
                points: [
                  'Roadmap, backlog e historias de usuario de la aplicación, de concepto a producción.',
                  'Flujos, diagramas y criterios de aceptación para que la ambigüedad se resolviera antes de programar, no en la revisión.',
                  'Gestión del testing y de la revisión de bugs con el equipo externo.',
                ],
              },
              {
                title: 'Lo que construí',
                body: 'Además de especificar, desarrollé junto al equipo externo.',
                points: [
                  'Mantenimiento y componentes nuevos dentro de la app en React Native.',
                  'La internacionalización de la versión web con react-i18next: un espacio de nombres por componente, archivos en.js y es.js, detección de idioma del navegador y un idioma de respaldo.',
                  'Los copys de la aplicación en los dos idiomas, que es el trabajo que obliga a sacar cada texto del código.',
                ],
              },
              {
                title: 'Cómo se probaba',
                body: 'Cada entrega pasaba por una lista de verificación por interfaz, no por una revisión a ojo.',
                points: [
                  'Checklist función por función, con estado explícito: funciona, no funciona, función estática o función nueva.',
                  'Plan de pruebas propio para la versión móvil en iOS y Android.',
                  'Cada documento con quién lo elaboró y quién lo revisó, para que la revisión fuera de otra persona.',
                  'Registro de errores con su reporte, para dar seguimiento a cada bug encontrado.',
                ],
              },
              {
                title: 'Lo que dejé escrito',
                body: 'La documentación era parte del entregable, no un extra al final.',
                points: [
                  'Manuales para levantar la aplicación en Windows, macOS y dispositivos móviles, para que un integrante nuevo no dependiera de que alguien tuviera tiempo de explicarle.',
                  'Manual de traducciones para que cualquiera pudiera agregar una pantalla sin romper el esquema de idiomas.',
                  'Lineamientos de nomenclatura, modo oscuro y formatos de imagen, para mantener consistencia entre entregas.',
                ],
              },
            ],
          },
        },
        {
          title: 'Aura Clash',
          tag: 'Producto propio · Prototipo jugable',
          status: 'Prototipo jugable · Etapa 1',
          role: 'Producto, diseño e ingeniería, end-to-end',
          period: 'Sep 2026',
          description:
            'Videojuego de navegador inspirado en las "batallas de aura" virales —dos personas se enfrentan con poses y gestos exagerados y el entorno decide quién tiene más presencia—, traducido a un duelo con reglas objetivas: cerrar el puño carga energía, abrir la mano la libera. El gesto se reconoce en el propio dispositivo, sin cámara obligatoria, y dos personas pueden duelarse por enlace o QR sobre WebRTC sin servidor propio.',
          metrics: [
            'Combate determinista a 60 ticks/s, con la misma capa de acciones para cámara, teclado y botones en pantalla.',
            'Duelos remotos por lockstep con retraso de entrada derivado del RTT, verificados por hash de estado cada 120 ticks.',
            'Reconocimiento de gestos en el dispositivo con MediaPipe: nada de video sale del navegador.',
            'Investigación cultural del fenómeno documentada con fuentes y correcciones a supuestos iniciales, antes de diseñar una sola mecánica.',
          ],
          stack: ['TypeScript', 'Vite', 'Canvas 2D', 'MediaPipe Tasks Vision', 'WebRTC · PeerJS', 'Vitest'],
          galleryVariant: 'desktop',
          galleryNote: 'Capturas del prototipo real, generadas con Playwright contra el juego en ejecución, sin retoques.',
          gallery: [
            { image: 'ac-bienvenida', caption: 'Bienvenida: la promesa en una línea, sin registro previo' },
            { image: 'ac-crear', caption: 'Crear luchador: alias, avatar y aura — todo cosmético' },
            { image: 'ac-control', caption: 'Cámara, teclado o botones: misma capa de acciones para las tres' },
            { image: 'ac-remate', caption: 'Impacto en combate — daño, interrupción y texto de estado en vivo' },
            { image: 'ac-despertar', caption: 'Ambos con el especial listo: el momento de mayor tensión del duelo' },
            { image: 'ac-resultado', caption: 'Resultado con desglose de por qué se recibió cada punto de daño' },
          ],
          detail: {
            intro:
              'La fantasía es simple: tu mano es el mando. Cerrar el puño carga energía, abrirla la dispara. El reto era que esa fantasía funcionara sin cámara igual de bien que con ella, y que el origen cultural del proyecto —un fenómeno viral real, no una estética anime genérica— se tradujera con honestidad en vez de diluirse en un producto que dice inspirarse en algo sin entenderlo.',
            sections: [
              {
                title: 'El fenómeno y la traducción a producto',
                body: '"Farmear aura" es jerga de internet para acumular puntos invisibles de presencia haciendo algo que se ve impresionante con calma; las batallas de aura la llevaron a la calle: dos personas se paran al centro de un corro y el público decide quién tiene más aura.',
                points: [
                  'El original se juzga por la reacción del público a una actuación libre, sin reglamento único entre eventos.',
                  'Aura Clash no finge ser la batalla presencial: convierte el mismo lenguaje —un gesto pequeño que desata algo grande— en un duelo con reglas objetivas, que es lo que un prototipo sin audiencia real puede juzgar de forma justa.',
                  'El modo experimental Aura Showcase, con rondas de actuación puntuadas por ritmo y variedad, es la pieza que sí se acerca al formato de actuación evaluada del fenómeno original.',
                  'Gestos de anime que inspiraron el diseño (sellos de Naruto, señas de Jujutsu Kaisen, el Kamehameha) se tomaron como patrón genérico —cargar y empujar, un gesto único para un ultimate—, nunca como copia de la seña, el nombre o el efecto de un personaje.',
                ],
              },
              {
                title: 'Arquitectura: reglas separadas de los sentidos',
                body: 'La simulación de combate corre a 60 ticks por segundo con aritmética determinista; el dibujo en Canvas 2D corre a la tasa que dé el navegador.',
                points: [
                  'Cámara, teclado y botones en pantalla resuelven contra la misma capa de acciones: el combate nunca sabe de dónde vino la acción, solo que llegó.',
                  'Esa separación es lo que permite que un bot juegue con las mismas reglas que un humano, y que dos dispositivos remotos se mantengan sincronizados sin reenviar el estado completo cada frame.',
                ],
              },
              {
                title: 'Reconocimiento de gestos en el dispositivo',
                body: 'MediaPipe corre en el navegador y solo produce puntos de la mano; el video nunca sale del dispositivo.',
                points: [
                  'En combate se sigue una sola mano y nada más, decisión deliberada de privacidad y de presupuesto de cómputo.',
                  'Los gestos de cara y cuerpo del laboratorio experimental se miden contra la propia cara neutral del jugador, calibrada en un segundo — no contra un modelo genérico de expresión, y sin inferir identidad ni emoción.',
                  'Cada gesto tiene un equivalente exacto de teclado o botón táctil: ninguna mecánica depende solo de la cámara.',
                ],
              },
              {
                title: 'Red: lockstep determinista sin servidor propio',
                body: 'La decisión de producto fue no operar un servidor de partidas todavía; la de ingeniería que la hace posible es lockstep con retraso de entrada.',
                points: [
                  'Los dos dispositivos corren la misma simulación y se intercambian solo una máscara de acción por tick, nunca posiciones ni vida; el retraso se deriva del RTT medido en vez de ser fijo.',
                  'Cada 120 ticks ambos lados comparan un hash del estado; si no coincide, la partida se anula en vez de arriesgar un resultado divergente.',
                  'Un bug real encontrado en el camino: cuando dos ataques llegaban en el mismo tick, el orden de resolución fijo dejaba que ser host o invitado no fuera neutral. Se corrigió y se verificó con 300 duelos guionados jugados en ambos sentidos, exigiendo resultados espejo.',
                ],
              },
              {
                title: 'Calidad, offline y responsive',
                body: 'Cerca de 96 tests cubren balance de bots, la simulación y la red bajo condiciones adversas simuladas.',
                points: [
                  'La app es instalable y funciona sin conexión tras la primera visita, con un service worker que usa una estrategia de caché distinta por tipo de recurso.',
                  'Los problemas de layout en pantallas angostas no se corrigieron a ojo: se midieron las cajas reales en varios anchos antes de tocar el CSS.',
                ],
              },
              {
                title: 'Qué falta',
                body: 'Es un prototipo jugable, no un producto terminado, y lo dice la propia interfaz.',
                points: [
                  'Sin servidor de partidas no hay ranking posible; las salas son casuales por diseño y sin protección contra un cliente modificado.',
                  'No hay TURN: dos dispositivos en redes restrictivas pueden simplemente no conectar. Solo se probó extremo a extremo entre pestañas del mismo navegador y sobre el broker público real.',
                  'El reconocimiento de cara y cuerpo del laboratorio solo se probó con datos sintéticos, nunca con una cara o cuerpo real.',
                ],
              },
            ],
          },
          figures: [
            { value: '60', label: 'ticks/s de combate' },
            { value: '96', label: 'tests automatizados' },
          ],
        },
      ],
    },
    stack: {
      eyebrow: 'Toolbox',
      title: '*Herramientas* con las que trabajo',
      description:
        'Lo que uso para discovery, desarrollo, automatización con IA y entrega.',
      categories: ['Product', 'AI', 'Data', 'Engineering', 'Delivery'],
    },
    personal: {
      eyebrow: 'Fuera del código',
      title: 'Lo que *veo* y lo que escucho',
      description: 'Fotos que tomo cuando viajo y la playlist que suena mientras trabajo.',
      galleryLabel: 'Fotos de viaje',
      deckRole: 'pila de fotos',
      photoAlt: 'Foto de viaje tomada por Eddie',
      openPhoto: 'Ver en grande la foto',
      previousPhoto: 'Foto anterior',
      nextPhoto: 'Foto siguiente',
      dragHint: 'Arrastra la foto para pasar a la siguiente',
      viewerTitle: 'Fotos de viaje',
      pinterestCta: 'Ver el tablero en Pinterest',
      playlistEyebrow: 'Playlist',
      playlistName: 'COMPILE & CHILL',
      playlistNote: 'Para concentrarme cuando el código pide calma.',
      play: 'Reproducir',
      pause: 'Pausar',
      loadingPlayer: 'Cargando el reproductor',
      nowPlaying: 'Sonando',
      paused: 'En pausa',
      openSpotify: 'Abrir en Spotify',
      playerTitle: 'Reproductor de Spotify: COMPILE & CHILL',
    },
    contact: {
      eyebrow: 'Contacto',
      title: '¿Trabajamos *juntos*?',
      description:
        'Estoy abierto a roles de Software Engineer, Product Engineer y liderazgo técnico en fintech, pagos y producto con IA. Si crees que encajo, hablemos.',
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
        error: 'No se pudo enviar. Intenta de nuevo.',
      },
    },
    footer: 'Eddie Elorza Ruiz · Software Engineer · Product Builder · Fintech & IA',
    languageLabel: 'Idioma',
    themeLabel: 'Color',
    mode: {
      toDark: 'Cambiar a modo oscuro',
      toLight: 'Cambiar a modo claro',
    },
    theme: {
      tooltip: 'Arrastra · Click color',
      mobileHint: 'Mantén y arrastra',
    },
    a11y: {
      skip: 'Saltar al contenido',
      close: 'Cerrar',
      openColors: 'Abrir selector de color',
      closeColors: 'Cerrar selector de color',
      primaryNav: 'Navegación principal',
      sectionsNav: 'Secciones',
    },
  },
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      product: 'How I work',
      education: 'Education',
      projects: 'Projects',
      stack: 'Stack',
      personal: 'Beyond the code',
      contact: 'Contact',
      cta: "Let's talk",
    },
    hero: {
      badge: 'Software Engineer · Product Builder · Fintech & AI',
      title1: 'Designing and building',
      titleHighlight: 'scalable products',
      rotatingWords: [
        'scalable products',
        'premium experiences',
        'AI-powered solutions',
        'fintech platforms',
      ],
      title2: 'end to end.',
      subtitle:
        'Software Engineer and Product Builder with 6+ years in fintech and payments. From the business problem to architecture, code and operations, with an AI First approach.',
      chips: ['MSc Applied AI', 'PSPO I'],
      ctaProjects: 'See projects',
      ctaContact: "Let's talk",
      avatarLabel: 'The one who builds the product',
      photoLabel: 'The one who leads execution',
      stickerHello: "Hi, I'm Eddie!",
      stickerTag: 'Product Builder',
    },
    about: {
      eyebrow: 'About me',
      title: 'Software engineer with a *product* mindset.',
      p1: 'I’ve spent 6+ years building software in fintech and payments. At Paga Fácil, I led a full-stack team of five while continuing to ship code. Today I build the credit back office at Clip, and I built and maintain a production CRM for a hotel group.',
      p2: 'My work covers the full lifecycle: business rules, architecture, API contracts, testing and operations. When a project needs it, I write the PRD and then build what it defines.',
      p3: 'I hold an MSc in Applied Artificial Intelligence and the PSPO I certification. I work AI First: I use AI agents throughout development and bring AI into products where it adds value.',
      tags: ['Product Engineering', 'Fintech & Payments', 'AI First', 'PSPO I · MSc AI'],
      photoAlt: 'Illustration of Eddie Elorza coding on his laptop',
      photoCaption: 'Behind the code',
    },
    experience: {
      eyebrow: 'Career',
      title: 'Experience across *engineering* and product',
      description:
        'From web and mobile development for clients to payments and credit platforms, technical leadership and products in production.',
      trackLabels: { prod: 'Product', ing: 'Engineering' },
      currentNote: '← now',
      phases: [
        'Web Developer',
        'Business Analyst / Product Owner',
        'Software Engineer',
        'Product Engineer',
        'AI-enabled product',
      ],
      roles: [
        {
          company: 'Clip · Credit and payments',
          role: 'Software Engineer · Frontend | Credits',
          period: 'Aug 2026 — Present',
          track: ['ing'],
          summary:
            'Frontend for the credit back office, on a team split between Mexico and China.',
          impact: [
            'I build microfrontends with React, TypeScript, Umi Max and qiankun for loan origination and servicing.',
            'I define typed API contracts with adapters and mocks so the frontend can move ahead of the backend.',
            'I test with Jest, Testing Library and Playwright, and debug integration issues across the host, microfrontends and services.',
          ],
          tags: ['React', 'TypeScript', 'Microfrontends', 'Playwright'],
        },
        {
          company: 'Operadora SI · Hotel CRM',
          role: 'End-to-end product · Client project',
          period: 'May 2026 — Present',
          track: ['prod', 'ing'],
          summary:
            'Custom CRM for a group of 10 hotels, in production since September 2026.',
          impact: [
            'I own the product end to end: discovery, PRD, design, development and operations.',
            'I implemented per-hotel and per-role permissions with Postgres RLS, checked by automated tests.',
            'I prioritized visit logging and sales follow-up; generative AI is planned for a second phase.',
          ],
          tags: ['Discovery', 'PRD', 'Supabase · RLS', 'React'],
        },
        {
          company: 'Banco Azteca · Paga Fácil',
          role: 'Product Engineer · Payments Platform',
          period: 'Jan 2025 — Mar 2026',
          track: ['prod', 'ing'],
          summary:
            'Online credit payment gateway. I led the initiative and a full-stack team of five.',
          impact: [
            'I ran the roadmap, backlog, Scrum and code reviews while still building features.',
            'I migrated the gateway from Vue 2 to React as a microfrontend with Module Federation and PWA support.',
            'I implemented a per-attempt idempotency key so retries don’t create duplicate payments.',
            'In the Abonos (payments) area, I automated incident resolution.',
          ],
          tags: ['Technical leadership', 'Payments', 'React', 'Microfrontends'],
        },
        {
          company: 'Banco Azteca · Sistema Regional',
          role: 'Software Engineer · Regional Credit & Collections (second stint)',
          period: 'Dec 2023 — Jan 2025',
          track: ['ing'],
          summary:
            'Second stage on the credit and collections platform: modules built on the shared core.',
          impact: [
            'I built the customer portfolio, credit information and user administration modules.',
            'I worked against contracts and mocks agreed with the backend team until the real integration was ready.',
            'I maintained the core and the microfrontend template, and wrote tests with Jest and Testing Library.',
          ],
          tags: ['React', 'Module Federation', 'Testing', 'CI/CD'],
        },
        {
          company: 'IDS Comercial',
          role: 'Fullstack Engineer · Financial services',
          period: 'Apr 2023 — Dec 2023',
          track: ['ing'],
          summary:
            'Applications for pension and banking projects with React, Java and API integrations.',
          impact: [
            'I coordinated frontend priorities and technical decisions.',
            'I took part in requirements analysis, user stories and backlog work.',
            'I worked on performance optimization and observability practices.',
          ],
          tags: ['React', 'Java', 'APIs', 'Observability'],
        },
        {
          company: 'Banco Azteca · Sistema Regional',
          role: 'Software Engineer · Regional Credit & Collections (first stint)',
          period: 'Oct 2022 — Apr 2023',
          track: ['ing'],
          summary:
            'First stage: maintaining the legacy system while the new microfrontend foundation was built.',
          impact: [
            'I maintained the legacy JSP, jQuery and AJAX system.',
            'I built the frontend core: layout, login, theming and shared components with Module Federation.',
            'I documented the contracts between applications and how modules integrate into the legacy system.',
          ],
          tags: ['JSP → React', 'Module Federation', 'Frontend core', 'Documentation'],
        },
        {
          company: 'MRCI',
          role: 'Product & Software Engineer',
          period: 'Nov 2021 — Oct 2022',
          track: ['prod', 'ing'],
          summary:
            'Octobile, an internal messaging app built with an external vendor, plus e-commerce projects.',
          impact: [
            'I owned the roadmap, backlog, user stories and acceptance criteria with the vendor.',
            'I built React Native components and implemented i18n for the web version with react-i18next.',
            'I coordinated testing and delivery reviews through to production.',
          ],
          tags: ['Roadmap', 'React Native', 'i18n', 'QA'],
        },
        {
          company: 'Lapbytes',
          role: 'Web Developer',
          period: 'Jan 2020 — Nov 2021',
          track: ['ing'],
          summary:
            'Websites and e-commerce platforms for clients across industries.',
          impact: [
            'I built and maintained about six platforms with HTML, CSS, JavaScript and WordPress.',
            'I worked directly with clients, from requirements to delivery.',
          ],
          tags: ['JavaScript', 'CSS', 'WordPress', 'E-commerce'],
        },
      ],
    },
    product: {
      eyebrow: 'Approach · AI First',
      title: 'How I *work*',
      description:
        'I work AI First: I use AI agents across the whole cycle, from analysis to code and review, and bring AI into the product when it adds value. Seven steps, from the problem to operations.',
      relatedLabel: 'Related steps',
      closeLabel: 'Close',
      categories: {
        problem: 'Step 1',
        scope: 'Step 2',
        solution: 'Step 3',
        plan: 'Step 4',
        build: 'Step 5',
        quality: 'Step 6',
        operate: 'Step 7',
      },
      craft: {
        title: 'Engineering standards',
        note: 'What I pay attention to when building and running software.',
        groups: ['Build', 'Secure', 'Operate & deliver'],
        items: [
          {
            k: 'Architecture',
            v: 'Modules and microfrontends when the team and deployment needs justify them, with clear contracts between pieces; a simple setup when they don’t.',
          },
          {
            k: 'Performance',
            v: 'Code splitting, lazy loading, caching and dependency control so the app loads fast on modest devices too.',
          },
          {
            k: 'Security',
            v: 'Permissions enforced on the server and in the database, input validation, and security analysis as part of the delivery pipeline.',
          },
          {
            k: 'Reliability',
            v: 'Idempotent retries and well-defined loading, empty and error states, so a failure doesn’t leave ambiguous results.',
          },
          {
            k: 'Observability',
            v: 'Correlation IDs, logs and error metrics to diagnose issues with data instead of guesswork.',
          },
          {
            k: 'Testing',
            v: 'Unit, integration and end-to-end tests focused on the behavior that matters, wired into the CI/CD pipeline.',
          },
          {
            k: 'Accessibility',
            v: 'Visible focus, keyboard navigation, adequate touch targets, good contrast and support for reduced motion.',
          },
          {
            k: 'DevEx',
            v: 'Templates, conventions and documentation so a new module starts fast and each team ships without blocking others.',
          },
          {
            k: 'Delivery',
            v: 'Incremental releases: the critical flow first, with clear scope and acceptance criteria.',
          },
          {
            k: 'Product Analytics',
            v: 'Metrics tied to the product goal, defined before building and easy to interpret.',
          },
        ],
      },
      items: [
        {
          id: 'problem',
          short: 'Problem',
          title: 'Understand the problem and the business rules',
          category: 'problem',
          content:
            'For the hotel CRM, the starting point was the sales operation: visits, different targets by role and rate agreements that expire. Those rules defined what the system had to record and calculate.',
          related: ['scope'],
        },
        {
          id: 'scope',
          short: 'Scope',
          title: 'Define scope and criteria',
          category: 'scope',
          content:
            'I wrote the PRD for the CRM: the problem, the users, the three MVP journeys and what stayed out, such as generative AI. On Octobile, flows and acceptance criteria defined what each delivery had to include.',
          related: ['problem', 'solution'],
        },
        {
          id: 'solution',
          short: 'Solution',
          title: 'Analyze the system and design the solution',
          category: 'solution',
          content:
            'On Paga Fácil I modeled the flow before building it, including the uncertain result of an interrupted payment. On Sistema Regional, the solution had to coexist with the legacy system through a shared core.',
          related: ['scope', 'plan'],
        },
        {
          id: 'plan',
          short: 'Plan',
          title: 'Plan the delivery',
          category: 'plan',
          content:
            'On Paga Fácil I led a team of five: roadmap, backlog, Scrum, task assignment and progress reviews, while still building.',
          related: ['solution', 'build'],
        },
        {
          id: 'build',
          short: 'Build',
          title: 'Build end to end',
          category: 'build',
          content:
            'On the CRM and Tastify I worked across the interface, database and server logic: Postgres permissions, migrations and server-side totals. On Paga Fácil I built new features and changes to the monolith.',
          related: ['plan', 'quality'],
        },
        {
          id: 'quality',
          short: 'Quality',
          title: 'Ensure quality, security and reliability',
          category: 'quality',
          content:
            'In the CRM, permissions by hotel and role are verified with access tests. On Paga Fácil I implemented a per-attempt idempotency key, and delivery went through tests, static analysis and a security review.',
          related: ['build', 'operate'],
        },
        {
          id: 'operate',
          short: 'Operate',
          title: 'Operate and measure',
          category: 'operate',
          content:
            'The CRM is in production: requests arrive as tickets inside the system, and progress is measured against each person’s own target. On Paga Fácil, a per-attempt identifier makes each transaction traceable.',
          related: ['quality'],
        },
      ],
    },
    education: {
      eyebrow: 'Education',
      title: 'Education and *certifications*',
      description:
        'A master’s in Applied AI and certifications in product, data and cloud.',
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
          title: 'Data and analytics',
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
          ],
        },
      ],
    },
    projects: {
      eyebrow: 'Projects',
      viewLabel: 'View project',
      noDemoLabel: 'Internal system · no public demo',
      newTabLabel: 'opens in a new tab',
      detail: {
        open: 'View resources',
        keyPoints: 'Key points',
        close: 'Close',
        breadcrumb: 'Projects',
        meta: {
          status: 'Status',
          role: 'My role',
          period: 'Period',
          stack: 'Stack',
        },
      },
      carousel: {
        region: 'Projects',
        prev: 'Previous project',
        next: 'Next project',
      },
      gallery: {
        open: 'Enlarge screen',
        note: 'Screenshots with fictitious data',
        prev: 'Previous',
        next: 'Next',
        close: 'Close',
      },
      title: 'What I’ve *built*',
      description:
        'Payments and credit platforms, a CRM in production and my own AI products: the problem, my role and the technical decisions.',
      items: [
        {
          title: 'Hotel sales CRM',
          tag: 'Product · Client work',
          status: 'In production',
          role: 'End-to-end product',
          period: 'May 2026 — Present',
          description:
            'A custom CRM for a hotel group (Operadora SI) that replaced a visit-compliance spreadsheet. End-to-end product — discovery, design, development and operations — in production since September 2026.',
          metrics: [
            'Discovery: the underlying problem was lack of sales visibility, not the screens they asked for, which reshaped the roadmap.',
            'Build-vs-buy: justified building custom over HubSpot / Salesforce for a multi-hotel commercial process.',
            'Row-level permissions in Postgres (RLS), checked by automated tests on every change: each hotel sees only its own accounts.',
            'Comparable targets: the ranking uses % of each person’s own target, and the pipeline counts opportunities, not pesos.',
          ],
          stack: ['React', 'TypeScript', 'TanStack Query', 'Supabase · RLS', 'Vercel'],
          galleryVariant: 'desktop',
          galleryNote: 'Screens from the real system, with branding, names and companies replaced by fictitious ones to protect the client.',
          gallery: [
            { image: 'crm-cumplimiento', caption: 'Weekly compliance · the Excel sheet, computed on its own' },
            { image: 'crm-equipo-hoy', caption: 'Team today · where everyone is going and what is overdue' },
            { image: 'crm-pipeline', caption: 'Pipeline by hotel' },
            { image: 'crm-kanban', caption: 'Board by stage, with each account\'s pulse' },
            { image: 'crm-ficha', caption: 'Company file · next step, decision maker and history' },
            { image: 'crm-convenios', caption: 'Rate agreements · per hotel, flagged 45 days before expiry' },
          ],
          detail: {
            intro:
              'Ten hotels, each with its own accounts and team. The goal: give management visibility into sales activity and help each executive keep track of their accounts.',
            sections: [
              {
                title: 'The problem',
                body: 'Management sets weekly targets of effective visits — 25 for an executive, 20 for a manager — and the spreadsheet recorded the number, but not the company, the contact or what was agreed.',
                points: [
                  'A repeated visit counted twice, and an abandoned account went unnoticed until it was lost.',
                  'Logging a visit had to cost less than writing it in the sheet: the executive works on their feet, between meetings, from a phone.',
                  'Each person had to see only their own accounts and team; management needed progress against target without requesting reports.',
                ],
              },
              {
                title: 'My role',
                body: 'End-to-end product with the client: discovery, design, development, launch and operation. I work alone, so every product decision is also a technical one.',
                points: [
                  'Discovery: the underlying problem was lack of sales visibility, not the screens they asked for. That reshaped the roadmap.',
                  'Build-vs-buy: I made the case for building it rather than HubSpot or Salesforce, for a multi-hotel process where each property owns its book.',
                  'I sequenced the MVP to validate the critical flow — logging the visit — before investing in anything else.',
                  'Management reports bugs and requests through tickets inside the CRM itself; I handle and ship them.',
                ],
              },
              {
                title: 'What it solves',
                body: 'Three journeys, in this order: log a visit, know what today holds, and see whether the team is hitting target.',
                points: [
                  'Compliance: the table that used to live in Excel, calculated from logged visits. A meeting held and logged the same day counts once.',
                  'Team today: where everyone is going, which follow-ups are overdue and which accounts have gone quiet.',
                  'Pipeline in three levels: by hotel, by person and a board by stage, with each account\'s pulse on the card.',
                  'Company record: next step, decision maker and last contact at the top; visit history with its author below.',
                  'Rate agreements: corporate rates per hotel, with a notice 45 days before expiry so renewals can be negotiated in time.',
                ],
              },
              {
                title: 'Product decisions',
                body: 'The ones that change how the team behaves, not just how the screen looks.',
                points: [
                  'The pipeline is measured in opportunities, not pesos: they sell lodging agreements, and an estimated amount at the start misleads more than it informs.',
                  'The leaderboard ranks by percentage of each person\'s own target, so a manager on 20 and an executive on 25 are measured by the same yardstick.',
                  'An account\'s rhythm shows in color: six named rhythms over nine weeks of activity, so "cooling down" is visible before the account goes cold.',
                  'What one hotel sees of an account another hotel works under the same brand is limited: stage, owner and last activity, without contacts or rates.',
                ],
              },
              {
                title: 'Engineering',
                body: 'It handles a client’s sales data and is maintained by one person, so security and automation are a priority.',
                points: [
                  'Row-level permissions in Postgres (RLS): an executive can’t read another hotel’s accounts, even by querying the database directly. Automated tests check those rules on every change.',
                  'An action only appears in the interface if the server is going to accept it.',
                  'Concurrent editing: if two people open the same company, the second gets a warning instead of overwriting the first one\'s work.',
                  'Lockout after three failed attempts, session close on inactivity, tokens expiring in 15 minutes, and security headers verified at build time.',
                  'PWA: used mostly on the phone, out on the street, and on desktop for supervision.',
                  'Nothing reaches production without type checks, access rules and build; migrations are verified object by object in production.',
                ],
              },
            ],
          },
          figures: [
            { value: '10', label: 'hotels' },
          ],
        },
        {
          title: 'Entre Todos · Community support network',
          tag: 'Own product · MVP',
          status: 'Working MVP · public demo',
          role: 'Product, design and engineering, end-to-end',
          period: 'Sep 2026',
          description:
            'You describe a situation in your own words —"I\'m making carne asada for 12 people"— and the system finds which people, objects and knowledge already exist nearby to solve it, with a navigable 3D world of your community. My own product end to end: data model, resolution pipeline and three levels of visualization, with no backend and no AI at runtime.',
          metrics: [
            'Three simulated communities with their own social structure: the same sentence produces different solutions in each one.',
            'A six-stage pipeline of pure rules; the first two return plain objects, ready to be swapped for an LLM without touching the rest.',
            'Map → building in Three.js → constellation: three levels of the same community, sharing state, no reload.',
          ],
          stack: ['Vanilla HTML/CSS/JS', 'Canvas 2D', 'Three.js · on demand', 'No backend · localStorage'],
          href: 'https://eddieelorza.github.io/entre-todos',
          linkLabel: 'View demo',
          galleryVariant: 'desktop',
          galleryNote: 'Screens of the 3D world captured with Playwright against the real product, unedited.',
          gallery: [
            { image: 'et-comunidad', caption: 'My community: the whole residential complex, by day, buildings labeled' },
            { image: 'et-edificio', caption: 'My building in 3D: glass facade, people on their floor, what the place itself can do' },
            { image: 'et-necesidad', caption: '"I need a dress…": the need creates gravity and the trust circle converges' },
            { image: 'et-visual-confirm', caption: "The person's photo appears next to their node with \"Does this work?\"" },
            { image: 'et-reveal', caption: 'The main moment: Community Twin → Constellation, houses → people → trust' },
          ],
          detail: {
            intro:
              "Every community has plenty of idle capacity —stored chairs, someone who fixes bikes, someone who goes to Costco every Saturday— but using it today means knowing exactly what to ask, of whom, and where. Entre Todos removes that friction: you describe a situation in your own words and the system builds a solution from what your community already has.",
            sections: [
              {
                title: 'The problem and the interface',
                body: "It isn't a neighbor marketplace, a feed, or a chatbot: it's a different interface between a person and their community's collective capacity.",
                points: [
                  'The user never picks a category, only describes a situation: "I\'m making carne asada for 12 people on Saturday."',
                  'The system understands what\'s needed, discovers which people, objects, knowledge, time and routes already exist nearby, and builds an honest solution: "your community already has 7 of the 8 things you need."',
                  'Every piece of help that goes well becomes a trust relationship recorded in the graph, not a post that disappears into a feed.',
                ],
              },
              {
                title: 'The pipeline and the Community Resource Graph',
                body: 'Six stages of pure rules, with no AI at runtime: understand → detect needs → discover capabilities → build solutions → rank → headline and message.',
                points: [
                  'The first two stages return plain objects: a language model can replace them tomorrow, returning the same shape, without touching the rest of the pipeline.',
                  'The graph does not model what people post, but what people are, have, know and do by routine, with evidence per capability ("has received packages 3 times").',
                  'The graph learns: every solved situation adds evidence, and a trip or an offer of yours becomes something your community knows about you.',
                ],
              },
              {
                title: 'Community Simulation Layer',
                body: 'Three communities with their own social structure inject or suppress needs depending on the place, with no rule written per community.',
                points: [
                  'Residencial Jacarandas (Mexico City): families in towers; hidden capacity sits in stored objects and work-from-home routines.',
                  'Colonia Los Pinos (Guadalajara): older adults with few cars; hidden capacity is time and craft experience.',
                  'Residència Internacional de Gràcia (Barcelona): students from twelve countries; hidden capacity is whoever already went through the paperwork, and languages.',
                  'The same sentence —"I\'m making dinner for 10"— surfaces different needs and different people in each one.',
                ],
              },
              {
                title: 'Three levels of the same community',
                body: 'Map → Community Twin → Constellation, one continuous journey with the same visual identity (tone, initials, trust ring) across all three.',
                points: [
                  'A hand-illustrated map of my own, in Canvas 2D, with no tiles or real places, positions approximate by design.',
                  'Community Twin: the building rises floor by floor in Three.js, loaded on demand; offline, the building card gives the same information.',
                  "Place Capabilities: each building declares what the place itself can do —24h reception, bike storage, a freight elevator— and the resolver combines them with people and objects.",
                  'Constellation: the community in Canvas 2D, where each person is a node and a need creates gravity toward whoever can solve it.',
                ],
              },
              {
                title: 'Trust and privacy by design',
                body: 'Sensitive situations prioritize trust over proximity, and nothing is shown as a number.',
                points: [
                  'Trust Graph: person-to-person relationships, explicit and emergent circles, and contexts —someone can be trusted for packages and not for entering your home.',
                  'Never a unit number, phone, address or exact location; trust by behavior, never stars or rankings.',
                  'Authorization before connecting: each person gets their own editable message, and you decide who to ask and with what reach.',
                ],
              },
              {
                title: 'Status and what\'s missing',
                body: "It's a demo MVP: the three communities and their people are fictional, and nobody responds for real.",
                points: [
                  'No backend or authentication: all state lives in localStorage, with a one-button demo reset.',
                  'Sentences outside the known scenarios fall back to a generic keyword interpreter; the next step is replacing those first two stages with a real LLM.',
                  'Still needs validating with real users that "describing a situation" removes more friction than a marketplace or a WhatsApp group.',
                ],
              },
            ],
          },
        },
        {
          title: 'Tastify · SaaS for restaurants',
          tag: 'Own product · SaaS',
          status: 'Ready for pilot',
          role: 'My own product, end to end',
          period: 'Apr 2026 — Present',
          description:
            'A QR menu with an AI waiter, a cart shared across the table, and a panel that receives every round live. I designed and built it: product, data, security and operation.',
          metrics: [
            'Three apps on one base: diner, restaurant panel and landing.',
            'The rules live in Postgres: prices are calculated on the server, not in the browser.',
            'The AI waiter suggests, but the database decides what exists and what is sold out.',
          ],
          stack: ['React 18', 'TypeScript', 'Supabase · RLS', 'Realtime', 'Gemini'],
          galleryVariant: 'desktop',
          galleryNote: 'Recorded locally with synthetic data: the diners and the sales are test values.',
          gallery: [
            { image: 'tastify-pedido', caption: 'The diner sends a round and the ticket lands on the board by itself' },
            { image: 'tastify-cuenta', caption: 'Each round adds to whoever ordered it, with no reload' },
          ],
          detail: {
            intro:
              'Restaurants lose time in specific moments: waiting for a server to order another round, splitting the bill, making sense of the menu. Tastify handles that from the table, without replacing the restaurant’s point of sale.',
            diagrams: [
              {
                id: 'tastify',
                labels: {
                  title: 'Tastify architecture',
                  description: 'The two browser apps only carry the public key and talk to the platform through database functions. Postgres decides with row-level policies who sees what and what a round costs; Realtime announces the changes and the apps ask again. The AI model key and privileged access live only inside the Edge Functions.',
                  note: 'My own diagram of the product.',
                  browser: 'Browser',
                  diner: 'Diner app', dinerSub: 'enters through the table QR',
                  panel: 'Restaurant panel', panelSub: 'kitchen, floor and till',
                  platform: 'Managed platform',
                  auth: 'Auth', authSub: 'anonymous for diners, email for staff',
                  db: 'Postgres', dbSub: 'row-level policies', dbSub2: 'transactional functions',
                  realtime: 'Realtime', realtimeSub: 'database changes',
                  storage: 'Storage', storageSub: 'photos and logos',
                  edge: 'Edge Functions', edgeSub: 'recommendation and translation', edgeSub2: 'the only ones with the service role',
                  model: 'AI model', modelSub: 'external service',
                  key: 'public key',
                  rpc: 'functions',
                  invalidate: 'invalidates, apps ask again',
                },
              },
              {
                id: 'tastify-ronda',
                labels: {
                  title: 'Life of a round',
                  description: 'The diner scans the QR and joins the table session, builds the shared cart with their group and sends the round. The server recalculates prices and extras, numbers it and pushes it to the board. Every state change in the kitchen returns to the phone with no reload.',
                  note: 'My own diagram of the product.',
                  scan: 'Scan the QR', scanSub: 'joins the table session',
                  cart: 'Shared cart', cartSub: 'the whole table sees it',
                  submit: 'Send the round', submitSub: 'the server recalculates and numbers it',
                  board: 'Kitchen board', boardSub: 'the ticket lands by itself',
                  received: 'Received', preparing: 'Preparing', ready: 'Ready', delivered: 'Delivered',
                  stateLabel: 'kitchen moves the state',
                  backToPhone: 'the phone sees it change',
                },
              },
            ],
            sections: [
              {
                title: 'What it solves',
                body: 'Four people with different jobs use the same system: diner, kitchen, waiter and owner.',
                points: [
                  'The diner scans the QR, orders with their group in a shared cart and sees what they owe, without creating an account.',
                  'The kitchen receives rounds with a ticket number, extras and notes, and moves them through states with one tap: received, preparing, ready, delivered.',
                  'Servers see the floor, record payment per person and free up tables; owners see sales and which ones came from the AI.',
                  'The AI waiter answers with dishes from the available menu and suggests sides that exist.',
                ],
              },
              {
                title: 'Architecture: thin frontends, rules in the database',
                body: 'The frontends only carry the public key. Who sees what, what a round costs and whether a dish exists is decided by Postgres, with row-level policies and transactional functions.',
                points: [
                  'Orders are only born inside submit_order, which recalculates price, extras and availability in one transaction: editing the request in the browser does not make you pay less.',
                  'The QR is an opaque token. Changing a number in the URL does not seat you at another table.',
                  'Diners sign in anonymously but still get an identifier in the database, so row-level policies can validate their table.',
                  'Realtime invalidates queries instead of replicating state, with a 4-second polling fallback if the connection drops.',
                  'The AI key and privileged access live only in Edge Functions; if Gemini fails, a local search responds instead.',
                ],
              },
              {
                title: 'Split bill',
                body: 'Every dish records who ordered it, and shared items are split by weights.',
                points: [
                  'The per-person balance uses the same formula as the charge, so the sum matches the total.',
                  'Anything that can’t be attributed shows as “Unassigned” and stays visible for review.',
                ],
              },
              {
                title: 'Verification',
                body: 'This product touches money and I maintain it alone, so the guardrails sit on the system side.',
                points: [
                  'A script checks the database after every deploy: role permissions, function guards, signatures and the columns the frontend uses.',
                  'The local environment rebuilds from scratch through the migrations, which is the only proof they reproduce the production schema.',
                  'A CLI wrapper aborts if the linked project is the wrong one and blocks destructive flags.',
                  'While recording the demo, a mismatch showed up: the panel showed $490 and the per-person total $355. The mismatch warning caught it; the fix was to recalculate balances on every new round and reconnection.',
                ],
              },
              {
                title: 'Business decisions',
                body: 'A selling layer at the table rather than another point of sale, so a pilot needs no integration with the till or the inventory.',
                points: [
                  'Every dish records whether it was ordered on its own, by AI recommendation or from a side suggestion, so a pilot can measure what each channel moves.',
                  'Target customer: independent casual-premium restaurants, one to three locations, with a 400 to 800 peso ticket.',
                  'The plan prices are proposals to validate in pilots, not published prices yet.',
                ],
              },
              {
                title: 'What is missing',
                body: 'What already works covers the menu, rounds, kitchen, reservations, split bill, bilingual menu and reports.',
                points: [
                  'Per-person payment at the table with Stripe Connect: designed and on hold.',
                  'Automated tests and continuous integration.',
                  'Self-serve restaurant onboarding and billing.',
                ],
              },
            ],
          },
        },
        {
          title: 'English OS · Local-first study system',
          tag: 'Own product · Local AI',
          status: 'In daily use',
          role: 'Product, design and engineering, end to end',
          period: 'May 2026 — Sep 2026',
          description:
            'An English study system that tracks what I produce, detects my recurring mistakes and generates readings, exercises and podcasts from them. It runs on my Mac with local AI.',
          metrics: [
            'Built to improve level, not to maintain streaks or engagement.',
            'SQLite as the source of truth and a worker that runs one inference at a time to avoid overloading the machine.',
            'Three architectures in three months, each cut-over with a preflight check and a way back.',
          ],
          stack: ['React', 'TypeScript', 'FastAPI', 'SQLite · FSRS', 'Ollama'],
          galleryVariant: 'desktop',
          galleryNote: 'Captures of the real app, recorded against a copy of the database.',
          gallery: [
            { image: 'eos-review', caption: "The day's lesson opens a review sitting driven by FSRS" },
            { image: 'eos-reader', caption: 'Interactive reader: every word carries its state and its entry' },
            { image: 'eos-stats', caption: 'The level, with the evidence behind each number' },
          ],
          detail: {
            intro:
              'Anki held flashcards, Notion held notes and a tutor’s corrections stayed in loose text. None of the tools connected, and there was no model of my learning: which words weren’t sticking, which mistakes repeated and what level I read at.',
            sections: [
              {
                title: 'The problem',
                body: 'I am a Spanish speaker, I study 60 to 75 minutes in the morning, and no tool built on what I produced.',
                points: [
                  'The metric that matters is level: fewer errors per 100 words and external tests. No streaks.',
                  'Two constraints shaped the product: I drop activities that require a lot of writing, so daily practice favors multiple choice.',
                  'And local AI takes 15 to 80 seconds, so waiting was designed as a first-class state rather than a spinner.',
                ],
              },
              {
                title: 'Architecture',
                body: 'One SQLite file, one worker, one inference at a time. The app answers instantly from the database; the slow work goes through a persistent queue.',
                points: [
                  'React with a typed API against FastAPI, and polling that reattaches to jobs still running if you reload.',
                  'SQLite in WAL mode with 18 tables: words, review history, errors, texts, activities, sessions and the job queue.',
                  'A single worker claims jobs with an atomic UPDATE and calls the AI provider: Ollama by default, behind an interface that allows swapping it.',
                  'Local speech for transcription and synthesis, so shadowing and podcasts never leave the machine either.',
                ],
              },
              {
                title: 'The daily loop',
                body: 'Five steps, and none depends on the model responding in time.',
                points: [
                  'I open the day and see my working level with its reason: retention, comprehension and the evidence behind it.',
                  'I do the review sitting with a budget in minutes and a pace calibrated by the median time between answers.',
                  'Closing it queues the day’s jobs, so the session doesn’t depend on the model responding.',
                  'The worker generates the reading, the drills and the writing prompt from my stuck words and my frequent errors.',
                  'Everything I produce gets corrected and feeds the same errors table, which is what closes the loop.',
                ],
              },
              {
                title: 'Decisions and what they cost',
                body: 'Every major decision was written down before the change, with the cost I accepted.',
                points: [
                  'SQLite as the source of truth: one file, no server, easy to back up. Cost: no sync between devices.',
                  'Local AI by default: private and with no per-token cost. Cost: answers that take 15 to 80 seconds.',
                  'FSRS without fuzz: the interval each button shows is exactly the one it schedules.',
                  'Freezing Anki: a single system schedules reviews, because two sources created conflicts that were hard to trace. Cost: no studying on the phone.',
                  'A level built from several sources of evidence: each one declares whether it has enough data, and says "no data yet" instead of inventing a number.',
                ],
              },
              {
                title: 'Problems the interface didn’t show',
                body: 'What I learned most was not on the screen.',
                points: [
                  'The worker stopped without warning: the file lock doesn’t serialize threads, and opening it in write mode truncated a file the process had locked. I fixed it in two layers, and the loop now survives exceptions.',
                  'The counts were misleading: the app seemed to have more content, but 77 of 77 writings and 79 of 86 readings were empty. I learned to compare content, not rows.',
                  'Cutting off the old system without losing history: cards were cross-checked live against it, with zero divergence, a mandatory backup and a revert command.',
                ],
              },
              {
                title: 'Design',
                body: 'A self-study notebook, not a SaaS dashboard. The reference is a mid-century European self-study course.',
                points: [
                  'The screen is the open page of the notebook and the navigation is the spine of the cover.',
                  'Thin rules instead of cards and shadows; exact figures instead of progress rings.',
                  'Two typographic voices: a serif for the language content and a sans for the interface.',
                  'One law of motion, a slide along the axis of the column.',
                ],
              },
            ],
          },
        },
        {
          title: 'Spine · Traceable product reasoning',
          tag: 'Own product · Open source',
          status: 'v0.1 working · MIT license',
          role: 'Product Engineer: product, architecture, implementation, evals and landing',
          description:
            'An open-source tool (CLI + agents for Claude Code) that keeps product reasoning as a graph versioned in git, next to the code. Every task explains which goal it serves and where in that chain an unvalidated assumption still sits.',
          metrics: [
            'It does not generate PRDs: it maintains a graph you can query and validate in CI.',
            'Agent permissions are enforced in code, not requested in the prompt.',
            '77 tests, 15 validation rules and 7 adversarial evals that changed the product.',
          ],
          stack: ['TypeScript', 'Node ≥20', 'YAML/Markdown in git', 'React + Vite', 'GitHub Actions'],
          galleryVariant: 'desktop',
          galleryNote: 'Real captures of the CLI and the landing; diagrams are my own.',
          gallery: [
            { image: 'spine-landing', caption: 'Bilingual landing: the real, unedited output of product why' },
            { image: 'spine-why', caption: 'product why: the chain up to the goal, and where it rests on an assumption' },
            { image: 'spine-guardrails', caption: 'Guard-rails: an agent cannot create outside its contract or accept anything' },
            { image: 'spine-check', caption: 'product check: every finding with rule, file, line and a suggested fix' },
            { image: 'spine-arquitectura', caption: 'Three-layer architecture: intelligence, determinism and truth' },
            { image: 'spine-agentes', caption: 'Four agents that communicate only through the workspace' },
          ],
          detail: {
            intro:
              'Coding agents already write software with great precision, but they don’t know why it should exist. Product reasoning stays in documents nobody reads and is lost as soon as work reaches the repository: they build the wrong thing, very fast.',
            sections: [
              {
                title: 'The problem',
                body: 'Whether a product document is “good” is subjective, but traceability can be checked by a program. That makes it possible to turn it into a CI rule.',
                points: [
                  'v0.1 user: the solo product engineer, who decides what to build and also builds it from the terminal with an agent.',
                  'Pain: “I decided this three weeks ago and can’t reconstruct why”, “my agent built exactly what I asked, and it was the wrong thing”.',
                  'These needs are marked as hypotheses without evidence: validating them with 5 to 10 users is the next step.',
                ],
              },
              {
                title: 'Architecture',
                body: 'Three layers: intelligence is portable, determinism lives in code and truth lives in git.',
                points: [
                  'The CLI never calls a model: no API keys, inference cost or lock-in. An architecture test forbids network and LLM SDK imports.',
                  'Agents never call each other: they coordinate through the workspace, blackboard-style, with no orchestrator.',
                  'A core of pure modules (parse → schema → graph → rules → query → render) and a single module that writes nodes.',
                  'One Markdown file with YAML frontmatter per node. No database, server or cache.',
                ],
              },
              {
                title: 'Data model',
                body: 'A graph of 11 node kinds, from objective to task, with epistemic honesty as a data type.',
                points: [
                  'Every node is a fact, hypothesis, assumption, decision or open_question; declaring a fact without evidence is an error (E007).',
                  'Edges are typed by a matrix and stored only upwards, so creating a child never touches its parent or causes merge conflicts.',
                  'Permanent KIND-NNN IDs that are never reused; nodes are not deleted, they move to dropped or superseded.',
                  '15 rules with a suggested fix, and a dedicated exit code (4) for “rejected by a guard-rail”, distinct from “the graph has errors”.',
                ],
              },
              {
                title: 'Agents with limits',
                body: 'Four agents (discovery, manager, analyst and critic), each with a contract for what it may create.',
                points: [
                  'An agent cannot create kinds outside its contract, orphan nodes or facts without evidence.',
                  'Nor can it modify what a human accepted, or accept anything: only a human decides what is real.',
                  'Honest about limits: 17 prohibitions are enforced by the CLI and 16 depend on the prompt, and the tool says which is which.',
                ],
              },
              {
                title: 'Quality and adversarial evals',
                body: '77 architecture, contract and performance tests, plus 7 scenarios that try to make the agents cheat.',
                points: [
                  'Fabricated research, hidden instructions, overproduction pressure, unmeasurable KPIs: all PASS.',
                  'Two scenarios found real gaps, which became a new contract rule and a fix to self-reporting.',
                  'Method lesson: score every run against the files on disk, never against what the agent says it did.',
                ],
              },
              {
                title: 'Metrics and decisions',
                body: 'North star: maintenance ratio, nodes edited in week 2+ over nodes at the end of week 1, with a target > 0.3.',
                points: [
                  'Generating is easy; maintaining is the hypothesis. If the ratio stays near zero, the plan is to shrink the tool, not add features.',
                  'Anti-metrics: stars, downloads and generated artifacts. Zero telemetry.',
                  'TypeScript/Node over Go or Rust: less friction to try it with npx, at the cost of ~50–90 ms of startup.',
                ],
              },
            ],
          },
        },
        {
          title: 'Paga Fácil',
          tag: 'Fintech product',
          role: 'Product Engineer · Payments Platform',
          period: 'Jan 2025 — Mar 2026',
          description:
            'Banco Azteca PWA that lets credit customers pay online without visiting a branch. I led the initiative and a fullstack team of 5 — from discovery to production — and migrated the gateway from Vue 2 to React as a federated microfrontend with PWA configuration.',
          metrics: [
            'A single federated microfrontend, with React and the router shared as singletons.',
            'Four charging flows: acquirer, wallet, gems and initial payment.',
            'End-to-end flow: sign-in → amount → card → address → 3-D Secure → receipt.',
          ],
          stack: ['React', 'TypeScript', 'Module Federation', 'PWA'],
          status: 'In production',
          galleryNote: 'My own recreation of the wallet flow: no branding, fictitious data.',
          gallery: [
            { image: 'pf-monto', caption: 'Choose how much to pay' },
            { image: 'pf-metodo', caption: 'Choose how to pay' },
            { image: 'pf-tarjeta', caption: 'Add a card' },
            { image: 'pf-resumen', caption: 'Review and confirm' },
            { image: 'pf-comprobante', caption: 'Receipt' },
          ],
          detail: {
            diagram: {
              id: 'paga-facil',
              labels: {
                title: 'Paga Fácil flows',
                description: 'Users arrive from a payment link sent over WhatsApp, from the direct Paga Fácil URL, or embedded from digital platforms. The PWA is a single federated microfrontend: it detects the parameters it receives and enters one of four flows — acquirer, wallet with tokenized cards, gem redemption, or initial payment. In all of them the payment is applied to the credit account and the transaction is logged.',
                note: 'My own diagram with generic names; it does not reproduce internal material.',
                link: 'Payment link', linkSub: 'sent over WhatsApp',
                url: 'Direct URL', urlSub: 'the customer comes on their own',
                platforms: 'Digital platforms', platformsSub: 'embedded, with parameters',
                pwa: 'PWA · Paga Fácil', pwaSub: 'a single microfrontend', pwaSub2: 'Module Federation',
                router: 'Detects the flow', routerSub: 'from the parameters',
                acquirer: 'Acquirer', acquirerSub: 'standard flow: card + 3-D Secure',
                wallet: 'Wallet', walletSub: "user's tokenized cards",
                gems: 'Gems', gemsSub: 'redemption as a discount',
                initial: 'Initial payment', initialSub: 'down payment when opening credit',
                apply: 'Payment applied to the credit', applySub: "the customer's balance is updated", applySub2: 'every transaction is logged',
                receipt: 'receipt',
              },
            },
            sections: [
              {
                title: 'My role',
                body: 'It combined leadership, product and engineering: I led the initiative and a fullstack team of 5, managed the project end to end and built features myself.',
                points: [
                  'Running the team: roadmap, backlog and Scrum; task assignment, progress reviews and code reviews.',
                  'Hands-on development: new features in the PWA and changes on the monolith.',
                  'Discovery with business and operations to understand what was holding digital payments back before committing to screens.',
                  'Backlog and roadmap for the initiative, prioritized by impact on collections and user value rather than by order of arrival.',
                  'What to migrate, what to keep and which changes did not justify their cost: the trade-offs between product, technical complexity and timelines.',
                  'I identified operational risks from the start: in a payment gateway, an error directly affects a customer’s money.',
                  'Although my focus was frontend, I worked on API contracts, database validation and deployments to lead delivery with full context.',
                  'The full cycle: problem → discovery → prioritization → technical decision → implementation → delivery → production → follow-up.',
                ],
              },
              {
                title: 'How it is built',
                body: 'The gateway was written in Vue 2; I migrated it to React as a single federated microfrontend built with Webpack Module Federation, with React and the router shared as singletons and PWA configuration. It orchestrates no remotes: it is the piece other platforms load.',
                points: [
                  'It opens from a WhatsApp payment link, from its direct URL, or embedded by digital platforms.',
                  'From the incoming parameters it resolves which of the four charging flows to enter.',
                  'React with Module Federation, for ecosystem maturity and to align it with the rest of the platform.',
                  'PWA performance: code splitting, lazy loading and caching, so the gateway opens fast even on a modest phone over mobile data.',
                  'The migration also changed where it runs: from on-premise infrastructure to AWS.',
                  'In my analysis I proposed splitting it into four domains — identity, flow, transaction and receipt — deployable separately; that stayed a proposal, not what shipped.',
                ],
              },
              {
                title: 'End-to-end payment flow',
                body: 'I modeled it in BPM, flow and sequence diagrams before it was built.',
                points: [
                  'The user signs in with their credentials and lands on choosing how much to pay.',
                  'Four amount options: required, suggested, full payoff, or a custom amount typed in.',
                  'Contact details — email and phone — and card entry: number, holder, expiry and CVV.',
                  'Full billing address — street, city, state and postal code — before the charge is processed.',
                  'If the card requires it, 3-D Secure with a verification code; otherwise the charge goes straight through.',
                  'Receipt with the amount paid and the option to download it.',
                ],
              },
              {
                title: 'Charging flows',
                body: 'The gateway had more than one path: it resolved a different flow depending on how the user arrived and what data came with them.',
                points: [
                  'Acquirer: the standard flow, with card capture and 3-D Secure validation.',
                  'Wallet: the user pays with already tokenized cards and only confirms the order.',
                  'Gems: the gamification redemption is validated and applied as a discount before charging.',
                  'Initial payment: the down payment made when opening the credit line.',
                  'Every transaction is logged.',
                ],
              },
              {
                title: 'Quality and security',
                body: 'The migration plan gave certification, security and quality their own phases instead of a final step.',
                points: [
                  'I implemented a per-attempt idempotency key: if the user retries, double-taps or the network duplicates the request, the same key resolves to a single payment.',
                  'If the network drops mid-transaction, the app checks the attempt status and retries with that same key, instead of leaving the user with an ambiguous error.',
                  'That attempt identifier travels from the frontend to the payment service, so a single charge can be followed end to end.',
                  'Unit, integration and end-to-end tests.',
                  'Static analysis with SonarQube and security scanning with Checkmarx.',
                  'CI/CD so the gateway ships without waiting on the host system release train.',
                ],
              },              {
                title: 'What I would do differently today',
                body: 'I would revisit an architecture decision.',
                points: [
                  'Module Federation was chosen partly because of its adoption at the time. Today I’d compare alternatives first: a modern PWA doesn’t necessarily need federation, and the choice should follow the problem.',
                  'I would spend more time truly understanding the architecture — of the host system and of the product itself — before choosing what to build it with.',
                ],
              },
            ],
          },
        },
        {
          title: 'Regional System',
          tag: 'Internal platform · Microfrontends',
          role: 'Software Engineer · Regional Credit & Collections',
          period: 'Oct 2022 — Jan 2025, in two stints',
          description:
            'An internal credit and collections platform running alongside a legacy system. I built the frontend core — the shared base the microfrontends consume at runtime with Module Federation — and three of its modules: user administration, customer credit information and portfolio by customer.',
          metrics: [
            'Shared core: layout, login, theme and components the modules consume.',
            'Three modules I developed: users, credit information and portfolio.',
            'Portfolio navigable in three levels: manager → customer → order.',
            'Base template for new microfrontends upgraded to React 19.',
          ],
          stack: ['React', 'Module Federation', 'Jest', 'Jenkins'],
          internal: true,
          galleryVariant: 'desktop',
          galleryNote: 'My own recreation of the screens: no branding, fictitious data.',
          gallery: [
            { image: 'portafolio', caption: 'Portfolio · manager level' },
            { image: 'portafolio-clientes', caption: 'Portfolio · manager book' },
            { image: 'portafolio-pedidos', caption: 'Portfolio · customer orders' },
            { image: 'usuarios', caption: 'User administration' },
            { image: 'usuarios-cambio', caption: 'Employee replacement' },
            { image: 'usuarios-resultado', caption: 'Operation result' },
            { image: 'informacion-crediticia', caption: 'Customer credit information' },
          ],
          detail: {
            intro:
              'The work centred on wiring business flows into the interface, reusing components across the modules I owned, and fitting the new views into the existing operation.',
            diagram: {
              id: 'sistema-regional',
              labels: {
                title: 'Regional System architecture',
                description: 'The core is the shared base: it publishes layout, login, theme, styles and a component library, and each microfrontend consumes it at runtime with Module Federation. Three of those modules — portfolio by customer, customer credit information and user administration — are my own work; the applications module belongs to the system. Modules call domain APIs, are served per path through Ingress, and appear embedded in an iframe inside the legacy system.',
                note: 'My own diagram with generic names; it does not reproduce internal material.',
                shell: 'Core · shared base', shellSub: 'layout, login, theme, components', shellSub2: 'Module Federation',
                provides: 'provides',
                legacy: 'Legacy system', legacySub: 'shows the modules',
                iframe: 'iframe',
                remotes: 'Microfrontends', remotesSub: 'independent remotes',
                portfolio: 'Portfolio by customer', credit: 'Credit information', users: 'User administration', applications: 'Applications',
                mine: 'my own work', context: 'system context',
                apis: 'Domain APIs', apisSub: 'credit and collections',
                ingress: 'Ingress', ingressSub: 'one path per module', ingressSub2: 'infrastructure, outside my scope',
                routes: 'routes',
              },
            },
            sections: [
              {
                title: 'Context',
                body: 'The platform was being built module by module while the previous system stayed in operation.',
                points: [
                  'It was used by collections agents, supervisors and the teams responsible for staff administration.',
                  'New modules had to fit into the existing operation without replacing the whole system at once.',
                  'Each module was its own domain and could evolve independently.',
                ],
              },
              {
                title: 'My contribution',
                body: 'I built the frontend core and three microfrontends. The applications module was part of the platform but not part of my work; I did not work on the backend or the infrastructure either.',
                points: [
                  'Core: the shared base the microfrontends consume — layout, login, theme, styles and component library — published with Module Federation.',
                  'User administration: onboarding, offboarding and staff changes, validating positions and available vacancies.',
                  'Customer credit information: basic data, credit line status, payment capacity, and order and application history.',
                  'Portfolio by customer: walking the book through three levels of context, manager → customer → order.',
                  'I upgraded the base template used to start new microfrontends to React 19.',
                ],
              },
              {
                title: 'From business flows to the interface',
                body: 'Much of the work was turning operational processes into interactions that move a lot of information without losing context.',
                points: [
                  'The book is walked from the manager to their customers and from there to each customer\'s orders.',
                  'Balance, arrears, late fees and required-payment totals follow the level being viewed.',
                  'Staff onboarding, offboarding and changes validate the available positions first.',
                  'The credit view concentrates customer, address, credit, payment capacity and history in one place.',
                  'Which features are visible adapts to the permissions of the role signing in.',
                ],
              },
              {
                title: 'Architecture',
                body: 'The core does not orchestrate or mount applications: it is a remote that publishes the visual base and common components, and each microfrontend consumes them at runtime with Webpack Module Federation.',
                points: [
                  'Updating a shared element does not mean copying code between repositories or rebuilding every consuming application.',
                  'React is shared as a singleton to avoid duplicate runtimes and hook errors.',
                  'State stays isolated inside each microfrontend.',
                  'In user administration I used Context for the cross-cutting parts — catalogs and filters several screens share; each view\'s own state stays local.',
                  'Modules are embedded in an iframe inside the legacy system, which provides the context to start the query; in the portfolio module, the response back to the container goes through postMessage.',
                  'Infrastructure routing to each application was resolved by Ingress, one route per microfrontend. That layer already existed and was not my responsibility.',
                ],
              },
              {
                title: 'Frontend engineering',
                body: 'Keeping applications alive in production asks for more than building the screen.',
                points: [
                  'Performance: code splitting, lazy loading for what is not needed immediately, caching to avoid repeated downloads, render optimization, and control over dependencies shared between microfrontends.',
                  'Resilience: every screen accounts for its states — loading, success, empty and error — so the user knows what is happening when something is slow, has no data, or fails.',
                  'Resilience: also avoiding duplicate requests and inconsistent results when someone switches filters or navigates quickly.',
                  'Security: the interface respects the restrictions of the role and decides what can be shown or run; the effective authorization of each operation stays with the services.',
                  'Observability: modules are wired into the platform tooling, so a problem visible in the interface can be tied to the service calls behind it and diagnosis stops being guesswork.',
                ],
              },
              {
                title: 'Quality and delivery',
                body: 'The CI/CD pipeline already existed on the platform; my responsibility was to integrate my modules and meet its gates. I did not design the pipeline or the deployment infrastructure.',
                points: [
                  'Tests with Jest and React Testing Library.',
                  'Every change went through tests, static analysis, security scan, build, image and deployment.',
                ],
              },
              {
                title: 'How I would take it to the next stage',
                body: 'The next step is not swapping technologies for newer versions: it is lowering coupling, making the contracts between applications explicit, and turning the frontend into a platform that is easier to evolve and to operate.',
                points: [
                  'Contracts between applications: formalize communication between the legacy system and the microfrontends with typed, versioned contracts validated at runtime, instead of relying on implicit knowledge.',
                  'Independence between modules: review which dependencies are worth sharing at runtime and which to isolate, weighing bundle size, update frequency, compatibility and independent deployment.',
                  'Observability as part of the architecture: one common strategy for errors, performance, navigation and service calls, with correlation identifiers where end-to-end support exists, to reconstruct a whole operation instead of investigating each application on its own.',
                  'Measurable performance: move from isolated optimizations to shared performance budgets — bundle, load time, expensive renders — as pipeline criteria, to catch regressions before production.',
                  'Consistent resilience: standardize loading, empty states, errors, timeouts, retries and connection loss in the core or in common libraries, instead of every team solving the same cases differently.',
                  'Progressive evolution of the legacy: keep the migration incremental, but with clear boundaries that gradually reduce the dependency on the iframe and on postMessage. The goal is not a full rewrite, but being able to replace one domain when there is enough value to justify it.',
                  'Developer experience: turn the template I upgraded to React 19 into a golden path — structure, testing, observability, security, performance and conventions ready from the start — so starting an application does not depend on each developer knowing every architectural decision.',
                ],
              },
            ],
          },
        },
        {
          title: 'Octobile · Internal messaging app',
          tag: 'Product · External vendor',
          status: 'Shipped to production',
          role: 'Product coordination and development',
          period: 'Nov 2021 — Oct 2022',
          description:
            'An internal messaging app with web and mobile versions. An external vendor built most of the product; I owned the roadmap, coordinated that team and contributed to development.',
          metrics: [
            'Coordinated the external development team from concept to production.',
            'Set up internationalization on the web version and wrote the copy in Spanish and English.',
            'Left the manuals and checklists every delivery was tested against.',
          ],
          stack: ['React', 'React Native', 'i18n', 'QA'],
          galleryNote: 'Screens from the manual and the test runs, with sample data; the button exploration is my own recreation, unbranded.',
          gallery: [
            { image: 'octo-onboarding', caption: 'Welcome carousel, four screens' },
            { image: 'octo-perfil', caption: 'Profile setup: empty, filled, welcome' },
            { image: 'octo-boton', caption: 'Recreation of the exploration: the floating button in three positions' },
            { image: 'octo-opciones', caption: 'Recreation: the button closed and expanded, with its five actions' },
            { image: 'octo-registro', caption: 'Sign-up with phone validation' },
            { image: 'octo-password', caption: 'Password suggestions' },
            { image: 'octo-chat', caption: 'Recreation: a conversation with a photo and delivery times' },
          ],
          detail: {
            diagram: {
              id: 'octobile',
              labels: {
                title: 'Octobile at a glance',
                description: 'An internal messaging app for iOS, Android and the web. Sign-up asks for an account, a phone number, a code and a profile, and lets nobody through without three validations. Inside, the app splits into statuses, chats and rooms, and any chat opens five actions: call, video call, camera, files and poll.',
                note: 'My own diagram with generic names.',
                signupTitle: 'Account sign-up',
                signupSub: 'no progress without a free name, accepted terms and a received code',
                account: 'Account name',
                phone: 'Phone',
                code: 'SMS code',
                profile: 'Profile',
                appTitle: 'The application',
                states: 'Statuses', statesSub: 'posts that expire',
                chats: 'Chats', chatsSub: 'direct messages and groups with roles',
                rooms: 'Rooms', roomsSub: 'spaces for several participants',
                actionsTitle: 'From a chat',
                call: 'Call', video: 'Video call', camera: 'Camera',
                files: 'Files', poll: 'Poll',
                platforms: 'iOS · Android · Web',
                platformsSub: 'the same experience on all three, each with its own install manual',
              },
            },
            intro:
              'With development outside the company, the main risk was that what got delivered wouldn’t match what was needed. My job was to close that gap with acceptance criteria, testing and documentation.',
            sections: [
              {
                title: 'My role',
                body: 'Owning the product and acting as the bridge between the business and an external development team.',
                points: [
                  'Roadmap, backlog and user stories for the application, from concept to production.',
                  'Flows, diagrams and acceptance criteria, so ambiguity got resolved before coding rather than at review.',
                  'Ran testing and bug review with the external team.',
                ],
              },
              {
                title: 'What I built',
                body: 'Beyond writing specs, I also developed alongside the external team.',
                points: [
                  'Maintenance and new components inside the React Native app.',
                  'Internationalization on the web version with react-i18next: a namespace per component, en.js and es.js files, browser language detection and a fallback language.',
                  'The product copy in both languages, which is the work that forces every string out of the code.',
                ],
              },
              {
                title: 'How it was tested',
                body: 'Every delivery went through a per-interface checklist rather than a look-over.',
                points: [
                  'A checklist feature by feature, with an explicit state: works, does not work, static placeholder, or new feature.',
                  'A test plan of my own for the mobile version on iOS and Android.',
                  'Every document recording who wrote it and who reviewed it, so review always came from someone else.',
                  'Bug tracking with reports, so every issue found could be followed up.',
                ],
              },
              {
                title: 'What I left in writing',
                body: 'Documentation was part of the deliverable, not an extra at the end.',
                points: [
                  'Manuals to run the application on Windows, macOS and mobile devices, so a new teammate did not depend on someone having time to explain it.',
                  'A translations manual so anyone could add a screen without breaking the language structure.',
                  'Guidelines for naming, dark mode and image formats, to keep deliveries consistent.',
                ],
              },
            ],
          },
        },
        {
          title: 'Aura Clash',
          tag: 'Own product · Playable prototype',
          status: 'Playable prototype · Stage 1',
          role: 'Product, design and engineering, end to end',
          period: 'Sep 2026',
          description:
            'A browser fighting game inspired by the viral "aura battles" — two people face off with exaggerated poses and gestures, and the crowd decides who has more presence — translated into a duel with objective rules: closing your fist charges energy, opening your hand releases it. The gesture is recognized on your own device, camera optional, and two people can duel by link or QR over WebRTC with no server of my own.',
          metrics: [
            'Deterministic combat at 60 ticks/s, with the same action layer for camera, keyboard and on-screen buttons.',
            'Remote duels over lockstep with input delay derived from RTT, verified by a state hash every 120 ticks.',
            'On-device gesture recognition with MediaPipe: no video ever leaves the browser.',
            'Cultural research into the phenomenon documented with sources and corrections to early assumptions, before a single mechanic was designed.',
          ],
          stack: ['TypeScript', 'Vite', 'Canvas 2D', 'MediaPipe Tasks Vision', 'WebRTC · PeerJS', 'Vitest'],
          galleryVariant: 'desktop',
          galleryNote: 'Screens of the real prototype, captured with Playwright against the running game, unedited.',
          gallery: [
            { image: 'ac-bienvenida', caption: 'Welcome: the pitch in one line, no sign-up first' },
            { image: 'ac-crear', caption: 'Create your fighter: alias, avatar and aura — all cosmetic' },
            { image: 'ac-control', caption: 'Camera, keyboard or buttons: the same action layer for all three' },
            { image: 'ac-remate', caption: 'A hit landing — damage, interruption and live combat text' },
            { image: 'ac-despertar', caption: 'Both fighters with their special ready: the duel’s tensest moment' },
            { image: 'ac-resultado', caption: 'Results screen with a breakdown of why each point of damage was taken' },
          ],
          detail: {
            intro:
              'The fantasy is simple: your hand is the controller. Closing your fist charges energy, opening it fires. The hard part was making that fantasy work without a camera as well as with one, and translating the project’s real cultural origin — an actual viral phenomenon, not a generic anime aesthetic — honestly instead of watering it down into a product that claims inspiration without understanding it.',
            sections: [
              {
                title: 'The phenomenon and the product translation',
                body: '"Farming aura" is internet slang for racking up invisible presence points by doing something that looks impressive while staying calm; aura battles took that to the street: two people stand in the middle of a crowd and the crowd decides who has more aura.',
                points: [
                  'The original is judged by the crowd’s reaction to a free-form performance, with no single rulebook across events.',
                  'Aura Clash doesn’t pretend to be the in-person battle: it turns the same language — a small gesture that unleashes something big — into a duel with objective rules, which is what a prototype with no real audience can actually judge fairly.',
                  'The experimental Aura Showcase mode, with performance rounds scored on rhythm and variety, is the piece that does get closer to the original judged-performance format.',
                  'Anime gestures that inspired the design (Naruto’s hand seals, Jujutsu Kaisen’s domain-expansion signs, the Kamehameha) were taken as a generic pattern — charge and release, a unique gesture for an ultimate — never copied as a specific character’s sign, name or effect.',
                ],
              },
              {
                title: 'Architecture: rules kept separate from the senses',
                body: 'The combat simulation runs at 60 ticks per second on deterministic arithmetic; Canvas 2D rendering runs at whatever rate the browser gives it.',
                points: [
                  'Camera, keyboard and on-screen buttons all resolve against the same action layer: combat never knows where an action came from, only that it arrived.',
                  'That separation is what lets a bot play by the exact same rules as a human, and what lets two remote devices stay in sync without resending the full state every frame.',
                ],
              },
              {
                title: 'On-device gesture recognition',
                body: 'MediaPipe runs in the browser and only outputs hand landmarks; video never leaves the device.',
                points: [
                  'Battles track one hand and nothing else — a deliberate privacy and compute-budget decision.',
                  'The lab’s face and body gestures are measured against the player’s own neutral face, calibrated in about a second — not against a generic expression model, and without inferring identity or emotion.',
                  'Every gesture has an exact keyboard or touch-button equivalent: no mechanic depends on the camera alone.',
                ],
              },
              {
                title: 'Networking: deterministic lockstep with no server of my own',
                body: 'The product decision was to not run a match server yet; the engineering decision that makes that possible is lockstep with input delay.',
                points: [
                  'Both devices run the same simulation and exchange only an action mask per tick, never positions or health; the delay is derived from measured RTT instead of being fixed.',
                  'Every 120 ticks both sides compare a state hash; a mismatch annuls the match instead of risking a diverging result.',
                  'A real bug found along the way: when two attacks landed on the same tick, a fixed resolution order meant being host or guest wasn’t neutral. Fixed and verified with 300 scripted duels played both ways round, requiring mirrored results.',
                ],
              },
              {
                title: 'Quality, offline and responsive',
                body: 'Close to 96 tests cover bot balance, the simulation itself, and the network under simulated adverse conditions.',
                points: [
                  'The app is installable and works offline after the first visit, via a service worker with a different caching strategy per resource type.',
                  'Narrow-screen layout bugs weren’t eyeballed: real bounding boxes were measured at several widths before touching the CSS.',
                ],
              },
              {
                title: 'What’s missing',
                body: 'This is a playable prototype, not a finished product, and the interface itself says so.',
                points: [
                  'With no match server there is no possible ranking; rooms are casual by design and have no protection against a modified client.',
                  'There is no TURN server: two devices on restrictive networks may simply fail to connect. Only tested end to end between tabs on one browser and over the real public broker.',
                  'The lab’s face and body recognition has only been tested with synthetic data, never against a real face or body.',
                ],
              },
            ],
          },
          figures: [
            { value: '60', label: 'combat ticks/s' },
            { value: '96', label: 'automated tests' },
          ],
        },
      ],
    },
    stack: {
      eyebrow: 'Toolbox',
      title: '*Tools* I work with',
      description:
        'What I use for discovery, development, AI automation and delivery.',
      categories: ['Product', 'AI', 'Data', 'Engineering', 'Delivery'],
    },
    personal: {
      eyebrow: 'Beyond the code',
      title: 'What I *see* and what I hear',
      description: 'Photos I take when I travel and the playlist that plays while I work.',
      galleryLabel: 'Travel photos',
      deckRole: 'photo stack',
      photoAlt: 'Travel photo taken by Eddie',
      openPhoto: 'View larger: photo',
      previousPhoto: 'Previous photo',
      nextPhoto: 'Next photo',
      dragHint: 'Drag the photo to see the next one',
      viewerTitle: 'Travel photos',
      pinterestCta: 'See the board on Pinterest',
      playlistEyebrow: 'Playlist',
      playlistName: 'COMPILE & CHILL',
      playlistNote: 'For focus when the code needs calm.',
      play: 'Play',
      pause: 'Pause',
      loadingPlayer: 'Loading the player',
      nowPlaying: 'Playing',
      paused: 'Paused',
      openSpotify: 'Open in Spotify',
      playerTitle: 'Spotify player: COMPILE & CHILL',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Want to work *together*?',
      description:
        "I'm open to Software Engineer, Product Engineer and technical leadership roles in fintech, payments and AI products. If you think I'd be a fit, let's talk.",
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
        error: "Couldn't send. Please try again.",
      },
    },
    footer: 'Eddie Elorza Ruiz · Software Engineer · Product Builder · Fintech & AI',
    languageLabel: 'Language',
    themeLabel: 'Color',
    mode: {
      toDark: 'Switch to dark mode',
      toLight: 'Switch to light mode',
    },
    theme: {
      tooltip: 'Drag · Click color',
      mobileHint: 'Hold and drag',
    },
    a11y: {
      skip: 'Skip to content',
      close: 'Close',
      openColors: 'Open color picker',
      closeColors: 'Close color picker',
      primaryNav: 'Primary navigation',
      sectionsNav: 'Sections',
    },
  },
};
