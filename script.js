document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Loading Screen Controller
    const loadingScreen = document.getElementById("loading-screen");
    window.addEventListener("load", function() {
        setTimeout(() => {
            loadingScreen.classList.add("hidden");
        }, 500);
    });

    // 2. Mobile Menu / Hamburger Toggle Mechanism
    const hamburger = document.querySelector(".hamburger");
    const navWrapper = document.querySelector(".nav-wrapper");
    const navLinks = document.querySelectorAll(".nav-link");

    hamburger.addEventListener("click", function() {
        hamburger.classList.toggle("active");
        navWrapper.classList.toggle("active");
    });

    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            hamburger.classList.remove("active");
            navWrapper.classList.remove("active");
            
            navLinks.forEach(item => item.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // 3. Native Multilingual Interface Router (Pure DOM)
    const langRoBtn = document.getElementById("lang-ro-btn");
    const langEnBtn = document.getElementById("lang-en-btn");
    const bodyElement = document.body;

    langRoBtn.addEventListener("click", function() {
        bodyElement.className = "lang-ro";
        langRoBtn.classList.add("active");
        langEnBtn.classList.remove("active");
    });

    langEnBtn.addEventListener("click", function() {
        bodyElement.className = "lang-en";
        langEnBtn.classList.add("active");
        langRoBtn.classList.remove("active");
    });

    // 4. Advanced Scroll Reveal Handler via Intersection Observer
    const revealElements = document.querySelectorAll(".scroll-reveal");
    
    const revealOptions = {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
    };

    const revealObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
        });
    }, revealOptions);

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
});
