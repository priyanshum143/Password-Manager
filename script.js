const emails = [];
const passwords = [];

// For Login Form
document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email1');
    const passwordInput = document.getElementById('password');
    const loginButton = document.getElementById('login-btn');

    loginButton.addEventListener('click', function() {
        const emailValue = emailInput.value;
        const passwordValue = passwordInput.value;

        const idxOfEmail = emails.indexOf(emailValue);
        if(idxOfEmail == -1) alert("You do not have any PassX account. try sign up instead.");
        else if(passwords[idxOfEmail] != passwordValue) alert("Password is wrong, try forgot password");
        else if(passwords[idxOfEmail] == passwordValue) window.location.href = 'HomePages/index.html';
    });
});

// For Reset Password From
document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email2');
    const otpInput = document.getElementById('otp');
    const passwordInput1 = document.getElementById('new-password');
    const passwordInput2 = document.getElementById('confirm-password');
    const resetButton = document.getElementById('changePw-btn');

    resetButton.addEventListener('click', function() {
        const emailValue = emailInput.value;
        const passwordVal1 = passwordInput1.value;
        const passwordVal2 = passwordInput2.value;

        const idxOfEmail = emails.indexOf(emailValue);
        if(idxOfEmail == -1) alert("Your email does not exist, try sign up instead.");
        else if(passwordVal1 != passwordVal2) alert("Confirm your password again.");
        else if(passwordVal1 == passwordVal2){
            passwords[idxOfEmail] = passwordVal1;
            window.location.href = 'HomePages/index.html';
        }
    });
});

// For Sign Up From
document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email3');
    const passwordInput = document.getElementById('set-password');
    const createButton = document.getElementById('createAccount-btn');

    createButton.addEventListener('click', function() {
        const emailValue = emailInput.value;
        const passwordVal = passwordInput.value;

        emails.push(emailValue);
        passwords.push(passwordVal);
        window.location.href = 'HomePages/index.html';
    });
});