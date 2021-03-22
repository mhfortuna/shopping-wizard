// button from html //
let btn = document.getElementById("btn");

let display;
// hold timer //
let timerResult;
//counter
let counterTime = 0;
// innerhtml code
let htmlCode1 = `
    <article class="timer" id="timer">
        <span>You started registering</span><br>
        <span class="minutes"> 1 minute ago</span><br><br>
        <p>Hurry up!</p>
    </article>`
    let htmlCode2 = `
    <article class="timer" id="timer">
        <span>You started registering</span><br>
        <span class="minutes"> 2 minutes ago</span><br><br>
        <p>Hurry up!</p>
    </article>`
    let htmlCode3 = `
    <article class="timer" id="timer">
        <span>You started registering</span><br>
        <span class="minutes"> 3 minutes ago</span><br><br>
        <p>Hurry up!</p>
    </article>`
    let htmlCode4 = `
    <article class="timer" id="timer">
        <span>You started registering</span><br>
        <span class="minutes"> 4 minutes ago</span><br><br>
        <p>Hurry up!</p>
    </article>`
// start timer listener

btn.addEventListener('click' , function(e){
    e.preventDefault;
    timerResult = setInterval(() => {
        console.log("your registration took: " + format(counterTime));
        counterTime++;
        document.querySelector(".tested").innerHTML = timeFormat(counterTime);
}, 1000);
    setTimeout(() => {
        document.querySelector(".product-page").innerHTML+= htmlCode1;
    }, 5000);
    setTimeout(() => {
        document.getElementById("timer").remove();
    }, 65000);
    setTimeout(() => {
        document.querySelector(".product-page").innerHTML+= htmlCode2;
    }, 120000);
    setTimeout(() => {
        document.getElementById("timer").remove();
    }, 125000);
    setTimeout(() => {
        document.querySelector(".product-page").innerHTML+= htmlCode3;
    }, 180000);
    setTimeout(() => {
        document.getElementById("timer").remove();
    }, 185000);
    setTimeout(() => {
        document.querySelector(".product-page").innerHTML+= htmlCode4;
    }, 240000);
    setTimeout(() => {
        document.getElementById("timer").remove();
    }, 245000);
    setTimeout(() => {
        stoptimer()
    }, 299999);
});

function stoptimer() {

    clearInterval(timerResult)
}
function format(time) {
    // Hours, minutes and seconds
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = ~~time % 60;

    var ret = "";
    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }
    ret += "" + mins + " minutes and " + (secs < 10 ? "0" : "");
    ret += "" + secs+ " seconds";
    return ret;
}

// codigo para agregar cuando se merge la pagina
//document.getElementById("myForm").reset();

