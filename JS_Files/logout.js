// Log Out Button
document.addEventListener('DOMContentLoaded', function(){
    const logoutButton = document.getElementById("logoutBtn");

    logoutButton.addEventListener('click', function(){
        localStorage.setItem("isAuthenticated", false);
        window.location.href = "../login.html"
    });
});

const isAuthenticated = localStorage.getItem("isAuthenticated");
if(isAuthenticated == "false"){
    const logoutButton = document.getElementById("logoutBtn");
    logoutButton.innerHTML = '<a href="../login.html"> Log In </a>';
}