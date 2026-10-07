/* =========================
    MOBILE SIDEBAR
========================= */

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".glass-nav");

if (menuToggle && nav) {

    menuToggle.addEventListener("click", () => {

        const isOpen =
            nav.classList.toggle("mobile-open");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );

    });


    nav.querySelectorAll(".nav-link").forEach((link) => {

        link.addEventListener("click", () => {

            nav.classList.remove("mobile-open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        });

    });

}


/* =========================
    MENU FILTER
========================= */

const categoryButtons =
    document.querySelectorAll(".category-btn");

const menuCards =
    document.querySelectorAll(".menu-card");


categoryButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const selectedCategory =
            button.dataset.category;


        /* Active button */

        categoryButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        button.classList.add("active");


        /* Filter cards */

        menuCards.forEach((card) => {

            const cardCategory =
                card.dataset.category;


            const match =
                selectedCategory === "all" ||
                cardCategory === selectedCategory;


            if (match) {

                /*
                First make it available
                */

                card.classList.remove("hidden");

                /*
                Then animate it in
                */

                requestAnimationFrame(() => {
                    card.classList.remove("filter-hide");
                });

            } else {

                /*
                Animate out
                */

                card.classList.add("filter-hide");

                /*
                Remove from layout
                after animation
                */

                setTimeout(() => {

                    if (
                        card.dataset.category !==
                        selectedCategory
                        &&
                        selectedCategory !== "all"
                    ) {

                        card.classList.add("hidden");

                    }

                }, 350);

            }

        });

    });

});


/* =========================
    SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(
        ".menu-card, .featured-menu-card"
    );


if (
    "IntersectionObserver" in window &&
    !window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches
) {

    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.classList.add(
                        "is-visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                });

            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -40px 0px"
            }
        );


    revealElements.forEach((element) => {

        revealObserver.observe(element);

    });

}
else {

    /*
    If animations are disabled,
    show everything immediately.
    */

    revealElements.forEach((element) => {
        element.classList.add("is-visible");
    });

}


/* =========================
    BACK TO TOP
========================= */

const backToTop =
    document.querySelector(
        '.footer-bottom a[href="#"]'
    );


if (backToTop) {

    backToTop.addEventListener(
        "click",
        (event) => {

            event.preventDefault();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}