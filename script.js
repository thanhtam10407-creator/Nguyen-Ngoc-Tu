// Hàm chuyển Tab cho nội dung Tiểu sử / Con người / Quan niệm
function openTab(evt, tabId) {
  // Ẩn toàn bộ tab content
  const tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach(content => content.classList.remove('active'));

  // Bỏ trạng thái active của các nút tab
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => btn.classList.remove('active'));

  // Hiển thị tab được chọn
  document.getElementById(tabId).classList.add('active');
  evt.currentTarget.classList.add('active');
}

// Cuộn trang mượt khi click vào menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
