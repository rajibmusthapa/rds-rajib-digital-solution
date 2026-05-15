// ========== RDS WEBSITE - MAIN JAVASCRIPT ==========

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initTypingEffect();
    initScrollTop();
    initCustomCursor();
    initScrollReveal();
    initCounterAnimation();
    loadDynamicContent();
});

// Mobile Menu Toggle
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
}

// Typing Effect untuk Homepage
function initTypingEffect() {
    const typingElement = document.getElementById('typingTitle');
    if (!typingElement) return;
    
    const titles = [
        "Rajib Digital Solution",
        "Software House Expert",
        "Cyber Security Specialist",
        "Innovation & Excellence"
    ];
    
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeEffect() {
        const currentTitle = titles[titleIndex];
        if (isDeleting) {
            typingElement.innerHTML = currentTitle.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.innerHTML = currentTitle.substring(0, charIndex + 1);
            charIndex++;
        }
        
        if (!isDeleting && charIndex === currentTitle.length) {
            isDeleting = true;
            setTimeout(typeEffect, 2000);
            return;
        }
        
        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            titleIndex = (titleIndex + 1) % titles.length;
        }
        
        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
    typeEffect();
}

// Scroll to Top Button
function initScrollTop() {
    const scrollBtn = document.createElement('div');
    scrollBtn.className = 'scroll-top';
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollBtn);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollBtn.classList.add('active');
        } else {
            scrollBtn.classList.remove('active');
        }
    });
    
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Custom Cursor
function initCustomCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'cursor';
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });
    
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
    });
    
    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
    });
}

// Scroll Reveal Animation
function initScrollReveal() {
    const elements = document.querySelectorAll('.service-card, .portfolio-card, .blog-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// Counter Animation
function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat h3');
    if (!counters.length) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.innerText);
                if (isNaN(target)) return;
                
                let current = 0;
                const increment = target / 50;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        counter.innerText = target + (counter.innerText.includes('+') ? '+' : '');
                        clearInterval(timer);
                    } else {
                        counter.innerText = Math.floor(current) + (counter.innerText.includes('+') ? '+' : '');
                    }
                }, 30);
                
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
}

// Load Dynamic Content
function loadDynamicContent() {
    loadServices();
    loadPortfolio();
    loadBlogs();
}

function loadServices() {
    const servicesGrid = document.getElementById('servicesGrid');
    if (!servicesGrid) return;
    
    const services = [
        { icon: "fas fa-code", name: "Web Development", price: "Rp8.000.000 - 75.000.000", desc: "Website profesional, company profile, marketplace, e-commerce." },
        { icon: "fas fa-mobile-alt", name: "Mobile App Development", price: "Rp15.000.000 - 150.000.000", desc: "Aplikasi iOS & Android native dan cross-platform." },
        { icon: "fas fa-shield-alt", name: "Cyber Security", price: "Rp10.000.000 - 85.000.000", desc: "Perlindungan aset digital perusahaan dari ancaman siber." },
        { icon: "fas fa-laptop-code", name: "Custom Software", price: "Rp25.000.000 - 250.000.000", desc: "Solusi software tailor-made sesuai kebutuhan bisnis Anda." }
    ];
    
    services.forEach(service => {
        servicesGrid.innerHTML += `
            <div class="service-card">
                <i class="${service.icon}"></i>
                <h3>${service.name}</h3>
                <p>${service.desc}</p>
                <div class="price">${service.price}</div>
            </div>
        `;
    });
}

function loadPortfolio() {
    const portfolioGrid = document.getElementById('portfolioGrid');
    if (!portfolioGrid) return;
    
    const portfolios = [
        { name: "E-Commerce Marketplace", category: "Full Stack Web App", desc: "Payment gateway terintegrasi", img: "🛒" },
        { name: "Company Profile", category: "Sistem Manajemen", desc: "Rating A+ dari klien", img: "🏢" },
        { name: "Laundry Mobile App", category: "Aplikasi Tracking", desc: "Dengan payment gateway", img: "🧺" },
        { name: "Security Audit System", category: "Automated Scanning", desc: "Keamanan enterprise", img: "🔒" }
    ];
    
    portfolios.forEach(portfolio => {
        portfolioGrid.innerHTML += `
            <div class="portfolio-card">
                <div class="portfolio-img">
                    <i class="fas fa-${portfolio.img === '🛒' ? 'shopping-cart' : portfolio.img === '🏢' ? 'building' : portfolio.img === '🧺' ? 'tshirt' : 'shield-alt'} fa-3x"></i>
                </div>
                <div class="portfolio-info">
                    <h3>${portfolio.name}</h3>
                    <p>${portfolio.desc}</p>
                    <span class="portfolio-category">${portfolio.category}</span>
                </div>
            </div>
        `;
    });
}

function loadBlogs() {
    const blogGrid = document.getElementById('blogGrid');
    if (!blogGrid) return;
    
    const blogs = [
        { title: "Cara Melindungi Website dari Serangan Cyber", category: "Security", excerpt: "Pelajari teknik mencegah XSS, SQL Injection, dan serangan umum lainnya...", date: "15 Mei 2025" },
        { title: "Tips Memilih Software House yang Tepat", category: "Tips", excerpt: "Panduan memilih vendor pengembangan software untuk bisnis Anda...", date: "10 Mei 2025" },
        { title: "Tren Teknologi 2025 yang Harus Diketahui", category: "Trend", excerpt: "AI, Blockchain, dan teknologi terbaru yang akan mengubah industri...", date: "5 Mei 2025" }
    ];
    
    blogs.forEach(blog => {
        blogGrid.innerHTML += `
            <div class="blog-card">
                <div class="blog-img">
                    <i class="fas fa-blog fa-3x"></i>
                </div>
                <div class="blog-info">
                    <h3>${blog.title}</h3>
                    <p>${blog.excerpt}</p>
                    <a href="blog-detail.html" class="read-more">Baca Selengkapnya →</a>
                </div>
            </div>
        `;
    });
}

// Booking Form Handler
function submitBooking(event) {
    event.preventDefault();
    const formData = {
        name: document.getElementById('name')?.value,
        email: document.getElementById('email')?.value,
        service: document.getElementById('service')?.value,
        date: document.getElementById('date')?.value,
        message: document.getElementById('message')?.value
    };
    
    alert(`✅ Booking berhasil!\n\nTerima kasih ${formData.name}, kami akan menghubungi Anda segera.\n\nLayanan: ${formData.service}\nTanggal: ${formData.date}`);
    
    // Reset form
    event.target.reset();
    
    // Simpan ke localStorage
    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    bookings.push({ ...formData, id: Date.now(), status: 'pending' });
    localStorage.setItem('bookings', JSON.stringify(bookings));
}

// Contact Form Handler
function submitContact(event) {
    event.preventDefault();
    const formData = {
        name: document.getElementById('name')?.value,
        email: document.getElementById('email')?.value,
        message: document.getElementById('message')?.value
    };
    
    alert(`✅ Pesan terkirim!\n\nTerima kasih ${formData.name}, pesan Anda akan kami balas secepatnya.`);
    event.target.reset();
}

// Chat Handler
let chatHistory = [];

function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input?.value.trim();
    if (!message) return;
    
    addMessage(message, 'user');
    input.value = '';
    
    // Simulasi balasan bot
    setTimeout(() => {
        const botReply = getBotReply(message);
        addMessage(botReply, 'bot');
    }, 500);
}

function addMessage(text, sender) {
    const messagesDiv = document.getElementById('chatMessages');
    if (!messagesDiv) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    messageDiv.innerHTML = `<div class="message-content">${text}</div>`;
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
    
    chatHistory.push({ text, sender, time: new Date().toISOString() });
    localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
}

function getBotReply(message) {
    const lowerMsg = message.toLowerCase();
    if (lowerMsg.includes('harga') || lowerMsg.includes('price')) {
        return "💡 Harga layanan RDS mulai dari Rp8.000.000 untuk Website dan Rp15.000.000 untuk Mobile App. Untuk custom software, silakan konsultasi langsung ya!";
    } else if (lowerMsg.includes('kontak') || lowerMsg.includes('contact')) {
        return "📞 Anda bisa menghubungi kami di:\nWhatsApp: +62 821-1951-858\nEmail: rajibdigitalsolution@gmail.com";
    } else if (lowerMsg.includes('layanan') || lowerMsg.includes('service')) {
        return "🚀 RDS menyediakan: Web Development, Mobile App, Cyber Security, dan Custom Software. Ada yang ingin ditanyakan lebih lanjut?";
    } else {
        return "Terima kasih atas pesannya! Tim RDS akan segera merespon. Atau bisa langsung WhatsApp ke +62 821-1951-858 untuk respon lebih cepat. 💬";
    }
}

// Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-XXXXXXXXXX'); // Ganti dengan ID Google Analytics lo

// Export functions for global use
window.submitBooking = submitBooking;
window.submitContact = submitContact;
window.sendMessage = sendMessage;
