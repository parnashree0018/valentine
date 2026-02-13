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
    const noBtn = document.getElementById('no');
    const yesBtn = document.getElementById('yes');

    // 🔻 shrink NO gradually
    noScale -= 0.08;
    if (noScale < 0.4) noScale = 0.4;
    noBtn.style.transform = `scale(${noScale})`;

    // 🔺 grow YES gradually
    yesScale += 0.12;
    if (yesScale > 3) yesScale = 3;
    yesBtn.style.transform = `scale(${yesScale})`;

    // 🎯 Move anywhere on screen (not just container)
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.position = "fixed";  // 👈 KEY FIX
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}


