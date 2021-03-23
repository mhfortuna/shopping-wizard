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
 * This function validates username input
 * from profile page
 * @ author:
 */
export function validaUsername() {
  // get DOM elements
  const x = document.getElementById("Uname");
  const xLabel = document.querySelector('label[for="Uname"]');
  const xp = document.querySelector(".p-Uname");
  // toggle classes
  if (x.value == "") {
    addClasses(x, xLabel, xp);
  } else {
    removeClasses(x, xLabel, xp);
  }
  return false;
}

/*
 * This function validates Email input
 * from profile page
 * @ author:
 */
