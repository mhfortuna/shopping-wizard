import { validaUsername } from "./profiePage.js";

/*
 * This section validates form of:
 * Profile page
 * @ author:
 */
// Validate username
document.getElementById("Uname").addEventListener("focusout", validaUsername);
