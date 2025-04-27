export function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export function setupEmailInput() {
    const emailInput = document.getElementById('email');
    const errorMessage = document.querySelector('.error-message');
    const validityIcon = document.querySelector('.validity-icon');

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