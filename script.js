// script.js - Versão corrigida
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.querySelector('.sidebar');

// Função para alternar o menu (abrir/fechar)
function toggleMenu() {
    sidebar.classList.toggle('closed');
}

// Configurar comportamento baseado no tamanho da tela
function setupMenu() {
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        // MOBILE: Menu começa fechado
        sidebar.classList.add('closed');
    } else {
        // DESKTOP: Menu começa aberto
        sidebar.classList.remove('closed');
    }
    
    // Garante que o botão sempre funcione
    menuToggle.onclick = toggleMenu;
}

// Executa ao carregar a página
setupMenu();

// Executa ao redimensionar a tela
window.addEventListener('resize', setupMenu);