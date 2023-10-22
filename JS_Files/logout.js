// Log Out Button
document.addEventListener('DOMContentLoaded', function(){
    const logoutButton = document.getElementById("logoutBtn");

    logoutButton.addEventListener('click', function(){
        localStorage.setItem("isAuthenticated", false);
        localStorage.setItem("currUser", "");
        window.location.href = "HTML_Files/login.html"
    });
});

const isAuthenticated = localStorage.getItem("isAuthenticated");
if(isAuthenticated == "false"){
    const logoutButton = document.getElementById("logoutBtn");
    logoutButton.innerHTML = 'Log In';
}

// Function to delete account permanently
document.addEventListener('DOMContentLoaded', function(){
    const deleteAccButton = document.getElementById('deleteAcc');
    const currUser = localStorage.getItem("currUser");
    const dataArr = JSON.parse(localStorage.getItem("userData"));

    deleteAccButton.addEventListener('click', function(){
        const updatedDataArr = dataArr.filter(function(item){
            return item.passXUserName != currUser;
        });
        localStorage.setItem("userData", JSON.stringify(updatedDataArr));
        localStorage.setItem("currUser", "");
        localStorage.setItem("isAuthenticated", false);
        window.location.href = "HTML_Files/signup.html"
    });
});

if(isAuthenticated == "false"){
    const createAccount = document.getElementById("deleteAcc");
    createAccount.innerHTML = '<button>Create Account</button>';
}