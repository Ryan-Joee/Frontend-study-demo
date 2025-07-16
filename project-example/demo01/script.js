const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  // 添加监听器和事件处理
  panel.addEventListener("click", () => {
    // 要先删除前面panel的active
    removeActiveClasses();
    // 再给新的panel增加active属性
    panel.classList.add('active');
  });
});

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}