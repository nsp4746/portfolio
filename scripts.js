const themeToggle = document.getElementById('theme-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');
const html = document.documentElement;
const projectHero = document.getElementById('project-hero');

function updateIcons(theme) {
    if (theme === 'light') {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    } else {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    }
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const isDark = html.getAttribute('data-theme') === 'dark';
        const newTheme = isDark ? 'light' : 'dark';
        
        html.setAttribute('data-theme', newTheme);
        updateIcons(newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// Initialize from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    html.setAttribute('data-theme', savedTheme);
    updateIcons(savedTheme);
}

// Project Hero Scroll Logic
if (projectHero) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            projectHero.classList.add('minimized');
        } else {
            projectHero.classList.remove('minimized');
        }
    });
}
