// =====================================
// EL HORUS - MAIN JAVASCRIPT
// =====================================


// 1. MOBILE MENU

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");
const languageBtn = document.getElementById("languageBtn");

if (menuToggle && navbar) {

    menuToggle.addEventListener("click", function () {

        navbar.classList.toggle("active");

        const isOpen = navbar.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "إغلاق القائمة" : "فتح القائمة"
        );

        menuToggle.textContent = isOpen ? "✕" : "☰";

    });


    document.querySelectorAll(".nav-links a").forEach(function (link) {

        link.addEventListener("click", function () {

            navbar.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "فتح القائمة");
            menuToggle.textContent = "☰";

        });

    });


    document.addEventListener("click", function (event) {

        const clickedInsideMenu = navbar.contains(event.target);
        const clickedMenuButton = menuToggle.contains(event.target);

        if (!clickedInsideMenu && !clickedMenuButton) {

            navbar.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "فتح القائمة");
            menuToggle.textContent = "☰";

        }

    });


    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            navbar.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "فتح القائمة");
            menuToggle.textContent = "☰";

        }

    });

}


// =====================================
// 2. LANGUAGE TRANSLATION
// =====================================

const translations = {

    en: {

        nav: [
            "Home",
            "About Us",
            "Our Products",
            "Why EL HORUS?",
            "Gallery",
            "Contact Us"
        ],

        headerButton: "Request a Quote",

        heroTitle: 'Complete Packaging Solutions <span>You Can Trust</span>',
        heroDescription:
            "Everything you need to wrap your products and protect your goods in one place. We provide a variety of packaging materials with fast service and delivery to all governorates across Egypt.",

        heroButtons: [
            "Explore Our Products",
            "Request a Quote"
        ],

        aboutSubtitle: "ABOUT EL HORUS",
        aboutTitle: 'Get to Know <span>EL HORUS</span>',

        aboutParagraphs: [
            "EL HORUS Packaging is a company specializing in providing packaging materials and products for various commercial and industrial activities. We meet the needs of companies, factories, and traders through a wide range of packaging products.",

            "We believe packaging is more than just protecting a product. It is an essential part of storage, transportation, and distribution. That is why we focus on providing reliable products and helpful service."
        ],

        aboutButton: "Contact Us",

        productsSubtitle: "OUR PRODUCTS",
        productsTitle: 'All Your Needs in <span>One Place</span>',
        productsDescription:
            "A wide range of packaging materials designed to meet the needs of companies, factories, shops, and businesses.",

        productCategories: [
            "Packaging Materials",
            "Goods Protection and Securing",
            "Sealing and Securing Packages",
            "Impact Protection",
            "Secure Packaging"
        ],

        productTitles: [
            "PVC",
            "Stretch Film – Hand Stretch Film",
            "Packaging Tape",
            "Bubble Wrap",
            "Shrink Film"
        ],

        productDescriptions: [
            "PVC materials for packaging and protection according to product requirements.",
            "For wrapping and securing cartons, goods, and pallets, helping protect them during storage and transportation.",
            "For securely sealing cartons and packages and helping protect products during handling and shipping.",
            "Suitable for wrapping delicate and fragile products and helping protect them from scratches and impacts.",
            "A practical solution for securely wrapping and bundling products according to packaging requirements."
        ],

        productButtons: [
            "Request a Quote →",
            "Request a Quote →",
            "Request a Quote →",
            "Request a Quote →",
            "Request a Quote →"
        ],

        productBottom:
            "Looking for a specific material or size? Contact us and we will help you find the right product for your needs.",

        productBottomButton: "Ask About Our Products",

        whySubtitle: "WHY CHOOSE EL HORUS",
        whyTitle: 'Why <span>Choose EL HORUS?</span>',
        whyDescription:
            "We aim to provide an experience that combines product variety, easy ordering, and customer care.",

        advantagesTitles: [
            "Product Variety",
            "Quality Commitment",
            "Competitive Prices",
            "Easy Communication and Ordering",
            "Delivery to All Governorates",
            "Trust and Partnership"
        ],

        advantagesDescriptions: [
            "A wide range of packaging materials to meet the needs of different businesses.",
            "We focus on providing materials that help package products and protect goods.",
            "We offer various options and aim to provide quotations that suit our customers' needs.",
            "Our team is ready to answer your questions and help you order products.",
            "We provide delivery to all governorates across Egypt, with a focus on processing orders quickly.",
            "We aim to build long-term business relationships based on trust and customer care."
        ],

        statsSubtitle: "EL HORUS IN NUMBERS",
        statsTitle: 'Our Customers’ Trust Is Our <span>Success</span>',

        statsTitles: [
            "10,000 Customers",
            "13,000 Orders",
            "Coverage Across All Governorates",
            "Diverse Solutions"
        ],

        statsDescriptions: [
            "The trust of more than ten thousand customers.",
            "Our orders reflect our customers’ trust and the reach of our services.",
            "Delivery service across Egypt.",
            "A variety of products for packaging needs."
        ],

        ctaSubtitle: "LET'S WORK TOGETHER",
        ctaTitle: "Your Packaging Needs… EL HORUS Has the Solutions",
        ctaDescription:
            "Tell us about the products and quantities you need, and contact us to receive a quotation that suits your business.",
        ctaButton: "Request a Quote Now",

        gallerySubtitle: "OUR GALLERY",
        galleryTitle: 'Explore <span>Our Products</span>',
        galleryDescription:
            "A glimpse of EL HORUS packaging products and materials.",

        contactSubtitle: "CONTACT EL HORUS",
        contactTitle: 'We Are Happy to <span>Hear From You</span>',
        contactDescription:
            "For inquiries about products, quantities, or quotations, contact us directly.",

        contactTitles: [
            "WhatsApp",
            "Phone 1",
            "Phone 2",
            "Email"
        ],

        contactDescriptions: [
            "Message us directly for details and quotations.",
            "For inquiries and phone support.",
            "We are happy to receive your calls.",
            "For inquiries and quotation requests, contact us by email."
        ],

        contactButtons: [
            "Start a Conversation",
            "Call Now",
            "Call Now",
            "Email Us"
        ],

        footerBrand:
            "EL HORUS Packaging — Diverse solutions to protect your products and meet your business needs.",

        footerLinksTitle: "Quick Links",

        footerLinks: [
            "Home",
            "About Us",
            "Our Products",
            "Why EL HORUS?",
            "Contact Us"
        ],

        footerContactTitle: "Contact Us",

        footerContact: [
            "WhatsApp:",
            "Phone 1:",
            "Phone 2:",
            "Delivery is available to all governorates across Egypt."
        ],

        footerBottom: [
            "© 2026 EL HORUS Packaging. All rights reserved.",
            "EL HORUS — Quality You Can Trust, Service That Cares About Your Needs."
        ],

        whatsappLabel: "Contact Us on WhatsApp",
        logoAlt: "EL HORUS Company Logo",
        emailAlt: "Email EL HORUS"
    }

};


// Helper function to update text

function setText(selector, values) {

    const elements = document.querySelectorAll(selector);

    elements.forEach(function (element, index) {

        if (values[index] !== undefined) {
            element.textContent = values[index];
        }

    });

}


// Helper function to update HTML while preserving design spans

function setHTML(selector, value) {

    const element = document.querySelector(selector);

    if (element) {
        element.innerHTML = value;
    }

}


// Apply selected language

function changeLanguage(language) {

    const isEnglish = language === "en";

    document.documentElement.lang = language;
    document.documentElement.dir = isEnglish ? "ltr" : "rtl";

    if (isEnglish) {

        const t = translations.en;

        setText(".nav-links a", t.nav);

        setText(".header-contact", [t.headerButton]);

        setHTML(".hero h1", t.heroTitle);
        setText(".hero p", [t.heroDescription]);
        setText(".hero-buttons a", t.heroButtons);

        setText(".about-content .section-subtitle", [t.aboutSubtitle]);
        setHTML(".about-content h2", t.aboutTitle);
        setText(".about-content p", t.aboutParagraphs);
        setText(".about-content .btn", [t.aboutButton]);

        setText(".products .section-heading .section-subtitle", [t.productsSubtitle]);
        setHTML(".products .section-heading h2", t.productsTitle);
        setText(".products .section-heading p", [t.productsDescription]);

        setText(".product-category", t.productCategories);
        setText(".product-info h3", t.productTitles);
        setText(".product-info p", t.productDescriptions);
        setText(".product-link", t.productButtons);

        const productHeadings = document.querySelectorAll(".products .section-heading");
        if (productHeadings[1]) {
            const p = productHeadings[1].querySelector("p");
            const a = productHeadings[1].querySelector("a");

            if (p) p.textContent = t.productBottom;
            if (a) a.textContent = t.productBottomButton;
        }

        setText("#advantages .section-subtitle", [t.whySubtitle]);
        setHTML("#advantages .section-heading h2", t.whyTitle);
        setText("#advantages .section-heading p", [t.whyDescription]);

        setText("#advantages .advantage-card h3", t.advantagesTitles);
        setText("#advantages .advantage-card p", t.advantagesDescriptions);

        setText("#our-numbers .section-subtitle", [t.statsSubtitle]);
        setHTML("#our-numbers .section-heading h2", t.statsTitle);
        setText("#our-numbers .advantage-card h3", t.statsTitles);
        setText("#our-numbers .advantage-card p", t.statsDescriptions);

        setText(".cta .section-subtitle", [t.ctaSubtitle]);
        setText(".cta h2", [t.ctaTitle]);
        setText(".cta p", [t.ctaDescription]);
        setText(".cta a", [t.ctaButton]);

        setText(".gallery .section-subtitle", [t.gallerySubtitle]);
        setHTML(".gallery .section-heading h2", t.galleryTitle);
        setText(".gallery .section-heading p", [t.galleryDescription]);

        setText(".contact .section-subtitle", [t.contactSubtitle]);
        setHTML(".contact .section-heading h2", t.contactTitle);
        setText(".contact .section-heading p", [t.contactDescription]);

        setText(".contact-card h3", t.contactTitles);
        setText(".contact-card p", t.contactDescriptions);
        setText(".contact-card a", t.contactButtons);

        setText(".footer-brand > p", [t.footerBrand]);
        setText(".footer-links h3", [t.footerLinksTitle]);
        setText(".footer-links a", t.footerLinks);

        setText(".footer-contact h3", [t.footerContactTitle]);

        const footerParagraphs = document.querySelectorAll(".footer-contact p");
        footerParagraphs.forEach(function (p, index) {

            if (t.footerContact[index]) {
                const link = p.querySelector("a");

                if (link) {
                    p.firstChild.textContent = t.footerContact[index] + " ";
                } else {
                    p.textContent = t.footerContact[index];
                }
            }

        });

        setText(".footer-bottom p", t.footerBottom);

        const whatsapp = document.querySelector(".whatsapp-float");
        if (whatsapp) {
            whatsapp.textContent = t.whatsappLabel;
            whatsapp.setAttribute("aria-label", t.whatsappLabel);
        }

        document.querySelectorAll(".logo img").forEach(function (img) {
            img.alt = t.logoAlt;
        });

        const emailLink = document.querySelector('.contact-card a[href^="mailto:"]');
        if (emailLink) {
            emailLink.setAttribute("aria-label", t.emailAlt);
        }

        document.title = "EL HORUS | Packaging Solutions";

        const description = document.querySelector('meta[name="description"]');
        if (description) {
            description.content =
                "EL HORUS Packaging Solutions. PVC, stretch film, packaging tape, bubble wrap and shrink film with delivery across Egypt.";
        }

        if (languageBtn) {
            languageBtn.textContent = "AR";
        }

    } else {

    localStorage.removeItem("elHorusLanguage");

    location.reload();

    return;

}

    localStorage.setItem("elHorusLanguage", language);

}


// Language button

if (languageBtn) {

    languageBtn.addEventListener("click", function () {

        const currentLanguage = document.documentElement.lang;

        const newLanguage = currentLanguage === "ar" ? "en" : "ar";

        changeLanguage(newLanguage);

    });

}


// Restore saved language

const savedLanguage = localStorage.getItem("elHorusLanguage");

if (savedLanguage === "en") {
    changeLanguage("en");
}


// =====================================
// 3. SCROLL REVEAL ANIMATION
// =====================================

const revealElements = document.querySelectorAll(
    ".section-heading, .about-image, .about-content, .product-card, .advantage-card, .cta-content, .gallery-item, .contact-card"
);

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("is-visible");
                revealObserver.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.15
    });

    revealElements.forEach((element) => {

        element.classList.add("reveal-on-scroll");
        revealObserver.observe(element);

    });

}