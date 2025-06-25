// JavaScript for Portfolio Website

document.addEventListener('DOMContentLoaded', function() {
    // Initial animation on load (with slight delay for better UX)
    setTimeout(() => {
        // Activate hero section elements immediately
        document.querySelectorAll('.hero .scroll-reveal').forEach(el => {
            el.classList.add('active');
        });
        
        // Run initial scroll check
        animateOnScroll();
        
        // Force a second check after a slight delay to ensure all elements are properly evaluated
        setTimeout(animateOnScroll, 300);
    }, 300);
    // Mobile Navigation Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        const isOpen = navLinks.classList.contains('active');
        menuToggle.innerHTML = isOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.nav-links') && !event.target.closest('.menu-toggle')) {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        }
    });

    // Close mobile menu when a nav link is clicked
    document.querySelectorAll('.nav-links a').forEach(function(link) {
        link.addEventListener('click', function() {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission handling with improved feedback
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Create success message element
            const successMessage = document.createElement('div');
            successMessage.classList.add('success-message');
            successMessage.innerHTML = `
                <i class="fas fa-check-circle"></i>
                <h3>Pesan Terkirim!</h3>
                <p>Terima kasih ${name} telah mengirim pesan. Kami akan segera menghubungi Anda.</p>
            `;
            
            // Hide the form and show success message
            contactForm.style.opacity = 0;
            setTimeout(() => {
                contactForm.style.display = 'none';
                contactForm.parentElement.appendChild(successMessage);
                setTimeout(() => {
                    successMessage.style.opacity = 1;
                }, 100);
                
                // Reset the form behind the scenes
                contactForm.reset();
                
                // After 5 seconds, hide message and show form again
                setTimeout(() => {
                    successMessage.style.opacity = 0;
                    setTimeout(() => {
                        successMessage.remove();
                        contactForm.style.display = 'block';
                        setTimeout(() => {
                            contactForm.style.opacity = 1;
                        }, 100);
                    }, 500);
                }, 5000);
            }, 500);
        });
    }

    // Add active class to navigation links on scroll
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('.nav-links li');
    const navButtons = document.querySelectorAll('.nav-button');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navButtons.forEach(button => {
            button.classList.remove('active');
            if (button.getAttribute('href') === `#${current}`) {
                button.classList.add('active');
            }
        });
        
        // Add active class for home when at the top of the page
        if (document.documentElement.scrollTop < 100) {
            navButtons.forEach(button => {
                button.classList.remove('active');
                if (button.getAttribute('href') === '#home') {
                    button.classList.add('active');
                }
            });
        }
    });
    
    // Animate elements when they come into view
    const animateOnScroll = () => {
        // Get all elements that should be animated
        const scrollElements = document.querySelectorAll('.scroll-reveal');
        const animatedItems = document.querySelectorAll('.animated-item');
        
        // Calculate viewing threshold based on window height
        const viewThreshold = window.innerHeight * 0.15; // 15% of window height
        
        // Loop through each scroll-reveal element
        scrollElements.forEach(element => {
            // Get element position relative to the viewport
            const elementRect = element.getBoundingClientRect();
            const elementTop = elementRect.top;
            const elementBottom = elementRect.bottom;
            
            // If the element is in the viewport, add the active class
            if (elementTop < window.innerHeight - viewThreshold && elementBottom > viewThreshold) {
                element.classList.add('active');
            } else {
                // Reset animation when element is out of viewport
                element.classList.remove('active');
            }
        });
        
        // Loop through each animated-item element
        animatedItems.forEach(element => {
            // Get element position relative to the viewport
            const elementRect = element.getBoundingClientRect();
            const elementTop = elementRect.top;
            const elementBottom = elementRect.bottom;
            
            // If the element is in the viewport, add the show class
            if (elementTop < window.innerHeight - viewThreshold && elementBottom > viewThreshold) {
                element.classList.add('show');
            } else {
                // Reset animation when element is out of viewport
                element.classList.remove('show');
            }
        });
    };
    
    // Run animation check on scroll with throttle for performance
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(function() {
                animateOnScroll();
                scrollTimeout = null;
            }, 10); // Small timeout for better performance
        }
    });
    
    // Run animation check on page load
    animateOnScroll();
    
    // Run animation check when window is resized
    window.addEventListener('resize', animateOnScroll);
    
    // Typing animation for hero text
    const heroText = document.querySelector('.hero-text h1');
    if (heroText) {
        const text = heroText.textContent;
        heroText.textContent = '';
        let index = 0;
        
        function typeText() {
            if (index < text.length) {
                heroText.textContent += text.charAt(index);
                index++;
                setTimeout(typeText, 100);
            }
        }
        
        setTimeout(typeText, 500);
    }
    
    // Parallax effect for header background
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        const header = document.querySelector('header');
        
        if (header) {
            header.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
        }
    });
});
