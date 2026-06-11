const header = document.querySelector('[data-header]');
const progress = document.querySelector('.page-progress span');
const glow = document.querySelector('.cursor-glow');

const updateChrome = () => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    progress.style.width = `${scrolled * 100}%`;
    header.classList.toggle('is-scrolled', window.scrollY > 36);
};

window.addEventListener('scroll', updateChrome, { passive: true });
updateChrome();

window.addEventListener('pointermove', (event) => {
    glow.style.opacity = '1';
    glow.style.left = `${event.clientX}px`;
    glow.style.top = `${event.clientY}px`;
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
        const target = document.querySelector(link.getAttribute('href'));
        if (!target) return;
        event.preventDefault();

        if (window.gsap && window.ScrollToPlugin) {
            gsap.to(window, { duration: 1.2, scrollTo: target, ease: 'power3.inOut' });
        } else {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

window.addEventListener('load', () => {
    if (!window.gsap || !window.ScrollTrigger) {
        document.querySelectorAll('.reveal-up, .reveal-hero, .reveal-image').forEach((element) => {
            element.style.opacity = 1;
        });
        return;
    }

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    gsap.timeline({ defaults: { ease: 'power4.out' } })
        .fromTo('.reveal-hero',
            { opacity: 0, y: 44, filter: 'blur(10px)' },
            { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.35, stagger: 0.16 }
        )
        .fromTo('.heritage-ribbon span',
            { scaleY: 0, transformOrigin: 'top' },
            { scaleY: 1, duration: 0.8, stagger: 0.08 },
            '-=0.7'
        );

    gsap.to('.hero-video', {
        scale: 1,
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });

    gsap.utils.toArray('[data-parallax]').forEach((element) => {
        gsap.to(element, {
            yPercent: 14,
            ease: 'none',
            scrollTrigger: {
                trigger: element.parentElement,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    });

    gsap.utils.toArray('.reveal-up').forEach((element) => {
        gsap.fromTo(element,
            { opacity: 0, y: 58, filter: 'blur(8px)' },
            {
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
                duration: 1.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 84%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });

    gsap.utils.toArray('.reveal-image').forEach((element) => {
        const image = element.querySelector('img');

        gsap.fromTo(element,
            { opacity: 0, clipPath: 'inset(16% 0 16% 0)' },
            {
                opacity: 1,
                clipPath: 'inset(0% 0 0% 0)',
                duration: 1.35,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 82%',
                    toggleActions: 'play none none reverse'
                }
            }
        );

        if (image) {
            gsap.fromTo(image,
                { scale: 1.18 },
                {
                    scale: 1.08,
                    duration: 1.6,
                    ease: 'power4.out',
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 82%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        }
    });

    gsap.utils.toArray('.magnetic').forEach((element) => {
        element.addEventListener('pointermove', (event) => {
            const rect = element.getBoundingClientRect();
            const x = (event.clientX - rect.left - rect.width / 2) * 0.16;
            const y = (event.clientY - rect.top - rect.height / 2) * 0.22;
            gsap.to(element, { x, y, duration: 0.35, ease: 'power3.out' });
        });

        element.addEventListener('pointerleave', () => {
            gsap.to(element, { x: 0, y: 0, duration: 0.55, ease: 'elastic.out(1, 0.35)' });
        });
    });
});

