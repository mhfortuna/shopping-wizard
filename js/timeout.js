//counter
let totalTime = 0;
let counterTime = 0;

/*
 * This function updates html elements
 * @ author:
 */
function insertTimer(counter, element, timeRemove = 3000) {
  // innerhtml code
  let htmlCode = `
        <article class="timer" id="timer">
            <span>You started registering</span><br>
            <span class="minutes"> ${counter / 60} minute ago</span><br><br>
            <p>Hurry up!</p>
        </article>`;
  element.insertAdjacentHTML("afterbegin", htmlCode);
  setTimeout(() => {
    document.getElementById("timer").remove();
  }, timeRemove);
}

/*
 * This function stops timer
 * @ author:
 */
function stoptimer() {
  clearInterval(timerResult);
}

/*
 * This function forms the string
 * to disply total timer
 * @ author:
 */
function format(time) {
  // Hours, minutes and seconds
  let hrs = ~~(time / 3600);
  let mins = ~~((time % 3600) / 60);
  let secs = ~~time % 60;
  let ret = "";
  if (hrs > 0) {
    ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
  }
  ret += "" + mins + " minutes and " + (secs < 10 ? "0" : "");
  ret += "" + secs + " seconds";
  return ret;
}

// codigo para agregar cuando se merge la pagina
//document.getElementById("myForm").reset();
