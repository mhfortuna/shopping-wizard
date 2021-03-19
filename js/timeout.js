// button from html //
let btn = document.getElementById("btn");
// work time from html //
let display = document.getElementById("timeResult");
// hold timer //
let timerResult;
//counter
let counterTime = 0;

// start work listener

btn.addEventListener('click' , function(e){
    e.preventDefault;
    timerResult = setInterval(() => {
        counterTime++;
    timeResult.innerHTML = "llevas 1 minuto";
}, 1000);
})
/*
//display the timeformat
let timerFormat = function(counter) {
    let displayTime = function (counter) {
        if (counter === 60000){
            return "0"+counter;
        }
        else {
            return counter;
        }
    }
    return
}*/


