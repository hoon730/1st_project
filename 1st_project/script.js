const slide = document.querySelector(".main_left_text_slide");
const slideHeight = slide.offsetHeight;
console.log(slideHeight);
const wholeSlide = document.querySelectorAll(".main_left_text_slide_wrapper span");
const slideCount = wholeSlide.length;
const slideWrapper = document.querySelector(".main_left_text_slide_wrapper");
let slideIdex = 0;

const upSlide = () => {
  slideIdex++;
  slideWrapper.style.transform = `translateY(-${slideHeight}px)`;
  if(slideIdex > slideCount){
    slide.appendChild(wholeSlide);
    slideIdex = 0;
  }
};

let startSlide = setInterval(upSlide, 3000);