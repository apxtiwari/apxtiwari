document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // Contact Form
    // ==========================
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Thank you for your message! I will get back to you soon.");
            form.reset();
        });
    }

    // ==========================
    // Dark Mode
    // ==========================
    const darkModeBtn = document.getElementById("darkModeBtn");

    darkModeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    // ==========================
    // Heading Animation
    // ==========================
    const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");

    const headingObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                headingObserver.unobserve(entry.target);

            }

        });

    }, { threshold: 0.3 });

    headings.forEach(heading => headingObserver.observe(heading));

    // ==========================
    // Skill Bar Animation
    // ==========================
    const bars = document.querySelectorAll(".progress");

    const progressObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.animation = "fillBar 2s ease forwards";

                progressObserver.unobserve(entry.target);

            }

        });

    }, { threshold: 0.5 });

    bars.forEach(bar => progressObserver.observe(bar));

});