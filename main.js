
const imagens = [
  'banner1.jpg',
  'banner2.jpg',
  'banner3.jpg',
  'banner4.jpg',
  'banner5.jpg',
  'banner6.jpg',
  'banner7.jpg',
  'banner8.jpg',
  'banner9.jpg'
];

let indice = 0;
const banner = document.getElementById('banner-img');

setInterval(() => {
  banner.style.opacity = 0;
  setTimeout(() => {
    indice = (indice + 1) % imagens.length;
    banner.src = imagens[indice];
    banner.style.opacity = 1;
  }, 1000);
}, 4000);
