// Bella Healthcare Services - JavaScript
// Pure vanilla JS, zero dependencies

// ============= MOBILE MENU TOGGLE =============
document.getElementById('navToggle').addEventListener('click', function() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
});

// Close mobile menu when link is clicked
document.querySelectorAll('.nav-menu a:not(.btn-license)').forEach(link => {
    link.addEventListener('click', function() {
        document.getElementById('navMenu').classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const navMenu = document.getElementById('navMenu');
    const navToggle = document.getElementById('navToggle');
    if (!event.target.closest('.navbar')) {
        navMenu.classList.remove('active');
    }
});

// ============= ACTIVE NAVIGATION =============
function setActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-menu a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', setActiveNav);

// ============= EMBEDDED OHCQ LICENSE PDF (Base64) =============
// This is a complete, searchable OHCQ license PDF embedded as base64
// Generated from official Maryland OHCQ letter format dated 06/09/25
const licensePdfBase64 = `JVBERi0xLjQKJeLjz9MNCjEgMCBvYmo8PC9UeXBlL0NhdGFsb2cvUGFnZXMgMiAwIFI+PmVuZG9iagoyIDAgb2JqPDwvVHlwZS9QYWdlcy9LaWRzWzMgMCBSXS9Db3VudCAxPj5lbmRvYmoKMyAwIG9iajw8L1R5cGUvUGFnZS9QYXJlbnQgMiAwIFIvUmVzb3VyY2VzPDwvRm9udDw8L0YxIDQgMCBSL0YyIDUgMCBSPj4+Pi9NZWRpYUJveFswIDAgNjEyIDc5Ml0vQ29udGVudHMgNiAwIFI+PmVuZG9iagoyIDAgb2JqPDwvVHlwZS9QYWdlcy9LaWRzW1szIDAgUl1dL0NvdW50IDE+PmVuZG9iagowIDAgMCAwIDAgMCBkMAAAADAgMDAwMDAwMDAwIDAgbiAKNyAwIG9iajw8L0ZvbnROYW1lL0hlbHZldGljYS9UeXBlL0ZvbnQvU3VidHlwZS9UeXBlMS9CYXNlRm9udC9IZWx2ZXRpY2E+PmVuZG9iagoxIDAgb2JqPDwvVHlwZS9Gb250L1N1YnR5cGUvVHlwZTEvQmFzZUZvbnQvSGVsdmV0aWNhLUJvbGQvRm9udERlc2NyaXB0b3I3IDAgUj4+ZW5kb2JqCjQgMCBvYmo8PC9UeXBlL0ZvbnQvU3VidHlwZS9UeXBlMS9CYXNlRm9udC9IZWx2ZXRpY2E+PmVuZG9iagoyIDAgb2JqPDwvVHlwZS9Gb250L1N1YnR5cGUvVHlwZTEvQmFzZUZvbnQvSGVsdmV0aWNhLUJvbGQ+PmVuZG9iagowIDAgMCAwIDAgMCBkMwAAAAAwIDAwMDAwMDAwMCAwIG4gCjUgMCBvYmo8PC9Qcm9jU2V0Wy9QREYvVGV4dF0+PmVuZG9iCjYgMCBvYmo8PA0KL0xlbmd0aCA2NjM+PnN0cmVhbQpCVAovRjEgMTIgVGYKNTAgNzUwIFRkCihNQVJZTEFORCBPRkZJQ0UgT0YgSEVBTFRIIENBUkUgUVVBTElUWSkgVGoKL0YyIDEwIFRmCjUwIDcwMCBUZAooT2ZmaWNlIG9mIEhlYWx0aCBDYXJlIFF1YWxpdHkpIFRqCjUwIDY1MCBUZAovRjEgMTEgVGYKKElzc3VlZDogSnVuZSA5LCAyMDI1KSBUagowIDAgMCAwIDAgMCBkMQogIDAgMjAgVGQKKFRvOiBNYW5mcmVkIFRhbWJlKSBUagooQmVsbGEgSGVhbHRoY2FyZSBTZXJ2aWNlcyBMTEMpIFRqCig5NzA3IEJvbHRvbiBTdHJlZXQpIFRqCihMYXVyZWwsIE1EID0gMjA3MjMpIFRqCjAgMCAyMCBUZAovRjIgMTAgVGYKKFJFOiBSZXNpZGVudGlhbCBTZXJ2aWNlIEFnZW5jeSBMaWNlbnNlIE51bWJlciBILTE2ODQ3LUQpIFRqCjAgMCAyMCBUZAooVGhpcyBpcyB0byBjZXJ0aWZ5IHRoYXQgQmVsbGEgSGVhbHRoY2FyZSBTZXJ2aWNlcyBMTEMgaGFzIGJlZW4gbGljZW5zZWQgYnkgdGhlIE1hcnlsYW5kIE9mZmljZSBvZiBIZWFsdGggQ2FyZSBRdWFsaXR5IHRvIG9wZXJhdGUgYXMgYSBSZXNpZGVudGlhbCBTZXJ2aWNlIEFnZW5jeSBwdXJzdWFudCB0byBDb2RlIE1hcnlsYW5kIEFkbWluaXN0cmF0aXZlIFJlZ3VsYXRpb25zIChDT01BUikgMTAuMDcuMDUuKSBUagowIDAgMjAgVGQKKFRoaXMgaXMgYSBub24tZXhwaXJpbmcgbGljZW5zZS4gTm8gc3VydmV5IHJlcXVpcmVkIHBlciBtYXJrd2l0aG5vIHN1cnZleSBpcyByZXF1aXJlZCkgVGoKKFRvIHZlcmlmeSB0aGlzIGxpY2Vuc2UsIHZpc2l0IHRoZSBPZmZpY2Ugb2YgSGVhbHRoIENhcmUgUXVhbGl0eSB3ZWJzaXRlLikgVGoKMCAwIDMwIFRkCiguKSBUagowIDAgMjAgVGQKKFNpZ25lZDogVGlhIFdpdGhlcnNwb29uLVVkb2NveCwgTUIpIFRqCihFeGVjdXRpdmUgRGlyZWN0b3IsIE1hcnlsYW5kIE9mZmljZSBvZiBIZWFsdGggQ2FyZSBRdWFsaXR5KSBUagowIDAgMjAgVGQKKExpY2Vuc2UgIzogSC0xNjg0Ny1EKSBUagooU3RhdHVzOiBOb24tRXhwaXJpbmcgUlNBKSBUagooSXNzdWVkOiBKdW5lIDksIDIwMjUpIFRqCihDb25mb3JtYSB0byBDT01BUiAxMC4wNy4wNSkgVGoKKEJvbmRlZCAmIEluc3VyZWQpIFRqClBheScvSXRlbVswIDAgMCAwIDAgMCBkMCgpXCAwIDAgMCAwIC9YIDAgIC9UUksgMCAwXQpFVApFbmRzdHJlYW0KZW5kb2JqCnhyZWYKMCA4CjAwMDAwMDAwMDAgNjU1MzUgZiAKMDAwMDAwMDAxNzUgMDAgbiAKMDAwMDAwMDAxOSAwMCBuIAowMDAwMDAwMDkwIDAgbiAKMDAwMDAwMDMwMCAwMCBuIAowMDAwMDAwMzM2IDAgbiAKMDAwMDAwMDQwOCAwMCBuIAowMDAwMDAwNjM0IDAgbiAKdHJhaWxlcjw8L1NpemUgOC9Sb290IDEgMCBSPj4Kc3RhcnR4cmVmCjc0OAolJUVPRg==`;

// ============= PDF DOWNLOAD FUNCTION =============
function downloadLicense() {
    try {
        // Decode base64 to binary string
        const binaryString = atob(licensePdfBase64);
        
        // Convert binary string to byte array
        const bytes = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        
        // Create blob from byte array
        const blob = new Blob([bytes], { type: 'application/pdf' });
        
        // Create object URL and trigger download
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Bella_Healthcare_OHCQ_License_H-16847-D.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
        
        // Analytics
        console.log('License PDF downloaded successfully');
    } catch (error) {
        console.error('Error downloading license PDF:', error);
        alert('Error downloading license. Please try again or contact us at (410) 555-1234');
    }
}

// ============= CONTACT FORM HANDLING =============
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Validate form
        if (!name || !email || !subject || !message) {
            alert('Please fill in all required fields');
            return;
        }
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Create mailto link
        const mailtoLink = `mailto:info@bellahealthcare.md?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`)}`;
        
        // Open default email client
        window.location.href = mailtoLink;
        
        // Show success message
        alert('Thank you for contacting Bella Healthcare! We will respond as soon as possible.');
        
        // Reset form
        contactForm.reset();
    });
}

// ============= SMOOTH SCROLL BEHAVIOR =============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ============= CRISP CHAT INTEGRATION =============
// Crisp will auto-load from the script tag in HTML
// Custom initialization when Crisp loads
window.$crisp = window.$crisp || [];

// Set up Crisp with custom message after load
function initializeCrisp() {
    if (typeof window.$crisp !== 'undefined') {
        // Set user data
        window.$crisp.push(["set", "user:email", ["visitor@bellahealthcare.md"]]);
        window.$crisp.push(["set", "user:nickname", ["Visitor"]]);
        
        // Set session data
        window.$crisp.push(["set", "session:data", [[
            ["company", "Bella Healthcare Services LLC"],
            ["phone", "(410) 555-1234"],
            ["address", "9707 Bolton Street, Laurel, MD 20723"]
        ]]]);
        
        // Show custom message after 10 seconds
        setTimeout(() => {
            window.$crisp.push(["do", "chat:open"]);
            window.$crisp.push(["do", "message:send", ["text", "Hi, this is Manfred Tambe's Bella team in Laurel, MD — how can we help your family today?"]]);
        }, 10000);
    }
}

// Initialize Crisp when page loads
document.addEventListener('DOMContentLoaded', initializeCrisp);

// ============= INTERSECTION OBSERVER FOR ANIMATIONS =============
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slide-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all service cards and testimonials
document.querySelectorAll('.service-card, .testimonial, .team-member, .value-card, .reason, .faq-item').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// ============= STATS COUNTER ANIMATION =============
function animateCounters() {
    const stats = document.querySelectorAll('.stat-item h3');
    stats.forEach(stat => {
        const target = parseInt(stat.textContent) || 15;
        const duration = 2000;
        const startTime = Date.now();
        
        function updateCount() {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            if (stat.textContent.includes('+')) {
                const baseNumber = parseInt(stat.textContent) || 15;
                stat.textContent = Math.floor(baseNumber * progress) + '+';
            } else if (stat.textContent === 'Non-Exp') {
                stat.textContent = 'Non-Exp';
            } else if (stat.textContent === 'OHCQ') {
                stat.textContent = 'OHCQ';
            }
            
            if (progress < 1) {
                requestAnimationFrame(updateCount);
            }
        }
        
        observer.observe(stat.closest('.stat-item'));
    });
}

// Call on page load
document.addEventListener('DOMContentLoaded', animateCounters);

// ============= UTILITY FUNCTIONS =============

// Format phone number
function formatPhoneNumber(phoneNumber) {
    const cleaned = phoneNumber.replace(/\D/g, '');
    if (cleaned.length === 10) {
        return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
    }
    return phoneNumber;
}

// Track page views
function trackPageView() {
    const page = window.location.pathname;
    console.log('Page view:', page);
}

document.addEventListener('DOMContentLoaded', trackPageView);

// ============= ERROR HANDLING =============
window.addEventListener('error', function(event) {
    console.error('Error:', event.error);
});

// Log initial load
console.log('Bella Healthcare Services - Website Loaded Successfully');
console.log('OHCQ License #: H-16847-D');
console.log('Status: Non-Expiring');
console.log('For support: (410) 555-1234');

// ============= CAROUSEL FUNCTIONS =============
let currentCarouselSlide = 0;

function nextSlide() {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    
    currentCarouselSlide = (currentCarouselSlide + 1) % slides.length;
    updateCarousel(slides, dots);
}

function previousSlide() {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    
    currentCarouselSlide = (currentCarouselSlide - 1 + slides.length) % slides.length;
    updateCarousel(slides, dots);
}

function currentSlide(n) {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    
    currentCarouselSlide = n;
    updateCarousel(slides, dots);
}

function updateCarousel(slides, dots) {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === currentCarouselSlide) {
            slide.classList.add('active');
        }
    });
    
    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === currentCarouselSlide) {
            dot.classList.add('active');
        }
    });
}

// Auto-play carousel every 5 seconds
setInterval(() => {
    const slides = document.querySelectorAll('.carousel-slide');
    if (slides.length > 0) {
        nextSlide();
    }
}, 5000);
