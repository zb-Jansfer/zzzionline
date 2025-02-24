
document.addEventListener("DOMContentLoaded", function () {
    const secretButton = document.querySelector(".secret-button");

    secretButton.addEventListener("click", function () {
        let answer = prompt("英雄");
        if (answer === "所见略同") {
            document.getElementById("secret-message-box").style.display = "block";
        } else {
            alert("❌ 答案错误，请重新输入！");
        }
    });
});

// 手动关闭 Secret Message
function closeMessage() {
    document.getElementById("secret-message-box").style.display = "none";
}
