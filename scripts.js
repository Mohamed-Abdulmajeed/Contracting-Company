// Hero Slider
const heroSwiper = new Swiper('.heroSwiper', {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Project Details Slider
const projectThumbsSwiper = new Swiper('.projectThumbsSwiper', {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});

const projectSwiper = new Swiper('.projectSwiper', {
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: projectThumbsSwiper,
    },
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact Form Handler
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const subject = document.querySelector('input[name="subject"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    const body = `الاسم: ${name}\nالبريد الإلكتروني: ${email}\n\n${message}`;

    const mailtoLink = `mailto:mohamedabdulmajeed217@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
});

// WhatsApp Button Handler
document.getElementById('whatsapp-btn').addEventListener('click', function (e) {
    e.preventDefault();

    const name = document.querySelector('input[name="name"]').value;
    const subject = document.querySelector('input[name="subject"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    const whatsappText = `السلام عليكم\nالاسم: ${name}\nالموضوع: ${subject}\nالرسالة: ${message}`;

    const whatsappLink = `https://wa.me/201032156290?text=${encodeURIComponent(whatsappText)}`;

    window.open(whatsappLink, '_blank');
});
