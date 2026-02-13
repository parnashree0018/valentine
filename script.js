const correctPassword = "love123";

const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const unlockBtn = document.getElementById("unlock");

let noScale = 1;
let yesScale = 1;

/* YES CLICK */
yesBtn.addEventListener("click", () => {
    document.getElementById("question-screen").classList.add("hidden");
    document.getElementById("password-screen").classList.remove("hidden");
});

/* NO CLICK */
noBtn.addEventListener("click", () => {

    // shrink NO
    noScale -= 0.1;
    if (noScale < 0.3) noScale = 0.3;
    noBtn.style.transform = `scale(${noScale})`;

    // grow YES
    yesScale += 0.15;
    if (yesScale > 3) yesScale = 3;
    yesBtn.style.transform = `scale(${yesScale})`;

    // move NO randomly on screen
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});

/* PASSWORD CHECK */
unlockBtn.addEventListener("click", () => {
    const input = document.getElementById("password").value;
    const error = document.getElementById("error");

    if (input === correctPassword) {
        document.getElementById("password-screen").classList.add("hidden");
        document.getElementById("gift-screen").classList.remove("hidden");
    } else {
        error.textContent = "Wrong password 😜 Try again!";
    }
});
