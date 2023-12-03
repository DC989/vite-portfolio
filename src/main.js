import { initFlowbite } from "flowbite";
import "./index.css";

import { head, throttle } from "lodash";
import $ from "jquery";

const runOnScroll = () => {
  if (
    document.body.scrollTop > header ||
    document.documentElement.scrollTop > header
  ) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }

  if (
    document.body.scrollTop > header + sectionHero - 1 ||
    document.documentElement.scrollTop > header + sectionHero - 1
  ) {
    headerFixed.style.transform = "translate3d(0, 0, 0)";
  } else {
    headerFixed.style.transform = "translate3d(0, -100%, 0)";
  }
};

const topFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

const myButton = document.getElementById("btn-top");

window.addEventListener("scroll", throttle(runOnScroll, 250));
myButton.addEventListener("click", topFunction);

let header = $(".header").length ? $(".header").outerHeight(true) : 0;
let sectionHero = $("#section-hero").length
  ? $("#section-hero").outerHeight(true)
  : 0;
let total = header + sectionHero;
console.log("Total offset is " + total);

let headerFixed = document.querySelector(".headerFixed");

console.log("Header height is " + header);
console.log("Hero section height is " + sectionHero);

const d = new Date();
let year = d.getFullYear();
let footerYear = ($(".footer-year").innerText = year.toString());

const mediaQuery = window.matchMedia("(max-width: 767px)");
if (mediaQuery.matches) {
  // If the viewport-width is < 768px terminate the function
  //return;
} else {
  // If the viewport-width is >= 768px set .dropdown-menu top property
  //return;
}
