// Esperar a que el DOM cargue
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Lógica del Menú Hamburguesa
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.querySelector('.nav-list');

    menuToggle.addEventListener('click', () => {
        // Alternar la clase "show" que ya definiste
        navList.classList.toggle('show');
        
        const isOpen = navList.classList.contains('show');
        menuToggle.textContent = isOpen ? '✕' : '☰';
        menuToggle.setAttribute('aria-expanded', isOpen);
    });

    // 2. Cerrar menú al hacer clic en un enlace (ideal para Single Page)
    document.querySelectorAll('.nav-list a').forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('show');
            menuToggle.textContent = '☰';
        });
    });

    // 3. Año dinámico para el footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
