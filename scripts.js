// get computed properties in javascript
var red = document.querySelector(".red");
var cyan = document.querySelector(".cyan");
var violet = document.querySelector(".violet");
var orange = document.querySelector(".orange");
var pink = document.querySelector(".pink");

var center = document.querySelector(".center");

const getRGBColor = (selectedElement) => {
  return window.getComputedStyle(selectedElement).backgroundColor;
};

// var color = getRGBColor(pink);
// pink.addEventListener("mouseenter", () => {
//   center.style.background = color;
// });

const magicColorChanger = (element, color) => {
  return element.addEventListener("mouseenter", () => {
    center.style.background = color;
  });
};
magicColorChanger(red, getRGBColor(red));
magicColorChanger(cyan, getRGBColor(cyan));
magicColorChanger(violet, getRGBColor(violet));
magicColorChanger(orange, getRGBColor(orange));
magicColorChanger(pink, getRGBColor(pink));
