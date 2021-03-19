const  previousBtn  =  document.getElementById('previousBtn');
const  nextBtn  =  document.getElementById('nextBtn');
const  finishBtn  =  document.getElementById('finishBtn');
const  content  =  document.getElementById('content-pbar');
const  bullets  =  document.querySelectorAll('.bullet-pbar');
const  bars  =  document.querySelectorAll('.bar-pbar');

const MAX_STEPS = 4;
let currentStep = 1;

nextBtn.addEventListener('click',  ()  =>  {
	bullets[currentStep ].classList.add('completed-pbar');
	bars[currentStep  -  1].classList.add('bar-pbar-completed');
	currentStep  +=  1;
    /* bullets[currentStep  -  1].style.backgroundColor = "#000e"; */
	previousBtn.disabled  =  false;
	if  (currentStep  ===  MAX_STEPS)  {
		nextBtn.disabled  =  true;
		finishBtn.disabled  =  false;
	}
	content.innerText  =  `Step Number ${currentStep}`;
});


previousBtn.addEventListener('click',  ()  =>  {
	bullets[currentStep  -  1].classList.remove('completed-pbar');
	bars[currentStep  -  2].classList.remove('bar-pbar-completed');
    /* bullets[currentStep  -  1].style.backgroundColor = "transparent"; */
	currentStep  -=  1;
	nextBtn.disabled  =  false;
	finishBtn.disabled  =  true;
	if  (currentStep  ===  1)  {
		previousBtn.disabled  =  true;
	}
	content.innerText  =  `Step Number ${currentStep}`;
});

finishBtn.addEventListener('click',  ()  =>  {
	location.reload();
});