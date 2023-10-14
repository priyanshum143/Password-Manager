let characters = [
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    ['!', '@', '#', '$', '%', '^', '&', '*', '_', '-'],
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
];

document.addEventListener('DOMContentLoaded', function() {
    const length = document.getElementById('strLength');
    const generateButton = document.getElementById('generate-btn');

    generateButton.addEventListener('click', function() {
        const strLen = parseInt(length.value);
        let pw = "";
        for(let i=0; i<strLen; i++){
            let row = Math.floor(Math.random() * 4);
            let col = 0;
            if(row < 2) col = Math.floor(Math.random() * 26);
            else col = Math.floor(Math.random() * 10);
            let char = characters[row][col];
            pw += char;
        }
        console.log(pw);
    });
});