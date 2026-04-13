const translations = {
  pt: {
    "meta.description": "Serviços de bordo e operações portuárias para embarcações.",
    "nav.home": "Início",
    "nav.about": "Sobre",
    "nav.services": "Serviços",
    "nav.contact": "Contato",
    "hero.title": "Serviços de Bordo e Operações Portuárias para Embarcações.",
    "hero.caption": "Suprimentos e serviços para embarcações no Vale do Itajaí.",
    "about.title": "Sobre a Bertagnoli Supply",
    "about.kicker": "Nossa História",
    "about.text": "A Bertagnoli Supply é uma prestadora de serviços logísticos localizada na área portuária de Itajaí, especializada em suprimentos para embarcações de longo percurso e cabotagem no Brasil. Atuamos como intermediários operacionais, facilitando o embarque de carga e a logística para empresas sem registro portuário.",
    "services.title": "Nossos Serviços",
    "services.kicker": "O que fazemos",
    "services.text": "Na Bertagnoli Supply, oferecemos soluções logísticas completas e eficientes para atender às necessidades de nossos clientes no setor marítimo.",
    "service.supply.title": "Abastecimento",
    "service.supply.kicker": "Suprimentos a Bordo",
    "service.supply.text": "Realizamos o abastecimento completo de embarcações, fornecendo suprimentos essenciais para a operação marítima. Atendemos desde itens operacionais até necessidades da tripulação, garantindo agilidade, qualidade e entregas diretamente no porto ou a bordo da embarcação.",
    "service.provisions.title": "Provisões",
    "service.provisions.kicker": "Alimentos e Bebidas",
    "service.provisions.text": "Fornecemos provisões completas para embarcações, incluindo alimentos, bebidas e itens de consumo para a tripulação. Trabalhamos com fornecedores confiáveis para garantir produtos de qualidade e entregas rápidas, atendendo às demandas específicas de cada operação.",
    "service.coordination.title": "Coordenação",
    "service.coordination.kicker": "Atendimento a Empresas sem Cadastro no Porto",
    "service.coordination.text": "Auxiliamos empresas que não possuem cadastro ou presença operacional no porto a realizar fornecimentos e operações necessárias. Atuamos como parceiro local, organizando a logística, a entrega de materiais e o suporte para que a operação ocorra de forma ágil e dentro das exigências portuárias.",
    "service.logistics.title": "Logística",
    "service.logistics.kicker": "Serviços Integrados",
    "service.logistics.text": "Oferecemos suporte logístico completo para operações portuárias e marítimas, incluindo fornecimento de materiais, coordenação de entregas e suporte operacional. Nosso objetivo é simplificar processos e garantir que cada operação ocorra com eficiência e confiabilidade.",
    "contact.title": "Entre em Contato",
    "contact.email": "Email *",
    "contact.newsletter": "Yes, subscribe me to your newsletter. *",
    "contact.submit": "Enviar",
    "contact.location": "Itajaí - SC, Brasil",
    "legal.privacy": "Política de Privacidade",
    "legal.accessibility": "Declaração de acessibilidade",
    "chat.label": "Vamos conversar por chat"
  },
  en: {
    "meta.description": "On-board supply services and port operations for vessels.",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "hero.title": "On-Board Supply and Port Operations Services for Vessels.",
    "hero.caption": "Supplies and services for vessels in the Itajaí Valley.",
    "about.title": "About Bertagnoli Supply",
    "about.kicker": "Our Story",
    "about.text": "Bertagnoli Supply is a logistics services provider located in the port area of Itajaí, specialized in supplies for long-haul and cabotage vessels in Brazil. We act as operational intermediaries, facilitating cargo boarding and logistics for companies without port registration.",
    "services.title": "Our Services",
    "services.kicker": "What we do",
    "services.text": "At Bertagnoli Supply, we offer complete and efficient logistics solutions to meet our clients' needs in the maritime sector.",
    "service.supply.title": "Supply",
    "service.supply.kicker": "On-Board Supplies",
    "service.supply.text": "We provide complete vessel supply services, delivering essential items for maritime operations. We handle everything from operational materials to crew needs, ensuring agility, quality and deliveries directly at the port or on board the vessel.",
    "service.provisions.title": "Provisions",
    "service.provisions.kicker": "Food and Beverages",
    "service.provisions.text": "We provide complete provisions for vessels, including food, beverages and crew consumption items. We work with reliable suppliers to ensure quality products and fast deliveries, meeting the specific demands of each operation.",
    "service.coordination.title": "Coordination",
    "service.coordination.kicker": "Support for Companies without Port Registration",
    "service.coordination.text": "We assist companies that do not have registration or an operational presence at the port in carrying out required supplies and operations. We act as a local partner, organizing logistics, material delivery and support so the operation runs efficiently and within port requirements.",
    "service.logistics.title": "Logistics",
    "service.logistics.kicker": "Integrated Services",
    "service.logistics.text": "We offer complete logistics support for port and maritime operations, including material supply, delivery coordination and operational support. Our goal is to simplify processes and ensure each operation runs with efficiency and reliability.",
    "contact.title": "Get in Touch",
    "contact.email": "Email *",
    "contact.newsletter": "Yes, subscribe me to your newsletter. *",
    "contact.submit": "Send",
    "contact.location": "Itajaí - SC, Brazil",
    "legal.privacy": "Privacy Policy",
    "legal.accessibility": "Accessibility Statement",
    "chat.label": "Let's chat"
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
    language === "pt" ? "Idioma atual: português. Trocar para inglês" : "Current language: English. Switch to Portuguese"
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
    const targetId = target.getAttribute("id");
    const offsets = {
      inicio: 0,
      sobre: 72,
      servicos: 34,
      contato: -170
    };
    const extraSpace = offsets[targetId] ?? 34;
    const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - extraSpace;

    window.scrollTo({
      top: Math.max(0, top),
      behavior: "smooth"
    });
  });
});
