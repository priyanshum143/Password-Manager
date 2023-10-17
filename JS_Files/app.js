// Charactres to generate random password
const characters = [
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    ['!', '@', '#', '$', '%', '^', '&', '*', '_', '-'],
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
];

// working of generate button
let currentPassword = "";
document.addEventListener('DOMContentLoaded', function() {
    const generateButton = document.getElementById('generateBtn');

    generateButton.addEventListener('click', function(e) {
        const passwordLenValue = pwLength.value;
        for(let i=0; i<passwordLenValue; i++){
            let row = Math.floor(Math.random() * 4);

            let col = 0;
            if(row < 2) col = Math.floor(Math.random() * 26);
            else col = Math.floor(Math.random() * 10);

            currentPassword += characters[row][col];
        }

        let passwords = localStorage.getItem("passwords");
        if(!passwords){
            let json = [];
            json.push({
                website: website.value,
                username: username.value,
                password: currentPassword
            });
            alert("Password Saved");
            localStorage.setItem("passwords", JSON.stringify(json));
        }
        else{
            let json = JSON.parse(localStorage.getItem("passwords"));
            json.push({
                website: website.value,
                username: username.value,
                password: currentPassword
            });
            alert("Password Saved");
            localStorage.setItem("passwords", JSON.stringify(json));
        }
        window.location.href = "../HTML_Files/vault.html"
    });
});

// code to write data in table
let tb = document.querySelector('table');
let data = localStorage.getItem("passwords");
if(!data){
    tb.innerHTML = "No Data to Show";
}
else{
    let arr = JSON.parse(data);
    let str = "";
    for(let i=0; i<arr.length; i++){
        const ele = arr[i];
        str =
            `<tr>
                <td>${ele.website}</td>
                <td>${ele.username}</td>
                <td>${ele.password}</td>
                <td>${"Delete"}</td>
            </tr>`;
        tb.innerHTML += str;
    }
}