export type Locale = "en" | "es";

type Card = {
  title: string;
  description: string;
};

type Service = {
  title: string;
  description: string;
  bullets: string[];
};

type Step = {
  number: string;
  title: string;
  description: string;
};

type Stat = {
  value: string;
  label: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

type AboutStat = {
  title: string;
  description: string;
};

type AuditOption = {
  value: string;
  label: string;
};

export type SiteDictionary = {
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    titleLine3: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    imageAlt: string;
    stats: Stat[];
  };
  switch: {
    toEnglish: string;
    toSpanish: string;
  };
  tracking: {
    badge: string;
    title: string;
    description: string;
    cards: Card[];
    cta: string;
    imageAlt: string;
  };
  problems: {
    badge: string;
    title: string;
    description: string;
    cards: Card[];
  };
  solutions: {
    badge: string;
    title: string;
    description: string;
    cards: Card[];
  };
  services: {
    badge: string;
    title: string;
    description: string;
    learnMore: string;
    items: Service[];
  };
  process: {
    badge: string;
    title: string;
    description: string;
    steps: Step[];
  };
  technologies: {
    badge: string;
    title: string;
    items: string[];
  };
  about: {
    badge: string;
    title: string;
    paragraph1: string;
    paragraph2: string;
    stats: AboutStat[];
    teamButton: string;
    imageAlt: string;
  };
  faq: {
    badge: string;
    title: string;
    description: string;
    items: FaqItem[];
  };
  demoCta: {
    eyebrow: string;
    title: string;
    description: string;
    button: string;
  };
  auditForm: {
    badge: string;
    title: string;
    subtitle: string;
    fullName: string;
    email: string;
    platform: string;
    message: string;
    placeholderName: string;
    placeholderEmail: string;
    placeholderMessage: string;
    platformOptions: AuditOption[];
    submit: string;
    responseTime: string;
    honeypot: string;
    submitError: string;
  };
  footer: {
    notice: string;
  };
  thanks: {
    title: string;
    description: string;
    backHome: string;
  };
};

export const dictionaries: Record<Locale, SiteDictionary> = {
  en: {
    hero: {
      badge: "Digital Analytics Experts",
      titleLine1: "We Implement",
      titleLine2: "GA4/GTM",
      titleLine3: "For Every Platform",
      description: "We design measurement implementations so marketing, product, and ecommerce teams can work with reliable data from day one.",
      primaryCta: "Request a free audit",
      secondaryCta: "View services",
      imageAlt: "Analytics dashboard",
      stats: [
        { value: "+150", label: "Projects" },
        { value: "99.9%", label: "Accuracy" },
        { value: "100%", label: "Satisfaction" },
      ],
    },
    switch: {
      toEnglish: "English",
      toSpanish: "Español",
    },
    tracking: {
      badge: "GA4 and GTM Demo Store",
      title: "This interactive demo helps you discover what is possible with GA4",
      description: "The goal is to show, clearly, how we design measurement: from key events to data structure and validation, so marketing, product, and development teams can work with trustworthy information.",
      cards: [
        {
          title: "Visible events",
          description: "The demo store shows how key ecommerce events fire so visitors understand the implementation logic.",
        },
        {
          title: "Structured data layer",
          description: "Every relevant interaction is pushed with a consistent ecommerce structure, ready for GTM consumption.",
        },
        {
          title: "Validation without personal data",
          description: "The experience is designed to demonstrate architecture and debugging without relying on cookies or personally identifiable data.",
        },
      ],
      cta: "Open demo store",
      imageAlt: "Analytics demo store",
    },
    problems: {
      badge: "Common problems",
      title: "Does this sound familiar?",
      description: "These implementation issues can cost you bad decisions and missed opportunities.",
      cards: [
        { title: "GA4 is not collecting data", description: "Your GA4 property is configured, but no data is arriving." },
        { title: "Duplicated events", description: "Multiple firings of the same event are distorting your metrics." },
        { title: "Incomplete migration from Universal Analytics", description: "You lost critical functionality during the move to GA4." },
        { title: "Broken ecommerce tracking", description: "You cannot measure conversions and revenue correctly." },
        { title: "Missing data layer", description: "Disorganized data that is impossible to use strategically." },
      ],
    },
    solutions: {
      badge: "What we solve",
      title: "Implementations built for business, not just tag firing",
      description: "Galaxshi helps teams that need reliable data to optimize campaigns, measure leads, and understand real ecommerce performance.",
      cards: [
        {
          title: "Reliable measurement architecture",
          description: "We fix fragile implementations, duplicate events, and inconsistent data layers so decisions start from useful data.",
        },
        {
          title: "End-to-end measurable ecommerce",
          description: "We design events and parameters for product, cart, checkout, and purchase with a structure ready for GTM and GA4.",
        },
        {
          title: "Implementations adapted to your stack",
          description: "We work with WordPress, WooCommerce, Shopify, Next.js, and React without generic solutions that break easily.",
        },
        {
          title: "Actionable audit and documentation",
          description: "We deliver prioritized findings, a correction plan, and validation criteria so tracking stays stable.",
        },
      ],
    },
    services: {
      badge: "Our services",
      title: "Complete analytics solutions",
      description: "Everything you need to measure, analyze, and optimize your digital business.",
      learnMore: "Learn more",
      items: [
        {
          title: "Professional GA4 Implementation",
          description: "Complete Google Analytics 4 setup from scratch, including custom events, conversions, and reporting adapted to your business.",
          bullets: ["Property and data stream setup", "Standard and custom events", "Conversions and goals", "Custom reporting"],
        },
        {
          title: "Google Tag Manager - Advanced Setup",
          description: "GTM implementation and management with scalable architecture, smart triggers, and professional debugging.",
          bullets: ["Optimized container structure", "Advanced variables and triggers", "Testing and debugging", "Full documentation"],
        },
        {
          title: "Data Layer Implementation",
          description: "Design and implementation of a structured data layer to capture data consistently and reliably.",
          bullets: ["Custom data architecture", "Complete ecommerce events", "Validation and testing", "GTM integration"],
        },
        {
          title: "WordPress and Next.js/React Integrations",
          description: "Specialized technical implementations for WordPress, WooCommerce, and modern React/Next.js apps.",
          bullets: ["Custom plugins and hooks", "Single Page Apps (SPA)", "Server-side tracking", "Performance optimized"],
        },
      ],
    },
    process: {
      badge: "Our process",
      title: "A proven methodology used in 150+ projects",
      description: "A systematic approach that delivers precise and sustainable results.",
      steps: [
        { number: "01", title: "Initial Audit", description: "We review your current implementation and identify errors and opportunities." },
        { number: "02", title: "Measurement Strategy", description: "We define what to measure, how to measure it, and the insights your business needs." },
        { number: "03", title: "Technical Implementation", description: "We configure GA4, GTM, and Data Layer following market best practices." },
        { number: "04", title: "Validation", description: "Comprehensive testing to ensure all data flows correctly." },
        { number: "05", title: "Training", description: "We train your team so they can get the most from the new implementation." },
      ],
    },
    technologies: {
      badge: "Technologies",
      title: "Experts in the tools you use",
      items: ["Google Analytics 4", "Google Tag Manager", "Data Layer", "WordPress", "WooCommerce", "Next.js", "React"],
    },
    about: {
      badge: "About us",
      title: "Digital analytics specialists with proven experience",
      paragraph1: "We are a team of engineers and analysts specialized in GA4, Google Tag Manager, and data architecture implementations.",
      paragraph2: "With more than 5 years of experience and over 150 completed projects, we have helped ecommerce, SaaS, marketplace, and media companies build reliable and scalable analytics systems.",
      stats: [
        { title: "Certified", description: "Google Analytics and GTM" },
        { title: "Clients", description: "+80 companies" },
        { title: "Experience", description: "+5 years" },
      ],
      teamButton: "Contact us",
      imageAlt: "Team portrait",
    },
    faq: {
      badge: "FAQ",
      title: "Frequently asked questions",
      description: "Everything you need to know about our services.",
      items: [
        {
          question: "How long does a complete GA4 and GTM implementation take?",
          answer: "It depends on project complexity. A standard implementation takes 2-4 weeks, including audit, setup, testing, and enablement. Complex multi-platform projects can take 6-8 weeks.",
        },
        {
          question: "Do you work with WordPress and WooCommerce?",
          answer: "Yes. We have extensive experience implementing tracking in WordPress and WooCommerce, including ecommerce and conversion tracking.",
        },
        {
          question: "Can you migrate my Universal Analytics setup to GA4?",
          answer: "Absolutely. We review your current setup, map events and goals, and migrate or replicate the logic in GA4.",
        },
        {
          question: "Do you offer technical support after implementation?",
          answer: "We offer support and maintenance packages to keep tracking accurate and up to date.",
        },
        {
          question: "What is included in the free audit?",
          answer: "We review your current GA4 and GTM implementation, identify critical errors, duplicated events, and broken conversions, and deliver a prioritized findings report.",
        },
        {
          question: "Do you work with Next.js and React applications?",
          answer: "Yes. We implement tracking in modern apps (SSR, SSG, SPA) and adapt the solution to your stack.",
        },
      ],
    },
    demoCta: {
      eyebrow: "Live demo",
      title: "Explore our analytics demo store",
      description: "Walk through a simulated ecommerce flow and see events for product view, cart, checkout, and purchase.",
      button: "Open demo store",
    },
    auditForm: {
      badge: "Contact",
      title: "Request your free audit",
      subtitle: "We will review your current implementation and send a detailed report with recommendations.",
      fullName: "Full name",
      email: "Email",
      platform: "Platform",
      message: "Message",
      placeholderName: "Your name",
      placeholderEmail: "you@email.com",
      placeholderMessage: "Tell us about your project and what you need...",
      platformOptions: [
        { value: "", label: "Select your platform" },
        { value: "wordpress-woocommerce", label: "WordPress / WooCommerce" },
        { value: "nextjs-react", label: "Next.js / React" },
        { value: "shopify", label: "Shopify" },
        { value: "other", label: "Other" },
      ],
      submit: "I want my free audit",
      responseTime: "Response in less than 24 hours",
      honeypot: "Do not fill this field if you are human",
      submitError: "We could not send your request. Please try again in a few minutes.",
    },
    footer: {
      notice: "This site uses anonymous tracking for demonstration purposes only. We do not use cookies to track users.",
    },
    thanks: {
      title: "Thanks for your message",
      description: "We received your audit request. We will get back to you in less than 24 hours.",
      backHome: "Back to home",
    },
  },
  es: {
    hero: {
      badge: "Expertos en Analitica Digital",
      titleLine1: "Implementamos",
      titleLine2: "GA4/GTM",
      titleLine3: "Para Todas las Plataformas",
      description: "Diseñamos implementaciones de medicion para que marketing, producto y ecommerce trabajen con datos confiables desde el dia uno.",
      primaryCta: "Solicitar auditoria gratuita",
      secondaryCta: "Ver servicios",
      imageAlt: "Dashboard de analitica",
      stats: [
        { value: "+150", label: "Proyectos" },
        { value: "99.9%", label: "Precision" },
        { value: "100%", label: "Satisfaccion" },
      ],
    },
    switch: {
      toEnglish: "English",
      toSpanish: "Espanol",
    },
    tracking: {
      badge: "Tienda de demostracion de GA4 y GTM",
      title: "Esta demo interactiva es un recurso para que descubras todo lo que se puede hacer con GA4",
      description: "El objetivo es ensenarte, de forma clara, como disenamos la medicion: desde los eventos clave hasta la estructura de datos y su validacion, para que los equipos de marketing, producto y desarrollo trabajen con informacion fiable.",
      cards: [
        {
          title: "Eventos visibles",
          description: "La tienda demo muestra como se disparan eventos clave de ecommerce para que el visitante entienda la logica de implementacion.",
        },
        {
          title: "Data Layer estructurado",
          description: "Cada interaccion relevante se empuja con una estructura ecommerce consistente, lista para ser consumida por GTM.",
        },
        {
          title: "Validacion sin datos personales",
          description: "La experiencia esta pensada para demostrar arquitectura y depuracion sin depender de cookies ni de datos identificables del usuario.",
        },
      ],
      cta: "Abrir tienda demo",
      imageAlt: "Tienda demo de analitica",
    },
    problems: {
      badge: "Problemas comunes",
      title: "Te suena familiar?",
      description: "Estos errores de implementacion pueden costarte decisiones equivocadas y oportunidades perdidas",
      cards: [
        { title: "GA4 no recoge datos", description: "Tu propiedad de GA4 esta configurada pero no recibes informacion" },
        { title: "Eventos duplicados", description: "Multiples disparos del mismo evento distorsionan tus metricas" },
        { title: "Migracion incompleta desde Universal Analytics", description: "Perdiste funcionalidad critica en la transicion a GA4" },
        { title: "Ecommerce tracking roto", description: "No puedes medir conversiones ni ingresos correctamente" },
        { title: "Falta de Data Layer", description: "Datos desorganizados e imposibles de aprovechar estrategicamente" },
      ],
    },
    solutions: {
      badge: "Lo que resolvemos",
      title: "Implementaciones pensadas para negocio, no solo para disparar tags",
      description: "Galaxshi ayuda a equipos que necesitan datos confiables para optimizar campanas, medir leads y entender el rendimiento real de su ecommerce.",
      cards: [
        {
          title: "Arquitectura de medicion confiable",
          description: "Corregimos implementaciones fragiles, eventos duplicados y data layers inconsistentes para que tus decisiones partan de datos utiles.",
        },
        {
          title: "Ecommerce medible de punta a punta",
          description: "Disenamos eventos y parametros para producto, carrito, checkout y compra con estructura lista para GTM y GA4.",
        },
        {
          title: "Implementaciones adaptadas a tu stack",
          description: "Trabajamos con WordPress, WooCommerce, Shopify, Next.js y React sin depender de soluciones genericas que rompen con facilidad.",
        },
        {
          title: "Auditoria y documentacion accionable",
          description: "Entregamos hallazgos priorizados, plan de correccion y criterios de validacion para que el tracking se mantenga estable.",
        },
      ],
    },
    services: {
      badge: "Nuestros servicios",
      title: "Soluciones completas de analitica",
      description: "Todo lo que necesitas para medir, analizar y optimizar tu negocio digital",
      learnMore: "Mas informacion",
      items: [
        {
          title: "Implementacion Profesional de GA4",
          description: "Configuracion completa de Google Analytics 4 desde cero, con eventos personalizados, conversiones y reportes adaptados a tu negocio.",
          bullets: ["Configuracion de propiedades y flujos de datos", "Eventos estandar y personalizados", "Conversiones y objetivos", "Informes personalizados"],
        },
        {
          title: "Google Tag Manager - Configuracion Avanzada",
          description: "Implementacion y gestion de GTM con arquitectura escalable, triggers inteligentes y debugging profesional.",
          bullets: ["Estructura de contenedores optimizada", "Variables y triggers avanzados", "Testing y depuracion", "Documentacion completa"],
        },
        {
          title: "Implementacion de Data Layer",
          description: "Diseno e implementacion de Data Layer estructurado para capturar datos de forma consistente y confiable.",
          bullets: ["Arquitectura de datos personalizada", "Eventos de ecommerce completos", "Validacion y testing", "Integracion con GTM"],
        },
        {
          title: "Integraciones WordPress y Next.js/React",
          description: "Implementaciones tecnicas especializadas para WordPress, WooCommerce y aplicaciones modernas en React/Next.js.",
          bullets: ["Plugins y hooks personalizados", "Single Page Apps (SPA)", "Server-side tracking", "Performance optimizado"],
        },
      ],
    },
    process: {
      badge: "Nuestro proceso",
      title: "Metodologia probada en mas de 150 proyectos",
      description: "Un enfoque sistematico que garantiza resultados precisos y sostenibles",
      steps: [
        { number: "01", title: "Auditoria Inicial", description: "Revisamos tu implementacion actual, identificamos errores y oportunidades de mejora" },
        { number: "02", title: "Estrategia de Medicion", description: "Definimos que medir, como medirlo y que insights necesitas para tu negocio" },
        { number: "03", title: "Implementacion Tecnica", description: "Configuramos GA4, GTM y Data Layer con las mejores practicas del mercado" },
        { number: "04", title: "Validacion", description: "Testing exhaustivo para garantizar que todos los datos fluyen correctamente" },
        { number: "05", title: "Capacitacion", description: "Entrenamos a tu equipo para que pueda aprovechar al maximo la nueva implementacion" },
      ],
    },
    technologies: {
      badge: "Tecnologias",
      title: "Expertos en las herramientas que usas",
      items: ["Google Analytics 4", "Google Tag Manager", "Data Layer", "WordPress", "WooCommerce", "Next.js", "React"],
    },
    about: {
      badge: "Sobre nosotros",
      title: "Especialistas en analitica digital con experiencia comprobada",
      paragraph1: "Somos un equipo de ingenieros y analistas especializados en implementaciones tecnicas de GA4, Google Tag Manager y arquitecturas de datos.",
      paragraph2: "Con mas de 5 anos de experiencia y mas de 150 proyectos completados, hemos ayudado a empresas de ecommerce, SaaS, marketplaces y medios digitales a construir sistemas de analitica confiables y escalables.",
      stats: [
        { title: "Certificados", description: "Google Analytics y GTM" },
        { title: "Clientes", description: "+80 empresas" },
        { title: "Experiencia", description: "+5 anos" },
      ],
      teamButton: "Contactanos",
      imageAlt: "Retrato del equipo",
    },
    faq: {
      badge: "FAQ",
      title: "Preguntas frecuentes",
      description: "Todo lo que necesitas saber sobre nuestros servicios",
      items: [
        {
          question: "Cuanto tiempo toma una implementacion completa de GA4 y GTM?",
          answer: "Depende de la complejidad del proyecto. Una implementacion estandar toma entre 2-4 semanas. Incluye auditoria, configuracion, testing y capacitacion. Proyectos complejos con multiples plataformas pueden tomar 6-8 semanas.",
        },
        {
          question: "Trabajan con WordPress y WooCommerce?",
          answer: "Si. Tenemos amplia experiencia implementando tracking en WordPress y WooCommerce, incluyendo ecommerce y seguimiento de conversiones.",
        },
        {
          question: "Pueden migrar mi configuracion de Universal Analytics a GA4?",
          answer: "Por supuesto. Analizamos tu configuracion actual, mapeamos eventos y objetivos, y migramos o replicamos la logica en GA4.",
        },
        {
          question: "Ofrecen soporte tecnico despues de la implementacion?",
          answer: "Ofrecemos paquetes de soporte y mantenimiento para asegurar que el tracking se mantenga correcto y actualizado.",
        },
        {
          question: "Que incluye la auditoria gratuita?",
          answer: "Revisamos tu implementacion actual de GA4 y GTM, identificamos errores criticos, eventos duplicados, conversiones rotas y te entregamos un reporte con hallazgos y recomendaciones prioritarias.",
        },
        {
          question: "Trabajan con aplicaciones Next.js y React?",
          answer: "Si. Implementamos tracking en aplicaciones modernas (SSR, SSG, SPA) y adaptamos la solucion al stack (Next.js, React, etc.).",
        },
      ],
    },
    demoCta: {
      eyebrow: "Demo en vivo",
      title: "Explora nuestra tienda demo de analitica",
      description: "Recorre un flujo de ecommerce simulado y observa eventos para vistas de producto, carrito, checkout y compra.",
      button: "Abrir tienda demo",
    },
    auditForm: {
      badge: "Contacto",
      title: "Solicita tu auditoria gratuita",
      subtitle: "Revisaremos tu implementacion actual y te enviaremos un reporte detallado con recomendaciones",
      fullName: "Nombre completo",
      email: "Email",
      platform: "Plataforma",
      message: "Mensaje",
      placeholderName: "Tu nombre",
      placeholderEmail: "tu@email.com",
      placeholderMessage: "Cuentanos sobre tu proyecto y que necesitas...",
      platformOptions: [
        { value: "", label: "Selecciona tu plataforma" },
        { value: "wordpress-woocommerce", label: "WordPress / WooCommerce" },
        { value: "nextjs-react", label: "Next.js / React" },
        { value: "shopify", label: "Shopify" },
        { value: "otro", label: "Otro" },
      ],
      submit: "Quiero mi auditoria gratuita",
      responseTime: "Respuesta en menos de 24 horas",
      honeypot: "No completes este campo si eres humano",
      submitError: "No pudimos enviar tu solicitud. Intenta nuevamente en unos minutos.",
    },
    footer: {
      notice: "Este sitio usa tracking anonimo solo con fines de demostracion. No utilizamos cookies para rastrear usuarios.",
    },
    thanks: {
      title: "Gracias por tu mensaje",
      description: "Recibimos tu solicitud de auditoria. Te responderemos en menos de 24 horas.",
      backHome: "Volver al inicio",
    },
  },
};
