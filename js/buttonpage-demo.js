import {
  formAdressValidity,
  getFormAddressData,
  clearFormAddressData,
} from "./form/addressPage.js";
import {
  formProfileValidity,
  getFormProfileData,
  clearFormProfileData,
} from "./form/profiePage.js";

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
const lastBuyNowBtn = document.getElementById("btn-buy-now-finished");
const buyNowConditions = document.getElementById("conditions");
lastBuyNowBtn.addEventListener("click", validationChangePage);
buyNowConditions.addEventListener("change", removeValidation);
const pBuyNowValidation = document.querySelector(".p-buy-now-validation");

/* buttonpage.addEventListener('click', changePage); */
function changePage() {
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
      if (formProfileValidity() || true) {
        page.style.transform = positionTranslate(indexpage);
        page.classList.add("horizTranslate");
        //  ...
        bullets[indexpage - 1].classList.add("completed-pbar");
        bars[indexpage - 2].classList.add("bar-pbar-completed");
        // store data in an abject and clear form
        const profileData = getFormProfileData();
        clearFormProfileData();
        indexpage += 1;
      }
      break;
    case 3:
      // console.log(formAdressValidity());
      if (formAdressValidity() || true) {
        page.style.transform = positionTranslate(indexpage);
        page.classList.add("horizTranslate");
        // ...
        bullets[indexpage - 1].classList.add("completed-pbar");
        bars[indexpage - 2].classList.add("bar-pbar-completed");
        // store data in an abject and clear form
        const adressData = getFormAddressData();
        clearFormAddressData();
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
buyNowConditions.addEventListener('change', function changeBuyButton() {
  if (buyNowConditions.checked == true) {
    lastBuyNowBtn.style.opacity = "1";
  } else{
    lastBuyNowBtn.style.opacity = "0.5";
    pBuyNowValidation.classList.remove('hide');
  }
})


function validationChangePage() { 
  /* Verify if checkbox is checked */
  if (buyNowConditions.checked == true) 
  {
    changePage()
  } else{
    pBuyNowValidation.classList.remove('hide');
  }
}

function removeValidation(){
  pBuyNowValidation.classList.add('hide');
}/* order object for last pages */

export let myOrder = {
  product: undefined,
  color: undefined,
  size: undefined,
  price: undefined,
  photoAddress: undefined,
  shippingPrice: 0,
  shippingDate1: undefined,
  shippingDate2: undefined,
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
  myOrder.photoAddress = document.querySelector(
    '.main-thumbnail'
  ).src;
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
const purchasePic = document.getElementById("img-purchase-1");
const orderPic = document.getElementById("img-purchase-2");
function updatePurchasePage() {
  /* Product details */
  yourPurchasePageText.childNodes[1].innerText = myOrder.product;
  yourPurchasePageText.childNodes[3].innerText += " " + myOrder.size;
  yourPurchasePageText.childNodes[5].innerText += " " + myOrder.color;
  yourOrderPageText.childNodes[1].innerText = myOrder.product;
  yourOrderPageText.childNodes[3].innerText += " " + myOrder.size;
  yourOrderPageText.childNodes[5].innerText += " " + myOrder.color;
  /* Shipping dates */
  yourPurchasePageText.childNodes[9].innerText += " " + myOrder.shippingDate1;
  yourPurchasePageText.childNodes[11].innerText += " " + myOrder.shippingDate2;
  yourOrderPageText.childNodes[9].innerText += " " + myOrder.shippingDate1;
  yourOrderPageText.childNodes[11].innerText += " " + myOrder.shippingDate2;
  /* Price */
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
  /* Picture */
  purchasePic.src = myOrder.photoAddress;
  orderPic.src = myOrder.photoAddress;
}

