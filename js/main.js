const openModalWindow = document.querySelector('.main-btn');
const showModalWindow = document.querySelector('.backdrop');
const closeBackdropWindow = document.querySelector('.modal-btn-close');



openModalWindow.addEventListener('click', function () {
    if (!showModalWindow.classList.contains('.is-open')) {
        showModalWindow.classList.add('.is-open')
    } else {
        showModalWindow.classList.remove('.is-open')
    }
});

closeBackdropWindow.addEventListener('click', function () {
    openModalWindow.classList.remove('.is-open')
});




