// Attendre que le document soit complètement chargé
document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. DÉFILEMENT DOUX POUR LES LIENS D'ANCRAGE (#)
       ========================================================================== */
    const navLinks = document.querySelectorAll('header nav a[href^="#"], .hero-content a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    /* ==========================================================================
       2. EFFET D'APPARITION AU SCROLL (ANIMATION DES CARTES)
       ========================================================================== */
    const cards = document.querySelectorAll('.card');

    const observerOptions = {
        threshold: 0.2
    };

    const cardObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        // Préparation du style initial pour l'animation
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        cardObserver.observe(card);
    });

    /* ==========================================================================
       3. OMBRE FLOTTANTE SUR LE HEADER AU DÉFILEMENT
       ========================================================================== */
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
            header.style.transition = 'box-shadow 0.3s ease';
        } else {
            header.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.05)';
        }
    });

});
