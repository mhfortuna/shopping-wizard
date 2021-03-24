import {
  validFirstName,
  validLastName,
  validBirthday,
  validAdress,
  validPostalCode,
  validPhoneNumber,
} from "./addressPage.js";

export let adressPageValidity;

/*
 * This section read all form inputs
 * and prevent user to go to next page
 * if there is a missing parameter
 * @ author:
 */
document.getElementById("btnNext").addEventListener("click", function () {
  // get data and store it in object
  if (getCurrentPage() === 2) {
    const gg = document.getElementById("Uname");
    adressPageValidity = validFirstName(gg);
  }
});

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

/*
 * This function validates all inputs
 * in adress page
 * @ author:
 */
export function formAdressValidity() {
  return (
    validFirstName() &&
    validLastName() &&
    validBirthday() &&
    validAdress() &&
    validPostalCode() &&
    validPhoneNumber()
  );
}

document
  .querySelector(".page-input-button")
  .addEventListener("click", function () {
    document.querySelector("section.profile form").reset();
  });
