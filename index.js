const navEl = document.querySelector(".navbar");
const pEl = document.querySelector(".text");

/// -------for helping--------////////////
// console.log(navEl);
// console.log(pEl);

// console.log(pEl.offsetTop);
// console.log(navEl.offsetHeight);
////////////////////

window.addEventListener("scroll", () => {
  if (window.scrollY >= pEl.offsetTop - navEl.offsetHeight) {
    navEl.classList.add("active");
  } else {
    navEl.classList.remove("active");
  }
});

///  ----- another way below
// window.onscroll = () => {
//   if (window.scrollY >= pEl.offsetTop - navEl.offsetHeight) {
//     navEl.classList.add("active");
//   } else {
//     navEl.classList.remove("active");
//   }
// };
