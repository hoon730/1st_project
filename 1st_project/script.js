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
//     span.style.transition = "transform 0.3s, opacity 0.3s";
//     mainLeftTextTop.appendChild(span);

//     setTimeout(() => {
//       requestAnimationFrame(() => {
//         span.style.opacity = 1;
//         span.style.transform = "translateY(0)";
//       });
//     }, delay);

//     delay += 300;
//   }
// }


// gnb 클릭시 scroll 이동 이벤트
const btn = document.querySelectorAll(".gnb ul li");

btn.forEach((item, index) => {
  let currentIndex = 0;
  item.addEventListener("click", () => {
    const section = document.querySelectorAll("section");
    const offSetTop = section[index].offsetTop;
    console.log(offSetTop)
    if(index >= 1) {
      index = index +1
    window.scrollTo({top:offSetTop, behavior:"smooth"})
      index--
    }
    window.scrollTo({top:offSetTop, behavior:"smooth"})
  })
})


window.addEventListener("scroll", function() {
  let windowScroll = this.scrollY;

  const section = document.querySelectorAll("section");

  section.forEach((section) => {
    if(windowScroll >= section.offsetHeight - window.innerHeight / 5) {
      section.classList.add("active");
    }
  })

});