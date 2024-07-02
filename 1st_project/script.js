const slider = document.querySelector(".main_left_text_slide_wrapper_slider");
const Slides = document.querySelectorAll(".main_left_text_slide_wrapper_slider span");
const sliderHeight = slider.querySelector("span").offsetHeight;

let slideCount = Slides.length;
let currentIndex = 0;
let sliderClone = slider.firstElementChild.cloneNode(true);

slider.appendChild(sliderClone);

function startslide(){
  currentIndex++;
  slider.style.transition = "all 0.6s";
  slider.style.transform = `translateY(${sliderHeight}*${currentIndex}px)`;

  if(currentIndex == slideCount){
    setTimeout(() => {
      slider.style.transition = "0";
      slider.style.transform = "translateY(0px)";
    },700);
    currentIndex = 0;
  }
}

setInterval(startslide, 3000);

window.addEventListener("scroll", function() {
  let windowScroll = this.scrollY;
  
});