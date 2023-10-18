// For Login Form
document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('loginBtn');

    loginButton.addEventListener('click', function() {
        const emailValue = email1.value;
        const passwordValue = password.value;
    
        const data = localStorage.getItem("userData");
        const dataArr = JSON.parse(data);
        for(let idx=0; idx<dataArr.length; idx++){
            if(dataArr[idx].passXUserName == emailValue){
                if(dataArr[idx].passXPassword == passwordValue){
                    window.location.href = 'HTML_Files/index.html';
                    return;
                }
                alert("Incorrect Password, try reseting the password.");
                return;
            }
        }
        alert("You do not have any PassX account, try sign up instead.");
        return;
    });
});

// For Reset Password From
document.addEventListener('DOMContentLoaded', function() {
    const changeButton = document.getElementById('changePwBtn');

    changeButton.addEventListener('click', function() {
        const emailValue = email2.value;
        const passwordVal1 = newPassword.value;
        const passwordVal2 = confirmPassword.value;

        const data = localStorage.getItem("userData");
        const dataArr = JSON.parse(data);
        for(let idx=0; idx<dataArr.length; idx++){
            if(dataArr[idx].passXUserName == emailValue){
                if(passwordVal1 == passwordVal2){
                    // localStorage.setItem(passXPassword, passwordVal1);
                    alert("Your password changed successfully");
                    window.location.href = 'index.html';
                    return;
                }
                else if(passwordVal1 != passwordVal2){
                    alert("Recheck your new Password");
                    return;
                }
            }
        }
        alert("You do not have any PassX account, try sign up instead");
        return;
    });
});

// For Sign Up From
document.addEventListener('DOMContentLoaded', function() {
    const createButton = document.getElementById('createAccountBtn');

    createButton.addEventListener('click', function() {
        const emailValue = email3.value;
        const passwordVal = setPassword.value;

        let userData = localStorage.getItem("userData");
        if(!userData){
            let json = [];
            json.push({
                passXUserName: emailValue,
                passXPassword: passwordVal,
            });
            alert("Account Created");
            localStorage.setItem("userData", JSON.stringify(json));
        }
        else{
            let json = JSON.parse(localStorage.getItem("userData"));
            json.push({
                passXUserName: emailValue,
                passXPassword: passwordVal,
            });
            alert("Account Created");
            localStorage.setItem("userData", JSON.stringify(json));
        }

        window.location.href = 'index.html';
    });
});