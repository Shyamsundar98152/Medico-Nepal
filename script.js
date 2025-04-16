// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.createElement('div');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    const header = document.querySelector('header .container');
    header.prepend(menuToggle);
    
    const nav = document.querySelector('header nav ul');
    
    menuToggle.addEventListener('click', function() {
        nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
    });
    
    // Responsive adjustment
    function adjustMenu() {
        if (window.innerWidth > 768) {
            nav.style.display = '';
        } else {
            nav.style.display = 'none';
        }
    }
    
    window.addEventListener('resize', adjustMenu);
    adjustMenu();
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Form validation for newsletter
    const newsletterForm = document.querySelector('#newsletter form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            const email = this.querySelector('input[type="email"]').value;
            if (!email || !email.includes('@')) {
                e.preventDefault();
                alert('Please enter a valid email address');
            }
        });
    }
});
