/* =========================
BLAXELLENCE ENGINE v2
========================= */

document.addEventListener("DOMContentLoaded", () => {

    initializeExpandableCards();
    initializeScrollReveal();
    initializeSmoothScroll();
    initializeNavbarEffects();

});


/* =========================
EXPANDABLE CARDS
========================= */

function initializeExpandableCards() {

    const cards = document.querySelectorAll(
        ".service-card, .portfolio-card"
    );

    cards.forEach(card => {

        card.addEventListener("click", () => {

            const isActive = card.classList.contains("active");

            closeAllCards(cards);

            if (!isActive) openCard(card);

        });

    });

}

function openCard(card) {

    card.classList.add("active");

    updateIcon(card, true);

}

function closeCard(card) {

    card.classList.remove("active");

    updateIcon(card, false);

}

function closeAllCards(cards) {

    cards.forEach(card => closeCard(card));

}

function updateIcon(card, isOpen) {

    const icon = card.querySelector(
        ".service-icon, .portfolio-icon"
    );

    if (!icon) return;

    icon.textContent = isOpen ? "−" : "+";

}


/* =========================
SMOOTH SCROLL
========================= */

function initializeSmoothScroll() {

    document.querySelectorAll("a[href^='#']").forEach(link => {

        link.addEventListener("click", function(e) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });

}


/* =========================
NAVBAR SCROLL EFFECT
========================= */

function initializeNavbarEffects() {

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            navbar.style.background =
                "rgba(2, 6, 23, 0.95)";

            navbar.style.borderBottom =
                "1px solid rgba(34,197,94,0.25)";

        } else {

            navbar.style.background =
                "rgba(2, 6, 23, 0.85)";

            navbar.style.borderBottom =
                "1px solid var(--border-color)";

        }

    });

}


/* =========================
SCROLL REVEAL
========================= */

function initializeScrollReveal() {

    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    }, {
        threshold: 0.15
    });

    elements.forEach(el => observer.observe(el));

}
