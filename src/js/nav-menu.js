document.querySelector('#nav-bar-btn').onclick = function (e) {
    const menu = document.querySelector('#nav-menu');
    const btn = document.querySelector('#nav-bar-btn');

    menu.classList.toggle('is-active');
    btn.classList.toggle('is-active');

    e.preventDefault();
}