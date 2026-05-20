const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.querySelector(".sidebar");

// Verifica se é mobile
function isMobile() {
    return window.innerWidth <= 900;
}

// Função para fechar sidebar no mobile
function closeMobileSidebar() {
    if (isMobile()) {
        sidebar.classList.remove("mobile-open");
        
        setTimeout(() => {
            const overlay = document.querySelector(".overlay");
            if (overlay && !sidebar.classList.contains("mobile-open")) {
                overlay.classList.remove("active");
            }
        }, 300);
        
        document.body.style.overflow = "";
    }
}

// Função para abrir sidebar no mobile
function openMobileSidebar() {
    if (isMobile()) {
        sidebar.classList.add("mobile-open");
        
        let overlay = document.querySelector(".overlay");
        if (!overlay) {
            overlay = document.createElement("div");
            overlay.className = "overlay";
            document.body.appendChild(overlay);
            
            overlay.addEventListener("click", closeMobileSidebar);
        }
        
        setTimeout(() => {
            overlay.classList.add("active");
        }, 10);
        
        document.body.style.overflow = "hidden";
    }
}

// Evento do botão toggle (sem animação no botão)
menuToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    
    if (isMobile()) {
        if (sidebar.classList.contains("mobile-open")) {
            closeMobileSidebar();
        } else {
            openMobileSidebar();
        }
    } else {
        sidebar.classList.toggle("closed");
    }
});

// Fecha sidebar mobile ao clicar em um link
const navLinks = document.querySelectorAll(".sidebar a");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (isMobile()) {
            closeMobileSidebar();
        }
    });
});

// Fecha sidebar mobile ao redimensionar para desktop
window.addEventListener("resize", () => {
    if (!isMobile()) {
        if (sidebar.classList.contains("mobile-open")) {
            sidebar.classList.remove("mobile-open");
            
            const overlay = document.querySelector(".overlay");
            if (overlay) {
                overlay.classList.remove("active");
            }
            
            document.body.style.overflow = "";
        }
    }
});

// Previne que clique dentro da sidebar feche ela no mobile
sidebar.addEventListener("click", (e) => {
    if (isMobile()) {
        e.stopPropagation();
    }
});