AOS.init();

const navbar = document.getElementById('mainNavbar');
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        navbar.classList.remove('bg-transparent');
        navbar.classList.add('bg-white', 'shadow-md', 'text-gray-600');

        nav.classList.remove('text-white');
        nav.classList.add('text-gray-600');
    } else {
        navbar.classList.remove('bg-white', 'shadow-md');
        navbar.classList.add('bg-transparent');

        nav.classList.add('text-white');
        nav.classList.remove('text-gray-600');
    }
});

const sideMenu = document.getElementById("sideMenu");
document.getElementById("sideToggleBtn").addEventListener("click", () => {
    sideMenu.classList.remove("translate-x-full");
});
document.getElementById("closeSideMenu").addEventListener("click", () => {
    sideMenu.classList.add("translate-x-full");
});

document.querySelectorAll('.toggle-accordion').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        const icon = button.querySelector('.accordion-icon');

        content.classList.toggle('hidden');
        icon.classList.toggle('rotate-180');
    });
});

jQuery(document).ready(function () {
    jQuery("#request-closeModal-Btn").click(function () {
        jQuery("#request-callback-popup").removeClass('flex').addClass('hidden');
    });

    setTimeout(() => {
        jQuery("#request-callback-popup").removeClass('hidden').addClass('flex');
    }, 20000);


});
