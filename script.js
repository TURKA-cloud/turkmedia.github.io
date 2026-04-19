// HTML elemanlarını seçiyoruz
const colorBtn = document.getElementById('color-btn');
const mainTitle = document.getElementById('main-title');

// Butona tıklanınca ne olacağını tanımlıyoruz
colorBtn.addEventListener('click', function() {
    // Rastgele bir renk üretelim
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    
    // Sayfanın arka planını değiştir
    document.body.style.backgroundColor = randomColor;
    
    // Başlık metnini değiştir
    mainTitle.textContent = "Renk Değişti!";
    mainTitle.style.color = "#fff";
});

// Menü butonu için basit bir uyarı (Interaction örneği)
const menuBtn = document.getElementById('menu-toggle');
menuBtn.addEventListener('click', () => {
    alert("Mobil menü henüz yapım aşamasında!");
});