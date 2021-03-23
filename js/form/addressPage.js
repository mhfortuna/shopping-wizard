/*
 * This function add classes to form elements
 * @ author:
 */
function addClasses(input, label, p) {
  input.classList.add("input-form-error");
  label.classList.add("label-form-error");
  p.classList.remove("hide");
  return false;
}

/*
 * This function removes classes to form elements
 * @ author:
 */
function removeClasses(input, label, p) {
  input.classList.remove("input-form-error");
  label.classList.remove("label-form-error");
  p.classList.add("hide");
  return false;
}

/*
 * This function validates first name input
 * from adress page
 * @ author:
 */
export function validFirstName() {
  // get DOM elements
  const x = document.getElementById("fname");
  const xLabel = document.querySelector('label[for="Fname"]');
  const xp = document.querySelector(".p-fname");
  // toggle classes
  if (x.value == "") {
    addClasses(x, xLabel, xp);
  } else {
    removeClasses(x, xLabel, xp);
  }
}

/*
 * This function validates last name input
 * from adress page
 * @ author:
 */
export function validLastName() {
  // get DOM elements
  const x = document.getElementById("lname");
  const xLabel = document.querySelector('label[for="Lname"]');
  const xp = document.querySelector(".p-lname");
  // toggle classes
  if (x.value == "") {
    addClasses(x, xLabel, xp);
  } else {
    removeClasses(x, xLabel, xp);
  }
}

/*
 * This function validates birthday input
 * from adress page
 * @ author:
 */
export function validBirthday() {
  // get DOM elements
  const x = document.getElementById("Birthday");
  const xLabel = document.querySelector('label[for="Birthday"]');
  const xp = document.querySelector(".p-birthday");
  // toggle classes
  if (!x.validity.valid) {
    addClasses(x, xLabel, xp);
  } else {
    removeClasses(x, xLabel, xp);
  }
}

/*
 * This function validates address1 input
 * from adress page
 * @ author:
 */
export function validAdress() {
  // get DOM elements
  const x = document.getElementById("address1");
  const xLabel = document.querySelector('label[for="address1"]');
  const xp = document.querySelector(".p-address1");
  // toggle classes
  if (!x.validity.valid) {
    addClasses(x, xLabel, xp);
  } else {
    removeClasses(x, xLabel, xp);
  }
}