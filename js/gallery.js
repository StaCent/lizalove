
const stars = document.getElementById('stars');

for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 4 + 's';
    stars.appendChild(star);
}

const photos = [
    'photo1.JPG',
    'photo2.jpeg',
    'photo3.JPG',
    'photo4.JPG',
    'photo5.JPG',
    'photo6.JPG'
];

const gallery = document.getElementById('gallery');

photos.forEach((filename, index) => {
    const card = document.createElement('div');
    card.className = 'photo-card';

    const img = document.createElement('img');
    img.src = 'assets/' + filename;
    img.alt = 'Наше воспоминание';

    card.appendChild(img);
    gallery.appendChild(card);

    // Карточки сразу занимают своё место в сетке: ничего не появляется
    // со смещением вниз и не меняет положение относительно прокрутки.
    card.classList.add('show');
});

// Увеличение фотографии при нажатии

gallery.addEventListener('click', event => {
    if (event.target.tagName !== 'IMG') return;

    const img = event.target;

    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position:fixed;
        inset:0;
        z-index:100;
        background:#12051df2;
        display:flex;
        align-items:center;
        justify-content:center;
        padding:20px;
        cursor:pointer;
        animation:pageEnter .5s ease;
    `;

    const enlarged = document.createElement('img');
    enlarged.src = img.src;
    enlarged.style.cssText = `
        max-width:95%;
        max-height:90vh;
        object-fit:contain;
        border:7px solid #fff8ed;
        box-shadow:0 0 60px #ff83b5;
    `;

    overlay.appendChild(enlarged);
    document.body.appendChild(overlay);

    overlay.addEventListener('click', () => overlay.remove());
});
