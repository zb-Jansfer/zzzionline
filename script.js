
document.addEventListener("DOMContentLoaded", function () {
    const secretButton = document.querySelector(".secret-button");

    secretButton.addEventListener("click", function () {
        let answer = prompt("英雄");
        if (answer === "所见略同") {
            let messageBox = document.createElement("div");
            messageBox.classList.add("popup-message");
            messageBox.innerHTML = "<p>🎉 你答对了！这是你的秘密信息：‘You found the hidden message! 🚀’</p>";
            document.body.appendChild(messageBox);

            setTimeout(() => {
                messageBox.remove();
            }, 5000);
        } else {
            alert("❌ 答案错误，请重新输入！");
        }
    });
});
