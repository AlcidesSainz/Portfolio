document.addEventListener("DOMContentLoaded", function () {
  const languageToggle = document.getElementById("language-toggle");
  const textElements = {
    about: { es: "Sobre mí", en: "About Me" },
    projects: { es: "Proyectos", en: "Projects" },
    contact: { es: "Contacto", en: "Contact" },
    greeting: {
      es: "Alcides Sainz",
      en: "Alcides Sainz",
    },
    title: {
      es: "Mi Portafolio",
      en: "My Portfolio",
    },
    footer: {
      es: "© 2025 Diseñado y desarrollado por Alcides Sainz",
      en: "© 2025 Designed and developed by Alcides Sainz",
    },
    description: {
        es: "Desarrollador web",
        en: "Web developer",
      },
      downloadCv: {
        es: "Descargar CV",
        en: "Download CV",
      },
      whatsappContact: {
        es: "Contactar por WhatsApp",
        en: "Contact by WhatsApp",
      },
  };

  let currentLanguage = "es"; // Idioma por defecto

  languageToggle.addEventListener("click", function () {
    currentLanguage = currentLanguage === "es" ? "en" : "es";

    // Cambiar textos en la navbar
    document.querySelectorAll("[data-lang]").forEach((el) => {
      const key = el.getAttribute("data-lang");
      el.textContent = textElements[key][currentLanguage];
    });

    // Cambiar el texto del botón
    languageToggle.textContent =
      currentLanguage === "es" ? "🇺🇸 English" : "🇪🇸 Español";
  });
});
// Configuración de secciones
const sections = Array.from(document.querySelectorAll('.section'));
let currentSectionIndex = 0;

// Función para desplazar a la siguiente sección
function goToNextSection() {
    currentSectionIndex = (currentSectionIndex + 1) % sections.length;
    sections[currentSectionIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Evento para la flecha
document.getElementById('nextSection').addEventListener('click', (e) => {
    e.preventDefault();
    goToNextSection();
});

// Opcional: Reiniciar el índice si el usuario navega manualmente
window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        if (currentScroll >= sectionTop - 100) {
            currentSectionIndex = index;
        }
    });
});


