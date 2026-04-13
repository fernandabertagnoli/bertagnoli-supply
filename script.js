const translations = {
  pt: {
    "meta.description": "Servi\u00e7os de bordo, provis\u00f5es e apoio log\u00edstico para opera\u00e7\u00f5es portu\u00e1rias.",
    "nav.home": "In\u00edcio",
    "nav.about": "Sobre",
    "nav.services": "Servi\u00e7os",
    "nav.contact": "Contato",
    "hero.kicker": "Itaja\u00ed - Santa Catarina",
    "hero.title": "Apoio portu\u00e1rio para embarca\u00e7\u00f5es que precisam seguir viagem.",
    "hero.text": "Suprimentos, provis\u00f5es e coordena\u00e7\u00e3o local para opera\u00e7\u00f5es mar\u00edtimas com agilidade e cuidado.",
    "hero.cta": "Falar pelo WhatsApp",
    "about.kicker": "Sobre a Bertagnoli Supply",
    "about.title": "Presen\u00e7a local para simplificar a opera\u00e7\u00e3o no porto.",
    "about.text": "A Bertagnoli Supply atua na \u00e1rea portu\u00e1ria de Itaja\u00ed com suporte log\u00edstico para embarca\u00e7\u00f5es de longo curso e cabotagem no Brasil. Organizamos entregas, suprimentos e apoio operacional para empresas que precisam de um parceiro local confi\u00e1vel.",
    "services.kicker": "Servi\u00e7os",
    "services.title": "O que resolvemos a bordo e no cais.",
    "services.text": "Cada demanda \u00e9 coordenada com fornecedores confi\u00e1veis, prazos claros e comunica\u00e7\u00e3o direta com a equipe envolvida.",
    "service.supply.title": "Abastecimento",
    "service.supply.text": "Entrega de materiais essenciais para a opera\u00e7\u00e3o mar\u00edtima, diretamente no porto ou a bordo da embarca\u00e7\u00e3o.",
    "service.provisions.title": "Provis\u00f5es",
    "service.provisions.text": "Alimentos, bebidas e itens de consumo para tripula\u00e7\u00f5es, com sele\u00e7\u00e3o de fornecedores e resposta r\u00e1pida.",
    "service.coordination.title": "Coordena\u00e7\u00e3o",
    "service.coordination.text": "Apoio para empresas sem cadastro ou presen\u00e7a operacional no porto, com organiza\u00e7\u00e3o de entregas e documenta\u00e7\u00e3o b\u00e1sica.",
    "service.logistics.title": "Log\u00edstica",
    "service.logistics.text": "Suporte integrado para materiais, prazos e rotinas portu\u00e1rias, reduzindo atritos entre fornecedor, ag\u00eancia e embarca\u00e7\u00e3o.",
    "contact.kicker": "Contato",
    "contact.title": "Vamos organizar sua pr\u00f3xima entrega.",
    "contact.text": "Envie a demanda, o porto, o prazo e os dados da embarca\u00e7\u00e3o. Retornamos pelo canal mais r\u00e1pido.",
    "contact.email": "Email",
    "contact.message": "Mensagem",
    "contact.submit": "Enviar",
    "contact.location": "Itaja\u00ed - SC, Brasil",
    "chat.label": "WhatsApp"
  },
  en: {
    "meta.description": "On-board supplies, provisions and logistics support for port operations.",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "hero.kicker": "Itajai - Santa Catarina",
    "hero.title": "Port support for vessels that need to keep moving.",
    "hero.text": "Supplies, provisions and local coordination for maritime operations with speed and care.",
    "hero.cta": "Talk on WhatsApp",
    "about.kicker": "About Bertagnoli Supply",
    "about.title": "Local presence to simplify port operations.",
    "about.text": "Bertagnoli Supply works in the port area of Itajai with logistics support for long-haul and cabotage vessels in Brazil. We organize deliveries, supplies and operational support for companies that need a reliable local partner.",
    "services.kicker": "Services",
    "services.title": "What we handle on board and dockside.",
    "services.text": "Each request is coordinated with reliable suppliers, clear timing and direct communication with the team involved.",
    "service.supply.title": "Supply",
    "service.supply.text": "Delivery of essential materials for maritime operations, directly at the port or on board the vessel.",
    "service.provisions.title": "Provisions",
    "service.provisions.text": "Food, beverages and crew consumption items, with supplier selection and fast response.",
    "service.coordination.title": "Coordination",
    "service.coordination.text": "Support for companies without port registration or local presence, including delivery organization and basic documentation.",
    "service.logistics.title": "Logistics",
    "service.logistics.text": "Integrated support for materials, deadlines and port routines, reducing friction between supplier, agency and vessel.",
    "contact.kicker": "Contact",
    "contact.title": "Let's organize your next delivery.",
    "contact.text": "Send the request, port, deadline and vessel details. We will reply through the fastest channel.",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.submit": "Send",
    "contact.location": "Itajai - SC, Brazil",
    "chat.label": "WhatsApp"
  }
};

const languageButton = document.querySelector(".language");
const languageCode = document.querySelector(".language-code");
const metaDescription = document.querySelector('meta[name="description"]');

function setLanguage(language) {
  const dictionary = translations[language];

  document.documentElement.lang = language === "pt" ? "pt-BR" : "en";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  if (metaDescription) {
    metaDescription.setAttribute("content", dictionary["meta.description"]);
  }

  languageCode.textContent = language === "pt" ? "PT" : "EN";
  languageButton.dataset.language = language;
  languageButton.setAttribute(
    "aria-label",
    language === "pt" ? "Idioma atual: portugu\u00eas. Trocar para ingl\u00eas" : "Current language: English. Switch to Portuguese"
  );
  localStorage.setItem("site-language", language);
}

const savedLanguage = localStorage.getItem("site-language");
const browserLanguage = navigator.language.toLowerCase().startsWith("en") ? "en" : "pt";
let currentLanguage = translations[savedLanguage] ? savedLanguage : browserLanguage;

setLanguage(currentLanguage);

languageButton.addEventListener("click", () => {
  currentLanguage = currentLanguage === "pt" ? "en" : "pt";
  setLanguage(currentLanguage);
});

document.querySelectorAll('.nav a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));

    if (!target) {
      return;
    }

    event.preventDefault();

    const headerHeight = document.querySelector(".site-header").offsetHeight;
    const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 18;

    window.scrollTo({
      top: Math.max(0, top),
      behavior: "smooth"
    });
  });
});
