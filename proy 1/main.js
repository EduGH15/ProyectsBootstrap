const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app,{
    loop: true,
    delay:75
});

typewriter.typeString('La capital del Sol');
typewriter.pauseFor(200);
typewriter.start();
