
const stars = document.getElementById('stars');

for (let i = 0; i < 110; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 4 + 's';
    stars.appendChild(star);
}

const area = document.getElementById('envelopeArea');
const envelope = document.getElementById('envelope');
const hint = document.getElementById('hint');

let opened = false;

area.addEventListener('click', () => {
    if (opened) return;
    opened = true;

    envelope.classList.add('open');
    hint.textContent = 'ОДНО МАЛЕНЬКОЕ ПОСЛАНИЕ ДЛЯ ТЕБЯ...';

    setTimeout(() => {
        document.body.classList.add('leaving');

        setTimeout(() => {
            window.location.href = 'letter.html';
        }, 800);

    }, 2200);
});
