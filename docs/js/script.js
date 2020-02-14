const menuButton = document.getElementById('menu-btn'),
      headerNavigation = document.getElementById('top-nav_menu')

menuButton.addEventListener('click', () => {
    headerNavigation.classList.toggle('top-nav_menu_active');
    menuButton.classList.toggle('menu-btn_active');
    document.body.classList.toggle('overflow-hidden');
})