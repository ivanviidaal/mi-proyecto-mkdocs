// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    console.log("Script cargado correctamente");

    /* --- Scroll Suave para Enlaces --- */
    const smoothScroll = (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: "smooth"
            });
        }
    };

    const links = document.querySelectorAll("a[href^='#']");
    links.forEach(link => {
        link.addEventListener("click", smoothScroll);
    });

    /* --- Botón Flotante para Volver al Inicio --- */
    const createBackToTopButton = () => {
        const button = document.createElement("button");
        button.innerText = "⬆";
        button.id = "back-to-top";
        button.style.position = "fixed";
        button.style.bottom = "20px";
        button.style.right = "20px";
        button.style.padding = "10px 15px";
        button.style.border = "none";
        button.style.borderRadius = "50%";
        button.style.backgroundColor = "#2196f3";
        button.style.color = "white";
        button.style.cursor = "pointer";
        button.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.2)";
        button.style.display = "none";
        button.style.zIndex = "1000";

        button.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });

        document.body.appendChild(button);

        // Mostrar/ocultar el botón al hacer scroll
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                button.style.display = "block";
            } else {
                button.style.display = "none";
            }
        });
    };

    createBackToTopButton();

    

    /* --- Animaciones para Imágenes y Secciones --- */
    const animateOnScroll = () => {
        const elements = document.querySelectorAll(".animate-on-scroll");

        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

            if (isVisible) {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }
        });
    };

    const addAnimationStyles = () => {
        const elements = document.querySelectorAll(".animate-on-scroll");

        elements.forEach(el => {
            el.style.transition = "all 0.5s ease-out";
            el.style.opacity = "0";
            el.style.transform = "translateY(20px)";
        });
    };

    addAnimationStyles();
    window.addEventListener("scroll", animateOnScroll);

    /* --- Añadir Animación a Imágenes y Secciones --- */
    const images = document.querySelectorAll("img");
    images.forEach(img => {
        img.classList.add("animate-on-scroll");
    });

    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.classList.add("animate-on-scroll");
    });
    /* --- Mostrar mensaje de bienvenida --- */
    const showWelcomeMessage = () => {
        if (!localStorage.getItem("visited")) {
            // Mostrar el mensaje solo si es la primera vez
            alert("¡Bienvenido a mi sitio web! Espero que disfrutes explorándolo.");
            localStorage.setItem("visited", "true");
        }
    };

    showWelcomeMessage();


    /* --- Crear un pop-up al final del contenido --- */
    const createPopup = () => {
        const popup = document.createElement("div");
        popup.id = "popup";
        popup.innerHTML = `
            <div style="
                position: fixed;
                bottom: 50px;
                right: 50px;
                background-color: white;
                border: 2px solid #2196f3;
                border-radius: 10px;
                padding: 20px;
                box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
                z-index: 1000;
                max-width: 300px;">
                <p style="margin: 0; color: #333;">¿Te gusta la página? ¡Compártela con tus amigos!</p>
                <button id="close-popup" style="
                    margin-top: 10px;
                    background-color: #2196f3;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    padding: 5px 10px;
                    cursor: pointer;">Cerrar</button>
            </div>
        `;

        document.body.appendChild(popup);

        const closeButton = document.getElementById("close-popup");
        closeButton.addEventListener("click", () => {
            popup.style.display = "none";
        });
    };

    setTimeout(createPopup, 5000); // Mostrar el pop-up después de 5 segundos
});
