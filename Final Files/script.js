window.onload = function () {
  setTimeout(function () {
    document.body.classList.add("display");
  }, 4000);
};

document.querySelector(".hamburger-menu").onclick = function () {
  document.querySelector(".container").classList.toggle("change");
};

document.querySelector(".scroll-btn").onclick = function () {
  document.documentElement.style.scrollBehavior = "smooth";
  setTimeout(function () {
    document.documentElement.style.scrollBehavior = "auto";
  }, 1000);
};
