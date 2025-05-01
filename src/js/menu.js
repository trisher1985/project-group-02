// document.addEventListener("DOMContentLoaded", () => {
//     const mobileMenu = document.querySelector('[data-mobile]');
//     const openBtn = document.querySelector('[data-mobile-open]');
//     const closeBtn = document.querySelector('[data-mobile-close]');
//     const menuLinks = mobileMenu.querySelectorAll('.menu-link');
//     const body = document.body;

//     openBtn.addEventListener('click', () => {
//         mobileMenu.classList.add('is-open');
//         body.style.overflow = 'hidden';
//     });

//     closeBtn.addEventListener('click', () => {
//         mobileMenu.classList.remove('is-open');
//         body.style.overflow = '';
//     });

//     menuLinks.forEach(link => {
//         link.addEventListener('click', e => {
//             e.preventDefault();

//             const href = link.getAttribute('href');
//             const id = href && href.startsWith('#') ? href.slice(1) : null;
//             const target = id ? document.getElementById(id) : null;

//             if (target) {
//                 target.scrollIntoView({ behavior: 'smooth' });
//             }

//             mobileMenu.classList.remove('is-open');
//             body.style.overflow = '';
//         });
//     });
// });

document.addEventListener("DOMContentLoaded", () => {
    const mobileMenu = document.querySelector('[data-mobile]');
    const openBtn = document.querySelector('[data-mobile-open]');
    const closeBtn = document.querySelector('[data-mobile-close]');
    const menuLinks = mobileMenu?.querySelectorAll('.menu-link');
    const orderBtn = document.querySelector('.btn-order-menu');
    const body = document.body;

    // Функція для відкриття меню
    const openMenu = () => {
        if (mobileMenu) {
            mobileMenu.classList.add('is-open');
            body.style.overflow = 'hidden';
        }
    };

    // Функція для закриття меню
    const closeMenu = () => {
        if (mobileMenu) {
            mobileMenu.classList.remove('is-open');
            body.style.overflow = '';
        }
    };

    // Додаємо обробники подій для кнопок відкриття/закриття меню
    openBtn?.addEventListener('click', openMenu);
    closeBtn?.addEventListener('click', closeMenu);

    // Додаємо обробники подій для посилань у меню
    menuLinks?.forEach(link => {
        link.addEventListener('click', e => {
            const href = link.getAttribute('href');
            const id = href && href.startsWith('#') ? href.slice(1) : null;
            const target = id ? document.getElementById(id) : null;

            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }

            closeMenu();
        });
    });

    // Додаємо обробник подій для кнопки btn-order-menu
    orderBtn?.addEventListener('click', e => {
        const href = orderBtn.getAttribute('href');
        const id = href && href.startsWith('#') ? href.slice(1) : null;
        const target = id ? document.getElementById(id) : null;

        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }

        closeMenu();
    });
});