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
    noScale -= 0.15;
    if (noScale < 0.2) noScale = 0.2;
    noBtn.style.transform = `scale(${noScale})`;

    // grow YES
    yesScale += 0.2;
    if (yesScale > 4) yesScale = 4;
    yesBtn.style.transform = `scale(${yesScale})`;
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
