const imageLinks=[
  "./working/financeVisit1.jpeg",
  "./working/cableStart.jpg",
  "./working/digging.jpg",
  "./working/legalVisit.jpeg",
  "./working/height.jpg",
  "./working/splice.jpg",
  "./working/pulling.jpg",
  "./working/drumIdle.jpg",
  "./working/cellCite.jpeg",
  "./working/cableStart1.jpg",
  "./working/survey.jpg",
  "./working/uncoil2.jpg",
  "./working/trainingVodafone.jpg",
  "./working/uncoil1.jpg",
  "./working/trainingVodafone2.jpg",
  "./working/trainingVodafone1.jpg",
  "./working/watTraining4.jpg",
  "./working/sunyani.jpg",
  "./working/midUncoil1.png",
  "./working/tema.jpg",
  "./working/watTraining3.jpg",
  "./working/midUncoil2.jpg",
  "./working/our_work2.jpg",
  "./working/watTraining1.jpg",
  "./working/watTraining2.jpg",
  "./working/splice1.jpeg",
  "./working/watTraining5.jpg",
  "./working/watTraining6.jpg",
  "./working/financeVisit.jpeg",
  "./working/uncoil.jpg",
  "./working/trainingVodafone3.jpg",
  "./working/startCable.jpg",
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
      clonedImage.dataset.index = i;
      imgContainer.appendChild(clone); 
  }

  initializeModalFunctionality(); 

});


function initializeModalFunctionality() {
  let galleryItems = document.querySelectorAll('.gallery-item');
  let modal = document.getElementById('imageModal');
  let modalImg = document.getElementById('modalImage');
  let currentIndex;


  galleryItems.forEach((item, index) => {
      item.addEventListener('click', function() {
          currentIndex = index;
          modalImg.src = this.src;
      });
  });

  // Changes images in the modal
  window.changeImage = function(n) {
      currentIndex += n;

      
      if (currentIndex >= galleryItems.length) {
          currentIndex = 0;
      } else if (currentIndex < 0) {
          currentIndex = galleryItems.length - 1;
      }

      modalImg.src = galleryItems[currentIndex].src;
  };
}



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