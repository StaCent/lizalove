
const stars = document.getElementById('stars');

for (let i = 0; i < 90; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 4 + 's';
    stars.appendChild(star);
}

const video = document.getElementById('ourVideo');
const soundButton = document.getElementById('soundButton');

// Автоматический запуск без звука
video.muted = true;

video.play().catch(() => {
    soundButton.textContent = '▶ Нажми, чтобы посмотреть';
});

soundButton.addEventListener('click', async () => {
    if (video.paused) {
        await video.play();
    }

    video.muted = false;
    soundButton.textContent = '♥ Звук включён';
    soundButton.classList.add('sound-active');
});

video.addEventListener('ended', () => {
    document.querySelector('.video-ending').classList.add('show');
});
