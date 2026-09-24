// Toggle Navbar Menu Icon 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Scroll Sections Active Link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // Sticky Navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove toggle icon and navbar when click navbar link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Typing Animation
const typed = new Typed('.multiple-text', {
    strings: ['AI & Data Science Engineer', 'Machine Learning Engineer', 'MLOps Trainee', 'Data Analyst'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true
});

/* === Custom Cursor === */
const cursor = document.querySelector('.cursor');
const cursor2 = document.querySelector('.cursor2');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursor2.style.left = e.clientX + 'px';
    cursor2.style.top = e.clientY + 'px';
});

const hoverElements = document.querySelectorAll('a, .btn, .project-box, .timeline-item, .bx');
hoverElements.forEach(el => {
    el.addEventListener('mouseover', () => {
        cursor.classList.add('expand');
        cursor2.classList.add('expand');
    });
    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('expand');
        cursor2.classList.remove('expand');
    });
});

/* === tsParticles Configuration === */
tsParticles.load("tsparticles", {
    fpsLimit: 60,
    particles: {
        number: {
            value: 60,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#00eeff"
        },
        shape: {
            type: "circle",
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#00eeff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "grab"
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 200,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});

/* === VanillaTilt Initialization === */
VanillaTilt.init(document.querySelectorAll(".box-glass"), {
    max: 10,
    speed: 400,
    glare: true,
    "max-glare": 0.2,
});

/* === GSAP & ScrollTrigger Animations === */
gsap.registerPlugin(ScrollTrigger);

// Setup initial state for GSAP targets, removing older hidden classes
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(el => {
    el.classList.remove('hidden');
});

// Animate About Section
gsap.to('.about .about-content', {
    scrollTrigger: {
        trigger: '.about',
        start: 'top 80%',
    },
    y: 0,
    opacity: 1,
    duration: 1,
    ease: 'power3.out'
});

gsap.to('.about .skills-content', {
    scrollTrigger: {
        trigger: '.about',
        start: 'top 80%',
    },
    y: 0,
    opacity: 1,
    duration: 1,
    delay: 0.3,
    ease: 'power3.out'
});

// Animate Experience Timeline sequentially
gsap.fromTo('.experience .timeline-item',
    { y: 50, opacity: 0 },
    {
        scrollTrigger: {
            trigger: '.experience',
            start: 'top 70%',
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.3,
        ease: 'power3.out'
    }
);

// Animate Projects Grid sequentially
gsap.fromTo('.projects .project-box',
    { y: 50, opacity: 0 },
    {
        scrollTrigger: {
            trigger: '.projects',
            start: 'top 70%',
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    }
);

// Animate Certificates sequentially
gsap.fromTo('.certificates .project-box',
    { y: 50, opacity: 0 },
    {
        scrollTrigger: {
            trigger: '.certificates',
            start: 'top 70%',
        },
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out'
    }
);

// Animate Courses Timeline sequentially
gsap.fromTo('.courses .timeline-item',
    { y: 50, opacity: 0 },
    {
        scrollTrigger: {
            trigger: '.courses',
            start: 'top 70%',
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.3,
        ease: 'power3.out'
    }
);

// Hero Initial Animation
gsap.fromTo('.home-content',
    { x: -100, opacity: 0 },
    { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.2 }
);
gsap.fromTo('.home-img',
    { x: 100, opacity: 0 },
    { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.4 }
);
