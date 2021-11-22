let mouseCursor = document.querySelector('.cursor'); 
let navLinks = document.querySelectorAll('.nav-links li'); 
let image = document.querySelectorAll('.front-cover') 
let footer = document.querySelector('.footer-section');
let body = document.querySelector('body');

console.log(footer)

window.addEventListener('mousemove', cursor); 

function cursor(event){
    mouseCursor.style.top = event.pageY + 'px';
    mouseCursor.style.left = event.pageX + 'px'

}

navLinks.forEach(link => {
    link.addEventListener('mouseover',()=>{
        mouseCursor.classList.add('link-grow');
        link.classList.add('hovered-link');
    })

    link.addEventListener('mouseleave', ()=>{
        mouseCursor.classList.remove('link-grow')
        link.classList.remove('hovered-link')
    })
})

image.forEach(img =>{
    img.addEventListener('mouseover', ()=>{
        mouseCursor.classList.add('scale')
    })
})

image.forEach(img =>{
    img.addEventListener('mouseleave', ()=>{
        mouseCursor.classList.remove('scale');
    })
})

