const menu = document.querySelector(".burger-menu");
const body = document.body;
const container = document.querySelector(".container");
const menuItem = document.querySelectorAll(".navigation__link");

const overflow = document.createElement("div");
overflow.className = "overflow";

menu.addEventListener("click", function (e) {
  if (window.innerWidth < 992) {
    menu.classList.toggle("active");

    let checkOpenMenu = menu.classList.contains("active");

    checkOpenMenu ? (body.style.overflow = "hidden") : (body.style.overflow = "scroll");

    checkOpenMenu ? container.prepend(overflow) : overflow.remove();
  }
});

menuItem.forEach((item) => {
  item.addEventListener("click", function (e) {
    if (window.innerWidth < 992) {
      let checkOpenMenu = menu.classList.contains("active");

      menu.classList.toggle("active");

      checkOpenMenu ? (body.style.overflow = "scroll") : (body.style.overflow = "hidden");

      checkOpenMenu ? overflow.remove() : container.prepend(overflow);
    }
  });
});

