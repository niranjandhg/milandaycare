const galleryImages = document.querySelectorAll('.gallery-grid img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('closeBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function showImage(index) {
  currentIndex = index;
  lightboxImg.src = galleryImages[currentIndex].src;
  lightbox.style.display = 'flex';
}

function closeLightbox() {
  lightbox.style.display = 'none';
}

function navigate(dir) {
  currentIndex = (currentIndex + dir + galleryImages.length) % galleryImages.length;
  lightboxImg.src = galleryImages[currentIndex].src;
}

galleryImages.forEach((img, index) => {
  img.addEventListener('click', () => showImage(index));
});

closeBtn.addEventListener('click', closeLightbox);
prevBtn.addEventListener('click', () => navigate(-1));
nextBtn.addEventListener('click', () => navigate(1));

document.addEventListener('keydown', (e) => {
  if (lightbox.style.display === 'flex') {
    if (e.key === 'ArrowLeft') navigate(-1);
    if (e.key === 'ArrowRight') navigate(1);
    if (e.key === 'Escape') closeLightbox();
  }
});
const hamburger = document.getElementById('hamburger');
  const nav = document.querySelector('nav');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
  });