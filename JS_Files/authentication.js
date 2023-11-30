// Function to block a user to access generate password and vault page if they are not logged in
function blockClickIfNotAuthenticated(){
    const isAuthenticated = sessionStorage.getItem("isAuthenticated");
    if(isAuthenticated == "false"){
        const generatePageAccess = document.getElementById('generatePage');
        generatePageAccess.addEventListener('click', function(event){
            event.preventDefault();
            alert('You must be authenticated to perform this action.');
        });

        const vaultPageAccess = document.getElementById('vaultPage');
        vaultPageAccess.addEventListener('click', function(event){
            event.preventDefault();
            alert('You must be authenticated to perform this action.');
        });
    }
};

// Call the function to block clicks if not authenticated
blockClickIfNotAuthenticated();