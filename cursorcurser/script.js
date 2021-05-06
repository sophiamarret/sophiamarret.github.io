let myImages = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png", "11.png", "12.png", "13.png", "14.png", "15.png", "16.png", "17.png", "18.png"]

document.addEventListener('click', curse)

function curse() {
	console.log("curse function")
	let random = Math.floor(Math.random() * myImages.length);
    document.body.innerHTML = '<img class="words" src="' + myImages [random] + '">';
  }


if ('screen' in window && 'orientation' in screen) {
		screen.orientation.addEventListener('change', rotate);
		} 
else {
		window.addEventListener('orientationchange', rotate);
		}

let tap = document.querySelector(".tap")

function rotate(event) {
	document.querySelector("#id1").style.display = "none";
	document.querySelector("#id2").style.display = "none";
	tap.style.display = "block";
}

let mobileImages = ["a.jpg", "b.jpg", "c.jpg"]

let inMobile = window.matchMedia('screen and (max-width: 812px)');

if (inMobile.matches) {
	document.removeEventListener('click', curse);
	document.addEventListener('touchstart', flip);

function flip() {
	console.log("flip function")
	document.body.style.backgroundColor = "#FAFF00";
	let randomMobile = Math.floor(Math.random() * mobileImages.length);
    document.body.innerHTML = '<img class="flips" src="' + mobileImages [randomMobile] + '">';
}
}

// let myCursor = document.querySelector("#cursor");

// window.addEventListener("mousemove", function(event)
// {
// 	console.log(event);
// 	console.log("X: ");
// 	console.log(event.pageX);
// 	console.log("Y :");
// 	console.log(event.pageY);
// 	myCursor.style.top = (event.pageY - 20) + "px";
// 	myCursor.style.left = (event.pageX - 20) + "px";
// });