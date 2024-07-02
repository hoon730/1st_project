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


//main 모든 텍스트 이벤트 
const mainLeftText1 = document.querySelector(".main_left_text_top span");
const mainLeftText2 = document.querySelector(".main_left_text_middle span");
let text1Container = mainLeftText1.textContent;
let text2Container = mainLeftText2.textContent;
mainLeftText1.innerHTML = "";
mainLeftText2.innerHTML = "";


window.onload = function() {
  for(let char of text1Container) {
    let span = document.createElement("span");
    span.textContent = char;
    mainLeftText1.appendChild(span);
    mainLeftText1.style.transform = "translateY(100%)";

  }
  
  for(let char of text2Container) {
    let span = document.createElement("span");
    span.textContent = char;
    if(span.innerText === "Y" || span.innerHTML === "D"){
      span.style.fontFamily = "Fugaz One"
      span.style.textShadow = "-5px 0px var(--box-border-color), 0px 5px  var(--box-border-color), 1px 0px  var(--box-border-color), 0px -1px  var(--box-border-color)"
    }
    mainLeftText2.appendChild(span);
    mainLeftText2.style.transform = "translateY(100%)";
  }

  mainLeftText1.querySelectorAll("span").forEach((text, index) => {
    setTimeout(() => {
      text.style.transform = "translateY(0)";
    }, 80*(index+1));
  })
  
  mainLeftText2.querySelectorAll("span").forEach((text, index) => {
    setTimeout(() => {
      text.style.transform = "translateY(0)";
    }, 80*(index+1));
  })
};


window.addEventListener("scroll", function() {
  let windowScroll = this.scrollY;
  
});