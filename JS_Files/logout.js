const currUser = sessionStorage.getItem("currUser");
if(!currUser) sessionStorage.setItem("currUser", "");

const isAuthenticatedInitial = sessionStorage.getItem("isAuthenticated");
if(!isAuthenticatedInitial) sessionStorage.setItem("isAuthenticated", false);

// Log Out Button
document.addEventListener('DOMContentLoaded', function(){
    const logoutButton = document.getElementById("logoutBtn");

    logoutButton.addEventListener('click', function(){
        const modal = document.getElementById("logoutModal");
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

        const btn = document.getElementById("logoutBtn");
        btn.onclick = function() {
            modal.style.display = "block";
        }

        const span = document.getElementsByClassName("close")[0];
        span.onclick = function() {
            modal.style.display = "none";
        }
    });
});

// Function of 'Yes' button
document.addEventListener('DOMContentLoaded', function(){
    const deleteIt = document.getElementById('yes1');

    deleteIt.addEventListener('click', function(){
        sessionStorage.setItem("isAuthenticated", false);
        sessionStorage.setItem("currUser", "");
        window.location.href = "HTML_Files/login.html";
    });
});

// Function of 'No' button
document.addEventListener('DOMContentLoaded', function(){
    const dontDelete =document.getElementById('no1');
    const modal = document.getElementById("logoutModal");
    
    dontDelete.addEventListener('click', function(){
        modal.style.display = "none";
    });
});

// Function of logout button if user is not authenticated.
const isAuthenticated = sessionStorage.getItem("isAuthenticated");
if(isAuthenticated == "false"){
    const logoutButton = document.getElementById("logoutBtn");
    logoutButton.innerHTML = 'Log In';

    logoutButton.addEventListener('click', function(){
        window.location.href = "HTML_Files/login.html";
    })
}

// Function to delete account permanently
document.addEventListener('DOMContentLoaded', function(){
    const deleteAccButton = document.getElementById('deleteAcc');

    deleteAccButton.addEventListener('click', function(){
        const modal = document.getElementById("deleteAccModal");
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

        const btn = document.getElementById("deleteAcc");
        btn.onclick = function() {
            modal.style.display = "block";
        }

        const span = document.getElementsByClassName("close")[1];
        span.onclick = function() {
            modal.style.display = "none";
        }
    });
});

// Function of 'Yes' button
document.addEventListener('DOMContentLoaded', function(){
    const deleteIt = document.getElementById('yes');
    const currUser = sessionStorage.getItem("currUser");
    const dataArr = JSON.parse(localStorage.getItem("userData"));

    deleteIt.addEventListener('click', function(){
        const updatedDataArr = dataArr.filter(function(item){
            return item.passXUserName != currUser;
        });
        localStorage.setItem("userData", JSON.stringify(updatedDataArr));
        sessionStorage.setItem("currUser", "");
        sessionStorage.setItem("isAuthenticated", false);
        window.location.href = "HTML_Files/signup.html";
    });
});

// Function of 'No' button
document.addEventListener('DOMContentLoaded', function(){
    const dontDelete =document.getElementById('no');
    const modal = document.getElementById("deleteAccModal");
    
    dontDelete.addEventListener('click', function(){
        modal.style.display = "none";
    });
});

// Function of delete account button if user is not authenticated.
if(isAuthenticated == "false"){
    const createAccount = document.getElementById("deleteAcc");
    createAccount.innerHTML = 'Create Account';

    createAccount.addEventListener('click', function(){
        window.location.href = "HTML_Files/signup.html";
    })
}