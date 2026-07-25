document.addEventListener('DOMContentLoaded', () => {
    // Défilement fluide pour les liens de navigation
    const links = document.querySelectorAll('nav a, .btn');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            
            // On vérifie si le lien pointe bien vers une section de la page
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
