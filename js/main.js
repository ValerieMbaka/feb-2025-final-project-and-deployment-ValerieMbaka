// Alert the user when the page loads
// document.addEventListener('DOMContentLoaded', function () {
//     alert("Welcome to MarketShift!");
// });
document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll('.dropdown-submenu');
    dropdowns.forEach(function (dropdown) {
        dropdown.addEventListener('mouseenter', function () {
            const submenu = this.querySelector('.dropdown-menu');
            if (submenu) {
                submenu.classList.add('show');
            }
        });
        dropdown.addEventListener('mouseleave', function () {
            const submenu = this.querySelector('.dropdown-menu');
            if (submenu) {
                submenu.classList.remove('show');
            }
        });
    });
});
