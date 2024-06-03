
// IMAGE-SLIDER //
const imgs = document.getElementById('imgs');

const img = document.querySelectorAll('#imgs img');

let i = 0;


function run() {
	i++;

	if (i > img.length - 1) {
		i = 0;
	}
  const imageWidth = img[0].clientWidth;

	imgs.style.transform = `translateX(${-i * imageWidth}px)`;
}

setInterval(run, 3000);

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

  // Intersection Observer
  let options = {
    threshold: 0.1
  };
  
  let callback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let id = entry.target.id;
        if (id === "count1") {
          counter("count1", 0, 505, 4000);
        } else if (id === "count2") {
          counter("count2", 0, 4, 2500);
        } else if (id === "count3") {
          counter("count3", 0, 18, 3000);
        }
        observer.unobserve(entry.target); // Stop observing after the counter starts
      }
    });
  };

  let observer = new IntersectionObserver(callback, options);

  document.querySelectorAll("#count1, #count2, #count3").forEach(counterElement => {
    observer.observe(counterElement);
  });
});

// ANIMATED COUNTER 2

// CONTACT FORM EMAIL VALIDATION

function validateEmail() {
  var emailID = document.contactForm.Email.value;
  theAt = emailID.indexOf("@");
  theDot = emailID.lastIndexOf(".");

  if (theAt < 1 || (theDot - theAt < 2) ) {
    alert("The email address is still not ok")
    document.contactForm.Email.focus();
    return false;
  }
  return true;
}

// CONTACT FORM EMAIL VALIDATION


// To Top button

document.addEventListener("DOMContentLoaded", () => {
  const toTopButton = document.getElementById('to-top');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) { // Adjust this value to your needs
      toTopButton.style.display = 'block';
    } else {
      toTopButton.style.display = 'none';
    }
  });

  toTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});