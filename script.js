document.addEventListener('contextmenu', event => event.preventDefault());

const images = [
  { url: 'img/1.png', name: 'Brimstone', origin: "50% 99%" },
  { url: 'img/2.png', name: 'Phoenix', origin: "60% 99%" },
  { url: 'img/3.png', name: 'Sage', origin: "55% 99%" },
  { url: 'img/4.png', name: 'Sova', origin: "50% 99%" },
  { url: 'img/5.png', name: 'Viper', origin: "50% 99%" },
  { url: 'img/6.png', name: 'Cypher', origin: "50% 99%" },
  { url: 'img/7.png', name: 'Reyna', origin: "55% 99%" },
  { url: 'img/8.png', name: 'Killjoy', origin: "55% 99%" },
  { url: 'img/9.png', name: 'Breach', origin: "60% 99%" },
  { url: 'img/10.png', name: 'Omen', origin: "50% 99%" },
  { url: 'img/11.png', name: 'Jett', origin: "75% 99%" },
  { url: 'img/12.png', name: 'Raze', origin: "60% 99%" },
  { url: 'img/13.png', name: 'Skye', origin: "50% 99%" },
  { url: 'img/14.png', name: 'Yoru', origin: "60% 99%" },
  { url: 'img/15.png', name: 'Astra', origin: "30% 99%" },
  { url: 'img/16.png', name: 'Kayo', origin: "50% 99%" },
  { url: 'img/17.png', name: 'Chamber', origin: "50% 99%" },
  { url: 'img/18.png', name: 'Neon', origin: "25% 99%" },
  { url: 'img/19.png', name: 'Fade', origin: "50% 99%" },
  { url: 'img/20.png', name: 'Harbor', origin: "50% 99%" },
  { url: 'img/21.png', name: 'Gekko', origin: "45% 99%" },
  { url: 'img/22.png', name: 'Deadlock', origin: "55% 99%" },
  { url: 'img/23.png', name: 'Clove', origin: "50% 60%" },
  { url: 'img/24.png', name: 'Iso', origin: "45% 99%" },
  { url: 'img/25.png', name: 'Vyse', origin: "50% 99%" }
];

// Gösterilen resimleri takip edeceğimiz dizi
let shownImages = [];

let currentImageIndex = 0;
let currentScale = 4;

const playBtn = document.getElementById("play-btn");
const imageContainer = document.getElementById("image-container");
const image = document.getElementById("image");
const guessInput = document.getElementById("guess-input");
const nxtBtn = document.getElementById("next-btn");

imageContainer.addEventListener("dragstart", (event) => {
  event.preventDefault();
});

playBtn.addEventListener("click", () => {
  showNextImage();
  imageContainer.style.display = "block";
  playBtn.style.display = "none";
  guessInput.style.display = "block";
  nxtBtn.style.display = "block";
});

guessInput.addEventListener("change", () => {
  const guess = guessInput.value.toLowerCase();

  if (guess === images[currentImageIndex].name.toLowerCase()) {
    image.style.transform = "scale(1)";
    currentScale = 4;
    alert("Dogru Tahmin!");
    guessInput.value = "";
    guessInput.disabled = true;
  } else {
    image.style.transformOrigin = images[currentImageIndex].origin;
    image.style.transform = `scale(${currentScale})`;
    imageContainer.style.border = "5px solid red";
    setTimeout(() => {
      imageContainer.style.border = "5px solid #fff";
    }, 500);
    guessInput.value = "";
    currentScale = currentScale - 0.3;
    if (currentScale < 1) {
      currentScale = 4;
    }
  }
});

nxtBtn.addEventListener("click", () => {
  guessInput.value = "";
  guessInput.disabled = false;
  showNextImage();
});

// Bir sonraki resmi gösteren fonksiyon
function showNextImage() {
  if (shownImages.length === images.length) {
    alert("Tebrikler, Tum resimler gösterildi!");
    return;
  }
  
  do {
    currentImageIndex = Math.floor(Math.random() * images.length);
  } while (shownImages.includes(currentImageIndex));

  shownImages.push(currentImageIndex);

  image.style.display = "none";
  image.style.transformOrigin = images[currentImageIndex].origin;
  image.style.transform = `scale(4)`;
  image.src = images[currentImageIndex].url;
  image.alt = images[currentImageIndex].name;

  setTimeout(() => {
    image.style.display = "block";
  }, 500);
}
