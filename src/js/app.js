// variables 
const btnToggle = document.querySelector('#btn-toggle');
const btnClose = document.querySelector('#btn-close');
const sidebar = document.querySelector('#sidebar');

btnToggle.addEventListener('click', () => {
    sidebar.classList.toggle('show-sidebar');
});

btnClose.addEventListener('click', () => {
    sidebar.classList.remove('show-sidebar');
})