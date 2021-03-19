// button from html //
const btn = document.getElementById("btn");
// work time from html //
let timeResult = document.getElementById("timeResult");
// hold timer //
let timerResult;
//counter
let counterTime = 0;

// start work listener

btn.addEventListener('click' , function(e){
    e.preventDefault;
    timerResult = setInterval(() => {
        counterTime++;
    timeResult.innerHTML = timerFormat(counterTime);
}, 1000);
})

//display the timeformat
let timeFormat = function(counter) {
    let displayTime = function (counter) {
        if (counter < 10){
            return "0"+counter;
        }
        else {
            return counter;
        }
    }
    return [
        displayTime(math.floor(counter/ 3600)),
        displayTime(math.floor(counter % 3600/60)),
        displayTime(math.floor(counter % 60))
    ].join(' : ');
}
