let nav = document.getElementById('navbar-changing-color');


window.addEventListener('scroll', function (event) {
    event.preventDefault();
    if (window.scrollY <= nav.scrollHeight) {
        nav.style.backgroundColor = 'transparent';
    } else {
        nav.style.backgroundColor = '#120032';
        nav.style.transition = 'background-color 200ms linear'
    }
});