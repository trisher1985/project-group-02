import axios from 'axios';
import { setupEmailInput, sendContactRequest } from './js/work-together';

document.addEventListener('DOMContentLoaded', setupEmailInput);
document.addEventListener('DOMContentLoaded', sendContactRequest);
// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.querySelector('.contact-form');
//     const emailInput = document.getElementById('email');
//     const messageInput = document.getElementById('user-message');
//     const sendButton = document.querySelector('.btn-submit');
//     const backdrop = document.querySelector('.backdrop');
//     const closeModalButton = document.querySelector('.btn-close');
//     const validityIcon = document.querySelector('.validity-icon');

//     // Функція для відкриття модалки успіху
//     function openSuccessModal() {
//         backdrop.classList.add('is-open');
//     }

//     // Функція для закриття модалки
//     function closeModal() {
//         backdrop.classList.remove('is-open');
//     }

//     // Обробник події для кнопки "Send message"
//     sendButton.addEventListener('click', function (event) {
//         event.preventDefault();

//         // Перевірка введеного електронної пошти
//         if (!emailInput.value.match(emailInput.pattern)) {
//             alert('Invalid email, try again');
//             return;
//         }

//         // Перевірка повідомлення
//         if (messageInput.value.trim() === '') {
//             alert('Message is required');
//             return;
//         }

//         // Відправка POST-запиту на сервер
//         axios.post('https://portfolio-js.b.goit.study/api/requests', {
//             email: emailInput.value,
//             comment: messageInput.value,
//         })
//             .then(response => {
//                 if (response.status === 201) {
//                     openSuccessModal();
//                     form.reset();
//                     validityIcon.style.display = 'none';
//                 } else {
//                     alert('An error occurred. Please try again.');
//                 }
//             })
//             .catch(error => {
//                 alert('An error occurred. Please try again.');
//             });
//     });

//     // Закриймо модалку, натиснувши на "Закрити"
//     closeModalButton.addEventListener('click', closeModal);

//     // Закриймо модалку, натиснувши Escape
//     window.addEventListener('keydown', function (event) {
//         if (event.key === "Escape" && backdrop.classList.contains('is-open')) {
//             closeModal();
//         }
//     });

//     // Закриймо модалку, натиснувши на backdrop
//     backdrop.addEventListener('click', function (event) {
//         if (event.target === backdrop) {
//             closeModal();
//         }
//     });
// });