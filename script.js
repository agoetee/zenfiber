const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttrubute('data-target');
		const count = +counter.innerText;

		const inc = target / speed;

		console.log(inc);
	}

	updateCount();
});


// IMAGE-SLIDER //
const imgs = document.getElementById('imgs');

const img = document.querySelectorAll('#imgs img');

let idx = 0;


function run() {
	idx++;

	if (idx > img.length - 1) {
		idx = 0;
	}

	imgs.style.transform = `translateX(${-idx * 500}px)`;
}

setInterval(run, 2000);
