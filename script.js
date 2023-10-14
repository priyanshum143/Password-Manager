const emails = ['mehtapriyanshu408@gmail.com', 'priyanshu2349.be21@chitkara.edu.in'];
const passwords = ['Priyanshu', 'Mehta'];

document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.querySelector('input[name="password"]');
    const loginButton = document.getElementById('login-btn');

    loginButton.addEventListener('click', function() {
        const emailValue = emailInput.value;
        const passwordValue = passwordInput.value;

        const idxOfEmail = emails.indexOf(emailValue);
        if(idxOfEmail == -1) alert("You do not have any PassX account. try sign up instead.");
        else if(passwords[idxOfEmail] != passwordValue) alert("Password is wrong, try forgot password");
        else if(passwords[idxOfEmail] == passwordValue) window.location.href = 'index.html';
    });
});