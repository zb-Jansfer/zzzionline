document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ Script Loaded: script.js is running!");

    const secretButton = document.querySelector(".secret-button");
    const secretMessageBox = document.getElementById("secret-message-box");

    if (secretButton) {
        console.log("✅ Secret Button Found");

        secretButton.addEventListener("click", function () {
            console.log("🔍 Secret Button Clicked");
            let answer = prompt("英雄");
            if (answer === "所见略同") {
                console.log("✅ Correct Answer Entered");
                secretMessageBox.style.display = "flex";
            } else {
                console.log("❌ Incorrect Answer Entered");
                alert("❌ 答案错误，请重新输入！");
            }
        });
    }
});

function closeMessage() {
    console.log("❌ Closing Message Box");
    document.getElementById("secret-message-box").style.display = "none";
}
