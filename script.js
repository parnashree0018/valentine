const correctPassword = "love123"; // change if needed

let noScale = 1;
let yesScale = 1;

function goToPassword() {
    document.getElementById("question").style.display = "none";
    document.getElementById("passwordScreen").style.display = "block";
}

function checkPassword() {
    const input = document.getElementById("password").value;
    const error = document.getElementById("errorMsg");

    if (input === correctPassword) {
        document.getElementById("passwordScreen").style.display = "none";
        document.getElementById("giftScreen").style.display = "block";
    } else {
        error.textContent = "Wrong password 😜 Try again!";
    }
}

function moveNo() {
    const container = document.querySelector('.container');
    const noBtn = document.getElementById('no');
    const yesBtn = document.getElementById('yes');

    // 🔻 shrink NO
    noScale = Math.max(0.4, noScale - 0.1);
    noBtn.style.transform = `scale(${noScale})`;

    // 🔺 grow YES
    yesScale = Math.min(2.2, yesScale + 0.1);
    yesBtn.style.transform = `scale(${yesScale})`;

    // 🎯 move NO randomly (always inside container)
    const maxX = container.clientWidth - noBtn.offsetWidth;
    const maxY = container.clientHeight - noBtn.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * (maxY - 80) + 80;

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}
