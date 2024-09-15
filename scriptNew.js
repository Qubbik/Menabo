document.addEventListener('DOMContentLoaded', function () {
    const menuButtons = document.querySelectorAll('.menus-ensemble li a');
    const menuBase = document.querySelectorAll('.menu-base');
    let activeMenu = null;

    menuButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const targetMenu = this.className.split(' ')[0];
            const menuContent = document.querySelector(`.menu-${targetMenu}`);

            if (activeMenu === menuContent) {
                menuContent.classList.remove('open');
                activeMenu = null;
            } else {
                if (activeMenu) {
                    activeMenu.classList.remove('open');
                }
                menuContent.classList.add('open');
                activeMenu = menuContent;
            }
        });
    });
});