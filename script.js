const correctPassword = "forever"; // 🔑 CHANGE THIS

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

    const maxX = container.clientWidth - noBtn.offsetWidth;
    const maxY = container.clientHeight - noBtn.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * (maxY - 60) + 60;

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}
