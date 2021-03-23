import { validaUsername } from "./profiePage.js";
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
document.getElementById("email").addEventListener("focusout", validaUsername);

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
