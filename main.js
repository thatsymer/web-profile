const closeMenu= document.getElementById("nav-close");
const openMenu= document.getElementById("nav-open");
const navContainer = document.getElementById("nav-container")

closeMenu.addEventListener("click", ()=>{
    navContainer.classList.add('close')
    navContainer.classList.remove('open')})

openMenu.addEventListener("click", ()=>{
    navContainer.classList.add('open')
    navContainer.style.right = 0;
    navContainer.classList.remove('close')
})



// let spinnerWrapper = document.querySelector('.load__wrapper');

// window.addEventListener('load', function () {
// spinnerWrapper.parentElement.removeChild(spinnerWrapper);
    
// });