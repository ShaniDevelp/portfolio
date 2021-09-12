const images = document.querySelector('.portfolio-img');
const btns = document.querySelector('.link-buttons')

images.addEventListener("mouseover", function(){
    console.log()
    btns.classList.add('display')
})

images.addEventListener("mouseleave", function(){
    console.log('fhgrui')
    btns.classList.add('display-not')
})
















