// ============================================
// DOM ELEMENTS
// ============================================
const header = document.getElementById('header');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const nav = document.getElementById('nav');
const navLinks = document.querySelectorAll('.nav-link');
const backToTopBtn = document.getElementById('backToTop');
const contactForm = document.getElementById('contactForm');

// ============================================
// HEADER SCROLL EFFECT
// ============================================
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Back to top button visibility
    if (window.scrollY > 500) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

// ============================================
// MOBILE MENU TOGGLE
// ============================================
mobileMenuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');

    // Animate hamburger menu
    const spans = mobileMenuBtn.querySelectorAll('span');
    if (nav.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// ============================================
// CLOSE MOBILE MENU ON LINK CLICK
// ============================================
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');

        // Reset hamburger menu
        const spans = mobileMenuBtn.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// ============================================
// BACK TO TOP BUTTON
// ============================================
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ============================================
// CONTACT FORM SUBMISSION
// ============================================
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Basic validation
    if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Simulate form submission
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const headerHeight = header.offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// ANIMATION ON SCROLL
// ============================================
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.feature-card, .brand-item, .product-card, .event-card');

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Initialize animation state
const initAnimations = () => {
    const elements = document.querySelectorAll('.feature-card, .brand-item, .product-card, .event-card');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
};

// Run on load and scroll
window.addEventListener('load', () => {
    initAnimations();
    animateOnScroll();
});

window.addEventListener('scroll', animateOnScroll);

// ============================================
// BRAND CAROUSEL (OPTIONAL)
// ============================================
// This is a placeholder for if you want to add a carousel for brands
// const initBrandCarousel = () => {
//     const brandsContainer = document.querySelector('.brands-grid');
//     // Add carousel logic here if needed
// };
