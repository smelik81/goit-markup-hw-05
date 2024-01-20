const openModalWindow = document.querySelector('.main-btn');
const openBackdropWindow = document.querySelector('.backdrop');
const closeBackdropWindow = document.querySelector('.modal-btn-close');


openModalWindow.addEventListener('click', function () {
    openBackdropWindow.classList.add('.is-open')
});

closeBackdropWindow.addEventListener('click', function () {
    openBackdropWindow.classList.remove('.is-open')
});




