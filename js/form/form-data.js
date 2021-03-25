import { formAdressValidity } from "./addressPage.js";

/*
 * This function returns the current page
 * @ author:
 */
function getCurrentPage() {
  // check page based on width of viewport and the position of product page
  const productPage = document.querySelector("section.product-page");
  const boundingWidth = parseInt(productPage.getBoundingClientRect().width);
  const boundingX = parseInt(productPage.getBoundingClientRect().x);
  const currentPage = Math.abs(Math.round(boundingX / boundingWidth));
  return currentPage;
}

/*
 * This function deletes data from
 * inputs and store their data in
 * client localeStorage
 * @ author:
 */
function dataLocalStorage(page) {
  switch (page) {
    case 1:
      break;

    default:
      break;
  }
}

/*
 * This function deletes data from
 * inputs and store their data in
 * client localeStorage
 * @ author:
 */
function formValidity(page) {
  const obj = {};
  switch (key) {
    case 1:
      // get form

      break;

    default:
      break;
  }
}
