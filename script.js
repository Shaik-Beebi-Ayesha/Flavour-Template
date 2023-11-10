const slider = document.getElementById('slider');
const slides = document.getElementById('slides');
const slideWidth = document.querySelector('.slide').offsetWidth;
let currentIndex = 0;

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.children.length;
  updateSlider();
}

function updateSlider() {
  const newTransformValue = -currentIndex * slideWidth;
  slides.style.transform = `translateX(${newTransformValue}px)`;
}

setInterval(nextSlide, 4000);


var sidemenu=document.querySelector(".side_menu");
document.querySelector(".bx-menu").addEventListener('click',function(){
  if(sidemenu.style.display == 'block'){
    sidemenu.style.display = 'none';
  }
  else{
    sidemenu.style.display = 'block';
  }
})
var myanchor = sidemenu.querySelector("ul");
myanchor.addEventListener('click',function(){
  if(sidemenu.style.display == 'block'){
    sidemenu.style.display = 'none';
  }
})