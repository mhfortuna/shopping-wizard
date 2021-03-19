/*  
==========================================
changing prices
==========================================
*/
const colorThumbails = document.querySelectorAll(
  ".color-thumbnails-wrapper img"
);

colorThumbails.forEach((element) => {
  element.addEventListener("click", fnColorThumbails);
});

function fnColorThumbails(event) {
  // get DOM elements
  const $price = document.querySelector(".price-wrapper h3");
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
  event.target.style.border = "2px solid red";
}
