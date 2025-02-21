let arrowLeft = document.querySelector('.arrow-left');
let arrowRight = document.querySelector('.arrow-right');
let slider = document.querySelector('.slider');
let slides = document.querySelectorAll('.slider img');
let footerSlider = document.querySelector('.slider-footer');

let sliderWidth = slider.clientWidth;
let currentSlideIndex = 0;
let circles = [];

function createCircle () {
	const div = document.createElement('div');
	div.className = 'circle';
	footerSlider.appendChild(div);
	circles.push(div);
}

function addCircle () {
	slides.forEach(createCircle);
	circles[0].classList.add('active');
	circles.forEach((circle, index) => {
		circle.addEventListener('click', () => changeSlide(index));
  });
}

addCircle();

function changeSlide(SlideIndex) {
	circles[currentSlideIndex].classList.remove('active');
	currentSlideIndex = SlideIndex;
	circles[currentSlideIndex].classList.add('active');
	slider.style.transform = `translateX(-${currentSlideIndex * sliderWidth}px)`;
}

arrowRight.addEventListener('click', () => {
	let newSlideIndex = currentSlideIndex + 1;
	if (newSlideIndex > slides.length-1) {
		newSlideIndex = 0;
	}
	changeSlide(newSlideIndex);
});

arrowLeft.addEventListener('click', () => {
	let newSlideIndex = currentSlideIndex - 1;
	if (newSlideIndex < 0) {
		newSlideIndex = slides.length-1;
	}
	changeSlide(newSlideIndex);
});

console.log(arrowLeft, arrowRight);