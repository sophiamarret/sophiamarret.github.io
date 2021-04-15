let step5 = document.querySelector('#step5');

function showImage() {
	step5.classList.add('show')
	console.log('step 1 was clicked');
	
}

function closeImage() {
	step5.classList.remove('show')
}

let step1 = document.querySelector('#step1')
step1.addEventlistener('click', showImage)

