const button = document.querySelector('#menu');
const menuitems = document.querySelector('.menu-content');
button.addEventListener('click',()=>{
    menuitems.classList.toggle('show');
});