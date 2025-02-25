
document.addEventListener("DOMContentLoaded", function () {
    const secretButton = document.querySelector(".secret-button");

    // Ensure the button exists before adding an event listener
    if (secretButton) {
        secretButton.addEventListener("click", function () {
            let answer = prompt("英雄");
            if (answer === "所见略同") {
                secretMessageBox.style.display = "flex"; secretMessageBox.style.flexDirection = "column"; secretMessageBox.style.justifyContent = "center"; secretMessageBox.style.alignItems = "center";
            } else {
                alert("❌ 答案错误，请重新输入！");
            }
        });
    }
});

// 手动关闭 Secret Message
function closeMessage() {
    document.getElementById("secret-message-box").style.display = "none";
}
