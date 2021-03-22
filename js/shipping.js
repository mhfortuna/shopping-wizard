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

