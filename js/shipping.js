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
    date.setDate(date.getDate() + 2);
    obj.secondDate = date.toLocaleDateString();
    return obj;
  }
  
  // console.log(shippingDates());
  /*
   * This functions calculates shipping date
   * and returns an object:
   * First date: today + 24H
   * Second date: First date + 24H
   * @ author:
   */
