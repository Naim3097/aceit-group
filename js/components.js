/**
 * ACEiT Component Loader
 * Dynamically loads header and footer components into pages
 */

// Load header component
async function loadHeader() {
    try {
        const response = await fetch('components/header.html');
        const html = await response.text();
        const headerPlaceholder = document.getElementById('header-placeholder');
        if (headerPlaceholder) {
            headerPlaceholder.innerHTML = html;
            
            // Reinitialize navigation after loading
            initNavigation();
            
            // Set active nav link based on current page
            setActiveNavLink();
            
            // Initialize scroll effect for header
            initHeaderScroll();
        }
    } catch (error) {
        console.error('Error loading header:', error);
    }
}

// Initialize header scroll effect
function initHeaderScroll() {
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.global-header');
        if (header) {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });
}

// Load footer component
async function loadFooter() {
    try {
        const response = await fetch('components/footer.html');
        const html = await response.text();
        const footerPlaceholder = document.getElementById('footer-placeholder');
        if (footerPlaceholder) {
            footerPlaceholder.innerHTML = html;
        }
    } catch (error) {
        console.error('Error loading footer:', error);
    }
}

// Set active navigation link based on current page
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// Initialize navigation functionality (mobile toggle)
function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
}

// Load components when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    loadFooter();
});
