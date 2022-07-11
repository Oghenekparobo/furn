import './style.css'

const navBtn = document.querySelector('#menu');
const menuBar = document.querySelector('[role="menubar"]')

navBtn.addEventListener('click' , ()=>{ 
    // const isExpanded = JSON.parse(navBtn.getAttribute('aria-expanded'));
    navBtn.setAttribute('arial-expanded', true);
    menuBar.classList.toggle('hidden')
    menuBar.classList.toggle('flex')
    menuBar.style.height = "100%"
   

})