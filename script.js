let currentIndex = 0;
const slides = document.querySelectorAll('.slide-item');
const slider = document.getElementById('webSlider');

function updateSlider() {
  // Aktif sınıfını güncelle
  slides.forEach((slide, index) => {
    slide.classList.toggle('active', index === currentIndex);
  });

  // Kaydırma miktarını hesapla (her öğe 230px genişlikte varsayılır)
  const offset = -(currentIndex * 230); 
  slider.style.transform = `translateX(${offset}px)`;
}

// Klavye Tuşlarını Dinle
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
  } else if (e.key === 'ArrowLeft') {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
  } else if (e.key === 'Enter') {
    // Enter'a basınca aktif siteye git
    window.open(slides[currentIndex].querySelector('a').href, '_blank');
  }
});

// Sayfa açıldığında ilk durumu yükle
updateSlider();
