
let step1 = document.querySelector('.step1');
let step2 = document.querySelector('.step2');
let step3 = document.querySelector('.step3');
let step4 = document.querySelector('.step4');
let step5 = document.querySelector('.step5');
let bg = document.querySelector('.bg');

function showImage1() {
	step1.classList.remove('close');
	step1.classList.add('show');
	step5.classList.remove('show');
	step5.classList.add('close');
	bg.style.backgroundImage = "linear-gradient(0deg, yellowgreen,mediumseagreen,seagreen)";
	}

step5.addEventListener('click', showImage1)

function showImage2() {
	step2.classList.add('show');
	step1.classList.remove('show');
	step1.classList.add('close');
	bg.style.backgroundImage = "linear-gradient(0deg, deepskyblue,cornflowerblue,cadetblue)";
	console.log('step 1 was clicked');
	}

step1.addEventListener('click', showImage2)

function showImage3() {
	step3.classList.add('show');
	step2.classList.remove('show');
	bg.style.backgroundImage = "linear-gradient(180deg, cadetblue,slategray,dimgray)";
	}

step2.addEventListener('click', showImage3)

function showImage4() {
	step4.classList.add('show');
	step3.classList.remove('show');
	bg.style.backgroundImage = "linear-gradient(0deg, darkslategray,navy,midnightblue,darkslateblue)";
	}

step3.addEventListener('click', showImage4)

function showImage5() {
	step5.classList.remove('close');
	step5.classList.add('show');
	step4.classList.remove('show');
	bg.style.backgroundImage = "linear-gradient(180deg, plum,lightsalmon,gold,yellowgreen)";
}

step4.addEventListener('click', showImage5)


