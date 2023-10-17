const emails = [];
const passwords = [];

// For Login Form
document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('loginBtn');

    loginButton.addEventListener('click', function() {
        const emailValue = email1.value;
        const passwordValue = password.value;
        console.log(emails);
        const idxOfEmail = emails.indexOf(emailValue);
        if(idxOfEmail == -1) alert("You do not have any PassX account. try sign up instead.");
        else if(passwords[idxOfEmail] != passwordValue) alert("Password is wrong, try forgot password");
        else if(passwords[idxOfEmail] == passwordValue) window.location.href = '../HTML_Files/index.html';
    });
});

// For Reset Password From
document.addEventListener('DOMContentLoaded', function() {
    const changeButton = document.getElementById('changePwBtn');

    changeButton.addEventListener('click', function() {
        const emailValue = email2.value;
        const passwordVal1 = newPassword.value;
        const passwordVal2 = confirmPassword.value;

        const idxOfEmail = emails.indexOf(emailValue);
        if(idxOfEmail == -1) alert("Your email does not exist, try sign up instead.");
        else if(passwordVal1 != passwordVal2) alert("Confirm your password again.");
        else if(passwordVal1 == passwordVal2){
            passwords[idxOfEmail] = passwordVal1;
            window.location.href = '../HTML_Files/index.html';
        }
    });
});

// For Sign Up From
document.addEventListener('DOMContentLoaded', function() {
    const createButton = document.getElementById('createAccountBtn');

    createButton.addEventListener('click', function() {
        const emailValue = email3.value;
        const passwordVal = setPassword.value;

        emails.push(emailValue);
        passwords.push(passwordVal);
        window.location.href = '../HTML_Files/index.html';
    });
});