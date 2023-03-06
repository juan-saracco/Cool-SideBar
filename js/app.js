//DOM Acces

const btn = document.getElementById('btn-hamb');
const navbar = document.getElementById('navbar');

btn.addEventListener('click',()=>{
    if (navbar.classList.contains('active')) {
        navbar.classList.remove('active')   
    }else{
        navbar.classList.add('active')   
    }
});