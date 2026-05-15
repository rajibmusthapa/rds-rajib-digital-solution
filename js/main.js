// ========== DATA ==========
const heroData = {
    title: "Bangun Digital Solution",
    subtitle: "Dengan Teknologi Terkini",
    description: "Web Development • Mobile App • Cyber Security • Custom Software"
};

const servicesData = [
    { id: 1, icon: "fas fa-globe", title: "Web Development", desc: "Website profesional, company profile, marketplace, e-commerce.", price: "Rp8.000.000 - 75.000.000" },
    { id: 2, icon: "fas fa-mobile-alt", title: "Mobile App Development", desc: "Aplikasi iOS & Android native dan cross-platform.", price: "Rp15.000.000 - 150.000.000" },
    { id: 3, icon: "fas fa-shield-alt", title: "Cyber Security", desc: "Perlindungan aset digital perusahaan dari ancaman siber.", price: "Rp10.000.000 - 85.000.000" },
    { id: 4, icon: "fas fa-laptop-code", title: "Custom Software", desc: "Solusi software tailor-made sesuai kebutuhan bisnis Anda.", price: "Rp25.000.000 - 250.000.000" }
];

const portfolioData = [
    { id: 1, title: "E-Commerce Marketplace", category: "web", desc: "Full Stack Web App dengan payment gateway", icon: "fas fa-shopping-cart" },
    { id: 2, title: "Company Profile", category: "web", desc: "Sistem manajemen proyek rating A+", icon: "fas fa-building" },
    { id: 3, title: "Laundry Mobile App", category: "mobile", desc: "Aplikasi tracking & payment gateway", icon: "fas fa-mobile-alt" },
    { id: 4, title: "Security Audit System", category: "security", desc: "Automated security scanning", icon: "fas fa-shield-alt" }
];

const socialData = [
    { name: "Instagram", url: "#", icon: "fab fa-instagram" },
    { name: "Twitter", url: "#", icon: "fab fa-twitter" },
    { name: "LinkedIn", url: "#", icon: "fab fa-linkedin" },
    { name: "GitHub", url: "https://github.com/rajibmusthapa", icon: "fab fa-github" }
];

// ========== FUNCTIONS ==========

// Typing Effect
function initTypingEffect() {
    const titleEl = document.getElementById('typingTitle');
    const descEl = document.getElementById('heroDesc');
    if (!titleEl) return;
    const fullText = heroData.title + ' ' + heroData.subtitle;
    let i = 0;
    function typeWriter() {
        if (i < fullText.length) {
            titleEl.innerHTML = fullText.substring(0, i + 1);
            i++;
            setTimeout(typeWriter, 80);
        } else {
            descEl.innerHTML = heroData.description;
        }
    }
    typeWriter();
}

// Render Services
function renderServices() {
    const grid = document.getElementById('servicesGrid');
    if (!grid) return;
    grid.innerHTML = '';
    servicesData.forEach(service => {
        grid.innerHTML += `
            <div class="service-card">
                <i class="${service.icon}"></i>
                <h3>${service.title}</h3>
                <p>${service.desc}</p>
                <div class="price">${service.price}</div>
            </div>
        `;
    });
}

// Render Portfolio
function renderPortfolio() {
    const grid = document.getElementById('portfolioGrid');
    if (!grid) return;
    grid.innerHTML = '';
    portfolioData.forEach(portfolio => {
        grid.innerHTML += `
            <div class="portfolio-card">
                <div class="portfolio-img"><i class="${portfolio.icon}"></i></div>
                <div class="portfolio-info">
                    <h3>${portfolio.title}</h3>
                    <p>${portfolio.desc}</p>
                </div>
            </div>
        `;
    });
}

// Render Social Links
function renderSocialLinks() {
    const container = document.getElementById('socialLinks');
    if (!container) return;
    container.innerHTML = '';
    socialData.forEach(social => {
        container.innerHTML += `<a href="${social.url}" target="_blank"><i class="${social.icon}"></i></a>`;
    });
}

// Mobile Menu
function initMobileMenu() {
    const toggle = document.getElementById('menuToggle');
    const nav = document.getElementById('navMenu');
    if (toggle && nav) {
        toggle.addEventListener('click', () => nav.classList.toggle('active'));
        document.querySelectorAll('.nav a').forEach(link => {
            link.addEventListener('click', () => nav.classList.remove('active'));
        });
    }
}

// Smooth Scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });
}

// Init All
document.addEventListener('DOMContentLoaded', () => {
    initTypingEffect();
    renderServices();
    renderPortfolio();
    renderSocialLinks();
    initMobileMenu();
    initSmoothScroll();
    console.log('🔥 RDS Website Loaded!');
});
