// Log Out Button
document.addEventListener('DOMContentLoaded', function(){
    const logoutButton = document.getElementById("logoutBtn");

    logoutButton.addEventListener('click', function(){
        localStorage.setItem("isAuthenticated", false);
        localStorage.setItem("currUser", "");
        window.location.href = "../login.html"
    });
});

const isAuthenticated = localStorage.getItem("isAuthenticated");
if(isAuthenticated == "false"){
    const logoutButton = document.getElementById("logoutBtn");
    logoutButton.innerHTML = '<a href="../login.html"> Log In </a>';
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
        window.location.href = "../login.html"
    });
});