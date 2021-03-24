import { formAdressValidity } from "./form/form-data.js";

/*Progress bar */
const previousBtn = document.getElementById("previousBtn");
const nextBtn = document.getElementById("nextBtn");
const finishBtn = document.getElementById("finishBtn");
const content = document.getElementById("content-pbar");
const bullets = document.querySelectorAll(".bullet-pbar");
const bars = document.querySelectorAll(".bar-pbar");

/*Animation variables*/
const buttonpage = document.getElementById("btnNext");
const page = document.querySelector(".maindiv");
let indexpage = 1;

/* Show hide elements */
const logo = document.querySelectorAll(".logo");
const quote = document.querySelector(".quote");
const containerPbar = document.querySelector(".container-pbar");
const footerButtons = document.querySelector(".page-buttons");
const footerSm = document.querySelector(".foot-sm");
/* Event Listeners */
buttonpage.addEventListener("click", changePage);
/* First buy button */
const firstBuyButton = document.getElementById("buy-btn");
firstBuyButton.addEventListener("click", firstBuy);
/* Last buy now button */
const lastBuyNowBtn = document.getElementById('btn-buy-now-finished');
const buyNowConditions = document.getElementById('conditions');
lastBuyNowBtn.addEventListener('click', validationChangePage);
buyNowConditions.addEventListener('change', removeValidation);
const pBuyNowValidation = document.querySelector('.p-buy-now-validation');

/* buttonpage.addEventListener('click', changePage); */
function changePage() {
  // animate transition CSS classes
  // translateAnimation()
  // switch based on page
  switch (indexpage) {
    case 1:
      page.style.transform = positionTranslate(indexpage);
      page.classList.add("horizTranslate");

      /* Make footer buttons appear after page 1 */
      for (let i = 0; i < logo.length; i++) {
        logo[i].classList.toggle("hide");
      }
      quote.classList.add("hide");
      footerSm.classList.add("hide");
      containerPbar.classList.toggle("hide");
      footerButtons.classList.toggle("hide");
      indexpage += 1;
      break;
    case 2:
      page.style.transform = positionTranslate(indexpage);
      page.classList.add("horizTranslate");

      bullets[indexpage - 1].classList.add("completed-pbar");
      bars[indexpage - 2].classList.add("bar-pbar-completed");
      indexpage += 1;
      break;
    case 3:
      // console.log(formAdressValidity());
      if (formAdressValidity()) {
        page.style.transform = positionTranslate(indexpage);
        page.classList.add("horizTranslate");

        bullets[indexpage - 1].classList.add("completed-pbar");
        bars[indexpage - 2].classList.add("bar-pbar-completed");
        indexpage += 1;
      }
      break;
    case 4:
      page.style.transform = positionTranslate(indexpage);
      page.classList.add("horizTranslate");

      footerButtons.classList.toggle("hide");
      updatePurchasePage();
      indexpage += 1;
      break;
    case 5:
      page.style.transform = positionTranslate(indexpage);
      page.classList.add("horizTranslate");

      bullets[indexpage - 2].classList.add("completed-pbar");
      bars[indexpage - 3].classList.add("bar-pbar-completed");
      indexpage += 1;
      break;

    default:
      break;
  }
}

function positionTranslate(index) {
  return "translateX(" + index * -100 + "vw)";
}

/*
 * Here we add CSS classes to animate transition
 * to scroll between sections
 * @ author:
 */
function translateAnimation() {
  if (indexpage === 3) {
    page.style.transform = positionTranslate(indexpage);
    page.classList.add("horizTranslate");
  } else {
  }
}
/*
 * Here we ...
 * @ author:
 */
function validationChangePage() {
  /* Verify if checkbox is checked */
  if (buyNowConditions.checked == true) {
    changePage();
  } else {
    window.alert("Please accept our terms and conditions to buy");
  }
}
/* order object for last pages */

export let myOrder = {
  product: undefined,
  color: undefined,
  size: undefined,
  price: undefined,
  photoAddress: undefined,
  shippingPrice: 0,
  shipingDate: undefined,
};

function firstBuy() {
  loadToOrder();
  changePage();
}
/* Constants to retrieve product */

function loadToOrder() {
  /* Loads product specs to order object  */
  /* ! constants already in update-product-info.js */
  myOrder.product = document.querySelector(
    ".product-page .right-wrapper h2"
  ).innerText;
  myOrder.color = document.getElementById("prod-color").innerText;
  myOrder.size = document.getElementById("idSize").value;
  myOrder.price = document
    .querySelector(".price-wrapper h3")
    .innerText.slice(0, -1);
  myOrder.photoAddress = document.getElementsByClassName(
    "big-picture"
  )[0].lastElementChild.src;
}
/* Last pages constants */
const yourPurchasePageText = document.getElementsByClassName(
  "product-finish-text"
)[0];
const yourOrderPageText = document.getElementsByClassName(
  "product-finish-text"
)[1];
const yourPurchasePagePrices = document.getElementsByClassName(
  "right-wrapper-finish"
)[0];
const yourOrderPagePrices = document.getElementsByClassName(
  "right-wrapper-finish"
)[1];
function updatePurchasePage() {
  yourPurchasePageText.childNodes[1].innerText = myOrder.product;
  yourPurchasePageText.childNodes[3].innerText += " " + myOrder.size;
  yourPurchasePageText.childNodes[5].innerText += " " + myOrder.color;
  yourOrderPageText.childNodes[1].innerText = myOrder.product;
  yourOrderPageText.childNodes[3].innerText += " " + myOrder.size;
  yourOrderPageText.childNodes[5].innerText += " " + myOrder.color;
  yourPurchasePagePrices.childNodes[5].innerText += " " + myOrder.price + "€";
  yourPurchasePagePrices.childNodes[7].innerText +=
    " " + myOrder.shippingPrice + "€";
  yourPurchasePagePrices.childNodes[11].innerText +=
    " " + (parseFloat(myOrder.shippingPrice) + parseFloat(myOrder.price)) + "€";
  yourOrderPagePrices.childNodes[5].innerText += " " + myOrder.price + "€";
  yourOrderPagePrices.childNodes[7].innerText +=
    " " + myOrder.shippingPrice + "€";
  yourOrderPagePrices.childNodes[11].innerText +=
    " " + (parseFloat(myOrder.shippingPrice) + parseFloat(myOrder.price)) + "€";

  /* TODO: agregar precio de envío y sumar */
}


function removeValidation(){
  pBuyNowValidation.classList.add('hide');
}
