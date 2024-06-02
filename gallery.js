const imageLinks=[
  "./img/working/financeVisit1.jpeg",
  "./img/working/cableStart.jpg",
  "./img/working/digging.jpg",
  "./img/working/legalVisit.jpeg",
  "./img/working/height.jpg",
  "./img/working/splice.jpg",
  "./img/working/pulling.jpg",
  "./img/working/drumIdle.jpg",
  "./img/working/cellCite.jpeg",
  "./img/working/cableStart1.jpg",
  "./img/working/survey.jpg",
  "./img/working/uncoil2.jpg",
  "./img/working/trainingVodafone.jpg",
  "./img/working/uncoil1.jpg",
  "./img/working/trainingVodafone2.jpg",
  "./img/working/trainingVodafone1.jpg",
  "./img/working/watTraining4.jpg",
  "./img/working/sunyani.jpg",
  "./img/working/midUncoil1.png",
  "./img/working/tema.jpg",
  "./img/working/watTraining3.jpg",
  "./img/working/midUncoil2.jpg",
  "./img/working/our_work2.jpg",
  "./img/working/watTraining1.jpg",
  "./img/working/watTraining2.jpg",
  "./img/working/splice1.jpeg",
  "./img/working/watTraining5.jpg",
  "./img/working/watTraining6.jpg",
  "./img/working/financeVisit.jpeg",
  "./img/working/uncoil.jpg",
  "./img/working/trainingVodafone3.jpg",
  "./img/working/startCable.jpg",
]

const imageAlts=[
  "finance Visit",
  "cable start",
  "digging",
  "Legal Visit",
  "Height",
  "Splice",
  "Pulling",
  "Drum Idle",
  "CellCite",
  "Cable Start",
  "Survey",
  "Uncoiling 2",
  "Vodafone Training",
  "Uncoiling 1",
  "Vodafone Training",
  "Vodafone Training",
  "Wat Training",
  "Sunyani Work",
  "Mid Uncoil",
  "Tema Work",
  "Wat Training",
  "Mid Uncoil",
  "Our Work",
  "Wat Training",
  "Wat Training",
  "Splice",
  "Wat Training",
  "Wat Training",
  "Finance Visit",
  "Uncoil",
  "Vodafone Training",
  "Start Cable"
]


document.addEventListener('DOMContentLoaded', function() {
  const imgContainer = document.getElementById('imageContainer');

  for (let i = 1; i < 32; i++){
      const clone = imgContainer.firstElementChild.cloneNode(true); 
      const clonedImage = clone.querySelector('img');
      clonedImage.src = imageLinks[i]; 
      clonedImage.alt = imageAlts[i]; 
      clonedImage.loading='lazy';
      imgContainer.appendChild(clone); 
  }
});

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