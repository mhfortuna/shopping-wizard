import { validaUsername } from "./profiePage.js";
import { validFirstName } from "./profiePage.js";
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
