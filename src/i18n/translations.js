export const translations = {
  es: {
    nav: {
      about: 'Sobre mí',
      experience: 'Experiencia',
      product: 'Producto',
      education: 'Estudios',
      projects: 'Proyectos',
      stack: 'Stack',
      contact: 'Contacto',
      cta: 'Hablemos',
    },
    hero: {
      badge: 'Product Engineer · Arquitectura frontend · IA y transformación digital',
      // Non-breaking space keeps 'para' with 'producto' on 375px phones.
      title1: 'Construyo producto\u00a0para',
      titleHighlight: 'pagos a escala',
      rotatingWords: [
        'pagos a escala',
        'operación financiera',
        'automatización',
        'equipos comerciales',
      ],
      title2: 'del discovery a producción.',
      subtitle:
        '6+ años entre fintech, pagos y operación. Entiendo el problema de negocio, lo traduzco en decisiones técnicas y lo llevo a producción — aplicando IA cuando aporta valor, y evitando complejidad cuando una solución determinística es suficiente.',
      chips: ['MSc IA Aplicada', 'PSPO I', 'Fintech', 'IA y automatización'],
      ctaProjects: 'Ver iniciativas',
      ctaContact: 'Hablemos',
      avatarLabel: 'El que construye el producto',
      photoLabel: 'El que lidera la ejecución',
    },
    about: {
      eyebrow: 'Sobre mí',
      title: 'Producto e ingeniería, en partes iguales.',
      p1: '6+ años construyendo producto en fintech, pagos y operación. En Paga Fácil lideré a un equipo fullstack de 5 personas —roadmap, backlog, Scrum, asignación de actividades y code reviews— sin dejar de desarrollar.',
      p2: 'Trabajo en la intersección entre producto e ingeniería: traduzco necesidades de negocio en decisiones técnicas, prioridades de roadmap y entregas medibles. Colaboro cerca de operaciones, vendors y stakeholders.',
      p3: 'MSc en Inteligencia Artificial Aplicada y PSPO I. Aplico IA y automatización para reducir esfuerzo operativo y mejorar la toma de decisiones.',
      tags: ['Product Engineering', 'Fintech y pagos', 'IA y automatización', 'PSPO I · MSc IA'],
    },
    experience: {
      eyebrow: 'Experiencia',
      title: 'Producto e ingeniería, en la misma trayectoria',
      description:
        'Más de seis años alternando los dos lados del mismo problema: construir el sistema y decidir qué se construye. Cada rol lleva la etiqueta de desde dónde trabajé, producto o ingeniería.',
      trackLabels: { prod: 'Producto', ing: 'Ingeniería' },
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
            'Producto de crédito y pagos con el equipo repartido entre México y China. Entro desde el análisis de sistema, así que la especificación se acuerda antes de que alguien escriba la pantalla.',
          impact: [
            'Llevo el frontend desde el análisis de sistema hasta la entrega, y traduzco los requerimientos de producto y diseño a especificaciones técnicas antes de que se escriba código.',
            'Construyo el Back Office de crédito como microfrontend con React, TypeScript, Umi Max, Ant Design Pro y qiankun; cubre originación y servicing.',
            'Defino contratos de API tipados con adapters y mocks, así el frontend avanza aunque el backend o el ambiente todavía no estén listos.',
            'Uso Jest, Testing Library y Playwright, con test points y cobertura como criterio de entrega.',
            'Diagnostico los fallos de integración entre host, microfrontends y backend: dependencias compartidas, runtime de React duplicado y contratos que cambiaron sin avisar.',
            'Automatizo con agentes de IA la verificación de arquitectura y documentación, para que las inconsistencias aparezcan antes de la entrega.',
          ],
          tags: ['React', 'TypeScript', 'Microfrontends', 'Playwright'],
        },
        {
          company: 'Operadora SI · CRM hotelero',
          role: 'Producto end-to-end · Discovery, diseño, desarrollo y operación',
          period: 'May 2026 — Actualidad',
          track: ['prod', 'ing'],
          summary:
            'Producto propio de punta a punta con el cliente: hago el discovery, lo construyo, lo opero y atiendo sus tickets. En producción desde el 6 de septiembre de 2026 con 10 hoteles y 16 personas.',
          impact: [
            'El discovery cambió el encargo: pedían pantallas y el problema era que dirección no sabía si el equipo salía a la calle.',
            'Justifiqué construir a la medida frente a HubSpot o Salesforce, porque diez hoteles con cartera propia, y una misma marca trabajada por varios, no caben en un CRM genérico.',
            'Los permisos viven en la base, con RLS de Postgres, y una suite automática los revisa en cada cambio: nadie lee la cartera de otro hotel, ni armando la consulta a mano.',
            '354 pull requests y 175 migraciones de base de datos; nada entra a producción sin revisión de tipos, reglas de acceso y build.',
            'Pospuse la IA generativa a la fase 2 con una hipótesis explícita, que aporta valor solo con histórico suficiente, y dejé lista la arquitectura de datos.',
          ],
          tags: ['Discovery', 'MVP', 'Build-vs-buy', 'Supabase (RLS)'],
        },
        {
          company: 'Banco Azteca · Paga Fácil',
          role: 'Product Engineer · Plataforma de Pagos',
          period: 'Ene 2025 — Mar 2026',
          track: ['prod', 'ing'],
          summary:
            'La pasarela con la que un cliente de crédito paga en línea, dentro de una plataforma de ~6M de transacciones diarias. Lideré la iniciativa y a un equipo fullstack de 5 personas, del discovery a producción.',
          impact: [
            'Migré la pasarela de Vue 2 a React como microfrontend federado con configuración de PWA, y con esa migración salió de on-premise a AWS.',
            'Modelé el flujo de pago end-to-end en diagramas BPM y de secuencia antes de construirlo, con sus cuatro flujos de cobro: adquirente, billetera, gemas y pago inicial.',
            'Gestioné el proyecto completo: roadmap, backlog, Scrum, asignación de actividades, revisión de avance y code reviews, sin dejar de desarrollar features nuevas y sobre el monolito.',
            'Implementé la clave de idempotencia por intento de pago, así un reintento, un doble toque o una red caída no terminan en dos abonos al mismo crédito.',
            'Prioricé el backlog por impacto en el cobro y sostuve los trade-offs frente a negocio, operación e ingeniería.',
            'En el área de Abonos, fuera del producto, automaticé la resolución de incidencias: 500+ al día y ~6h → ~2h por ciclo (estimación operativa).',
          ],
          tags: ['Liderazgo', 'Pagos', 'Microfrontends', 'Automatización'],
        },
        {
          company: 'Banco Azteca · Sistema Regional',
          role: 'Software Engineer · Crédito y Cobranza Regional (segunda etapa)',
          period: 'Dic 2023 — Ene 2025',
          track: ['ing'],
          summary:
            'Volví a la plataforma a construir los módulos encima del core que yo mismo había levantado en la primera etapa.',
          impact: [
            'Entregué los tres módulos en orden: portafolio por cliente, información crediticia del cliente y administración de usuarios.',
            'El portafolio dejó la cartera navegable en tres niveles, gestor → cliente → pedido, con los totales de saldo y atraso siguiendo al nivel que se estuviera consultando.',
            'Trabajé de la mano de un backend: primero entendíamos el contrato, yo montaba mocks contra él y seguía construyendo mientras llegaba la integración real de las APIs.',
            'En administración de usuarios usé Context para lo transversal, catálogos y filtros que comparten varias pantallas; el estado de cada vista se quedó local.',
            'Sostuve el core como base común (layout, login, tema y biblioteca de componentes) que los microfrontends consumen en tiempo de ejecución con Module Federation.',
            'Actualicé a React 19 la plantilla base con la que arrancan los microfrontends nuevos.',
            'Escribí pruebas con Jest y React Testing Library, e integré mis módulos a los controles del pipeline: tipos, análisis estático, escaneo de seguridad y despliegue.',
          ],
          tags: ['React', 'Module Federation', 'Testing', 'CI/CD'],
        },
        {
          company: 'IDS Comercial',
          role: 'Fullstack Engineer · Servicios financieros',
          period: 'Abr 2023 — Dic 2023',
          track: ['ing'],
          summary:
            'Aplicaciones empresariales para proyectos de pensiones y banca. Entré a construir y acabé coordinando el frente de frontend.',
          impact: [
            'Definí la arquitectura de frontend e implementé soluciones escalables con React, Java e integraciones por API.',
            'Coordiné el día a día del frontend: prioridades, discusiones técnicas y lo que tuviera trabado al equipo.',
            'Participé en producto: análisis de requerimientos, historias de usuario, backlog y definición de roadmap.',
            'Subí el rendimiento de la aplicación con optimización de código y buenas prácticas de frontend, verificado con monitoreo.',
            'Implementé prácticas de observabilidad para detectar las incidencias antes de que las reportara el usuario.',
          ],
          tags: ['React', 'Java', 'Observabilidad', 'Agile'],
        },
        {
          company: 'Banco Azteca · Sistema Regional',
          role: 'Software Engineer · Crédito y Cobranza Regional (primera etapa)',
          period: 'Oct 2022 — Abr 2023',
          track: ['ing'],
          summary:
            'La primera fase del proyecto: mantener vivo el monolito de crédito y cobranza mientras documentaba y construía encima la arquitectura que iba a reemplazarlo.',
          impact: [
            'Daba mantenimiento al sistema heredado en JSP, jQuery y AJAX, y en paralelo levanté la arquitectura de microfrontends que lo iba a suceder.',
            'Mapeé los diagramas y los contratos entre aplicaciones, maqueté las pantallas y armé la UI de esa primera fase.',
            'Construí el core frontend, la base común que publica layout, login, tema, estilos y componentes con Module Federation para que cada módulo los consuma en tiempo de ejecución.',
            'Cada entrega pasaba por la certificación interna del grupo, que revisa vulnerabilidades del repositorio, arquitectura y observabilidad.',
            'Los módulos se mostraban embebidos en iframe dentro del sistema heredado, y la respuesta hacia el contenedor viajaba por postMessage.',
            'Implementé testing y CI/CD para bajar el riesgo de cada release.',
          ],
          tags: ['JSP → React', 'Module Federation', 'Arquitectura', 'Jest'],
        },
        {
          company: 'MRCI',
          role: 'Product & Software Engineer · Product Owner de facto',
          period: 'Nov 2021 — Oct 2022',
          track: ['prod', 'ing'],
          summary:
            'Una empresa externa desarrollaba la mayor parte de Octobile, la app interna de mensajería, así que tomé los dos sombreros a la vez: coordinar a ese equipo y meter mano en el código.',
          impact: [
            'Llevé el roadmap, el backlog y las historias de usuario, y coordiné al equipo externo de concepto a producción.',
            'Definí flujos, diagramas y criterios de aceptación; gestioné testing y revisión de bugs como puente entre negocio y los desarrolladores externos.',
            'Di mantenimiento y construí componentes dentro de la app en React Native.',
            'Monté la internacionalización de la versión web con react-i18next (un espacio de nombres por componente, archivos en.js y es.js, detección de idioma y fallback) y escribí los copys en español e inglés.',
            'Construí e-commerce con foco en rendimiento, accesibilidad y UX, integrando APIs REST y componentes reutilizables.',
            'Trabajé con el cliente para definir alcance y acompañé el ciclo completo: requerimientos, desarrollo, pruebas, releases y soporte.',
          ],
          tags: ['Product Ownership', 'Roadmap', 'React Native', 'i18n'],
        },
        {
          company: 'Lapbytes',
          role: 'Web Developer',
          period: 'Ene 2020 — Nov 2021',
          track: ['ing'],
          summary:
            'Mis primeros años entregando plataformas web y de e-commerce para clientes de industrias distintas, tratando con ellos de los requerimientos a la entrega.',
          impact: [
            'Construí y mantuve ~6 plataformas web y de e-commerce con HTML, CSS, JavaScript y WordPress.',
            'Traduje necesidades de negocio en soluciones digitales, tratando directo con el cliente.',
            'Llevé varios proyectos en paralelo y entregué a tiempo los que se traslapaban.',
          ],
          tags: ['JavaScript', 'CSS', 'E-commerce', 'Clientes'],
        },
      ],
    },
    product: {
      eyebrow: 'Product OS',
      title: 'Mi forma de construir producto',
      description:
        'Una forma de convertir retos fintech, IA y operación en productos escalables con impacto de negocio.',
      relatedLabel: 'Capacidades relacionadas',
      closeLabel: 'Cerrar',
      categories: {
        core: 'Núcleo',
        strategic: 'Estratégica',
        'ai-enabled': 'Con IA',
        execution: 'Ejecución',
      },
      craft: {
        title: 'El estándar que aplico en cada proyecto',
        note: 'Cada punto con el ejemplo concreto de dónde lo apliqué.',
        items: [
          {
            k: 'Arquitectura',
            v: 'Core compartido y microfrontends federados que se despliegan por separado — y criterio para no separar cuando no hace falta.',
          },
          {
            k: 'Rendimiento',
            v: 'Code splitting, lazy loading y caching en la PWA de pagos; en este mismo sitio, cada sección entra en su propio chunk y las capturas son WebP.',
          },
          {
            k: 'Seguridad',
            v: 'Permisos por fila en Postgres (RLS) verificados en cada cambio; análisis estático y de seguridad como fase propia, no como último paso.',
          },
          {
            k: 'Confiabilidad',
            v: 'Clave de idempotencia por intento de pago: si la red se cae, se consulta el estado del intento y se reintenta con la misma clave — nunca dos abonos.',
          },
          {
            k: 'Observabilidad',
            v: 'Un identificador por intento que va del front al servicio de pagos, más dashboards y KPIs de transacciones y errores en una plataforma de ~6M de operaciones diarias.',
          },
          {
            k: 'Testing',
            v: 'Pruebas unitarias, de integración y end-to-end; en Sistema Regional dejé testing y CI/CD para bajar el riesgo de cada release.',
          },
          {
            k: 'Accesibilidad',
            v: 'Este mismo sitio: foco visible, áreas táctiles de 44 px, contraste AA en los cuatro acentos y respeto a reduced-motion.',
          },
          {
            k: 'DevEx',
            v: 'CI/CD por módulo: cada equipo despliega sin esperar al calendario del sistema que lo aloja.',
          },
          {
            k: 'Delivery',
            v: 'Del discovery a producción: secuencié el MVP del CRM para validar el flujo crítico antes de invertir en lo secundario.',
          },
          {
            k: 'Product Analytics',
            v: 'Métricas que no engañan: el podio ordena por porcentaje de la meta propia y el pipeline se mide en oportunidades, no en pesos.',
          },
        ],
      },
      items: [
        {
          id: 'payments',
          title: 'Pagos & Fintech',
          category: 'core',
          content:
            'Construcción y evolución de productos de pago, flujos de checkout y procesos financieros en entornos de alto volumen.',
          related: ['discovery', 'prioritization', 'delivery'],
        },
        {
          id: 'discovery',
          title: 'Product Discovery',
          category: 'strategic',
          content:
            'Conversión de dolores operativos, necesidades de usuario y restricciones de negocio en oportunidades de producto validadas.',
          related: ['payments', 'prioritization', 'stakeholders'],
        },
        {
          id: 'prioritization',
          title: 'Priorización & Estrategia',
          category: 'strategic',
          content:
            'Evaluación de trade-offs entre impacto de negocio, esfuerzo técnico, riesgo operativo y valor estratégico.',
          related: ['discovery', 'payments', 'delivery'],
        },
        {
          id: 'ai',
          title: 'Automatización con IA',
          category: 'ai-enabled',
          content:
            'Aplicación de IA y automatización para reducir trabajo manual, mejorar decisiones y escalar procesos operativos.',
          related: ['discovery', 'stakeholders', 'delivery'],
        },
        {
          id: 'stakeholders',
          title: 'Alineación de Stakeholders',
          category: 'execution',
          content:
            'Conexión entre negocio, operación, compliance e ingeniería alrededor de objetivos y prioridades compartidas.',
          related: ['discovery', 'prioritization', 'ai'],
        },
        {
          id: 'delivery',
          title: 'Product Delivery',
          category: 'execution',
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
      viewLabel: 'Ver proyecto',
      noDemoLabel: 'Sistema interno · sin demo pública',
      newTabLabel: 'se abre en una pestaña nueva',
      detail: {
        open: 'Ver detalle',
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
      gallery: {
        open: 'Ampliar pantalla',
        note: 'Capturas con datos ficticios',
        prev: 'Anterior',
        next: 'Siguiente',
        close: 'Cerrar',
      },
      title: 'Iniciativas con impacto real',
      description:
        'Iniciativas donde combiné producto, ingeniería y liderazgo técnico para resolver problemas reales en pagos, crédito, hotelería y restaurantes.',
      items: [
        {
          title: 'Plataforma de inteligencia comercial hotelera',
          tag: 'Producto · Cliente',
          status: 'En producción',
          role: 'Producto end-to-end',
          period: 'May 2026 — Actualidad',
          href: 'https://claude.ai/artifact/1NdBmWQUNSSghuNwdmpTxv',
          linkLabel: 'Ver caso de estudio',
          description:
            'CRM a medida para un grupo hotelero (Operadora SI) que reemplazó un Excel de cumplimiento de visitas. Producto end-to-end —discovery, diseño, desarrollo y operación—, en producción desde septiembre de 2026.',
          metrics: [
            'Discovery: el dolor real era la falta de visibilidad comercial, no las pantallas pedidas — reorientó el roadmap.',
            'Build-vs-buy: justifiqué construir a la medida frente a HubSpot / Salesforce para un proceso comercial multi-hotel.',
            'Permisos por fila en Postgres (RLS), verificados por una suite automática en cada cambio: nadie lee la cartera de otro hotel.',
            'Metas justas: el podio ordena por % de la meta propia y el pipeline se mide en oportunidades, no en pesos.',
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
              'Diez hoteles, cada uno con su cartera y su equipo. El valor no está en guardar datos: está en que dirección vea si el equipo sale a la calle y en que un ejecutivo no pierda una cuenta por olvido.',
            sections: [
              {
                title: 'El problema',
                body: 'La dirección fija metas semanales de visitas efectivas —25 para un ejecutivo, 20 para un gerente— y el Excel registraba el número, pero no la empresa, el contacto ni lo acordado.',
                points: [
                  'Una visita repetida contaba dos veces y una cuenta abandonada no se notaba hasta perderla.',
                  'Capturar una visita tenía que costar menos que anotarla en la hoja: el ejecutivo trabaja de pie, entre citas, desde el teléfono.',
                  'Cada quien debía ver solo su cartera y su equipo; dirección, la respuesta a “¿cumplen?” sin pedirle un reporte a nadie.',
                ],
              },
              {
                title: 'Mi rol',
                body: 'Producto end-to-end con el cliente: discovery, diseño, desarrollo, puesta en producción y operación. Trabajo solo, así que cada decisión de producto es también una decisión técnica.',
                points: [
                  'Discovery: el dolor real era la falta de visibilidad comercial, no las pantallas que pidieron. Eso reorientó el roadmap.',
                  'Build-vs-buy: justifiqué construir a la medida frente a HubSpot o Salesforce para un proceso multi-hotel con cartera por propiedad.',
                  'Secuencié el MVP para validar el flujo crítico —registrar la visita— antes de invertir en lo secundario.',
                  'Dirección reporta fallos y mejoras con tickets dentro del mismo CRM; yo los atiendo y los libero.',
                ],
              },
              {
                title: 'Lo que resuelve',
                body: 'Tres recorridos, en este orden: registrar una visita, saber qué toca hoy, y ver si el equipo cumple.',
                points: [
                  'Cumplimiento: la tabla que vivía en Excel, calculada desde las visitas registradas. Solo cuenta la visita verdadera: cita realizada y capturada el mismo día vale una vez.',
                  'Equipo hoy: a dónde va cada quien, qué seguimientos se vencieron y qué cuentas llevan días paradas.',
                  'Pipeline en tres niveles: por hotel, por persona y tablero por etapa, con el pulso de cada cuenta en la tarjeta.',
                  'Ficha de empresa: próximo paso, decisor y último contacto arriba; el historial con autor real de cada visita abajo.',
                  'Convenios: tarifas corporativas por hotel, con aviso 45 días antes del vencimiento — la renovación se negocia antes, no después.',
                ],
              },
              {
                title: 'Decisiones de producto',
                body: 'Las que cambian cómo se comporta el equipo, no solo cómo se ve la pantalla.',
                points: [
                  'El pipeline se mide en oportunidades, no en pesos: venden convenios de hospedaje, y un monto estimado al inicio engaña más de lo que informa.',
                  'El podio ordena por porcentaje de la meta propia, así un gerente con meta de 20 y un ejecutivo con meta de 25 se miden con la misma vara.',
                  'El ritmo de una cuenta se muestra en color: seis ritmos con nombre sobre nueve semanas de actividad, para ver “a la baja” antes de que se enfríe.',
                  'Lo que un hotel ve de la plaza que otro trabaja de la misma marca está acotado a propósito: etapa, dueño y última actividad, nunca contactos ni tarifas.',
                ],
              },
              {
                title: 'Ingeniería',
                body: 'Es un producto con datos comerciales de un cliente real y una sola persona manteniéndolo: la seguridad y la automatización no son opcionales.',
                points: [
                  'Permisos por fila en Postgres (RLS): un ejecutivo no lee la cartera de otro hotel aunque arme la consulta a mano. Una suite automática revisa esas reglas en cada cambio.',
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
            { value: '16', label: 'personas' },
            { value: '928', label: 'empresas' },
          ],
        },
        {
          title: 'Tastify · SaaS para restaurantes',
          tag: 'Producto propio · SaaS',
          status: 'Listo para piloto',
          role: 'Producto propio, end-to-end',
          period: 'Abr 2026 — Actualidad',
          description:
            'Menú por QR con mesero de IA, carrito compartido por mesa y un panel que recibe cada ronda en vivo. Lo diseñé y lo construí completo: producto, datos, seguridad y operación.',
          metrics: [
            'Tres apps sobre la misma base: comensal, panel del restaurante y landing.',
            'Las reglas viven en Postgres: ningún precio llega desde el navegador.',
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
              'El dinero de una mesa se pierde en los momentos lentos: esperar al mesero para la segunda ronda, dividir la cuenta de cabeza, un PDF que nadie entiende. Tastify se mete ahí, en la mesa, sin reemplazar la caja del restaurante.',
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
                  'El mesero ve el piso, cobra por persona y libera mesas; el dueño ve cuánto vendió y qué empujó la IA.',
                  'El mesero de IA responde con platillos del menú real y ofrece el acompañamiento que sí existe.',
                ],
              },
              {
                title: 'Arquitectura: frontends delgados, reglas en la base',
                body: 'Los frontends solo llevan la llave pública. Quién ve qué, cuánto cuesta una ronda y si un platillo existe lo decide Postgres, con políticas por fila y funciones transaccionales.',
                points: [
                  'Las órdenes solo nacen dentro de submit_order, que recalcula precio, extras y disponibilidad en una transacción: editar la petición en el navegador no te hace pagar menos.',
                  'El QR es un token opaco. Cambiar un número en la URL no te sienta en otra mesa.',
                  'El comensal entra con autenticación anónima, y aun así tiene identidad real en la base para que las políticas por fila validen su mesa.',
                  'Realtime invalida queries en lugar de replicar estado, con sondeo de respaldo cada 4 segundos si la conexión se cae.',
                  'La llave de IA y el acceso privilegiado viven solo en Edge Functions; si Gemini falla, responde una búsqueda local y el comensal nunca ve un error.',
                ],
              },
              {
                title: 'Cuenta dividida, al centavo',
                body: 'Cada platillo guarda quién lo pidió, y lo compartido se reparte por pesos.',
                points: [
                  'La función que calcula el saldo por persona usa la misma fórmula que la que cobra, así la suma siempre reconcilia con el total.',
                  'Lo que no se puede atribuir aparece como “Sin asignar” y nunca se esconde: con dinero real, es dinero que alguien tiene que pagar.',
                ],
              },
              {
                title: 'Que compile no significa que funcione',
                body: 'Es un producto que toca dinero y lo mantengo yo solo, así que las guardas están del lado del sistema.',
                points: [
                  'Un script ejercita la base real después de cada despliegue: permisos por rol, guardias de las funciones, firmas y columnas que usa el frontend.',
                  'El entorno local se reconstruye desde cero con las migraciones, que es la única prueba de que reproducen el esquema de producción.',
                  'Un envoltorio del CLI aborta si el proyecto enlazado no es el correcto y bloquea las banderas destructivas.',
                  'Grabando la demo salió un descuadre real: el panel mostraba $490 y el consumo por persona $355. El aviso de descuadre lo detectó, y el arreglo fue invalidar el saldo en cada ronda nueva y en cada reconexión. El sistema encontró su propio error antes que un cliente pagara de más.',
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
            'Un sistema para pasar de B1 a C1 que observa lo que produzco, modela mis errores y genera cada lectura, práctica y podcast a partir de ese modelo. Corre entero en mi Mac, con IA local y sin un solo servicio en la nube.',
          metrics: [
            'Las apps de idiomas optimizan engagement; esta optimiza nivel, y por eso no tiene rachas que proteger.',
            'SQLite como fuente de verdad y un worker que procesa una inferencia a la vez, para no calentar la laptop.',
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
              'Anki me daba memoria de tarjetas, Notion me daba páginas y un tutor daba correcciones que se perdían en prosa. Ninguna pieza sabía lo que hacían las otras, y lo que faltaba era un modelo del aprendiz: qué palabras están atascadas, qué errores se repiten y en qué nivel leo de verdad.',
            sections: [
              {
                title: 'El problema',
                body: 'Soy hispanohablante, estudio entre 60 y 75 minutos por la mañana, y ninguna herramienta construía sobre lo que yo producía.',
                points: [
                  'La única métrica de éxito es el nivel real: errores por cada 100 palabras a la baja y pruebas externas. No hay racha que proteger.',
                  'Dos restricciones dieron forma al producto: abandono las actividades que piden escribir mucho, así que todo es opción múltiple.',
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
                body: 'Seis pasos, y ninguno depende de que la IA responda a tiempo.',
                points: [
                  'Abro el día y veo mi nivel de trabajo con su razón: retención, comprensión y la evidencia que lo sostiene.',
                  'Hago la sentada de repaso con un presupuesto en minutos y el ritmo calibrado por la mediana entre respuestas.',
                  'Al cerrarla se encolan los trabajos del día, así que la sesión nunca falla por culpa del modelo.',
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
                  'FSRS sin aleatoriedad: el intervalo que muestra cada botón es exactamente el que se agenda. Honestidad sobre optimización.',
                  'Congelar Anki: un solo sistema agenda, porque dos fuentes generaban conflictos imposibles de explicar. Costo: se pierde el estudio en el celular.',
                  'Nivel con evidencia múltiple: cada fuente declara si tiene datos suficientes, y con pocos datos dice “no hay datos” en vez de inventar un número.',
                ],
              },
              {
                title: 'Tres problemas que no se veían desde la interfaz',
                body: 'Lo que más aprendí no estaba en la pantalla.',
                points: [
                  'El worker moría en silencio: el bloqueo de archivo no serializa hilos, y abrirlo en modo escritura truncaba un archivo que el propio proceso tenía bloqueado. Arreglo en dos capas, y el loop ahora sobrevive a excepciones.',
                  'Los conteos mentían: la app parecía tener más de todo, pero 77 de 77 escrituras y 79 de 86 lecturas tenían el cuerpo vacío. La lección fue comparar contenido, no filas.',
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
                  'Riesgos operativos sobre la mesa desde el inicio: en una pasarela de cobro un error no es un bug, es el dinero de un cliente.',
                  'Sin ser backend, me involucré en los contratos de API, en la validación en base de datos y en los despliegues, porque liderar la entrega exige entender ese lado.',
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
                  'Implementé la clave de idempotencia por intento de pago: si el usuario reintenta, toca dos veces o la red duplica la petición, esa misma clave se resuelve como un solo abono. Aquí aprendí por qué en pagos eso no es opcional.',
                  'Si la red se cae a media transacción, la app consulta el estado del intento y reintenta con esa misma clave, en vez de dejar al usuario frente a un error ambiguo.',
                  'Ese identificador de intento viaja del front al servicio de pagos, así un cobro concreto se puede seguir de punta a punta.',
                  'Pruebas unitarias, de integración y end-to-end.',
                  'Análisis estático con SonarQube y de seguridad con Checkmarx.',
                  'CI/CD para desplegar la pasarela sin depender del calendario del sistema que la aloja.',
                ],
              },              {
                title: 'Qué haría distinto hoy',
                body: 'La decisión que revisaría no es de código, es de arquitectura.',
                points: [
                  'Module Federation también llegó por su momento. Hoy compararía alternativas antes de comprometerme: una PWA moderna no necesariamente pide federación, y la elección debería sostenerse por el problema, no por la popularidad de la herramienta.',
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
            'Tres módulos propios: usuarios, información crediticia y portafolio.',
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
                  'React se comparte como singleton: una sola instancia de la librería, sin problemas de hooks ni runtimes duplicados.',
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
                  'Contratos entre aplicaciones: formalizar la comunicación entre el sistema heredado y los microfrontends con contratos tipados, versionados y validados en runtime, para que nadie dependa de conocimiento implícito sobre la implementación de otro.',
                  'Independencia real: revisar qué dependencias vale la pena compartir en runtime y cuáles conviene aislar, mirando tamaño de bundle, frecuencia de actualización, compatibilidad y despliegue independiente. Compartir de más también acopla.',
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
          role: 'Product Owner de facto y desarrollo',
          period: 'Nov 2021 — Oct 2022',
          description:
            'App de mensajería tipo WhatsApp para uso interno de la empresa, con versión web y móvil. Una empresa externa construía la mayor parte del producto; yo llevé el roadmap, coordiné a ese equipo y metí mano en el código.',
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
              'Cuando el desarrollo vive fuera de la empresa, el riesgo no es que no se construya: es que se construya otra cosa. La mayor parte de mi trabajo fue cerrar esa distancia con criterios de aceptación, pruebas y documentación que cualquiera pudiera seguir.',
            sections: [
              {
                title: 'Mi papel',
                body: 'Sin el título, pero con el trabajo: llevar el producto y ser el puente entre negocio y un equipo de desarrollo que no estaba en la empresa.',
                points: [
                  'Roadmap, backlog e historias de usuario de la aplicación, de concepto a producción.',
                  'Flujos, diagramas y criterios de aceptación para que la ambigüedad se resolviera antes de programar, no en la revisión.',
                  'Gestión del testing y de la revisión de bugs con el equipo externo.',
                ],
              },
              {
                title: 'Lo que construí',
                body: 'No solo especifiqué: también trabajé dentro del código, junto al equipo externo.',
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
                  'Control de errores con su reporte, para que un bug encontrado no dependiera de la memoria de nadie.',
                ],
              },
              {
                title: 'Lo que dejé escrito',
                body: 'La documentación era parte del entregable, no un extra al final.',
                points: [
                  'Manuales para levantar la aplicación en Windows, macOS y dispositivos móviles, para que un integrante nuevo no dependiera de que alguien tuviera tiempo de explicarle.',
                  'Manual de traducciones para que cualquiera pudiera agregar una pantalla sin romper el esquema de idiomas.',
                  'Lineamientos de nomenclatura, de modo oscuro y de formatos de imagen, que son las decisiones que un equipo externo resuelve distinto cada vez si nadie las escribe.',
                ],
              },
            ],
          },
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
    contact: {
      eyebrow: 'Contacto',
      title: 'Hablemos',
      description:
        'Abierto a conversar sobre roles de Product Engineering, arquitectura frontend y liderazgo técnico, sobre todo donde se cruzan producto, operación e IA.',
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
    footer: 'Eddie Elorza Ruiz · Product Engineer · Arquitectura frontend · IA y transformación digital',
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
      product: 'Product',
      education: 'Education',
      projects: 'Projects',
      stack: 'Stack',
      contact: 'Contact',
      cta: "Let's talk",
    },
    hero: {
      badge: 'Product Engineer · Frontend Architecture · AI & Digital Transformation',
      title1: 'I build product for',
      titleHighlight: 'payments at scale',
      rotatingWords: [
        'payments at scale',
        'financial operations',
        'automation',
        'commercial teams',
      ],
      title2: 'from discovery to production.',
      subtitle:
        '6+ years across fintech, payments and operations. I understand the business problem, turn it into technical decisions and take it to production — applying AI when it adds value, and avoiding complexity when a deterministic solution is enough.',
      chips: ['MSc Applied AI', 'PSPO I', 'Fintech', 'AI & Automation'],
      ctaProjects: 'See initiatives',
      ctaContact: "Let's talk",
      avatarLabel: 'The one who builds the product',
      photoLabel: 'The one who leads execution',
    },
    about: {
      eyebrow: 'About me',
      title: 'Product and engineering, in equal parts.',
      p1: '6+ years building product across fintech, payments and operations. On Paga Fácil I led a fullstack team of 5 — roadmap, backlog, Scrum, task assignment and code reviews — while still writing code.',
      p2: 'I work at the intersection of product and engineering: I turn business needs into technical decisions, roadmap priorities and measurable delivery. I work closely with operations, vendors and stakeholders.',
      p3: 'MSc in Applied Artificial Intelligence and PSPO I. I apply AI and automation to cut operational effort and improve decision-making.',
      tags: ['Product Engineering', 'Fintech & Payments', 'AI & Automation', 'PSPO I · MSc AI'],
    },
    experience: {
      eyebrow: 'Experience',
      title: 'Product and engineering, one trajectory',
      description:
        'Over six years alternating between the two sides of the same problem: building the system and deciding what gets built. Each role is tagged with the side I worked from, product or engineering.',
      trackLabels: { prod: 'Product', ing: 'Engineering' },
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
            'A credit and payments product built by a team split between Mexico and China. I come in at system analysis, so the specification gets agreed before anyone writes the screen.',
          impact: [
            'I carry the frontend from system analysis through delivery, turning product and design requirements into technical specifications before any code is written.',
            'I build the credit Back Office as a microfrontend with React, TypeScript, Umi Max, Ant Design Pro and qiankun; it covers origination and servicing.',
            'I define typed API contracts with adapters and mocks, so the frontend keeps moving even when the backend or the environment is not ready yet.',
            'I use Jest, Testing Library and Playwright, with test points and coverage as delivery criteria.',
            'I diagnose the integration failures across host, microfrontends and backend: shared dependencies, a duplicated React runtime, and contracts that changed without notice.',
            'I automate architecture and documentation checks with AI agents, so inconsistencies surface before delivery.',
          ],
          tags: ['React', 'TypeScript', 'Microfrontends', 'Playwright'],
        },
        {
          company: 'Operadora SI · Hotel CRM',
          role: 'End-to-end product · Discovery, design, development and operation',
          period: 'May 2026 — Present',
          track: ['prod', 'ing'],
          summary:
            'My own end-to-end product with the client: I run discovery, build it, operate it and handle their tickets. In production since 6 September 2026 with 10 hotels and 16 people.',
          impact: [
            'Discovery changed the brief: they asked for screens, and the problem was that management could not tell whether the team was out on the street.',
            'I made the case for building it instead of HubSpot or Salesforce, because ten hotels each owning their book, with one brand worked by several, does not fit a generic CRM.',
            'Permissions live in the database, with Postgres RLS, and an automated suite checks them on every change: nobody reads another hotel\'s book, not even by crafting the query by hand.',
            '354 pull requests and 175 database migrations; nothing reaches production without type checks, access rules and build.',
            'I deferred generative AI to phase 2 with an explicit hypothesis, that it only pays off with enough history, and left the data architecture ready for it.',
          ],
          tags: ['Discovery', 'MVP', 'Build-vs-buy', 'Supabase (RLS)'],
        },
        {
          company: 'Banco Azteca · Paga Fácil',
          role: 'Product Engineer · Payments Platform',
          period: 'Jan 2025 — Mar 2026',
          track: ['prod', 'ing'],
          summary:
            'The gateway a credit customer pays online with, inside a platform handling ~6M daily transactions. I led the initiative and a fullstack team of 5, from discovery to production.',
          impact: [
            'I migrated the gateway from Vue 2 to React as a federated microfrontend with PWA configuration, and that same migration moved it from on-premise to AWS.',
            'I modeled the end-to-end payment flow in BPM and sequence diagrams before it was built, with its four charging flows: acquirer, wallet, gems and initial payment.',
            'Managed the whole project: roadmap, backlog, Scrum, task assignment, progress reviews and code reviews, while still building features, both new ones and on the monolith.',
            'Implemented the per-attempt idempotency key, so a retry, a double tap or a dropped connection does not end in two payments against the same credit account.',
            'I prioritized the backlog by impact on collections and defended the trade-offs with business, operations and engineering.',
            'In the Deposits area, outside the product, I automated incident resolution: 500+ a day and ~6h → ~2h per cycle (operational estimate).',
          ],
          tags: ['Leadership', 'Payments', 'Microfrontends', 'Automation'],
        },
        {
          company: 'Banco Azteca · Sistema Regional',
          role: 'Software Engineer · Regional Credit & Collections (second stint)',
          period: 'Dec 2023 — Jan 2025',
          track: ['ing'],
          summary:
            'I came back to build the modules on top of the core I had raised myself during the first stint.',
          impact: [
            'Delivered the three modules in order: portfolio by customer, customer credit information, and user administration.',
            'The portfolio left the book navigable through three levels, manager → customer → order, with the balance and arrears totals following whichever level was open.',
            'I worked side by side with a backend engineer: we agreed the contract first, I built mocks against it and kept going while the real API integration landed.',
            'In user administration I used Context for the cross-cutting parts, catalogs and filters shared by several screens; each view\'s own state stayed local.',
            'Kept the core as the shared base (layout, login, theme and component library) that the microfrontends consume at runtime with Module Federation.',
            'Upgraded the base template used to start new microfrontends to React 19.',
            'Wrote tests with Jest and React Testing Library, and wired my modules into the pipeline gates: types, static analysis, security scan and deployment.',
          ],
          tags: ['React', 'Module Federation', 'Testing', 'CI/CD'],
        },
        {
          company: 'IDS Comercial',
          role: 'Fullstack Engineer · Financial services',
          period: 'Apr 2023 — Dec 2023',
          track: ['ing'],
          summary:
            'Enterprise applications for pension and banking projects. I joined to build and ended up running the frontend workstream.',
          impact: [
            'Defined the frontend architecture and implemented scalable solutions with React, Java and API integrations.',
            'Ran the day-to-day of frontend work: priorities, technical discussions and whatever had the team stuck.',
            'Took part in product work: requirements analysis, user stories, backlog and roadmap definition.',
            'Raised application performance through code optimization and frontend practice, verified with monitoring.',
            'Implemented observability practices to catch issues before a user reported them.',
          ],
          tags: ['React', 'Java', 'Observability', 'Agile'],
        },
        {
          company: 'Banco Azteca · Sistema Regional',
          role: 'Software Engineer · Regional Credit & Collections (first stint)',
          period: 'Oct 2022 — Apr 2023',
          track: ['ing'],
          summary:
            'The first phase of the project: keeping the credit and collections monolith alive while documenting and building the architecture meant to replace it.',
          impact: [
            'Maintained the legacy system in JSP, jQuery and AJAX while raising the microfrontend architecture that would succeed it.',
            'Mapped the diagrams and the contracts between applications, mocked up the screens and assembled the UI for that first phase.',
            'Built the frontend core, the shared base that publishes layout, login, theme, styles and components with Module Federation for each module to consume at runtime.',
            'Every delivery went through the group\'s internal certification, which reviews repository vulnerabilities, architecture and observability.',
            'Modules were embedded in an iframe inside the legacy system, and the response back to the container travelled through postMessage.',
            'Put testing and CI/CD in place to lower the risk of every release.',
          ],
          tags: ['JSP → React', 'Module Federation', 'Architecture', 'Jest'],
        },
        {
          company: 'MRCI',
          role: 'Product & Software Engineer · de facto Product Owner',
          period: 'Nov 2021 — Oct 2022',
          track: ['prod', 'ing'],
          summary:
            'An external company was building most of Octobile, the internal messaging app, so I took both hats at once: coordinating that team and working in the code myself.',
          impact: [
            'Owned the roadmap, backlog and user stories, and coordinated the external team from concept to production.',
            'Defined flows, diagrams and acceptance criteria; ran testing and bug review as the bridge between business and the external developers.',
            'Maintained and built components inside the React Native app.',
            'Set up internationalization on the web version with react-i18next (a namespace per component, en.js and es.js files, language detection and a fallback) and wrote the copy in Spanish and English.',
            'Built e-commerce sites focused on performance, accessibility and UX, integrating REST APIs and reusable components.',
            'Worked with the client to define scope and followed the full cycle: requirements, development, testing, releases and support.',
          ],
          tags: ['Product Ownership', 'Roadmap', 'React Native', 'i18n'],
        },
        {
          company: 'Lapbytes',
          role: 'Web Developer',
          period: 'Jan 2020 — Nov 2021',
          track: ['ing'],
          summary:
            'My first years delivering web and e-commerce platforms for clients across different industries, dealing with them from requirements to handover.',
          impact: [
            'Built and maintained ~6 web and e-commerce platforms with HTML, CSS, JavaScript and WordPress.',
            'Translated business needs into digital solutions, dealing with the client directly.',
            'Ran several projects in parallel and delivered the overlapping ones on time.',
          ],
          tags: ['JavaScript', 'CSS', 'E-commerce', 'Client work'],
        },
      ],
    },
    product: {
      eyebrow: 'Product OS',
      title: 'Product Operating System',
      description:
        'A system for turning fintech, AI and operational challenges into scalable product outcomes.',
      relatedLabel: 'Related Capabilities',
      closeLabel: 'Close',
      categories: {
        core: 'Core',
        strategic: 'Strategic',
        'ai-enabled': 'AI-enabled',
        execution: 'Execution',
      },
      craft: {
        title: 'The bar I hold in every project',
        note: 'Each one with the concrete example of where I applied it.',
        items: [
          {
            k: 'Architecture',
            v: 'A shared core and federated microfrontends that deploy separately — and the judgment not to split when it is not needed.',
          },
          {
            k: 'Performance',
            v: 'Code splitting, lazy loading and caching in the payment PWA; on this very site, every section loads as its own chunk and screenshots are WebP.',
          },
          {
            k: 'Security',
            v: 'Row-level permissions in Postgres (RLS) verified on every change; static and security analysis as their own phase, not a final step.',
          },
          {
            k: 'Reliability',
            v: 'An idempotency key per payment attempt: if the network drops, the attempt status is checked and retried with the same key — never two payments.',
          },
          {
            k: 'Observability',
            v: 'An attempt identifier travelling from the frontend to the payment service, plus dashboards and KPIs for transactions and errors on a platform handling ~6M operations a day.',
          },
          {
            k: 'Testing',
            v: 'Unit, integration and end-to-end tests; in the Regional System I left testing and CI/CD in place to lower release risk.',
          },
          {
            k: 'Accessibility',
            v: 'This very site: visible focus, 44px touch targets, AA contrast across all four accents, and reduced-motion honored.',
          },
          {
            k: 'DevEx',
            v: 'CI/CD per module: each team ships without waiting on the host system release train.',
          },
          {
            k: 'Delivery',
            v: 'From discovery to production: I sequenced the CRM MVP to validate the critical flow before investing in the rest.',
          },
          {
            k: 'Product Analytics',
            v: 'Metrics that do not flatter: the leaderboard ranks by percentage of each person\'s own target, and pipeline is measured in opportunities, not pesos.',
          },
        ],
      },
      items: [
        {
          id: 'payments',
          title: 'Payments & Fintech',
          category: 'core',
          content:
            'Building and evolving payment products, checkout flows and financial workflows in high-volume environments.',
          related: ['discovery', 'prioritization', 'delivery'],
        },
        {
          id: 'discovery',
          title: 'Product Discovery',
          category: 'strategic',
          content:
            'Turning operational pain points, user needs and business constraints into validated product opportunities.',
          related: ['payments', 'prioritization', 'stakeholders'],
        },
        {
          id: 'prioritization',
          title: 'Prioritization & Strategy',
          category: 'strategic',
          content:
            'Evaluating trade-offs between business impact, technical effort, operational risk and strategic value.',
          related: ['discovery', 'payments', 'delivery'],
        },
        {
          id: 'ai',
          title: 'AI Automation',
          category: 'ai-enabled',
          content:
            'Applying AI and automation to reduce manual work, improve decision-making and scale operational processes.',
          related: ['discovery', 'stakeholders', 'delivery'],
        },
        {
          id: 'stakeholders',
          title: 'Stakeholder Alignment',
          category: 'execution',
          content:
            'Connecting business, operations, compliance and engineering teams around shared outcomes and priorities.',
          related: ['discovery', 'prioritization', 'ai'],
        },
        {
          id: 'delivery',
          title: 'Product Delivery',
          category: 'execution',
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
      viewLabel: 'View project',
      noDemoLabel: 'Internal system · no public demo',
      newTabLabel: 'opens in a new tab',
      detail: {
        open: 'View details',
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
      gallery: {
        open: 'Enlarge screen',
        note: 'Screenshots with fictitious data',
        prev: 'Previous',
        next: 'Next',
        close: 'Close',
      },
      title: 'Initiatives with real impact',
      description:
        'Initiatives where I combined product, engineering and technical leadership to solve real problems in payments, credit, hospitality and restaurants.',
      items: [
        {
          title: 'Hotel Commercial Intelligence Platform',
          tag: 'Product · Client work',
          status: 'In production',
          role: 'End-to-end product',
          period: 'May 2026 — Present',
          href: 'https://claude.ai/artifact/1NdBmWQUNSSghuNwdmpTxv',
          linkLabel: 'View case study (Spanish)',
          description:
            'A custom CRM for a hotel group (Operadora SI) that replaced a visit-compliance spreadsheet. End-to-end product — discovery, design, development and operations — in production since September 2026.',
          metrics: [
            'Discovery revealed the real pain was lack of commercial visibility, not the screens they asked for — reshaped the roadmap.',
            'Build-vs-buy: justified building custom over HubSpot / Salesforce for a multi-hotel commercial process.',
            'Row-level permissions in Postgres (RLS), checked by an automated suite on every change: no one can read another hotel\'s accounts.',
            'Fair targets: the leaderboard ranks by % of each person\'s own target, and the pipeline counts opportunities, not pesos.',
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
              'Ten hotels, each with its own book of business and its own team. The value is not in storing data: it is in management seeing whether the team is out on the street, and in an executive never losing an account to forgetfulness.',
            sections: [
              {
                title: 'The problem',
                body: 'Management sets weekly targets of effective visits — 25 for an executive, 20 for a manager — and the spreadsheet recorded the number, but not the company, the contact or what was agreed.',
                points: [
                  'A repeated visit counted twice, and an abandoned account went unnoticed until it was lost.',
                  'Logging a visit had to cost less than writing it in the sheet: the executive works on their feet, between meetings, from a phone.',
                  'Everyone had to see only their own book and their team; management needed the answer to "are they hitting target?" without asking anyone for a report.',
                ],
              },
              {
                title: 'My role',
                body: 'End-to-end product with the client: discovery, design, development, launch and operation. I work alone, so every product decision is also a technical one.',
                points: [
                  'Discovery: the real pain was the lack of commercial visibility, not the screens they asked for. That redirected the roadmap.',
                  'Build-vs-buy: I made the case for building it rather than HubSpot or Salesforce, for a multi-hotel process where each property owns its book.',
                  'I sequenced the MVP to validate the critical flow — logging the visit — before investing in anything else.',
                  'Management reports bugs and requests through tickets inside the CRM itself; I handle and ship them.',
                ],
              },
              {
                title: 'What it solves',
                body: 'Three journeys, in this order: log a visit, know what today holds, and see whether the team is hitting target.',
                points: [
                  'Compliance: the table that used to live in Excel, computed from the logged visits. Only a true visit counts: a meeting held and logged the same day counts once.',
                  'Team today: where everyone is going, which follow-ups are overdue and which accounts have gone quiet.',
                  'Pipeline in three levels: by hotel, by person and a board by stage, with each account\'s pulse on the card.',
                  'Company file: next step, decision maker and last contact at the top; the history with the real author of each visit below.',
                  'Rate agreements: corporate rates per hotel, flagged 45 days before expiry — renewals get negotiated before, not after.',
                ],
              },
              {
                title: 'Product decisions',
                body: 'The ones that change how the team behaves, not just how the screen looks.',
                points: [
                  'The pipeline is measured in opportunities, not pesos: they sell lodging agreements, and an estimated amount at the start misleads more than it informs.',
                  'The leaderboard ranks by percentage of each person\'s own target, so a manager on 20 and an executive on 25 are measured by the same yardstick.',
                  'An account\'s rhythm shows in color: six named rhythms over nine weeks of activity, so "cooling down" is visible before the account goes cold.',
                  'What one hotel sees of an account another works under the same brand is deliberately bounded: stage, owner and last activity — never contacts or rates.',
                ],
              },
              {
                title: 'Engineering',
                body: 'It holds a real client\'s commercial data and one person maintains it: security and automation are not optional.',
                points: [
                  'Row-level permissions in Postgres (RLS): an executive cannot read another hotel\'s book even by crafting the query by hand. An automated suite checks those rules on every change.',
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
            { value: '16', label: 'people' },
            { value: '928', label: 'companies' },
          ],
        },
        {
          title: 'Tastify · SaaS for restaurants',
          tag: 'Own product · SaaS',
          status: 'Ready for pilot',
          role: 'My own product, end to end',
          period: 'Apr 2026 — Present',
          description:
            'A QR menu with an AI waiter, a cart shared across the table, and a panel that receives every round live. I designed and built all of it: product, data, security and operation.',
          metrics: [
            'Three apps on one base: diner, restaurant panel and landing.',
            'The rules live in Postgres: no price ever arrives from the browser.',
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
              'A table loses money in its slow moments: waiting for the waiter to order a second round, splitting the bill in someone\'s head, a PDF menu nobody understands. Tastify sits there, at the table, without replacing the restaurant\'s till.',
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
                  'The waiter sees the floor, charges per person and frees tables; the owner sees sales and what the AI pushed.',
                  'The AI waiter answers with dishes from the real menu and offers a side that actually exists.',
                ],
              },
              {
                title: 'Architecture: thin frontends, rules in the database',
                body: 'The frontends only carry the public key. Who sees what, what a round costs and whether a dish exists is decided by Postgres, with row-level policies and transactional functions.',
                points: [
                  'Orders are only born inside submit_order, which recalculates price, extras and availability in one transaction: editing the request in the browser does not make you pay less.',
                  'The QR is an opaque token. Changing a number in the URL does not seat you at another table.',
                  'The diner signs in anonymously and still gets a real identity in the database, so row-level policies can check their table.',
                  'Realtime invalidates queries instead of replicating state, with a 4-second polling fallback if the connection drops.',
                  'The AI key and privileged access live only in Edge Functions; if Gemini fails, a local search answers and the diner never sees an error.',
                ],
              },
              {
                title: 'Split bill, to the cent',
                body: 'Every dish records who ordered it, and shared items are split by weights.',
                points: [
                  'The function that computes each person\'s balance uses the same formula as the one that charges, so the per-person sum always reconciles with the total.',
                  'Anything that cannot be attributed shows as “Unassigned” and is never hidden: with real money, that is money someone has to pay.',
                ],
              },
              {
                title: 'Compiling is not the same as working',
                body: 'This product touches money and I maintain it alone, so the guardrails sit on the system side.',
                points: [
                  'A script exercises the real database after every deploy: per-role permissions, function guards, signatures and the columns the frontend uses.',
                  'The local environment rebuilds from scratch through the migrations, which is the only proof they reproduce the production schema.',
                  'A CLI wrapper aborts if the linked project is the wrong one and blocks destructive flags.',
                  'Recording the demo surfaced a real mismatch: the panel showed $490 while the per-person total stayed at $355. The mismatch warning caught it, and the fix was to invalidate balances on every new round and every reconnection. The system found its own error before a customer overpaid.',
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
            'A system for going from B1 to C1 that watches what I produce, models my errors, and generates every reading, drill and podcast from that model. It runs entirely on my Mac, with local AI and no cloud service at all.',
          metrics: [
            'Language apps optimize for engagement; this one optimizes for level, which is why it has no streak to protect.',
            'SQLite as the source of truth and a worker that runs one inference at a time, to keep the laptop cool.',
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
              'Anki gave me card memory, Notion gave me pages, and a tutor gave corrections that dissolved into prose. No piece knew what the others were doing, and what was missing was a model of the learner: which words are stuck, which errors repeat, and what level I actually read at.',
            sections: [
              {
                title: 'The problem',
                body: 'I am a Spanish speaker, I study 60 to 75 minutes in the morning, and no tool built on what I produced.',
                points: [
                  'The only success metric is the real level: errors per 100 words going down, and external tests. There is no streak to protect.',
                  'Two constraints shaped the product: I abandon activities that ask for a lot of writing, so everything is multiple choice.',
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
                body: 'Six steps, and none of them depends on the model answering in time.',
                points: [
                  'I open the day and see my working level with its reason: retention, comprehension and the evidence behind it.',
                  'I do the review sitting with a budget in minutes and a pace calibrated by the median time between answers.',
                  'Closing it enqueues the day\'s jobs, so the session never fails because of the model.',
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
                  'FSRS without fuzz: the interval each button shows is exactly the one it schedules. Honesty over optimization.',
                  'Freezing Anki: one system schedules, because two sources produced conflicts impossible to explain. Cost: no studying on the phone.',
                  'A level built from several sources of evidence: each one declares whether it has enough data, and says "no data yet" instead of inventing a number.',
                ],
              },
              {
                title: 'Three problems invisible from the interface',
                body: 'What I learned most was not on the screen.',
                points: [
                  'The worker was dying silently: the file lock does not serialize threads, and opening it in write mode truncated a file the process itself had locked. A two-layer fix, and the loop now survives exceptions.',
                  'The counts were lying: the app seemed to have more of everything, but 77 of 77 writings and 79 of 86 readings had an empty body. The lesson was to compare content, not rows.',
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
                  'Operational risk on the table from the start: in a payment gateway an error is not a bug, it is a customer\'s money.',
                  'Not a backend engineer, but I got into the API contracts, the database validation and the deployments, because leading delivery demands understanding that side.',
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
                  'I implemented the per-attempt idempotency key: if the user retries, double-taps or the network duplicates the request, that same key resolves to a single payment. This is where I learned why that is not optional in payments.',
                  'If the network drops mid-transaction, the app checks the attempt status and retries with that same key, instead of leaving the user with an ambiguous error.',
                  'That attempt identifier travels from the frontend to the payment service, so a single charge can be followed end to end.',
                  'Unit, integration and end-to-end tests.',
                  'Static analysis with SonarQube and security scanning with Checkmarx.',
                  'CI/CD so the gateway ships without waiting on the host system release train.',
                ],
              },              {
                title: 'What I would do differently today',
                body: 'The call I would revisit is not about code, it is about architecture.',
                points: [
                  'Module Federation also arrived on its moment. Today I would compare alternatives before committing: a modern PWA does not necessarily call for federation, and the choice should hold up because of the problem, not the popularity of the tool.',
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
            'Three modules of my own: users, credit information and portfolio.',
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
                  'React is shared as a singleton: one instance of the library, no hook problems and no duplicate runtimes.',
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
                  'Contracts between applications: formalize the communication between the legacy system and the microfrontends with typed, versioned contracts validated at runtime, so no application depends on implicit knowledge of how another one is implemented.',
                  'Real independence: review which dependencies are worth sharing at runtime and which are better isolated, weighing bundle size, update frequency, compatibility and independent deployability. Sharing too much couples too.',
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
          role: 'De facto Product Owner and development',
          period: 'Nov 2021 — Oct 2022',
          description:
            'A WhatsApp-style messaging app for internal company use, with a web and a mobile version. An external company built most of the product; I owned the roadmap, coordinated that team and worked in the code myself.',
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
              'When development lives outside the company, the risk is not that nothing gets built: it is that something else gets built. Most of my work was closing that distance with acceptance criteria, tests and documentation anyone could follow.',
            sections: [
              {
                title: 'My role',
                body: 'Without the title, but with the job: owning the product and bridging business and a development team that did not sit in the company.',
                points: [
                  'Roadmap, backlog and user stories for the application, from concept to production.',
                  'Flows, diagrams and acceptance criteria, so ambiguity got resolved before coding rather than at review.',
                  'Ran testing and bug review with the external team.',
                ],
              },
              {
                title: 'What I built',
                body: 'I did not only specify: I worked inside the code alongside the external team.',
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
                  'Error tracking with its report, so a bug found did not depend on anyone\'s memory.',
                ],
              },
              {
                title: 'What I left in writing',
                body: 'Documentation was part of the deliverable, not an extra at the end.',
                points: [
                  'Manuals to run the application on Windows, macOS and mobile devices, so a new teammate did not depend on someone having time to explain it.',
                  'A translations manual so anyone could add a screen without breaking the language structure.',
                  'Guidelines for naming, dark mode and image formats, which are the decisions an external team resolves differently every time when nobody writes them down.',
                ],
              },
            ],
          },
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
    contact: {
      eyebrow: 'Contact',
      title: "Let's talk",
      description:
        'Open to conversations about Product Engineering, frontend architecture and technical leadership roles, especially where product, operations and AI meet.',
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
    footer: 'Eddie Elorza Ruiz · Product Engineer · Frontend Architecture · AI & Digital Transformation',
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
