// main_left rollingbar 기능
const rollingCB = () => {
  const prevItem = document.querySelector(".prev");
  prevItem.classList.remove("prev");

  const currentItem = document.querySelector(".current");
  currentItem.classList.remove("current");
  currentItem.classList.add("prev");

  const nextItem = document.querySelector(".next");

  if (nextItem.nextElementSibling == null) {
    const firstItem = document.querySelector(".wrap ul li:first-child");
    firstItem.classList.add("next");
  } else {
    nextItem.nextElementSibling.classList.add("next");
  }

  nextItem.classList.remove("next");
  nextItem.classList.add("current");
};

let interval = setInterval(rollingCB, 3000);

// bar_menu 클릭시 bar_slide 이벤트

const barMenuBtn = document.querySelector(".bar_menu");
const closeBtn = document.querySelector(".close");
const barSlide = document.querySelector(".bar_slide");
const barSlideBtn = barSlide.querySelectorAll("ul li");

barMenuBtn.addEventListener("click", (e) => {
  e.preventDefault();
  barSlide.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  barSlide.classList.remove("active");
});

barSlideBtn.forEach((el) => {
  el.addEventListener("click", () => {
    barSlide.classList.remove("active");
  })
});

// 선생님 버전
//   const mainLeftTextTop = document.querySelector(".main_left_text_top");
// const mainLeftText2 = document.querySelector(".main_left_text_middle span");

// let text1Container = "A Creative Road To Frontend 2024";
// let text2Container = mainLeftText2.textContent;

// mainLeftText2.innerHTML = "";

// window.onload = function () {
//   let delay = 0;

//   for (let char of text1Container) {
//     let span = document.createElement("span");
//     span.textContent = char === " " ? "\u00A0" : char;
//     span.style.opacity = 0;
//     span.style.transform = "translateY(100%)";
//     span.style.transition = "transform 0.2s, opacity 0.2s";
//     mainLeftTextTop.appendChild(span);
    
//     setTimeout(() => {
//       requestAnimationFrame(() => {
//         span.style.opacity = 1;
//         span.style.transform = "translateY(0)";
//       });
//     }, delay);

//     delay += 200;
//   }
// }


// gnb 클릭시 scroll 이동 이벤트
const btn = document.querySelectorAll(".gnb ul li");

btn.forEach((item, index) => {
  let currentIndex = 0;
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const menu = document.querySelectorAll(".menu");
    const offSetTop = menu[index].offsetTop;
    window.scrollTo({top:offSetTop, behavior:"smooth"})
  })
})


// 스크롤시 각 section에 active add 
window.addEventListener("scroll", function() {
  let windowScroll = this.scrollY;

  const section = document.querySelectorAll("section");

  section.forEach((section) => {
    if(windowScroll >= section.offsetHeight - this.window.innerHeight/2) {
      section.classList.add("active");
    }
  })
});

// scrollTop 클릭 시 최상단 이동
const scrollTopBtn = document.querySelector(".scroll_top");

scrollTopBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({top:0, behavior:"smooth"});
})


// gnb li 마우스오버 시 글자 이동

// const gnbText = document.querySelectorAll(".gnb ul li a");

// gnbText.forEach((txt) => {
//   txt.addEventListener("mouseover", () => {
//     const txtValue = txt.innerText;
//     let singleWord = txtValue.split('');
//     // console.log(singleWord.length);
  
//     for(i = 0; i < singleWord.length; i++) {
//       let span = document.createElement("span");
//       span.innerHTML = singleWord[i];
//       txt.appendChild(span);
//       console.log(span)

//       span.style = "transition: all 0.3s; transform: translateY(-100%);"
//     }


//   })
  
// });