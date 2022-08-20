const headerShadow = document.querySelector("header");
const headerUtil = document.querySelector(".header-util");

function headerAddClass() {
  let scrollY = window.scrollY;
  if (scrollY > 0) {
    headerShadow.classList.add("shadow");
    headerUtil.classList.add("hide");
  } else {
    headerShadow.classList.remove("shadow");
    headerUtil.classList.remove("hide");
  }
}

window.addEventListener("scroll", headerAddClass);
