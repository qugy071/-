function selectCourse(courseName) {
    alert("你已成功选课：" + courseName);
}

// 显示提示"点击查看"
function showHint(element) {
    const hint = element.querySelector(".hint");
    hint.style.display = "block";
    element.classList.add("active");

    // 延时隐藏提示（例如2秒后自动隐藏）
    setTimeout(() => {
        hint.style.display = "none";
        element.classList.remove("active");
    }, 2000);
}
