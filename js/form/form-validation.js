import {
  validaUsername,
  validateEmail,
  validatePass,
  confirmPass,
} from "./profiePage.js";
import {
  validFirstName,
  validLastName,
  validBirthday,
  validAdress,
  validPostalCode,
  validPhoneNumber,
} from "./addressPage.js";

/*
 * This section validates form of:
 * Profile page
 * @ author:
 */
// Validate username
document.getElementById("Uname").addEventListener("focusout", validaUsername);
// validate email
document.getElementById("email").addEventListener("focusout", validateEmail);
// validate pass
document.getElementById("pass").addEventListener("focusout", validatePass);
// confirm pass
document.getElementById("pwd2").addEventListener("focusout", confirmPass);

/*
 * This section validates form of:
 * Adress page
 * @ author:
 */
// Validate first name
document.getElementById("fname").addEventListener("focusout", validFirstName);
// Validate last name
document.getElementById("lname").addEventListener("focusout", validLastName);
// Validate Birthday
document.getElementById("Birthday").addEventListener("focusout", validBirthday);
// Validate Adress
document.getElementById("address1").addEventListener("focusout", validAdress);
// Validate postal code
document.getElementById("pcode").addEventListener("focusout", validPostalCode);
// Validate phone number
document.getElementById("tel").addEventListener("focusout", validPhoneNumber);

/*
 * This section read all form inputs
 * and prevent user to go to next page
 * if there is a missing parameter
 * @ author:
 */
document.getElementById("btnNext").addEventListener("click", function () {
  // console.log("Hello from click next");
  // check page
  // get data and store it in object
});
