/**
 * Mobile Navigation Toggle Script
 * Handles the hamburger menu functionality for mobile devices and dropdown menus
 */

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
        // Toggle mobile menu on hamburger click
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a navigation link (not dropdown parents)
        const navLinks = document.querySelectorAll('.nav-link:not(.has-dropdown .nav-link)');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close mobile menu when clicking outside of it
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target) || navToggle.contains(event.target);
            
            if (!isClickInsideNav && navMenu.classList.contains('active')) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });

        // Close mobile menu on window resize (if switching to desktop)
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }

    // Mobile Dropdown Toggle
    if (window.innerWidth <= 768) {
        const dropdownParents = document.querySelectorAll('.has-dropdown > .nav-link');
        dropdownParents.forEach(parent => {
            parent.addEventListener('click', function(e) {
                e.preventDefault();
                const dropdown = this.nextElementSibling;
                if (dropdown && dropdown.classList.contains('dropdown-menu')) {
                    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
                }
            });
        });
    }
});
