/*Progress bar */
const previousBtn = document.getElementById("previousBtn");
const nextBtn = document.getElementById("nextBtn");
const finishBtn = document.getElementById("finishBtn");
const content = document.getElementById("content-pbar");
const bullets = document.querySelectorAll(".bullet-pbar");
const bars = document.querySelectorAll(".bar-pbar");

/*Animation variables*/
let buttonpage = document.querySelectorAll(".submitbutton");
let page = document.querySelector(".maindiv");
let indexpage = 1;

/* Show hide elements */
const logo = document.querySelectorAll(".logo");
const quote = document.querySelector(".quote");
const containerPbar = document.querySelector(".container-pbar");
const footerButtons = document.querySelector(".page-buttons");
const footerSm = document.querySelector(".foot-sm");
/* Event Listeners */
for (let i = 0; i < buttonpage.length; i++) {
  buttonpage[i].addEventListener("click", changePage);
}
/* buttonpage.addEventListener('click', changePage); */

function changePage() {
  if (indexpage != 6) {
    page.style.transform = positionTranslate(indexpage);
    page.classList.add("horizTranslate");

    if (indexpage == 1) {
      /* Make footer buttons appear after page 1 */
      for (let i = 0; i < logo.length; i++) {
        logo[i].classList.toggle("hide");
      }
      quote.classList.add("hide");
      footerSm.classList.add("hide");
      containerPbar.classList.toggle("hide");
      footerButtons.classList.toggle("hide");
    } else /* Page > 1 */
    {
      if (indexpage != 4) {
        if (indexpage != 5) {
          bullets[indexpage - 1].classList.add("completed-pbar");
          bars[indexpage - 2].classList.add("bar-pbar-completed");
        } else { /* After Page 5 */
          bullets[indexpage - 2].classList.add("completed-pbar");
          bars[indexpage - 3].classList.add("bar-pbar-completed");
        }
      } else {
        footerButtons.classList.toggle("hide");
      }
    }
    indexpage += 1;
  } else 
  { /* Page 6 */
    page.style.transform = "translateX(0vw)";
    page.classList.add("horizTranslate");

    for (let i = 1; i < bullets.length; i++) {
      bullets[i].classList.remove("completed-pbar");
    }
    for (let i = 0; i < bullets.length; i++) {
      bars[i].classList.remove("completed-pbar");
    }

    indexpage = 1;
  }
}

function positionTranslate(index) {
  return "translateX(" + index * -100 + "vw)";
}
