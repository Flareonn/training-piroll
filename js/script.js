function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});
$(".portfolio-grid__block").hover(function () {
  $(this).children(".portfolio-wrap__link").toggleClass("active");
});
;
$(document).ready(function () {
  $(".header-burger,.header-menu__link").click(function () {
    $(".header-burger,.header-menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
});
let page = window.location.pathname.split("/").pop();
let navbar = $(".header-menu__items");
let active = "header-menu__link_active";
navbar.find("a").each(function () {
  if ($(this).attr("href") == page) {
    $(this).addClass(active);
  }
});
;
