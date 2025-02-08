document.addEventListener("DOMContentLoaded", function () {
  const languageToggle = document.getElementById("language-toggle");
  const textElements = {
    about: { es: "Sobre mí", en: "About Me" },
    projects: { es: "Proyectos", en: "Projects" },
    presentation: { es: "Inicio", en: "Home" },
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
    aboutMe1: {
      es: " Soy un apasionado de la programación y el desarrollo de experiencias digitales atractivas, funcionales e innovadoras. Me especializo en el desarrollo web con ASP.NET Core y Angular, creando interfaces dinámicas e interactivas que mejoran la experiencia del usuario.",
      en: "I am passionate about programming and developing attractive, functional and innovative digital experiences. I specialize in web development with ASP.NET Core and Angular, creating dynamic and interactive interfaces that enhance the user experience.",
    },
    aboutMe2: {
      es: " Me motiva la resolución de problemas, la optimización del código y la creación de proyectos que impacten de manera positiva.",
      en: "I am motivated by problem solving, code optimization and creating projects that have a positive impact.",
    },
    skils: {
      es: "Habilidades",
      en: "Skills",
    },
    projects: {
      es: "Proyectos",
      en: "Projects",
    },
    project1: {
      es: "Libreria de peliculas y actores con su respectiva API e interfaz gráfica para realizar las configuraciones de la aplicación, añadir peliculas,celebridades,calificarlos,etc",
      en: "Movies and actors library with its respective API and graphical interface to make the application settings, add movies, celebrities, rate them, etc",
    },
    project2: {
      es: "Librería de videojuegos consumiendo la API RAWG que brinda toda la información necesaria sobre estos, valoraciones, trailers, fotos, etc.",
      en: "Video game library consuming the RAWG API that provides all the necessary information about these, ratings, trailers, photos, etc.",
    },
    projectTitle3: {
      es: "Sistema de control de condominios",
      en: "Condominium control system",
    },
    project3: {
      es: "Sistema para el control y administración de condominios con funcionalidades como pagos, reservas, gastos, incidencias, directivas, entre otras.",
      en: "System for the control and administration of condominiums with functionalities such as payments, reservations, expenses, incidents, directives, among others.",
    },
    buttonProject: {
      es: "Ver proyecto",
      en: "View project",
    }
  };

  let currentLanguage = "es";

  languageToggle.addEventListener("click", function () {
    currentLanguage = currentLanguage === "es" ? "en" : "es";

    document.querySelectorAll("[data-lang]").forEach((el) => {
      const key = el.getAttribute("data-lang");
      if (textElements[key]) {
        el.textContent = textElements[key][currentLanguage];
      }
    });

    if (currentLanguage === "es") {
      languageToggle.innerHTML = "🇺🇸 English";
    } else {
      languageToggle.innerHTML = "🇪🇸 Español";
    }
  });

  //Configuracion de naveegacion por secciones
    const sections = Array.from(document.querySelectorAll('.section'));
    let currentSectionIndex = 0;
    let isScrolling = false;

    function navigateToSection(index) {
        if (isScrolling || index < 0 || index >= sections.length) return;
        
        isScrolling = true;
        currentSectionIndex = index;
        
        sections[index].scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        setTimeout(() => {
            isScrolling = false;
        }, 1000);
    }

    document.getElementById('nextSection').addEventListener('click', (e) => {
        e.preventDefault();
        navigateToSection((currentSectionIndex + 1) % sections.length);
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetIndex = sections.findIndex(s => s.id === targetId);
            
            if (targetIndex !== -1) {
                navigateToSection(targetIndex);
            }
            
            const navbar = bootstrap.Collapse.getInstance(document.getElementById('navbarNav'));
            if (navbar) navbar.hide();
        });
    });



});
