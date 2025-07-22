document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

document.querySelectorAll('.nav-links li a').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
    });
});