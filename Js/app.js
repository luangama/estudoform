const form = document.querySelector('#form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const telInput = document.querySelector('#tel');
const messageTextArea = document.querySelector('#message');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Checks if the name is empty
    if (nameInput.value === "") {
        alert("Por favor, preencha o seu nome");
        return;
    }

    // Checks if the email is filled out and if it is valid
    if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert("Por favor, preencha o seu email");
        return;
    }

    // If all fields are filled in, send the form
    form.submit();
});

// Validar e-mail
function isEmailValid(email) {

    // Create regex to validate email
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    );

    if (emailRegex.test(email)) {
        return true;
    }

    return false;
}

//Dark e Light Mode
const switcher = document.querySelector('.btn');
const imgLogo = document.querySelector('#logo');

//Add events to the button
switcher.addEventListener('click', function () {

    //Change body theme
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    //Change button text
    const className = document.body.className;
    if (className == 'light-theme') {
        this.textContent = '☾ Dark';
    } else {
        this.textContent = '☼ Light';
    }
});

function changeLogo() {
    const logoElement = document.getElementById("logo");

    setInterval(function () {
        const className = document.body.className;

        if (className.includes('light-theme')) {
            logoElement.src = 'Img/logo_portfolio_dark.svg';
        } else {
            logoElement.src = 'Img/logo_portfolio_light.svg';
        }
    }, 1); // Check every 1 milliseconds
}

// Calls the function to start the verification loop
changeLogo();