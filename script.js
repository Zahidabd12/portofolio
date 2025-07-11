document.addEventListener('DOMContentLoaded', function() {
    // --- Theme (Light/Dark Mode) Toggle ---
    const themeToggle = document.getElementById('theme-toggle');
    // Kelas ikon dari Font Awesome
    const sunIconClass = 'fas fa-sun';
    const moonIconClass = 'fas fa-moon';

    let currentTheme = localStorage.getItem('theme') || 'dark';

    // Function to apply the selected theme
    const applyTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);

        // Update a.pngtribute 'innerHTML' pada tombol untuk mengganti ikon
        if (theme === 'light') {
            themeToggle.innerHTML = `<i class="${moonIconClass}"></i>`;
        } else {
            themeToggle.innerHTML = `<i class="${sunIconClass}"></i>`;
        }
    };

    // Apply the saved theme on initial load
    applyTheme(currentTheme);

    // Event listener for the theme toggle button
    themeToggle.addEventListener('click', () => {
        let newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
    });


    // --- Mobile Navigation Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });


    // --- Fade-in Animation on Scroll ---
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});