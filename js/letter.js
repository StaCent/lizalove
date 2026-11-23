
const stars = document.getElementById('stars');

for (let i = 0; i < 75; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 4 + 's';
    stars.appendChild(star);
}

const message = `Знаешь, Лиз...

Иногда я просто смотрю на тебя и понимаю, насколько же мне повезло.

Ты стала человеком, с которым хочется делиться каждым днём, каждой глупостью, каждой радостью и даже самыми обычными моментами.

Мне нравится твоя улыбка, твой характер, твои приколы и то, как рядом с тобой даже самый обычный день становится особенным.

Я не обещаю, что каждый день будет идеальным. Но я хочу стараться делать тебя счастливой, поддерживать тебя и быть рядом.

Я хочу с тобой ещё миллион фотографий, тысячи воспоминаний, спонтанных поездок, смешных историй и тихих вечеров.

И знаешь, котёночек...

Когда я думаю о будущем, мне очень нравится мысль, что в нём есть ты.

Спасибо, что ты есть у меня.

Я очень сильно тебя люблю. ❤️`;

const target = document.getElementById('letterContent');
const continueText = document.getElementById('continue');
const signature = document.querySelector('.signature');

let index = 0;
let finished = false;

function typeText() {
    if (index < message.length) {
        target.textContent += message[index];
        index++;

        // Камера плавно следует за печатающимся письмом, когда текст
        // подходит к нижней части экрана.
        const textBottom = target.getBoundingClientRect().bottom;
        const cameraLine = window.innerHeight * 0.78;
        if (textBottom > cameraLine) {
            window.scrollBy(0, Math.min(textBottom - cameraLine, 24));
        }

        setTimeout(typeText, 35);
    } else {
        finished = true;
        signature.classList.add('show');
        continueText.classList.add('show');
    }
}

setTimeout(typeText, 1600);

let navigating = false;

document.getElementById('paper').addEventListener('click', () => {
    if (!finished || navigating) return;

    navigating = true;
    document.body.classList.add('leaving');

    setTimeout(() => {
        window.location.href = 'memories.html';
    }, 800);
});
