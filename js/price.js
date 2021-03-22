/*
 * This adds event listeners to DOM elements
 * waits for all elements loaded
 * @ author:
 */
document.addEventListener("DOMContentLoaded", (event) => {
  // get thumbnails images from DOM
  const colorThumbails = document.querySelectorAll(
    ".color-thumbnails-wrapper img"
  );
  // add listeners to all thumbnails images from DOM
  colorThumbails.forEach((element) => {
    element.addEventListener("click", fnColorThumbails);
  });
  // Listener change on html "select tag"
  document.getElementById("idSize").addEventListener("change", fnSizePrice);
});

/*
 * This updates thumbnails selection,
 * and upadtes price based on selection
 * of color.
 * @ author:
 */
function fnColorThumbails(event) {
  // debugger;
  // get DOM element price
  const $price = document.querySelector(".price-wrapper h3");
  // get custom proporty yellow color
  const borderColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--teamLightblue");
  // clear previous selection
  const colorThumbails = document.querySelectorAll(
    ".color-thumbnails-wrapper img"
  );
  colorThumbails.forEach((element) => {
    element.style.border = "none";
  });
  // get selected data and switch price
  const selectedColor = event.target.dataset.color;
  calculatePriceColor(selectedColor);
  // update price
  $price.textContent = getFinalPrice() + "€";
  // Set border color to thumnails
  event.target.style.border = `2px solid ${borderColor}`;
}

/*
 * This upadtes price based on size selection
 * @ author:
 */
function fnSizePrice(event) {
  // get DOM element price
  const $price = document.querySelector(".price-wrapper h3");
  // get selected data and switch price
  const selectedSize = document.getElementById("idSize").value;
  calculatePriceSize(selectedSize);
  // update price
  $price.textContent = getFinalPrice() + "€";
}

/*
 * This function calculates price based on
 * color options
 * @ author:
 */
function calculatePriceColor(color = "Blue") {
  // color pricing
  switch (color) {
    case "Red":
      objPrice.color = 16.55;
      break;
    case "Blue":
      objPrice.color = 14.55;
      break;
    default:
      break;
  }
}

/*
 * This function calculates price based on
 * size options
 * @ author:
 */
function calculatePriceSize(size = 38) {
  // size pricing
  switch (size) {
    case "38":
    case "39":
      objPrice.size = 2;
      debugger;
      break;
    case "40":
    case "41":
    case "42":
      objPrice.size = 3;
      break;
    case "43":
    case "44":
      objPrice.size = 5;
      debugger;
      break;
    case "45":
      objPrice.size = 10;
      break;
    default:
      break;
  }
}

/*
 * This function calculates price based on
 * size options
 * @ author:
 */
function getFinalPrice() {
  return (objPrice.color + objPrice.size).toFixed(2);
}
/*
 * price object
 * @ author:
 */
let objPrice = {
  color: 14.55,
  size: 2.0,
};
