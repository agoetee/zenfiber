
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

// IMAGE-SLIDER //


// ANIMATED COUNTER 2
document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
    current = start,
    range = end - start,
    increment = end > start ? 1 : -1,
    step = Math.abs(Math.floor(duration / range)),
    timer = setInterval(() => {
      current += increment;
      obj.textContent = current;
      if (current == end) {
        clearInterval(timer);
      }
    }, step);
  }
  counter("count1", 0, 5500, 4000);
  counter("count2", 0, 4, 2500);
  counter("count3", 0, 20, 3000);
});

// ANIMATED COUNTER 2