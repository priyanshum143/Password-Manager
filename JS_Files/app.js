// Characters to generate random password
const characters = [
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    ['!', '@', '#', '$', ' ', '^', '&', '*', '_', '-'],
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
];

// working of generate button and function to open modal
const isAuthenticated = sessionStorage.getItem("isAuthenticated");

let currentPassword = "";
document.addEventListener('DOMContentLoaded', function () {
    const generateButton = document.getElementById('generateBtn');

    generateButton.addEventListener('click', function () {
        currentPassword = "";
        const passwordLenValue = pwLength.value;
        if(passwordLenValue > 100){
            alert("Password Leangth must be less than 100.");
            return;
        }
        for (let i = 0; i < passwordLenValue; i++) {
            let row = Math.floor(Math.random() * 4);

            let col = 0;
            if (row < 2) col = Math.floor(Math.random() * 26);
            else col = Math.floor(Math.random() * 10);

            currentPassword += characters[row][col];
        }

        if (isAuthenticated == "true") {
            const modal = document.getElementById("savePasswordModal");
            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }

            const btn = document.getElementById("generateBtn");
            btn.onclick = function () {
                modal.style.display = "block";
            }

            const span = document.getElementsByClassName("close")[0];
            span.onclick = function () {
                modal.style.display = "none";
            }

            const regenratePasswordOpt = document.getElementById('regenratePasswordOpt');
            const webisteInput = document.getElementById('website');
            const webisteVal = webisteInput.value;
            regenratePasswordOpt.innerHTML = `Your Password for '${webisteVal}' is '${currentPassword}'`;
        }
        else {
            alert("You must login First.");
        }
    });
});

// working of save password
document.addEventListener('DOMContentLoaded', function () {
    const savePasswordBtn = document.getElementById('savePassword');

    savePasswordBtn.addEventListener('click', function () {
        let json = [];
        json.push({
            website: website.value,
            username: username.value,
            password: currentPassword
        });

        const storedData = localStorage.getItem("userData");
        const dataArr = JSON.parse(storedData);

        const currUser = sessionStorage.getItem("currUser");
        for (let idx = 0; idx < dataArr.length; idx++) {
            if (dataArr[idx].passXUserName == currUser) {
                dataArr[idx].passwordsList.push(json);
                localStorage.setItem("userData", JSON.stringify(dataArr));
                window.location.href = "../HTML_Files/vault.html"
                return;
            }
        }
    })
});

// code to show data in table
let tb = document.querySelector('table');
if(isAuthenticated == "true") {
    const data = localStorage.getItem("userData");
    const dataArr = JSON.parse(data);

    const currUser = sessionStorage.getItem("currUser");
    for (let idx = 0; idx < dataArr.length; idx++) {
        if (dataArr[idx].passXUserName == currUser) {
            const passwordsList = dataArr[idx].passwordsList;
            if(passwordsList.length == 0) {
                tb.innerHTML = "<h2><i>No Data to Show</i></h2>";
                tb.style.border = "none";
            }
            else{
                for (let pwIdx = 0; pwIdx < passwordsList.length; pwIdx++) {
                    const ele = passwordsList[pwIdx][0];
                    const row =
                        `<tr>
                        <td>${ele.website}</td>
                        <td>${ele.username}</td>
                        <td>${maskPassword(ele.password)} <img src="../CSS_Files/copy.svg" onclick="copyText('${ele.password}')"></td>
                        <td> <button id="${ele.website}" class="deletePwBtn">Delete</button> </td>
                        <td> <button id="${ele.website}Up" class="updatePwBtn">Update</button> </td>
                    </tr>`;
                    tb.innerHTML += row;
                }
            }
        }
    }
}
else {
    tb.innerHTML = "<h2><i>You must login first.</i></h2>";
    tb.style.border = "none";
    const addDataButton = document.getElementById('addDataButton');
    addDataButton.style.display = "none";
}

// Function to delete a row from vault table
document.addEventListener('DOMContentLoaded', function () {
    const deleteButton = document.querySelectorAll('.deletePwBtn');
    for (let i=0; i<deleteButton.length; i++) {
        deleteButton[i].addEventListener('click', function () {
            const userData = localStorage.getItem('userData');
            const dataArr = JSON.parse(userData);

            const currUser = sessionStorage.getItem('currUser');
            for (let idx = 0; idx<dataArr.length; idx++) {
                if (dataArr[idx].passXUserName == currUser) {
                    const passwordsList = dataArr[idx].passwordsList;
                    const updatedPwList = passwordsList.filter(function (item) {
                        return item[0].website != deleteButton[i].id;
                    });
                    dataArr[idx].passwordsList = updatedPwList;
                    localStorage.setItem("userData", JSON.stringify(dataArr));
                    window.location.href = "../HTML_Files/vault.html";
                    break;
                }
            }
        });
    }
});

// Function to update password
document.addEventListener('DOMContentLoaded', function () {
    const updateButtons = document.querySelectorAll('.updatePwBtn');
    for(let i=0; i<updateButtons.length; i++){
        updateButtons[i].addEventListener('click', function(){
            const modal = document.getElementById("updatePwModal");
            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }

            updateButtons[i].onclick = function () {
                modal.style.display = "block";
            }

            const span = document.getElementsByClassName("close")[1];
            span.onclick = function () {
                modal.style.display = "none";
            }

            const savePwBtn = document.getElementById("updatePasswordBtn");
            savePwBtn.addEventListener('click', function(){
                const userDataArr = JSON.parse(localStorage.getItem("userData"));
                const currUser = sessionStorage.getItem("currUser");

                for(let j=0; j<userDataArr.length; j++){
                    if(userDataArr[j].passXUserName == currUser){
                        const list = userDataArr[j].passwordsList;
                        for(let k=0; k<list.length; k++){
                            if(list[k][0].website + "Up" == updateButtons[i].id){
                                list[k][0].website = newWebsite.value;
                                list[k][0].username = newUsername.value;
                                list[k][0].password = newPassword.value;
                                userDataArr[j].passwordsList = list;
                                localStorage.setItem("userData", JSON.stringify(userDataArr));
                                window.location.href = "../HTML_Files/vault.html";
                            }
                        }
                    }
                }
            });
        });
    }
});

// Function to copy text
function copyText(text) {
    navigator.clipboard.writeText(text);

    const modal = document.getElementById("copyPwModal");
    modal.style.display = "block";
    setTimeout(function(){
        modal.style.display = "none";
    }, 700);
}

// Function to mask password
function maskPassword(password) {
    let newPassword = "";
    for (let i = 0; i < password.length; i++) {
        newPassword += '*';
    }
    return newPassword;
}

// Function to add data in table manually
if (isAuthenticated == "true") {
    document.addEventListener('DOMContentLoaded', function () {
        const addDataButton = document.getElementById('addDataButton');

        addDataButton.addEventListener('click', function () {
            const modal = document.getElementById("addDataModal");
            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }

            const btn = document.getElementById("addDataButton");
            btn.onclick = function () {
                modal.style.display = "block";
            }

            const span = document.getElementsByClassName("close")[0];
            span.onclick = function () {
                modal.style.display = "none";
            }
        })
    })
}

document.addEventListener('DOMContentLoaded', function () {
    const addDataButton = document.getElementById('addDataButton2');

    addDataButton.addEventListener('click', function () {
        const websiteVal = website2.value;
        const usernameVal = username2.value;
        const passwordVal = password2.value;

        const newData = [];
        newData.push({
            website: websiteVal,
            username: usernameVal,
            password: passwordVal
        });

        const dataArr = JSON.parse(localStorage.getItem("userData"));
        const currUser = sessionStorage.getItem("currUser");
        for (let idx = 0; idx < dataArr.length; idx++) {
            if (dataArr[idx].passXUserName == currUser) {
                dataArr[idx].passwordsList.push(newData);
                localStorage.setItem("userData", JSON.stringify(dataArr));
                window.location.href = "../HTML_Files/vault.html"
                return;
            }
        }

        const row =
            `<tr>
                <td>${websiteVal}</td>
                <td>${usernameVal}</td>
                <td>${maskPassword(passwordVal)} <img src="../CSS_Files/copy.svg" onclick="copyText('${passwordVal}')"></td>
                <td><button id="${websiteVal}" class="deletePwBtn">Delete</button></td>
            </tr>`;
        tb.innerHTML += row;
    })
})