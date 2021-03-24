import { myOrder } from "./buttonpage-demo.js";

/*
 * This functions shows and hides gift section
 * @ author:
 */
const checkbox = document.getElementById("check-gift");
checkbox.addEventListener("change", function () {
  console.log("check");
  // Get the divs to hide and show
  var giftMessageWrapper = document.querySelector(".wrp-gift-message");
  var giftFileWrapper = document.querySelector(".file-input");
  // If the checkbox is checked, display the divs
  if (this.checked == true) {
    giftMessageWrapper.style.display = "block";
    giftFileWrapper.style.display = "block";
  } else {
    giftMessageWrapper.style.display = "none";
    giftFileWrapper.style.display = "none";
  }
});

/*
 * This functions calculates shipping date
 * and returns an object:
 * First date: today + 24H
 * Second date: First date + 24H
 * @ author:
 */
function shippingDates() {
  const obj = {};
  // First date
  const date = new Date();
  date.setDate(date.getDate() + 1);
  obj.firstDate = date.toLocaleDateString();
  // second date
  date.setDate(date.getDate() + 1);
  obj.secondDate = date.toLocaleDateString();
  // third date
  date.setDate(date.getDate() + 1);
  obj.thirdDate = date.toLocaleDateString();
  return obj;
}

/*
 * Here we update the div template
 * to display the shipping date
 * based on the shipment type
 * Premium: today + 24H
 * Extra: Premium + 24H
 * @ author:
 */
const temp = document.querySelector(".shiptemplate");
const bDate = temp.querySelector("b");
const radios = document.querySelectorAll('input[type=radio][name="type"]');
radios.forEach((radio) =>
  radio.addEventListener("change", (event) => {
    console.log(event.target.id);
    if (event.target.id === "extra") {
      bDate.textContent = shippingDates().secondDate;
      myOrder.shippingPrice = 4.99;
    } else if (event.target.id === "premium") {
      bDate.textContent = shippingDates().firstDate;
      myOrder.shippingPrice = 9.99;
    } else {
      // Free
      bDate.textContent = shippingDates().thirdDate;
      myOrder.shippingPrice = 0;
    }
    // show
    temp.classList.add("shipping-show");
  })
);
