//Navigation bar effects on scroll
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})


// Mengatur link navigasi aktif saat di klik atau scroll
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-items a');
    const sections = document.querySelectorAll('section');

    // Fungsi untuk menghapus class 'active' dari semua link
    function removeActiveClasses() {
        navLinks.forEach(link => link.classList.remove('active'));
    }

    // Fungsi untuk menambahkan class 'active' saat link di klik
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            removeActiveClasses();
            this.classList.add('active');
        });
    });

    // Mengatur link aktif saat di scroll
    window.addEventListener('scroll', function () {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 70; // Mengurangi tinggi header sticky
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute('id');
            }
        });

        // Menambahkan class 'active' pada link sesuai section yang sedang aktif
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });
});


//Services section - Modal
const serviceModals = document.querySelectorAll(".service-modal");
const learnmoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = function(modalClick){
    serviceModals[modalClick].classList.add("active");
}

learnmoreBtns.forEach((learnmoreBtn, i) => {
    learnmoreBtn.addEventListener("click", () => {
        modal(i);
    });
});

modalCloseBtns.forEach((modalCloseBtn) => {
    modalCloseBtn.addEventListener("click", () => {
        serviceModals.forEach((modalView) => {
            modalView.classList.remove("active");
        });
    });
});

//Portfolio section - Modal
const portfolioModals = document.querySelectorAll(".porfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

var portfolioModal = function(modalClick){
    portfolioModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        portfolioModal(i);
    });
});

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
    portfolioCloseBtn.addEventListener("click", () => {
        portfolioModals.forEach((portfolioModalView) => {
            portfolioModalView.classList.remove("active");
        });
    });
});

// Get-in-touch Swiper
var swiper = new Swiper(".get-in-touch-swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});


//Our clients - Swiper
var swiper = new Swiper(".client-swiper", {
slidesPerView: 1,
spaceBetween: 20,
loop: true,
navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
},
pagination: {
    el: ".swiper-pagination",
    clickable: true,
},
autoplay: {
    delay: 3000,
    disableOnInteraction: false,
},
});

//Website dark/light theme
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => document.body.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if(savedTheme){
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}

//Scroll to top button
const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
    scrollTopBtn.classList.toggle("active", this.window.scrollY > 500);
});

scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

// Navigation menu items active on page scroll
window.addEventListener("scroll", () => {
const sections = document.querySelectorAll("section"); // Memilih semua section
const scrollY = window.pageYOffset; // Mendapatkan posisi scroll

sections.forEach(current => {
    let sectionHeight = current.offsetHeight; // Tinggi section
    let sectionTop = current.offsetTop - 50; // Posisi top section
    let id = current.getAttribute("id"); // Mendapatkan id section

    // Menentukan jika scrollY berada dalam rentang section
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
    document.querySelector(".nav-items a[href*='" + id + "']").classList.add("active");
    } else {
        document.querySelector(".nav-items a[href*='" + id + "']").classList.remove("active");
        }
    });
});


//Responsive navigation menu toggle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a")

menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
})

closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
})

navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        navigation.classList.remove("active");
    });
});

//Scroll reveal animations
//Common reveal options to create reveal animations
ScrollReveal({ 
    reset: true,
    distance: "60px",
    duration: 2000,
    delay: 100
});

//Target elements, and specify options to create reveal animations



document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah form untuk dikirim secara default

    // Kirim data formulir menggunakan EmailJS
    emailjs.sendForm('service_1tn817s', 'template_90lzohc', this, 'xaXLy7VsKBrRHlAij')
        .then(function(response) {
            console.log('Pesan berhasil dikirim:', response);
            Swal.fire({
                icon: 'success',
                title: 'Pesan Berhasil Dikirim!',
                text: 'Terima kasih telah mengirim pesan.',
                confirmButtonText: 'Tutup'
            });
            document.getElementById("contact-form").reset();
        }, function(error) {
            console.error('Error:', error);
            Swal.fire({
                icon: 'error',
                title: 'Gagal Mengirim Pesan',
                text: 'Terjadi kesalahan, silakan coba lagi.',
                confirmButtonText: 'Tutup'
            });
        });
});
