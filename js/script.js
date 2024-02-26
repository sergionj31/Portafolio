let app = document.querySelector('.typewriter');

let typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
});

typewriter
    .pauseFor(2500)
    .typeString('Front - End Developer')
    .pauseFor(2500)
    .deleteChars(100)
    .start();

let previousTitle = document.title;

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        previousTitle = document.title;
        document.title = '¡No te vayas! ¡Vuelve! 😱';
    } else {
        document.title = previousTitle;
    }
});
