// document.addEventListener("DOMContentLoaded", () => {
//     const anchorLinks = document.querySelectorAll('.header-nav-page-link, .btn-order');

//     anchorLinks.forEach(link => {
//         link.addEventListener('click', event => {
//             event.preventDefault();

//             const targetId = link.getAttribute('href')?.slice(1) || link.dataset.target;
//             const targetElement = document.getElementById(targetId);

//             if (targetElement) {
//                 targetElement.scrollIntoView({
//                     behavior: 'smooth',
//                     block: 'start',
//                 });
//             }
//         });
//     });
// });

document.addEventListener("DOMContentLoaded", () => {
    // --- Smooth Scroll ---
    // const anchorLinks = document.querySelectorAll('.header-nav-page-link, .btn-order');

    // anchorLinks.forEach(link => {
    //     link.addEventListener('click', event => {
    //         event.preventDefault();

    //         const targetId = link.getAttribute('href')?.slice(1) || link.dataset.target;
    //         const targetElement = document.getElementById(targetId);

    //         if (targetElement) {
    //             targetElement.scrollIntoView({
    //                 behavior: 'smooth',
    //                 block: 'start',
    //             });
    //         }
    //     });
    // });

    // --- Theme Switcher ---
    const body = document.body;
    const themeSwitch = document.getElementById('theme-switch');

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.remove('theme-light');
        body.classList.add('theme-dark');
        themeSwitch.checked = true;
    } else {
        body.classList.remove('theme-dark');
        body.classList.add('theme-light');
        themeSwitch.checked = false;
    }

    themeSwitch.addEventListener('change', () => {
        if (themeSwitch.checked) {
            body.classList.remove('theme-light');
            body.classList.add('theme-dark');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('theme-dark');
            body.classList.add('theme-light');
            localStorage.setItem('theme', 'light');
        }
    });
});
