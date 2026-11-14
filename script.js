document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menuBtn');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');

  if (menuBtn && sidebar && overlay) {
    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('active');
      sidebar.classList.toggle('active');
      overlay.classList.toggle('active');
    });

    overlay.addEventListener('click', () => {
      menuBtn.classList.remove('active');
      sidebar.classList.remove('active');
      overlay.classList.remove('active');
    });
  }
});
