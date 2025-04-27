import axios from 'axios';

export function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

const form = document.querySelector('.contact-form');
const emailInput = document.getElementById('email');
const errorMessage = document.querySelector('.error-message');
const validityIcon = document.querySelector('.validity-icon');
const messageInput = document.getElementById('user-message');
const sendButton = document.querySelector('.btn-submit');
const backdrop = document.querySelector('.backdrop');
const closeModalButton = document.querySelector('.btn-close');

export function setupEmailInput() {
    emailInput.addEventListener('input', function () {
        const isValid = validateEmail(emailInput.value);

        if (isValid) {
            emailInput.classList.remove('invalid');
            emailInput.classList.add('valid');
            errorMessage.style.display = 'none';
            validityIcon.style.display = 'block';
        } else {
            if (emailInput.value) {
                emailInput.classList.remove('valid');
                emailInput.classList.add('invalid');
                errorMessage.style.display = 'block';
                validityIcon.style.display = 'none';
            } else {
                emailInput.classList.remove('valid', 'invalid');
                errorMessage.style.display = 'none';
                validityIcon.style.display = 'none';
            }
        }
    });

    emailInput.addEventListener('focus', function () {
        emailInput.classList.remove('valid', 'invalid');
        errorMessage.style.display = 'none';
        validityIcon.style.display = 'none';
    });
}

export function sendContactRequest() {
    sendButton.addEventListener('click', function (event) {
        event.preventDefault();

        if (!emailInput.value.match(emailInput.pattern)) {
            alert("Введіть коректну пошту");
            return;
        }

        if (messageInput.value.trim() === '') {
            alert("Коментар обов'язковий");
            return;
        }

        axios.post('https://portfolio-js.b.goit.study/api/requests', {
            email: emailInput.value,
            comment: messageInput.value,
        })
            .then(response => {
                if (response.status === 201) {
                    backdrop.classList.add('is-open');
                    form.reset();
                    validityIcon.style.display = 'none';
                    document.querySelector('body').classList.add('no-scroll');
                } else {
                    alert('An error occurred. Please try again.');
                }
            })
            .catch(error => {
                alert('An error occurred. Please try again.');
            });
    });

    closeModalButton.addEventListener('click', function () {
        backdrop.classList.remove('is-open');
        document.querySelector('body').classList.remove('no-scroll');
    });

    window.addEventListener('keydown', function (event) {
        if (event.key === "Escape" && backdrop.classList.contains('is-open')) {
            closeModalButton.click();
        }
    });

    backdrop.addEventListener('click', function (event) {
        if (event.target === backdrop) {
            closeModalButton.click();
        }
    });
}