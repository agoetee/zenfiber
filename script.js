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