// 等待DOM加载完成
function addButton() {
    // 创建按钮
    const button = document.createElement("button");
    button.textContent = "复制Cookies";
    button.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 10000;
        padding: 8px 16px;
        background-color: #fe2c55;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    `;

    // 添加按钮到页面
    document.documentElement.appendChild(button);

    // 点击事件处理
    button.addEventListener("click", async () => {
        const cookies = document.cookie;
        try {
            await navigator.clipboard.writeText(cookies);
            button.textContent = "复制成功！";
            setTimeout(() => {
                button.textContent = "复制Cookies";
            }, 2000);
        } catch (err) {
            button.textContent = "复制失败";
            console.error("复制失败:", err);
        }
    });
}

// 确保DOM加载完成后再执行
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", addButton);
} else {
    addButton();
}
