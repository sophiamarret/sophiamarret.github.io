let myImages = ["fuck", "shit", "bitch", "ass"]

document.querySelector("#id1").addEventListener('click', curse)

function curse() {
	console.log("function")
	// let randomImg = random(myImages)
	let images = document.getElementsByTagName("IMG");
	for(i = 0; i < images.length; i ++){
		images[i].style.display = "none"
	}
	let random = Math.floor(Math.random() * myImages.length);
    if (random == 0) {
            random = 1;
    }
    document.write('<img class="words" src="' + myImages [random] + '">');
  	// let img = document.getElementById()
  	// img.style.display="inline-block"
  }


	if ('screen' in window && 'orientation' in screen) {
		screen.orientation.addEventListener('change', rotate);
		} 
	else {
		window.addEventListener('orientationchange', rotate);
		}
function rotate(event) {
	document.querySelector("#id1").style.display = "none";
	document.querySelector("#id2").style.display = "none";
	document.querySelector(".tap").style.display = "block";
}

document.querySelector(".tap").addEventListener('click', flip)

function flip() {
	console.log("yuh")
}