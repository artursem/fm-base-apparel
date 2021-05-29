const emailInput = document.querySelector('input');
const btn = document.querySelector('button');
const errorMessage = document.querySelector('#error-msg');

const showValid = (test) => {
    if (test === true) {
        emailInput.classList.remove('input-error');
        emailInput.style.borderColor = '';
        errorMessage.style.display = 'none';
    } else {
        emailInput.classList.add('input-error');
        emailInput.style.borderColor = 'var(--sred)';
        errorMessage.style.display = 'block';
    }
}


btn.addEventListener('click', (e) => {
    e.preventDefault();

    const regex = new RegExp(/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi);
    const test = regex.test(emailInput.value);
    showValid(test);
});

// /\b[\w\.-]+@[\w\.-]+\.\w{2,4QW}\b/gi
