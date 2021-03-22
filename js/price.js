/*  
==========================================
changing prices
==========================================
*/
// get thumbnails images from DOM
const colorThumbails = document.querySelectorAll(
  ".color-thumbnails-wrapper img"
);
// add listeners to all thumbnails images from DOM
colorThumbails.forEach((element) => {
  element.addEventListener("click", fnColorThumbails);
});

function fnColorThumbails(event) {
  // get DOM element price
  const $price = document.querySelector(".price-wrapper h3");
  // get custom proporty yellow color
  const borderColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--teamLightblue");
  // clear previous selection
  colorThumbails.forEach((element) => {
    element.style.border = "none";
  });
  // switch price
  switch (event.target.getAttribute("alt")) {
    case "Red":
      $price.textContent = "15.55€";
      break;

    case "Blue":
      $price.textContent = "16.55€";

      break;

    default:
      break;
  }
  // Set border color
  event.target.style.border = `2px solid ${borderColor}`;
}
