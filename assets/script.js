document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const dropdownMenu = document.getElementById('dropdownMenu');

    menuToggle.addEventListener('click', function () {
        if (dropdownMenu.style.left === '0px') {
            dropdownMenu.style.left = '-100%';
        } else {
            dropdownMenu.style.left = '0';
        }
    });

    document.addEventListener('click', function (event) {
        if (!menuToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.left = '-100%';
        }
    });
});
