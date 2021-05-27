const emailInput = document.querySelector('input');
const btn = document.querySelector('button');



btn.addEventListener('click', (e) => {
    e.preventDefault();

    console.log(emailInput.value);
    const regex = new RegExp(/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi);
    const test = regex.test(emailInput.value);
    console.log(test);
});

// /\b[\w\.-]+@[\w\.-]+\.\w{2,4QW}\b/gi
