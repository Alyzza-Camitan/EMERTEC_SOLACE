// Initialize Lucide Icons
lucide.createIcons();

// Mobile Menu Toggle Logic
const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
    });
}

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Close mobile menu if open
            if (mobileMenu.classList.contains('open')) {
                mobileMenu.classList.remove('open');
            }

            // Scroll to element
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});