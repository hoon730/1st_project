// const slider = document.querySelector(".main_left_text_slide_wrapper_slider");
// const Slides = document.querySelectorAll(".main_left_text_slide_wrapper_slider span");
// const sliderHeight = slider.querySelector("span").offsetHeight;

// let slideCount = Slides.length;
// let currentIndex = 0;
// let sliderClone = slider.firstElementChild.cloneNode(true);

// slider.appendChild(sliderClone);

// function startslide(){
//   currentIndex++;
//   slider.style.transition = "all 0.6s";
//   slider.style.transform = `translateY(${sliderHeight}*${currentIndex}px)`;

//   if(currentIndex == slideCount){
//     setTimeout(() => {
//       slider.style.transition = "0";
//       slider.style.transform = "translateY(0px)";
//     },700);
//     currentIndex = 0;
//   }
// }

// setInterval(startslide, 3000);


// 슬라이더 기능
const slider = document.querySelector(".main_left_text_slide_wrapper_slider");
const slides = document.querySelectorAll(
  ".main_left_text_slide_wrapper_slider span"
);
const sliderHeight = slides[0].offsetHeight;

let slideCount = slides.length;
let currentIndex = 0;
let sliderClone = slider.firstElementChild.cloneNode(true);

slider.appendChild(sliderClone);

function startSlide() {
  currentIndex++;
  slider.style.transition = "all 0.6s";
  slider.style.transform = `translateY(-${sliderHeight * currentIndex}px)`;

  if (currentIndex === slideCount) {
    setTimeout(() => {
      slider.style.transition = "0s";
      slider.style.transform = "translateY(0px)";
      currentIndex = 0;
    }, 600); // transition과 동일하게 맞춰줌
  }
}

setInterval(startSlide, 3000);

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
    mainLeftText1.appendChild(span).style.transition = "all 0.3s";
    mainLeftText1.appendChild(span).style.transform = "translateY(100%)";
    span.classList.add("singleWord")
  }
  
  for(let char of text2Container) {
    let span = document.createElement("span");
    span.textContent = char;
    if(span.innerText === "Y" || span.innerHTML === "D"){
      span.style.fontFamily = "Fugaz One"
      span.style.textShadow = "-5px 0px var(--box-border-color), 0px 5px  var(--box-border-color), 1px 0px  var(--box-border-color), 0px -1px  var(--box-border-color)"
    }
    mainLeftText2.appendChild(span).style.transition = "all 0.3s";
    mainLeftText2.appendChild(span).style.transform = "translateY(100%)";
    span.classList.add("singleWord")
  }

  document.querySelectorAll(".singleWord").forEach((text, index) => {
    setTimeout(() => {
      text.style.transform = "translateY(0)";
    }, 80*(index+1));
  })

};


window.addEventListener("scroll", function() {
  let windowScroll = this.scrollY;

  
  
});